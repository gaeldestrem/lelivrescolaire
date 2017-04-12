import { connect } from 'react-redux'
import StudentAdd from '../../components/StudentAdd'
import {closeCreateModal, openCreateModal, addStudent} from '../../actions'

const mapStateToProps = (state) => {
    return {
        createStudentModalOpened: state.ui.createStudentModalOpened
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpen: () => {
            dispatch(openCreateModal())
        },
        onClose: () => {
            dispatch(closeCreateModal())
        },
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
