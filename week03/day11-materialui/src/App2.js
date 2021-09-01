import React, { Component } from "react";
import "./App.css";

//import { Button } from '@material-ui/core';
//import { TextField }  from '@material-ui/core';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useType = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function App2() {
  const classes = useType();
  return (
    <div className="App">
      <div>
        {" "}
        <TextField id="" label="글쓴이" name="guestName" />{" "}
      </div>
      <div>
        {" "}
        <TextField id="" label="글제목" name="guestTitle" />{" "}
      </div>
      <div>
        <Button variant="contained" color="primary">
          0버튼
        </Button>
        <Button variant="contained" color="primary">
          1버튼
        </Button>
        <Button variant="contained">2버튼</Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.margin}
        >
          3버튼
        </Button>
        <Button variant="contained" color="primary" className={classes.margin}>
          4버튼
        </Button>
      </div>
    </div>
  );
}

export default App2;
