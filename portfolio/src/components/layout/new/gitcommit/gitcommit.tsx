import data from "./data"
import './gitcommit.css'

const GitCommit = () => {
    return (
        <>
            {data.map((data) => (
                <div className='GitCommit'>
                    {/* <img className='GitCommit-Img' src={data.img} alt="" /> */}
                    <div className='GitCommit-Text'>
                        <h3 className='GitCommit-Text-H3'>{data.tital}</h3>
                        <div className='GitCommit-Text-Info'>
                            <p className='GitCommit-Text-Info-Username'>{data.username}</p>
                            <p className='GitCommit-Text-Info-Date'>{data.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default GitCommit