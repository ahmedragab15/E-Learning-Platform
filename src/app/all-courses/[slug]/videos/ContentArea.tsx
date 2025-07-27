import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Star } from "lucide-react";
import { getCourseBySlugAction } from "@/actions/courseActions";
import { notFound } from "next/navigation";
import { getUserFromToken } from "@/lib/verifyJWT";

export async function ContentArea({ slug }: { slug: string }) {
  const user = await getUserFromToken();

  const chosenCourse = await getCourseBySlugAction(slug);
  if (!chosenCourse) {
    notFound();
  }
  const x = () => {
    return chosenCourse?.comments.filter((comment) => comment.courseId === chosenCourse?.id);
  };
  const comments = x();

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <p className="text-muted-foreground">{chosenCourse?.detailDescription}</p>
      </div>
      <Tabs defaultValue="discussion" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
          <TabsTrigger value="quiz">Quiz</TabsTrigger>
        </TabsList>
        <TabsContent value="discussion" className="space-y-6 mt-6">
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="flex space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src={(comment.user.avatarUrl as string) || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"}
                    alt="Profile Image"
                  />
                  <AvatarFallback className="bg-muted">
                    {comment.user.fullname
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div>
                    <h4 className="font-medium text-sm">{comment.user.fullname}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{comment.content}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{`${comment.createdAt.toLocaleDateString()} - ${comment.createdAt.toLocaleTimeString()}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-3">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src={(user?.avatar as string) || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"} alt="Profile Image" />
              <AvatarFallback className="bg-primary text-white">{user?.fullName?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              <Textarea placeholder="Enter your message..." className="min-h-[80px] resize-none" />
              <div className="flex justify-end">
                <Button className="flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Send</span>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="quiz" className="mt-6">
          <div className="text-center py-8">
            <p className="text-muted-foreground">Quiz content would go here</p>
          </div>
        </TabsContent>
      </Tabs>
      <div className="border-t pt-6">
        <div className="text-center space-y-4">
          <h3 className="font-medium">Did you like this lesson?</h3>
          <p className="text-sm text-muted-foreground">Rate this lesson</p>
          <div className="flex justify-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <Star className="h-6 w-6 fill-current" />
              </button>
            ))}
          </div>
          <Button className="mt-4">Submit Rate</Button>
        </div>
      </div>
    </div>
  );
}
