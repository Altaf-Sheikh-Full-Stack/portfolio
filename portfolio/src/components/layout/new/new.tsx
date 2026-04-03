import './new.css'
import img from '../../../assets/img.png'
import GitCommit from '../hero/gitcommit/gitcommit'
import About from './about/about'
import PrimaryButton from '../../common/buttons/primary/button'
import SecondaryButton from '../../common/buttons/secondary/button'
const Hero = () => {
    console.log('new')
    return (
        <section className='Hero'>
            <div className='Hero-Child-1'>
                <h1 className='Hero-Child-1-H1'>Altaf Sheikh</h1>
            </div>
            <div className='Hero-Child-2'>
                <img className='Hero-Child-2-img' src={img} alt="" />
            </div>
            <div className='Hero-Child-3'>
                <GitCommit />
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