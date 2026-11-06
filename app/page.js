
import Image from "next/image";
import Link from "next/link";
import AboutVisual from "./about-visual";
import { courseGroups, courseIcons } from "./course-data";
import EnquiryForm from "./enquiry-form";
import { hasCompanyLogo } from "./site-config";

const trendingCourses = [
  "Redhat",
  "Cloud Computing",
  "JAVA / Full Stack",
  "Android",
  "Angular",
  "React JS",
  "Node JS",
  "PHP / MySQL",
  "CCNA",
  "Big Data Hadoop",
  "Python / Full Stack",
  "Ethical Hacking",
  "Software Testing",
  "IoT",
  "AI",
  "ITIL",
];

const enquiryHref = (subject) =>
  `mailto:gobi@refinementsoftwaresolutions.com?subject=${encodeURIComponent(subject)}`;

const courseOptions = [
  ...new Set([
    ...courseGroups.flatMap((group) =>
      group.courses.map((course) => course.name),
    ),
    ...trendingCourses,
  ]),
];

const frequentlyAskedQuestions = [
  {
    question: "How can I choose the right course for my career?",
    answer:
      "Share your interests and goals with the team. Contact Refinement Software Solutions to discuss course options, curriculum details, and current availability.",
  },
  {
    question: "I am not currently working. Is a course suitable for me?",
    answer:
      "Course options cover a range of technology topics. Contact the team to discuss your background, learning goals, and suitable course details.",
  },
  {
    question: "What salary can I expect after completing a course?",
    answer:
      "Salary outcomes vary by role, experience, location, and employer. A course cannot guarantee a particular salary or job; contact the team to discuss course content and career pathways.",
  },
  {
    question: "How can I ask about course fees or certificates?",
    answer:
      "Send an enquiry with the course you are interested in, and the team can share current details about fees, course availability, and completion certificates.",
  },
];

