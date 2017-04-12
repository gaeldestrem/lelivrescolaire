import React from 'react'
import { connect } from 'react-redux'
import StudentAdd from '../../components/StudentAdd'
import {addStudent} from '../../actions'

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate: (student) => {
            dispatch(addStudent(student))
        }
    }
};

const StudentAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentAdd);

export default StudentAddContainer
