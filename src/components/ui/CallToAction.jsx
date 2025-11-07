import { Link } from "react-router-dom"

const CallToAction = ({ title, subtitle }) => {
    return (
        <div className="callToAction">
            <div className="callToAction__content">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <Link to={"/contact"}>Contáctanos</Link>
            </div>
        </div>
    )
}

export default CallToAction