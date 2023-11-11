export const fullVersionLink = "https://resume.narze.live";
export const sourceLink = "https://github.com/narze/resume";
export const ogImageUrl =
  "https://og-image.vercel.app/Resumette.png?theme=light&md=1&fontSize=200px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg";

export const introData = {
  name: "Krittapas Rungsimontuchat",
  nickname: "Ten",
  phone: "0968264030",
  email: "NineTen609@gmail.com",
  github: "Tenkris",
  linkedin: "krittapas-rungsimontuchat-3980aa25b/",
  location: "Bangkok, Thailand",
  website: "",
};

export const technologies = [
  {
    section: "Languages:",
    details:
      "HTML, CSS ,JavaScript, TypeScript, SQL, Java , Python , C++ , Scala ,Go , Cypher",
  },
  {
    section: "Frameworks:",
    details: "ReactJS, NextJS, TailwindCSS, ExpressJS, SpringBoot, NodeJS , Gin",
  },
  {
    section: "Tools:",
    details: "Git, Github, Docker, MongoDB , Neo4j , DynamoDB , PostgreSQL , Numpy" ,
  },
  {
    section: "Other:",
    details: "Vercel ,zsh ,ssh , AWS (EC2), Postman , Prisma, Strapi , Blynk , Tensorflow , OpenCV",
  },
];

export const educations = [
  {
    head: "B.Eng. Computer Engineering",
    details: [
      "Chulalongkorn University, TH. Aug 2021 - Now (GPAX 3.61)",
      // "Chulalongkorn University, TH. 2021-present (GPAX 3.60)",
      // "Expected Graduation May,2025"
      "Relevant courses : Data Structure, Discrete Math, Programming Methology, Computer Programming, Algorithm Design",
    ],
  },
  {
    head: "Science-Math",
    details: [
      "Satit Prasarnmit School, TH. May 2014 - Feb 2021 (GPAX 3.88)"
    ]
  },

];

// export const workExperiences = [
//   {
//     position: "Software Engineer Intern, Backend (Java)",
//     company: "LINE MAN Wongnai",
//     url: "/",
//     years: ["2021"],
//     details: [
//       "Developed Wongnai and Merchant App by improving the system",
//       "Added new features, and collaborate with Frontend/Backend/iOS/Android teams to design the system functionality."
//     ],
//   },
//   {
//     position: "Part-Time Frontend Developer",
//     company: "DoubleDev Team",
//     url: "/",
//     years: ["2020"],
//     details: [
//       "Developed an admin panel for the parking management system.",
//       "Worked on a part of showing real-time car parking information such as vehicle counts, car information.",
//       "Developed a searching and sorting features for cars management table.",
//       "Used NextJS and TailwindCSS.",
//     ],
//   },
// ];

export const projects = [
  {
    name: "Golf_club_information_website",
    details: [
        "Collect requirements and design a website for golf course information.",
        "Developed contact&&membership form , Accomodation , restaurant page using NextJS and TailwindCSS.",
        "Using Strapi as a headless CMS to manage content. and using Restapi to connect with frontend.", 
        "Deployed test_version on vercel and strapi on aws EC2.",
    ],
    url: "vercel-beta-drab.vercel.app",
  },
  {
    name: "Battle Chess",
    details:
      ["Inspired by the Chess gamee built on Javafx .",
      "Design a game using OO design and UML diagram.",
      "Final project for Prog Meth I course.",
    ],
    url: "github.com/Tenkris/Chess_Game",
  },
  {
    name: "Project ลืมโว้ย (todolist website connect with chula courseville)",
    details: [
    "Developed a frontend part of todolist website and connect with backend using HTML, CSS, purejs.",
    "Developed a backend part of api and create cookie , authentication using expressjs.",
    "Connect backend part with dynamodb and using Restapi to connect with chula courseville." ,
    "Deployed on frontend and backend in EC2.",
  ],
    url: "github.com/Tenkris/todo_list"
  },

  // // About using 3 sensor ldr , moisture sensor , DHT and connect those sensor with stm board send data using node mcu and blynk app
  {
    name: "FarmHydro Intellicare",
    details:[
      "Developed control system to manipulate data from sensor 3 sensor using C (stm board).",
      "Connect stmboard with nodemcu using UART protocol.",
      "Send data to blynk app using node mcu and connect with blynk app using wifi.",
    ],
    url: "github.com/Tenkris/iot-indoor-home-garden",
  },
  {
    name: "Graph database for pubchem ",
    details:[
      "Understand relation about data in pubchem website.",
      "Developed graph database that represent relation between compound and bioassay.", 
      "Using Cypher to query data from neo4j database.", 
    ],
    url: "github.com/Tenkris/Pubchem_graphql",
  },
];

export const activities = [
  {
    name: "Larngear22th camp",
    details:
      "Worked in an academic team to create academic content in Chula Engineering.",
  },
  {
    name: "Fecamp16 - Fecamp17",
    details:
      "Worked in an academic team to teach physics and mathematics for high school students who are preparing for TCAS exam.",
  },
  {
    name: "Project Begin Mentorship program",
    details:
      ["Joined the Project Begin Mentorship program as a trainee. Learned more about adapting design thinking to design my career life."]
  },
];
export const interests = [
  "Teaching : Teaching group of high school students (4-5 people) about  mathematics and physics as part time job.",
  "E-sport : I won 3rd place in the Rov OTW competition in 2017.",
];
