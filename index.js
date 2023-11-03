// fill in javascript code here


// index.js

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    var tableBody = document.querySelector("table tbody");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      var name = document.getElementById("name").value;
      var doctorID = document.getElementById("docID").value;
      var specialization = document.getElementById("dept").value;
      var experience = parseFloat(document.getElementById("exp").value);
      var email = document.getElementById("email").value;
      var mobile = document.getElementById("mbl").value;
      var role = getDoctorRole(experience);
  
      if (name && doctorID && specialization && experience && email && mobile) 
      {
        appendDoctorToTable(name, doctorID, specialization, experience, email, mobile, role);
        form.reset();
      } 
      else 
      {
        alert("Please fill in all fields.");
      }
    });
  
    function getDoctorRole(experience) 
    {
      if (experience > 5) 
      {
        return "Senior";
      } 
      else if (experience >= 2 && experience <= 5) 
      {
        return "Junior";
      } 
      else 
      {
        return "Trainee";
      }
    }
  
    function appendDoctorToTable(name, doctorID, specialization, experience, email, mobile, role) {
      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${doctorID}</td>
        <td>${specialization}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button onclick="deleteDoctor(this)">Delete</button></td>
      `;
  
      tableBody.appendChild(newRow);
    }
   });
  
  function deleteDoctor(button) 
  {
    var row = button.parentElement.parentElement;
    row.remove();
  }
  