import React from "react";
import portraitPhoto from "../assets/portrait.jpg";
import photoRidge from "../assets/photo-ridge.jpg";
import photoTree from "../assets/photo-tree.jpg";
import photoPines from "../assets/photo-pines.jpg";
import bookManNatural from "../assets/book-mannatural.png";
import bookWhatIf from "../assets/book-whatif.png";
import bookPollution from "../assets/book-pollution.png";
import bookPlayground from "../assets/book-playground.png";

const colors = {
  paper: "#f4f2ef",
  panel: "#eeebe4",
  ink: "#16150f",
  inkSoft: "#2f2b23",
  inkMid: "#5d574a",
  inkFaint: "#8a8272",
  accent: "#a8926f",
  accentSoft: "#b6a181",
  accentDeep: "#8a7350",
  hairline: "#e2ded6",
  hairlinePanel: "#dcd7cc",
};

const serif = "Newsreader, Georgia, serif";
const sans = "Karla, system-ui, sans-serif";

const cvHref = `${process.env.PUBLIC_URL}/Peterson_CV_July2026.pdf`;

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&family=Karla:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap');
  html { scroll-behavior: smooth; }
  body { margin: 0; background: ${colors.paper}; -webkit-font-smoothing: antialiased; }
  a { color: ${colors.ink}; text-decoration-color: ${colors.accentSoft}; text-underline-offset: 3px; }
  a:hover { color: ${colors.accentDeep}; }
  ::selection { background: #e6dcc9; }
  .rp-nav a { text-decoration: none; padding-bottom: 2px; border-bottom: 1px solid transparent; }
  .rp-nav a:hover { border-bottom: 1px solid ${colors.accentSoft}; }
  .rp-nav a.rp-cv { border-bottom: 1px solid ${colors.accentSoft}; }
  @media (max-width: 880px) {
    .rp-nav { flex-wrap: wrap; row-gap: 10px; }
    .rp-split { grid-template-columns: minmax(0, 1fr) !important; }
    .rp-hero { flex-direction: column-reverse; gap: 24px !important; }
    .rp-hero-side { align-items: flex-start !important; }
    .rp-books { order: 2; }
    .rp-thumbs { flex-direction: row !important; }
    .rp-role { grid-template-columns: minmax(0, 1fr) !important; gap: 12px !important; }
  }
  @media (max-width: 560px) {
    .rp-portrait { width: 66vw !important; }
    .rp-role li, .rp-body { font-size: 16px !important; }
  }
`;

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
      "Hosted weekly office hours, graded coursework, and regularly monitored discussion forums for the Discrete Structures in Computer Science course.",
    ],
  },
];

const questions = [
  "How cultural notions of intelligence and value — humans vs. nature — propagate into tech",
  "Information systems that abstract away material and ecological realities",
  "Public environmental data — who it serves, and who it leaves behind",
  "Where and how hope thrives in climate activism online",
];

const books = [
  { src: bookManNatural, alt: "Man and the Natural World by Keith Thomas", rotate: -9, shift: 0 },
  { src: bookWhatIf, alt: "What If We Get It Right? by Ayana Elizabeth Johnson", rotate: 4, shift: -14 },
  { src: bookPollution, alt: "Pollution Is Colonialism by Max Liboiron", rotate: -3, shift: 10 },
  { src: bookPlayground, alt: "Playground by Richard Powers", rotate: 10, shift: 0 },
];

const thumbs = [
  { src: photoRidge, alt: "Granite ridge on black and white film" },
  { src: photoTree, alt: "A lone tree in fog" },
  { src: photoPines, alt: "Pines against a snowfield" },
];

const eyebrow = {
  fontSize: 14,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: colors.inkFaint,
};

const sectionTitle = {
  fontFamily: serif,
  fontWeight: 400,
  fontSize: "clamp(38px, 5vw, 66px)",
  letterSpacing: "-0.01em",
  margin: 0,
};

const bodyText = { fontSize: 19, color: colors.inkSoft, textWrap: "pretty" };

function Homepage() {
  return (
    <div
      id="top"
      style={{
        fontFamily: sans,
        color: colors.ink,
        background: colors.paper,
        lineHeight: 1.6,
        overflowX: "clip",
      }}
    >
      <style>{globalCss}</style>

      <nav
        className="rp-nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          display: "flex",
          alignItems: "baseline",
          gap: 26,
          padding: "16px 6vw",
          background: "rgba(244,242,239,0.92)",
          backdropFilter: "blur(8px)",
          borderBottom: `1px solid ${colors.hairline}`,
          fontSize: 15,
        }}
      >
        <a href="#top" style={{ fontFamily: serif, fontSize: 19, marginRight: "auto" }}>
          Rachel Peterson
        </a>
        <a href="#about">about</a>
        <a href="#research">research</a>
        <a href="#work">experience</a>
        <a href="#contact">contact</a>
        <a href={cvHref} download className="rp-cv">
          cv
        </a>
      </nav>

      <section style={{ padding: "7vh 6vw 0" }}>
        <div style={{ display: "flex", gap: "6vw", alignItems: "flex-start" }} className="rp-hero">
          <div style={{ flex: "1 1 auto", minWidth: 0 }}>
            <h1
              style={{
                fontFamily: serif,
                fontWeight: 400,
                fontSize: "clamp(60px, 10.5vw, 164px)",
                lineHeight: 0.86,
                letterSpacing: "-0.02em",
                margin: "4px 0 0",
              }}
            >
              Rachel
            </h1>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                flexWrap: "wrap",
                gap: 14,
                margin: "-14px 0 0 8px",
              }}
            >
              <span style={{ fontFamily: serif, fontSize: 26, color: "#3a3529" }}>(she/her)</span>
              <span style={{ width: 46, height: 1, background: "#c3b394" }}></span>
              <span style={{ fontSize: 14, color: "#6b6455", letterSpacing: "0.04em" }}>
                Boulder, Colorado
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                marginTop: 14,
              }}
            >
              <svg
                width="92"
                height="112"
                viewBox="0 0 92 112"
                fill="none"
                style={{ flex: "0 0 auto", marginLeft: 12 }}
                aria-hidden="true"
              >
                <path
                  d="M6 4 C10 44, 18 76, 46 82"
                  stroke={colors.accentSoft}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeDasharray="5 6"
                  fill="none"
                />
                <path d="M45 75 L61 82 L45 89 Z" fill={colors.accent} />
              </svg>
              <p
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(20px, 2vw, 26px)",
                  lineHeight: 1.45,
                  color: "#2a2620",
                  margin: "62px 0 0",
                  textWrap: "pretty",
                }}
              >
                Software engineer building seafloor data infrastructure. Master's student in Information Science studying sociotechnical systems.

              </p>
            </div>
          </div>

          <div
            className="rp-hero-side"
            style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 24 }}
          >
            <div
              className="rp-portrait"
              style={{
                width: "min(30vw, 330px)",
                aspectRatio: 1,
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={portraitPhoto}
                alt="Rachel Peterson on a gravel road at dusk"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "46% 40%",
                  transform: "scale(1.7) translateY(-15%)",
                  transformOrigin: "50% 50%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" style={{ padding: "12vh 6vw 8vh" }}>
        <div style={{ maxWidth: "34em", margin: "0 auto" }}>
          <div style={{ ...eyebrow, marginBottom: 22 }}>About</div>
          <div className="rp-body">
            <p style={{ ...bodyText, margin: "0 0 22px" }}>
              I’m a software engineer working at the intersection of
              technology and people. My work focuses on building systems that support research
              and long-term public value, particularly in environmental / scientific contexts.
            </p>
            <p style={{ ...bodyText, margin: "0 0 22px" }}>
              At the Cooperative Institute for Research in Environmental Sciences (CIRES), a NOAA
              partnership, I help modernize and migrate national-scale geophysical data archives —
              designing cloud-native pipelines, improving system reliability, and collaborating
              closely with researchers to keep data accessible, trustworthy, and usable.
            </p>
            <p style={{ ...bodyText, margin: 0 }}>
              I love the in-between spaces, and I'm always seeking opportunities for translation, collaboration, and community-building.
              I strive to bring a curious, sustainably-minded, and thoughtful spirit to all of it.
            </p>
          </div>
        </div>
      </section>

      <section
        id="research"
        style={{ padding: "4vh 6vw 10vh", borderTop: `1px solid ${colors.hairline}` }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 30,
            paddingTop: "6vh",
          }}
        >
          <h2 style={sectionTitle}>research interests</h2>
        </div>
        <p className="rp-body" style={{ ...bodyText, maxWidth: "34em", margin: "0 0 4vh" }}>
          Alongside my engineering work, I am currently a master’s student in the Information Science
          department at the University of Colorado Boulder, deepening my thinking on the questions
          that matter most to me.
        </p>
        <div
          style={{
            borderTop: `1px solid ${colors.hairline}`,
            borderBottom: `1px solid ${colors.hairline}`,
            padding: "40px 0",
          }}
        >
          <div
            className="rp-split"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) auto",
              gap: "5vw",
              alignItems: "start",
            }}
          >
            <div>
          <div style={{ fontSize: 15, color: colors.inkFaint, marginBottom: 22 }}>
            Questions I’m circling right now
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {questions.map((q) => (
              <li key={q} style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                <span
                  style={{
                    flex: "0 0 auto",
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: colors.accent,
                  }}
                ></span>
                <span
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(21px, 2.1vw, 29px)",
                    lineHeight: 1.35,
                    textWrap: "pretty",
                  }}
                >
                  {q}
                </span>
              </li>
            ))}
          </ul>
            </div>
            <div className="rp-thumbs" style={{ display: "flex", gap: 12 }}>
              {thumbs.map((t) => (
                <img
                  key={t.src}
                  src={t.src}
                  alt={t.alt}
                  style={{ width: 96, height: 96, objectFit: "cover" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "8vh 6vw 10vh" }}>
        <div
          className="rp-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.9fr) minmax(0, 1.1fr)",
            gap: "6vw",
            alignItems: "center",
          }}
        >
          <div
            className="rp-books"
            style={{ display: "flex", justifyContent: "center", padding: "30px 0" }}
          >
            {books.map((b, i) => (
              <img
                key={b.src}
                src={b.src}
                alt={b.alt}
                style={{
                  width: "24%",
                  boxShadow: "0 12px 30px rgba(22,21,15,0.18)",
                  transform: `rotate(${b.rotate}deg) translateY(${b.shift}px)`,
                  marginRight: i === books.length - 1 ? 0 : "-4%",
                  zIndex: i + 1,
                }}
              />
            ))}
          </div>
          <div>
            <p
              style={{
                fontFamily: serif,
                fontSize: "clamp(24px, 2.3vw, 33px)",
                lineHeight: 1.4,
                margin: "0 0 18px",
                maxWidth: "21em",
                textWrap: "pretty",
              }}
            >
              I love to read, and so many of my interests evolve from something I’ve underlined in a
              book.
            </p>
            <p
              className="rp-body"
              style={{ fontSize: 18, color: colors.inkMid, margin: 0, maxWidth: "32em", textWrap: "pretty" }}
            >
              Environmental history, hopeful climate futures, and fiction that takes the nonhuman
              world seriously. Usually two or three going at once, plus whatever is stacked on the
              nightstand for later. I’m always down to talk about books.
            </p>
          </div>
        </div>
      </section>

      <section id="work" style={{ padding: "8vh 6vw 10vh", background: colors.panel }}>
        <h2 style={{ ...sectionTitle, marginBottom: "5vh" }}>experience</h2>

        {roles.map((role, i) => (
          <div
            key={role.title + role.dates}
            className="rp-role"
            style={{
              display: "grid",
              gridTemplateColumns: "200px minmax(0, 1fr)",
              gap: "20px 34px",
              padding: "32px 0",
              borderTop: `1px solid ${colors.hairlinePanel}`,
              borderBottom:
                i === roles.length - 1 ? `1px solid ${colors.hairlinePanel}` : undefined,
            }}
          >
            <div style={{ fontFamily: serif, fontSize: 18, color: "#6b6455" }}>{role.dates}</div>
            <div>
              <div style={{ fontSize: 23, fontWeight: 500, lineHeight: 1.3 }}>{role.title}</div>
              <div
                style={{
                  fontSize: 16,
                  color: colors.accentDeep,
                  margin: role.progression ? "4px 0 0" : "4px 0 16px",
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
                    margin: "16px 0",
                    fontSize: 16,
                  }}
                >
                  {role.progression.map((step) => (
                    <div key={step.title}>
                      <span style={{ fontWeight: 600 }}>{step.title}</span>{" "}
                      <span style={{ color: "#6b6455" }}>— {step.dates}</span>
                    </div>
                  ))}
                </div>
              )}
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  maxWidth: "44em",
                }}
              >
                {role.bullets.map((bullet) => (
                  <li key={bullet} style={{ fontSize: 17, color: "#3a352b", textWrap: "pretty" }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px 34px",
            marginTop: 34,
            fontFamily: serif,
            fontSize: 19,
            color: "#4a4438",
          }}
        >
          <span>B.S., Computer Science, Oregon State University</span>
          <span>B.A., Spanish, University of Missouri</span>
        </div>
      </section>

      <section style={{ padding: "10vh 6vw" }}>
        <div
          className="rp-split"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 220px) minmax(0, 1fr)",
            gap: "5vw",
          }}
        >
          <div style={{ ...eyebrow, paddingTop: 12 }}>Community</div>
          <p
            style={{
              fontFamily: serif,
              fontSize: "clamp(22px, 2.2vw, 31px)",
              lineHeight: 1.45,
              margin: 0,
              maxWidth: "26em",
              textWrap: "pretty",
            }}
          >
            I bring the same care for people and systems to my community work —{" "}
            <a href="https://uuchurchofboulder.org/board/" target="_blank" rel="noreferrer">
              governance
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/live/7nBSbRdfMlQ?si=WAj2ryKPhCh30_kl&t=2223"
              target="_blank"
              rel="noreferrer"
            >
              public speaking
            </a>
            , and campaigns that build durable civic infrastructure.
          </p>
        </div>
      </section>

      <footer
        id="contact"
        style={{
          padding: "6vh 6vw 8vh",
          borderTop: `1px solid ${colors.hairline}`,
          display: "flex",
          flexWrap: "wrap",
          alignItems: "baseline",
          gap: "18px 30px",
        }}
      >
        <span style={{ fontFamily: serif, fontSize: 32, marginRight: 10 }}>say hello</span>
        <a href="mailto:rachel.peterson.5683@gmail.com" style={{ fontSize: 17 }}>
          email
        </a>
        <a
          href="https://www.linkedin.com/in/r-petes"
          target="_blank"
          rel="noreferrer"
          style={{ fontSize: 17 }}
        >
          linkedin
        </a>
        <a href="https://github.com/r-petes" target="_blank" rel="noreferrer" style={{ fontSize: 17 }}>
          github
        </a>
        <a href={cvHref} download style={{ fontSize: 17 }}>
          cv
        </a>
        <span style={{ marginLeft: "auto", fontSize: 13, color: colors.inkFaint }}>
          Boulder, CO · she/her
        </span>
      </footer>
    </div>
  );
}

export default Homepage;
