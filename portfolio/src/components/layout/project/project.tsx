import ProjectData from "./projectdata"
import './project.css'
import { useProject } from "../../../context/project"
import type { Project } from "../../../context/project"


const Project = () => {

    const { setData } = useProject()

    const learnMore = (data: Project) => {
        setData([data])
    }


    return (
        <section className="Project-Section">
            <div className="Project-Section-About">
                <h1 className="Project-Section-About-H1">Check about my project</h1>
                <p className="Project-Section-About-P"></p>
            </div>
            <div className="Project-Parent">
            {ProjectData.map((data) => (
                <div className="Project" onClick={() => learnMore(data)}>
                    <img className="Project-Img" src={data.imgs[0].url} alt="" />
                    <h3 className="Project-Name">{data.name}</h3>
                    <p className="Project-description">{data.description}</p>
                    <h4 className="Project-budget">{data.budget}</h4>
                </div>
            ))}

            </div>

        </section>
    )
}

export default Project