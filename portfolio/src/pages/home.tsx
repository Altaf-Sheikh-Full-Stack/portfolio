import Navbar from "../components/layout/navbar/navbar";
import Mission from "../components/layout/mission/mission";
import Skill from "../components/layout/skills/skill";
import Project from "../components/layout/project/project";
import SubNavBar from "../components/layout/model/model";
import LearnMore from "../components/layout/learnmore/learnmore";

import Hero from "../components/layout/new/new";

const HomePage = () => {

  return (
    <>

      <SubNavBar />
      <Navbar />
      <Hero />
      <Mission />
      <Skill />
      <Project />
      <LearnMore />


    </>

  )
};

export default HomePage;