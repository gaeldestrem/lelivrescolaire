const initialState = {
    createStudentModalOpened: false,
    editId: null,
}

const students = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CREATE_MODAL':
            return Object.assign({}, state, {createStudentModalOpened: true})
        case 'CLOSE_CREATE_MODAL':
            return Object.assign({}, state, {createStudentModalOpened: false})
        case 'EDIT_STUDENT':
            return Object.assign({}, state, {editId: action.payload.id})
        case 'CANCEL_EDIT_STUDENT':
            return Object.assign({}, state, {editId: null})
        default:
            return state
    }
}

export default students
