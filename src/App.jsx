import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import bitmoji from "./assets/bitmoji.png";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";




const projects = [
  {
    title: "Cognitive Workload Analysis using Deep Learning",
    description: "Deep learning model for cognitive workload detection using EEG signals.",
    tech: "Python, TensorFlow, Scikit-Learn, MNE, EEG Processing Pipeline",
    github: "https://github.com/Oblivion-2k/Cognitive-Workload-analysis-using-Deep-Learning"
  },
  {
    title: "Dynamic Project Management Board using React",
    description: "Real-time Kanban board using React, GraphQL and Node.js.",
    tech: "React, GraphQL, Node, Apollo Server, MongoDB, WebSockets, JWT",
    github: "https://github.com/Oblivion-2k/Dynamic_Project_Management_System_Frontend"
  },
  
];
const skills = [
  "Python",
  "Java",
  "SQL",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "TensorFlow",
  "Machine Learning",
  "Scikit-Learn",
  "CI/CD",
  "Data Structures & Algorithms",
  "MySQL",
  "Deep Learning",
  "Javascript",
  "LLMs",
  "Agentic AI"
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    
    <div className={`${darkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} min-h-screen font-sans`}>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <button
onClick={() => setDarkMode(!darkMode)}
className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-600"
>
{darkMode ? "Light Mode" : "Dark Mode"}
</button>
        </div>
      </nav>

      
      {/* Hero */}
<section className="flex flex-col items-center justify-center text-center h-[90vh]">

<motion.h1
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-5xl font-bold mb-6"
>
  Hello, I am <span className="text-blue-400">Arnnab Tripathy</span>
</motion.h1>

<TypeAnimation
  sequence={[
    "AI-ML Enthusiast",
    2000,
    "Deep Learning Explorer",
    2000,
    "Full Stack Developer",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-2xl text-gray-400" />


{/* Lottie Animation }
<div className="w-72 mt-10">
  <Lottie animationData={codingAnimation} loop={true} />
</div> */}

{/* Bitmoji Avatar */}
<a
  href="https://github.com/Oblivion-2k"
  target="_blank"
>
<motion.img
  src={bitmoji}
  alt="Arnnab Avatar"
  className="w-80 mt-6 rounded-full shadow-lg"
  whileHover={{ scale: 1.1 }}
/>
</a>

{/*<motion.button
  whileHover={{ scale: 1.1 }}
  className="mt-8 bg-white text-black px-6 py-3 rounded-lg"
>
  View Projects
</motion.button>*/}


</section>
      

      {/* About */}
      <section id="about" className="-mt-16 pt-10 pb-20 px-6">

<div className="max-w-4xl mx-auto text-center">

<h2 className="text-3xl font-bold mb-6">
About Me
</h2>

<p className="text-gray-400 leading-relaxed">
I am a B.Tech Computer Science and Information Technology graduate focused on Artificial Intelligence,
Machine Learning and Full Stack Development. I build projects involving
Deep learning, EEG signal processing and Modern web applications.
</p>

<div className="mt-8 flex justify-center gap-4">

<a
href="/resume.pdf"
target="_blank"
className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
>
View Resume
</a>

<a
href="/resume.pdf"
download
className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
>
Download Resume
</a>

</div>

</div>

</section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-900">

        <h2 className="text-3xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto justify-items-center">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-gray-500">
                {project.tech}
              </p>
              <a
  href={project.github}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
>
  <FaGithub className="inline mr-2"/>
  View on GitHub
</a>
    
            </motion.div>

          ))}

        </div>

      </section>
      {/* Skills */}
<section id="skills" className="py-20 px-6 bg-gray-950 text-center">

<h2 className="text-3xl font-bold mb-6">
My Skills
</h2>
{/*
<p className="text-blue-400 mb-12 text-lg">
Data Science & Analysis
</p>*/}

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

{skills.map((skill, index) => (

<div
key={index}
className="bg-gray-800 py-4 rounded-lg text-gray-200 hover:bg-blue-500 transition duration-300 cursor-default"
>
{skill}
</div>

))}

</div>

</section>

      {/* Contact */}
      <section id="contact" className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">
Find Me
</h2>
<p className="mt-8 text-gray-400 max-w-xl mx-auto">
I am currently open to new opportunities. Feel free to reach out to me!
</p>

<div className="flex justify-center gap-8 mt-4 text-2xl">

<a
href="mailto:arnnab.arnnab@gmail.com"
className="flex items-center gap-3 hover:text-blue-400"
>
<MdEmail size={22} />
{/*Gmail*/}
</a>
<a
href="https://www.instagram.com/arnnab_510/"
target="_blank"
className="flex items-center gap-3 hover:text-pink-400"
>
<FaInstagram size={22}/>
 {/*Instagram*/}
</a>

<a
href="https://github.com/Oblivion-2k"
target="_blank"
className="flex items-center gap-3 hover:text-blue-400"
>
<FaGithub size={22} />
{/*GitHub*/}
</a>

<a
href="https://www.linkedin.com/in/arnnabtripathy55/"
target="_blank"
className="flex items-center gap-3 hover:text-blue-400"
>
<FaLinkedin size={22} />
{/*LinkedIn*/}
</a>

</div>

</section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 border-t border-gray-800">
        © 2026 Arnnab Tripathy. All Rights Reserved.
      </footer>

    </div>
  );
}

export default App;
