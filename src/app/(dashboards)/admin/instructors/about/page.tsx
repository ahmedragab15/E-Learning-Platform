import { TransactionTable } from "@/components/admin-dashboard/TransactionTable";
import { MetricCard } from "@/components/admin-dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mentorTransactions = [
  {
    id: "1",
    course: "How to be UIUX Designer ...",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "2",
    course: "How to be Front End Dev ...",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "3",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "4",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
  {
    id: "5",
    course: "User Experience Designer",
    category: "Design",
    user: "Afif Hanifudin",
    date: "Wed, 26 May 2021",
    price: "$299",
  },
];

const EditMentor = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold">Edit Mentor</h1>
          <p className="text-muted-foreground">Information Identity</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Mentor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mentor Profile */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder.svg" alt="Robert Anderson" />
                    <AvatarFallback>RA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <h2 className="text-xl font-bold">Robert Anderson</h2>
                    <p className="text-muted-foreground text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dignissim placerat turpis et quiaque quis.
                    </p>

                    <div className="space-y-2">
                      <h3 className="font-semibold">Contact me</h3>
                      <div className="flex space-x-4 text-sm">
                        <span className="text-muted-foreground">angelasaraswati@gmail.com</span>
                        <span className="text-muted-foreground">+6281325450623</span>
                      </div>
                      <Button variant="link" className="p-0 h-auto text-primary">
                        Edit Profile →
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transaction */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Recent Transaction</h2>
              <TransactionTable transactions={mentorTransactions} />
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Button variant="link">View All →</Button>
            </div>

            {/* My Course */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">My Course</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 rounded-t-lg"></div>
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="mb-2">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                        Programming
                      </Badge>
                      <h3 className="font-semibold mb-2">How to be a Back End Developer in 2021</h3>
                      <p className="text-sm text-muted-foreground mb-3">Alexander Xinn</p>
                      <div className="flex items-center justify-between">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star}>★</span>
                          ))}
                          <span className="text-sm text-muted-foreground ml-1">4.7(256)</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <Button variant="outline" size="sm">
                          View Course
                        </Button>
                        <span className="font-bold text-primary">$150</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-4">Information Courses</h3>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard title="Total Course" value="15" className="text-center" />
                <MetricCard title="Total Students" value="900" className="text-center" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Information Income</h3>
              <div className="grid grid-cols-2 gap-4">
                <MetricCard title="Total Revenue" value="$7200" className="text-center" />
                <MetricCard title="Success Transfer" value="$2000" className="text-center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMentor;
