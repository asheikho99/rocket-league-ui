import type { Player } from "../types";
import { hasTarget, players, target as targetStore } from '../stores/game'
import { get } from "svelte/store";
export const onSetTarget = ({ target }: { target: string }) => {

    if (get(hasTarget) && target != '') {
        get(players).find((player: Player) => {
            targetStore.set(player)
        })
    } else {
        targetStore.set('')
    }
}