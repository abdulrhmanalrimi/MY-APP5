import BottomNavBar from "@/components/BottomNavBar";
import BadgeDisplay from "@/components/BadgeDisplay";
import { APP_TITLE } from "@/const";
import { useProgress } from "@/hooks/useProgress";
import { LESSONS, LESSON_CATEGORIES } from "@shared/const";
import { CheckCircle, BookOpen, Target, TrendingUp, Share2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { generateCertificatePDF } from '@/utils/generateCertificate';
import { toast } from 'sonner';

const Stats = () => {
  const { progress, resetProgress } = useProgress();

  const handleShareAchievement = () => {
    try {
      generateCertificatePDF(
        progress.completedLessons.length,
        LESSONS.length,
        progress.totalPoints
      );
      toast.success('تم تحميل شهادة الإنجاز بنجاح!');
    } catch (error) {
      toast.error('حدث خطأ أثناء إنشاء الشهادة');
      console.error('Error generating certificate:', error);
    }
  };

  const completionPercentage = Math.round((progress.completedLessons.length / LESSONS.length) * 100);

  // Prepare data for category completion chart
  const categoryData = LESSON_CATEGORIES.map(category => {
    const categoryLessons = category.lessons;
    const completedInCategory = categoryLessons.filter(lesson => 
      progress.completedLessons.includes(lesson.id as any)
    ).length;
    return {
      name: category.title,
      completed: completedInCategory,
      total: categoryLessons.length,
      percentage: categoryLessons.length > 0 ? Math.round((completedInCategory / categoryLessons.length) * 100) : 0
    };
  });

  // Prepare data for quiz scores pie chart
  const quizScoresData = [
    { name: 'مكتملة', value: progress.completedLessons.length, color: '#10b981' },
    { name: 'متبقية', value: LESSONS.length - progress.completedLessons.length, color: '#e5e7eb' }
  ];

  // Calculate average quiz score
  const quizScores = Object.values(progress.quizScores);
  const averageScore = quizScores.length > 0
    ? Math.round(quizScores.reduce((acc, score) => acc + (score.score / score.total * 100), 0) / quizScores.length)
    : 0;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 text-center">{APP_TITLE}</h1>
      </header>

      <main className="flex-grow p-4 pb-20 overflow-y-auto">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">إحصائيات التقدم</h2>
          </div>

          {/* Overall Progress */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">التقدم العام</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                <BookOpen className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                  {progress.completedLessons.length}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">دروس مكتملة</p>
              </div>
              <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  {progress.totalPoints}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">النقاط الكلية</p>
              </div>
              <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <CheckCircle className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                  {averageScore}%
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">متوسط النتائج</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
            <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-200">
              {completionPercentage}% مكتمل
            </p>
          </div>

          {/* Category Completion Chart */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">التقدم حسب التصنيف</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45} 
                    textAnchor="end" 
                    height={100}
                    tick={{ fill: '#6b7280', fontSize: 12 }}
                  />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Bar dataKey="completed" fill="#10b981" name="مكتملة" />
                  <Bar dataKey="total" fill="#e5e7eb" name="الإجمالي" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Completion Pie Chart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">نسبة الإكمال</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={quizScoresData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {quizScoresData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Badges and Achievements */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">الإنجازات</h3>
                {progress.completedLessons.length > 0 && (
                  <Button
                    onClick={handleShareAchievement}
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>مشاركة الإنجاز</span>
                  </Button>
                )}
              </div>
              <BadgeDisplay
                badges={progress.badges}
                totalPoints={progress.totalPoints}
                streak={progress.streak}
              />
            </div>
          </div>

          {/* Completed Lessons */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">الدروس المكتملة</h3>
            {progress.completedLessons.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 text-center py-4">لم تكمل أي درس بعد</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {progress.completedLessons.map((lessonId) => {
                  const lesson = LESSONS.find((l) => (l.id as any) === lessonId);
                  const score = progress.quizScores[lessonId];
                  if (!lesson) return null;
                  return (
                    <Link key={lessonId} href={`/lesson/${lessonId}`}>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-200 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-100">{lesson.title}</h4>
                            {score && (
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                النتيجة: {score.score} / {score.total} ({Math.round(score.score / score.total * 100)}%)
                              </p>
                            )}
                          </div>
                        </div>
                        <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Reset Progress */}
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg shadow-lg border border-red-200 dark:border-red-700">
            <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">إعادة تعيين التقدم</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              سيتم حذف جميع التقدم والإنجازات. هذا الإجراء لا يمكن التراجع عنه.
            </p>
            <Button
              onClick={() => {
                if (confirm("هل أنت متأكد من إعادة تعيين التقدم؟")) {
                  resetProgress();
                }
              }}
              variant="destructive"
              className="w-full"
            >
              إعادة تعيين التقدم
            </Button>
          </div>
        </div>
      </main>

      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default Stats;
