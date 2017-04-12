const initialState = [
    {id: 'tierry-rice', firstName: 'Tierry', lastName: 'Rice', picture: "https://randomuser.me/api/portraits/men/1.jpg", gender: 'man', email: "tierry.rice@example.com"},
    {id: 'austin-byrd', firstName: 'Austin', lastName: 'Byrd', picture: "https://randomuser.me/api/portraits/men/2.jpg", gender: 'man', email: "austin.byrd@example.com"},
    {id: 'heather-gregogy', firstName: 'Heather', lastName: 'Gregory', picture: "https://randomuser.me/api/portraits/women/1.jpg", gender: 'woman', email: "heather.gregory@example.com"},
    {id: 'clifford-edwards', firstName: 'Clifford', lastName: 'Edwards', picture: "https://randomuser.me/api/portraits/men/4.jpg", gender: 'man', email: "clifford.edwards@example.com"},
]


const students = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STUDENT':
            return [...state, action.payload.student]
        case 'UPDATE_STUDENT':
            let oldIndex = state.findIndex(o => o.id === action.payload.oldId)
            let updatedStudent = Object.assign({}, state[oldIndex], action.payload.student)
            return [
                ...state.slice(0, oldIndex),
                updatedStudent,
                ...state.slice(oldIndex + 1)
            ]
        default:
            return state
    }
}

export default students
