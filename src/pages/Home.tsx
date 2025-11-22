import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BookOpen, Sparkles, Star, Award } from "lucide-react";
import { APP_TITLE } from "@/const";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-200 dark:bg-emerald-800 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-200 dark:bg-teal-800 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-emerald-300 dark:bg-emerald-700 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-16 h-16 bg-teal-300 dark:bg-teal-700 rounded-full opacity-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
        
        {/* Floating Stars */}
        <Star className="absolute top-20 right-1/4 w-6 h-6 text-yellow-400 animate-pulse" style={{ animationDuration: '2s' }} />
        <Star className="absolute bottom-32 left-1/3 w-8 h-8 text-yellow-300 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }} />
        <Sparkles className="absolute top-1/3 right-10 w-6 h-6 text-emerald-400 animate-pulse" style={{ animationDuration: '2.5s' }} />
        <Award className="absolute bottom-1/4 right-1/4 w-8 h-8 text-teal-400 animate-bounce" style={{ animationDuration: '3.5s' }} />
      </div>

      <main className="flex-1 flex items-center justify-center relative z-10">
        <div 
          className={`flex flex-col items-center justify-center text-center p-8 max-w-2xl mx-auto transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Icon with Animation */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-emerald-400 dark:bg-emerald-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <BookOpen className="w-24 h-24 text-emerald-600 dark:text-emerald-400 relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
          </div>

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent mb-4 animate-pulse">
            {APP_TITLE}
          </h1>

          {/* Welcome Message */}
          <div className="space-y-4 mb-8">
            <p className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">
              ✨ مرحبًا بك في تطبيق ( النحو ببساطة ) …
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              هنا تصبح القواعد فكرة واضحة، والمعنى أقرب، والفهم أخفّ وأجمل.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              ابدأ رحلتك الآن … واجعل النحو جزءًا من متعتك اليومية في التعلم، فكل خطوة تفتح لك بابًا من الإتقان، وكل تفاعل يصنع فرقًا ويقودك نحو نحوٍ أسهل … 📘
            </p>
          </div>

          {/* CTA Button with Animation */}
          <Link href="/lessons">
            <Button 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-lg px-10 py-6 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-emerald-500/50 animate-pulse"
              style={{ animationDuration: '2s' }}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              ابدأ التعلم
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          {/* Decorative Text */}
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
            "كل قاعدة تفهمها تقربك من فصاحة التعبير"
          </p>
        </div>
      </main>
    </div>
  );
}
