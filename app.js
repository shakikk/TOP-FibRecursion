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

//Recursive Method
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

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.ceil(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let arr = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            arr.push(left[i]);
            i++;
        } else {
            arr.push(right[j]);
            j++;
        }
    }
    return arr.concat(left.slice(i), right.slice(j));
}

console.log(mergeSort([4,6,66,3,2,4,8]));