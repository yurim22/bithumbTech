// 타입스크립트 함수
// function 함수명(): 리턴타입 { 로직 }

function getAdd(): number {
    return 2 + 5;
}

//error 발생
// function getAdd2(): number {
//   return '2' + '5';
// }

let a: number = getAdd();
console.log("result", a);
