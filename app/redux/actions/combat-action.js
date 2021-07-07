import { SET_WINNER, SET_IS_FIGHTING, SET_ROUND_ID, SET_ROUNDS } from "../action-types"

export const SetWinner = (name) => {
    return {
        type: SET_WINNER,
        payload: { name }
    }
}

export const SetIsFighting = (isFighting) => {
    return {
        type: SET_IS_FIGHTING,
        payload: { isFighting }
    }
}

export const SetRoundID = (roundID) => {
    return {
        type: SET_ROUND_ID,
        payload: { roundID }
    }
}

export const SetRounds = (rounds) => {
    return {
        type: SET_ROUNDS,
        payload: { rounds }
    }
}