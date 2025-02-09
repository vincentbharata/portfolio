import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig?.basePath || "";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Fresh graduate in Computer Science from Binus University, majoring in Software Engineering.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${basePath}/profile.jpg`,
  },
  {
    id: 5,
    title: "I aspire to build a career as a Data Analyst & Software Engineer.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${basePath}/b5.svg`,
    spareImg: `${basePath}/grid.svg`,
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Tour Guide Web App",
    des: "Providing a simple and efficient way to connect with local guides.",
    img: `${basePath}/P1.png`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/tail.svg`,
      `${basePath}/js.svg`,
      `${basePath}/java.svg`,
    ],
    link: "https://github.com/vincentbharata/tetrav-front-end",
  },
  {
    id: 2,
    title: "Calories Log",
    des: "Track your calories, stay healthy, and fuel your best self.",
    img: `${basePath}/P2.jpg`,
    iconLists: [
      `${basePath}/re.svg`,
      `${basePath}/html.svg`,
      `${basePath}/css.svg`,
    ],
    link: "https://github.com/vincentbharata/calories-log",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Developer Intern",
    desc: "Assisted in developing a web-based platform using React.js for the TDW MyTelkomsel Project",
    company: "Phintraco Consulting (PhinCon)",
    className: "md:col-span-2",
    thumbnail: `${basePath}/exp1.svg`,
  },
  {
    id: 3,
    title: "Business Intelligence & Analytic Intern",
    desc: "Analyzed business data, developed automation with Python and Apps Scripts, developed dashboards and reports using Spark SQL and BI tools.",
    company: "Seabank Indonesia",
    className: "md:col-span-2",
    thumbnail: `${basePath}/exp2.svg`,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: `${basePath}/git.svg`,
    link: "https://github.com/vincentbharata",
  },
  {
    id: 2,
    img: `${basePath}/link.svg`,
    link: "https://www.linkedin.com/in/vincentbharata/",
  },
];
