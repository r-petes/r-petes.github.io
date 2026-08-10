import React, { useEffect, useState } from "react";
import headerImage from "../assets/header.png";
import footerImage from "../assets/footer.png";
import portraitPhoto from "../assets/profile_2025.png";

const colors = {
  bg: "oklch(98% 0.006 90)",
  panel: "oklch(95% 0.008 90)",
  ink: "oklch(17% 0.012 90)",
  inkSoft: "oklch(38% 0.012 90)",
  inkFaint: "oklch(55% 0.01 90)",
  hairline: "oklch(87% 0.008 90)",
  accent: "#919DD3",
  accentDark: "oklch(38% 0.09 275)",
  accentLight: "oklch(80% 0.06 275)",
  accentSoft: "oklch(90% 0.04 275)",
};

const cvHref = `${process.env.PUBLIC_URL}/Peterson_CV_July2026.pdf`;

const roles = [
  {
    dates: "Nov 2024 – Present",
    title: "Software Engineer",
    org: "Cooperative Institute for Research in Environmental Sciences / NOAA",
    progression: [
      { title: "Associate Scientist II", dates: "May 2026 – Present" },
      { title: "Associate Scientist I", dates: "Nov 2024 – May 2026" },
    ],
    bullets: [
      "Architecting and developing the migration of NOAA NCEI’s marine trackline geophysical and marine video data pipelines into AWS, leveraging Python, GitLab, CloudFormation, Step Functions, Lambda and other technologies to improve scalability and reliability.",
      "Maintaining and improving full-stack Java cloud-native and on-premises applications used in the management of marine geophysical data.",
      "Connecting scientific dataset expertise with enterprise-level technical knowledge to effectively communicate and implement user needs in collaboration with various NOAA teams in an Agile context.",
    ],
  },
  {
    dates: "Jan 2023 – Oct 2024",
    title: "Production Support Analyst",
    org: "Connect for Health Colorado",
    bullets: [
      "Served as a product subject matter expert and liaison between support and development teams, ensuring compliance with state and federal health policy.",
      "Identified and resolved thousands of accounts impacted by application bugs, including careful consultation with legal personnel to resolve system issues with health policy compliance implications.",
      "Recognized patterns across large numbers of customer account issues and connected application expertise with technical understanding, ultimately resulting in the remediation of thousands of customer account issues.",
    ],
  },
  {
    dates: "Oct 2021 – Jan 2023",
    title: "Configuration Analyst",
    org: "Shelter Insurance Companies",
    bullets: [
      "Supported product rollouts across multiple code releases by coordinating testing across business teams and facilitating and testing production environment deployments.",
      "Developed, executed and maintained manual test scripts to ensure delivery of quality code.",
      "Analyzed test results and created reports for efficient communication of product defects to vendor.",
    ],
  },
  {
    dates: "Jun 2021 – Dec 2021",
    title: "Teaching Assistant",
    org: "Oregon State University",
    bullets: [
      "Hosted weekly office hours, graded coursework, and regularly monitored discussion forums for Discrete Structures in Computer Science course.",
    ],
  },
];

const researchInterests = [
  {
    title: "Understanding, trust, action",
    desc: "How information systems promote or destabilize environmental understanding, trust, and action",
  },
  {
    title: "Ethics in architecture",
    desc: "How architectural decisions encode ethical assumptions at scale",
  },
  {
    title: "Equitable public data",
    desc: "Keeping publicly-accessible environmental datasets and tools trustworthy and usable",
  },
];

