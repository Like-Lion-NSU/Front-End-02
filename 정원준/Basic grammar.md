```js

1. 변수
===========

* 값(value)을 저장(할당)하고 그 저장된 값을 참조하기 위해 사용

* 한번 쓰고 버리는 값이 아닌 유지(캐싱)할 필요가 있는 값은 변수에 담아 사용

* 위치(주소)를 기억하는 저장소, 위치란 메모리 상의 주소(address)

* 변수를 선언할 때 var 키워드를 사용

var x = 6;


2. 값
===========

* 데이터 타입(Data Type)	프로그래밍 언어에서 사용할 수 있는 값의 종류

* 변수(Variable)	값이 저장된 메모리 공간의 주소를 가리키는 식별자(identifier)

* 리터럴(literal)	소스코드 안에서 직접 만들어 낸 상수 값 자체를 말하며 값을 구성하는 최소 단위


// var(데이터 타입) str(변수) Hello World(리터럴)

var str = 'Hello World';



## 리터럴(literal) 종류

1. 숫자 리터럴

10.50
1001

2. 문자열 리터럴

'Hello'
"World"

3. boolean 리터럴

true
false

4. null 리터럴

null

5. undefined 리터럴

undefined

6. 객체 리터럴

{ name: 'Lee', gender: 'male' }

7. 배열 리터럴

[ 1, 2, 3 ]

8. 정규표현식 리터럴

/ab+c/

9. 함수 리터럴

function() {}


## 데이터 타입(Data Type) 종류

#### 원시 타입 (primitive data type)

* number

* string

* boolean

* null

* undefined

* symbol

#### 객체 타입 (Object data type)

1. object

* 자바스크립트는 C나 Java외는 다르게 변수를 선언할 때 데이터 타입을 미리 지정하지 않는다 *

*/

// Number
var num1 = 1001;
var num2 = 10.50;

// String
var string1 = 'Hello';
var string2 = "World";

// Boolean
var bool = true;

// null
var foo = null;

// undefined
var bar;

// Object
var obj = { name: 'Lee', gender: 'male' };

// Array
var array = [ 1, 2, 3 ];

// function
var foo = function() {};

/*

◆ 3. 연산자 ◆

◇ 연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만든다.

*/

// 산술 연산자
var area = 5 * 4;

// 문자열 연결 연산자
var str = 'My name is ' + 'Lee';

// 할당 연산자
var color = 'red';

// 비교 연산자
var foo = 3 > 5;

// 논리 연산자
var bar = (5 > 3) && (2 < 4);

// 타입 연산자
var type = typeof 'Hi';

// 인스턴스 생성 연산자
var today = new Date();


// 피연산자의 타입은 반드시 일치할 필요는 없음. 이때 자바스크립트는 암묵적 타입 강제 변환을 통해 연산을 수행.

var foo = 1 + '10';
var bar = 1 * '10';

/*

◆ 4. 연산자 ◆

◇ 키워드(keyword)는 수행할 동작을 규정한 것

ex) var 키워드는 새로운 변수를 생성할 것을 지시

*/

// 변수의 선언
var x = 5 + 6;

// 함수의 선언
function foo (arg) {
  // 함수 종료 및 값의 반환
  return ++arg;
}

var i = 0;
// 반복문
while (1) {
  if (i > 5) {
    // 반복문 탈출
    break;
  }
  console.log(i);
  i++;
}


/*

◆ 5. 주석 ◆

◇ 주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용

------------------------------------------------------------

// 주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용한다. 코드는 읽기(이해하기) 쉬워야 한다.

/*
  주석(Comment)은 작성된 코드의 의미를 설명하기 위해 사용한다.
  코드는 읽기(이해하기) 쉬워야 한다.
*/



/*

◆ 6. 문 ◆

◇ 프로그램은 컴퓨터에 의해 단계별로 수행될 명령들의 집합

◇ 각각의 명령을 문(statement)이라 하며 문이 실행되면 무슨 일인가가 일어나게 된다.

◇ 문은 리터럴, 연산자(Operator), 표현식(Expression), 키워드(Keyword) 등으로 구성되며 세미콜론( ; )으로 끝남

*/

var x = 5;
var y = 6;
var z = x + y;

console.log(z);

// 문은 코드 블록(code block, {…})으로 그룹화할 수 있음. 그룹화의 목적은 함께 실행되어져야 하는 문을 정의하기 위함.

// 함수
function myFunction(x, y) {
    return x + y;
  }
  
  // if 문
  if(x > 0) {
    // do something
  }
  
  // for 문
  for (var i = 0; i < 10; i++) {
    // do something
  }

  /*

  ◇ 문들은 일반적으로 위에서 아래로 순서대로 실행된다.

  ◇ 이러한 실행 순서는 조건문(if, switch)이나 반복문(while, for)의 사용으로 제어할 수 있다 이를 흐름제어(Control Flow)라 한다.

  ◇ 또는 함수 호출로 변경가능

  */

  var time = 10;
  var greeting;
  
  if (time < 10) {
    greeting = 'Good morning';
  } else if (time < 20) {
    greeting = 'Good day';
  } else {
    greeting = 'Good evening';
  }
  
  console.log(greeting);

//   다른 언어와 달리 자바스크립트에서는 블록 유효범위(Block-level scope)를 생성하지 않음. 함수 단위의 유효범위(Function-level scope)만이 생성

/*

◆ 7. 표현식 ◆

◇ 표현식(Expression)은 하나의 값으로 평가(Evaluation)

◇ 값(리터럴), 변수, 객체의 property(getter, setter), 배열의 요소, 함수 호출, 메소드 호출, 피연산자와 연산자의 조합은 모두 표현식)


------------------------------------------------------------------------------------------------------------------------

◆ 8. 문과 표현식의 비교 ◆

◇ 문(Statement)이 마침표로 끝나는 하나의 완전한 문장(Sentence)이라고 한다면 표현식은 문을 구성하는 요소

◇ 표현식은 그자체로 하나의 문이 될 수 있음

◇ 표현식과 문은 매우 유사하여 구별이 어려움

◇  표현식은 평가되어 값을 만들지만 그 이상의 행위는 할 수 없음

◇ 문은 var, function과 같은 선언 키워드를 사용하여 변수나 함수를 생성하기도 하고 제어문을 생성하여 프로그램의 흐름을 제어하기도 함

◇ 표현식을 통해 평가한 값을 통해 실제로 컴퓨터에게 명령을 하여 무언가를 하는 것은 문임


*/

// 선언문(Declaration statement)

var x = 5 * 10; // 표현식 x = 5 * 10를 포함하는 문이다.

// 할당문(Assignment statement)

x = 100; // 이 자체가 표현식이지만 완전한 문이기도 하다.

/*

◆ 9. 함수 ◆

◇ 함수란 어떤 작업을 수행하기 위해 필요한 문(statement)들의 집합을 정의한 코드 블록

◇ 함수는 이름과 매개변수를 가지며 필요한 때에 호출하여 코드 블록에 담긴 문들을 일괄적으로 실행가능

*/

// 함수의 정의(함수 선언문)

function square(number) {
    return number * number;
  }

// 함수는 호출에 의해 실행되는데 한번만 호출할 수 있는 것이 아니라 여러번 호출가능

function square(number) {
    return number * number;
  }
  
  // 함수의 호출
  square(2); // 4

//   동일한 작업을 반복적으로 수행해야 한다면 미리 정의된 함수를 재사용하는 것이 효율적

/*

◆ 10. 객체 ◆

◇ 자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 “모든 것”이 객체

◇ 원시 타입(Primitives)을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체

◇ 자바스크립트 객체는 키(이름)와 값으로 구성된 property(getter,setter)의 집합

◇ property의 값으로 자바스크립트에서 사용할 수 있는 모든 값을 사용

◇ property 값으로 함수를 사용할 수도 있으며 property 값이 함수일 경우, 일반 함수와 구분하기 위해 메소드라 부른다.

*/

var person = {
    name: 'Lee',
    gender: 'male',
    sayHello: function () {
      console.log('Hi! My name is ' + this.name);
    }
  };
  
  console.log(typeof person); // object
  console.log(person);
  
  person.sayHello();

  /*

  ◇ 객체는 데이터를 의미하는 property와 데이터를 참조하고 조작할 수 있는 동작(behavior)을 의미하는 메소드(method)로 구성된 집합

  ◇ 자바스크립트의 객체는 객체지향의 상속을 구현하기 위해 “프로토타입”이라고 불리는 객체의 property와 메소드를 상속가능


  -----------------------------------------------------------------------------------------------------------------

  ◆ 11. 배열 ◆

  ◇ 배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용

  ◇ 자바스크립트의 배열은 객체이며 유용한 내장 메소드를 포함

  */

var arr = [1, 2, 3, 4, 5];

console.log(arr[1]); // 2