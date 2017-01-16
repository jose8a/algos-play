// Recursive in-place sorting algorithm
//  * Pivot "slides" down the sub-array until it is in it's final sorted
//    position
//
// Pseudocode
//  * Quicksort: Array, lo, hi:
//    * Partition Operation
//    * QuickSort: A[lo:p-1], lo, p-1
//    * QuickSort: A[p+1], p+1, hi
//  * Partition operations:
//    * Pick pivot (usually last item in list)
//    * store hi-index value to temp
//    * copy pivot-val down to hi-index position (thus sliding it one down)
//    * copy lo-index val to pivot-index position (thus jumping over pivot)
//    * copy temp value to lo-index position
//    * if new lo-index val is smaller than pivot-val, increment lo-index
//    * decrement hi-index
//    * decrement pivot-index
//    * cycle STOP condition: lo-index >= hi-index
//  * Pivot's final spot splits the subarray into 2 recursive sub-arrarys
//    * the pivot is sorted, so isn't included in either sub-array
//  * Cycle repeats for each subarray (via recursion)
//
// Key vars:
//  * subArray
//  * lo-index
//  * hi-index
//  * pivot-index
//
//
// [4, 3, 6, 8, 1]
// [4]
//
//
//
