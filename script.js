var nameInput = $("#name-input")
var sortButton = $("#sort-button")
var enrolledStudentList = $(".enrolled-students")

var houses = [
  "Ravenclaw",
  "Hufflepuff",
  "Gryfindor",
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
  console.log("student", student.name)

  var newStudentElement = $("<div>" + student.name + "</div>")


  enrolledStudentList.append(newStudentElement)
})