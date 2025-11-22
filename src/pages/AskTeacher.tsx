import BottomNavBar from "@/components/BottomNavBar";
import { APP_TITLE } from "@/const";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Send, MessageCircle, Phone } from "lucide-react";
import Footer from "@/components/Footer";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AskTeacher = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsLoading(true);

    // Call OpenAI API
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY || ''}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'أنت معلم نحو عربي متخصص. أجب على أسئلة الطلاب بطريقة واضحة ومبسطة مع أمثلة عملية.'
            },
            {
              role: 'user',
              content: inputText
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('فشل في الحصول على رد من الذكاء الاصطناعي');
      }

      const data = await response.json();
      const aiText = data.choices[0]?.message?.content || 'عذراً، لم أتمكن من الإجابة على سؤالك.';

      const aiResponse: Message = {
        id: Date.now() + 1,
        text: aiText,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
      
      // Check if API key is missing
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      let errorMessage = 'عذراً، حدث خطأ في الحصول على الإجابة.';
      
      if (!apiKey || apiKey.trim() === '') {
        errorMessage = '⚠️ مفتاح OpenAI API غير موجود. يرجى إضافة VITE_OPENAI_API_KEY في إعدادات المشروع (Settings → Secrets). في الوقت الحالي، يمكنك التواصل مع الأستاذة سهام غازي عبر واتساب.';
      } else {
        errorMessage += ' يرجى المحاولة مرة أخرى أو التواصل مع الأستاذة سهام غازي عبر واتساب.';
      }
      
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: errorMessage,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "967775392526";
    const message = encodeURIComponent("السلام عليكم، لدي سؤال في النحو:");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <header className="p-4 border-b dark:border-gray-700 bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400 text-center">{APP_TITLE}</h1>
      </header>

      <main className="flex-grow p-4 pb-20 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* AI Chat Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">المساعد الذكي</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">اطرح سؤالك النحوي وسيقوم المساعد الذكي بالإجابة عليك فوراً.</p>

            {/* Chat Messages */}
            <div className="h-64 overflow-y-auto border p-3 mb-4 rounded dark:border-gray-600 bg-gray-50 dark:bg-gray-700 space-y-3">
              {messages.length === 0 ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-8">ابدأ المحادثة...</p>
              ) : (
                messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.isUser
                          ? "bg-emerald-500 text-white"
                          : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString("ar-EG", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-500 dark:text-gray-400">جاري الكتابة...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Textarea
                placeholder="اكتب سؤالك هنا..."
                className="flex-grow resize-none"
                rows={2}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-emerald-500 hover:bg-emerald-600 text-white"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* WhatsApp Contact Section */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg shadow-lg border-2 border-green-200 dark:border-green-700">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              <h3 className="text-xl font-bold text-green-700 dark:text-green-400">تواصل مع الأستاذة المشرفة</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              للاستفسارات والأسئلة المباشرة عبر الواتساب
            </p>

            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-green-200 dark:border-green-700 mb-4">
              <div className="text-center">
                <div className="text-4xl mb-2">👩‍🏫</div>
                <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100">الأستاذة/ سهام غازي</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">المشرفة على التطبيق</p>
                <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                  <Phone className="w-5 h-5" />
                  <p className="text-lg font-semibold" dir="ltr">+967 775 392 526</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
              لديك سؤال أو استفسار؟ تواصل معنا مباشرة عبر الواتساب
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              راسلنا على الواتساب
            </Button>

            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
              أوقات الرد: من السبت إلى الخميس، 9 صباحاً - 5 مساءً
            </p>
          </div>
        </div>
      </main>

      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default AskTeacher;
