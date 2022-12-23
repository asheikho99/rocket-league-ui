import { get } from "svelte/store"
import { awayTeam, homeTeam, teams } from "../stores/team"
import { Team } from "../enums/Team"
import { players } from "../stores/game"
import type { Player } from "../types"

export const onSetPlayers = () => {
    homeTeam.set({
        team: get(teams).at(Team.HOME),
        players: getTeamPlayers(Team.HOME)
    })

    awayTeam.set({
        team: get(teams).at(Team.AWAY),
        players: getTeamPlayers(Team.AWAY)
    })
}

const getTeamPlayers = (teamNumber: number): Player[] => {
    return get(players).filter((player) => player?.team == teamNumber)
}