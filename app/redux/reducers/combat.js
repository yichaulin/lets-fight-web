import {SET_IS_FIGHTING, SET_ROUND_ID, SET_WINNER, SET_ROUNDS, SET_PLAY_SPEED} from '../action-types'

const initState = {
    isFighting: false,
    winner: '',
    roundID: '',
    rounds: [],
    playSpeed: 2000
}

export const combatReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_IS_FIGHTING:
            return {
                ...state,
                isFighting: action.payload.isFighting
            }
        case SET_WINNER:
            return {
                ...state,
                winner: action.payload.name
            }
        case SET_ROUND_ID:
            return {
                ...state,
                roundID: action.payload.roundID
            }
        case SET_ROUNDS:
            return {
                ...state,
                rounds: action.payload.rounds
            }
        case SET_PLAY_SPEED:
            return {
                ...state,
                playSpeed: action.payload.playSpeed
            }
        default:
            return state
    }
}