const initialState = {
    createStudentModalOpened: false
}

const students = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CREATE_MODAL':
            return Object.assign({}, state, {createStudentModalOpened: true})
        case 'CLOSE_CREATE_MODAL':
            return Object.assign({}, state, {createStudentModalOpened: false})
        default:
            return state
    }
}

export default students
