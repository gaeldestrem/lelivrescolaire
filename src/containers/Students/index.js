import { connect } from 'react-redux'
import Students from '../../components/Students'
import { closeEdit, openEdit, updateStudent } from '../../actions'

const mapStateToProps = (state) => {
    return {
        students: state.students,
        editId: state.ui.editId,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onEditUpdate: (oldId, student) => {
          dispatch(updateStudent(oldId, student))
          dispatch(closeEdit())
        },
        onEditCancel: () => {
          dispatch(closeEdit())
        },
        onEditClick: (e) => {
            let id = e.currentTarget.id
            dispatch(openEdit(id))
        }
    }
};

const StudentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);

export default StudentsContainer
