import './footer.css'
import Button from '../../common/buttons/secondary/button'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer-Child-1">
                <h1>Ready start working with us</h1>
                <Button name={'Content me'} />
            </div>
            <div className="Footer-Child-2">
                <a href="">Linkdin</a>
                <a href="">Fiverr</a>
                <a href="">Github</a>
                <a href="">Email</a>
            </div>
        </div>
    )
}

export default Footer