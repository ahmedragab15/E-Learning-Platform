import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Send, Star } from "lucide-react";
import { getCourseBySlugAction } from "@/actions/courseActions";
import { notFound } from "next/navigation";

const comments = [
  {
    name: "Lorenzo Abdi Rahardi",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    time: "2 hours ago",
    replies: 1,
  },
  {
    name: "Rahaatia Ramana",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    time: "3 hours ago",
    replies: 0,
  },
  {
    name: "Abraham",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    time: "5 hours ago",
    replies: 2,
  },
];

export async function ContentArea({ slug }: { slug: string }) {
    const chosenCourse = await getCourseBySlugAction(slug);
    if (!chosenCourse) {
      notFound();
    }
  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
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
                  <AvatarFallback className="bg-muted">
                    {comment.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <div>
                    <h4 className="font-medium text-sm">{comment.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{comment.text}</p>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{comment.time}</span>
                    {comment.replies > 0 && (
                      <button className="flex items-center space-x-1 hover:text-primary">
                        <MessageCircle className="h-3 w-3" />
                        <span>Reply ({comment.replies})</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="bg-primary text-primary-foreground">Y</AvatarFallback>
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
