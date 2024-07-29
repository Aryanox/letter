// document.querySelector('.heart').addEventListener('click', function() {
// 	this.classList.add('beat');
// 	setTimeout(function() {
// 	  window.location.href = 'newpage.html'; // Replace with your target URL
// 	}, 2000);
//   });


document.querySelector('.heart').addEventListener('click', function() {
	var heart = this;
	heart.classList.add('beat');
	setTimeout(function() {
		heart.classList.remove('beat');
		heart.classList.add('zoom');
	}, 2000);
	setTimeout(function() {
		window.location.href = 'https://Aryanox.github.io/letter/letter.html'; // Replace with your target URL
	}, 2500);
});
