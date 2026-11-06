import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  courseIcons,
  getAllCourses,
  getCourseBySlug,
} from "../../course-data";

const siteUrl = "https://refinementsoftwaresolutions.com";

const emailEnquiry = (courseName) =>
  `mailto:gobi@refinementsoftwaresolutions.com?subject=${encodeURIComponent(
    `Course enquiry: ${courseName}`,
  )}`;

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

function CourseDetailIcon({ name }) {
  const paths = {
    duration: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    training: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    weekdays: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4m10-4v4M3 10h18m-13 4h.01M12 14h.01M16 14h.01M7 18h.01M12 18h.01" />
      </>
    ),
    weekend: (
      <>
        <path d="M20.6 13.4 11 3.8H4v7l9.6 9.6a2.1 2.1 0 0 0 3 0l4-4a2.1 2.1 0 0 0 0-3Z" />
        <circle cx="7.5" cy="7.5" r="1" />
      </>
    ),
    "weekday-duration": (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    "weekend-duration": (
      <>
        <path d="M12 3v4m0 10v4M3 12h4m10 0h4m-15.4-6.4 2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {};
  }

  const title = `${course.name} Training in Coimbatore`;
  const description = `Explore ${course.name} training in Coimbatore with Refinement Software Solutions. Ask about the syllabus, current availability, fees, and course format.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${title} | Refinement Software Solutions`,
      description,
      url: `${siteUrl}/courses/${course.slug}`,
      images: [
        {
          url: "/logo.png",
          alt: "Refinement Software Solutions Pvt. Ltd.",
        },
      ],
    },
    twitter: {
      card: "summary",
      title: `${title} | Refinement Software Solutions`,
      description,
      images: ["/logo.png"],
    },
    keywords: [
      `${course.name} training in Coimbatore`,
      `${course.name} course`,
      "IT training in Coimbatore",
    ],
  };
}

