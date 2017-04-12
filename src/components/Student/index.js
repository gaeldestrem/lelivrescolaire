import React from 'react'
import './styles.css'

const Student = ({student, isEdited, onEditClick, onEditCancel}) => {
    return (
      <div className="student" >
          {isEdited ? (
              <div>
                  <div>editMod</div>
                  <button onClick={onEditCancel}>Annuler</button>
              </div>

            ) : (
              <div id={student.id} onClick={onEditClick}>
                  <div><img alt="avatar" className="avatar" src={student.picture}/></div>
                  <div>
                      <div>id : {student.id}</div>
                      <div>email : {student.email}</div>
                      <div>nom : {student.lastName}</div>
                      <div>prénom : {student.firstName}</div>
                  </div>
              </div>
            )
          }
      </div>

    )
};

export default Student
