export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;


  export const projects = [
    {
      name: "Portfolio Website",
      url: "https://github.com/tsmurer/tsmurer.github.io",
      techstack: ["React", "Next.JS", "HTML", "CSS", "JavaScript", "TypeScript"],
      description: "This very website you're seeing."
    },
    {
      name: "Pachanga",
      url: "https://github.com/Projeto-Integrado-2020/Pachanga",
      techstack: ["Java", "Springboot", "PostgreSQL",  "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
      description: "A back-end and front-end application for management of parties."
    },
    {
      name: "TweetOfTheDay",
      url: "https://github.com/tsmurer/dayOfTheYearTweet",
      techstack: ["Golang"],
      description: "An application that scrapes the current day of the year page on wikipedia and returns a random fact"
    }
  ] as const;