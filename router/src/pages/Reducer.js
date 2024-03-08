const initialState = {
    count: 0,
    input: 0,
};

const counterReducer = (state = initialState, action) => {

    switch (action.type) {


        case 'INCREMENT':
            return { ...state, count: state.count + 1 };


        case 'DECREMENT':
            return { ...state, count: Math.max(0, state.count - 1) };


        case "input":
            return { ...state, input: action.payload };


        case "extra":
            return { ...state, count: state.count + state.input }



        case "sub":
            return { ...state, count: Math.max(0, state.count - state.input) }

        default:
            return state;
    }
};

export default counterReducer;
