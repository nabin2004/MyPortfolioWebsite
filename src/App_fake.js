import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar crimson-navbar">
        <div className="container-fluid">
          <b><a className="navbar-brand" href="#">Nabin Oli</a></b>
        </div>
      </nav>
      <Body />
      <Projects />
      <Skills />
    </>
  );
}

function Body(){
  return(
    <>
    <h1 className='myname'>nabin.py</h1>
    <p className='tag'>Query-ious Undergraduate Data Science python file</p>
    </>
  )
}

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Maintenance Period</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(PROJECTS).map((projectName, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{projectName}</td>
              <td>{PROJECTS[projectName].Description}</td>
              <td>{PROJECTS[projectName].MaintenancePeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function Education(){
  const educationList = 
    {
      institution: "Sunway College Kathmandu - BSc(hons) CS and Data Science",
      address: "Maitidevi, Kathmandu",
      affiliation: "Birmingham City University, UK",
      concentration: "Data Science",
      faculty: "Faculty of Computing, Engineering and the Built Environment",
      timePeriod: "MARCH 2023 - MARCH 2027 (Expected)"
    }
  return(
    <>
   
    </>
  )
}

function Experience(){
  const experienceList = 
    {
      organization: "Centre for Artificial Intelligence Research Nepal, cair-Nepal.org",
      role: "Healthcare Data Analysis Research Intern",
      tenure: "DATES",
      majorFocus: "Major focus are coming soon with this font",
      accomplishments: "Coming soon with this font"
    }
  return(
    
  )
}

function TechnicalExp(){
  const technicalExpertise = {
    programming: ["Python", "Java", "R"],
    scripting: ["Python", "Bash", "PowerShell"],
    database: ["MySQL", "PostgreSQL"],
    versionControl: ["Git", "Github"],
    containerization: ["Docker", "Kubernetes"],
    ciCd: ["AWS CodeBuild", "GitHub Actions"]
  };
  
  return(

  )
}

function competitions() {
  const competitionsAndEvents =
    {
      name: "Hackathon name",
      position: "Position and other details"
    }
  return(
<h1>Hello</h1>
  )
}

function honors(){
  const honorsAndAwards = [
    "Sunway Always Prepared Award - 2023"
  ];
  return(

  )
}

function Certification(){
  const languageTest = {
    test: "Pearson Test of English Proficiency",
    score: "75 out of 90"
  }
  return(
    
  )
}


const PROJECTS = {
  "Exploratory Data Analysis": {
    GitHub: "",  // Add the actual GitHub link
    Description: "Exploration and Analysis of Data",
    MaintenancePeriod: "June 2018 to present"
  },
  "Hospital Management System": {
    GitHub: "",  // Add the actual GitHub link
    Description: "A project made using Object Oriented Programming and Tkinter",
    MaintenancePeriod: "January 2021 to present"
  },
  "CHESS game project": {
    GitHub: "",  // Add the actual GitHub link
    Description: "A real-time chess game using HTML, CSS, React.js, and Django",
    MaintenancePeriod: "June 2020 to present"
  },
  "Nepal Stock Exchange Web Scraping": {
    GitHub: "",  // Add the actual GitHub link
    Description: "This project was made to scrape NEPSE Stock Exchange Data from the website",
    MaintenancePeriod: "August 2021"
  },
  "Open PDF Download": {
    GitHub: "",  // Add the actual GitHub link
    Description: "This project was aimed at making free books accessible to everyone",
    MaintenancePeriod: "May 2021"
  }
};

function Skills() {
  return (
    <>
      <h1>Skills</h1>
      <ul className="list-group">
        {skillsList.map((skill, index) => (
          <li key={index} className="list-group-item">
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
}

const skillsList = [
  "Programming in Python, Java, and R",
  "Data Manipulation and Cleaning with NumPy and Pandas",
  "Data Visualization using Matplotlib, Seaborn, Plotly, and D3.js",
  "Database Design and Querying SQL",
  "Foundational Knowledge in Machine Learning using Scikit Learn",
  "Familiarity with Deep Learning with FastAi and Pytorch",
  "Proficient at full-stack web development in JavaScript, React, and Django",
  "Version Control System Git and GitHub",
  "Distributed Computing System Apache Spark, PySpark"
];


export default App;
