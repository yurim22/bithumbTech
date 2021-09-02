import React, { Component } from "react";
import { connect } from "react-redux";
import { board_save } from "./BoardReducer";

export class BoardForm extends Component {
  state = {};

  initialSelectedBoard = {
    bno: 0,
    bname: "",
    btitle: "",
    bwdate: "",
  };

  handleChange = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSave = () => {
    this.props.dispatch(board_save(this.state));
    this.setState(this.initialSelectedBoard);
  };

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps(nextProps) 처리....");
    this.setState(nextProps.selectedBoard);
  }

  render() {
    return (
      <div>
        BoardForm.js 이름:{" "}
        <input
          name="bname"
          value={this.state.bname}
          onChange={this.handleChange}
        />
        내용:{" "}
        <input
          name="btitle"
          value={this.state.btitle}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSave}>submit</button>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  //
  return { selectedBoard: state.selectedBoard };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(BoardForm);
