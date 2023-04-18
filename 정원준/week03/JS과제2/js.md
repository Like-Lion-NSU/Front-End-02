1.  2

2.  String(), boolean()

3.
```js
var num = prompt("숫자를 입력하세요");
num = Number(num)       // num을 숫자로 변환
alert(num*0.393701);

```

4.
```js
var num = prompt("원의 반지름을 입력해주세요.")
num = Number(num)
document.writeln("원의 반지름: ", num);
document.writeln("원의 넓이: ", num*num*3.14);
document.write("원의 둘레: ", num*2*3.14);
```

5.
```js
var num = prompt("달러 단위의 금액을 입력해주세요.")
num = Number(num)
document.write("달러: ", num);
document.write("-> 원화: ", num*1207)
```

6.
```js
// 구구단

const gogodan = prompt("출력할 구구단 숫자 입력");
let i = 1;

// for 문
for (i = 1; i < 10; i++) {
    document.write(gogodan + " * " + i + " = " + (gogodan * i) + "<br>");
}

// 사칙연산

const a = Number(prompt('a 입력'));
const b = Number(prompt('b 입력'));

document.write(`합: ${a+b}, 차: ${a-b}, 곱: ${a*b} 나누기: ${a/b}`);

//가위바위보

const gababo = prompt("가위바위보를 입력하세요", "가위: 0, 바위:1, 보:2");
const min = 1;
const max = 3;

function getRandom() {
    return Math.random() * 3; // max는 3, min은 0
}

if(gababo > getRandom()){
    document.write("승리");
}else if(gababo == getRandom()){
    document.write("무승부");
}else{
    document.write("패배");
}
```
7.
Number, a>b, a==b

8.
&&

9.
```js
if(a%2==0){     // a를 2로 나눌 때 나머지가 0일 때
            alert("입력한 숫자는 짝수입니다");
        }else{
            alert("입력한 숫자는 홀수입니다");
        }
```

10.
```js
        if(a/3==1){ // 4계절 = 4*3=12니까 3으로 나누기
            document.write("봄")
        }else if(a/3==2){
            document.write("여름")
        }else if(a/3==3){
            document.write("가을")
        }else{
            document.write("겨울")
        }
```

11.
```js
        const rawInput = prompt('태어난 해를 입력해주세요', '')
        const year = Number(rawInput);
        const a = year%12;      // 자축인묘진사오미신유술해
        const b = year%10;      // 갑을병정무기경신임계
        let c = "";
        
        if(b===4){
            c = "갑";
        }else if(b===5){
            c = "을";
        }else if(b===6){
            c = "병";
        }else if(b===7){
            c = "정";
        }else if(b===8){
            c = "무";
        }else if(b===9){
            c = "기";
        }else if(b===0){
            c = "경";
        }else if(b===1){
            c = "신";
        }else if(b===2){
            c = "임";
        }else{
            c = "계";
        }

        if(a===4){
            c += "자";
        }else if(a===5){
            c += "축";
        }else if(a===6){
            c += "인";
        }else if(a===7){
            c += "묘";
        }else if(a===8){
            c += "진";
        }else if(a===9){
            c += "사";
        }else if(a===10){
            c += "오";
        }else if(a===11){
            c += "미";
        }else if(a===0){
            c += "신";
        }else if(a===1){
            c += "유";
        }else if(a===2){
            c += "술";
        }else{
            c += "해";
        }

    alert(c);
```

12. 3

13.
```js
const strA = "사과,배,바나나,귤"
undefined                     

strA.split(",")                 // split() 함수를 이용해 값 변경
["사과", "배", "바나나", "귤"]  

strA
"사과, 배, 바나나, 귤"          // 파괴적 처리
```
```js
const arrayB = ["사과", "배", "바나나", "귤"]
undefined

arrayB.push("감")               // push() 함수를 이용해 값 추가
5

arryB
["사과", "배", "바나나", "귤", "감"]    // 파괴적 처리
```
```js
const arrayC = [1, 2, 3, 4, 5]
undefined

arrayC.map((x) => x * x)        // map() 함수를 이용하면 값이 변경되야하는데.. 출력 값이 그대로임
[1, 4, 9, 16, 25]

arrayC
{1, 2, 3, 4, 5}                 // 비파괴적 처리
```
```js
const str() = " 여백이 포함된 메시지 "
undefined

str().trim()
"여백이 포함된 메시지"          // trim() 함수를 이용하면 여백이 없어지면서 값변경

str()
" 여백이 포함된 메시지   "      // 비파괴적 처리
```

14.
정상적인 실행 결과는 3,6,9가 나올 거 같은데 오류가 나는 이유는 for문 안에 있는 i가 const라 값 변환이 안돼서 오류날 듯

15.
```js
    let output = 1;
    for(let i = 1; i<=100; i++){
        output *= i;
    }
    alert(output);
```

16.
```js
        let output = '';
        const size = 5;

        for(let i = 0; i < size; i++){
            for(let j = 4; j > i; j--){
                output += ' ';
            }
            for(let k = 0; k < 2 * i + 1; k++){
            output += '*';
        }
        output += '\n';
    }
        for(let a = 4; a > 0; a--){
            for(let b = a; b < size; b++){
                output += (' ');
            }
        for(let c = 0; c <= (a-1)*2; c++){
            output += ('*')
        }
        output += '\n';
    }
    console.log(output)
```
