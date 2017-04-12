import { connect } from 'react-redux'
import Students from '../../components/Students'

const mapStateToProps = (state) => {
    return {
        students: state.students,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {}
};

const StudentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);

export default StudentsContainer
