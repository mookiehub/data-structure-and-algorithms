// 普通排序
const normalSort = (() => {
    // 获取数组中的最小值
    const getMin = (arr = []) => {
        const { length } = arr;
        let index = 0;
        for (let i = 0; i < length; i++) {
            if (arr[i] < arr[index] || arr[index] === undefined) {
                index = i;
            }
        }
        const result = arr[index];
        arr[index] = undefined;
        return result;
    };
    const sort = (arr = []) => {
        const { length } = arr;
        const newArr = new Array(length);
        for (let i = 0; i < length; i++) {
            // 依次赋予当前最小值
            newArr[i] = getMin(arr);
        }
        return newArr;
    };
    return sort;
})();

// 冒泡排序
const bubbleSort = (() => {
    // 是否需要交换位置
    const needExchange = (prev, next) => {
        if (prev > next) {
            return true;
        }
        return false;
    };
    // 数组元素交换位置
    const exchange = (arr, aIndex, bIndex) => {
        const temp = arr[aIndex];
        arr[aIndex] = arr[bIndex];
        arr[bIndex] = temp;
    };
    const sort = (arr = []) => {
        const { length } = arr;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - 1 - i; j++) {
                // 依次比较相邻元素，并根据情况交换位置
                if (needExchange(arr[j], arr[j + 1])) {
                    exchange(arr, j, j + 1);
                }
            }
        }
        return arr;
    };
    return sort;
})();

// 选择排序
const selectSort = (() => {
    // 是否需要交换位置
    const needExchange = (prev, next) => {
        if (prev > next) {
            return true;
        }
        return false;
    };
    // 数组元素交换位置
    const exchange = (arr, aIndex, bIndex) => {
        const temp = arr[aIndex];
        arr[aIndex] = arr[bIndex];
        arr[bIndex] = temp;
    };
    const sort = (arr = []) => {
        const { length } = arr;
        for (let i = 0; i < length; i++) {
            const currentLength = length - i;
            let indexOfMax = 0;
            for (let j = 0; j < currentLength; j++) {
                // 通过依次比较找到最大值的索引
                if (needExchange(arr[j], arr[indexOfMax])) {
                    indexOfMax = j;
                }
            }
            // 交换最大值与本次循环的最后一项的位置
            exchange(arr, indexOfMax, currentLength - 1);
        }
        return arr;
    };
    return sort;
})();

// 快速排序
const quickSort = (arr = []) => {
    const { length } = arr;
    if (length === 0) {
        return arr;
    }
    // 以第一项为基准，用于后续比较
    const head = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < length; i++) {
        const item = arr[i];
        if (item <= head) {
            // 比基准值小则推入“左”
            left.push(item);
        } else {
            // 比基准值大则推入“右”
            right.push(item);
        }
    }
    // “左”“右”数组分别递归分组
    left = quickSort(left);
    right = quickSort(right);
    return left.concat(head, right);
};
