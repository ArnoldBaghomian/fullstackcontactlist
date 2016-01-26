// this will make an http request
// Will make a post request
// send 

'use strict';

$(document).ready(init);

function init(){
 $('#postnow').on('click',clickhandler)
 $('.nextpage').on('click',getUserInfo)

}

function clickhandler(e){
	e.preventDefault();

	var oneName = $('#firstname').val();
	var phone = $('#number').val();
	var email = $('#email').val();

	var myObj = {
		firstname:oneName,
		number:phone,
		mail:email
	};
	console.log(myObj)
$.post('/users/add', myObj)
	.success(function(data){
		
		console.log(data)
		window.replace = ('/addUser')
	
    })
}

function getUserInfo(e){
	var userToGet = ($(e.target).closest('tr').index());
	$.get(`/users/info/${userToGet}`).done(function(response){
		console.log(response)
		window.location = `/users/info/${userToGet}`;
	})

}


