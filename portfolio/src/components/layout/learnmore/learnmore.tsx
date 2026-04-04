import './learnmore.css'

import { useModal } from '../../../context/modal'

const LearnMore = () => {
    const { component } = useModal()




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
                    <h1 className='LearnMore-Card-Name'>{data.name}</h1>
                </div>
            ))}


        </div>

    )
}

export default LearnMore