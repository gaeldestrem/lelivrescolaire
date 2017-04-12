import students from './students.js'
import deepFreeze from 'deep-freeze'

let stateBefore = [
    {id: 'test1', firstName: 'test1'},
    {id: 'test2', firstName: 'test2'}
];

it('should add a student and not mutate the previous state', () => {
    const action = {
        type: 'ADD_STUDENT',
        payload: {
            student: {
                id: 'test3',
                firstName: 'test3',
            }
        }
    }

    const stateAfter = [
        {id: 'test1', firstName: 'test1'},
        {id: 'test2', firstName: 'test2'},
        {id: 'test3', firstName: 'test3'},
    ]

    deepFreeze(stateBefore)
    expect(students(stateBefore, action)).toEqual(stateAfter)
});

it('should edit a student and not mutate the previous state', () => {
    const action = {
        type: 'UPDATE_STUDENT',
        payload: {
            oldId: 'test1',
            student: {'firstName': 'bidule'}
        }
    }

    const stateAfter = [
        {id: 'test1', firstName: 'bidule'},
        {id: 'test2', firstName: 'test2'}
    ]


    deepFreeze(stateBefore)
    expect(students(stateBefore, action)).toEqual(stateAfter)
})
