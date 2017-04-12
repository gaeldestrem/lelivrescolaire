export const addStudent = (student) => {
    return {
        type: 'ADD_STUDENT',
        payload: {
            student
        }
    }
}

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
