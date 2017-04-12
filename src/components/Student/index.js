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
                      {student.email && <div>id : {student.id}</div>}
                      {student.email && <div>email : {student.email}</div> }
                      {student.lastName && <div>nom : {student.lastName}</div> }
                      {student.firstName && <div>prénom : {student.firstName}</div>}
                  </div>
              </div>
            )
          }
      </div>

    )
};

export default Student
