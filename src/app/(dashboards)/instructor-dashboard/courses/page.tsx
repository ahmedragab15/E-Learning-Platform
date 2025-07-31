"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Search, Plus, Edit, Trash2, Eye } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useRouter } from "next/navigation";

const AllCourse = () => {
  const navigate = useRouter();

  const courses = [
    {
      id: 1,
      title: "UI/UX Design For Beginner",
      category: "Design",
      price: "$299",
      students: 1240,
      status: "Published",
      thumbnail: "/placeholder.svg",
      createdDate: "May 27, 2021",
    },
    {
      id: 2,
      title: "Advanced React Development",
      category: "Development",
      price: "$399",
      students: 856,
      status: "Published",
      thumbnail: "/placeholder.svg",
      createdDate: "June 15, 2021",
    },
    {
      id: 3,
      title: "Digital Marketing Fundamentals",
      category: "Marketing",
      price: "$199",
      students: 432,
      status: "Draft",
      thumbnail: "/placeholder.svg",
      createdDate: "July 10, 2021",
    },
    {
      id: 4,
      title: "Python for Data Science",
      category: "Development",
      price: "$459",
      students: 1120,
      status: "Published",
      thumbnail: "/placeholder.svg",
      createdDate: "August 5, 2021",
    },
    {
      id: 5,
      title: "Graphic Design Masterclass",
      category: "Design",
      price: "$349",
      students: 678,
      status: "Published",
      thumbnail: "/placeholder.svg",
      createdDate: "September 20, 2021",
    },
    {
      id: 6,
      title: "Business Strategy Basics",
      category: "Business",
      price: "$249",
      students: 324,
      status: "Draft",
      thumbnail: "/placeholder.svg",
      createdDate: "October 12, 2021",
    },
  ];

  const handleEditCourse = (courseId: number) => {
    navigate.push(`/instructor-dashboard/courses/edit-course/${courseId}`);
  };

  return (
    <div className="min-h-screen bg-background flex">

      <div className="flex-1">

        <main className="p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">All Courses</h1>
                <p className="text-muted-foreground">Manage all your courses</p>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Course
              </Button>
            </div>

            {/* Search and Filter */}
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search courses..." className="pl-10" />
              </div>
              <Button variant="outline">Filter</Button>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted relative">
                    <Image width={400} height={400} src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                    <div className="absolute top-3 right-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="secondary" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="flex items-center gap-2">
                            <Eye className="w-4 h-4" />
                            View
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2" onClick={() => handleEditCourse(course.id)}>
                            <Edit className="w-4 h-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="flex items-center gap-2 text-red-600">
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg font-semibold line-clamp-2">{course.title}</CardTitle>
                      <Badge
                        variant={course.status === "Published" ? "default" : "secondary"}
                        className={course.status === "Published" ? "bg-green-100 text-green-800" : ""}
                      >
                        {course.status}
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Category:</span>
                      <Badge variant="outline">{course.category}</Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Students:</span>
                      <span className="font-medium">{course.students.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold text-primary">{course.price}</span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Created:</span>
                      <span>{course.createdDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center pt-6">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="default" size="sm">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllCourse;
