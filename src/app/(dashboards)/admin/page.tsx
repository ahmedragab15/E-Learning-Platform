
import { Users, BookOpen, UserPlus, GraduationCap, DollarSign, Wallet } from "lucide-react";
import { getAllInstructorsAction } from "@/actions/instructorActions";
import { getAllUsersAction, getNewStudentsAction } from "@/actions/userActions";
import { getCoursesAction } from "@/actions/courseActions";
import { EarningsChart, MetricCard, StudentMonitoring, AdminTransactionTable } from "@/components";
import { recentTransactions } from "@/constants";

const Dashboard = async () => {
  const instructors = await getAllInstructorsAction();
  const students = await getAllUsersAction();
  const newStudents = await getNewStudentsAction();
  const courses = await getCoursesAction();

  return (
    <>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard
            title="Total Instructors"
            value={instructors?.length || 0}
            change="76% increase"
            icon={<Users className="w-5 h-5 text-muted-foreground" />}
          />
          <MetricCard
            title="Total Student"
            value={students?.length || 0}
            change="66% increase"
            icon={<GraduationCap className="w-5 h-5 text-muted-foreground" />}
          />
          <MetricCard
            title="New Student"
            value={newStudents?.length || 0}
            change="96% increase"
            icon={<UserPlus className="w-5 h-5 text-muted-foreground" />}
          />
          <MetricCard
            title="Total Course"
            value={courses?.length || 0}
            change="26% increase"
            icon={<BookOpen className="w-5 h-5 text-muted-foreground" />}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MetricCard title="Total Revenue" value="$1000" change="76% increase" icon={<DollarSign className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Account Balance" value="$7262" change="76% increase" icon={<Wallet className="w-5 h-5 text-muted-foreground" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <EarningsChart />
          </div>
          <div>
            <StudentMonitoring />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Transaction</h2>
          <AdminTransactionTable transactions={recentTransactions} showActions={false} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
