import { getAllCourses } from "./course-data";

const siteUrl = "https://refinementsoftwaresolutions.com";

export default function sitemap() {
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getAllCourses().map((course) => ({
      url: `${siteUrl}/courses/${course.slug}`,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}
