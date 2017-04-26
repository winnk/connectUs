var apiKey = require('./../.env').apiKey;
var apiPre = "https://api.betterdoctor.com/2016-03-01/doctors?";
var apiPost = "&location=37.773,-122.413,100&skip=2&limit=10&user_key=";
var medicalIssue = "cancer";

function Doctor() {
}

Doctor.prototype.getDoctors = function(issue, displayDoctors) {
  console.log("getDoctor runs");
 $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=cancer&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=faf8804b327e1667c939d01e9d89bb10').then(function(response) {
   // console.log(JSON.stringify(response));
   var doctors = [];
   response.data.forEach(function(doctor) {
     console.log("forEach runs");
   var docObject = {};
   docObject.first_name = doctor.profile.first_name;
   docObject.last_name = doctor.profile.last_name;
   docObject.drtitle = doctor.profile.title;
   console.log("allDoc pushed");
   doctors.push(docObject);
 });
      console.log("display docs runs docObject")
     displayDoctors(doctors);
  })
    .fail(function(error){
    $('#error').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
