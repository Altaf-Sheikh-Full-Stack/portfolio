import './learnmore.css'

import { useModalStore } from '../../../context/modal'
import { useEffect, useState } from 'react';
import PrimaryButton from '../../common/buttons/primary/button';

const LearnMore = () => {
    const [images, setImages] = useState<string>()
    const component = useModalStore((state) => state.component);


    useEffect(() => {
        const url: any = component.type === "Project" && component.data[0].imgs[0].url
        setImages(url)

    }, [])


    const show = (imgUrl: string) => {
        setImages(imgUrl)
    }


    return (

        <div className="LearnMore">
            {component.type === 'Project' && component.data.map((data) => (
                <div className='LearnMore-Card'>
                    <img className='LearnMore-Card-Imgs' src={images} alt="" />
                    <div className='LearnMore-Card-SubImgs'>
                        {data.imgs.map((img, key) => (
                            <img onClick={() => show(img.url)} className='LearnMore-Card-SubImgs-Imgs' key={key} src={img.url} alt="" />
                        ))}
                    </div>
                    <div className='Project-Info'>
                        <div className='Project-Info-Content'>
                            <p className='LearnMore-Card-category'>{data.category}</p>
                            <h1 className='LearnMore-Card-h1'>{data.heading}</h1>
                        </div>
                        <div className='Project-Info-Content-Button'>
                            <a href={data.link}>
                                <PrimaryButton name={'Live preview'} />
                            </a>
                        </div>
                    </div>

                    <div className='Project-About'>
                        <div className='Project-About-Problem'>
                            <h3 className='Project-About-Problem-H3'>Problem</h3>
                            <p className='Project-About-Problem-P'>{data.problem}</p>
                        </div>
                        <div className='Project-About-Solution'>
                            <h3 className='Project-About-Solution-H3'>Solution</h3>
                            <p className='Project-About-Solution-P'>{data.solution}</p>
                        </div>

                    </div>
                </div>
            ))}


        </div>

    )
}

export default LearnMore