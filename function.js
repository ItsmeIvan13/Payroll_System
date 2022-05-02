  // making function that will call to the button
  function getmyJob(){

    //declaring variable for name middle initial lastname
        var Firstname = document.getElementById('Fname');
        var Middlename = document.getElementById('Mname');
        var Lastname = document.getElementById('Lname');
        var Myinfo = document.getElementById('myinfo'); // declaring variable also for the output 

        //declaring variable for each job
    var SeniorProg = document.getElementById('job_Sprog');
    var JuniorProg = document.getElementById('job_Jprog');
    var WebDesigner = document.getElementById('job_Web');
    var DataAnalyst = document.getElementById('job_Data');
    var ProjectManager = document.getElementById('job_Pm');
    var Myinfo = document.getElementById('myinfo');
    var NumberDaysWorked = Number(document.getElementById('days_work').value); //declaring variable with getting the input number from the users
    var sss=0.05;
    var pagibig=0.05
    var philhealth=100;

    const middeNamePeriodCondition = () => {
        let middlename_period;
        if (!Middlename.value){
            middlename_period = " "
        } else {
            middlename_period = ". "
        }
        return middlename_period
    }

    const middlename_period = middeNamePeriodCondition();

    if (Firstname.value == '') {
        alert("Please fill up First name.")
    } else if (Lastname.value == ''){
        alert("Please fill up Last name.")
    } else {
        if(SeniorProg.checked == true){

            var Salary=2500; //salary each day of specific job
            var subtotal;
            var TotalSalaryDeduction;
            var total;
    
            Subtotal = Salary * NumberDaysWorked; //computation get the subtotal from salary each day times number of days worked of the user
    
            TotalSalaryDeduction = sss + pagibig + philhealth; // computation of total salary deduction
    
            total = Subtotal - TotalSalaryDeduction; // total of subtotal minus the total salary deductions
            
            //output
            Myinfo.innerHTML = "<br><br>" + Firstname.value + " " + Middlename.value + middlename_period + Lastname.value + "<br> Your Job is: " + SeniorProg.value +"<br><br> ----- DEDUCTION ----- <br> SSS: 5%<br> Pag ibig: 5%<br> Philhealth: 100 <br> -------------------- <br> Total Salary: "+  total.toFixed(0) + " " + "PHP";
        }
    
        else if(JuniorProg.checked == true){
            var Salary=1500;
        var subtotal;
        var TotalSalaryDeduction;
        var total;
    
        Subtotal = Salary * NumberDaysWorked;
    
        TotalSalaryDeduction = sss + pagibig + philhealth;
    
        total = Subtotal - TotalSalaryDeduction;
    
        Myinfo.innerHTML = "<br>" + Firstname.value + " " + Middlename.value + middlename_period + Lastname.value + "<br> Your Job is: " + JuniorProg.value +"<br><br> ----- DEDUCTION ----- <br> SSS: 5%<br> Pag ibig: 5%<br> Philhealth: 100 <br> -------------------- <br> Total Salary: "+  total.toFixed(0) + " " + "PHP";
        }
    
        else if(WebDesigner.checked == true){
            var Salary=1000;
            var subtotal;
            var TotalSalaryDeduction;
            var total;
    
            Subtotal = Salary * NumberDaysWorked;
    
            TotalSalaryDeduction = sss + pagibig + philhealth;
    
            total = Subtotal - TotalSalaryDeduction;
    
            Myinfo.innerHTML = "<br><br>" + Firstname.value + " " + Middlename.value + middlename_period + Lastname.value + "<br> Your Job is: " + WebDesigner.value +"<br><br> ----- DEDUCTION ----- <br> SSS: 5%<br> Pag ibig: 5%<br> Philhealth: 100 <br> -------------------- <br> Total Salary: "+  total.toFixed(0) + " " + "PHP";
        }
    
        else if(DataAnalyst.checked == true){
            var Salary=1200;
            var subtotal;
            var TotalSalaryDeduction;
            var total;
    
            Subtotal = Salary * NumberDaysWorked;
    
            TotalSalaryDeduction = sss + pagibig + philhealth;
    
            total = Subtotal - TotalSalaryDeduction;
    
            Myinfo.innerHTML = "<br><br>" + Firstname.value + " " + Middlename.value + middlename_period + Lastname.value + "<br> Your Job is: " + DataAnalyst.value +"<br><br> ----- DEDUCTION ----- <br> SSS: 5%<br> Pag ibig: 5%<br> Philhealth: 100 <br> -------------------- <br> Total Salary: "+  total.toFixed(0) + " " + "PHP";
        }
    
        else if(ProjectManager.checked == true){
            var Salary=5000;
            var subtotal;
            var TotalSalaryDeduction;
            var total;
    
            Subtotal = Salary * NumberDaysWorked;
    
            TotalSalaryDeduction = sss + pagibig + philhealth;
    
            total = Subtotal - TotalSalaryDeduction;
    
            Myinfo.innerHTML = "<br><br>" + Firstname.value + " " + Middlename.value + middlename_period + Lastname.value + "<br> Your Job is: " + ProjectManager.value +"<br><br> ----- DEDUCTION ----- <br> SSS: 5%<br> Pag ibig: 5%<br> Philhealth: 100 <br> -------------------- <br> Total Salary: "+  total.toFixed(0) + " " + "PHP";
        }
    
        else{ 
            alert("Click Choices above");
        }
        //condition if the user checked senior programming job it will true and proceed the total salary of user
    }
3}
/*
function Delete_Button(){
        var Firstname = document.getElementById('Fname').value = ""; // clear input in text box
        var Middlename = document.getElementById('Mname').value = "";
        var Lastname = document.getElementById('Lname').value = "";
        var Myinfo = document.getElementById('myinfo').innerHTML=""; // clear the output that not comming from the user
        var daysworked = document.getElementById('days_work').value ="";
        var job_Sprog = document.getElementById('job_Sprog').checked = false;
        var job_Jprog = document.getElementById('job_Jprog').checked = false;
        var job_Web = document.getElementById('job_Web').checked = false;
        var job_Data = document.getElementById('job_Data').checked = false;
        var job_Pm = document.getElementById('job_Pm').checked = false;
}*/