let 이름 :string = 'kim';

let 이름리스트 :string[] = ['kim']; // String

let 오브젝트이름 :{ name? : string } = {name : 'type'}; // ? 은 name속성은 옵션이에요! 라고 알려주는 것

let 이름및넘버  : String | number = 123;

type 내타입 = string | number;  // 타입은 변수에 담을 수 있다.

let 타입설정된이름 : 내타입  = 123; // 타입을 지정할 수도 있다.

function 함수 (x : number) :number { // 입력값은 넘버, 리턴값도 number로 설정함
    return x * 2
}

type Member = [number, boolean];    // array에 쓸 수 있는 tuple타입, "무조건 첫 째는 number, 두번째는 boolean"
let john :Member = [123, false];

type MemberObject = {
    name : String
}
let johnObject : MemberObject = { name : 'kim'};

type MemberAllObject = {    // object에 타입지정해야할 속성이 너무 많은 경우
    [key : string] : string // "모든 object속성"은 String이다.
}
let johnAllObject : MemberAllObject = { name : 'kim', age : '123'};

class User {
    name :string;
    constructor(name :string) {
        this.name = name;
    }
}