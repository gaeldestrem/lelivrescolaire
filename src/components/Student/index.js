import React from 'react'
import './styles.css'

const Student = ({student}) => {
    return (

      <div className="student" id={student.id}>
          <div><img alt="avatar" className="avatar" src={student.picture}/></div>
              <div>
                  <div>id : {student.id}</div>
                  <div>email : {student.email}</div>
                  <div>nom : {student.lastName}</div>
                  <div>prénom : {student.firstName}</div>
              </div>
      </div>
    )
};

export default Student
