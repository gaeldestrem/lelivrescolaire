// Students Action

export const addStudent = (student) => {
    return {
        type: 'ADD_STUDENT',
        payload: {
            student
        }
    }
}

export const updateStudent = (oldId, student) => {
    return {
        type: 'UPDATE_STUDENT',
        payload: {
            oldId,
            student
        }
    }
}

// Student UI Action

export const closeEdit = () => {
    return {
        type: 'CANCEL_EDIT_STUDENT',
        payload: {}
    }
}

export const openEdit = (id) => {
    return {
        type: 'EDIT_STUDENT',
        payload: {
            id
        }
    }
}

// UI Actions

export const closeCreateModal = () => {
    return {
        type: 'CLOSE_CREATE_MODAL',
        payload: {}
    }
}

export const openCreateModal = () => {
    return {
        type: 'OPEN_CREATE_MODAL',
        payload: {}
    }
}

