import {GET_CUSTOMERS} from '../actions/constants'

const customerReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_CUSTOMERS:
        return payload
      default:
        return state
    }
}

export default customerReducer;
