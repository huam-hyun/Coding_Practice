function solution(n) {
    let answer = 2;
    
    while(n % answer !== 1){
        answer++
    }
    
    return answer;
}