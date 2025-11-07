import Hero from "../components/ui/Hero"
import Team from "../components/ui/Team"
import TrayectoriaPage from "../components/ui/Trajectory"
import ValoresPage from "../components/ui/Values"
import Footer from "../components/layout/Footer"
import CallToAction from "../components/ui/CallToAction"


const AboutUs = () => {
    return (
        <div>
            <Hero
                title="Conozca a los Expertos Detrás de sus Finanzas"
                subtitle="Un equipo contable altamente comprometido con su éxito financiero"
                showButton={false}
            />
            <Team />
            <TrayectoriaPage />
            <ValoresPage />
            <CallToAction
                title="¿Listo para llevar tu contabilidad al siguiente nivel?"
                subtitle="Contáctanos hoy mismo y uno de nuestros expertos se comunicará contigo a la brevedad para agendar una asesoría gratuita."
            />
            <Footer />

        </div>
    )
}

export default AboutUs