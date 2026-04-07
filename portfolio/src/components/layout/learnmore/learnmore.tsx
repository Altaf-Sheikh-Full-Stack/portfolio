import './learnmore.css'

import {  useModalStore } from '../../../context/modal'

const LearnMore = () => {


    const component = useModalStore((state) => state.component);



    return (

        <div className="LearnMore">
            {component.type === 'Project' && component.data.map((data) => (
                <div className='LearnMore-Card'>
                    <img className='LearnMore-Card-Imgs' src={data.imgs[0].url} alt="" />
                    <div className='LearnMore-Card-SubImgs'>
                        {data.imgs.map((img, key) => (
                            <img className='LearnMore-Card-SubImgs-Imgs' key={key} src={img.url} alt="" />
                        ))}
                    </div>
                    <p className='LearnMore-Card-Name'>{data.category}</p>
                    <h1>{data.heading}</h1>
                </div>
            ))}


        </div>

    )
}

export default LearnMore