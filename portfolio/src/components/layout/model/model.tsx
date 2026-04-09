import { useEffect, } from 'react'
import './model.css'

import NavContent from '../navcontent/navcontent'

import LearnMore from '../learnmore/learnmore'
import { useModalStore } from '../../../context/modal'

const SubNavBar = () => {

    const component = useModalStore((state) => state.component);
    const setComponent = useModalStore((state) => state.setComponent);

    console.log(component)






    const renderComponent = () => {
        switch (component.type) {
            case "Navbar":
                return <NavContent />;
            case "Project":
                return <LearnMore />;
            default:
                return null;
        }
    };



    useEffect(() => {
        if (component.type !== "null") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [component]);




    return (
        <div onClick={() => setComponent({ type: 'null' })} style={{ display: component.type === 'null' ? 'none' : 'block', }} className='Model'>
            <div style={{}}>
                <svg className='subnavbar-close' onClick={() => setComponent({ type: 'null' })} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <div onClick={(e) => e.stopPropagation()} className='Model-Content'>
                    {renderComponent()}
            </div>
        </div>
    )
}

export default SubNavBar