import {
  fa0,
  faFaceAngry,
  faLeaf,
  faSchool,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
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
    "React",
    "React Native",
    "Node",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "C#",
    "C++",
    "Java",
    "Swift",
  ],
  tools: [
    "Unity",
    "VSCode",
    "XCode",
    "Visual Studio",
    "Git",
    "GitHub",
    "MySQL",
    "Unreal Engine",
    "Blender",
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Premiere Pro",
    "After Effects",
    "Audition",
    "Lightroom",
    "Adobe XD",
    "Figma",
    "Procreate",
  ],
};

const Degrees = [
  {
    name: "Bachelor in Japanese with japanese studies",
    school: "University of Oslo",
    startYear: 2022,
    endYear: 2023,
  },

  {
    name: "Bachelor in Game Design",
    school: "Kristiania University College",
    startYear: 2018,
    endYear: 2021,
  },

  {
    name: "Bachelor in Frontend and app development",
    school: "Kristiania University College",
    startYear: 2021,
    endYear: 2024,
  },
];

let Bio = {
  text: `
  My name is ${Victor.name}, I'm ${Victor.age} years old and I live in ${Victor.location}.
  I'm currently studying frontend development at Kristiania University College.
  I have a passion for technology and media, and I love to create things.
  In my spare time I like to meet up with people, play video games, and create new software solutions.
  `,
};

// page
const About: React.FC = () => {
  return (
    <view>
      
      <div className="absolute top-0 left-0 w-screen h-screen -z-10">
        <Background/>
      </div>

      <div className="flex flex-row p-5 z-10">
      
        <section className="flex lg:flex-row items-center sm:flex-col">
          <BioBox />
         <ShowreelVideo />
         </section>
         
          <Education />
          <Languages />
          <Tools />

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
      <div className="flex flex-row flex-wrap justify-around"
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
    <div className="flex flex-row">
      <h3>Frameworks and Languages</h3>
      <div className="flex bg-background p-2 rounded-md">
        {Victor.codingLanguages.map((language, i) => (
          <Pill key={i} text={language} color="blue" />
        ))}
      </div>
    </div>
  );
};

const Tools = () => {
  return (
    <div>
      <h3>Tools</h3>
      <div>
        {Victor.tools.map((tool, i) => (
          <Pill key={i} text={tool} color="red" />
        ))}
      </div>
    </div>
  );
};

const Pill = (props: { text: string; color: string }) => {
  return (
    <div className=" bg-accent rounded-full w-fit h-5 p-2 text-sm align-middle">
      {props.text}
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
    <div>
      
      <div>
        <FontAwesomeIcon style={{ height: 30 }} icon={faUniversity} />
      </div>
      <p className="text-center">{props.degreeName}</p>
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
            <VideoPlayer/>
          </div>
  );
}

export default About;
