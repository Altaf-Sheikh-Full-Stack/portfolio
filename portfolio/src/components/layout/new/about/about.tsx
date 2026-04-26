
import React, { useEffect, useRef } from 'react';
import './about.css'


const About = React.memo(() => {

        const hasRendered = useRef(false);
    
        useEffect(() => {
            if (hasRendered.current) {
                console.log("🔁 About re-rendered");
            } else {
                console.log("🆕 First About render");
                hasRendered.current = true;
            }
        });

    return (
        <div className="About">
            <h1 className='About-H1'>Hi,
                Hi, I’m Altaf Sheikh, a full-stack developer with 3+ years of industry experience building scalable applications.
            </h1>
            <div className='About-Info'>
                <div className='About-Info-Child-1'>
                    <h3>Language</h3>
                    <p>English, Hindi</p>
                </div>
                <div className='About-Info-Child-2'>
                    <h3>Hobby</h3>
                    <p>Coding, building product and Music</p>
                </div>
                <div className='About-Info-Child-3'>
                    <h3>Location</h3>
                    <p>Hero delhi india</p>
                </div>
                <div className='About-Info-Child-4'>
                    <h3>Age</h3>
                    <p>21 year old</p>
                </div>
            </div>
        </div>
    )
})

export default React.memo(About);