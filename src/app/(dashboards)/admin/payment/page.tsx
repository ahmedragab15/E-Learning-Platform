import { MetricCard } from "@/components/admin-dashboard/MetricCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Trophy, Wallet, Eye, Edit } from "lucide-react";

const paymentTransactions = [
  {
    id: "1",
    photo: "/placeholder.svg",
    name: "Angela Saraswati",
    email: "angelaSaraswati@gmail.com",
    amount: "$200",
    status: "Success",
  },
  {
    id: "2",
    photo: "/placeholder.svg",
    name: "Robert Anderson",
    email: "robertanderson@gmail.com",
    amount: "$200",
    status: "Success",
  },
  {
    id: "3",
    photo: "/placeholder.svg",
    name: "Chika Miscela",
    email: "chikamiss@gmail.com",
    amount: "$200",
    status: "Success",
  },
  {
    id: "4",
    photo: "/placeholder.svg",
    name: "Angela Saraswati",
    email: "angelaSaraswati@gmail.com",
    amount: "$200",
    status: "Success",
  },
  {
    id: "5",
    photo: "/placeholder.svg",
    name: "Robert Anderson",
    email: "robertanderson@gmail.com",
    amount: "$200",
    status: "Success",
  },
  {
    id: "6",
    photo: "/placeholder.svg",
    name: "Chika Miscela",
    email: "chikamiss@gmail.com",
    amount: "$200",
    status: "Success",
  },
];

const Payments = () => {
  return (
    <>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold">Payment</h1>
          <p className="text-muted-foreground">Company Earnings Information</p>
        </div>

        {/* Revenue Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard title="Total Revenue" value="$1000" change="76% increase" icon={<DollarSign className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Success Transfer" value="$10000" change="86% increase" icon={<Trophy className="w-5 h-5 text-muted-foreground" />} />
          <MetricCard title="Your Balance" value="$9000" change="26% increase" icon={<Wallet className="w-5 h-5 text-muted-foreground" />} />
        </div>

        {/* Payment Instruction */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Instruction</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <p className="text-muted-foreground">Make payment to the instructor</p>
            <Button>Transfer Now</Button>
          </CardContent>
        </Card>

        {/* Recent Transfer Transaction */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Recent Transfer Transaction</h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 gap-4 p-4 bg-muted font-medium text-sm">
              <div>Photo</div>
              <div>Name Mentor</div>
              <div>Email</div>
              <div>Total Transfer</div>
              <div>Status</div>
              <div className="col-span-2">Action</div>
            </div>

            <div className="divide-y">
              {paymentTransactions.map((transaction) => (
                <div key={transaction.id} className="grid grid-cols-7 gap-4 p-4 items-center">
                  <div>
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={transaction.photo} alt={transaction.name} />
                      <AvatarFallback>{transaction.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="font-medium">{transaction.name}</div>
                  <div className="text-muted-foreground">{transaction.email}</div>
                  <div className="font-semibold">{transaction.amount}</div>
                  <div>
                    <Badge variant="secondary" className="text-primary bg-blue-secondary">
                      {transaction.status}
                    </Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