export const metadata = {
  title: "IT Training Institute in Coimbatore",
  description:
    "Explore IT training courses in Python, Full Stack Development, Data Analytics, AI, cloud, and more at Refinement Software Solutions in Coimbatore.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "IT Training Institute in Coimbatore | Refinement Software Solutions",
    description:
      "Explore IT training in Python, Full Stack Development, data, AI, cloud, and more in Coimbatore, Tamil Nadu.",
    url: "/",
    images: [
      {
        url: "/logo.png",
        alt: "Refinement Software Solutions Pvt. Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title:
      "IT Training Institute in Coimbatore | Refinement Software Solutions",
    description:
      "Explore Python, Full Stack Development, Data Analytics, AI, cloud, and other IT training courses in Coimbatore.",
    images: ["/logo.png"],
  },
  keywords: [
    "IT training in Coimbatore",
    "Python training in Coimbatore",
    "Full Stack Development course",
    "AI training",
    "software development in Coimbatore",
  ],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="navbar">
        <Link href="/" className="brand">
          {hasCompanyLogo && (
            <Image
              src="/navbar-logo.png"
              alt="Refinement Software Solutions Pvt. Ltd. logo"
              width={327}
              height={78}
              preload
            />
          )}
          <span>Refinement Software Solutions Pvt. Ltd.</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          <Link href="#home">Home</Link>
          <div className="courses-nav-item">
            <Link
              href="#courses"
              className="courses-nav-trigger"
            >
              Courses
            </Link>
            <div className="course-mega-menu">
              {courseGroups.map((group) => (
                <section className="course-mega-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.courses.map((course) => (
                      <li key={course.slug}>
                        <Link href={`/courses/${course.slug}`}>
                          <Image
                            src={`/course-icons/${courseIcons[course.name]}`}
                            alt=""
                            width={20}
                            height={20}
                          />
                          <span>{course.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
              <Link className="course-mega-all" href="#courses">
                View all courses <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <Link href="#about">About Us</Link>
          <Link href="#learning-support">Learning Support</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">Menu</summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <Link href="#home">Home</Link>
            <details className="mobile-course-menu">
              <summary>Courses</summary>
              <div className="mobile-course-links">
                {courseGroups.flatMap((group) =>
                  group.courses.map((course) => (
                    <Link href={`/courses/${course.slug}`} key={course.slug}>
                      {course.name}
                    </Link>
                  )),
                )}
                <Link href="#courses">View all courses</Link>
              </div>
            </details>
            <Link href="#about">About Us</Link>
            <Link href="#learning-support">Learning Support</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </details>

        <Link
          href="#contact"
          className="nav-button"
          aria-label="Go to the enquiry form"
        >
          Enquire Now <span aria-hidden="true">→</span>
        </Link>
      </header>

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://refinementsoftwaresolutions.com/#organization",
                  name: "Refinement Software Solutions Pvt. Ltd.",
                  url: "https://refinementsoftwaresolutions.com",
                  logo: "https://refinementsoftwaresolutions.com/logo.png",
                  email: "gobi@refinementsoftwaresolutions.com",
                  telephone: ["+91-9791611305", "0422-4272030"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "No 95/5, First Floor, Gokhale Street, Ram Nagar",
                    addressLocality: "Coimbatore",
                    postalCode: "641009",
                    addressRegion: "Tamil Nadu",
                    addressCountry: "IN",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://refinementsoftwaresolutions.com/#website",
                  url: "https://refinementsoftwaresolutions.com",
                  name: "Refinement Software Solutions Pvt. Ltd.",
                  publisher: {
                    "@id":
                      "https://refinementsoftwaresolutions.com/#organization",
                  },
                  inLanguage: "en-IN",
                },
                {
                  "@type": "WebPage",
                  "@id": "https://refinementsoftwaresolutions.com/#webpage",
                  url: "https://refinementsoftwaresolutions.com/",
                  name: "IT Training Institute in Coimbatore",
                  isPartOf: {
                    "@id":
                      "https://refinementsoftwaresolutions.com/#website",
                  },
                  about: {
                    "@id":
                      "https://refinementsoftwaresolutions.com/#organization",
                  },
                  inLanguage: "en-IN",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://refinementsoftwaresolutions.com/#faqpage",
                  mainEntity: frequentlyAskedQuestions.map(({ question, answer }) => ({
                    "@type": "Question",
                    name: question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: answer,
                    },
                  })),
                },
              ],
            }),
          }}
        />
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="tagline">
              IT TRAINING · COIMBATORE · TAMIL NADU
            </p>

            <h1>
              IT Training Institute in <span>Coimbatore</span>
            </h1>

            <p className="hero-description">
              Explore courses in software development, data, AI, cloud,
              networking, business tools, and cybersecurity. Discuss your
              learning goals and confirm course details with our team.
            </p>

            <div className="hero-buttons">
              <Link href="#courses" className="primary-button">
                Browse Training Courses <span aria-hidden="true">→</span>
              </Link>

              <Link href="#contact" className="secondary-button">
                Talk to Our Team
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-benefit">
                <span aria-hidden="true">✓</span>
                15+ Years of Experience
              </span>
              <span className="hero-benefit">
                <span aria-hidden="true">✓</span>
                Structured Learning Paths
              </span>
            </div>
          </div>

          <div
            className="hero-visual"
            role="group"
            aria-label="Explore our course topics"
          >
            <div className="hero-training-image">
              <Image
                src="/about-training.webp"
                alt="Technology training session with a laptop"
                fill
                priority
                sizes="(max-width: 900px) 80vw, (max-width: 1180px) 42vw, 40vw"
              />
            </div>
            <div className="course-orbit">
              <div className="course-orbit-track">
                {courseGroups
                  .flatMap((group) => group.courses)
                  .map((course, index, courses) => {
                    const angle = (360 / courses.length) * index;

                    return (
                      <div
                        className="course-orbit-position"
                        key={course.slug}
                        style={{ "--course-angle": `${angle}deg` }}
                      >
                        <Link
                          href={`/courses/${course.slug}`}
                          className="course-orbit-item"
                          aria-label={`View ${course.name} course details`}
                        >
                          <span className="course-orbit-content">
                            <span className="course-orbit-icon">
                              <Image
                                src={`/course-icons/${courseIcons[course.name]}`}
                                alt=""
                                width={32}
                                height={32}
                              />
                            </span>
                            <span className="course-orbit-label">
                              {course.name}
                            </span>
                          </span>
                        </Link>
                      </div>
                    );
                  })}
              </div>
              <div className="course-orbit-center">
                <p className="course-center-kicker">IT TRAINING</p>
                <h2>Explore your next learning path</h2>
                <p className="course-center-description">
                  Technology courses for different interests and goals
                </p>
                <span className="course-center-divider" aria-hidden="true"></span>
                <p className="course-center-location">
                  Coimbatore, Tamil Nadu
                </p>
              </div>
              <div className="course-orbit-ring" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        <section className="content-section courses-section" id="courses">
          <div className="section-heading">
            <p className="section-eyebrow">IT TRAINING</p>
            <h2>Explore our training courses</h2>
            <p>
              Explore course topics across software development, data, AI,
              business tools, cloud, networking, and cybersecurity. Open a
              course page to review topics and ask the team for current details.
            </p>
          </div>

          <div className="course-program-grid">
            {courseGroups.flatMap((group) =>
              group.courses.map((course) => (
                <Link
                  className="course-program-card"
                  href={`/courses/${course.slug}`}
                  key={course.slug}
                  aria-label={`View full details for ${course.name} course`}
                >
                  <div className="course-program-card-header">
                    <span className="course-program-icon">
                      <Image
                        src={`/course-icons/${courseIcons[course.name]}`}
                        alt=""
                        width={36}
                        height={36}
                      />
                    </span>
                    <span className="course-program-category">
                      {group.title}
                    </span>
                  </div>
                  <div className="course-program-card-content">
                    <h3>{course.name} Course</h3>
                    <p>{course.summary}</p>
                    <ul aria-label={`${course.name} topics`}>
                      {course.topics.slice(0, 3).map((topic) => (
                        <li key={topic}>{topic}</li>
                      ))}
                    </ul>
                    <span className="course-program-link">
                      View Course Details <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              )),
            )}
          </div>
        </section>

        <section
          className="content-section learning-support-section"
          id="learning-support"
          aria-labelledby="learning-support-heading"
        >
          <div className="section-heading">
            <p className="section-eyebrow">SUPPORT FOR YOUR LEARNING</p>
            <h2 id="learning-support-heading">
              More than a list of technology courses
            </h2>
            <p>
              The training platform brings together course pathways, skills
              assessment, completion certificates, and tools to help learners
              present their skills.
            </p>
          </div>

          <div className="learning-support-grid">
            <article className="learning-support-card">
              <span className="learning-support-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M9 10h30v28H9zM16 18h16M16 24h16M16 30h10" />
                  <path d="m31 34 3 3 6-7" />
                </svg>
              </span>
              <h3>Structured learning paths</h3>
              <p>
                Explore course topics organized into learning paths based on
                your areas of interest.
              </p>
            </article>

            <article className="learning-support-card">
              <span className="learning-support-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M13 7h22v34H13zM19 15h10M19 22h10M19 29l4 4 8-9" />
                </svg>
              </span>
              <h3>Skills assessment</h3>
              <p>
                Assessments are part of the platform to help learners review
                their understanding.
              </p>
            </article>

            <article className="learning-support-card">
              <span className="learning-support-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <path d="M11 7h21l6 6v17H11zM32 7v7h6M16 20h16M16 25h11" />
                  <circle cx="31" cy="34" r="7" />
                  <path d="m27 40-1 6 5-3 5 3-1-6" />
                </svg>
              </span>
              <h3>Course completion certificates</h3>
              <p>
                Contact the team to confirm certificate details for the course
                you are interested in.
              </p>
            </article>

            <article className="learning-support-card">
              <span className="learning-support-icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="18" cy="16" r="7" />
                  <path d="M5 39c0-7 5-12 13-12 4 0 7 1 9 4M30 10h13v22H30zM33 16h7M33 21h7M33 26h4" />
                  <path d="m26 37 3 3 6-7" />
                </svg>
              </span>
              <h3>Resume builder</h3>
              <p>
                Use the resume builder described on the platform to present
                your skills and qualifications.
              </p>
            </article>
          </div>
          <div className="learning-support-cta">
            <p>Want to know how these features fit a course?</p>
            <Link href="#contact" className="text-link">
              Ask the training team <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="content-section about-section" id="about">
          <AboutVisual />

          <div className="about-content">
            <p className="section-eyebrow">ABOUT REFINEMENT SOFTWARE SOLUTIONS</p>
            <h2>15+ years of software and IT training experience</h2>
            <p className="about-description">
              Refinement Software Solutions is an IT training institute in
              Coimbatore offering courses across a range of technology topics.
              The company describes structured career paths, assessments, and
              course completion certificates as part of its training platform.
              It also provides a resume builder to help learners present their
              skills and qualifications.
            </p>
            <p className="about-description">
              The institute focuses on accessible training and professional
              development, with sessions led by experienced professionals.
              Contact the team for current course availability and details.
            </p>

            <div className="about-principles">
              <article className="about-principle">
                <span className="about-principle-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <path d="M7 24s6-10 17-10 17 10 17 10-6 10-17 10S7 24 7 24Z" />
                    <circle cx="24" cy="24" r="5" />
                    <path d="M8 11V7h7M40 11V7h-7M8 37v4h7M40 37v4h-7" />
                  </svg>
                </span>
                <div>
                  <h3>Our Vision</h3>
                  <p>
                    We impart the knowledge, skill, desire, and opportunity to
                    succeed in a way that leads to career success.
                  </p>
                </div>
              </article>

              <article className="about-principle">
                <span className="about-principle-icon" aria-hidden="true">
                  <svg viewBox="0 0 48 48" fill="none">
                    <circle cx="23" cy="25" r="14" />
                    <circle cx="23" cy="25" r="8" />
                    <path d="M23 25 40 8m-7 0h7v7M10 12l4 4M9 25h5m-2 13 4-4" />
                    <path d="M23 25 31 17" />
                  </svg>
                </span>
                <div>
                  <h3>Our Mission</h3>
                  <p>
                    Providing excellent training and development for
                    professional growth through services, innovation, and
                    quality that meet the needs of learners and companies.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section faq-contact-section" id="faq">
          <div className="faq-column">
            <p className="section-eyebrow">FAQ</p>
            <h2>Get Every Single Answer Here</h2>

            <div className="faq-list">
              {frequentlyAskedQuestions.map(({ question, answer }, index) => (
                <details className="faq-item" key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="contact-panel" id="contact">
            <div className="contact-panel-heading">
              <p className="section-eyebrow">ENQUIRE NOW</p>
              <h2>Make a Contact</h2>
              <p>
                Tell us what you are looking for and we&apos;ll help you find
                the right next step.
              </p>
              <p className="contact-form-disclaimer">
                This form checks your entries in this browser only. It does not
                send or store your message.
              </p>
            </div>
            <EnquiryForm courseOptions={courseOptions} />
            <p className="contact-email-fallback">
              Want to contact us directly?{" "}
              <a href="mailto:gobi@refinementsoftwaresolutions.com">
                Email our team
              </a>
              .
            </p>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="footer-cta">
          <p>
            Level up, step in, and start your career journey with Refinement
            Software Solutions
          </p>
          <Link href="#courses" className="footer-cta-button">
            Explore Now <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="footer-main">
          <section className="footer-about">
            {hasCompanyLogo && (
              <Image
                src="/logo.png"
                alt="Refinement Software Solutions Pvt. Ltd. logo"
                width={180}
                height={52}
                className="footer-logo"
              />
            )}
            <p>
              Refinement Software Solutions is a software and online training
              institute in Coimbatore. The company provides IT courses with
              structured learning, skills assessment, and course completion
              certificates.
            </p>
          </section>

          <nav className="footer-links" aria-label="Quick links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#courses">Courses</Link></li>
              <li><Link href="#learning-support">Learning Support</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#footer-contact">Contact Us</Link></li>
            </ul>
          </nav>

          <nav className="footer-courses" aria-label="Trending courses">
            <h2>Trending Courses</h2>
            <ul>
              {trendingCourses.map((course) => (
                <li key={course}>
                  <Link
                    href={enquiryHref(`Course enquiry: ${course}`)}
                    aria-label={`Email to enquire about ${course}`}
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-contact" id="footer-contact">
            <h2>Contact Us</h2>
            <address>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  ☎
                </span>
                <p>
                  <a href="tel:+919791611305">+91-9791611305</a>
                  <span className="footer-contact-separator">, </span>
                  <a href="tel:+914224272030">0422-4272030</a>
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  ✉
                </span>
                <p>
                  <a href="mailto:gobi@refinementsoftwaresolutions.com">
                    gobi@refinementsoftwaresolutions.com
                  </a>
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  ⌖
                </span>
                <p>
                  <a
                    href="https://maps.google.com/?q=No+95%2F5%2C+Gokhale+Street%2C+Ram+Nagar%2C+Coimbatore+641009"
                    target="_blank"
                    rel="noreferrer"
                  >
                    No 95/5, First Floor,
                    <br />
                    Gokhale Street, Ram Nagar,
                    <br />
                    Coimbatore-641009
                  </a>
                </p>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">
                  ◷
                </span>
                <div>
                  <p className="footer-hours-title">Open Hours</p>
                  <p>Mon–Sat: 9:00 AM to 8:00 PM</p>
                  <p>Sunday: 9:30 AM to 5:00 PM</p>
                </div>
              </div>
            </address>
          </section>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Refinement Software Solutions Pvt. Ltd.
            All rights reserved.
          </p>
          <Link href="#home">Back to top ↑</Link>
        </div>
      </footer>
    </>
  );
}
