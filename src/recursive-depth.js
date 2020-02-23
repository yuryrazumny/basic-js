module.exports = class DepthCalculator {
    calculateDepth(arr) {

        if (!Array.isArray(arr)) {
            return 0;
        }

        var count = 1;

        for (var i = 0; i < arr.length; i++) {
            count = Math.max(this.calculateDepth(arr[i]) + 1, count);
        }
        return count;
    }
};