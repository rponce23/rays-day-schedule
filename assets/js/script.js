var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D YYYY, h:mm:ss a'));
var nowHour = today.get('hour');
console.log(nowHour); 

function colorTime(){
  $(".time-block").each(function () {
      var theHour = parseInt($(this).attr("id").split("hour")[1]);
      theHour = -theHour;
      
      if (theHour < nowHour) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
      }
      else if (theHour === nowHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
      }
      else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
      }
  })
};
colorTime();

$(".saveBtn").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
})

function storageText(){
  $("#hour-9 .description").val;
  var hr9 = localStorage.getItem("hour-9");
  hr9 = $("#hour-9 .description").text(hr9);
  $("#hour-10 .description").val;
   var hr10 = localStorage.getItem("hour-10");
   hr10 = $("#hour-10 .description").text(hr10);
  $("#hour-11 .description").val;
  var hr11 = localStorage.getItem("hour-11");
  hr11 = $("#hour-11 .description").text(hr11);
  $("#hour-12 .description").val;
  var hr12 = localStorage.getItem("hour-12");
  hr12 = $("#hour-12 .description").text(hr12);
  $("#hour-13 .description").val;
  var hr13 = localStorage.getItem("hour-13");
  hr13 = $("#hour-13 .description").text(hr13);
  $("#hour-14 .description").val;
  var hr14 = localStorage.getItem("hour-14");
  hr14 = $("#hour-14 .description").text(hr14);
  $("#hour-15 .description").val;
  var hr15 = localStorage.getItem("hour-15");
  hr15 = $("#hour-15 .description").text(hr15);
  $("#hour-16 .description").val;
  var hr16 = localStorage.getItem("hour-16");
  hr16 = $("#hour-16 .description").text(hr16);
  $("#hour-17 .description").val;
  var hr17 = localStorage.getItem("hour-17");
  hr17 = $("#hour-17 .description").text(hr17);
  $("#hour-18 .description").val;
  var hr18 = localStorage.getItem("hour-18");
  hr18 = $("#hour-18 .description").text(hr18);
  $("#hour-19 .description").val;
  var hr19 = localStorage.getItem("hour-19");
  hr19 = $("#hour-19 .description").text(hr19);
};
storageText();





