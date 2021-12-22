/* Get Groups with Students
Create a function that takes two arrays: groups and students. It should return one array with groups merged with students by id. Students within 
groups should be ordered in the same way the studentIds were ordered.

Examples
getGroupsWithStudents([
  { 
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }
], [
  { 
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  }
]) ➞ [
  { 
    id: 1,
    name: "G1",
    students: [
      {
        id: 2,
        name: "Steve"
      },
      { 
        id: 1, 
        name: "John"
      }
    ]
  }
]
Notes
Try doing it with an arrow function. */









function getGroupsWithStudents(groups, students) {
  let result = []
  for (let i = 0; i < groups.length; i++) {
    let g = []
    for (let j = 0; j < groups[i].studentIds.length; j++) {

      for (let l = 0; l < students.length; l++) {

        if (groups[i].studentIds[j] == students[l].id) {
          g.push(students[l])

        }
      }
    }
    result.push({
      id: groups[i].id,
      name: groups[i].name,
      students: [...g]
    })
  }
  return result
}

console.log(getGroupsWithStudents([
  {
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }
], [
  {
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  }
]))