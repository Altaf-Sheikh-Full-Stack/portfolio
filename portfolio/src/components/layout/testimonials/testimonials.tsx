import { useState } from 'react'
import './testimonials.css'

import { testimonialsData } from './testimonialsData'

const Testimonials = () => {


    interface Testimonial {
        Statement: string,
        Name: string,
        Img: string
    }


    const [currentTestimonial, setCurrentTestimonial] = useState({
        Name: testimonialsData[0].Name,
        Statement: testimonialsData[0].Statement
    })

    const SetCurrentData = (Name: string, Statement: string) => {
        if (currentTestimonial.Statement != Statement) {
            setCurrentTestimonial({
                Name: Name,
                Statement: Statement
            })
        }

    }




    return (
        <div className='Testimonials'>

            <div className='Testimonials-Statement'>
                <q>{currentTestimonial.Statement}</q> 
                <cite>{currentTestimonial.Name}</cite>
            </div>


            <div className='Testimonials-Images'>
                {testimonialsData.map((data: Testimonial, index) => (
                    <img onClick={() => SetCurrentData(data.Name, data.Statement)} key={index} className='Testimonials-Images-child' src={data.Img} alt="" />
                ))}
            </div>
        </div>
    )
}

export default Testimonials