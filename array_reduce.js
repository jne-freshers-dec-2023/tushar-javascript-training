let numbers = [1,2,3,4,5]

function sum(...numbers){
    return numbers.reduce((total, num)=> total + num,0)
}

const total_sum = sum(1,2,3,4,5);

console.log("Total sum : ", total_sum)