import React from 'react';
import './intro.css'
import bg from '../../assets/me.jpg'
import {Link} from 'react-scroll';
import WorkIcon from '@mui/icons-material/Work';


export default function Intro() {
  return (
    <div>
      <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Tommy</span><br/>Designer & Developer</span>
            <p className="introPara"><br/>I am a web developer with in-depth experience in UI/UX design. I believe websites can be expressive and informative
             while maintaining a user friendly, accessible and intuitive user experience.</p>
             <Link><button className="btn"><WorkIcon fontSize='large'/> Projects</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg"/>
      </section>
    </div>
  )
}

