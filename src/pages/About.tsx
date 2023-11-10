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
      <div style={{display: "flex"}}>
        <section style={{padding: 20 }}>
          <section style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignContent: "center" }}>
          <BioBox />
         <ShowreelVideo />
          </section>
          
          <Education />
          <Languages />
          <Tools />

          {/* <img src={require(Victor.profileImg)} alt="victor-pic" /> */}
          
          
        </section>

        <section style={{ display: "flex", flex: 2, justifyContent: "center" }}>
          
        </section>
      </div>
    </view>
  );
};

/// page components
const BioBox = () => {
  return (
    <div style={{ padding: 10 }}>
      <h2>About Me</h2>
      <p>{Bio.text}</p>
    </div>
  );
};

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: 10,
        }}
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
    <div>
      <h3>Frameworks and Languages</h3>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
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
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Victor.tools.map((tool, i) => (
          <Pill key={i} text={tool} color="red" />
        ))}
      </div>
    </div>
  );
};

const Pill = (props: { text: string; color: string }) => {
  return (
    <div style={{ ...Styles.pill, backgroundColor: props.color }}>
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
    <div style={Styles.eduBox}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FontAwesomeIcon style={{ height: 30 }} icon={faUniversity} />
      </div>
      <p style={{ textAlign: "center" }}>{props.degreeName}</p>
      <p style={{ textAlign: "center" }}>{props.school}</p>
      <p style={{ textAlign: "center" }}>
        {props.startYear} - {props.endYear}
      </p>
    </div>
  );
};

const ShowreelVideo = () => {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 10}}>
          <h1>Showreel</h1>
            <VideoPlayer/>
          </div>
  );
}

/// styles
const Styles = {
  rectangle: {
    zindex: 0,
    background:
      "linear-gradient(270deg, rgba(0,212,255,0) 91%, rgba(40,44,52,1) 96%, rgba(40,44,52,1) 100%)",
  },
  pill: {
    backgroundColor: "purple",
    color: "white",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  eduBox: {
    backgroundColor: Colors.primary,
    justifyContent: "center",
    aligntItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 200,
  },
};

export default About;
