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
function input() {
   return someText = document.getElementById('data').value ;
}