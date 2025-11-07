import services from "../data/services.json"

export async function getServices() {
    await new Promise((resolve) => setTimmeout(resolve, 500))
    return services
}