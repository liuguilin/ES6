//查找第二大的数
function findSecondLargest(arr) {
    var max = arr[0];
    var secondMax = arr[1];
    if (secondMax > max) {
        max = arr[1];
        secondMax = arr[0];
    }
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }
    return secondMax;
}

var arr = [1, 2, 3, 4, 6, 9, 9, 9, 8];

console.log(findSecondLargest(arr));
