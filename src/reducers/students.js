const initialState = [
    {id: 'tierry-rice', firstName: 'Tierry', lastName: 'Rice', picture: "https://randomuser.me/api/portraits/men/1.jpg", gender: 'man', email: "tierry.rice@example.com"},
    {id: 'austin-byrd', firstName: 'Austin', lastName: 'Byrd', picture: "https://randomuser.me/api/portraits/men/2.jpg", gender: 'man', email: "austin.byrd@example.com"},
    {id: 'heather-gregogy', firstName: 'Heather', lastName: 'Gregory', picture: "https://randomuser.me/api/portraits/women/1.jpg", gender: 'woman', email: "heather.gregory@example.com"},
    {id: 'clifford-edwards', firstName: 'Clifford', lastName: 'Edwards', picture: "https://randomuser.me/api/portraits/men/4.jpg", gender: 'man', email: "clifford.edwards@example.com"},
]


const students = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default students
