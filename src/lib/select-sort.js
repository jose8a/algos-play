// Repeat finding the next-smallest card, and swapping it into the correct
// position until the array is sorted.
//
// This algorithm is called selection sort because it repeatedly selects the
// next-smallest element in the unsorted sub-array and swaps it into place.
//
// The algorithm creates two sub-arrays:
//  * a sorted growing-sub-array
//  * an unsorted shrinking sub-array
//

function selectSort() {
  return {
    data: [],
    pivot: 0,

    init(indata) {
      this.data = indata;
      /* eslint-disable no-console */
      console.log(this.data);
    },

    getData() {
      return this.data;
    },

    nextTick(vm) {
      this.findNextSmallest(vm);
    },

    /* this method begins at the current pivot and looks for the smallest
     * remaining data item in the unsorted 'top' of the data pool to swap in it's place*/
    findNextSmallest(vm) {
      const dataSize = this.data.length;
      const pivot = this.pivot;

      /* start at the current pivot, and if a smaller element than the pivot is found, swap it
       * with the current pivot element*/
      for (let swapIndex = pivot + 1; swapIndex < dataSize; swapIndex += 1) {
        if (this.data[swapIndex] < this.data[pivot]) {
          this.swapNodes(vm, swapIndex);
        }
      }

      this.pivot += 1;
    },

    swapNodes(vm, swapIndex) {
      const pivot = this.pivot;
      const temp = this.data[pivot];

      /* vm.$set is required to be used here since reactivity is otherwise lost
       * on the array when updating only the interior Array elements */
      vm.$set(this.data, pivot, this.data[swapIndex]);
      vm.$set(this.data, swapIndex, temp);
    },
  };
}

module.exports = selectSort;
