import {
  fa0,
  faFaceAngry,
  faLeaf,
  faSchool,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Colors from "../Styles/StyleSheet";
import VideoPlayer from "../components/VideoPlayer";
import Background from "../Assets/background";

// data
let Victor = {
  name: "Victor Falck-Næss",
  profileImg:
    "../assets/images/profile.jpeg",
  age: 24,
  location: "Oslo, Norway",
  currentOccupation: "Student, Software & Web developer, & Game designer",
  hobbies: [
    "Video Games",
    "Photography",
    "Videography",
    "Graphic Design",
    "3D Modeling",
    "Reading",
  ],
  codingLanguages: [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#4C9BDB"
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#4C9BDB"
    },
    {
      name: "Node",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#267326"
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      color: "#B53D1D"
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      color: "#0F5A8C"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      color: "#D4C22C"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      color: "#005A8C"
    },
    {
      name: "C#",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg",
      color: "#1D6E1D"
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg",
      color: "#004C7F"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain.svg",
      color: "#005D7F"
    },
    {
      name: "Swift",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-plain.svg",
      color: "#D15E2C"
    },
  ],
  tools: [
    {
      name: "Unity",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      color: "#000000"
    },
    {
      name: "VSCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      color: "#007ACC"
    },
    {
      name: "XCode",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
      color: "#1575F9"
    },
    {
      name: "Visual Studio",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      color: "#5C2D91"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032"
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      color: "#4479A1"
    },
    {
      name: "Unreal Engine",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
      color: "#313131"
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      color: "#F5792A"
    },
    {
      name: "Photoshop",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      color: "#31A8FF"
    },
    {
      name: "Illustrator",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      color: "#FF7C00"
    },
    {
      name: "InDesign",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-plain.svg",
      color: "#FF3366"
    },
    {
      name: "Premiere Pro",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
      color: "#EA77FF"
    },
    {
      name: "After Effects",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
      color: "#D291FF"
    },
    {
      name: "Audition",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/audition/audition-plain.svg",
      color: "#FF4500"
    },
    {
      name: "Lightroom",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lightroom/lightroom-plain.svg",
      color: "#31A8FF"
    },
    {
      name: "Adobe XD",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg",
      color: "#FF61F6"
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E"
    }
  ],
};

const Degrees = [

  {
    name: "Bachelor in Game Design",
    school: "Kristiania University College",
    startYear: 2018,
    endYear: 2021,
  },

  {
    name: "Bachelor in Frontend and mobile/app development",
    school: "Kristiania University College",
    startYear: 2021,
    endYear: 2024,
  },

  {
    name: "Bachelor in Japanese with japanese studies",
    school: "University of Oslo",
    startYear: 2022,
    endYear: 2023,
  },
];

let Bio = {
  text: `
  Greetings, my name is Victor Falck-Næss. 
  I am a ${Victor.age}-year-old resident of ${Victor.location}, currently pursuing my studies in Frontend Development at Kristiania University College. 
  My academic and personal journey has been driven by a deep-seated passion for technology and media, which has led me to develop a keen interest in creating innovative solutions. 
  Outside of my academic pursuits, I value interpersonal connections and enjoy engaging with others. Additionally, 
  I have a fondness for video games and often spend my leisure time developing new software solutions. 
  This blend of interests and skills positions me uniquely in the tech industry, and I am eager to bring my expertise to a professional setting.
  `,
};

let tailwindStyles = {
  glassBox: "bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100",
};

// page
const About: React.FC = () => {

  return (
    <view>

      <div className="absolute top-0 left-0 w-screen h-screen -z-10">
        <Background />
      </div>

      <div className="flex flex-col p-5 z-10">

        <section className="flex lg:flex-row items-center sm:flex-col">
          <BioBox />
          <ShowreelVideo />
        </section>

        <section>
          <Education />
          <Languages />
          <Tools />
        </section>
        

      </div>
    </view>
  );
};

/// page components
const BioBox = () => {
  return (
    <div className=" bg-secondary p-3 rounded-md shadow-lg h-fit">
      <h2 className="text-xl font-bold">About Me</h2>
      <p className="">{Bio.text}</p>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Education</h2>
      <div className="flex lg:flex-col sm:flex-row justify-around items-center space-y-2 "
      >
        {Degrees.map((degree, i) => (
          <EduBox
            degreeName={degree.name}
            school={degree.school}
            startYear={degree.startYear}
            endYear={degree.endYear}
          />
        ))}
      </div>
    </div>
  );
};

const Languages = () => {
  return (
    <div className="flex flex-col">
      <h3>Frameworks and Languages</h3>
      <div className="flex flex-wrap justify-center space-x-2 space-y-2">
        {Victor.codingLanguages.map((language, i) => (
          <Pill key={i} text={language.name} icon={language.icon as string} color={language.color as string} />
        ))}
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div>
      <h3>Tools</h3>
      <div className="flex flex-wrap space-x-2 shadow-md justify-center">
        {Victor.tools.map((tool, i) => (
          <Pill key={i} text={tool.name} color={tool.color} icon={tool.icon} />
        ))}
      </div>
    </div>
  );
};

const Pill = (props: { text: string; color: string; icon?: string }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="bg-gray-300 animate-pulse rounded-full h-fit p-2 text-sm align-middle flex flex-row">
        <div className="h-5 w-5 bg-gray-400 rounded-full"></div>
        
        <div className="ml-2 bg-gray-400 rounded-full h-5 w-20"></div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: props.color }} className="flex bg-accent rounded-full w-fit h-10 p-3 items-center">
      <img className="h-5 w-5 space-x-2" src={props.icon} />
      <p className="align-middle">{props.text}</p>
    </div>
  );
};


const EduBox = (props: {
  degreeName: string;
  school: string;
  startYear: number;
  endYear: number;
}) => {
  return (
    <div className={`${tailwindStyles.glassBox} flex flex-col p-2 rounded-md w-52`}>

      <div className=" self-center">
        <FontAwesomeIcon style={{ height: 30 }} icon={faUniversity} />
      </div>
      <p className="text-center font-bold">{props.degreeName}</p>
      <p className="text-center">{props.school}</p>
      <p className="text-center">
        {props.startYear} - {props.endYear}
      </p>
    </div>
  );
};

const ShowreelVideo = () => {
  return (
    <div className="flex flex-2 p-2">
      <VideoPlayer />
    </div>
  );
}

export default About;
