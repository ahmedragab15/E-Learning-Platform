"use client";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";
import { LayoutDashboard, Users,  CreditCard,  BookOpen, ChevronDownIcon, MessageCircle } from "lucide-react";
import ActiveLink from "../shared/ActiveLink";

const menuItems = [{ id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/admin" }];

const courseSubItems = [
  { id: "all-course", label: "All Course", path: "/admin/courses" },
  { id: "add-course", label: "Add Course", path: "/admin/courses/add-course" },
];

const instructorsSubItems = [
  { id: "all-instructors", label: "All Instructors", path: "/admin/instructors" },
];

const studentSubItems = [{ id: "all-student", label: "All Student", path: "/admin/students", icon: Users }];

const communicationSubItems = [
  { id: "discussion", label: "Discussion", path: "/admin/communication" },
  { id: "review-course", label: "Review Course", path: "/admin/communication/reviews" },
];

const paymentsSubItems = [
  { id: "all-payment", label: "All Payments", path: "/admin/payment", icon: CreditCard },
  { id: "all-payment/payout", label: "Payout", path: "/admin/payment/payout", icon: CreditCard },
];

export const Sidebar = () => {
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
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-100 hover:text-primary"
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
                    <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 font-medium hover:bg-gray-100 hover:text-primary rounded-md">
                      <span>{subItem.label}</span>
                    </h4>
                  </ActiveLink>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Instructor Accordion */}
          <AccordionItem value="instructor" className="border-none">
            <AccordionTrigger
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-100 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5" />
                <span>Instructor</span>
              </div>
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="ml-6 mt-1">
                {instructorsSubItems.map((subItem) => (
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
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-100 hover:text-primary"
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
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-100 hover:text-primary"
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

          {/* Payment Accordion */}
          <AccordionItem value="payment" className="border-none">
            <AccordionTrigger
              className={cn(
                "flex items-center justify-between gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200 hover:bg-gray-100 hover:text-primary"
              )}
            >
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5" />
                <span>Payment</span>
              </div>
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
            </AccordionTrigger>
            <AccordionContent className="pb-0">
              <div className="ml-6 mt-1">
                {paymentsSubItems.map((subItem) => (
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
};
