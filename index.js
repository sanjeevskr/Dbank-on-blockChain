import { dbank } from "../../declarations/dbank";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await dbank.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });
window.addEventListener("load",async function(){
  update();
});
document.querySelector("form").addEventListener("submit",async function(event){
  event.preventDefault();

  const button=event.target.querySelector("#submit-btn");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);
  
  button.setAttribute("disabled",true);

  if (document.getElementById("input-amount").value.length !=0){
    await dbank.topUp(inputAmount);
  }
  if (document.getElementById("withdrawal-amount").value.length !=0){
    await dbank.withdraw(outputAmount);
  }

  await dbank.compound();

  update();

  document.getElementById("withdrawal-amount").value="";
  document.getElementById("input-amount").value="";
  button.removeAttribute("disabled");
});

async function update(){
  const currentAmount= await dbank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount*100)/100;  
}
