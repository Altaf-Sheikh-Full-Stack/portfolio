import { useState } from 'react'
import './pricing.css'
import PrimaryButton from '../../common/buttons/primary/button'

const Pricing = () => {


    type Skill = | "Designer" | "Frontend" | "Backned" | "Automation" | "Deployment" | "DevOps" | "Cloud" | "Architect" | "System" | "Ai";

    const [value, setValue] = useState<number>(0)
    const [check, setCheck] = useState({
        Designer: false,
        Frontend: false,
        Backned: false,
        Automation: false,
        Deployment: false,
        DevOps: false,
        Cloud: false,
        Architect: false,
        System: false,
        Ai: false
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
            <div className="Pricing-Card">
                <div className="Pricing-Card-Skill-Card">
                    <div className={`Pricing-Card-Skill ${check.Designer ? 'Pricing-Active' : ''}`} onClick={() => add("Designer", 20)}>
                        <input type="checkbox" checked={check.Designer}></input>
                        <p>Designer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Frontend ? 'Pricing-Active' : ''}`} onClick={() => add("Frontend", 40)}>
                        <input type="checkbox" checked={check.Frontend}></input>
                        <p>Frontend Engineer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Backned ? 'Pricing-Active' : ''}`} onClick={() => add('Backned', 20)}>
                        <input type="checkbox" checked={check.Backned}></input>
                        <p>Backned Engineer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Automation ? 'Pricing-Active' : ''}`} onClick={() => add('Automation', 30)}>
                        <input type="checkbox" checked={check.Automation}></input>
                        <p>Automation</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Deployment ? 'Pricing-Active' : ''}`} onClick={() => add('Deployment', 30)}>
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
                    <div className={`Pricing-Card-Skill ${check.Architect ? 'Pricing-Active' : ''}`} onClick={() => add('Architect', 30)}>
                        <input type="checkbox" checked={check.Architect}></input>
                        <p>Solution architect</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.System ? 'Pricing-Active' : ''}`} onClick={() => add('System', 40)}>
                        <input type="checkbox" checked={check.System}></input>
                        <p>System designer</p>
                    </div>
                    <div className={`Pricing-Card-Skill ${check.Ai ? 'Pricing-Active' : ''}`} onClick={() => add('Ai', 40)} >
                        <input type="checkbox" checked={check.Ai}></input>
                        <p>AI/ML Engnner(RAG Only)</p>
                    </div>
                </div>
                <div className='Pricing-Card-Compare' >
                        <h2>Total cast ${value} per hour</h2>
                        <h2>You can save upto ${value - 10} per hour</h2>
                        <PrimaryButton name={'Hire me now Starting from $4 per hour'} />
                </div>
            </div>
        </section>
    )
}

export default Pricing