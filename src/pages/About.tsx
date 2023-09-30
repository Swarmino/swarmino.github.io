import React from "react";

// data
let Victor = {
  name: "Victor Falck-Næss",
  profileImg: "src/Assets/images/victor.JPG",
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
    startYear: 2018,
    endYear: 2021,
    logoUrl: "src/Assets/images/uio.png",
  },

  {
    name: "Bachelor in Game Design",
    school: "Kristiania University College",
    startYear: 2018,
    endYear: 2021,
    logoUrl: "src/Assets/images/kristiania.png",
  },

  {
    name: "Bachelor in Frontend and app development",
    school: "Kristiania University College",
    startYear: 2021,
    endYear: 2024,
    logoUrl: "src/Assets/images/kristiania.png",
  },
]

let Bio = {
  text: `
  My name is ${Victor.name}, I'm ${Victor.age} years old and I live in ${Victor.location}.
  I'm currently studying ${Victor.currentOccupation} at Westerdals Oslo ACT.
  `,
};

// page
const About: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", padding: 10 }}>
      <section style={{ order: 0, flex: 2}}>
        <h1>About</h1>
        <h2>Who am I?</h2>
        <p>{Bio.text}</p>

        <Education />

        <h2>Proficiencies</h2>
        
        <Languages />
        
        <Tools />
      </section>

      {/* Profile image */}
      <section style={{flex: 2, order: 1 }}>
        <div style={Styles.rectangle}>
        <img
          style={Styles.img}
          src={Victor.profileImg}
          alt="profile pic"
        />
        </div>
      </section>
    </div>
  );
};


/// components
const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", padding: 10 }}>
        {Degrees.map((degree, i) => (
          <EduBox
            degreeName={degree.name}
            school={degree.school}
            image={degree.logoUrl}
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
  image: string;
  startYear: number;
  endYear: number;
}) => {
  return (
    <div style={Styles.eduBox}>
      <img src={props.image} alt="school logo" />
      <p style={{textAlign: "center"}}>{props.degreeName}</p>
      <p style={{textAlign: "center"}}>{props.school}</p>
      <p style={{textAlign: "center"}}>
        {props.startYear} - {props.endYear}
      </p>
    </div>
  );
};


/// styles
const Styles = {
  img: {
    zIndex: 1,
  },
  rectangle: {
    zindex: 0,
    width: 200,
    height: 100,
    background: "linear-gradient(to bottom right, #ff0000, #0000ff)",
  },
  pill: {
    backgroundColor: "purple",
    color: "white",
    padding: 10,
    margin: 5,
    borderRadius: 20,
  },
  eduBox: {
    backgroundColor: "purple",
    justifyContent: "center",
    aligntItems: "center",
    borderRadius: 10,
    padding: 10,
    width: 200,
  },
};

export default About;
