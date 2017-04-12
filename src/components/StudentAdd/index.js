import React from 'react'

class StudentAdd extends React.Component {
    constructor (props) {
        super(props)
        this.initLocalState()

        this.onSubmit = this.onSubmit.bind(this);
        this.onOpen = this.onOpen.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    initLocalState () {
        let randomAvatarId = Math.floor(Math.random() * 100)
        this.state = {
            picture: `https://randomuser.me/api/portraits/men/${randomAvatarId}.jpg`,
            id: Date.now(),
            email: '',
            firstName: '',
            lastName: '',
        }
    }

    onSubmit (e) {
        e.preventDefault()
        this.props.onCreate(this.state)
        this.props.onClose()
    }

    onOpen () {
        this.initLocalState()
        this.props.onOpen()
    }


    onChange (e) {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    render () {
        return (

          <div>
              {this.props.createStudentModalOpened ? (
                  <div>
                      <img alt="avatar" src={this.state.picture}/>
                      <form onSubmit={this.onSubmit}>
                          <div>
                              <label>photo :</label>
                              <input name="picture" type="text" value={this.state.picture} onChange={this.onChange}/>
                          </div>
                          <div>
                              <label>id :</label>
                              <input name="id" type="text" value={this.state.id} onChange={this.onChange}/>
                          </div>
                          <div>
                              <label>email :</label>
                              <input name="email" type="text" value={this.state.email} onChange={this.onChange}/>
                          </div>
                          <div>
                              <label>nom : </label>
                              <input name="lastName" type="text" value={this.state.lastName} onChange={this.onChange}/>
                          </div>
                          <div>
                              <label>prénom :</label>
                              <input name="firstName" type="text" value={this.state.firstName}
                                     onChange={this.onChange}/>
                          </div>
                          <button type="submit">Ajouter</button>
                      </form>

                      <button onClick={this.props.onClose}>Annuler</button>
                  </div>

                ) : (
                  <div>
                      <button onClick={this.onOpen}>Ajouter un participant</button>
                  </div>
                )
              }
          </div>
        );
    }
}

export default StudentAdd;
