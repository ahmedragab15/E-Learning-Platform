"use client";
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookOpen, Users, MessageCircle, ChevronDownIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ActiveLink from "../shared/ActiveLink";

export function Sidebar() {
  const menuItems = [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/instructor-dashboard" }];

  const courseSubItems = [
    { id: "all-course", label: "All Course", path: "/instructor-dashboard/courses" },
    { id: "add-course", label: "Add Course", path: "/instructor-dashboard/courses/add-course" },
  ];

  const studentSubItems = [{ id: "all-student", label: "All Student", path: "/instructor-dashboard/students" }];

  const communicationSubItems = [
    { id: "discussion", label: "Discussion", path: "/instructor-dashboard/communication" },
    { id: "review-course", label: "Review Course", path: "/instructor-dashboard/communication/reviews" },
  ];

  return (
    <div className="w-64 bg-card shadow-md h-screen p-6 rounded-md">
      <nav className="px-3">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <ActiveLink href={item.path} exact activeClassName="text-primary" key={item.id}>
              <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 hover:text-primary font-medium rounded-md">
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </h4>
            </ActiveLink>
          );
        })}

        <Accordion className="w-full space-y-1" type="single" collapsible>
          {/* Course Accordion */}
          <AccordionItem value="course" className="border-none">
            <AccordionTrigger
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:no-underline hover:bg-gray-100 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                <span>Course</span>
              </div>
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="ml-6 mt-1">
                {courseSubItems.map((subItem) => (
                  <ActiveLink href={subItem.path} exact activeClassName="text-primary" key={subItem.id}>
                    <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 hover:text-primary font-medium rounded-md">
                      <span>{subItem.label}</span>
                    </h4>
                  </ActiveLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Student Accordion */}
          <AccordionItem value="student" className="border-none">
            <AccordionTrigger
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:no-underline hover:bg-gray-100 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Student</span>
              </div>
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="ml-6 mt-1">
                {studentSubItems.map((subItem) => (
                  <ActiveLink href={subItem.path} exact activeClassName="text-primary" key={subItem.id}>
                    <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 hover:text-primary font-medium rounded-md">
                      <span>{subItem.label}</span>
                    </h4>
                  </ActiveLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Communication Accordion */}
          <AccordionItem value="communication" className="border-none">
            <AccordionTrigger
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:no-underline hover:bg-gray-100 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5" />
                <span>Communication</span>
              </div>
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="ml-6 mt-1">
                {communicationSubItems.map((subItem) => (
                  <ActiveLink href={subItem.path} exact activeClassName="text-primary" key={subItem.id}>
                    <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 hover:text-primary font-medium rounded-md">
                      <span>{subItem.label}</span>
                    </h4>
                  </ActiveLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </nav>
    </div>
  );
}
