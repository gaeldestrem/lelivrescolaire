import React from 'react'
import StudentEdit from '../StudentEdit'
import './styles.css'

const Student = ({student, isEdited, onEditClick, onEditCancel, onEditUpdate, onStudentDelete}) => {
    return (
      <div className="student" >
          {isEdited ? (
              <div>
                  <StudentEdit student={student} onEditUpdate={onEditUpdate} onEditCancel={onEditCancel} onStudentDelete={onStudentDelete}/>
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
