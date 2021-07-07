import {INIT_FIGHTER, FIGHTER_IS_READY, UPDATE_HP} from '../action-types'

export const InitFighter = (names) => {
    return {
        type: INIT_FIGHTER,
        payload: {
            names: names
        }
    }
}

export const SetFighterIsReady = (fighterName) => {
    return {
        type: FIGHTER_IS_READY,
        payload: {
            name: fighterName
        }
    }
}

export const UpdateHP = (fighterName, hp) => {
    return {
        type: UPDATE_HP,
        payload: {
            name: fighterName,
            hp: hp
        }
    }
}
