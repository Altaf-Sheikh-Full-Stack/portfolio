import { useEffect, useState } from 'react'
import './model.css'

import Navbar from '../navbar/navbar'
import LearnMore from '../learnmore/learnmore'
import { useModalStore } from '../../../context/modal'

const SubNavBar = () => {

    const component = useModalStore((state) => state.component);
    const setComponent = useModalStore((state) => state.setComponent);

    console.log(component)
    const [zoom, setZoom] = useState<boolean>(false)

    const zoomIn = (e: React.MouseEvent<Element>) => {
        e.stopPropagation()
        setZoom(true)
    }

    const zoomOut = () => {
        setZoom(false)
    }



    const renderComponent = () => {
        switch (component.type) {
            case "Navbar":
                return <Navbar />;
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
        <div onClick={() => setComponent({ type: 'null' })} style={{ display: component.type === 'null' ? 'none' : 'block', padding: zoom ? 0 : 50 }} className='Model'>
            <div style={{ display: zoom ? 'none' : 'block' }}>
                <svg className='subnavbar-expande' onClick={(e) => zoomIn(e)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
                </svg>
                <svg className='subnavbar-close' onClick={() => setComponent({ type: 'null' })} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>

            <div onClick={(e) => e.stopPropagation()} style={{ display: zoom ? 'block' : 'none', padding: 10 }}>
                <svg className='subnavbar-expande' onClick={() => zoomOut()} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
                </svg>
                <svg className='subnavbar-close' onClick={() => setComponent({ type: 'null' })} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>

<div onClick={(e) => e.stopPropagation()} className='Model-Content'>
    
    <div className="Model-Body">
        {renderComponent()}
    </div>

</div>
        </div>
    )
}

export default SubNavBar