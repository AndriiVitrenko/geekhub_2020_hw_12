import {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { loadData, putData } from './redux/actions';
import {getData} from './services/api';

interface RootState {
  list: any[],
}

export const urls = ['https://reqres.in/api/users/2', 'http://jsonplaceholder.typicode.com/posts/1', 'https://api.mocki.io/v1/b043df5a']

function App() {
  const dataArray:any[] = useSelector((state:RootState) => state.list)



  const dispatch = useDispatch();

  useEffect(
    () => {
      getData(urls)
        .then(results => {
          dispatch(putData(results))
        })
    }, [dispatch])

  const onClick = useCallback(
    () => {
      dispatch(putData([]))
      dispatch(loadData())
    }, [dispatch]
  )  

  return (
    <div className="App">
      <button onClick={onClick}>Refresh</button>

      <table>
        <thead>
          <tr>
          <th className="table_heading">site</th>
          <th className="table_heading">data</th>
        </tr>
        </thead>

        <tbody>
          {
            urls.map((url, i) => {
              return <tr key={i}>
                <td>{url}</td>
                <td><pre>{JSON.stringify(dataArray[i], null, 2)}</pre></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;