import React from 'react'

class StudentEdit extends React.Component {
    constructor (props) {
        super(props)
        this.originalId = this.props.student.id
        this.state = {
            id: this.props.student.id,
            email: this.props.student.email,
            firstName: this.props.student.firstName,
            lastName: this.props.student.lastName,
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit (e) {
        e.preventDefault()
        this.props.onEditUpdate(this.originalId, this.state)
    }

    onDelete () {
        this.props.onStudentDelete(this.originalId)
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
              <form onSubmit={this.onSubmit}>
                  <div>
                      <label>id :</label>
                      <input name="id" type="text" value={this.state.id} onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>email :</label>
                      <input name="email" type="text" value={this.state.email} onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>nom :</label>
                      <input name="lastName" type="text" value={this.state.lastName} onChange={this.onChange}/>
                  </div>
                  <div>
                      <label>prénom :</label>
                      <input name="firstName" type="text" value={this.state.firstName} onChange={this.onChange}/>
                  </div>
                  <button>Modifier</button>
              </form>
              <button onClick={this.props.onEditCancel}>Annuler</button>
              <button onClick={this.onDelete}>Supprimer</button>
          </div>
        );
    }
};

export default StudentEdit;
