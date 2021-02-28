export const PUT_DATA = 'PUT_DATA'
export const LOAD_DATA = 'LOAD_DATA'

export const putData = (list:Array<any>) => {
    return {
        type: PUT_DATA,
        payload: list,
    }
}

export const loadData = () => {
    return {
        type: LOAD_DATA,
    }
}