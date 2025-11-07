import TestimonialCard from "./TestimonialCard"
import testimonialsData from "../../data/testimonials.json"
import Marquee from "react-fast-marquee"

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="testimonials__content">
                <h2>Lo que dicen nuestros clientes</h2>
                <Marquee speed={25} direction="left" pauseOnHover> 
                    <div className="testimonials__list testimonials__list--top">
                        {
                            testimonialsData.slice(0, 5).map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))
                        }
                    </div>
                </Marquee>
                <Marquee speed={25} direction="right" pauseOnHover>
                    <div className="testimonials__list">
                        {
                            testimonialsData.slice(5, 10).map((testimonial) => (
                                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                            ))
                        }
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default Testimonials