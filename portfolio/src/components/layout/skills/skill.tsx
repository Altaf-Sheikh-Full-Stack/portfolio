
import './skill.css'


const Skill = () => {
    return (
        <section className="Skill">
            <div className='Skill-Box-1'>
                <h1 className='Skill-Box-1-H1'>Skill</h1>
            </div>
            <div className='Skill-Box-2'>
                <div className='Skill-Box-2-Content'>
                    <h1>Design</h1>
                    <div className='Skill-Box-2-Content-Details'>
                        <p>Figma</p>
                        <p>Design system</p>
                        <p>Design framworks</p>
                        <p>UX/UI</p>
                        <p>User first thinking</p>
                    </div>
                </div>
            </div>
            <div className='Skill-Box-3'>
                <div className='Skill-Box-3-Content'>
                    <h1>Frontend</h1>
                    <div className='Skill-Box-2-Content-Details'>
                        <p>HTML/CSS/JS/TS</p>
                        <p>React.js/Next.js</p>
                        <p>Performence/Optimiztion</p>
                        <p>Design to devlopment</p>
                        <p>Micro Frontend</p>
                    </div>
                </div>
            </div>
            <div className='Skill-Box-4'>
                <div className='Skill-Box-4-Content'>
                    <h1>Backend</h1>
                    <div className='Skill-Box-4-Content-Details'>
                        <p>Node.js/express.js</p>
                        <p>REST/GraphQL</p>
                        <p>SQL/JSON</p>
                        <p>Mongodb/postgress</p>
                        <p>Data structure/Algorithms</p>
                        <p>System design</p>
                    </div>

                </div>
            </div>
            <div className='Skill-Box-5'>
                <div className='Skill-Box-5-Content'>
                    <h1>Tools</h1>
                    <div className='Skill-Box-5-Content-Details'>
                        <p>Vs code</p>
                        <p>AWS/google Cloud/Azur</p>
                        <p>Docker/kubernetes</p>
                        <p>Traefik/Nginx</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill