"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight, Upload, Edit, X, Plus } from "lucide-react";

const EditCourseForm = () => {
  const [expandedSection, setExpandedSection] = useState("userResearch");

  // Mock course data - in real app, this would come from API based on ID
  const courseData = {
    id: 1,
    title: "UI/UX Design For Beginner",
    category: "design",
    price: "299",
    createDate: "27-may-2021",
    couponCode: "UIUX2021",
    expiredDate: "july-21-2021",
    discountPrice: "50",
    discountPercent: "50",
    description: "A comprehensive course covering the fundamentals of UI/UX design for beginners. Learn design principles, user research, wireframing, and prototyping."
  };

  const sections = [
    {
      id: "userResearch",
      title: "User Research",
      items: ["Introduction", "Emphasize", "Problem Solve Methods", "Usability Testing"]
    },
    {
      id: "wireframe",
      title: "Wireframe",
      items: []
    },
    {
      id: "figmaBasic",
      title: "Figma Basic",
      items: []
    }
  ];

  const lessons = [
    { title: "Introduction", editable: true },
    { title: "Emphasize", editable: true },
    { title: "Problem Solve Methods", editable: true },
    { title: "Usability Testing", editable: true }
  ];

  return (
    <div className="min-h-screen bg-background flex">
      
      <div className="flex-1">
        
        <main className="p-6">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="mb-4">
                <h1 className="text-2xl font-bold">Edit Course</h1>
                <p className="text-muted-foreground">Course ID: {1}</p>
              </div>
              
              <Tabs defaultValue="basic" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="basic" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                    Basic Information
                  </TabsTrigger>
                  <TabsTrigger value="lesson">Lesson</TabsTrigger>
                  <TabsTrigger value="translation">Translation</TabsTrigger>
                  <TabsTrigger value="question">Question</TabsTrigger>
                </TabsList>

                <TabsContent value="basic" className="space-y-6 mt-6">
                  <CardContent className="space-y-6 p-0">
                    {/* Course Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="courseName">Course Name</Label>
                        <Input id="courseName" defaultValue={courseData.title} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="courseCategory">Course Category</Label>
                        <Select defaultValue={courseData.category}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="development">Development</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="coursePrice">Course Price</Label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
                            $
                          </span>
                          <Input id="coursePrice" defaultValue={courseData.price} className="rounded-l-none" />
                        </div>
                      </div>
                    </div>

                    {/* Course Create Date */}
                    <div className="space-y-2">
                      <Label htmlFor="courseCreate">Course Create</Label>
                      <Select defaultValue={courseData.createDate}>
                        <SelectTrigger className="w-full md:w-48">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="27-may-2021">27 May 2021</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Add Coupon */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">Add Coupon</h3>
                        <span className="text-sm text-muted-foreground">(Optional)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="couponCode">Coupon Code</Label>
                          <Input id="couponCode" defaultValue={courseData.couponCode} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="expiredDate">Expired date</Label>
                          <Select defaultValue={courseData.expiredDate}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="july-21-2021">July, 21 2021</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="discountPrice">Discount Price</Label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
                              $
                            </span>
                            <Input id="discountPrice" defaultValue={courseData.discountPrice} className="rounded-l-none" />
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-red-500">Coupon code must consist of letters and numbers</p>
                    </div>

                    {/* Add Discount */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">Add Discount</h3>
                        <span className="text-sm text-muted-foreground">(Optional)</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiredDateDiscount">Expired date</Label>
                          <Select defaultValue="july-21-2021">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="july-21-2021">July, 21 2021</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="discountPricePercent">Discount Price</Label>
                          <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-muted-foreground bg-muted border border-r-0 border-input rounded-l-md">
                              %
                            </span>
                            <Input id="discountPricePercent" defaultValue={courseData.discountPercent} className="rounded-l-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Course Description */}
                    <div className="space-y-2">
                      <Label htmlFor="courseDescription">Course Description</Label>
                      <Textarea 
                        id="courseDescription" 
                        defaultValue={courseData.description}
                        className="min-h-[120px]"
                      />
                    </div>

                    {/* Upload Course Thumbnail */}
                    <div className="space-y-2">
                      <Label>Upload Course Thumbnail</Label>
                      <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-8 h-8 text-muted-foreground" />
                          <p className="text-muted-foreground">Upload file or Drag and Drop</p>
                          <Button variant="default" className="mt-2">
                            Browse
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Sections</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Section
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        {sections.map((section) => (
                          <Collapsible
                            key={section.id}
                            open={expandedSection === section.id}
                            onOpenChange={() => setExpandedSection(expandedSection === section.id ? "" : section.id)}
                          >
                            <CollapsibleTrigger className="flex items-center justify-between w-full p-3 bg-muted/50 rounded-lg hover:bg-muted">
                              <div className="flex items-center gap-2">
                                {expandedSection === section.id ? (
                                  <ChevronDown className="w-4 h-4" />
                                ) : (
                                  <ChevronRight className="w-4 h-4" />
                                )}
                                <span className="font-medium">{section.title}</span>
                              </div>
                              <Button variant="ghost" size="sm" className="text-primary">
                                Edit
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="ml-6 mt-2 space-y-2">
                              {section.items.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-background rounded border">
                                  <span className="text-sm">{item}</span>
                                  <div className="flex gap-1">
                                    <Button variant="ghost" size="sm" className="text-primary h-8 w-8 p-0">
                                      <Edit className="w-3 h-3" />
                                    </Button>
                                    <Button variant="ghost" size="sm" className="text-red-500 h-8 w-8 p-0">
                                      <X className="w-3 h-3" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </CollapsibleContent>
                          </Collapsible>
                        ))}
                      </div>
                    </div>

                    {/* Lessons */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">lessons</h3>
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Lesson
                        </Button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="font-medium text-sm text-muted-foreground mb-2">User Research</div>
                        {lessons.map((lesson, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-background rounded border">
                            <span className="text-sm">{lesson.title}</span>
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm" className="text-primary h-8 w-8 p-0">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500 h-8 w-8 p-0">
                                <X className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Save Button */}
                    <div className="flex justify-center pt-6">
                      <Button className="px-8">Update Course</Button>
                    </div>
                  </CardContent>
                </TabsContent>

                <TabsContent value="lesson">
                  <div className="text-center py-8 text-muted-foreground">
                    Lesson content will be here
                  </div>
                </TabsContent>

                <TabsContent value="translation">
                  <div className="text-center py-8 text-muted-foreground">
                    Translation content will be here
                  </div>
                </TabsContent>

                <TabsContent value="question">
                  <div className="text-center py-8 text-muted-foreground">
                    Question content will be here
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default EditCourseForm;