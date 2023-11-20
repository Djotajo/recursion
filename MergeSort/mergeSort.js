
function mergeSort(list) {
    if (list.length <= 1) {
        return list;
    }
    let mid = Math.floor(list.length / 2);
    let leftSide = list.slice(0, mid);
    let rightSide = list.slice(mid, list.length)

    return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(left, right) {
    let output = [];
    while (left.length > 0 || right.length > 0){
    if (left.length == 0) {
        output.push(right[0]);
        right.shift();
    } else if (right.length == 0) {
        output.push(left[0]);
        left.shift();
    } else if (left[0] < right[0]) {
            output.push(left[0]);
            left.shift();
    } else if (right[0] < left[0]){
            output.push(right[0]);
            right.shift();
    }
    }
    return output;
}