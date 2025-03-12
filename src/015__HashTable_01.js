
// Hash Table

// ==> Used to store key-value pairs
// ==> Like arrays, but keys are not ordered.
// ==> Unlike arrays, hash tables are fast for all of 
// the following operations: find values,
// adding new vaue, and removing values.

// ==> Python has Dictionaries
// ==> JS has Objects and Maps*
// ==> Java, Go, & Scala have Maps
// ==> Ruby has Hashes


//====================================================

// To implement a hash table, we'll be using an array.

// In order to lookup values by key, we neew a way to convert
// keys into valid array indices.A function that performs 
// this task is called a hash function.

//====================================================

// What makes a good hash?
// ==> Fast(i.e constant time)
// ==> Doesn't cluster outputs at specific indices, but 
// distributes uniformly.
// ==> Deterministic (Same input yeilds same output)

//====================================================

// Handling Collitions

// ==> Separate Chaining
// ==> Linear Probing

//====================================================

// BIG O of Hash Tables

// Insert: O(1)
// Deletion: O(1)
// Access: O(1)

//====================================================
