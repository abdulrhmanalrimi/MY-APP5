import { Home, BarChart2, MessageSquare, Trophy } from 'lucide-react';
import { Link } from 'wouter';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link href="/lessons" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <Home className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">الدروس</span>
        </Link>
        <Link href="/stats" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <BarChart2 className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">الإحصائيات</span>
        </Link>
        <Link href="/ask-teacher" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <MessageSquare className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">اسأل المعلم</span>
        </Link>
        <Link href="/leaderboard" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <Trophy className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-500">المتصدرين</span>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavBar;
