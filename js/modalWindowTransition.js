var triggerBtn = document.querySelector('.modal-trigger');
var btnReadMore = document.querySelector('.btn-more');
var btnReadLess = document.querySelector('.btn-less');
var aboutFirst = document.querySelector('.modal-about--first-page');
var aboutSecond = document.querySelector('.modal-about--second-page');



triggerBtn.addEventListener('click', function(e){
	e.preventDefault();
	var id = this.dataset.modal; 
	var modal = document.getElementById(id);
	modal.classList.add('modal-show');
});


var btnClose = document.querySelector('.modal__close');

btnClose.addEventListener('click', function() {
	var openedModal = document.querySelector('.modal-show');
	openedModal.classList.remove('modal-show');
});





btnReadMore.addEventListener('click', function(){
	aboutFirst.classList.toggle('hide');
	aboutSecond.classList.toggle('hide');
});


btnReadLess.addEventListener('click', function(){
	aboutFirst.classList.toggle('hide');
	aboutSecond.classList.toggle('hide');
});