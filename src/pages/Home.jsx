import { Link } from "react-router-dom"
import Footer from "../components/layout/Footer"
import CallToAction from "../components/ui/CallToAction"
import Hero from "../components/ui/Hero"
import ServicesList from "../components/ui/ServicesList"
import Testimonials from "../components/ui/Testimonials"

const Home = () => {
    return (
        <div>
            <Hero
                title="Contabilidad inteligente para el Crecimiento de tu Negocio"
                subtitle="Soluciones contables a la medida para que te enfoques en lo que realmente importa." />

            { /* service */ }

            <div className="services">
                <div className="services__content">
                    <h2 className="animate__animated animate__slideInLeft">Soluciones Contables Integrales</h2>
                    <p className="animate__animated animate__slideInLeft">Vamos más allá de la simple presentación de servicios. Nuestro enfoque proactivo y personalizado nos permite ofrecer
                        soluciones adaptadas a las necesidades únicas de cada cliente, asegurando una gestión contable que impulsa el Crecimiento
                        y la estabilidad financiera.
                    </p>
                    <ServicesList showLink={false} limit={3} />
                    <Link to={"/services"} className="see-more-services">Ver todos los servicios</Link>
                </div>
            </div>

            <Testimonials />
            <CallToAction
                title="¿Listo para llevar tu contabilidad al siguiente nivel?"
                subtitle="Contáctanos hoy mismo y uno de nuestros expertos se comunicará contigo a la brevedad para agendar una asesoría gratuita."
            />
            <Footer />
        </div>
    )
}

export default Home