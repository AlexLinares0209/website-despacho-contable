import TrajectoryCard from "./TrajectoryCard"
import trajectoryData from "../../data/trajectory.json"

const Trajectory = () => {
    return (
        <div className="trayectoria">
            <div className="trayectoria__content">
                <h2>Nuestra Trayectoria</h2>

                <div className="timeline">
                    {
                        trajectoryData.map((trajectory) => (
                            <TrajectoryCard key={Trajectory.id} trajectory={trajectory} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Trajectory