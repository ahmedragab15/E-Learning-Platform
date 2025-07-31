import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Star } from "lucide-react";

const ReviewCourse = () => {
  const courses = [
    {
      id: 1,
      category: "Design",
      title: "How to be UIUX Designer in 2021",
      reviews: 3,
    },
    {
      id: 2,
      category: "Design",
      title: "How to be UX Designer in 2021",
      reviews: 0,
    },
    {
      id: 3,
      category: "Programming",
      title: "How to be Front End Developer in 2021",
      reviews: 12,
    },
  ];

  const reviews = [
    {
      id: 1,
      user: "Abraham",
      avatar: "/lovable-uploads/cacde43a-c6dd-4ad5-a6cd-eea772a41809.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
      rating: 5,
      time: "2 days ago",
    },
    {
      id: 2,
      user: "Alexander",
      avatar: "/lovable-uploads/d78d369d-7daf-4214-9e84-1ac8ee7750f1.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
      rating: 5,
      time: "1 week ago",
    },
    {
      id: 3,
      user: "Robert L",
      avatar: "/lovable-uploads/ec638d2b-08a7-434b-91d0-7618610e395f.png",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis in lectus purus, in diam amet volutpat habitasse.",
      rating: 5,
      time: "2 weeks ago",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-background flex">

      <div className="flex-1">

        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground">Review Course</h1>
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
                            <span>{course.reviews} Review</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Reviews Panel */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Reviews</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Short by:</span>
                  <Select defaultValue="rating-5">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="rating-5">Rating 5</SelectItem>
                      <SelectItem value="rating-4">Rating 4</SelectItem>
                      <SelectItem value="rating-3">Rating 3</SelectItem>
                      <SelectItem value="rating-2">Rating 2</SelectItem>
                      <SelectItem value="rating-1">Rating 1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>
                            {review.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-medium text-foreground">{review.user}</span>
                            <span className="text-xs text-muted-foreground">{review.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{review.review}</p>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10">
                              Replay
                            </Button>
                            <div className="flex gap-1">{renderStars(review.rating)}</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ReviewCourse;
