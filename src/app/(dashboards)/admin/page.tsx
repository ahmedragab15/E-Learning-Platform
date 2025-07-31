import { MetricCard } from "@/components/admin-dashboard/MetricCard";
import { EarningsChart } from "@/components/admin-dashboard/EarningsChart";
import { StudentMonitoring } from "@/components/admin-dashboard/StudentMonitoring";
import { TransactionTable } from "@/components/admin-dashboard/TransactionTable";
import { Users, BookOpen, UserPlus, GraduationCap, DollarSign, Wallet } from "lucide-react";

const recentTransactions = [
  {
    id: "1",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "2",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "3",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "4",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "5",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
];

const Dashboard = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Top Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total Mentor" value="44" change="76% increase" icon={<Users className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Total Student" value="1200" change="66% increase" icon={<GraduationCap className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="New Student" value="100" change="96% increase" icon={<UserPlus className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Total Course" value="88" change="26% increase" icon={<BookOpen className="w-5 h-5 text-muted-foreground" />} />
        </div>

        {/* Revenue Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricCard title="Total Revenue" value="$1000" change="76% increase" icon={<DollarSign className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Account Balance" value="$7262" change="76% increase" icon={<Wallet className="w-5 h-5 text-muted-foreground" />} />
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EarningsChart />
          </div>
          <div>
            <StudentMonitoring />
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Transaction</h2>
          <TransactionTable transactions={recentTransactions} showActions={false} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
