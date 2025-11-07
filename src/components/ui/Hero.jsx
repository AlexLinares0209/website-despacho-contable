import { Link } from "react-router-dom"

const Hero = ({title, subtitle, showButton = true}) => {
  return (
    <div className="hero">
        <div className="hero__content">
            <h1 className="animate__animated animate__slideInDown">{title}</h1>
            <p className="animate__animated animate__slideInLeft">{subtitle}</p>
            {showButton && <Link className="animate__animated animate__slideInLeft" to={"/contact"}>Solicita una Consulta gratuita</Link>}
        </div>
    </div>
  )
}

export default Hero