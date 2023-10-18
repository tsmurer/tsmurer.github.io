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
  ] as const;


  export const projects = [
    {
      name: "Portfolio Website",
      url: "https://github.com/tsmurer/tsmurer.github.io",
      techstack: ["React", "Next.JS", "HTML", "CSS", "JavaScript", "TypeScript"],
      description: "This very website you're seeing. It is a static website written with HTML5, CSS3, JavaScript and the Next.JS library."
    },
    {
      name: "Pachanga",
      url: "https://github.com/Projeto-Integrado-2020/Pachanga",
      techstack: ["Java", "Springboot", "PostgreSQL",  "Angular", "HTML", "CSS", "JavaScript", "TypeScript"],
      description: "A back-end and front-end application for management of parties. The back-end is a Springboot application that uses json webtokens, a PostgreSQL database and JPA, and is tested with JUnit. The Front-end is an Angular application tested with Angular testing and Jasmine. CI was done with Travis."
    },
    {
      name: "TweetOfTheDay",
      url: "https://github.com/tsmurer/dayOfTheYearTweet",
      techstack: ["Golang"],
      description: "An application that scrapes the current day of the year page on wikipedia and returns a random fact. It was written solely with golang and its html library"
    }
  ] as const;