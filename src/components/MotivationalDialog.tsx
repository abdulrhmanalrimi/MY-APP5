import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Sparkles, Award, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface MotivationalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'exit' | 'complete' | 'goodbye';
  onConfirm?: () => void;
}

const MotivationalDialog = ({ open, onOpenChange, type, onConfirm }: MotivationalDialogProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const getContent = () => {
    switch (type) {
      case 'exit':
        return {
          title: "هل أنت متأكد؟",
          description: "العلم يحتاج صبرًا، لا تتعجل الخروج... كل دقيقة تتعلم فيها تقربك من الإتقان! 📚",
          icon: <Sparkles className="w-16 h-16 text-yellow-500 animate-pulse" />,
          confirmText: "متابعة التعلم",
          cancelText: "الخروج"
        };
      case 'complete':
        return {
          title: "أحسنت! 🎉",
          description: "كل درس تنهيه اليوم هو انتصار صغير نحو حلمك الكبير! استمر في التقدم... 🌟",
          icon: <Award className="w-16 h-16 text-emerald-500 animate-bounce" />,
          confirmText: "متابعة",
          cancelText: null
        };
      case 'goodbye':
        return {
          title: "إلى لقاء قريب! 👋",
          description: "شكرًا لاختيارك \"النحو ببساطة\"... تذكر، كل قاعدة تفهمها تقربك من فصاحة التعبير. نراك في جلسة نحوية جديدة قريبًا! 📘",
          icon: <Star className="w-16 h-16 text-blue-500 animate-pulse" />,
          confirmText: "حسنًا",
          cancelText: null
        };
    }
  };

  const content = getContent();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={`sm:max-w-md ${isAnimating ? 'animate-pulse' : ''}`}>
        <div className={`absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg ${isAnimating ? 'animate-pulse' : ''}`}></div>
        <div className="relative z-10">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              {content.icon}
            </div>
            <DialogTitle className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
              {content.title}
            </DialogTitle>
            <DialogDescription className="text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed pt-4">
              {content.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex flex-col sm:flex-row gap-2 mt-6">
            {content.cancelText && (
              <Button
                variant="outline"
                onClick={() => {
                  onOpenChange(false);
                  onConfirm?.();
                }}
                className="w-full sm:w-auto"
              >
                {content.cancelText}
              </Button>
            )}
            <Button
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
            >
              {content.confirmText}
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MotivationalDialog;
