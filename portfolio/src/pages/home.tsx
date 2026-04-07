import Navbar from "../components/layout/navbar/navbar";
import Mission from "../components/layout/mission/mission";
import Skill from "../components/layout/skills/skill";
import Project from "../components/layout/project/project";
import LearnMore from "../components/layout/learnmore/learnmore";
// import Modal from "../components/layout/model/model";
import Hero from "../components/layout/new/new";

const HomePage = () => {

  return (
    <>
      {/* <Modal /> */}
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