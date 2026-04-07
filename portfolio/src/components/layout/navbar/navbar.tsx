import './navbar.css'
import { useModalStore } from '../../../context/modal'


const Navbar = () => {

    const setComponent = useModalStore((state) => state.setComponent);

    return (
        <section className="Navbar">
            <h3>Altaf sheikh</h3>
            <p className='Navbar-Open' onClick={() => setComponent({ type: 'Navbar' })}>See more</p>
            {/* <svg onClick={() =>  className='Navbar-Open' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg> */}
        </section>
    )
}

export default Navbar