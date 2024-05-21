let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney(){
   var enterName = document.getElementById("enterName").value;
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   
   myAccountBalance -= enterAmount;
document.getElementById("myAccountBalance").innerText = myAccountBalance;


   // Check if the entered amount exceeds the current balance
   if (enterAmount > myAccountBalance) {
      alert("Insufficient Balance.");
   } else {
      var findUserBankAccount = enterName + "BankBalance";
      var recipientAccountElement = document.getElementById(findUserBankAccount);

      if (recipientAccountElement) {
         var finalAmount = parseInt(recipientAccountElement.innerText) + enterAmount;
         myAccountBalance -= enterAmount;
         document.getElementById("myAccountBalance").innerText = myAccountBalance;
         recipientAccountElement.innerText = finalAmount;

         alert(`Successful Transaction !!  
         Rs${enterAmount} is sent to ${enterName}@gmail.com`);

         // Transaction history
         var createPTag = document.createElement("li");
         var textNode = document.createTextNode(`Rs${enterAmount} is credited to recipient with E-mail id ${enterName}@gmail.com on ${Date()}.`);
         createPTag.appendChild(textNode);
         var element = document.getElementById("transaction-history-body");
         element.insertBefore(createPTag, element.firstChild);
      } else {
         alert("Recipient account not found.");
      }
   }
}
