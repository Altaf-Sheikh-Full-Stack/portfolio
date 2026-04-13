

import './navcontent.css'
import img1 from '../../../assets/image.png'
import img2 from '../../../assets/original-fa54ea2135e0e8a4ec7e77fe0b4d6656.webp'
import img3 from '../../../assets/screenshot-1722168197104.webp'
const NavContent = () => {
    return (
        <div className="NavContent">
            <div className="NavContent-Child1">
                <div className="NavContent-Child1-Content">
                    <img src={img1} alt="" />
                    <div>
                    <h2>Project</h2>
                    <p>Check out my project here</p>
                    </div>
                </div>
            </div>
            <div className="NavContent-Child2">
                <div className="NavContent-Child1-Content">
                         <img src={img2} alt="" />
                    <div>
                    <h2>Case study</h2>
                    <p>Check out my project here</p>
                    </div>
                </div>
            </div>
            <div className="NavContent-Child3">
                <div className="NavContent-Child1-Content">
                          <img src={img3} alt="" />
                    <div>
                    <h2>SkillSet</h2>
                    <p>Check out my project here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavContent