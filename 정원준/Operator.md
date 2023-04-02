# 1. 표현식과 연산자

```js
// 리터럴 표현식
10

// 식별자 표현식
sum

// 연산자 표현식
10 + 20

// 함수/메소드 호출 표현식
square()
```

* 표현식은 다른 표현식의 일부가 되어 새로운 값을 만들어낼 수 있음. 연산자 표현식은 표현식을 결합해 새로운 값을 만들어 내는 가장 일반적인 표현식

```js

var x = 10;
// 연산자 표현식
x + 30;  // 식별자 표현식과 숫자 리터럴과 연산자의 조합
```

# 2. 문과 표현식

```js
// 변수 선언문
var x;

// 할당문
x = 5;

// 함수 선언문
function foo () {}

// 조건문
if (x > 5) { … }

// 반복문
for (var i = 0; i < 10; i++) { … }
```

* 문은 리터럴, 연산자, 표현식, 키워드 등으로 구성되며 세미콜론( ; )으로 끝나야 함 (코드 블록 { … }은 제외)

* 문의 끝에 붙이는 세미콜론은 옵션으로 쓰지 않아도 상관X ( 자바스크립트 엔진에는 세미콜론 자동 삽입 기능이 있기 때문)

```js
function foo () {
  return
    {}
}
console.log(foo()); // undefined
```

# 3. 연산자란?

* 연산자(Operator)는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을 수행해 하나의 값을 만듬

* 연산의 대상을 피연산자(Operand)라 함

```js
// 산술 연산자
5 * 4 // 20

// 문자열 연결 연산자
'My name is ' + 'Lee' // "My name is Lee"

// 할당 연산자
var color = 'red'; // "red"

// 비교 연산자
3 > 5 // false

// 논리 연산자
(5 > 3) && (2 < 4)  // true

// 타입 연산자
typeof 'Hi' // "string"
```

# 4. 산술 연산자

* 산술 연산자(Arithmetic Operator)는 피연산자를 대상으로 수학적 계산을 수행해 새로운 숫자 값을 만듬

* **산술 연산을 할 수 없는 경우**에는 **NaN**을 반환

* 이항 산술 연산자와 단항 산술 연산자로 구분가능

## 4.1. 이항 산술 연산자

* 어떤 산술 연산을 해도 피연산자의 값이 바뀌는 경우는 없고 단지 새로운 값을 만듬

* 이항 산술 연산자의 종류 - + , - , * , / , %

```js
5 + 2  // 7
5 - 2  // 3
5 * 2  // 10
5 / 2  // 2.5
5 % 2  // 1
```

## 4.2. 단항 산술 연산자

* 증가/감소 연산을 하면 피연산자의 값이 바뀜

* 단항 산술 연산자 - ++ , -- , + , -

### 증가/감소(++/–) 연산자는 위치에 의미가 있음

* **전위** 증가/감소 연산자는 **먼저** 피연산자의 **값을 증가/감소**시킨 후, 다른 연산을 수행

* **후위** 증가/감소 연산자는 **먼저** **다른 연산을 수행**한 후, 피연산자의 값을 증가/감소

```js
var x = 5, result;

// 선대입 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후대입 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선대입 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후대입 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5
```

## 4.3. 문자열 연결 연산자

```js
// 문자열 연결 연산자
'1' + '2'      // '12'
'1' + 2       // '12'

// 산술 연산자
1 + 2          // 3
1 + true       // 2 (true → 1)
1 + false      // 1 (false → 0)
true + false    // 1 (true → 1 / false → 0)
1 + null       // 1 (null → 0)
1 + undefined // NaN (undefined → NaN)
```

# 5. 할당 연산자

* **할당 연산자**(Assignment Operator)는 **우항에 있는 피연산자의 평가 결과**를 **좌항에 있는 변수에 할당**

```js
var x;

x = 10;   // 10
x += 5;   // 15
x -= 5;   // 10
x *= 5;   // 50
x /= 5;   // 10
x %= 5;   // 0

var str = 'My name is ';
str += 'Lee'; // My name is Lee
```

# 6. 비교 연산자

* 비교 연산자(Comparison Operator)는 좌항과 우항의 피연산자를 비교하여 boolean 값을 반환

## 6.1. 동등 / 일치 비교 연산자

```js
// 동등 비교
5 == 5    // true
// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 같은 값을 같는다.
5 == '5'   //true
5 == 8    // false

// 일치 비교
5 === 5   // true
5 === '5' // false
```

* NaN은 자신과 일치하지 않는 유일한 값이다. **숫자가 NaN인지 조사**하려면 빌트인 함수 **isNaN을 사용**

```js
NaN === NaN // false

isNaN(NaN) // true

// 부동등 비교
5 != 8    // true
5 != 5    // false
5 != '5'  // false

// 불일치 비교
5 !== 8   // true
5 !== 5   // false
5 !== '5' // true
```

## 6.2. 대소 관계 비교 연산자

* 대소 관계 비교 연산자는 피연산자의 크기를 비교하여 boolean 값을 반환

```js
// 대소 관계 비교
5 > 0    // true
5 > 5    // false
5 > 8    // false

5 < 0    // false
5 < 5    // false
5 < 8    // true

5 >= 0   // true
5 >= 5   // true
5 >= 8   // false

5 <= 0   // false
5 <= 5   // true
5 <= 8   // true
```

# 7. 삼항 조건 연산자

* 삼항 조건 연산자(ternary operator)는 조건식의 평가 결과에 따라 반환할 값을 결정

### 조건식 ? 조건식이 ture일때 반환할 값 : 조건식이 false일때 반환할 값

```js
var x = 2;

// x가 짝수이면 '짝수'를 홀수이면 '홀수'를 반환한다.
// 2 % 2는 0이고 0은 false로 암묵적 타입 변환된다.
var result = x % 2 ? '홀수' : '짝수';

console.log(result); // 짝수
```

# 8. 논리 연산자

* 논리 연산자(Logical Operator)는 우항과 좌항의 피연산자(부정 논리 연산자의 경우, 우항의 피연산자)를 논리 연산

```js
// 논리합(||) 연산자
true || true   // true
true || false  // true
false || true  // true
false || false // false

// 논리곱(&&) 연산자
true && true   // true
true && false  // false
false && true  // false
false && false // false

// 논리 부정(!) 연산자
!true  // false
!false // true
```

# 9. 쉼표 연산자
```js
var x, y, z;
x = 1, y = 2, z = 3; // 3
```
# 10. 그룹 연산자
```js
10 * 2 + 3   // 23
10 * (2 + 3) // 50
```
# 11. typeof 연산자

* typeof 연산자는 자신의 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환

```js
typeof ''              // "string"
typeof 1               // "number"
typeof NaN             // "number"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof Symbol()        // "symbol"
typeof null            // "object"
typeof []              // "object"
typeof {}              // "object"
typeof new Date()      // "object"
typeof /test/gi        // "object"
typeof function () {}  // "function"
```