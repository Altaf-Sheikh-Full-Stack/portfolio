import './hero.css'
import img from '../../../assets/img.png'
import GitCommit from './gitcommit/gitcommit'
const Hero = () => {


    return (
        <section className="Hero">
            <div className="Hero-Left">
                <h1 className="Hero-Left-h1">Altaf Sheikh</h1>
            </div>
            <div className="Hero-Right">
                <div className='Hero-Right-L1'>
                    <div className='Hero-Right-L1-Top'>
                        
                    </div>
                    <div className='Hero-Right-L1-Bottom'>
                        <GitCommit />
                    </div>
                </div>
                <div className='Hero-Right-R1'>
                    <div className='Hero-Right-R1-Top'>
                        <img className='Hero-Right-R1-Top-Img' src={img} alt="Person image" />

                    </div>
                    <div className='Hero-Right-R1-Bottom'>
                        <h1>Hi,
                            My name is altaf sheikh i am a full stack devloper with 3 years if industry exprince
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero