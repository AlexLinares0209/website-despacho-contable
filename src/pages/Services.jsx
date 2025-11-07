import { useEffect, useState } from "react"
import Footer from "../components/layout/Footer"
import Hero from "../components/ui/Hero"
import ServicesList from "../components/ui/ServicesList"
import CallToAction from "../components/ui/CallToAction"


const Services = () => {

    

    return (
        <div>
            <Hero
                title="Nuestros Servicios Contables y Financieros"
                subtitle="Ofrecemos una amplia gama de servicios para satisfacer sus necesidades contables y financieras. Nuestro equipo de expertos está aquí para ayudarle a alcanzar sus objetivos."
                showButton={false}
            />

            { /* service */}

            <div className="services">
                <div className="services__content">
                    <ServicesList showLink={true} />
                </div>
            </div>

            <CallToAction
                title="¿Listo para optimizar sus finanzas?"
                subtitle="Contáctanos hoy para una consulta gratuita y descubra como podemos ayudarle a alcanzar la tranquilidad financiera y el éxito empresarial."
            />

            <Footer />

        </div>
    )
}

export default Services