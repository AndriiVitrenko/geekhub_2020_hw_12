import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { loadData, putData } from '../../redux/actions';

export default function Button() {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(putData([]));
    dispatch(loadData());
  }, [dispatch]);

  return (
    <button type="button" onClick={onClick}>Refresh</button>
  );
}
