// ---------------------value------------------------------
   let inputValue = document.getElementById('data').value

// -------------------------------------------------------------

let rightNowDate = new Date();
console.log(rightNowDate.getDay());
// rightNowDate = rightNowDate.toDateString()
document.getElementById('current').innerHTML = rightNowDate.getDay();
// ---------------------------------------getNameofToday---------------------------------------------------------
    document.getElementById('getNameofToday').onclick = function () {
        let rightNow = new Date();
        console.log(rightNow);
        let theDay = rightNow.getDay();
        console.log(theDay);
        let nameofToday = daysName[theDay]
        showOutput(nameofToday)
    }
// ---------------------------------calculateDaysPassedSinceIBorn---------------------------------
    document.getElementById('calculateDaysPassedSinceIBorn').onclick = function () {
    let dob =  input();
    console.log(dob);
    if (!dob.length) {
        Toastify({
            text: "Enter your Date of Birth",
            className: "info",
            newWindow: true,
            close: true,
            style: {
              background:"linear-gradient(to right, #0009b, #96c93d) ",
            }
          }).showToast();
    }

    let today = new Date();
    let bornDate = new Date(dob);
    console.log(today);
    console.log(bornDate);
    1

    let todaytime = today.getTime();
    let bornDateTime = bornDate.getTime();
    console.log(todaytime);
    console.log(bornDateTime);

    let msdiff = todaytime - bornDateTime;
    console.log(msdiff);
    let daysdiff = (msdiff / (1000*60*60*24));
    console.log(daysdiff);
    let html = Math.floor(daysdiff) + " days have been passed since you born"
    console.log(daysdiff);
    showOutput(html)

    }
// ------------------------------------whenIsyourNextBirthday------------------------
    document.getElementById('whenIsyourNextBirthday').onclick = function () {
        let dob = input();
        if (!dob) {
            Toastify({
                text: "Enter your future birthday",
                className: "info",
                newWindow: true,
                close: true,
                style: {
                  background: "linear-gradient(to right, #00000, #96c93d)",
                }
              }).showToast();  
        }

        let today = new Date();
        let nextBirthdayDate = new Date (dob);

        let msdiff = nextBirthdayDate.getTime() - today.getTime() ;

        let daymsdiff = (msdiff/ (1000 * 60 * 60 *24));

        console.log(daymsdiff);
        let html = "Your next birthday is " + Math.floor(daymsdiff)  + "days away"
        showOutput(html)
    }
// ----------------------------greetUser------------------------
function greetUser(username) {
    showOutput( username)
}
document.getElementById('greetUser').onclick = function () {
    let username = prompt("Enter your name");
    let now = new Date();
    let hour = now.getHours();

    let greetingMessage = "Good ";
    if (hour >= 4 && hour < 12) {
        greetingMessage += "Morning"
    }else if (hour >= 12 && hour < 17) {
        greetingMessage += "AfterNoon"
    }else if (hour >= 17 && hour < 20) {
        greetingMessage += "Evening"
    }else{
        greetingMessage += "Night"
    }

    let msg = greetingMessage + " " + username
    greetUser(msg);
    tellTime();
}
// -----------------------tellTime1---------------------------------
function tellTime1() {
    tellTime()
}
// -----------------------tellTime2---------------------------------
function tellTime2() {
    tellTime()
}
// -----------------------tellTime3---------------------------------
function tellTime3() {
    tellTime()
}
// ------------------------calculateTax()-----------------------------------
    function calculateTaxBtn() {
        let  price =  +prompt("Enter Price");
        let  taxRate = 17 ;
        let tax = calculateTax(price,taxRate)
        let html = "Tax:" + tax;
        showOutput(html) 
    }
    function calculateTax(price,taxRate) {
        var tax = price * taxRate / 100 ;
        return tax
    }

// =======================================calculateTotalPrice================
function calculateTotal(price) {
    if (price < 1000) {
        var taxRate = 8 ;
    }else  {
        var taxRate = 16 ; 
    }

    var tax  = calculateTax(price,taxRate)

    var total = price + tax;

    return total;
}
// =================================calculateTotalPriceBtn=====================
function calculateTotalPriceBtn(){
    var price = +prompt("Enter Price")

    if(!price){
        Toastify({
            text: "Please enter price ",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #ff0000, #000)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return
    }
    var total = calculateTotal(price);
    let html = "Total" + Math.round(total);
    showOutput(html)
}
// ---------------------Tell Time -----------------------------------------------
    function tellTime() {
        let now = new Date();
        let theHr = now.getHours();
        let theMin = now.getMinutes();
        let theSec = now.getSeconds();

        output.innerHTML += "<br>You clicked the button @ " + theHr + ":" + theMin + ":" + theSec   }
// -----------------------------------------------------------------------------------

    let daysName = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    console.log(daysName[rightNowDate.getDay()]);
// ----------------------input erase ------------------------
document.getElementById('erase').onclick = function () {
    document.getElementById('data').value = "";
}

// -----------------------output--------------------
document.getElementById('Clean').onclick = function () {
    let outputBoxHtml =  document.getElementById('output').innerHTML = "" ;
 
    if (!outputBoxHtml.length) {
     Toastify({
         text: "It's already empty",
         className: "info",
         newWindow: true,
         close: true,
         style: {
           background: "linear-gradient(to right, #00000, #96c93d)",
         }
       }).showToast();
    }else{
     clearOutput();
     Toastify({
         text: "output result has been cleard",
         className: "info",
         newWindow: true,
         close: true,
         style: {
           background: "linear-gradient(to right, #0009b, #96c93d)",
         }
       }).showToast();
    }
 }
//  -------------------------showOutput-----------------------------------
 function showOutput(output) {
    document.getElementById('output').innerHTML = output
 }

//  --------------------------showOutput--------------------------
// function input() {
//    return someText = document.getElementById('data').value ;
// }
// function lll() {
//     var Currenttime  = new Date()
// date = Currenttime.getHours()
// console.log(date);
// if (date >= 0 && date <= 11) {
//     alert("good morning");
// }else if (date >= 11 && date <= 18 ) {
//     alert("good evening");
// }else  {
//     alert("good evening");
// }
// }
// let gggg = lll()
// console.log(gggg);

// // ---------------------
// function getTimeOfDay() {
//     var currentTime = new Date();
//     var hours = currentTime.getHours();
  
//     if (hours >= 1 && hours <= 11) {
//       return "Good morning";
//     } else if (hours >= 11 && hours <= 18) {
//       return "Good afternoon";
//     } else {
//       return "Good night";
//     }
//   }
  
//   // Usage
//   var greeting = getTimeOfDay();
//   console.log(greeting);
  