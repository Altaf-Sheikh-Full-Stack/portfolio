import Navbar from "../components/layout/navbar/navbar";
import Mission from "../components/layout/mission/mission";
import Skill from "../components/layout/skills/skill";
import Project from "../components/layout/project/project";
import Modal from "../components/layout/model/model";
import Hero from "../components/layout/new/new";
import Pricing from "../components/layout/pricing/pricing";
import Footer from "../components/layout/footer/footer";
import Process from "../components/layout/process/process";
import CaseStudy from "../components/layout/casestudy/casestudy";


const HomePage = () => {

  return (
    <>
      <Modal />
      <Navbar />
      <Hero />
      <Mission />
      <Skill />
      <Project />
      <Process/>
      <CaseStudy/>
      <Pricing/>
      <Footer/>
    </>

  )
};

export default HomePage;