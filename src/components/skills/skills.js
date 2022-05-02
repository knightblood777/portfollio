import React from 'react'
import ReactSkillbar from 'react-skillbars';
import SkillBar from 'react-skillbars';
import './skills.css'
import terminal from '../../static/terminal.svg'

const skills = [
    {type: "Html/Css", level: 85, color:{bar:"#3498db",title: {background:"#3498db"}}},
    {type: "Javascript", level: 80,color:{bar:"#6f42c1",title: {background:"#6f42c1"}}},
    {type: "Jquery", level: 70,color:{bar:"#3498db",title: {background:"#3498db"}}},
    {type: "Bootstrap", level: 70,color:{bar:"#6f42c1",title: {background:"#6f42c1"}}},
    {type: "React/Mui", level: 50,color:{bar:"#3498db",title: {background:"#3498db"}}},
    {type: "Python", level: 90,color:{bar:"#6f42c1",title: {background:"#6f42c1"}}},
    {type: "Django", level: 90,color:{bar:"#3498db",title: {background:"#3498db"}}},
    {type: "Php", level: 50,color:{bar:"#6f42c1",title: {background:"#6f42c1"}}},
    {type: "C", level: 60,color:{bar:"#3498db",title: {background:"#3498db"}}},
  ];
  const colors = {
    bar: "#3498db",
    title: {
      text: "#fff",
      background: "#2980b9"
    }
  };
const Skills = () => {
  return (
      <>
      <div className="skwrap">
      <h4 className="skhead"><span className="xterm"></span><span className="Important">cd </span> /Skills</h4>
      </div>
    <SkillBar skills={skills} height={40}/>
    </>
  )
}

export default Skills