1.
```js
    function multiplyAll (a, b) { 
     let output = a;    // output에 a를 대입
    for (let i = a; i <= b; i++) {  // i에 a를 대입 후 b까지 반복
        output *= i;    // a부터 b까지 곱해짐
    } 
    return output;
    }
```

2-1.
```js
const max = function max(array)
for (const item of array) { 
     // 현재 output 보다 큰 item 이 있다면 
        if (output < item) { 
     // output 의 값을 item 으로 변경 
        output = item 
        } 
     }
```

2-2.
```js
const max = function max(...array)
for (const item of array) { 
        if (output < item) { 
        output = item 
        } 
     }
```

2-3.
```js
const max = function max(array1, ...array2)     // 일반 배열과 ...배열사용
if(Array.isArray(array1)){      // 일반배열일 때
        output = array1[0];
        item = array1;
    } else if(typeof array1 === 'number'){  // 숫자가 나열됐을 때
        output = array1;
        item = array2;
    }

    for (i of item) {
        if (output < i) { 
        output = i; 
        }
     }
```

3. 
```js
    numbers = numbers.filter((value) => value % 2 === 1);   // 필터함수를 이용한 홀수 구하기
    numbers = numbers.filter((value) => value <= 100);      // 100 이하의 수 구하기
    numbers = numbers.filter((value) => value % 5 === 0);   // 5로 나누어지는 수 구하기

실행결과
    [273,25,75,103,57]
    [25,75,52,32,57,24,76]
    [25,75]
```

4.
```js
array.forEach(function (value, index)){ // index가 필요하니 index까지
    console.log(`${index}`);
}
array.forEach(function (value)){   // value가 필요하니 value까지
    console.log(`${value}`);
}
```

5.
```js
const a = {
    name : '혼자 공부하는 파이썬';     // 객체 = 키 : 값
    price : 18000; 
    publisher : "한빛미디어";
}
```

6.
객체[속성] = 값

ex) student.이름 = '윤인성'

7.
delete 객체[속성]

ex) delete student.장래희망

8.
```js
print: fuction(lang){
    console.log(`${this.ko}는 ${this.lang[lang]}로 ${this[lang]}입니다`)
}

실행결과
빵는 스페인어로 pan입니다.
```

9.
예측 : 52000원

실행결과 : 실행 x
num이 객체가 아닌 일반 자료형이라 메소드를 가질 수 없음

10.
실행결과 : 한국어, 영어

11.
```js
const rad = Math.PI / 180;

console.log(Math.sin(degree * rad));
// Math.sin()은 우리가 사용하는 각도를 사용하는 것이 아닌 라디안 값을 사용
```

12.
prototype

13.
```js
// _.orderBy(collection, [iteratees=[_.identity]], [orders])
// collection (Array | Object) : 반복할 컬렉션
// [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]) : 정렬할 반복 대상
// [orders] (string[]) : 의 정렬 순서
// 기본 값 오름차순 -> 내림차순 "desc", 오름차순 정렬의 경우 "asc"
console.log(_.orderBy(books, ["name"], ["asc"]));
```

14.
...

15.
jQuery, React.js, D3.js, Underscore.js, Lodash, Algolia Places, Anime.js