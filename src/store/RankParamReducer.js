const INITIAL_STATE = {rankparamList:{}};

export default function(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'RANKPARAM_FETCHED':
            return { ...state, rankparamList: action.payload }

        default:
            return state
    }
}