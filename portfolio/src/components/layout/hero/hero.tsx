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
                        <h1 className='Hero-Right-L1-Top-H1'>Hi,
                            My name is altaf sheikh i am a full stack devloper with 3 years if industry exprince
                        </h1>
                        <div className='Hero-Right-L1-Top-Info'>
                            <div className='Hero-Right-L1-Top-Info-Child'>
                                <h3>Language</h3>
                                <p>English, Hindi</p>
                            </div>
                            <div className='Hero-Right-L1-Top-Info-Child'>
                                <h3>Hobby</h3>
                                <p>Coding, building product and solution</p>
                            </div>
                            <div className='Hero-Right-L1-Top-Info-Child'>
                                <h3>Location</h3>
                                <p>New delhi india</p>
                            </div>
                            <div className='Hero-Right-L1-Top-Info-Child'>
                                <h3>Age</h3>
                                <p>21 year old</p>
                            </div>
                        </div>
                    </div>
                    <div className='Hero-Right-L1-Bottom'>

                    </div>
                </div>
                <div className='Hero-Right-R1'>
                    <div className='Hero-Right-R1-Top'>
                        <img className='Hero-Right-R1-Top-Img' src={img} alt="Person image" />

                    </div>
                    <div className='Hero-Right-R1-Bottom'>
                        <GitCommit />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Hero