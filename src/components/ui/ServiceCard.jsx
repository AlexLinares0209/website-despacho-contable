import { Link } from "react-router-dom"

const ServiceCard = ({ service, showLink = true }) => {

    return (
        <div className="service-item animate__animated animate__slideInLeft">
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {
                showLink &&
                <Link to={`/services/${service.urlName}`} className="see-more">
                    Ver más
                    <i className="ri-arrow-right-line"></i>
                </Link>
            }
        </div>
    )
}

export default ServiceCard