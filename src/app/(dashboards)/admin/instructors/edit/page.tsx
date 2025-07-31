import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const EditProfile = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold">Edit Profile</h1>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input id="fullname" defaultValue="Angela Saraswati" className="bg-background" />
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="Angela Saraswati" className="bg-background" />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue="+6281325450623" className="bg-background" />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue="angelasaraswati@gmail.com" className="bg-background" />
              </div>

              {/* Registration Date */}
              <div className="space-y-2">
                <Label htmlFor="regdate">Registration Date</Label>
                <Input id="regdate" defaultValue="27, May 2021" className="bg-background" disabled />
              </div>

              {/* Course Category */}
              <div className="space-y-2">
                <Label htmlFor="category">Course Category</Label>
                <Select defaultValue="design">
                  <SelectTrigger className="bg-background">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Save Button */}
            <div className="mt-6">
              <Button>Save Change</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default EditProfile;
