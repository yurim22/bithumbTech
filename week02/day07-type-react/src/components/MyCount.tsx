import React from "react";

class MyCount extends React.Component {
    state = {
        num1: 0
    }
    handleAdd = () => {

    }
    handleSub = () => {
        
    }
    handleRandom = () => {
        // range : 1 ~ 5 사이의 난수 생성 및 소수점 무시
        let value = Math.floor(Math.random()*5+1)
    }
  render() {
    return (
        <>
            숫자출력 : {this.state.num1}
            <div className="App">MyCount</div>
            <button>1씩 증가</button> &nbsp;
            <button>1씩 감소</button> &nbsp;
            <button>난수 적용</button> &nbsp;
        </>
    );
  }
}

export default MyCount;
