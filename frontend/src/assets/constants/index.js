import cholimex from "../asset/projects/edit-map.png";
import ussh from "../asset/projects/ussh.jpg";
import weafore from "../asset/projects/weafore.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With over a year of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With over a year of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2024 - June 2025",
    role: "Full-stack Software Developer",
    company: "BKCORETECH.",
    description: `Developed a management system for the Vinh Loc Industrial Park, under the Cholimex group.`,
    technologies: ["ReactJS", "NodeJS", "Postgres", "Redis", "AntDesign", "Socket.IO", "RabbitMQ", "Docker"],
  },
  {
    year: "May 2024 - July 2025",
    role: "Mobile Developer Intern",
    company: "BKCORETECH",
    description: `Developed various features for mobile applications for universities with more than 10,000 users (USSH-VNHCM application)`,
    technologies: ["Flutter", "NodeJS", "Oracle"],
  },
];

export const PROJECTS = [
  {
    title: "Vinh Loc industrial park's management system",
    image: cholimex,
    description:
      "Human resource , departments, planning, projects, documents, electricity and water, .... management system of Vinh Loc industrial park belonging to Cholimex group",
    technologies: ["ReactJS", "NodeJS", "Postgres", "Redis", "AntDesign", "Socket.IO", "RabbitMQ", "Docker"],
  },
  {
    title: "USSH-VNHCM",
    image: ussh,
    description:
      "Software application of University of Social Sciences and Humanities, Vietnam National University Ho Chi Minh City",
    technologies: ["Flutter", "NodeJS", "Oracle"],
  },
  {
    title: "Weafore",
    image: weafore,
    description:
      "Weather forecasting platform with sensors, automatic light off, remote canopy.",
    technologies: ["ReactJS", "NodeJS", "MongoDB"],
  },
];

export const CONTACT = {
  address: "Nguyen Van Luong, Binh Tien district, Ho Chi Minh city",
  phoneNo: "+84 918 215 248",
  email: "buidangkhoa2807@gmail.com",
};
