// <!-- The core Firebase JS SDK is always required and must be listed first -->


// TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app


// Your web app's Firebase configuration

$(document).ready(function() {

    var firebaseConfig = {
        apiKey: "AIzaSyCDing38OUB1wNbLEstfTD8k3tXaFmaFWE",
        authDomain: "employee-directory-65107.firebaseapp.com",
        databaseURL: "https://employee-directory-65107.firebaseio.com",
        projectId: "employee-directory-65107",
        storageBucket: "",
        messagingSenderId: "951782632710",
        appId: "1:951782632710:web:7ac631ca52688930"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // Initiate fields
    var database = firebase.database();

    var trCount = 0
    var trId = "table-row-"+trCount;
    
    $("#formSubmit").click(function (event) {
    
        console.log("blah");
    
        event.preventDefault();
    
        var employeeName_td = $("<td>");
        var role_td = $("<td>");
        var start_date_td = $("<td>");
        var months_worked_td = $("<td>");
        var monthly_rate_td = $("<td>");
        var total_billed_td = $("<td>");
    
        employee_name = $("#nameInput").val().trim();
        role = $("#roleInput").val().trim();
        start_date = $("#startDateInput").val().trim();
        // months_worked = $("#monthsInput").val().trim()
        monthly_rate = $("#rateInput").val().trim();
        total_billed = monthly_rate * 12;
        // total_billed = $("#billed").val().trim()
    
        employeeName_td.text(employee_name);
        role_td.text(role);
        start_date_td.text(start_date);
        months_worked_td.text("tbd");
        monthly_rate_td.text(monthly_rate);
        total_billed_td.text(total_billed);
    
        trId = "table-row-"+trCount;
    
        $("tbody").append("<tr id="+trId+"></tr>");
        $("#"+trId).append(employeeName_td, role_td, start_date_td, months_worked_td,monthly_rate_td,total_billed_td);
    

        database.ref().set({
            name: employee_name,
            role: role,
            months_worked: "tbd",
            rate: monthly_rate,
            total_billed: total_billed
        });

        trCount ++;
    
    });
    
});