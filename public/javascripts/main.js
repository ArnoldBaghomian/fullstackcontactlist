// this will make an http request
// Will make a post request
// send 

$(document).ready(init);

function init(){
 $('#postnow').on('click',clickhandler)

}

function clickhandler(e){
	e.preventDefault();

	var oneName = $('#firstname').val();
	var phone = $('#number').val();
	var email = $('#mail').val();

	var myObj = {
		firstname:oneName,
		number:phone,
		mail:email
	};

$.post('/addUser', myObj)
	.success(function(data){
		
		console.log(data)
		window.replace = ('/addUser')
	
    })
}
