import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from './components/Button';
import { Spinner } from './components/Spinner/Spinner';
import { Table } from './components/Table';
import { putData } from './redux/actions';
import { getData } from './services/api';

interface RootState {
  list: string[],
}

function App() {
  const dataArray:string[] = useSelector((state:RootState) => state.list)
  // const dataArray: string[] = []

  const dispatch = useDispatch();

  useEffect(
    () => {
      getData()
        .then(results => {
          dispatch(putData(results))
        })
    }, [])

  return (
    <div className="App">
      <Button />
      {dataArray.length > 0 ? <></>  : <Spinner /> }
      <Table dataArray={ dataArray } />
    </div>
  );
}

export default App;