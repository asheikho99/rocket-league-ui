import AerialGoal from 'components/icons/AerialGoal.svelte';
import AerialHit from 'components/icons/AerialHit.svelte';
import Assist from 'components/icons/Assist.svelte';
import BackwardsGoal from 'components/icons/BackwardsGoal.svelte';
import BicycleGoal from 'components/icons/BicycleGoal.svelte';
import BicycleHit from 'components/icons/BicycleHit.svelte';
import CenterBall from 'components/icons/CenterBall.svelte';
import ClearBall from 'components/icons/ClearBall.svelte';
import Damage from 'components/icons/Damage.svelte';
import Demolition from 'components/icons/Demolition.svelte';
import EpicSave from 'components/icons/EpicSave.svelte';
import Extermination from 'components/icons/Extermination.svelte';
import FirstTouch from 'components/icons/First Touch.svelte';
import Goal from 'components/icons/Goal.svelte';
import HatTrick from 'components/icons/HatTrick.svelte';
import HighFive from 'components/icons/HighFive.svelte';
import Juggle from 'components/icons/Juggle.svelte';
import LongGoal from 'components/icons/Long Goal.svelte';
import LowFive from 'components/icons/Low Five.svelte';
import Mvp from 'components/icons/MVP.svelte';
import OvertimeGoal from 'components/icons/Overtime Goal.svelte';
import Playmaker from 'components/icons/Playmaker.svelte';
import PoolShot from 'components/icons/PoolShot.svelte';
import Savior from 'components/icons/Savior.svelte';
import ShotonGoal from 'components/icons/ShotonGoal.svelte';
import SwishGoal from 'components/icons/SwishGoal.svelte';
import TurtleGoal from 'components/icons/TurtleGoal.svelte';
import UltraDamage from 'components/icons/UltraDamage.svelte';
import Win from 'components/icons/Win.svelte';
import { StatFeed } from 'enums/stat-feed';
import type { SvelteComponent } from 'svelte';

export const getEventIcon = (event: string) => {
    switch(event){
        case StatFeed.AERIAL_GOAL:
            return AerialGoal
            case StatFeed.AERIAL_HIT:
            return AerialHit

            case StatFeed.ASSIST:
            return Assist

            case StatFeed.BACKWARDS_GOAL:
            return BackwardsGoal

            case StatFeed.BICYCLE_GOAL:
            return BicycleGoal

            case StatFeed.BICYCLE_HIT:
            return BicycleHit

            case StatFeed.CENTER_BALL:
            return CenterBall

            case StatFeed.CLEAR_BALL:
            return ClearBall

            case StatFeed.DAMAGE:
            return Damage

            case StatFeed.DEMOLITION:
            return Demolition

            case StatFeed.EPIC_SAVE:
            return EpicSave

            case StatFeed.EXTERMINATION:
            return Extermination

            case StatFeed.FIRST_TOUCH:
            return FirstTouch

            case StatFeed.GOAL:
            return Goal

            case StatFeed.HAT_TRICK:
            return HatTrick

            case StatFeed.HIGH_FIVE:
            return HighFive

            case StatFeed.JUGGLE:
            return Juggle

            case StatFeed.LONG_GOAL:
            return LongGoal

            case StatFeed.LOW_FIVE:
            return LowFive

            case StatFeed.MVP:
            return Mvp

            case StatFeed.OVERTIME_GOAL:
            return OvertimeGoal

            case StatFeed.PLAYMAKER:
            return Playmaker

            case StatFeed.POOL_SHOT:
            return PoolShot

            case StatFeed.SAVE:
            return Savior

            case StatFeed.SAVIOR:
            return Savior

            case StatFeed.SHOT_ON_GOAL:
            return ShotonGoal

            case StatFeed.SWISH_GOAL:
            return SwishGoal

            case StatFeed.TUTRLE_GOAL:
            return TurtleGoal

            case StatFeed.ULTRA_DAMAGE:
            return UltraDamage

            case StatFeed.WIN:
            return Win

        default:
            console.error('icon not found')
    }
};
