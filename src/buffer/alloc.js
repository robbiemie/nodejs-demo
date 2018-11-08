/**
 * Instances of the Buffer class are similar to arrays of integers but correspond to fixed-sized,
 * raw memory allocations outside the V8 heap.
 * The size of the Buffer is established when it is created and cannot be resized.
 */

// Creates a zero-filled Buffer of length 10
console.log(Buffer.alloc(10))
// Creates a Buffer of length 10, filled with 0x1.
console.log(Buffer.alloc(10, 1))
// Buffer instance might contain old data that needs to be
// overwritten using either fill() or write().
console.log(Buffer.allocUnsafe(10))
