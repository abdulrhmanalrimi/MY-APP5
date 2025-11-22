import { Award, Star, Trophy, Flame } from 'lucide-react';

interface BadgeDisplayProps {
  badges: string[];
  totalPoints: number;
  streak: number;
}

const BADGE_INFO: Record<string, { title: string; description: string; icon: React.ReactNode }> = {
  first_lesson: {
    title: 'البداية',
    description: 'أكملت أول درس',
    icon: <Star className="w-8 h-8 text-yellow-500" />,
  },
  five_lessons: {
    title: 'المثابر',
    description: 'أكملت 5 دروس',
    icon: <Award className="w-8 h-8 text-blue-500" />,
  },
  points_100: {
    title: 'جامع النقاط',
    description: 'حصلت على 100 نقطة',
    icon: <Trophy className="w-8 h-8 text-emerald-500" />,
  },
};

const BadgeDisplay = ({ badges, totalPoints, streak }: BadgeDisplayProps) => {
  return (
    <div className="space-y-4">
      {/* Points and Streak */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-lg border border-emerald-200 dark:border-emerald-700">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">النقاط</p>
              <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{totalPoints}</p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg border border-orange-200 dark:border-orange-700">
          <div className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">السلسلة</p>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{streak} يوم</p>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div>
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-3">الشارات المكتسبة</h3>
        {badges.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-4">لم تحصل على أي شارة بعد</p>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {badges.map((badgeId) => {
              const badge = BADGE_INFO[badgeId];
              if (!badge) return null;
              return (
                <div
                  key={badgeId}
                  className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex-shrink-0">{badge.icon}</div>
                  <div className="flex-grow text-right">
                    <h4 className="font-bold text-gray-800 dark:text-gray-100">{badge.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{badge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BadgeDisplay;
