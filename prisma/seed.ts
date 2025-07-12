import { PrismaClient } from "@/generated/prisma/client";
import { generateSlug } from "@/lib/slugify";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "John Doe",
  //         email: "john@example.com",
  //         avatarUrl: "https://example.com/avatar1.jpg",
  //       },
  //       {
  //         name: "Jane Smith",
  //         email: "jane@example.com",
  //         avatarUrl: "https://example.com/avatar2.jpg",
  //       },
  //     ],
  //     skipDuplicates: true,
  //   });

  // 1. إضافة الفئات أولاً إذا كانت مطلوبة
  await prisma.category.createMany({
    data: [
      { title: "Business", slug: await generateSlug("Category", "Business") },
      { title: "Design", slug: await generateSlug("Category", "Design") },
      { title: "Programming", slug: await generateSlug("Category", "Programming") },
    ],
    skipDuplicates: true,
  });

  await prisma.instructor.createMany({
    data: [{ name: "Robert Anderson", slug: await generateSlug("Instructor", "Robert Anderson") }],
    skipDuplicates: true,
  });

  const courses = [
    {
      title: "Product Manager",
      description: "Learn product management...",
      price: 89,
      categoryId: 1,
      instructorId: 1,
    },
    {
      title: "UI/UX Design",
      description: "Learn UI/UX design...",
      price: 79,
      categoryId: 2,
      instructorId: 1,
    },
  ];

  for (const course of courses) {
    const slug = await generateSlug("Course", course.title);

    await prisma.course.upsert({
      where: { slug },
      update: {},
      create: {
        ...course,
        slug,
        duration: "3 Months",
        lectures: 10,
        translation: "English",
        badgeBg: `bg-${faker.color.human()}-500`,
      },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
