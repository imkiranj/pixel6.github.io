// form validation start//
 function validation() {
      let name = document.forms["loanForm"]["userName"].value;
        let arr = name.split(" ");
        if(arr.length > 2) {
            alert("Please enter valid name");
            return false;
        }

           arr.forEach ((ele) => {
            if(ele.length < 4) {
            alert("please enter valid name.");
               return false;
           }
        })

       
    let email = document.forms["loanForm"]["email"].value;
    if (email.search("@") == -1) {

        alert ("please enter valid email.");
         return false;

    }


    localStorage.setItem('name',name);
    localStorage.setItem('email',email)

       let pan = document.forms["loanForm"]["panNumber"].value;
     
       var panPat = /^([a-zA-Z]{5})(\d{4})([a-zA-Z]{1})$/ ;
    
        if(pan.search(panPat) == -1) { 

       alert ("Invalid Pan Number."); 

           return false;
    }
       
    let loan = document.forms["loanForm"]["Loan"].value;

     if (loan.length > 9) {

        alert ("maximum limit exceed.");

        return false;
     }
     
        
    let input_val = document.getElementById("input_val").value;
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
       let number1 = num1.innerText;
        let number2 = num2.innerText;
        let sum_result = parseInt(number1) + parseInt(number2);

            let res = parseInt(input_val);

            if (res == sum_result) {
             alert("correct captcha.Form Submitted!");


             }else{

            alert("incorrect captcha.please try again");
            loading();
              
            return false;
           }
   

 }
 //form Validation ends//
     
     // OTP validation starts //
   function passvalue()
   {
    var firstname=document.getElementById("txt").value;
    localStorage.setItem("textvalue",firstname);
    return false;
   }

  function clickEvent(first,last){
            if (first.value.length){
                document.getElementById(last).focus();
            }
        }

         
    let OTP= '';
    function generateOTP() {
  var digits = '0123456789';
  
  for (let i = 0; i < 4; i++ ) {
   OTP += digits[Math.floor(Math.random() * 10)];
   }
  return OTP;
    }
    let counter = 0;
    function test() {
        let inpNumber = document.getElementById("otp_inp").value;
        if (counter<=3) {

        if(inpNumber == OTP) {
        alert("submitted");
         window.location.href="http://pixel6.co";
          }else {
        alert("Please enter valid OTP.");
            counter++;
        return false;
      }} else {
        alert("error 404(page not found)"); 
         window.location.href="http://pixel6.co";
           
            console.log(counter)
          }
          
}          
          console.log(generateOTP());

          // OTP validation ends //
              
 function loading() {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

         
        num1.innerText = Math.floor(Math.random() * 10);
        num2.innerText = Math.floor(Math.random() * 10);

        let number1 = num1.innerText;
        let number2 = num2.innerText;
        
 }
 

document.getElementById('name').innerText=localStorage.getItem('name');
document.getElementById('email').innerText=localStorage.getItem('email');
  
