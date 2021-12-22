/* Create a function that takes the length, width, height (in meters) and output unit and returns the volume of a pyramid to three decimal places in the correct unit.

Examples
pyramidVolume(4, 6, 20, "centimeters") ➞ "160000000.000 cubic centimeters"

pyramidVolume(1843, 1823, 923, "kilometers") ➞ "1.034 cubic kilometers"

pyramidVolume(18, 412, 93, "millimeters") ➞ "229896000000000.000 cubic millimeters"
Notes
The units used are limited to: millimeters, centimeters, meters and kilometers.
Ensure you return the answer and add the correct unit in the format cubic <unit> */







function pyramidVolume(length, width, height, unit) {
  let volume=((length*width*height)/3)
  if(unit=='centimeters'){
    return `${(volume*1000000).toFixed(3)} cubic ${unit}`
  }else if(unit=='kilometers'){
    console.log(volume)
    return `${(volume/1000000000).toFixed(3)} cubic ${unit}`
  }else if(unit=='millimeters'){
    return `${(volume*1000000000).toFixed(3)} cubic ${unit}`
  }else{
    return `${(volume).toFixed(3)} cubic ${unit}`
  }
  
}

console.log(pyramidVolume(10, 14, 6, "meters"))