import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import { Container } from "@/components";
import { Sidebar } from "../Sidebar";
import { VideoPlayer } from "../VideoPlayer";
import { ContentArea } from "../ContentArea";
import { getCourseBySlugAction } from "@/actions/courseActions";

interface Props {
  params: {
    slug: string;
    lessonSlug: string;
  };
}

const LessonPage = async ({ params }: Props) => {
  const { slug, lessonSlug } = params;
  const chosenCourse = await getCourseBySlugAction(slug);
  if (!chosenCourse) {
    notFound();
  }

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      chapter: {
        course: {
          slug: slug,
        },
      },
    },
    include: {
      chapter: {
        select: {
          topic: true,
          course: {
            select: {
              title: true,
              slug: true,
            },
          },
        },
      },
    },
  });

  if (!lesson) {
    console.log("not found");
    return notFound();
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
              <VideoPlayer video={lesson.video} />
              <ContentArea slug={slug} />
            </div>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default LessonPage;
