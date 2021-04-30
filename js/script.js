// Your JS code here
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic"; //default subcription
var subDuration = "1"; //default duration month

//function to access subscription selection
subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  //console.log(subType);
  updateSubscriptionDiv();
});
//function to access duration selection
subDurationElement.addEventListener("change", function (e) {
  subDuration = Number(e.target.value);
  //console.log(subDuration);
  updateSubscriptionDiv();
});
//function to calculate cost & display total cost to user
var updateSubscriptionDiv = function () {
  var monthlyCost = 5; //default basic subscription cost
  if (subType === "standard") {
    monthlyCost = 7;
  } else if (subType === "premium") {
    monthlyCost = 10;
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} month ${subType} plan for $${total}.`;
};
