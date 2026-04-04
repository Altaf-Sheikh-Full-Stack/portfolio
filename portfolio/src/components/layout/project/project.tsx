import ProjectData from "./projectdata"
import './project.css'
import type { ProjectType } from "../../../context/modal"
import { useModal } from "../../../context/modal"

const Project = () => {

    const { setComponent } = useModal()

    const learnMore = (data: ProjectType) => {
        setComponent({type: 'Project', data : [data]})
    }


    return (
        <section className="Project">
            <div className="Project-About">
                <h1 className="Project-About-H1">Check about my project</h1>
                <p className="Project-About-P">sasdsa</p>
                <button>Hello world</button>
            </div>
            <div className="Project-Card">
                {ProjectData.map((data) => (
                    <div className="Project-Card-Content" onClick={() => learnMore(data)}>
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