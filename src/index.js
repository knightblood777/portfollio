import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header/header'
import Uppershape from './components/uppershapes/uppershape'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Timeline from './components/timeline/timeline'
import Social from './components/social/social'
import App from './App';
import reportWebVitals from './reportWebVitals';

const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
const looparea = ReactDOM.createRoot(document.getElementById('loop'));
const about = ReactDOM.createRoot(document.getElementById('about'));
const skills = ReactDOM.createRoot(document.getElementById('skills'));
const projects = ReactDOM.createRoot(document.getElementById('projects'));
const social = ReactDOM.createRoot(document.getElementById('social'));
const timeline = ReactDOM.createRoot(document.getElementById('timeline'));
sidebar.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);
looparea.render(
 <Uppershape />
)
about.render(
  <About />
)
skills.render(
  <Skills />
)
projects.render(
  < Projects/>
)
timeline.render(
  <Timeline />
)
social.render(
  <Social />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
