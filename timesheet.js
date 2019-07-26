// Colin's Firebase
var config = {
  apiKey: "AIzaSyBIZz8iZDQaMriGqtfFt6QvYrwhAJSSTvM",
  authDomain: "fir-74cb1.firebaseapp.com",
  databaseURL: "https://fir-74cb1.firebaseio.com",
  projectId: "fir-74cb1",
  storageBucket: "",
  messagingSenderId: "465135312392",
  appId: "1:465135312392:web:2566a9ea502046e4"
};

firebase.initializeApp(config);

var database = firebase.database();

// This is to try a pull request
var userName = "";
var userRole = "";
var userSD = "";
var userMRate = "";

$(".submit").on("click", () => {
  event.preventDefault();
  console.log("hi");
  userName = $("#name")
    .val()
    .trim();
  userRole = $("#role")
    .val()
    .trim();
  userSD = $("#sDate")
    .val()
    .trim();
  userMRate = $("#mRate")
    .val()
    .trim();
  database.ref().push({
    name: userName,
    role: userRole,
    startDate: userSD,
    monthlyRate: userMRate
  });
  var myArray = [];

  myArray.push(userName);
  myArray.push(userRole);
  myArray.push(userSD);
  myArray.push(userMRate);
  console.log(userName);
  console.log(myArray);
  function newLine(arr) {
    var tr = $("<tr></tr>");
    arr.forEach(function(i) {
      var td = $("<td></td>");
      td.text(i);
      td.appendTo(tr);
    });
    return tr;
  }
  var myLine = newLine(myArray);
  $("#employeeInfo").append(myLine);
  console.log(myLine);
});
