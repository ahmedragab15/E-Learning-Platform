import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface LessonItem {
  title: string;
  duration: string;
}

interface Topic {
  topic: string;
  lesson: LessonItem[];
}

interface AccordionProps {
  data: Topic[];
}
  

export function AccordionMenu({ data }: AccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {data.map((topic, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{topic.topic}</AccordionTrigger>
          <AccordionContent>
            <ul className="pl-4 space-y-2">
              {topic.lesson.map((lesson, lessonIndex) => (
                <li key={lessonIndex} className="flex justify-between">
                  <span>{lesson.title}</span>
                  <span className="text-muted-foreground">{lesson.duration}</span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
