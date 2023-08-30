import { Game } from 'enums/game';
import { SOS } from 'enums/sos';
import { onSosVersion } from 'events/on-sos-version';
import type { Payload } from '../types';
import { onNameplateTick } from 'events/on-nameplate-tick';
import { onClockUpdatedSeconds } from 'events/on-clock-updated-seconds';
import { onBallHit } from 'events/on-ball-hit';
import { onUpdateState } from 'events/on-update-state';
import { onReplay } from 'events/on-replay';
import { onMatch } from 'events/on-match';
import { onStatFeed } from 'events/on-stat-feed';
import { onGoalScored } from 'events/on-goal-scored';
import { onPodium } from 'events/on-podium';
import { onRoundState } from 'events/on-round-state';

export const eventProcessor = (websocket: WebSocket | undefined) => {
	if (websocket) {
		websocket.onmessage = (messageEvent: MessageEvent) => {
			const payload: Payload = JSON.parse(messageEvent.data);

			const event: string = payload.event;
			const data = payload.data;

			switch (event) {
				case SOS.VERSION:
					onSosVersion(data);
					break;
				case Game.NAMEPLATE_TICK:
					onNameplateTick(data);
					break;
				case Game.CLOCK_UPDATED_SECONDS:
					onClockUpdatedSeconds(data);
					break;
				case Game.BALL_HIT:
					onBallHit(data);
					break;
				case Game.UPDATE_STATE:
					onUpdateState(data);
					break;
				case Game.REPLAY_CREATED:
				case Game.REPLAY_START:
				case Game.REPLAY_WILL_END:
				case Game.REPLAY_END:
					onReplay(event);
					break;
				case Game.INITIALIZED:
				case Game.PRE_COUNTDOWN_BEGIN:
				case Game.POST_COUNTDOWN_BEGIN:
				case Game.ROUNDED_STARTED_GO:
					onRoundState(event);
					break;
				case Game.MATCH_CREATED:
				case Game.MATCH_ENDED:
				case Game.MATCH_DESTROYED:
					onMatch(event);
					break;
				case Game.PODIUM_START:
					onPodium(event);
					break;
				case Game.STAT_FEED:
					onStatFeed(data);
					break;
				case Game.GOAL_SCORED:
					onGoalScored(data);
					break;
				default:
					console.debug({ event, data });
			}
		};
	}
};
