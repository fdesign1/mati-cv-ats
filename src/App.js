import { useTranslation } from "react-i18next";
import "./App.css";

const experience = [
  {
    role: "Support Engineer",
    company: "SmartBear",
    dates: "Feb 2024 – Present",
    bullets: [
      "Work with API technologies including REST APIs, Stoplight and SwaggerHub to investigate and resolve customer technical issues.",
      "Troubleshoot and conduct in-depth investigations of complex technical support issues through email, Salesforce, GitHub, screen sharing and live chat.",
      "Collaborate with support peers and internal organizations, including development teams, as a technical point of contact.",
      "Identify bugs and define tasks for implementation by the support team or other engineering teams.",
      "Develop internal tools and improve documentation to enhance support processes and customer self-service.",
      "Continuously improve issue-resolution efficiency and customer support experiences.",
    ],
  },
  {
    role: "Data Analyst",
    company: "Capgemini",
    dates: "2021 – Feb 2024",
    bullets: [
      "Conducted data investigations and gathered insights from primary and secondary sources using company databases and MS Office.",
      "Prepared accurate and relevant reports for Microsoft and collected and analyzed data to support business decisions.",
      "Used internet research and commercial database platforms to investigate and analyze information.",
      "Evaluated Spanish proficiency during candidate interviews to support recruitment processes.",
    ],
  },
  {
    role: "Senior Process Executive",
    company: "Cognizant",
    dates: "2020 – Apr 2021",
    bullets: [
      "Used Excel, SAP, Azure Portal, and company tools to support operations for Microsoft.",
      "Managed payment transactions while ensuring accuracy and compliance with internal procedures.",
      "Updated internal databases, responded to queries and resolved issues to maintain data integrity and operational efficiency.",
    ],
  },
  {
    role: "Web Analyst for PC and Mobile",
    company: "Accenture",
    dates: "2018 – 2020",
    bullets: [
      "Performed full-site analysis and approval for developers implementing monetizable advertising for Google.",
      "Analyzed websites and determined optimal advertisement positioning.",
      "Supported quality control processes for projects in Krakow and Dublin.",
      "Evaluated applications in Spanish and English for compliance and functionality.",
    ],
  },
  {
    role: "Technical Sales Assistant",
    company: "Electronics & Gaming",
    dates: "2014 – 2017",
    bullets: [
      "Provided technical sales and support for desktop computers, laptops, gaming consoles, smartphones, video games and accessories.",
      "Performed desktop and laptop assembly, operating-system setup, driver installation, router and application setup based on customer and company needs.",
    ],
  },
];

const skillGroups = [
  { label: "API & Integration:", value: "REST APIs, API Integration, Postman, SwaggerHub, Stoplight" },
  { label: "Technical Support:", value: "Technical Troubleshooting, Debugging, Technical Investigations, Problem Solving, Customer Support, Bug Identification" },
  { label: "Cloud & Systems:", value: "Azure, Linux, Bash Scripting, PowerShell, Docker & Kubernetes Fundamentals" },
  { label: "Databases & Data:", value: "SQL, Data Analysis, Microsoft Excel" },
  { label: "Development:", value: "JavaScript, React, Node.js, HTML5, CSS, Bootstrap, Tailwind, WordPress" },
  { label: "Tools:", value: "Salesforce, Git, GitHub, Jira, Confluence, Visual Studio, Slack, Microsoft Teams, Google Workspace" },
];

const education = [
  {
    title: "Electromechanical Technician",
    detail: "Assembly operations, electrical circuits and electronic devices, engines and electrical functionality, safety risk analysis.",
  },
  {
    title: "React & Progressive Web Applications Training",
    detail: "Dynamic responsive web applications, React, PWA development, cloud deployment and GitHub.",
  },
  {
    title: "Security Training",
    detail: "Endpoint Protection, Encryption.",
  },
  {
       title: "Linux Training",
       detail: "LFS101, LFS207",
       },
  ];

function App() {
  const { t } = useTranslation();

  return (
    <div className="cv-document">
      <header className="cv-header">
        <h1>MATIAS FERRERAS</h1>
        <p className="cv-role">Technical Support Engineer | API &amp; Integration Support | SaaS</p>
        <p className="cv-contact">Wroclaw, Poland | EU Citizen | +48 515 465 342 | ferrerasmatias@outlook.com</p>
      </header>

      <hr className="cv-rule" />

      <main className="cv-main">
        <section className="cv-section">
          <h2>PROFESSIONAL SUMMARY</h2>
          <p>{t("bio")}</p>
        </section>

        <section className="cv-section">
          <h2>CORE TECHNICAL SKILLS</h2>
          {skillGroups.map(({ label, value }) => (
            <p key={label} className="skill-group">
              <strong>{label}</strong> {value}
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2>PROFESSIONAL EXPERIENCE</h2>
          {experience.map(({ role, company, dates, bullets }) => (
            <article key={`${role}-${company}`} className="cv-job">
              <div className="cv-job-header">
                <span>{role} | {company} | {dates}</span>
              </div>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="cv-section">
          <h2>EDUCATION &amp; TRAINING</h2>
          {education.map(({ title, detail }) => (
            <p key={title} className="cv-education-item">
              <strong>{title}</strong> - {detail}
            </p>
          ))}
        </section>

        <section className="cv-section">
          <h2>LANGUAGES</h2>
          <p>
            <strong>Spanish:</strong> Native | <strong>English:</strong> Advanced | <strong>Polish:</strong> Intermediate
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
