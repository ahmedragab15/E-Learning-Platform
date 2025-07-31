import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const instructors = [
  {
    id: "1",
    photo: "/placeholder.svg",
    name: "Angela Saraswati",
    email: "angelaSaraswati@gmail.com",
    totalCourses: "15 Courses",
    totalStudents: "900 Students",
    income: "$7200",
  },
  {
    id: "2",
    photo: "/placeholder.svg",
    name: "Robert Anderson",
    email: "robertanderson@gmail.com",
    totalCourses: "10 Courses",
    totalStudents: "542 Students",
    income: "$4300",
  },
  {
    id: "3",
    photo: "/placeholder.svg",
    name: "Chika Miscela",
    email: "chikamiss@gmail.com",
    totalCourses: "30 Courses",
    totalStudents: "1200 Students",
    income: "$9540",
  },
  {
    id: "4",
    photo: "/placeholder.svg",
    name: "Angela Saraswati",
    email: "angelaSaraswati@gmail.com",
    totalCourses: "15 Courses",
    totalStudents: "900 Students",
    income: "$7200",
  },
  {
    id: "5",
    photo: "/placeholder.svg",
    name: "Robert Anderson",
    email: "robertanderson@gmail.com",
    totalCourses: "10 Courses",
    totalStudents: "542 Students",
    income: "$4300",
  },
  {
    id: "6",
    photo: "/placeholder.svg",
    name: "Chika Miscela",
    email: "chikamiss@gmail.com",
    totalCourses: "30 Courses",
    totalStudents: "1200 Students",
    income: "$9540",
  },
];

const page = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold">All Mentor</h1>
        </div>

        {/* Mentors Table */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 gap-4 p-4 bg-muted font-medium text-sm">
            <div>Photo</div>
            <div>Name Mentor</div>
            <div>Email</div>
            <div>Total Course</div>
            <div>Total Students</div>
            <div>Income</div>
            <div>Action</div>
          </div>

          <div className="divide-y">
            {instructors.map((mentor) => (
              <div key={mentor.id} className="grid grid-cols-7 gap-4 p-4 items-center">
                <div>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={mentor.photo} alt={mentor.name} />
                    <AvatarFallback>{mentor.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="font-medium">{mentor.name}</div>
                <div className="text-muted-foreground">{mentor.email}</div>
                <div>{mentor.totalCourses}</div>
                <div>{mentor.totalStudents}</div>
                <div className="font-semibold">{mentor.income}</div>
                <div>
                  <Button variant="ghost" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <span className="ml-2 text-sm text-primary cursor-pointer">View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
