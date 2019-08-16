
const initialState = {
    messages: [],
    loading: true,
    connection: false,
    nickName: 'defaultNick',
}

const reducer  = (state=initialState, action) => {

    switch (action.type) {
        case 'MESSAGES_LOADED':
            return {
                messages: action.payload,
                loading: false,
                connection: true,
                nickName: 'defaultNick'
            };

        case 'CONNECTION_LOST':
                return {
                ...state,
                connection: action.connection
                };    

        case 'CONNECTION_RESTORE':
                return {
                    ...state,
                    connection: action.connection
                    };           
        case 'NICK_CHANGE':
                    return {
                    ...state,
                    nickName: action.changenickName
                    };                      

            default:
                    return state;  
    }


}

export default reducer;