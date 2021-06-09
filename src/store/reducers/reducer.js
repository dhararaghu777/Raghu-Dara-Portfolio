
import * as actionTypes from '../actions/action';

const initialState={
    toggle:false
}

const reducer=(state=initialState,action)=>{
    
    switch(action.type){
        case actionTypes.TOGGLE:
            const newState={...state};
            newState.toggle=!newState.toggle;
            // console.log(newState.toggle);
            return {...newState}
        default :
            return {...state};
    }
}

export default reducer;