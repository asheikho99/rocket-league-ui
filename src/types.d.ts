export type Payload = {
    data: PayloadData
    event: string
}

export type UpdateState = {
    event: string
    game: Game
    hasGame: boolean
    match_guid: string
    players: Player[]
}

export type FeedEvent = {
    eventName: string
    mainTarget: Target
    secondaryTarget: Target
    matchGuid: string
    type: string
}

export type BallHit = {
    ball: Ball
    match_guid: string
    player: Player
    location: Location
    speed: number
    team: number
    postHitSpeed: number
    preHitSpeed: number
}

export type GoalScored = {
    scorer: Scorer
    assister: Assister
    ballLastTouch: {
        player: string
        speed: number
    }
    goalSpeed: number
    goalTime: number
    impactLocation: ImpactLocation
}

export type Target = {
    id: string
    name: string
    team_num: number
}

export type Game = {
    arena: string
    ball: Ball
    hasTarget: boolean
    hasWinner: boolean
    isOT: boolean
    isReplay: boolean
    target: string
    teams: Team[]
    time_milliseconds: number
    time_seconds: number
    winner: string
}

export type Ball = {
    location: Location
    speed: number
    team: number
}

export type Location = {
    X: number
    Y: number
    Z: number
}

export type ImpactLocation = {
    X: number
    Y: number
}

export type Team = {
    colorPrimary: string
    colorSecondary: string
    name: string
    score: number
}

export type Player = {
    assists: number
    attacker: string
    boost: number
    cartouches: number
    demos: number
    goals: number
    hasCar: boolean
    id: string
    isDead: boolean
    isPowersliding: boolean
    isSonic: boolean
    location: PlayerLocation
    name: string
    onGround: boolean
    onWall: boolean
    primaryID: string
    saves: number
    score: number
    shortcut: number
    shots: number
    speed: number
    team: number
    touches: number
}

export type PlayerLocation = {
    X: number
    Y: number
    Z: number
    pitch: number
    roll: number
    yaw: number
}

export type Scorer = {
    id: string
    name: string
    teamnum: number
}

export type Assister = {
    id: string
    name: string
}