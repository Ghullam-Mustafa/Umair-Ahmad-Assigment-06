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