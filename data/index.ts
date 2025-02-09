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
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/profile.jpg`,
    spareImg: "",
  },
  {
    id: 3,
    title: "Web Dev",
    description: "Experience on Tech Stack & Tools for",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "Data",
    description: "Experience on Tech Stack & Tools for",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 8,
    title: "Let's Start Our Professional Journey!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "I aspire to build a career as a Data Analyst & Software Engineer.",
    description: "Career ",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/b5.svg`,
    spareImg: `${process.env.NEXT_PUBLIC_BASE_PATH}/grid.svg`,
  },
  {
    id: 6,
    title: "Let's get in touch",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Tour Guide Web App",
    des: "providing a simple and efficient way to connect with local guides.",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/P1.png`,
    iconLists: [
      `${process.env.NEXT_PUBLIC_BASE_PATH}/re.svg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH}/tail.svg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH}/js.svg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH}/java.svg`,
    ],
    link: "https://github.com/vincentbharata/tetrav-front-end",
  },
  {
    id: 2,
    title: "Calories Log",
    des: "Track your calories, stay healthy, and fuel your best self.",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/P2.jpg`,
    iconLists: [
      `${process.env.NEXT_PUBLIC_BASE_PATH}/re.svg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH}/html.svg`,
      `${process.env.NEXT_PUBLIC_BASE_PATH}/css.svg`,
    ],
    link: "https://github.com/vincentbharata/calories-log",
  },
  {
    id: 3,
    title: "Image Search",
    des: "Simple Image Search code with Javascript using Splash API",
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/P3.png`,
    iconLists: [`${process.env.NEXT_PUBLIC_BASE_PATH}/js.svg`],
    link: "https://github.com/vincentbharata/image-search",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Web Developer Intern",
    desc: "Assisted in developing a web-based platform using React.js for the TDW MyTelkomsel Project",
    company: "Company: Phintraco Consulting (PhinCon)",
    className: "md:col-span-2",
    thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH}/exp1.svg`,
  },
  {
    id: 2,
    title: "System Analyst Intern",
    desc: "A System Analyst analyzes business requirements, designs technical solutions, and ensures system efficiency through documentation and collaboration with stakeholders.",
    company: "Company: Phintraco Consulting (PhinCon)",
    className: "md:col-span-2",
    thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH}/exp3.svg`,
  },
  {
    id: 3,
    title: "Business Intelligence & Analytic Intern",
    desc: "Analyzed business data, Developed Automation with Python and Appscripts, developed dashboards and reports using Spark SQL and BI tools.",
    company: "Company: Seabank Indonesia",
    className: "md:col-span-2",
    thumbnail: `${process.env.NEXT_PUBLIC_BASE_PATH}/exp2.svg`,
  },
];

export const socialMedia = [
  {
    id: 1,
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/git.svg`,
    link: "https://github.com/vincentbharata",
  },
  {
    id: 2,
    img: `${process.env.NEXT_PUBLIC_BASE_PATH}/link.svg`,
    link: "https://www.linkedin.com/in/vincentbharata/",
  },
];
