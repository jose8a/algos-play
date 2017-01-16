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

