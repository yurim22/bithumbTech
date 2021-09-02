import React from "react";
import { connect } from "react-redux";

import { board_read, board_delete } from "./BoardReducer";

export const BoardItem = ({ row, board_read, board_delete }) => {
  return (
    <tr>
      <td>{row.bno}</td>
      <td>{row.bname}</td>
      <td>
        <a
          onClick={() => {
            board_read(row.bno);
          }}
        >
          {row.btitle}
        </a>
      </td>
      <td>{row.bwdate.toLocaleDateString("ko-KR")}</td>
      <td>
        <button
          onClick={() => {
            board_delete(row.bno);
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
};

const mapStateToProps = (dispatch) => ({
  board_read: (bno) => dispatch(board_read(bno)),
  board_delete: (bno) => dispatch(board_delete(bno)),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(BoardItem);
