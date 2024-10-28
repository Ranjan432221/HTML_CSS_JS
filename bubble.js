function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function sortArray() {
    let input = document.getElementById("inputArray").value;
    let array = input.split(',').map(Number);
    let sortedArray = bubbleSort(array);
    document.getElementById("result").innerText = "Sorted Array: " + sortedArray.join(', ');
}
