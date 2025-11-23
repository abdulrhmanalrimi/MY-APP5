import { APP_TITLE } from "@/const";
import { LESSONS, Question } from "@shared/const";
import { ArrowLeft, CheckCircle, XCircle, Play, Download } from "lucide-react";
import { Link, useRoute } from "wouter";
import { Streamdown } from "streamdown";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useProgress } from "@/hooks/useProgress";
import { useSoundEffects } from "@/hooks/useSoundEffects";
import MotivationalDialog from "@/components/MotivationalDialog";
import Footer from "@/components/Footer";
import NotesSection from "@/components/NotesSection";
import { generateLessonPDF } from "@/utils/generatePDF";

const LessonPage = () => {
  const [match, params] = useRoute("/lesson/:id");
  const lessonId = params ? parseInt(params.id) : 0;
  const lesson = LESSONS.find((l) => l.id === lessonId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | string[] | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [showExitDialog, setShowExitDialog] = useState(false);
  const [showCompleteDialog, setShowCompleteDialog] = useState(false);

  const { markLessonComplete, isLessonCompleted } = useProgress();
  const { playCorrectSound, playIncorrectSound, playLessonCompleteSound } = useSoundEffects();

  if (!lesson) {
    return (
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">الدرس غير موجود</h1>
        <Link href="/lessons">
          <Button className="mt-4">العودة إلى الدروس</Button>
        </Link>
      </div>
    );
  }

  const currentQuestion = lesson.quiz[currentQuestionIndex];
  const lessonAlreadyCompleted = isLessonCompleted(lessonId);

  const handleAnswerSelection = (answer: string) => {
    if (!isAnswered) {
      if (currentQuestion.type === 'single-choice' || currentQuestion.type === 'fill-in-blank') {
        setSelectedAnswer(answer);
      } else if (currentQuestion.type === 'multiple-choice') {
        const currentSelection = Array.isArray(selectedAnswer) ? selectedAnswer : [];
        if (currentSelection.includes(answer)) {
          setSelectedAnswer(currentSelection.filter(a => a !== answer));
        } else {
          setSelectedAnswer([...currentSelection, answer]);
        }
      }
    }
  };

  const checkAnswer = () => {
    if (!selectedAnswer) return;

    setIsAnswered(true);
    let isCorrect = false;

    if (currentQuestion.type === 'single-choice' || currentQuestion.type === 'fill-in-blank') {
      isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    } else if (currentQuestion.type === 'multiple-choice') {
      const correctAnswers = Array.isArray(currentQuestion.correctAnswer) ? currentQuestion.correctAnswer.sort() : [];
      const userAnswers = Array.isArray(selectedAnswer) ? selectedAnswer.sort() : [];
      isCorrect = correctAnswers.length === userAnswers.length && correctAnswers.every((val, index) => val === userAnswers[index]);
    }

    if (isCorrect) {
      setScore(prev => prev + 1);
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    if (currentQuestionIndex < lesson.quiz.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
      if (!lessonAlreadyCompleted) {
        markLessonComplete(lessonId, score + (isAnswered ? 1 : 0), lesson.quiz.length);
        playLessonCompleteSound();
        setShowCompleteDialog(true);
      }
    }
  };

  const renderQuestion = (question: Question) => {
    const isCorrectAnswer = (answer: string) => {
      if (question.type === 'single-choice' || question.type === 'fill-in-blank') {
        return answer === question.correctAnswer;
      } else if (question.type === 'multiple-choice') {
        return Array.isArray(question.correctAnswer) && question.correctAnswer.includes(answer);
      }
      return false;
    };

    const isUserSelected = (answer: string) => {
      if (Array.isArray(selectedAnswer)) {
        return selectedAnswer.includes(answer);
      }
      return selectedAnswer === answer;
    };

    return (
      <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          السؤال {currentQuestionIndex + 1} من {lesson.quiz.length}
        </h3>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">{question.question}</p>

        {question.type === 'single-choice' || question.type === 'multiple-choice' ? (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              let className = "p-3 border rounded-lg cursor-pointer transition duration-200 flex justify-between items-center";
              
              if (isAnswered) {
                if (isCorrectAnswer(option)) {
                  className += " border-green-500 bg-green-50 dark:bg-green-900/50";
                } else if (isUserSelected(option)) {
                  className += " border-red-500 bg-red-50 dark:bg-red-900/50";
                } else {
                  className += " border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700";
                }
              } else {
                className += isUserSelected(option) ? " border-emerald-500 bg-emerald-50 dark:bg-emerald-900/50" : " border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700";
              }

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => handleAnswerSelection(option)}
                >
                  <span className="text-gray-800 dark:text-gray-100">{option}</span>
                  {isAnswered && isCorrectAnswer(option) && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {isAnswered && isUserSelected(option) && !isCorrectAnswer(option) && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">نوع السؤال {question.type} غير مدعوم حاليًا.</p>
        )}

        {!isAnswered && (
          <Button onClick={checkAnswer} disabled={!selectedAnswer} className="mt-6 w-full bg-emerald-500 hover:bg-emerald-600 text-white">
            تأكيد الإجابة
          </Button>
        )}

        {isAnswered && (
          <div className="mt-6">
            <h4 className="font-bold text-lg text-emerald-600 dark:text-emerald-400">الشرح والتغذية الراجعة:</h4>
            <p className="text-gray-700 dark:text-gray-200 mt-2">{question.explanation}</p>
            <Button onClick={nextQuestion} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white">
              {currentQuestionIndex < lesson.quiz.length - 1 ? "السؤال التالي" : "إنهاء الاختبار"}
            </Button>
          </div>
        )}
      </div>
    );
  };

  const renderQuizResult = () => (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">نتائج الاختبار</h3>
      <p className="text-xl text-gray-700 dark:text-gray-200">
        لقد أكملت اختبار درس "{lesson.title}".
      </p>
      <p className="text-3xl font-extrabold mt-4">
        النتيجة: {score} / {lesson.quiz.length}
      </p>
      {!lessonAlreadyCompleted && (
        <p className="text-lg text-emerald-600 dark:text-emerald-400 mt-4">
          🎉 تم حفظ تقدمك!
        </p>
      )}
      <Link href="/lessons">
        <Button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white">العودة إلى الدروس</Button>
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
        <header className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800 gap-2">
        <button 
          onClick={() => setShowExitDialog(true)}
          className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition duration-200"
        >
          <ArrowLeft className="w-5 h-5 ml-2" />
          <span className="font-semibold">العودة إلى الدروس</span>
        </button>
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{APP_TITLE}</h1>
        <Button
          onClick={() => generateLessonPDF(lesson)}
          variant="outline"
          size="sm"
          className="gap-2"
          aria-label="تحميل PDF"
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">PDF</span>
        </Button>
      </header>
      <main className="flex-grow p-4 pb-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">{lesson.title}</h2>
          <p className="text-lg text-gray-500 dark:text-gray-400">الدرس {lesson.id}</p>

          {lessonAlreadyCompleted && (
            <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <p className="text-sm text-green-700 dark:text-green-300">لقد أكملت هذا الدرس من قبل</p>
            </div>
          )}

          {/* محتوى الدرس */}
          <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">محتوى الدرس</h3>
            <Streamdown>{lesson.content}</Streamdown>
          </div>

          {/* صور توضيحية */}
          {lesson.images && lesson.images.length > 0 && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">صور توضيحية</h3>
              <div className="grid grid-cols-1 gap-4">
                {lesson.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`صورة توضيحية ${idx + 1}`}
                    className="w-full rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
                  />
                ))}
              </div>
            </div>
          )}

          {/* فيديو توضيحي */}
          {lesson.videoUrl && (
            <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">{lesson.title}</h3>
              <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <a
                  href={lesson.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition duration-200"
                >
                  <Play className="w-8 h-8" />
                  <span className="text-lg font-semibold">مشاهدة الفيديو</span>
                </a>
              </div>
            </div>
          )}

          {/* الاختبار */}
          <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">اختبر نفسك</h3>
            {!quizCompleted ? renderQuestion(currentQuestion) : renderQuizResult()}
          </div>

          {/* الملاحظات الشخصية */}
          <NotesSection lessonId={lessonId.toString()} />
        </div>
      </main>
      <Footer />
      
      {/* Motivational Dialogs */}
      <MotivationalDialog
        open={showExitDialog}
        onOpenChange={setShowExitDialog}
        type="exit"
        onConfirm={() => window.history.back()}
      />
      <MotivationalDialog
        open={showCompleteDialog}
        onOpenChange={setShowCompleteDialog}
        type="complete"
      />
    </div>
  );
};

export default LessonPage;
