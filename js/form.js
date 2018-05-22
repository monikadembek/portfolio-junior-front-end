window.addEventListener("load", function() {

	function submitForm() {

		submitBtn.disabled = true;
		status.innerHTML = "please wait...";

		var formdata = new FormData();
		formdata.append("topic", topic.value);
		formdata.append("email", email.value);
		formdata.append("message", message.value);

		var ajax = new XMLHttpRequest();
		ajax.open("POST", "http://front-end.minadesign.pl/portfolio-form-script/send-form.php");
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
				if (ajax.responseText == "success") {
					form.innerHTML = '<h2 class="heading-2">Thanks, your message has been sent</h2>';
				} else {
					status.innerHTML = ajax.responseText;
					submitBtn.disabled = false;
				}
			}
		}

		ajax.send(formdata);

	}

	var form = document.getElementById("form");
	var submitBtn = form.querySelectorAll('input[type="submit"]');
	var status = document.getElementById('status');

	form.addEventListener('submit', function(e){
		e.preventDefault();
		submitForm();
	});


});

	