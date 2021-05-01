import { connect } from 'react-redux';
import { Main } from '.';
import { putData } from '../../redux/actions';
import { RootState } from '../../redux/store';

const mapStateToProps = (state: RootState) => ({
  list: state.list,
});

const mapDispatchToProps = (dispatch: any) => ({
  setData: (data: any) => dispatch(putData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
