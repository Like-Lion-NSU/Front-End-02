# 프로그래밍

* **변수를 통해 값을 저장하고 참조**하며 **연산자로 값을 연산**, **평가**하고 **조건문과 반복문**에 의한 흐름제어로 **데이터의 흐름을 제어**하고 **함수**로 **재사용이 가능한 구문의 집합**을 만들며 **객체, 배열 등**으로 **자료를 구조화**하는 것

# 변수

* `값의 위치(주소)`를 기억하는 **저장소**

    * **값의 위치**란 값이 위치하고 있는 `메모리 상의 주소(address)`를 의미

* **값이 위치**하고 있는 **메모리 주소(Memory address)에 접근**하기 위해 **사람이 이해할 수 있는 언어로 명명**한 **식별자(identifier)**

# 메모리

- 값을 저장하기 위해서는 먼저 메모리 공간을 확보해야 할 메모리의 크기(byte)를 알아야 함

    - 값의 종류에 따라 확보해야 할 메모리의 크기가 다르기 때문

- 값의 종류, 즉 데이터의 종류를 데이터 타입(Data Type)이라고 함

- C나 Java같은 **C-family 언어**는 **정적 타입(Static/Strong Type)** 언어로 **변수 선언 시** 변수에 저장할 **값의 종류**를 `사전에 타입 지정(Type annotation)`하여야 함

```c
// 1byte 정수형: -128 ~ 127
char c;

// 4byte 정수형: -2,124,483,648 ~ 2,124,483,647
int num;
```

#### C 언어의 경우, 4byte 정수형인 int형 변수 선언을 만나면 시스템은 이후 `할당될 값과는 상관없이` 4byte의 메모리 영역을 확보

#### 이후 int형 변수에 할당할 때에는 int형 값을 할당해야함

#### ex) C에서 정수형 변수에 문자열을 잘못 할당한 예

```c
int main(void) {
  int num = 46;
  char * str = "String";

  num = "String"; // warning: incompatible pointer to integer conversion assigning to 'int' from 'char [7]'

  return 0;
}
```

#### `자바스크립트`는 `동적 타입(Dynamic/Weak Type)` 언어

#### 변수의 `타입 지정(Type annotation)없이` 값이 할당되는 과정에서 `자동으로 변수의 타입이 결정(타입 추론, Type Inference)`

#### 즉, 변수는 고정된 타입이 없다. 따라서 같은 변수에 여러 타입의 값을 자유롭게 할당가능

```js
var str  = 'Hello';
var num  = 1;
var bool = true;

var foo = 'string';
console.log(typeof foo); // string
foo = 1;
console.log(typeof foo); // number
```

# 자바스크립트의 타입

## 1. 데이터 타입

* 데이터 타입(Data Type)은 프로그래밍 언어에서 사용할 수 있는 **데이터(숫자, 문자열, 불리언 등)의 종류**

* 코드에서 사용되는 **모든 데이터는** **메모리에 저장**하고 **참조**할 수 있어야 함

* **데이터 타입이 컴퓨터와 개발자에게 제공되는 정보**

 1. 데이터를 메모리에 저장할 때 확보해야 하는 **메모리 공간의 크기**
 
 2. 할당할 수 있는 **유효한 값에 대한 정보**

 3. 메모리에 저장되어 있는 **2진수 데이터를 어떻게 해석할 지에 대한 정보**

* **데이터 타입의 존재 이유**
 
 1. 한정된 **메모리 공간**을 **효율적으로 사용**하기 위해

 2. 2진수 데이터로 **메모리에 저장된 데이터**를 **다양한 형태로 사용**하기 위해

## 1.1 원시 타입 (Primitive Data Type)

* **원시 타입의 값**은 `변경 불가능한 값(immutable value)`이며 **pass-by-value(값에 의한 전달)**

### 1.1.1 number

* C나 Java의 경우, 정수와 실수를 구분하여 int, long, float, double 등과 같은 다양한 숫자 타입이 존재한다. 하지만 **자바스크립트**는 독특하게 **하나의 숫자 타입만 존재**한다.

* 모든 수를 실수를 처리하며 정수만을 표현하기 위한 특별한 데이터 타입(integer type)은 없다.

```js
var integer = 10;        // 정수
var double = 10.12;      // 실수
var negative = -20;      // 음의 정수
var binary = 0b01000001; // 2진수
var octal = 0o101;       // 8진수
var hex = 0x41;          // 16진수
```

#### `2진수, 8진수, 16진수 리터럴`은 메모리에 동일한 배정밀도 64비트 부동소수점 형식의 `2진수로 저장`

#### `자바스크립트`는 2진수, 8진수, 16진수 데이터 타입을 제공하지 않기 때문에 이들 값을 참조하면 `모두 10진수로 해석`

```js
console.log(binary); // 65
console.log(octal);  // 65
console.log(hex);    // 65

// 표기법만 다를뿐 같은 값이다.
console.log(binary === octal); // true
console.log(octal === hex);    // true
```

#### 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수를 처리 ( 정수로 표시된다해도 사실은 실수 )

