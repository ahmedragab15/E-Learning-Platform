import { Play, Download, Settings, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { getCourseBySlugAction } from "@/actions/courseActions";
import { notFound } from "next/navigation";

export async function VideoPlayer({ slug }: { slug: string }) {
  const chosenCourse = await getCourseBySlugAction(slug);
  if (!chosenCourse) {
    notFound();
  }
  return (
    <div className="space-y-4">
      <div className="relative bg-black rounded-lg overflow-hidden">
        <Image
          width={400}
          height={400}
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="User Research Video - Problem Solving Methods"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Button size="lg" className="rounded-full bg-primary/90 hover:bg-primary">
            <Play className="h-6 w-6 ml-1" />
          </Button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">0:00 / 12:34</div>
          <div className="flex space-x-2">
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <Settings className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button variant="outline" className="flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download This Video</span>
        </Button>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">Translation</span>
          <Switch defaultChecked />
          <span className="text-sm font-medium">ON</span>
        </div>
      </div>
      <Separator />
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Reference</span>
          <Link href="#" className="text-sm text-primary hover:underline">
            {`https://www.courses.com/${slug}`}
          </Link>
        </div>
      </div>
      <Separator />
    </div>
  );
}