export default async function CoursePage({ params }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getAllCourses()
    .filter(
      (otherCourse) =>
        otherCourse.category === course.category &&
        otherCourse.slug !== course.slug,
    )
    .slice(0, 3);
  const courseUrl = `${siteUrl}/courses/${course.slug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": `${courseUrl}#course`,
        name: `${course.name} Training`,
        description: course.summary,
        url: courseUrl,
        inLanguage: "en-IN",
        provider: {
          "@type": "Organization",
          name: "Refinement Software Solutions Pvt. Ltd.",
          url: siteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Courses",
            item: `${siteUrl}/#courses`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: course.name,
            item: courseUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="navbar course-navbar">
        <Link href="/" className="brand">
          <Image
            src="/navbar-logo.png"
            alt="Refinement Software Solutions Pvt. Ltd. logo"
            width={327}
            height={78}
            preload
          />
          <span>Refinement Software Solutions Pvt. Ltd.</span>
        </Link>
        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/#courses">All Courses</Link>
          <Link href="/#about">About Us</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <Link href="/#courses">All Courses</Link>
            <Link href="/#about">About Us</Link>
          </nav>
        </details>
        <Link
          href={emailEnquiry(course.name)}
          className="nav-button"
          aria-label={`Email to enquire about ${course.name} training`}
        >
          Enquire Now <span aria-hidden="true">→</span>
        </Link>
      </header>

      <main id="main-content" className="course-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <section className="course-page-hero">
          <div className="course-hero-layout">
            <div className="course-hero-copy">
              <p className="section-eyebrow">{course.category}</p>
              <h1>{course.name} Training in Coimbatore</h1>
              <p className="course-page-summary">{course.summary}</p>
              <div className="course-page-actions">
                <a className="primary-button" href={emailEnquiry(course.name)}>
                  Enquire about {course.name} <span aria-hidden="true">→</span>
                </a>
                <Link className="secondary-button" href="/#courses">
                  Browse all courses
                </Link>
              </div>
              <p className="course-page-location">
                Refinement Software Solutions Pvt. Ltd. · Coimbatore, Tamil Nadu
              </p>
            </div>
            <aside className="course-hero-visual" aria-label={`${course.name} course focus`}>
              <Image
                className="course-training-image"
                src="/about-training.webp"
                alt="Learner working through interactive technology training"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 40vw"
              />
              <span className="course-hero-image-shade" aria-hidden="true" />
              <div className="course-hero-icon">
                <Image
                  src={`/course-icons/${courseIcons[course.name]}`}
                  alt=""
                  width={72}
                  height={72}
                  priority
                />
              </div>
              <p className="course-visual-eyebrow">{course.category}</p>
              <h2>{course.name}</h2>
              <p className="course-visual-caption">
                Training in Coimbatore, Tamil Nadu
              </p>
              <span className="course-visual-decoration" aria-hidden="true" />
            </aside>
          </div>
        </section>

        <section className="course-page-details" aria-labelledby="course-overview-heading">
          <div className="course-overview">
            <p className="section-eyebrow">YOUR COURSE AT A GLANCE</p>
            <h2 id="course-overview-heading">Build your {course.name} skills</h2>
            <p>{course.summary}</p>
            <p>
              Every learner has different goals. Talk with our team to find out
              about the current syllabus, course format, schedule, and fees.
            </p>
            <a className="primary-button" href={emailEnquiry(course.name)}>
              Get course details <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="course-learning-image">
            <Image
              src="/about-learning.webp"
              alt="Learners planning and discussing a learning goal"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
            />
            <p>Explore what you can learn in {course.name}</p>
          </div>
        </section>

        <section className="course-details-section" aria-labelledby="course-details-heading">
          <div className="course-details-card">
            <div className="course-details-heading">
              <p className="section-eyebrow">{course.name.toUpperCase()} TRAINING</p>
              <h2 id="course-details-heading">Course Details</h2>
            </div>
            <dl className="course-details-grid">
              {course.details.map((detail) => (
                <div className="course-detail-item" key={detail.label}>
                  <CourseDetailIcon name={detail.icon} />
                  <dt>{detail.label}</dt>
                  <dd>{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="course-benefits" aria-labelledby="course-benefits-heading">
          <div className="section-heading">
            <p className="section-eyebrow">WHY LEARN {course.name.toUpperCase()}</p>
            <h2 id="course-benefits-heading">Skills you can build</h2>
          </div>
          <ul className="course-benefit-list">
            {course.benefits.map((benefit, index) => (
              <li key={benefit}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="course-outline" aria-labelledby="course-outline-heading">
          <div className="course-outline-heading">
            <p className="section-eyebrow">COURSE OUTLINE</p>
            <h2 id="course-outline-heading">Explore the topics</h2>
            <p>
              Browse the subject areas included in the {course.name} course.
              Contact us to confirm the latest syllabus and module coverage.
            </p>
          </div>
          <ol className="course-outline-list">
            {course.topics.map((topic, index) => (
              <li key={topic}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{topic}</h3>
              </li>
            ))}
          </ol>
        </section>

        {relatedCourses.length > 0 && (
          <section className="related-courses" aria-labelledby="related-heading">
            <div className="section-heading">
              <p className="section-eyebrow">{course.category}</p>
              <h2 id="related-heading">Explore related courses</h2>
            </div>
            <div className="related-course-list">
              {relatedCourses.map((relatedCourse) => (
                <Link
                  className="related-course-card"
                  href={`/courses/${relatedCourse.slug}`}
                  key={relatedCourse.slug}
                >
                  <span>{relatedCourse.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="course-page-footer">
        <p>
          © {new Date().getFullYear()} Refinement Software Solutions Pvt. Ltd.
        </p>
        <Link href="/">Home</Link>
        <a href="mailto:gobi@refinementsoftwaresolutions.com">Contact</a>
      </footer>
    </>
  );
}
