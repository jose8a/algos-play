// DESC: Continually grow a sorted-subarray with next unsorted item
// Repeatedly 1-upshift sub-array to make room for next in-order item
// Left sorted sub-array grows with each new item
// Sorting CYCLE:
//  * Select next unsorted-item
//  * In the sorted sub-array: Find in-order location for unsorted-item
//  * Right-shift all larger items in sorted sub-array to make room for
//  *    unsorted-item
//  * Insert unsorted-item into slot left by the shift
// Start cycle over with next unsorted-item
//
// Key vars:
//  * unsorted collection
//  * next-unsorted-item index
//  * next-unsorted-item value
//

function insertionSort() {
  return {
    data: [],
    pivot: 0,

    init(initData) {
      this.data = initData;
    },

    getData() {
      return this.data;
    },

    nextTick(vm) {
      const pivot = this.pivot;
      const insertValue = this.data[pivot];
      let ipIndex = 0;

      ipIndex = this.findInsertionPoint(ipIndex);
      // special case: if ipIndex == pivot ??

      this.shiftUpForInsertPoint(vm, ipIndex);
      this.data[ipIndex] = insertValue;
      this.checkSortingDone();
    },

    findInsertionPoint(index) {
      let ipIndex = index;
      const insertValue = this.data[this.pivot];
      while (this.data[ipIndex] < insertValue) {
        ipIndex += 1;
      }

      return ipIndex;
    },

    shiftUpForInsertPoint(vm, ipIndex) {
      let swapIndex = this.pivot;

      while (swapIndex > ipIndex) {
        vm.$set(this.data, swapIndex, this.data[swapIndex - 1]);
        /* this.data[swapIndex] = this.data[swapIndex - 1] */

        swapIndex -= 1;
      }
    },

    checkSortingDone() {
      if (this.pivot < this.data.length) {
        this.pivot += 1;
        return false;
      }

      return true;    // TRUE means we're done sorting
    },
  };
}

module.exports = insertionSort;
