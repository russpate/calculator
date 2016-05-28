// $(document).ready(function(){
//   calcApp.init();
// });
//
// var calcString = "";
// var calcApp = {
//   init: function(){
//     calcApp.events();
//     calcApp.toPage();
//   },
//   events: function(){
//     $('#calc-main').on('click', 'span', calcApp.numLog);
//   },
//
//   toPage: function(arr){
//     $('#calc-main').html(templates.calc);
//   }
// };

$(document).ready(function(){
  //prevents the length of numbers from going outside the div, might remove this.
	var testNumLength = function(number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
	var number = "";
  var newnumber = "";
  var operator = "";
  var totaldiv = $("#total");
  totaldiv.text("0");

  //click funciton for numbers
  $("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totaldiv.text(number);
		testNumLength(number);
  });

  // click function for operators
  $("#operators > a").not("#equals").click(function(){
		operator = $(this).text();
		newnumber = number;
		number = "";
		totaldiv.text(operator);
  });

  // click function for clearing
  $("#clear,#clearall").click(function(){
		number = "";
		totaldiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newnumber = "";
		}
  });

  // click function for equals
  $("#equals").click(function(){
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
   testNumLength(number);
   number = "";
   newnumber = "";
   });

});
