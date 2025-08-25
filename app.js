console.log("hi");

//Iterative Method
function fibs(num){
    let fibArray = [0, 1];
    if(num==1){
        return fibArray.slice(1);
    }
    else if(num == 0){
        return fibArray.slice(2);
    }
    for(let i = 2; i<num; i++){
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray;
}

function fibsRec(num){
    if (num == 2) {
        return [0, 1];
    } 
    else if (num == 1){
        return [0];
    }
    else if (num == 0) {
        return [];
    }
    let arr = fibsRec(num - 1);
    arr.push(arr[arr.length-1] + arr[arr.length-2]);
    return arr;
} 

console.log(fibs(8));

console.log(fibsRec(8));