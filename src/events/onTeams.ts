import { awayTeam, homeTeam } from "../stores/team"
import type { Team } from "../types"

export const onTeams = (teams: Team[]) => {
    homeTeam.set(teams.at(0))
    awayTeam.set(teams.at(1))
}