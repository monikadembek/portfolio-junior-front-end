var triggerBtn = document.querySelectorAll('.modal-trigger');
var btnReadMore = document.querySelector('.btn-more');
var btnReadLess = document.querySelector('.btn-less');
var aboutFirst = document.querySelector('.modal-about--first-page');
var aboutSecond = document.querySelector('.modal-about--second-page');


for (var i = 0; i < triggerBtn.length; i++) {
	triggerBtn[i].addEventListener('click', function(e){
		e.preventDefault();
		var id = this.dataset.modal; 
		var modal = document.getElementById(id);
		modal.classList.add('modal-show');
	});	
}



var btnClose = document.querySelectorAll('.modal__close');

for (var i = 0; i < btnClose.length; i++) {
	btnClose[i].addEventListener('click', function() {
		var openedModal = document.querySelector('.modal-show');
		openedModal.classList.remove('modal-show');
	});
}





btnReadMore.addEventListener('click', function(){
	aboutFirst.classList.toggle('u-hide');
	aboutSecond.classList.toggle('u-hide');
});


btnReadLess.addEventListener('click', function(){
	aboutFirst.classList.remove('u-hide');
	aboutSecond.classList.add('u-hide');
});