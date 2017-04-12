import React from 'react'

import Student from '../Student'

const Students = ({students, editId, onEditClick, onEditCancel, onEditUpdate, onStudentDelete}) => {
    return (
      <div>
          <div className="students">
              { students.map(student =>
                <Student key={student.id} student={student} isEdited={editId === student.id} onEditClick={onEditClick} onEditCancel={onEditCancel} onEditUpdate={onEditUpdate} onStudentDelete={onStudentDelete}/>
              )}
          </div>
      </div>
    )
}

export default Students


