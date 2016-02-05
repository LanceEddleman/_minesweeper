// base.js

// variables
  console.debug();

// Current Date
  var today = new Date();
  var viewToday = (
      (today.getMonth() + 1) + "/" +
      today.getDate() + "/" +
      today.getFullYear()
  );
  console.log('Today is: ' + viewToday);

// $(document).ready(function(){
//      $("button").click(function(){
//          $("p").toggle();
//      });
// });

var opt = 'hide';
function toggleDetails(opt) {
	if(opt == 'show') {
	    document.getElementById('design').style.display = 'block';
        document.getElementById('hide').style.display = 'block';
        document.getElementById('show').style.display = 'none';
	}
	if(opt == 'hide') {
        document.getElementById('show').style.display = 'block';
	    document.getElementById('design').style.display = 'none';
        document.getElementById('hide').style.display = 'none';
        opt = 'hide';
	}

}
