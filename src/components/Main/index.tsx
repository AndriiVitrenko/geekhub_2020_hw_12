import React, { useEffect } from 'react';
import Button from '../Button';
import Spinner from '../Spinner';
import Table from '../Table';
import { getData } from '../../services/api';

interface MainProps {
  list: string[];
  setData: (data: any) => void;
}

export const Main = ({ list, setData }: MainProps) => {
  useEffect(
    () => {
      getData()
        .then((results: any) => {
          setData(results);
        });
    }, [],
  );

  return (
    <div className="App">
      <Button />
      { list.length > 0 ? '' : <Spinner /> }
      <Table dataArray={list} />
    </div>
  );
};
