import { Code, Phone } from "lucide-react";

const Footer = () => {
  const handlePhoneClick = () => {
    window.open("tel:+967781752213", "_self");
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Code className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <p className="text-sm text-gray-700 dark:text-gray-300">
            برمجة <span className="font-bold">المهندس/ عبدالرحمن الضبيبي</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <button
            onClick={handlePhoneClick}
            className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
            dir="ltr"
          >
            +967 781 752 213
          </button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          © 2025 النحو ببساطة - جميع الحقوق محفوظة
        </p>
      </div>
    </footer>
  );
};

export default Footer;
