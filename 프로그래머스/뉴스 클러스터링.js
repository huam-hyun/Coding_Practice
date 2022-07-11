// 현재 프로그래머스 내부 오류로 결과 학인 불가
const str1 = "aa1+aa2"
const str2 = "AAAA12" 

console.log(solution(str1, str2))

function solution(str1, str2) {
    // 대소문자 상관없으니 소문자로 변환
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    let answer = 0;
    let set1 = []
    let set2 = []
    let union = []
    let inter = []

    // 문자열 Set 만들기
    for(let i = 1; i < str1.length; i++){
        if(str1[i-1].match(/[^a-z]/i) || str1[i].match(/[^a-z]/i)){
            continue
        }
        set1.push(str1[i-1] + str1[i])
    }
    for(let i = 1; i < str2.length; i++){
        if(str2[i-1].match(/[^a-z]/i) || str2[i].match(/[^a-z]/i)){
            continue
        }
        set2.push(str2[i-1] + str2[i])
    }

    // set가 둘 다 공집합이면 65536
    if(set1.length === 0 && set2.length === 0){
        return 65536
    }

    while(set1.length){
        const item = set1.shift()

        // 교집합이면 교집합에 아니면 합집합에
        if(set2.includes(item)){
            inter.push(item)
        }else{
            union.push(item)
        }
    }
    union = union.concat(set2)

    answer = (inter.length / union.length) * 65536

    return Math.floor(answer);
}