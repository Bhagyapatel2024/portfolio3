import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Data Scientist",
    icon: backend,
  },
  // {
  //   title: "M",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
 
  // {
  //   name: "Next JS",
  //   icon: nextJs,
  // },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  
  
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Computer Science Engineering",
    company_name: "Gujarat Technological University",
    company_website: "",
    icon: nickelfox, // Ensure nickelfox is properly imported or defined
    iconBg: "#E6DEDD",
    date: "Apr 2022 - June 2026",
    points: [
      "Course Work: Data Structures and Algorithms, Probability and Statistics, Database Management Systems, Operating Systems, Object-Oriented Programming, Computer Architecture, Data Communication.",
    ],
  },
  {
    title: "National Level Science Talent Search Examination - 2021 (NSTSE)",
    company_name: "",
    company_website: "",
    icon: nickelfox, // Ensure nickelfox is properly imported or defined
    iconBg: "#E6DEDD",
    date: "Dec 2021",
    points: [
      "Secured a position in the top 2% among thousands of participants across India, highlighting exceptional problem-solving skills and a strong foundation in scientific concepts.",
      "The NSTSE is a prestigious national-level exam that assesses conceptual understanding and logical reasoning, distinguishing students with high academic potential.",
      "Achieving a State Rank of 37 further emphasizes my strong performance in a highly competitive environment, showcasing my ability to excel in state-level academic challenges.",
    ],
  },
  
];

const projects = [
  {
    name: "Operating Systems Simulator",
    description:
      "Developed a dynamic web-app simulating various algorithms used by operating systems. Simulations include Dining Philosophers Problem using semaphores, FIFO page replacement, Shortest Job First scheduling, and C-Look disk scheduling.",
    tags: [
     
    ],
    image: "src/assets/projects/project-10.png", // Ensure image paths are correct
    hosted_link: "https://os-bhagya-patel.vercel.app/",
  },
  {
    name: "StreamEmpire",
    description:
      "Developed StreamEmpire, a real-time screen sharing and communication platform enabling users to collaborate through video calls, audio, and chat functionalities. Utilized WebRTC and PeerJS libraries to facilitate seamless video, audio, and screen sharing.",
    tags: [
      
    ],
    image: "src/assets/projects/T22.png",
    hosted_link:
      "https://drive.google.com/file/d/1vhD3ovOINwfAyp38Qi2o-QQL8Sg3Cn8R/view",
  },
  {
    name: "TunedML Explorer",
    description:
      "Developed TunedML Explorer, a machine learning model designed to handle diverse CSV datasets for predictive analysis. Integrated algorithms like Random Forest and Neural Networks to ensure accurate predictions across various domains.",
    tags: [
     
    ],
    image:"src/assets/projects/T23.png",
    hosted_link:
      "https://drive.google.com/file/d/1va27aVl6F6-Y9Ra7XAaobIcEX5eTxA_F/view",
  },
  {
    name: "Vehicle-Valuation-Hub",
    description:
      "Developed a machine learning model to predict the price of used cars based on parameters such as company name, model name, year of purchase, fuel type, and kilometers driven. Built a user-friendly interface to display predicted prices.",
    tags: [
     
    ],
    image: "src/assets/projects/project-4.png",
    hosted_link:
      "https://drive.google.com/file/d/1uo67WcHWSnwDqiNQMYkCNzlu-Jd3LgzM/view",
  },
  {
    name: "AI Image Generator",
    description:
      "Developed a React application to generate images from text prompts using SegMind’s Text2Image API. Features include image generation, a 'Surprise Me' option, and a gallery of previously generated images.",
    tags: [
    
    ],
    image: "src/assets/projects/project-2.png",
    hosted_link: "https://ai-image-generator-bhagya-patel.vercel.app/",
  },
  {
    name: "Universal QR Code Generator",
    description:
      "Developed a simple QR Code Generator that allows users to generate QR codes for various purposes such as contact information, text, phone numbers, and URLs. Implemented download functionality for generated QR codes.",
    tags: [
    
    ],
    image: "src/assets/projects/project-3.png",
    hosted_link: "https://qr-bhagya-patel.vercel.app/",
  },
  // {
  //   name: "Bank Loan Prediction System",
  //   description:
  //     "Developed a web application using Streamlit to predict loan approval for bank applicants based on input features. Built predictive models with thorough evaluation for accuracy and reliability.",
  //   tags: [
      
  //   ],
  //   image: "src/assets/projects/project-7.png",
  //   hosted_link: "https://github.com/Bhagya00010/Bank-Loan-Prediction",
  // },
];

const personalInfo = {
  name: "Bhagya Patel",
  fullName: "Bhagya N. Patel",
  email: "bhagya20052904@gmail.com",
  role: "Software Developer",
  about: `Hello, my name is Bhagya Patel. I am an enthusiastic Computer Science Engineering student with a strong foundation in programming languages like Java and Python. I have hands-on experience in web development technologies such as React.js to build real-time applications. My background in machine learning includes developing predictive models using frameworks like scikit-learn and TensorFlow. Additionally, I have solved over 500 problems on LeetCode. I also secured an All India Rank of 553 in the National Level Science Talent Search Examination.`,
  projectsIntro: `The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with live demos. These reflect my ability to solve complex problems and deliver solutions.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/shridharrai/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/shridharrai",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
