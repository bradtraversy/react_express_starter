import {GET_CUSTOMERS} from '../actions/constants'

const customerReducer = (state = [], action) => {
    switch (action.type) {
      case GET_CUSTOMERS:
        return [
          ...state
        ]
      default:
        return state
    }
}

export default customerReducer;
