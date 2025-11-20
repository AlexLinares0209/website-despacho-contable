import servicesData from "../../data/services.json"
import ServiceCard from "../ui/ServiceCard"

const ServicesList = ({ showLink = true, limit = null }) => {
    // si se pasa un "limit", corta la cantidad de servicios mostrados
    const limit_of_services_to_display = limit ? servicesData.slice(0, limit) : servicesData

    return (
        <div className="services__list">
            {
                limit_of_services_to_display?.length > 0 && (
                    limit_of_services_to_display.map((service) => (
                        <ServiceCard key={service.id} service={service} showLink={showLink} />
                    ))
                )
            }
        </div>
    )
}

export default ServicesList