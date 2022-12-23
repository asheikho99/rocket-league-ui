import type { UpdateState } from "../types"
import { gameTime, isOT, players } from "../stores/game"
import { teams } from "../stores/team"
import { onSetPlayers } from "./onSetPlayers"

export const onUpdateState = (updateState: UpdateState) => {
    gameTime.set(updateState?.game.time_seconds)
    isOT.set(updateState?.game?.isOT)
    players.set(Object.values(updateState?.players))
    teams.set(updateState?.game?.teams)

    // TriggerEvent: Sets players on each team
    onSetPlayers()
}



