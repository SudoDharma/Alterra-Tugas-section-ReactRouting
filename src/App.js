import { useState } from "react"
import './App.css';

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import AboutContent from "./components/AboutContent";

const App = () => {

  const aboutAppText = "In this app, you can add, delete, submit and edit items. To edit items, simply double click on it. Once you are done,      press the enter key to resubmit. This app will persist your data in the browser local storage. So wether you reload, close your app and reopened it, you still have access to your todos-items.";

  const aboutAuthorText = "This app was developed by someone, a self-taught web developer and a technical writer";

  return(
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About/>}>
        <Route index element={<AboutContent header="App" text={aboutAppText}/>}/>
        <Route path="about-app" index element={<AboutContent header="App" text={aboutAppText}/>}/>
        <Route path="about-author" element={<AboutContent header="Author" text={aboutAuthorText}/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
} 

export default App;