function Homepage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > 100) return true;
        if (prev && y < 20) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const headerStyle = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "flex",
    alignItems: scrolled ? "center" : "flex-start",
    justifyContent: "center",
    height: scrolled ? "72px" : "160px",
    padding: `${scrolled ? "0" : "28px"} 32px 0`,
    overflow: "hidden",
    transition: "height 0.4s ease, padding 0.4s ease",
  };

  const arrowStyle = {
    position: "absolute",
    right: 32,
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: 16,
    color: colors.accent,
    opacity: scrolled ? 1 : 0,
    pointerEvents: scrolled ? "auto" : "none",
    transition: "opacity 0.25s",
  };

  return (
    <div
      id="top"
      style={{
        fontFamily: "'Inter', sans-serif",
        color: colors.ink,
        background: colors.bg,
        lineHeight: 1.6,
      }}
    >
      <header style={headerStyle}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${headerImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "grayscale(0.4) contrast(1.02)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(255,255,255,0.3)",
          }}
        ></div>
        <nav
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            gap: 36,
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <a href="#about" style={{ color: colors.inkSoft }}>
            about
          </a>
          <a href="#work" style={{ color: colors.inkSoft }}>
            experience
          </a>
          <a href="#contact" style={{ color: colors.inkSoft }}>
            contact
          </a>
          <a href={cvHref} download style={{ color: colors.inkSoft }}>
            cv
          </a>
        </nav>
        <a href="#top" onClick={scrollToTop} style={arrowStyle}>
          &uarr;
        </a>
      </header>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 28,
          padding: "56px 32px 0",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontWeight: 600,
              fontSize: 64,
              lineHeight: 1.05,
              margin: 0,
              letterSpacing: "0.01em",
              textTransform: "uppercase",
              color: colors.ink,
            }}
          >
            <span style={{ color: colors.accentDark }}>Rachel Peterson</span>
          </h1>
          <p
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.inkFaint,
              margin: "18px 0 0",
            }}
          >
            research software engineer &amp; Information Science master's
            student
          </p>
        </div>
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 10px 28px -8px rgba(0,0,0,0.25)",
          }}
        >
          <img
            src={portraitPhoto}
            alt="Rachel Peterson"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <section
        id="about"
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "64px 32px 96px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: colors.accent,
            marginBottom: 22,
          }}
        >
          About
        </div>
        <p style={{ fontSize: 17, color: colors.inkSoft, margin: "0 0 20px" }}>
          I'm a software engineer with several years of experience working at
          the intersection of technology and people. My work focuses on
          building robust systems that support research and long-term public
          value, particularly in environmental and scientific contexts.
        </p>
        <p style={{ fontSize: 17, color: colors.inkSoft, margin: "0 0 20px" }}>
          At the Cooperative Institute for Research in Environmental Sciences
          (CIRES), a NOAA partnership, I help modernize and migrate
          national-scale geophysical data archives — designing cloud-native
          pipelines, improving system reliability, and collaborating closely
          with researchers to keep data accessible, trustworthy, and usable.
        </p>
        <p style={{ fontSize: 17, color: colors.inkSoft, margin: 0 }}>
          I thrive in the in-between spaces: bridging gaps, translating
          stakeholder needs into meaningful output, and navigating alignment
          between mission and goals. I try to bring a curious,
          sustainably-minded, and thoughtful spirit to all of it.
        </p>
      </section>

      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "grayscale(0.5) contrast(1.02)",
          }}
        >
          <img
            src={footerImage}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: colors.bg,
            opacity: 0.78,
          }}
        ></div>
        <section
          id="research"
          style={{
            position: "relative",
            maxWidth: 900,
            margin: "0 auto",
            padding: "96px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: colors.accent,
              marginBottom: 22,
            }}
          >
            Research Interests
          </div>
          <p
            style={{
              fontSize: 17,
              color: colors.inkSoft,
              maxWidth: 640,
              margin: "0 auto 28px",
            }}
          >
            Alongside my engineering work, I am currently a master's student
            in the Information Science department at the University of
            Colorado Boulder, deepening my thinking on the questions that
            matter most to me.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 40,
              flexWrap: "wrap",
              borderTop: `1px solid ${colors.hairline}`,
              paddingTop: 32,
              textAlign: "left",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {researchInterests.map((item) => (
              <div key={item.title} style={{ maxWidth: 220 }}>
                <div
                  style={{
                    fontWeight: 600,
                    fontSize: 15,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <div style={{ fontSize: 14, color: colors.inkFaint }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section style={{ background: colors.panel }}>
        <div
          id="work"
          style={{ maxWidth: 900, margin: "0 auto", padding: "96px 32px" }}
        >
          <h2
            style={{
              fontFamily: "'Source Serif 4', serif",
              fontWeight: 600,
              fontSize: 28,
              margin: "0 0 44px",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Experience
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {roles.map((role) => (
              <div
                key={role.title + role.dates}
                style={{
                  display: "grid",
                  gridTemplateColumns: "150px 1fr",
                  gap: 28,
                  padding: "26px 0",
                  borderTop: `1px solid ${colors.hairline}`,
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    color: colors.inkFaint,
                    paddingTop: 2,
                  }}
                >
                  {role.dates}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      marginBottom: 2,
                    }}
                  >
                    {role.title}
                  </div>
                  <div
                    style={{
                      fontSize: 14,
                      color: colors.accent,
                      marginBottom: 12,
                    }}
                  >
                    {role.org}
                  </div>
                  {role.progression && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        marginBottom: 12,
                      }}
                    >
                      {role.progression.map((step) => (
                        <div
                          key={step.title}
                          style={{ fontSize: 14, color: colors.ink }}
                        >
                          <span style={{ fontWeight: 600 }}>
                            {step.title}
                          </span>{" "}
                          <span style={{ color: colors.inkFaint }}>
                            — {step.dates}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                  <ul
                    style={{
                      margin: 0,
                      paddingLeft: 18,
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    {role.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        style={{ fontSize: 15, color: colors.inkSoft }}
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <p
            style={{
              fontSize: 14,
              color: colors.inkFaint,
              textAlign: "center",
              margin: "40px 0 0",
              paddingTop: 32,
              borderTop: `1px solid ${colors.hairline}`,
            }}
          >
            B.S., Computer Science, Oregon State University &nbsp;&middot;&nbsp;
            B.A., Spanish, University of Missouri
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "96px 32px" }}>
        <h2
          style={{
            fontFamily: "'Source Serif 4', serif",
            fontWeight: 600,
            fontSize: 28,
            margin: "0 0 20px",
            textAlign: "center",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Community &amp; Civic Leadership
        </h2>
        <p
          style={{
            fontSize: 16,
            color: colors.inkSoft,
            textAlign: "center",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          I bring the same care for people and systems to my community work
          &mdash;{" "}
          <a
            href="https://uuchurchofboulder.org/board/"
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.accent, fontWeight: 600 }}
          >
            governance
          </a>
          ,{" "}
          <a
            href="https://www.youtube.com/live/7nBSbRdfMlQ?si=WAj2ryKPhCh30_kl&t=2223"
            target="_blank"
            rel="noreferrer"
            style={{ color: colors.accent, fontWeight: 600 }}
          >
            public speaking
          </a>
          , and campaigns that build durable civic infrastructure.
        </p>
      </section>

      <footer
        id="contact"
        style={{
          position: "relative",
          padding: "120px 32px 90px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            filter: "grayscale(0.3) contrast(1.05) brightness(0.9)",
          }}
        >
          <img
            src={footerImage}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,22,18,0.55)",
          }}
        ></div>
        <div style={{ position: "relative", color: "#f6f4ee" }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 24,
              color: colors.accentLight,
            }}
          >
            Contact me
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 36,
              flexWrap: "wrap",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            <a
              href="mailto:rachel.peterson.5683@gmail.com"
              style={{
                color: "#f6f4ee",
                borderBottom: `1px solid ${colors.accentLight}`,
              }}
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/r-petes"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#f6f4ee",
                borderBottom: `1px solid ${colors.accentLight}`,
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/r-petes"
              target="_blank"
              rel="noreferrer"
              style={{
                color: "#f6f4ee",
                borderBottom: `1px solid ${colors.accentLight}`,
              }}
            >
              GitHub
            </a>
            <a
              href={cvHref}
              download
              style={{
                color: "#f6f4ee",
                borderBottom: `1px solid ${colors.accentLight}`,
              }}
            >
              CV
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
