import './new.css'
import img from '../../../assets/img.png'

import About from './about/about'
import PrimaryButton from '../../common/buttons/primary/button'
import SecondaryButton from '../../common/buttons/secondary/button'
import Testimonials from '../testimonials/testimonials'
import { useEffect, useRef } from 'react'
const Hero = () => {
    

        const hasRendered = useRef(false);
    
        useEffect(() => {
            if (hasRendered.current) {
                console.log("🔁 Home re-rendered");
            } else {
                console.log("🆕 First Home render");
                hasRendered.current = true;
            }
        });
    return (
        <section className='Hero'>
            <div className='Hero-Child-1'>
                <h1 className='Hero-Child-1-H1'>Altaf Sheikh</h1>
            </div>
            <div className='Hero-Child-2'>
                <img className='Hero-Child-2-img' src={img} alt="" />
            </div>
            <div className='Hero-Child-3'>
                <Testimonials/>
                {/* <GitCommit /> */}
            </div>
            <div className='Hero-Child-4'>
                <h1>We works togther and make thing works</h1>
                <div className='Hero-Child-4-Buttons'>
                    <SecondaryButton name={'Check my work'} />
                    <PrimaryButton name={'Hire me'} />
                </div>

            </div>
            <div className='Hero-Child-5'>
                <About />
            </div>
        </section>
    )
}

export default Hero