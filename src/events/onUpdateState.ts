import type { Player, UpdateState } from "../types"
import { matchTime, isOT, players, target, hasTarget } from "../stores/game"
import { teams } from "../stores/team"
import { onSetPlayers } from "./onSetPlayers"
import { get } from "svelte/store"
import { onSetTarget } from "./onSetTarget"

export const onUpdateState = (updateState: UpdateState) => {

    matchTime.set(updateState?.game.time_seconds)
    isOT.set(updateState?.game?.isOT)
    players.set(Object.values(updateState?.players))
    teams.set(updateState?.game?.teams)

    // TriggerEvent: Sets players on each team
    onSetPlayers()

    hasTarget.set(updateState?.game?.hasTarget)
    onSetTarget({ target: updateState?.game?.target })
}