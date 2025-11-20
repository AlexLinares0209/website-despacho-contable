
const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="testimonial-item">
            <div className="testimonial-user">
                <img src={testimonial.image} alt="" />
                <div className="testimonial-user-info">
                    <h3>{testimonial.user}</h3>
                    <span>{testimonial.position}</span>
                    <div className="stars">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                    </div>
                </div>
            </div>
            <p>"{testimonial.comments}"</p>
        </div>
    )
}

export default TestimonialCard