export type Payload = {
    data: PayloadData
    event: Events
}

export type PayloadData = {
    event: string
    game: Game
    hasGame: boolean
    match_guid: string
    players: Player[]
}

export type StatFeed = {
    event_name: string
    main_target: Target
    match_guid: string
    secondary_target: Target
}

export type BallHit = {
    ball: Ball
    match_guid: string
    player: Player
    location: Location
    speed: number
    team: number
    post_hit_speed: number
    pre_hit_speed: number
}

export type GoalScored = {
    scorer: Scorer
    assister: Assister
    ball_last_touch: {
        player: string
        speed: number
    }
    goalspeed: number
    goaltime: number
    impact_location: ImpactLocation
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
    color_primary: string
    color_seconday: string
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
    isSonic: boolean
    name: string
    primaryID: string
    saves: number
    score: number
    shortcut: number
    shots: number
    speed: number
    team: number
    touches: number
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

export type MatchGUID = {
    match_guid: string
}