#### `따라서 정수로 표시되는 수 끼리 나누더라도 실수가 나올 수 있다`

```js
console.log(1 === 1.0); // true

var result = 4 / 2;
console.log(result); // 2
result = 3 /2;
console.log(result); // 1.5
```

#### `+` 3가지 특별한 값들도 표현가능

* Infinity : 양의 무한대
* Infinity : 음의 무한대
* NaN : 산술 연산 불가(not-a-number)

```js
var pInf = 10 / 0;  // 양의 무한대
console.log(pInf);  // Infinity

var nInf = 10 / -0; // 음의 무한대
console.log(nInf);  // -Infinity

var nan = 1 * 'string'; // 산술 연산 불가
console.log(nan);       // NaN
```

#### 프로그래밍 언어에서 실수는 일반적으로 소수를 가리킴

### 1.1.2 string

* 문자열(String) 타입은 텍스트 데이터를 나타내는데 사용

* 작은 따옴표(‘’) 또는 큰 따옴표(“”) 안에 텍스트를 넣어 생성

```js
var str = "string"; // 큰 따옴표
str = 'string';     // 작은 따옴표
str = `string`;     // 백틱(ES6 템플릿 리터럴)

str = "큰 따옴표로 감싼 문자열 내의 '작은 따옴표'는 문자열이다.";
str = '작은 따옴표로 감싼 문자열 내의 "큰 따옴표"는 문자열이다.';
```

#### C와 같은 언어와는 다르게, `자바스크립트의 문자열`은 `원시 타입`이며 `변경 불가능(immutable)`

```js
var str = 'Hello';
str = 'world';
```

* 첫번째 구문이 실행되면 메모리에 문자열 ‘Hello’가 생성되고 식별자 str은 메모리에 생성된 문자열 ‘Hello’의 메모리 주소를 가리킨다. 그리고 두번째 구문이 실행되면 이전에 생성된 문자열 ‘Hello’을 수정하는 것이 아니라 **새로운 문자열 ‘world’를 메모리에 생성**하고 식별자 str은 이것을 가리킨다. 이때 **문자열 ‘Hello’와 ‘world’는 모두 메모리에 존재**하고 있다. 변수 str은 문자열 ‘Hello’를 가리키고 있다가 문자열 ‘world’를 가리키도록 변경되었을 뿐이다.

```js
var str = 'string';
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str); // string
```

#### `문자열`은 배열처럼 `인덱스를 통해 접근가능` ( 이와 같은 특성을 갖는 데이터를 `유사 배열`이라 함 )

#### `한번 생성된 문자열`은 read only로서 `변경X` 이것을 변경 불가능(immutable)이라 한다.

#### 그러나 `새로운 문자열을 재할당하는 것은 가능` ( 기존 문자열을 변경하는 것이 아니라 새로운 문자열을 새롭게 할당하는 것이기 때문 )

```js
var str = 'string';
console.log(str); // string

str = 'String';
console.log(str); // String

str += ' test';
console.log(str); // String test

str = str.substring(0, 3);
console.log(str); // Str

str = str.toUpperCase();
console.log(str); // STR
```

### 1.1.3 boolean

* 불리언(boolean) 타입의 값은 논리적 참, 거짓을 나타내는 true와 false 뿐

```js
var foo = true;
var bar = false;

// typeof 연산자는 타입을 나타내는 문자열을 반환한다.
console.log(typeof foo); // boolean
console.log(typeof bar); // boolean
```

#### `불리언 타입의 값은` 참과 거짓으로 구분되는 조건에 의해 프로그램의 흐름을 제어하는 `조건문에서 자주 사용`

#### 비어있는 문자열과 null, undefined, 숫자 0은 `false`로 간주

### 1.1.4 undefined

* **undefined 타입의 값**은 **undefined가 유일** ( 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가짐 )

* **선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 property에 접근할 경우 undefined가 반환**

* **변수 선언에 의해 확보된 메모리 공간**을 처음 할당이 이루어질 때까지 빈 상태(대부분 비어있지 않고 쓰레기 값(Garbage value)이 들어 있다)로 내버려두지 않고 **자바스크립트 엔진이 undefined로 초기화**하기 때문

```js
var foo;
console.log(foo); // undefined
```

#### 자바스크립트 엔진이 변수 초기화에 사용하는 이 값을 만약 개발자가 마음대로 할당한다면 undefined의 본래의 취지와 어긋날 뿐더러 혼란을 줄 수 있으므로 권장X

#### `변수의 값이 없다는 것을 명시하고 싶은 경우` undefined를 할당하는 것이 아니라 `null을 할당`한다.

### 1.1.5 null

* **null 타입의 값**은 **null이 유일**

* **자바스크립트**는 대소문자를 구별(case-sensitive)하므로 **null은** `Null, NULL등과 다름`

```js
var foo = 'Lee';
foo = null;  // 참조 정보가 제거됨
```
#### 함수가 호출되었으나 `유효한 값을 반환할 수 없는 경우`, 명시적으로 null을 반환하기도 함

