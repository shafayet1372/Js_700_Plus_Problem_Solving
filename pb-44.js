/* Check if the given string is a correct time representation of the 24-hour clock.

Example

For time = "13:58", the output should be
validTime(time) = true;
For time = "25:51", the output should be
validTime(time) = false;
For time = "02:76", the output should be
validTime(time) = false.
 */

function validTime(time) {
let arr=time.split(":")
if((parseInt(arr[0])>=0 && parseInt(arr[0])<24) && (parseInt(arr[1])>0 && parseInt(arr[1])<60)){
return true
}
return false
}

console.log(validTime('13:58'))