var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryffindor",
  "Slytherin"
]

function chooseRandomHouse() {
  var index = Math.floor(Math.random() * houses.length)

  return houses[index]
}

sortButton.click(function() {
  var name = nameInput.val()

  addListItem("enrolledStudents", {
    name: name,
    house: chooseRandomHouse()
    
  })
})

onNewListItem("enrolledStudents", function(student) {
  console.log("student", student.name, student.house)

  var newStudentElement = $("<div class='enrolled-students'>" + "name: " student.name + " " + student.house + "</div>")


  enrolledStudentList.append(newStudentElement)
})