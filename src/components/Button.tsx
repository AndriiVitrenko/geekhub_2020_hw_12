import { useCallback } from "react";
import { loadData, putData } from '../redux/actions';
import {useDispatch} from 'react-redux';

export function Button() {
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        dispatch(putData([]))
        dispatch(loadData())
    }, [dispatch])

    return(
        <button onClick={onClick}>Refresh</button>
    )
}