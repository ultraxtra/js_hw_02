
var salary = prompt ("Enter your salary");
var salary1 = parseInt(salary);
var premium = 0.15;
var taxes = 0.1;
var spends = 190;

var totalPremium = +salary * +premium + +salary;
var totalTaxes = +totalPremium - +totalPremium * +taxes;
var leftMoney = +totalTaxes - +spends;

alert(`Your have ${totalTaxes} left`)
