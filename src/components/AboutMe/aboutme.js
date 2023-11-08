import React from 'react'
import './aboutme.css'
import uiImg from "../../assets/ui.png"
import webDesignImg from "../../assets/website-design.png"
import otherImg from "../../assets/full-stack.png"


export default function AboutMe() {
  return (
    <section id="aboutMeSection">
        <h2 className="aboutMeTitle">About Me</h2>
        <span className="aboutMeDescription"> spans a wide range of programming languages, frameworks, and tools, including C++, C, 
        Python, Java, HTML, Node.js, JavaScript, CSS, Bootstrap, React, SQL, MySQL, MSSQL, MongoDB, NoSQL, Oracle, AWS Cloud, Git,
         GitHub, Vim, Postman, Visual Studio Code, Jira, Linux, and NodeJS. He is well-versed in both Agile and Plan-Driven development 
         methodologies, data structures, object-oriented programming, and Big O notation. Tommy also possesses a strong background in 
         Artificial Intelligence (AI) techniques, Quality Assurance (QA) methodologies, and Website Accessibility (WCAG).</span>
        <div className="skill">
            <div  className="skillCard">
                <img src={uiImg} alt="" className="skillImg"/>
                <div className="skillText">
                    <h3 className="skillHeader">UI/UX Design</h3>
                    <p className="skillText">A skilled web developer often possesses the capabilities to excel in both User Interface (UI) and User Experience (UX) design, 
                        creating a seamless and enjoyable online experience for users. Through a deep understanding of web technologies and design principles, 
                        web developers can ensure that websites not only look visually appealing but also function smoothly. They pay attention to details, 
                        such as intuitive navigation, responsive layouts, and well-structured content, all of which contribute to a positive user experience. 
                        By combining technical proficiency with a user-centric mindset, web developers are adept at crafting websites that strike a balance between 
                        aesthetics and functionality, ultimately delivering websites that engage and delight users.</p>
                </div>
            </div>    
            <div  className="skillCard">
                <img src={webDesignImg} alt="" className="skillImg"/>
                <div className="skillText">
                    <h3 className="skillHeader">Web Design</h3>
                    <p className="skillText"> proficient web developer possesses the essential skills to create outstanding web designs that captivate and engage visitors. 
                        With a deep understanding of design principles, layout aesthetics, and user-friendly interfaces, web developers are adept at crafting visually 
                        appealing websites. They pay meticulous attention to factors like typography, color schemes, and responsive design to ensure that the website 
                        not only looks visually appealing but also functions seamlessly across various devices. Their ability to blend creativity with technical expertise 
                        results in well-structured and intuitive web layouts that provide a satisfying user experience. In essence, web developers are the architects behind 
                        aesthetically pleasing, functional, and user-friendly websites that leave a lasting impression on visitors.</p>
                </div>
            </div>
            <div  className="skillCard">
                <img src={otherImg} alt="" className="skillImg"/>
                <div className="skillText">
                    <h3 className="skillHeader">Web Design</h3>
                    <p className="skillText"> proficient web developer possesses the essential skills to create outstanding web designs that captivate and engage visitors. 
                        With a deep understanding of design principles, layout aesthetics, and user-friendly interfaces, web developers are adept at crafting visually 
                        appealing websites. They pay meticulous attention to factors like typography, color schemes, and responsive design to ensure that the website 
                        not only looks visually appealing but also functions seamlessly across various devices. Their ability to blend creativity with technical expertise 
                        results in well-structured and intuitive web layouts that provide a satisfying user experience. In essence, web developers are the architects behind 
                        aesthetically pleasing, functional, and user-friendly websites that leave a lasting impression on visitors.</p>
                </div>
            </div>       
        </div>
    </section>
  )
}
