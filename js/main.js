$(document).ready(function(){
  calcApp.init();
});

var number = "";
var newnumber = "";
var operator = "";
var totaldiv = $("#total");

var calcApp = {
  init: function(){
    calcApp.events();
    calcApp.totalReset();
  },
  events: function(){
    //events for numbers
    $("#numbers > a").not("#clear,#clearall").on("click", calcApp.getNumbers);
    // events for operators
    $("#operators > a").not("#equals").on("click", calcApp.getOperators)
    // click function for clearing
    $("#clear,#clearall").on("click", calcApp.clearFunc);
    // click function for equals
    $("#equals").on("click", calcApp.equalFunc);
  },
  totalReset: function(){
      return totaldiv.text("0");
  },
  getNumbers: function(event){
    event.preventDefault();
    number += $(this).text();
    totaldiv.text(number);
  },
  getOperators: function(event){
    event.preventDefault();
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text(operator);
  },
  clearFunc: function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
  },
  equalFunc: function(){
   if (operator === "+"){
     number = (parseInt(number, 10) + parseInt(newnumber,10)).toString(10);
   } else if (operator === "-"){
     number = (parseInt(newnumber, 10) - parseInt(number,10)).toString(10);
   } else if (operator === "/"){
     number = (parseInt(newnumber, 10) / parseInt(number,10)).toString(10);
   } else if (operator === "*"){
     number = (parseInt(newnumber, 10) * parseInt(number,10)).toString(10);
   }
   totaldiv.text(number);
   number = "";
   newnumber = "";
   }
};
