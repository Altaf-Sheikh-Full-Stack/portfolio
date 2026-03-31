import './learnmore.css'
import { useProject } from '../../../context/project'


const LearnMore = () => {
    const { data, setData } = useProject()




    const click = () => {
        setData([])
    }


    return (
        <div className="LearnMore" style={{ display: data.length > 0 ? 'block' : 'none' }}>
            <div className="LearnMore-Content">
                {/* <button onClick={click}>Closie</button> */}
                {data.map((data) => (
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
        </div>
    )
}

export default LearnMore