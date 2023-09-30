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

// data
let Victor = {
  name: "Victor Falck-Næss",
  profileImg:
    "https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/364799417_2989421171193638_6815297408984585136_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=rLvZWL_njE8AX8Q8XP3&_nc_ht=scontent.fosl3-1.fna&oh=00_AfCfntNa1n4Lj4pKWgs3zpb5fh_NpIIx5DA46_qjZdKthQ&oe=651DD115",
  age: 24,
  location: "Oslo, Norway",
  currentOccupation: "Student, Software developer, & Game designer",
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
  I'm currently studying ${Victor.currentOccupation} at Krsitiania University College.
  I have a passion for technology and media, and I love to create things.
  In my spare time I like to meet up with people, play video games, and create new software solutions.
  `,
};

// page
const About: React.FC = () => {
  return (
    <view>
      <div style={{display: "flex"}}>
        <section style={{flex: 2, padding: 20 }}>
          <BioBox />
        </section>

        <section style={{ display: "flex", flex: 2, justifyContent: "center" }}>
          <img
            style={{ width: "70%", objectFit: "cover", borderRadius: 400 }}
            src={Victor.profileImg}
            alt=""
          />
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
          justifyContent: "space-between",
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
