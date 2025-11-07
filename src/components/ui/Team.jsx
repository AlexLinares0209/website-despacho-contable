import TeamCard from "./TeamCard"
import teamData from "../../data/team.json"

const Team = () => {
  return (
    <div className="team">
        <div className="team__content">
            <h2>Nuestro Equipo</h2>
            <div className="team__list">
                {
                    teamData.map((team) => (
                        <TeamCard key={team.id} team={team} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Team