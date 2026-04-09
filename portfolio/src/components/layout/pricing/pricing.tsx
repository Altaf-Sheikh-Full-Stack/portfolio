import { useState } from 'react'
import './pricing.css'
// import PrimaryButton from '../../common/buttons/primary/button'

const Pricing = () => {


    type Skill = | "Designer" | "Frontend" | "Backned" | "Automation" | "Deployment" | "DevOps" | "Cloud" | "Architect" | "System" | "Ai";

    const [value, setValue] = useState<number>(200)
    const [check, setCheck] = useState({
        Designer: true,
        Frontend: true,
        Backned: true,
        Automation: false,
        Deployment: false,
        DevOps: true,
        Cloud: false,
        Architect: false,
        System: false,
        Ai: true
    });




    const add = (name: Skill, price: number) => {


        setCheck(prev => {

            const currentObject: boolean = prev[name]
            const flipCurrentObjectValue: boolean = !currentObject

            if (flipCurrentObjectValue === true) {
                setValue(value => value + price)
            } else {
                setValue(value => value - price)
            }

            return {
                ...prev,
                [name]: flipCurrentObjectValue
            }
        });




    };



    return (
        <section className="Pricing">

            <h1 className="Pricing-H1">Why hire me over hiring each specialist</h1>

            <div className="Pricing-Card">
                <div className="Pricing-Card-Skill-Card">
                    <div className={`Pricing-Card-Skill ${check.Designer ? 'Pricing-Active' : ''}`} onClick={() => add("Designer", 20)}>
                        <input type="checkbox" checked={check.Designer}></input>
                        <p>Designer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Frontend ? 'Pricing-Active' : ''}`} onClick={() => add("Frontend", 20)}>
                        <input type="checkbox" checked={check.Frontend}></input>
                        <p>Frontend Engineer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Backned ? 'Pricing-Active' : ''}`} onClick={() => add('Backned', 20)}>
                        <input type="checkbox" checked={check.Backned}></input>
                        <p>Backned Engineer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Automation ? 'Pricing-Active' : ''}`} onClick={() => add('Automation', 20)}>
                        <input type="checkbox" checked={check.Automation}></input>
                        <p>Automation</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Deployment ? 'Pricing-Active' : ''}`} onClick={() => add('Deployment', 20)}>
                        <input type="checkbox" checked={check.Deployment}></input>
                        <p>Deployment</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.DevOps ? 'Pricing-Active' : ''}`} onClick={() => add('DevOps', 20)}>
                        <input type="checkbox" checked={check.DevOps}></input>
                        <p>DevOps</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Cloud ? 'Pricing-Active' : ''}`} onClick={() => add('Cloud', 20)} >
                        <input type="checkbox" checked={check.Cloud}></input>
                        <p>Cloud Eng</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Architect ? 'Pricing-Active' : ''}`} onClick={() => add('Architect', 20)}>
                        <input type="checkbox" checked={check.Architect}></input>
                        <p>Solution architect</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.System ? 'Pricing-Active' : ''}`} onClick={() => add('System', 20)}>
                        <input type="checkbox" checked={check.System}></input>
                        <p>System designer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Ai ? 'Pricing-Active' : ''}`} onClick={() => add('Ai', 20)} >
                        <input type="checkbox" checked={check.Ai}></input>
                        <p>AI/ML Engnner(RAG Only)</p>
                    </div>
                </div>
                <div className='Pricing-Card-Compare' >
                    <table>
                        <tr>
                            <th>Benfit</th>
                            <th>Me</th>
                            <th>Others</th>
                        </tr>
                        <tr>
                            <td>Mangement</td>
                            <td>Low</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Hiring Time</td>
                            <td>Low</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>Pricing</td>
                            <td>Value for money</td>
                            <td>${value} per hour</td>
                        </tr>
                        <tr>
                            <td>Project codination</td>
                            <td>Simple</td>
                            <td>Hard</td>
                        </tr>
                        <tr>
                            <td>Complex project</td>
                            <td>Good</td>
                            <td>Very good</td>
                        </tr>
                        <tr>
                            <td>Project develvery</td>
                            <td>Medium</td>
                            <td>Fast</td>
                        </tr>
                        <tr>
                            <td>Project quality</td>
                            <td>Good</td>
                            <td>Very good</td>
                        </tr>
                        <tr>
                            <td>Why hire</td>
                            <td>Hire me if your application has fewer than a million users or operations.</td>
                            <td>Hire specialists if you have millions or billions of users and need to scale.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Pricing