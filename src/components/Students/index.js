import React from 'react'

import Student from '../Student'

const Students = ({students}) => {
    return (
      <div>
          <div className="students">
              { students.map(student =>
                <Student key={student.id} student={student}></Student>
              )}
          </div>
      </div>
    )
}

export default Students


