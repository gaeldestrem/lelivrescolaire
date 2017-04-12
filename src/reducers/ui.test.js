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
