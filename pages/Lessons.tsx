import BottomNavBar from "@/components/BottomNavBar";
import LessonAccordion from "@/components/LessonAccordion";
import { APP_TITLE } from "@/const";
import { LESSON_CATEGORIES } from "@shared/const";
import { useTheme } from "@/contexts/ThemeContext";
import { useFavorites } from "@/hooks/useFavorites";
import { Moon, Sun, Star } from "lucide-react";
import Footer from "@/components/Footer";
import FontSizeControl from "@/components/FontSizeControl";

const Lessons = () => {
  const { theme, toggleTheme } = useTheme();
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      <header className="p-4 border-b dark:border-gray-700 flex justify-between items-center bg-white dark:bg-gray-800">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
          aria-label="تبديل الوضع الليلي"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-600" />
          )}
        </button>
        <h1 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">{APP_TITLE}</h1>
        <FontSizeControl />
      </header>

      <main className="flex-grow p-4 pb-20 overflow-y-auto">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-2 text-gray-800 dark:text-gray-100">دروس النحو</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            اختر التصنيف والدرس الذي تريد البدء به
          </p>

          {/* Lesson Accordion Component */}
          {/* Favorites Section */}
          {favorites.length > 0 && (
            <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
              <h3 className="font-bold text-yellow-600 dark:text-yellow-400 mb-2 flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400" />
                دروسك المفضلة ({favorites.length})
              </h3>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                لديك {favorites.length} درس في قائمة المفضلة للمراجعة السريعة
              </p>
            </div>
          )}

          <LessonAccordion categories={LESSON_CATEGORIES} favorites={favorites} onToggleFavorite={toggleFavorite} />

          {/* Info Section */}
          <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
            <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">💡 نصيحة</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">
              ابدأ من التصنيف الأول وتقدم تدريجياً. كل درس يحتوي على شرح مفصل واختبار تفاعلي لتقييم فهمك.
            </p>
          </div>
        </div>
      </main>

      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default Lessons;
