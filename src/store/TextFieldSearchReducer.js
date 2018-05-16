const INITIAL_STATE = { value: ''}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'VALUE_CHANGED_TEXT_FIELD':
            return { value: action.payload }
        default:
            return state

    }

}