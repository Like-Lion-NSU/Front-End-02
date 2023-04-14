# 1. 블록문

```js
// 블록문
{
  var foo = 10;
  console.log(foo);
}

// 제어문
var x = 0;
while (x < 10) {
  x++;
}
console.log(x); // 10

// 함수 선언문
function sum(x, y) {
  return x + y;
}
console.log(sum(1, 2)); // 3
```

# 2. 조건문

## 2.1 if..else 문

```js
var num = 2;
var kind;

// if 문
if (num > 0) {
  kind = '양수'; // 음수를 구별할 수 없다
}
console.log(kind); // 양수

// if…else 문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수'; // 0은 음수가 아니다
}
console.log(kind); // 양수

// if…else if 문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind); // 양수
```

### 만약 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략가능

```js
var num = 2;
var kind;

if (num > 0)      kind = '양수';
else if (num < 0) kind = '음수';
else              kind = '영';

console.log(kind); // 양수
```

### 삼항 조건 연산자로 바꿔쓸 수 있음

```js
var num = 2;

// 0은 false로 취급된다.
var kind = num ? (num > 0 ? '양수' : '음수') : '영';
console.log(kind); // 양수
```

## 2.2 switch 문

```js
switch (표현식) {
  case 표현식1:
    switch 문의 표현식과 표현식1이 일치하면 실행될 문;
    break;
  case 표현식2:
    switch 문의 표현식과 표현식2가 일치하면 실행될 문;
    break;
  default:
    switch 문의 표현식과 일치하는 표현식을 갖는 case 문이 없을 때 실행될 문;
}
```

### 여러 개의 case 문을 중복해 사용가능

```js
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    // 윤년 계산 알고리즘
    // 1. 년도가 4로 나누어 떨어지는 해는 윤년(2000, 2004, 2008, 2012, 2016, 2020…)
    // 2. 그 중에서 년도가 100으로 나누어 떨어지는 해는 평년(2000, 2100, 2200...)
    // 3. 그 중에서 년도가 400으로 나누어 떨어지는 해는 윤년(2000, 2400, 2800...)
    days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('Invalid month');
}

console.log(days); // 29
```

# 3. 반복문

## 3.1 for 문

```js
for (초기화식; 조건식; 증감식) {
  조건식이 참인 경우 반복 실행될 문;
}
```

### for 문의 초기화식, 조건식, 증감식은 모두 옵션이므로 반드시 사용할 필요는 없다. 어떤 식도 선언하지 않으면 무한 루프

```js
for (;;) { } // 무한루프
```

### for 문 내에 for 문을 중첩해 사용가능

```js
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i}, ${j}]`);
  }
}
```

## 3.2 while 문

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
} // 0 1 2
```

### 조건식의 평가 결과가 언제나 참이면 무한루프

```js
// 무한루프
while (true) { }
```

## 3.3 do…while 문

* 코드 블록은 **무조건** 한번 이상 실행

```js
var count = 0;

// count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count);
  count++;
} while (count < 3); // 0 1 2
```

# 4. break 문

* switch 문과 while 문에서 살펴보았듯이 break 문은 코드 블록을 탈출

# 5. continue 문

* continue 문은 반복문(for, for…in, for…of, while, do…while)의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 이동

```js
var string = 'Hello World.';
var count = 0;

// 문자열은 유사배열이므로 for 문으로 순회할 수 있다.
for (var i = 0; i < string.length; i++) {
  // 'l'이 아니면 현 지점에서 실행을 중단하고 반복문의 증감식으로 이동한다.
  if (string[i] !== 'l') continue;
  count++; // continue 문이 실행되면 이 문은 실행되지 않는다.
}

console.log(count); // 3

// 참고로 String.prototype.match 메소드를 사용해도 같은 동작을 한다.
console.log(string.match(/l/g).length); // 3
```