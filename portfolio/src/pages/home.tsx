import Navbar from "../components/layout/navbar/navbar";
import Mission from "../components/layout/mission/mission";
import Skill from "../components/layout/skills/skill";
import Project from "../components/layout/project/project";
import SubNavBar from "../components/layout/subnavbar/subnavbar";
import LearnMore from "../components/layout/learnmore/learnmore";

import Hero from "../components/layout/new/new";

import { SubNavProvider } from "../context/navbar";
import { ProjectProvider } from "../context/project";
const HomePage = () => {

  return (
    <>
      <SubNavProvider>
        <SubNavBar />
        <Navbar />
      </SubNavProvider>
      <Hero />
      <Mission />
      <Skill />
      <ProjectProvider>
        <Project />
        <LearnMore/>
      </ProjectProvider>

    </>

  )
};

export default HomePage;