import { useEffect, useState } from "react"
import servicesData from "../../data/services.json"
import ServiceCard from "../ui/ServiceCard"

const ServicesList = ({ showLink = true, limit = null }) => {

    const [services, setServices] = useState([])

    useEffect(() => {
        const fetchServices = async () => {
            await new Promise((resolve) => setTimeout(resolve, 100))
            setServices(servicesData)
        }

        fetchServices()

    }, [])

    // si se pasa un "limit", corta la cantidad de servicios mostrados
    const displayedServices = limit ? services.slice(0, limit) : services;

    return (
        <div className="services__list">
            {
                displayedServices?.length > 0 && (
                    displayedServices.map((service) => (
                        <ServiceCard 
                            key={service.id} 
                            service={service} 
                            showLink={showLink} />
                    ))
                )
            }
        </div>
    )
}

export default ServicesList