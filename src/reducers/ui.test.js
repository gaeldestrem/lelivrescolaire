import ui from './ui.js'
import deepFreeze from 'deep-freeze'

it('should open the modal and not mutate the previous state', () => {
    let stateBefore = {
        createStudentModalOpened: false
    }

    const action = {
        type: 'OPEN_CREATE_MODAL',
        payload: {}
    }

    let stateAfter = {
        createStudentModalOpened: true
    }

    deepFreeze(stateBefore)
    expect(ui(stateBefore, action)).toEqual(stateAfter)
});

it('should close the modal and not mutate the previous state', () => {
    let stateBefore = {
        createStudentModalOpened: true
    }

    const action = {
        type: 'CLOSE_CREATE_MODAL',
        payload: {}
    }

    let stateAfter = {
        createStudentModalOpened: false
    }

    deepFreeze(stateBefore)
    expect(ui(stateBefore, action)).toEqual(stateAfter)
});

it('should update the editId and not mutate the previous state', () => {
    let stateBefore = {
        editId: null
    }

    const action = {
        type: 'EDIT_STUDENT',
        payload: {
            id:'tierry-rice'
        }
    }

    let stateAfter = {
        editId: 'tierry-rice'
    }

    deepFreeze(stateBefore)
    expect(ui(stateBefore, action)).toEqual(stateAfter)
});

it('should cancel the editId and not mutate the previous state', () => {
    let stateBefore = {
        editId: 'tierry-rice'
    }

    const action = {
        type: 'CANCEL_EDIT_STUDENT',
        payload: {}
    }

    let stateAfter = {
        editId: null
    }

    deepFreeze(stateBefore)
    expect(ui(stateBefore, action)).toEqual(stateAfter)
});