```js
var element = document.querySelector('.myElem');
// HTML 문서에 myElem 클래스를 갖는 요소가 없다면 null을 반환한다.
console.log(element); // null
```

#### typeof 연산자로 null 값을 연산해 보면 null이 아닌 object가 나옴 이는 자바스크립트의 설계상의 오류

```js
var foo = null;
console.log(typeof foo); // object
```

#### null 타입을 확인할 때 typeof 연산자를 사용하면 안되고 일치 연산자(===)를 사용해야 함

```js
var foo = null;
console.log(typeof foo === null); // false
console.log(foo === null);        // true
```

### 1.1.6 symbol

* **심볼**(symbol)은 **변경 불가능한 원시 타입의 값**

* 주로 이름의 충돌 위험이 없는 유일한 **객체의 property key를 만들기 위해** 사용

```js
// 심볼 key는 이름의 충돌 위험이 없는 유일한 객체의 property key
var key = Symbol('key');
console.log(typeof key); // symbol

var obj = {};
obj[key] = 'value';
console.log(obj[key]); // value
```

## 1.2 객체 타입 (Object type, Reference type)

* **객체**는 이름과 값을 가지는 데이터를 의미하는 **property**와 동작을 의미하는 **method**를 **포함**할 수 있는 **독립적 주체**

* 객체는 pass-by-reference(참조에 의한 전달) 방식으로 전달

# 2. 변수

* **변수(Variable)**는 프로그램에서 사용되는 **데이터를** 일정 기간 동안 기억하여 필요한 때에 **다시 사용하기 위해** 데이터에 고유의 이름인 **식별자(identifier)를 명시한 것**

* **변수**는 var, let, const 키워드를 사용하여 **선언**하고 할당 연산자를 사용해 값을 **할당**하고 식별자인 변수명을 사용해 변수에 저장된 값을 **참조**

```js
var score;  // 변수의 선언
score = 80; // 값의 할당
score = 90; // 값의 재할당
score;      // 변수의 참조

// 변수의 선언과 할당
var average = (50 + 100) / 2;
```

## 2.1 변수의 선언

```js
var x = 3;        // NG
var score = 100;  // OK
```

* 변수명은 식별자(identifier)로 불리기도 하며 명명 규칙이 존재

  * 반드시 영문자(특수문자 제외), underscore ( _ ), 또는 달러 기호($)로 시작

  * 자바스크립트는 대/소문자를 구별하므로 사용할 수 있는 문자는 “A” ~ “Z” (대문자)와 “a” ~ “z” (소문자)

#### `변수를 선언`할 때는 `var` 키워드를 사용한다. `등호(=, equal sign)는` 변수에 값을 할당하는 `할당 연산자`

```js
var name;     // 선언
name = 'Lee'; // 할당

var age = 30; // 선언과 할당

var person = 'Lee',
    address = 'Seoul',
    price = 200;

var price = 10;
var tax   = 1;
var total = price + tax;
```

#### 선언하지 않은 변수에 접근하면 ReferenceError가 발생

```js
var x;
console.log(x); // undefined
console.log(y); // ReferenceError
```

## 2.1 변수의 중복 선언

* **var** 키워드로 선언한 변수는 **중복 선언이 가능**

```js
var x = 1;
console.log(x); // 1

// 변수의 중복 선언
var x = 100;
console.log(x); // 100
```

## 2.2 동적 타이핑 (Dynamic Typing)

```js
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean
```

## 2.3 변수 호이스팅(Variable Hoisting)

* 변수의 생성 단계

  * **선언** 단계(Declaration phase) - **변수 객체(Variable Object)에 변수를 등록**. 이 변수 객체는 스코프가 참조하는 대상

  * **초기화** 단계(Initialization phase) - 변수 객체(Variable Object)에 등록된 **변수를 메모리에 할당**. 이 단계에서 변수는 undefined로 초기화

  * **할당** 단계(Assignment phase) - undefined로 초기화된 **변수에 실제값을 할당**

* var 키워드로 선언된 변수는 선언 단계와 초기화 단계가 한번에 이루어짐
  
  * 이러한 현상이 변수 호이스팅(Variable Hoisting)

* **자바스크립트의 변수**는 다른 C-family와는 달리 블록 레벨 스코프(block-level scope)를 가지지 않고 **함수 레벨 스코프(function-level scope)**를 가짐

#### 함수 레벨 스코프(Function-level scope) - 함수 내에서 선언된 변수는 함수 내에서만 유효하며 함수 외부에서는 참조할 수 없음

## 2.4 var 키워드로 선언된 변수의 문제점

* **함수 레벨 스코프(Function-level scope)** - 전역 변수의 남발

* **var 키워드 생략 허용** - 의도하지 않은 변수의 전역화 

* **중복 선언 허용** - 의도하지 않은 변수값 변경

* 변수 호이스팅 - 변수를 선언하기 전에 참조가 가능

#### ES6는 이러한 `var의 단점을 보완`하기 위해 `let과 const` 키워드를 도입