/* In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Start	End	North Hemisphere	South Hemisphere
March, 1	May, 31	Spring	Autumn
June, 1	August, 31	Summer	Winter
September, 1	November, 30	Autumn	Spring
December, 1	February, 28***	Winter	Summer
Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a 
function that returns a string with the season name, accordingly to the above table.

Examples
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"
Notes

During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this 
challenge, years are not used, so the last day of February will always be the 28th. */









let m=[['March',"April","May"],["June","July","August"],["September","October","November"],['December','January','February']]
let Months=['January','February','March',"April","May","June","July","August","September","October","November",'December']
let n=["Spring","Summer","Autumn","Winter"]
let s=["Autumn","Winter",'Spring','Summer']




function hemisphereSeason(hemisphere, date) {
  let MonthName=Months[new Date(date).getMonth()] 
  let index
  for(let i=0;i<m.length;i++){
    let found=false
    for(let j=0;j<m[i].length;j++){
     
     if(m[i][j]==MonthName){
        index=i
       found=true
       break;
     }
    }
    if(found){
      break;
    }
  }
  return hemisphere=="N"?n[index]:s[index]
}
console.log(hemisphereSeason("S", "September, 22"))


