var triggerBtn = document.querySelector('.modal-trigger');


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