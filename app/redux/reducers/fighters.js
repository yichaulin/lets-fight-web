import {INIT_FIGHTER, FIGHTER_IS_READY, UPDATE_HP} from '../action-types'

const initialState = {
    fighterNames: [],
    fighters: {},
}

const initFighters = (state, names) => {
    const fighters = {}
    for (let i = 0; i < names.length; i++){
        const name = names[i]
        fighters[name] = {
            isReady: state.fighterNames[i] === name,
            hp: 100
        }
    }

    return fighters
}

export const fightersReducer = (state = initialState, action) => {
    const payload = action.payload

    switch (action.type) {
        case INIT_FIGHTER: {
            const names = payload.names
            return {
                fighterNames: names,
                fighters: initFighters(state, names)
            }
        }
        case FIGHTER_IS_READY: {
            const fighterName = payload.name
            return {
                ...state,
                fighters: {
                    ...state.fighters,
                    [fighterName]: {
                        ...state.fighters[fighterName],
                        isReady: true,
                    }
                }
            }
        }
        case UPDATE_HP: {
            const hp = payload.hp
            const fighterName = payload.name
            return {
                ...state,
                fighters: {
                    ...state.fighters,
                    [fighterName]: {
                        ...state.fighters[fighterName],
                        hp: hp,
                    }
                }
            }
        }
        default:
            return state            
    }
}