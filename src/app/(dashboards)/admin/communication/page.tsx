import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Send, Smile } from "lucide-react";

const Discussion = () => {
  const courses = [
    {
      id: 1,
      category: "Design",
      title: "How to be UIUX Designer in 2021",
      discussions: 3,
    },
    {
      id: 2,
      category: "Design",
      title: "How to be UX Designer in 2021",
      discussions: 0,
    },
    {
      id: 3,
      category: "Programming",
      title: "How to be Front End Developer in 2021",
      discussions: 12,
    },
  ];

  const messages = [
    {
      id: 1,
      user: "Lorando Abdi Rahasa",
      avatar: "/lovable-uploads/cacde43a-c6dd-4ad5-a6cd-eea772a41809.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
      time: "2h ago",
      replies: [
        {
          user: "Rafaella Romanza",
          avatar: "/lovable-uploads/d78d369d-7daf-4214-9e84-1ac8ee7750f1.png",
          message:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
          time: "1h ago",
        },
      ],
    },
    {
      id: 2,
      user: "Abraham",
      avatar: "/lovable-uploads/ec638d2b-08a7-434b-91d0-7618610e395f.png",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
      time: "3h ago",
      replies: [],
    },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* <Sidebar activeItem="discussion" /> */}

      <div className="flex-1">

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Discussion</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Course List */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-foreground">Course</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <Card key={course.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <div className="flex-1">
                          <Badge variant="secondary" className="text-xs mb-2">
                            {course.category}
                          </Badge>
                          <h3 className="font-medium text-foreground mb-2">{course.title}</h3>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MessageCircle className="w-4 h-4" />
                            <span>{course.discussions} Discussion</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Discussion Panel */}
            <div>
              <h2 className="text-lg font-semibold mb-4 text-foreground">Discussion</h2>
              <Card className="h-[600px] flex flex-col">
                <CardContent className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {messages.map((message) => (
                    <div key={message.id} className="space-y-3">
                      <div className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={message.avatar} />
                          <AvatarFallback>
                            {message.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-foreground">{message.user}</span>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{message.message}</p>
                          <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                            Replay
                          </Button>
                        </div>
                      </div>

                      {/* Replies */}
                      {message.replies.map((reply, index) => (
                        <div key={index} className="ml-12 flex gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={reply.avatar} />
                            <AvatarFallback>
                              {reply.user
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-foreground text-sm">{reply.user}</span>
                              <span className="text-xs text-muted-foreground">{reply.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{reply.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </CardContent>

                {/* Message Input */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input placeholder="Enter your message" className="flex-1" />
                    <Button variant="ghost" size="icon">
                      <Smile className="w-4 h-4" />
                    </Button>
                    <Button size="icon">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Discussion;
