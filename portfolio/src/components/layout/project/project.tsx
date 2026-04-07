import ProjectData from "./projectdata"
import './project.css'
import type { ProjectType } from "../../../context/modal"
import { useModalStore } from "../../../context/modal"
import { useRef } from "react"


const Project = () => {

    const divRef = useRef<HTMLDivElement | null>(null);


    const setComponent = useModalStore((state) => state.setComponent);

    const learnMore = (data: ProjectType) => {
        setComponent({ type: 'Project', data: [data] })
    }

    const ScrollLeft = () => {


        const elem = divRef.current

        elem?.scrollBy({
            left: -200,
            behavior: "smooth",
        });


    }

    const ScrollRight = () => {

        const elem = divRef.current

        elem?.scrollBy({
            left: 200,
            behavior: "smooth",
        });


    }


    return (
        <section className="Project">
            <h1 className="Project-H1">A Collection of Projects That Reflect My Skills, Passion, and Creative Journey</h1>
            <div className="Project-Card" ref={divRef}>
                {ProjectData.map((data) => (
                    <div className="Project-Card-Content" onClick={() => learnMore(data)}>
                        <img className="Project-Img" src={data.thumbnail} alt="" />
                        <div className="Project-Card-details">
                            <h3 className="Project-Name">{data.category}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                            </svg>
                        </div>

                    </div>
                ))}

            </div>
            <div className="Project-Arrows">
                <svg onClick={ScrollLeft} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                </svg>
                <svg onClick={ScrollRight} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
            </div>
        </section>
    )
}

export default Project