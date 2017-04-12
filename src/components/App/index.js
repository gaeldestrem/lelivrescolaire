import React from 'react'
import Students from '../../containers/Students'
import StudentAdd from '../../containers/StudentAdd'
import './styles.css'

const App = () => {
    return (
      <div>
          <h1 className="title">Ma classe ! </h1>
          <StudentAdd/>
          <Students/>
      </div>
    )
}

export default App
