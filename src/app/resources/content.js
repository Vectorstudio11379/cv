import { Logo } from "@/once-ui/components";
import { SplineModel } from "@/components/SplineModel";

const person = {
  firstName: "Elijah",
  lastName: "Ezekiel",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },  role: "Web Designer",
  avatar: "/images/timi-optimized.webp", // Updated to use optimized WebP version
  email: "ezekielelijahkola@gmail.com",
  location: "Africa/Lagos", // IANA time zone identifier for Nigeria/Abuja
  languages: ["English (fluent)", "Yoruba", "Hausa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/timi11379/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/elijah-kola-ezekiel-181301208?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}&apos;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>iDeveloper</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Web Development</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },  subline: (
    <>
      HI i&apos;m Timi, 
      i am a Web Developer at <img src="/trademark/5th.png" alt="Profile" style={{ display: "inline-flex", height: "1.5em", verticalAlign: "middle", marginLeft: "0.25em" }} />,
      where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://wa.me/2348123476832",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an experienced web designer with a background in IT support, operations management, and customer service. 
        I have worked as an IT Expert at Beacon Corporate Realty since July 2024, managing the company website, 
        implementing SEO strategies, and editing videos. 
        </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Beacon Corporate Realty",
        timeframe: "2024-07 - Present",
        role: "IT Expert",
        achievements: [
          <>Managed and enhanced the company website, ensuring smooth functionality and user experience.</>,
          <>Implemented SEO strategies to improve visibility and troubleshoot technical issues.</>,
          <>Edited marketing and property tour videos, and operated drones for aerial footage.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/beacon1.png",
            alt: "Beacon Realty Website",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Aliola Global Services",
        timeframe: "2024-02 - 2025-04",
        role: "Operation Manager / Web Developer",
        achievements: [
          <>Oversaw daily operations and managed resources for the company.</>,
          <>Developed and maintained the company website and digital presence.</>,
        ],
        images: [
          {
            src: "/images/projects/ali.png",
            alt: "Aliola Global Services Website",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Unateus Logistics",
        timeframe: "2024-04 - 2024-07",
        role: "Call Center Operator",
        achievements: [
          <>Provided product information and managed customer interactions.</>,
        ],
        images: [
          {
            src: "/images/projects/una.png",
            alt: "Unateus Logistics",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Tom Ojo Global Sports Academy",
        timeframe: "2023-03 - 2024-04",
        role: "IT Technician / Web Developer",
        achievements: [
          <>Handled software installations and workstation setups.</>,
        ],
        images: [
          {
            src: "/images/projects/tom.png",
            alt: "Tom Ojo Global Sports Academy",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Siloam Nursery and Primary School",
        timeframe: "2021-03 - 2023-07",
        role: "Teacher",
        achievements: [
          <>Taught and mentored students in a classroom setting.</>,
        ],
        images: [],
      },
      {
        company: "Abdulazeez Cybercafe",
        timeframe: "2019-03 - 2020-08",
        role: "Computer Operator",
        achievements: [
          <>Provided computer operation services and support.</>,
        ],
        images: [],
      },
      {
        company: "Dangote Cement Factory",
        timeframe: "2019-03 - 2019-09",
        role: "Laboratory Technician",
        achievements: [
          <>Assisted in laboratory operations and quality control.</>,
        ],
        images: [
          {
            src: "/images/projects/dan.png",
            alt: "Dangote Cement Factory",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "5th Element Media Group",
        timeframe: "2024-07 - Present",
        role: "Web Developer",
        achievements: [
          <>Developing and maintaining web solutions for media and marketing projects.</>,
        ],
        images: [
          {
            src: "/images/projects/5th.png",
            alt: "5th Element Media Group",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Nuhu Bamalli Polytechnic",
        description: <>Diploma in Computer Engineering (2020-2023)</>,
      },
      {
        name: "Google Digital Garage",
        description: <>Google Certificate (2022-2023)</>,
      },
      {
        name: "Google Analytics Academy",
        description: <>Google Certificate (2023)</>,
      },
      {
        name: "Google IT Support",
        description: <>Google Certificate (2023)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Computer Operation",
        description: <>Proficient in computer operation (93%).</>,
        images: [],
      },
      {
        title: "Web Design",
        description: <>Skilled in web design (89%).</>,
        images: [],
      },
      {
        title: "Time Management",
        description: <>Excellent time management skills (95%).</>,
        images: [],
      },
      {
        title: "Video Editing",
        description: <>Proficient in video editing (70%).</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/dan.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/flower.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/pmx.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/rebottle.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/beacon.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/twist.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/ipanache.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/heaven.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
