
const initialState = {
    messages: [],
    loading: true
}

const reducer  = (state=initialState, action) => {

    switch (action.type) {
        case 'MESSAGES_LOADED':
            return {
                messages: action.payload,
                loading: false
            };
            default:
                    return state;  
    }


}

export default reducer;