
const TestimonialCard = ({ testimonial }) => {
    return (
        <div class="testimonial-item">
            <div class="testimonial-user">
                <img src={testimonial.image} alt="" />
                <div class="testimonial-user-info">
                    <h3>{testimonial.user}</h3>
                    <span>{testimonial.position}</span>
                    <div class="stars">
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                        <i class="ri-star-fill"></i>
                    </div>
                </div>
            </div>
            <p>"{testimonial.comments}"</p>
        </div>
    )
}

export default TestimonialCard