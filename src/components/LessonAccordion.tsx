import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LessonCategory } from "@shared/const";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight, Lock, Star } from "lucide-react";
import * as Icons from "lucide-react";

interface LessonAccordionProps {
  categories: LessonCategory[];
  favorites: string[];
  onToggleFavorite: (lessonId: string) => void;
}

const LessonAccordion = ({ categories, favorites, onToggleFavorite }: LessonAccordionProps) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-600 dark:text-emerald-400", border: "border-emerald-200 dark:border-emerald-700" },
      blue: { bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-700" },
      purple: { bg: "bg-purple-50 dark:bg-purple-900/20", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-700" },
      pink: { bg: "bg-pink-50 dark:bg-pink-900/20", text: "text-pink-600 dark:text-pink-400", border: "border-pink-200 dark:border-pink-700" },
      yellow: { bg: "bg-yellow-50 dark:bg-yellow-900/20", text: "text-yellow-600 dark:text-yellow-400", border: "border-yellow-200 dark:border-yellow-700" },
      orange: { bg: "bg-orange-50 dark:bg-orange-900/20", text: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-700" },
      cyan: { bg: "bg-cyan-50 dark:bg-cyan-900/20", text: "text-cyan-600 dark:text-cyan-400", border: "border-cyan-200 dark:border-cyan-700" },
      red: { bg: "bg-red-50 dark:bg-red-900/20", text: "text-red-600 dark:text-red-400", border: "border-red-200 dark:border-red-700" },
      indigo: { bg: "bg-indigo-50 dark:bg-indigo-900/20", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-700" },
    };
    return colorMap[color] || colorMap.emerald;
  };

  const getIcon = (iconName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      BookOpen: <Icons.BookOpen className="w-5 h-5" />,
      BookMarked: <Icons.BookMarked className="w-5 h-5" />,
      Map: <Icons.Map className="w-5 h-5" />,
      Layers: <Icons.Layers className="w-5 h-5" />,
      Zap: <Icons.Zap className="w-5 h-5" />,
      Type: <Icons.Type className="w-5 h-5" />,
      Lightbulb: <Icons.Lightbulb className="w-5 h-5" />,
      Sparkles: <Icons.Sparkles className="w-5 h-5" />,
    };
    return iconMap[iconName] || <Icons.BookOpen className="w-5 h-5" />;
  };

  return (
    <div className="w-full space-y-3">
      <Accordion type="single" collapsible className="w-full">
        {categories.map((category) => {
          const colors = getColorClasses(category.color);
          const isLocked = category.lessons.length === 0;

          return (
            <AccordionItem
              key={category.id}
              value={category.id.toString()}
              className={`border rounded-lg ${colors.border} ${colors.bg}`}
            >
              <AccordionTrigger className={`px-4 py-3 hover:no-underline ${colors.text}`}>
                <div className="flex items-center gap-3 text-right w-full">
                  <div className={`p-2 rounded-lg ${colors.bg}`}>
                    {getIcon(category.icon)}
                  </div>
                  <div className="flex-grow text-right">
                    <h3 className={`font-bold text-lg ${colors.text}`}>{category.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {category.lessons.length} {category.lessons.length === 1 ? "درس" : "درس"}
                    </p>
                  </div>
                  {isLocked && <Lock className="w-5 h-5 text-gray-400" />}
                </div>
              </AccordionTrigger>

              {!isLocked && (
                <AccordionContent className="px-4 py-3 space-y-2">
                  {category.lessons.map((lesson) => {
                    const isFav = favorites.includes(lesson.id.toString());
                    return (
                      <div key={lesson.id.toString()} className="flex items-center gap-2">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onToggleFavorite(lesson.id.toString());
                          }}
                          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition duration-200"
                          aria-label="إضافة إلى المفضلة"
                        >
                          <Star className={`w-5 h-5 transition duration-200 ${
                            isFav ? 'fill-yellow-400 text-yellow-400' : 'text-gray-400'
                          }`} />
                        </button>
                        <Link href={`/lesson/${lesson.id}`} className="flex-grow">
                          <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 cursor-pointer group">
                            <div className="flex-grow text-right">
                              <h4 className="font-semibold text-gray-800 dark:text-gray-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition duration-200">
                                {lesson.title}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {lesson.quiz.length} أسئلة
                              </p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition duration-200" />
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </AccordionContent>
              )}

              {isLocked && (
                <AccordionContent className="px-4 py-3">
                  <div className="text-center py-4">
                    <p className="text-gray-500 dark:text-gray-400">قريباً...</p>
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default LessonAccordion;
