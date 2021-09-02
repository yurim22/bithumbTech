import { createAction, handleActions } from "redux-actions";

//action 타입 지정
const BOARD_SAVE = "SAVE";
// const BOARD_LIST = "LIST";
const BOARD_DELETE = "DELETE";
const BOARD_READ = "READ";

//밖으로 내보내기 위해 export 를 씀!
//craeteActions
export const board_save = createAction(BOARD_SAVE);
// export const board_list = createAction(BOARD_LIST);
export const board_delete = createAction(BOARD_DELETE);
export const board_read = createAction(BOARD_READ);

const initialState = {
  No: 3,
  boards: [
    { bno: 1, bname: "김자바", btitle: "둘리악당", bwdate: new Date() },
    { bno: 2, bname: "서유림", btitle: "두번째 글", bwdate: new Date() },
  ],
  selectedBoard: {}, // 추가
};

// hanleActions
export default handleActions(
  {
    [BOARD_SAVE]: (sk, { payload: data }) => {
      //payload타입은 전처리기 index.ts에 정의됨
      /*저장관련처리*/
      let boards = sk.boards;
      console.log("-----", sk);
      if (!data.brdno) {
        //신규등록 brdno
        let No = sk.No;
        return {
          No: No + 1,
          boards: boards.concat({ ...data, bno: No, bwdate: new Date() }),
          selectedBoard: {},
        };
      } else {
        // 수정
        return {
          ...sk,
          boards: boards.map((row) =>
            data.bno === row.bno ? { ...data } : row
          ),
          selectedBoard: {},
        };
      }
    },
    [BOARD_DELETE]: (state, { payload: bno }) => {
      /*한건 삭제*/
      let boards = state.boards;
      return {
        ...state,
        boards: boards.filter((row) => row.bno !== bno),
        selectedBoard: {},
      };
    },
    [BOARD_READ]: (state, { payload: bno }) => {
      /*한건 조회*/
      let boards = state.boards;
      return { ...state, selectedBoard: boards.find((row) => row.bno === bno) };
    },
    //   [BOARD_LIST]: (state, {payload: bno}) => {
    //     /*전체 출력*/
    //   },
  },
  initialState
);
