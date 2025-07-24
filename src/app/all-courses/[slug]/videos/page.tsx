import { getCourseBySlugAction } from "@/actions/courseActions";
import { notFound } from "next/navigation";
import React from "react";
import { Sidebar } from "./Sidebar";
import { VideoPlayer } from "./VideoPlayer";
import { ContentArea } from "./ContentArea";
import { Container } from "@/components";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const chosenCourse = await getCourseBySlugAction(slug);
  if (!chosenCourse) {
    notFound();
  }
  return (
    <Container>
      <div className="flex">
        <Sidebar slug={slug} />
        <main className="flex-1 p-6">
          <div className="max-w-4xl">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{chosenCourse.title}</h1>
              <p className="text-muted-foreground">{chosenCourse.description}</p>
            </div>
            <div className="space-y-4">
              <VideoPlayer slug={slug} />
              <ContentArea slug={slug} />
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default page;
