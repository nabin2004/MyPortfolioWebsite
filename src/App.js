import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar crimson-navbar">
        <div className="container-fluid">
          <b><a className="navbar-brand" href="#">Nabin Oli</a></b>
          <b><a className="navbar-brand" href="https://docs.google.com/document/d/1mruy3MrAIagWyTg6WSOQ4RdY61qPd_Y8DnKdB1YfKDo/edit?usp=sharing" target='blank'>My Resume</a></b>
        </div>
      </nav>
      <Body />
      <br/>
      <div className='bodybelow'>
      <Projects />
      <div className='socialHandles'>
      <button type="button" class="btn btn-secondary btn-lg">LinkedIn</button>
      <button type="button" class="btn btn-secondary btn-lg">Github</button>
      <button type="button" class="btn btn-secondary btn-lg">Facebook</button>
      <button type="button" class="btn btn-secondary btn-lg">Instagram</button>
      </div>
      <br/>
      <Experience />
      <br/>
      <Skills />
      <br/>
      <Education />
      <br/>
      <competitionsAndEvents/>
      <br/>
      <languageTest />
      </div>
    </>
  );
}

function Body(){
  return(
    <>
    <h1 className='myname'>nabin.py</h1>
    <p className='tag'>Not your average engineer, not your typical statistician, just an outlier from data science ;-) </p>
    </>
  )
}

function Projects() {
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
  }
  return (
    <>
      <h1 className='pointhead'>nabin.projects()</h1>
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


function Education() {
  const educationList = [{
    institution: "Sunway College Kathmandu - BSc(hons) CS and Data Science",
    address: "Maitidevi, Kathmandu",
    affiliation: "Birmingham City University, UK",
    concentration: "Data Science",
    faculty: "Faculty of Computing, Engineering and the Built Environment",
    timePeriod: "MARCH 2023 - MARCH 2027 (Expected)"
  },
  {
    institution: "Capital College and Research Center (CCRC)",
    address: "Koteshowr, Kathmandu",
    affiliation: "National Examinations Board, Nepal",
    concentration: "High School Education (Grade 11 and Grade 12)",
    faculty: "Science Biology with Extra Mathematics",
    timePeriod: "JULY 2020 - SEPTEMBER 2022"
  },
  {
    institution: "Gyan Jyoti Public School",
    address: "Tulsipur, Dang",
    affiliation: "Government of Nepal, Ministry of Education",
    concentration: "SEE (Completion of S.E.E. Examination)",
    timePeriod: "COMPLETED IN APRIL 2020"
  }
];

  return (
    <>
      <h1 className='pointhead'>nabin.education()</h1>
      <ul className="list-group">
        {educationList.map((education, index) => (
          <li key={index} className="list-group-item">
            <strong>Institution:</strong> {education.institution}<br />

            <div className='bodyofexp'>
            <strong>Address:</strong> {education.address}<br />
            <strong>Affiliation:</strong> {education.affiliation}<br />
            <strong>Concentration:</strong> {education.concentration}<br />
            <strong>Faculty:</strong> {education.faculty}<br />
            <strong>Time Period:</strong> {education.timePeriod}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}


function Experience() {
  const experienceList = [{
    organization: "Centre for Artificial Intelligence Research Nepal, cair-Nepal.org",
    role: "Healthcare Data Analysis Research Intern",
    tenure: "DATES",
    majorFocus: "Major focus are coming soon with this font",
    accomplishments: "Coming soon with this font"
  },
{
  organization: "National Innovation Center, Kirtipur",
  role: "Data Entry Clerk",
  Type: "Volunteer",
  majorFocus: "Microsoft Excel, Data Entry",
  accomplishments: "Digitalization of last three years of Sales and Donation Bills"
},
{
  organization: "Sunway College Kathmandu",
  role: "Research Lab member",
  duration: "#", // You can replace "#" with the actual duration
  majorFocus: "Computer Vision using OpenCV, NumPy, SQL and Raspberry Pi",
  accomplishments: `Throughout my role as a Research Lab member at Sunway College, I was successfully able to perform the following tasks:
    - Make a Class attendance system using a single passport size photo using face encodings
    - Deployed Class attendance system on Raspberry Pi
    - Communicated about new ideas, issues, status, and outcomes with the assigned mentor
    - Discussed research papers and new methodologies
    - Used Agile framework and Agile Manifesto
    - Made use of version control systems for task tracking`
},
{
  organization: "Hashnode",
  role: "Independent Blogger",
  Type: "MARCH 2023 - PRESENT",
  majorFocus: "Tutorials about new concepts, topics that I learn"
}
];

  return (
    <>
      <h1 className='pointhead'>nabin.experience()</h1>
      <ul className="list-group">
        {experienceList.map((experience, index) => (
          <li key={index} className="list-group-item">
            <strong>Organization:</strong> {experience.organization}<br />
            <div className='bodyofexp'>
            <strong>Role:</strong> {experience.role}<br />
            <strong>Tenure:</strong> {experience.tenure}<br />
            <strong>Major Focus:</strong> {experience.majorFocus}<br />
            <strong>Accomplishments:</strong> {experience.accomplishments}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}


function TechnicalExp() {
  const technicalExpertise = {
    programming: ["Python", "Java", "R"],
    scripting: ["Python", "Bash", "PowerShell"],
    database: ["MySQL", "PostgreSQL"],
    versionControl: ["Git", "Github"],
    containerization: ["Docker", "Kubernetes"],
    ciCd: ["AWS CodeBuild", "GitHub Actions"]
  };

  return (
    <>
      <h1 className='pointhead'>nabin.technical_expertise()</h1>
      <ul className="list-group">
        {Object.entries(technicalExpertise).map(([category, skills], index) => (
          <li key={index} className="list-group-item">
            <strong>{category}:</strong> {skills.join(", ")}
          </li>
        ))}
      </ul>
    </>
  );
}

function Competitions() {
  const competitionsAndEvents = {
    name: "Hackathon name",
    position: "Position and other details"
  };

  return (
    <>
      <h1 className='pointhead'>nabin.competitions_and_events()</h1>
      <ul className="list-group">
        {Object.entries(competitionsAndEvents).map(([key, value], index) => (
          <li key={index} className="list-group-item">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </>
  );
}

function Honors() {
  const honorsAndAwards = [
    "Sunway Always Prepared Award - 2023"
  ];

  return (
    <>
      <h1 className='pointhead'>nabin.honors_and_awards()</h1>
      <ul className="list-group">
        {honorsAndAwards.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

function Certification() {
  const languageTest = {
    test: "Pearson Test of English Proficiency",
    score: "75 out of 90"
  };

  return (
    <>
      <h1 className='pointhead'>nabin.certification()</h1>
      <ul className="list-group">
        {Object.entries(languageTest).map(([key, value], index) => (
          <li key={index} className="list-group-item">
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </>
  );
}


function Skills() {
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
  return (
    <>
      <h1 className='pointhead'>nabin.skills</h1>
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


export default App;
