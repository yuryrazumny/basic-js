module.exports = function transform(arr) {

    if (!Array.isArray(arr)) {
        throw Error();
    }

    var transformed = [];

    for (var i = 0; i < arr.length; i++)
        if (arr[i] == '--discard-next' && i < arr.length - 1) {
            i += 1;
        }
        else if (arr[i] == '--discard-prev' && i > 0) {
            transformed.pop();
        }

        else if (arr[i] == '--double-next' && i < arr.length - 1) {
            transformed.push(arr[i + 1]);
        }
        else if (arr[i] == '--double-prev' && i > 0) {
            transformed.push(arr[i - 1]);
        }
        else if (arr[i] != '--discard-prev' && arr[i] != '--double-prev' && arr[i] != '--double-next' && arr[i] != '--discard-next') {
            transformed.push(arr[i]);
        }
    return transformed;
}