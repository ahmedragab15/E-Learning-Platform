"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

const page = () => {
  const students = [
    {
      username: "Afif Hanifudin",
      phone: "+6281325450623",
      email: "hanifudin201@gmail.com",
      totalCourse: "4 Course",
    },
    {
      username: "Afif Hanifudin",
      phone: "+6281325450623",
      email: "hanifudin201@gmail.com",
      totalCourse: "4 Course",
    },
    {
      username: "Afif Hanifudin",
      phone: "+6281325450623",
      email: "hanifudin201@gmail.com",
      totalCourse: "4 Course",
    },
    {
      username: "Afif Hanifudin",
      phone: "+6281325450623",
      email: "hanifudin201@gmail.com",
      totalCourse: "4 Course",
    },
    {
      username: "Afif Hanifudin",
      phone: "+6281325450623",
      email: "hanifudin201@gmail.com",
      totalCourse: "4 Course",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">

      <div className="flex-1">

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">All Student</h1>
            <p className="text-muted-foreground">Student List</p>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead className="text-muted-foreground font-medium p-6">Username</TableHead>
                    <TableHead className="text-muted-foreground font-medium p-6">Phone Number</TableHead>
                    <TableHead className="text-muted-foreground font-medium p-6">Email</TableHead>
                    <TableHead className="text-muted-foreground font-medium p-6">Total Course</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {students.map((student, index) => (
                    <TableRow key={index} className="border-b border-border hover:bg-muted/50">
                      <TableCell className="p-6 font-medium text-foreground">{student.username}</TableCell>
                      <TableCell className="p-6 text-foreground">{student.phone}</TableCell>
                      <TableCell className="p-6 text-foreground">{student.email}</TableCell>
                      <TableCell className="p-6 text-foreground">{student.totalCourse}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default page;
