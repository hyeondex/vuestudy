# 최대 공약수 & 최소 공배수
## README
> 일단 검색도 해보고 테스트도 해본 결과  
> 프로그래밍에서 `최대 공약수` 를 구하려면 **`유클리드 호제법`** 을 아는 것이 가장 합리적이라고 판단됨  
> 그래서 모든 풀이과정은 `유클리드 호제법` 을 사용해서 풀이함
>
## 유클리드 호제법 & 근본
> ```javascript
>   function solution(n, m) {
>   let answer = [];
>   let flag = n > m;
>   let big = flag ? n : m;
>   let small = flag ? m : n;
> 
>   flag = true;
> 
>   while (flag) { // true 라서 무조건 적으로 돌음
>     const left = big % small; // 큰수 / 작은수의 나머지  
>   //left = big(samll이었던 것) % small (left였던 것)
>     flag = left != 0; //flag에 left !=0 일때 의 true false 값을 담음
> 
>     if (flag) { // if(true)일 때 
>       big = small;  // 그 중 작은 수 
>       small = left; // 작은 수에는 나머지 값 
>     }
>   }
> 
>   answer.push(small); // 
>   answer.push((n * m) / small);
> 
>   return answer;
> }
> ```
>
## 유클리드 호제법 & 재귀호출
> ```javascript
> function solution(n, m) {
>   let flag = n > m;
>   let big = flag ? n : m;
>   let small = flag ? m : n;
> 
>   const min = recursion(big, small);
>   const max = (n * m) / min;
> 
>   return new Array(min, max);
> }
> 
> function recursion(big, small) {
>   const remainder = big % small;
> 
>   return remainder > 0 ? recursion(small, remainder) : small;
> }
> ```
>