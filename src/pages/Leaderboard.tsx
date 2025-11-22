import { Trophy, Medal, Award, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BottomNavBar from "@/components/BottomNavBar";
import Footer from "@/components/Footer";
import { useProgress } from "@/hooks/useProgress";

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  completedLessons: number;
  badges: number;
}

const Leaderboard = () => {
  const { progress } = useProgress();
  
  // Mock leaderboard data (in real app, this would come from a backend)
  const leaderboardData: LeaderboardEntry[] = [
    { rank: 1, name: "أحمد محمد", points: 2500, completedLessons: 25, badges: 8 },
    { rank: 2, name: "فاطمة علي", points: 2300, completedLessons: 23, badges: 7 },
    { rank: 3, name: "محمود سعيد", points: 2100, completedLessons: 21, badges: 6 },
    { rank: 4, name: "نور الدين", points: 1900, completedLessons: 19, badges: 5 },
    { rank: 5, name: "سارة أحمد", points: 1700, completedLessons: 17, badges: 5 },
    { rank: 6, name: "خالد عبدالله", points: 1500, completedLessons: 15, badges: 4 },
    { rank: 7, name: "ليلى حسن", points: 1300, completedLessons: 13, badges: 4 },
    { rank: 8, name: "يوسف إبراهيم", points: 1100, completedLessons: 11, badges: 3 },
    { rank: 9, name: "مريم خالد", points: 900, completedLessons: 9, badges: 3 },
    { rank: 10, name: "عمر محمود", points: 700, completedLessons: 7, badges: 2 },
  ];

  // Add current user to leaderboard
  const currentUserEntry: LeaderboardEntry = {
    rank: 0,
    name: "أنت",
    points: progress.totalPoints,
    completedLessons: progress.completedLessons.length,
    badges: progress.badges.length
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center font-bold text-gray-600">{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500 text-white";
      case 2:
        return "bg-gray-400 text-white";
      case 3:
        return "bg-amber-600 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex-1 pb-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2 flex items-center justify-center gap-2">
              <Trophy className="w-10 h-10" />
              لوحة المتصدرين
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              تنافس مع أفضل المتعلمين واحصل على المركز الأول!
            </p>
          </div>

          {/* Current User Card */}
          <Card className="mb-6 border-2 border-emerald-500 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Star className="w-6 h-6" />
                  إحصائياتك
                </span>
                <Badge className="bg-white text-emerald-600">
                  {currentUserEntry.points} نقطة
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-emerald-600">{currentUserEntry.completedLessons}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">دروس مكتملة</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600">{currentUserEntry.points}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">النقاط</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-600">{currentUserEntry.badges}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">الشارات</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboard List */}
          <div className="space-y-3">
            {leaderboardData.map((entry) => (
              <Card key={entry.rank} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12">
                        {getRankIcon(entry.rank)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{entry.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {entry.completedLessons} دروس • {entry.badges} شارات
                        </p>
                      </div>
                    </div>
                    <Badge className={getRankBadgeColor(entry.rank)}>
                      {entry.points} نقطة
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>💡 أكمل المزيد من الدروس واحصل على نقاط أعلى للوصول إلى المراكز الأولى!</p>
          </div>
        </div>
      </div>
      
      <BottomNavBar />
      <Footer />
    </div>
  );
};

export default Leaderboard;
