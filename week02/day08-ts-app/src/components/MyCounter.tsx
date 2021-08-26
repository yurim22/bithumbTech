import * as React from "react";
import { useState } from "react";

interface Istate {
  num: number;
}

// type Iprops = {
//   kind: string;
//   desc: string
// }

function MyCounter() {
  const [val, setVal] = useState<Istate>({
    num: 0,
  });

  const handleAdd = () => {
    setVal({ num: val.num + 1 });
    mycal();
  };
  const handleSub = () => {
    setVal({ num: val.num - 1 });
  };

  const handleRand = () => {
    let value = Math.floor(Math.random() * 5 + 1);
    console.log("난수 생성", value);
    setVal({ num: val.num + value });
  };

  function mycal() {
    let value = Math.floor(Math.random() * 5 + 1);
    console.log("난수 생성", value);
    setVal({ num: val.num + value });
  }
  return (
    <div>
      <hr />
      <h3>MyCounter</h3> <br />
      <div>숫자 출력 : {val.num}</div> <br />
      <button onClick={handleAdd}>1씩 증가</button> &nbsp;
      <button onClick={handleSub}>1씩 감소</button> &nbsp;
      <button onClick={handleRand}>난수생성</button> &nbsp;
    </div>
  );
}

export default MyCounter;
