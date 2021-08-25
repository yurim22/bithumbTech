import {Person} from './Person';

class Student{
    //접근 지정자 
    // private : 현재에서만 쓰겠다.
    // protected: 상속자식까지 쓸 수 있음
    // public : 모두
    protected subject: string = '';

    constructor(subject: string) {
        this.subject = subject;
    }

    public getTitle(): string {
        return this.subject
    }
}

let qq = new Student('Lee');
console.log(qq.getTitle());
