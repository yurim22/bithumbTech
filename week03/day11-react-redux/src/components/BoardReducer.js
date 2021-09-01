import React from 'react'
import { connect } from 'react-redux';
import { createActions, handleActions } from 'reduc-actions';

//action 타입 지정
const BOARD_SAVE = 'SAVE';
const BOARD_LIST = 'LIST';
const BOARD_DELETE = 'DELETE';
const BOARD_READ = 'READ';

//밖으로 내보내기 위해 export 를 씀!
//craeteActions
export const board_save = createActions(BOARD_SAVE);
export const board_list = createActions(BOARD_LIST);
export const baard_delete = createActions(BOARD_DELETE);
export const board_read = createActions(BOARD_READ);

// hanleActions
export default handleActions({
    [BOARD_SAVE] : (e) => {/*저장관련처리*/},
    [BOARD_LIST] : (e) => {/*전체 출력*/},
    [BOARD_DELETE] : (e) => {/*한건 삭제*/},
    [BOARD_READ] : (e) => {/*한건 조회*/}
})

const initState = {
    idx: 3,
    boards: [
        {bno: 1, bname: '김자바', btitle: '둘리악당', bwdate:new Date()},
        {bno: 2, bname: '서유림', btitle: '두번째 글', bwdate:new Date()}
    ]
}

export const BoardReducer = () => {
    return (
        <div>
            
        </div>
    )
}

