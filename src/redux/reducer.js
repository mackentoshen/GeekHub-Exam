const rootReducer = (state = {}, action) => {

    switch (action.type) {
        case 'MENU_STATUS':
            return {status: action.payload.status};

        default:
            return state;
    }


};


export default rootReducer;