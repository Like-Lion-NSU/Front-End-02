# 9. 타입 변환과 단축 평가
* 명시적 타입 변환 / 타입 캐스팅
    
    -> 개발자에 의해 의도적으로 값의 타입을 변환하는 것
    <code>

    var x = 10; //숫자

    var str = x.toString(); // 숫자를 문자열로 타입 캐스팅

    console.log(typeof str); // string
    </code>
* 암묵적 타입 변환 / 타입 강제 변환
    
    ->자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환하는 것

    <code>
    var x = 10;

    var str = x + ''; // (10).toString() 와 같음

    console.log(typeof str, str); // string 10  - 변수 x의 숫자 값을 바탕으로 새로운 문자열 값 ‘10’을 생성

    console.log(x); // 10 - 변수 x의 값이 변경된 것아님
    </code>
    
    ### 암묵적 타입 변환 종류
    1. 문자열 타입으로 변환
        * 문자열 연결 연산자의 피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 암묵적 타입 변환
        * 1 + '2' // "12"
        * '10' + 2               // '102'
        * 0 + " " // "0"
        * console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"
        * true + ''           // "true"
        * null + ''           // "null"
        * undefined + ''      // "undefined"
        * (Symbol()) + ''     // TypeError
        * 객체타입 -> 이해못함 
            - ({}) + ''           // "[object Object]"
            - Math + ''           // "[object Math]"
            - [] + ''             // ""
            - [10, 20] + ''       // "10,20"
            - (function(){}) + '' // "function(){}"
            - Array + ''          // "function Array() { [native code] }"
    2. 숫자 타입으로 변환

        * 1 - '1'    // 0
        * 1 * '10'   // 10
        * 1 / 'one'  // NaN 피연산자를 숫자 타입으로 변환할 수 없는 경우
        * '1' > 0   // true
        
            비교 연산자의 피연산자 중에서 숫자 타입이 아닌 피연산자를 숫자 타입으로 암묵적 타입 변환
         *  +''             // 0
            
        * +'0'            // 0
        * +'1'            // 1
        * +'string'       // NaN
        * +true           // 1
        * +null           // 0
        * +undefined      // NaN
        * +Symbol( )       // TypeError
        * 객체 타입 -> 음

            - +{}             // NaN
            - +[]             // 0
            - +[10, 20]       // NaN
            - +(function(){}) // NaN

            ** 빈 문자열(‘’), 빈 배열([]), null, false는 0 **

            ** 객체와 빈 배열이 아닌 배열, undefined는 NaN **
    3. 불리언 타입으로 변환 Truthy vs Falsy

    * Falsy Value
        * false
        * undefined
        * null
        * 0, -0
        * NaN
        * ’’ (빈문자열)
    
    
        ex.
        <code>
        // 주어진 인자가 Truthy 값이면 true, Falsy 값이면 false를 반환한다.

        function isTruthy(v) {
        
        return !!v; //느낌표 두개 - 반대의 반대?
        
        }
        
        // 주어진 인자가 Falsy 값이면 true, Truthy 값이면 false를 반환한다.

        function isFalsy(v) {
        
        return !v;

        }
        </code>

    * True를 반환하는 예제

        * console.log(isFalsy(false));
        * console.log(isFalsy(undefined));
        * console.log(isFalsy(null));
        * console.log(isFalsy(0));
        * console.log(isFalsy(NaN));
        * console.log(isFalsy(''));
        * console.log(isTruthy(true));
** // 빈 문자열이 아닌 문자열은 Truthy 값이다. ** 
        * console.log(isTruthy('0'));
        * console.log(isTruthy({}));
        * console.log(isTruthy([])); 
* 명시적 타입 변환