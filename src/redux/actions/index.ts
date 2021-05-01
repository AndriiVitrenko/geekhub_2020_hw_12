export const PUT_DATA = 'PUT_DATA';
export const LOAD_DATA = 'LOAD_DATA';

export const putData = (list:Array<any>) => ({
  type: PUT_DATA,
  payload: list,
});

export const loadData = () => ({
  type: LOAD_DATA,
});
