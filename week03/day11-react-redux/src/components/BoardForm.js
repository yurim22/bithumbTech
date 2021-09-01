import React, { Component } from "react";

export class BoardForm extends Component {
  state = {
    b_no: 0,
    b_name: "",
    b_title: "",
    b_date: "",
  };

  initialSelectedBoard = {
    b_no: 0,
    b_name: "",
    b_title: "",
    b_date: "",
  };

  handleChange = (e) => {};

  handleSave = () => {};

  componentWillReceiveProps(n) {}

  render() {
    return (
      <div>
        BoardForm.js
        <form>
          이름: <input type="text" />
          내용: <input type="text" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default BoardForm;
