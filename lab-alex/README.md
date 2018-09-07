# Create a List and Tools
## Length
The length parameter is set to 0 on initialization and increases or decreases as the methods change the values and parameters in the list instance.
## Push
The push method has an arity of one and takes an item of any sort as input.  It adds that item to the object with a key value of the length value and then increments the length. 
## Pop
The pop method takes no arguments. It pulls off the last item and then deletes it from the object.  It returns the last item. 
## Slice
The slice method has an arity of two, and takes a start and stop integer.  It uses those integers to return a new array with just the values from the start to stop index.  
## ForEach
The forEach method has an arity of one, and takes a callback function as its argument.  It uses the callback function for each of the individual items in order of index. 
## Map
The map method has an arity of one, and takes a callback function as its argument.  It creates a new list with the callback function called on each of the items in the object.
## Filter
The filter method has an arity of one and takes a callback function as its argument.  It creates a new list where the items only include those that the callback function found true when applied to each of the items in the starting list.
## Reduce
The reduce method has an arity of one, and takes a reducer callback function as its argument.  That function takes an accumulator and an item and then returns the accumulator as modified by the reducer function.  The overall output is a singular value from the accumulator.