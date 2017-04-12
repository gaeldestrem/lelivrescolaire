import { combineReducers } from 'redux'
import students from './students'
import ui from './ui'

const reducers = combineReducers({
    students,
    ui
});

export default reducers
