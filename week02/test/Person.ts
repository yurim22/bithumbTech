export class Person{
    //접근 지정자 
    // private : 현재에서만 쓰겠다.
    // protected: 상속자식까지 쓸 수 있음
    // public : 모두
    protected title: string = '';

    constructor(title: string) {
        this.title = title;
    }

    getTitle(): string {
        let msg: string='summer';
        return `${this.title}의 ${msg}입니다`
    }
}

let pp = new Person('Lee');
console.log(pp.getTitle());

// export default Person;