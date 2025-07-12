import { PrismaClient } from "@/generated/prisma/client";
import { generateSlug } from "@/lib/slugify";
import { faker } from "@faker-js/faker";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: Array.from({ length: 10 }, () => ({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatarUrl: faker.image.avatar(),
    })),
    skipDuplicates: true,
  });

  await prisma.category.createMany({
    data: [
      { title: "Business", slug: await generateSlug("Category", "Business"), iconName: "ChartPie" },
      { title: "Design", slug: await generateSlug("Category", "Design"), iconName: "Palette" },
      { title: "Programming", slug: await generateSlug("Category", "Programming"), iconName: "CodeXml" },
      { title: "Health", slug: await generateSlug("Category", "Health"), iconName: "BriefcaseMedical" },
      { title: "Technology", slug: await generateSlug("Category", "Technology"), iconName: "Cpu" },
    ],
    skipDuplicates: true,
  });

  const instructors = await Promise.all(
    Array.from({ length: 20 }, async () => {
      const name = faker.person.fullName();
      return {
        name,
        slug: await generateSlug("Instructor", name),
        avatarUrl: faker.image.avatar(),
        headline: faker.person.jobTitle(),
        summary: faker.lorem.sentences(4),
        bio: faker.lorem.paragraphs(),
        totalStudents: faker.number.int(1000),
        totalReviews: faker.number.int(10000),
        linkedinUrl: faker.internet.url(),
        facebookUrl: faker.internet.url(),
        twitterUrl: faker.internet.url(),
        youtubeUrl: faker.internet.url(),
        websiteUrl: faker.internet.url(),
      };
    })
  );

  await prisma.instructor.createMany({
    data: instructors,
    skipDuplicates: true,
  });

  const categoryIds = (await prisma.category.findMany()).map((c) => c.id);
  const instructorIds = (await prisma.instructor.findMany()).map((i) => i.id);

  const courses = await Promise.all(
    Array.from({ length: 20 }, async () => {
      const title = faker.lorem.words(4);
      return {
        title,
        price: faker.number.float({ min: 50, max: 200, multipleOf: 1 }),
        slug: await generateSlug("Course", title),
        description: faker.lorem.sentences(3),
        detailDescription: faker.lorem.paragraphs(5),
        imageUrl: faker.image.urlLoremFlickr({ category: "nature" }),
        categoryId: faker.helpers.arrayElement(categoryIds),
        instructorId: faker.helpers.arrayElement(instructorIds),
        duration: "3 Months",
        lectures: faker.number.int({ min: 50, max: 200 }),
        translation: "English",
        badgeBg: `bg-${faker.color.human()}-500`,
        ratingCount: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
        ratingTotal: faker.number.int({ min: 30, max: 300 }),
      };
    })
  );
  await prisma.course.createMany({
    data: courses,
    skipDuplicates: true,
  });

  const courseIds = (await prisma.course.findMany()).map((c) => c.id);
  const userIds = (await prisma.user.findMany()).map((c) => c.id);

  const news = await Promise.all(
    Array.from({ length: 20 }, async () => {
      const title = faker.lorem.words(4);
      return {
        title,
        slug: await generateSlug("Course", title),
        imageUrl: faker.image.urlLoremFlickr({ category: "nature" }),
        categoryId: faker.helpers.arrayElement(categoryIds),
        description: faker.lorem.sentences(3),
        reads: faker.number.int({ min: 50, max: 200 }),
        badgeBg: `bg-${faker.color.human()}-500`,
        courseId: faker.helpers.arrayElement(courseIds),
      };
    })
  );
  await prisma.news.createMany({
    data: news,
    skipDuplicates: true,
  });

  await prisma.review.createMany({
    data: Array.from({ length: 10 }, () => ({
      userId: faker.helpers.arrayElement(userIds),
      courseId: faker.helpers.arrayElement(courseIds),
      rating: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      review: faker.lorem.sentences(4),
      university: faker.company.name(),
    })),
    skipDuplicates: true,
  });

  await prisma.courseLearning.createMany({
    data: Array.from({ length: 20 }, () => ({
      courseId: faker.helpers.arrayElement(courseIds),
      title: faker.lorem.words(4),
      description: faker.lorem.sentences(3),
    })),
    skipDuplicates: true,
  });

  const learningIds = (await prisma.courseLearning.findMany()).map((c) => c.id);

  await prisma.learningItem.createMany({
    data: Array.from({ length: 20 }, () => ({
      learningId: faker.helpers.arrayElement(learningIds),
      item: faker.lorem.words(4),
    })),
    skipDuplicates: true,
  });

  await prisma.lesson.createMany({
    data: Array.from({ length: 20 }, () => ({
      courseId: faker.helpers.arrayElement(courseIds),
      topic: faker.lorem.words(3),
      duration: faker.number.int({ min: 1, max: 20 }) + " mins",
    })),
    skipDuplicates: true,
  });

  const lessonIds = (await prisma.lesson.findMany()).map((c) => c.id);

  await prisma.lessonDetail.createMany({
    data: Array.from({ length: 20 }, () => ({
      lessonId: faker.helpers.arrayElement(lessonIds),
      title: faker.lorem.words(3),
      duration: faker.number.int({ min: 1, max: 20 }) + " mins",
    })),
    skipDuplicates: true,
  });

  await prisma.achievement.createMany({
    data: Array.from({ length: 20 }, () => ({
      courses: 20,
      mentor: 20,
      courseEnroll: faker.number.int({ min: 50, max: 300 }),
      activeUsers: 10,
    })),
    skipDuplicates: true,
  });

  await prisma.enrollment.createMany({
    data: Array.from({ length: 20 }, () => ({
      userId: faker.helpers.arrayElement(userIds),
      courseId: faker.helpers.arrayElement(courseIds),
      progress: 20,
      finishedLessons: 9,
    })),
    skipDuplicates: true,
  });

  await prisma.courseRating.createMany({
    data: Array.from({ length: 20 }, () => ({
      courseId: faker.helpers.arrayElement(courseIds),
      average: faker.number.float({ min: 1, max: 5, multipleOf: 0.1 }),
      totalReviews: 200,
      stars5: 160,
      stars4: 20,
      stars3: 10,
      stars2: 5,
      stars1: 5,
    })),
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
