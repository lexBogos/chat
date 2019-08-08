
const initialState = {
    messages: []
}

const reducer  = (state=initialState, action) => {

    switch (action.type) {
        case 'MESSAGES_LOADED':
            return {
                messages: action.payload
            };
            default:
                    return state;  
    }


}

export default reducer;