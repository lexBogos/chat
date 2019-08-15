
const initialState = {
    messages: [],
    loading: true,
    connection: false,
    nickName: 'defaultNick',
}

const reducer  = (state=initialState, action) => {

    switch (action.type) {
        case 'MESSAGES_LOADED':
            console.log(state)
            return {
                messages: action.payload,
                loading: false,
                connection: true,
                nickName: 'defaultNick'
            };

        case 'CONNECTION_LOST':
                console.log(state)
                return {
                ...state,
                connection: action.connection
                };    

        case 'CONNECTION_RESTORE':
                console.log(state)
                return {
                    ...state,
                    connection: action.connection
                    };           
        case 'NICK_CHANGE':
                    console.log(state)
                    return {
                    ...state,
                    nickName: action.changenickName
                    };                      

            default:
                    return state;  
    }


}

export default reducer;