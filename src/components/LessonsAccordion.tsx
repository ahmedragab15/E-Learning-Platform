import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDownIcon, Play } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Prisma } from "@/generated/prisma/client";

type ChapterWithLessons = Prisma.ChapterGetPayload<{
  include: { details: true; };
}>;

interface AccordionProps {
  data: ChapterWithLessons[];
}

const LessonsAccordion = ({ data }: AccordionProps) => {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((topic, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="flex justify-between">
            <h3 className="flex items-center gap-1 text-lg">
              <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
              <span>{topic.topic}</span>
            </h3>
            <h3 className="text-md text-gray-600">{topic.duration}</h3>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-4">
              {topic.details.map((lesson, lessonIndex) => (
                <li key={lessonIndex}>
                  <Link href="#" className="flex justify-between">
                    <h4 className="flex items-center gap-2">
                      <Button size={"icon"} className="bg-primary rounded-full w-2 h-2 p-3">
                        <Play className="w-1 h-1" fill="#fff" />
                      </Button>
                      <span className="text-gray-700 hover:text-primary">{lesson.title}</span>
                    </h4>
                    <h4 className="text-gray-600">{lesson.duration}</h4>
                  </Link>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default LessonsAccordion;
