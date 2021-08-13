/* .js files add interaction to your website */

var factList= [
  "As of today there have been more than 204 million cases worldwide with 4.32 million deaths.", 
  "Many people believe that getting the vaccine means you are being microchipped, however this false assumption is based on an incorrect understanding of medical-grade injection devices. According to University of Missouri Healthcare, the company who provides the syringes, Apiject Systems of America, has an optional version of its product that contains a microchip within the syringe label that helps providers confirm a vaccine dose’s origin. The chip itself is not injected into the person getting the vaccine.'",
"No matter your health status, you are still capapble of spreading and contracting the disease. Getting vaccinated will help protect you and your community.", "All COVID vaccines that are currently authorized in the U.S. are available for those 12 years and older for not cost."];

var fact= document.getElementById("fact");
var myButton= document.getElementById ("myButton");
var count=0;

myButton.addEventListener("click", displayFact);

function displayFact(){
 fact.innerHTML = factList[count];
 count++;
 if (count ==factList.length) {count =0;}
}





var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (factBtn) {

myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
