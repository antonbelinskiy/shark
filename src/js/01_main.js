let wrapper = document.querySelector('.header-menu') // get wrapper of items
	wrapper.addEventListener('click', function(e){ // get Listener on wrapper
		if (e.target.classList.contains('dropdown')){ // if where we click on wrapper and if we target on elemtent
			const selected = this.querySelector('.selected');// check if we have square class selected
		if(selected) { // if we have selected
			selected.classList.remove('selected') // remove class from others
		}
		e.target.classList.add('selected') // add select class to target
	}
	})

let body = document.querySelector('body');

    body.addEventListener('click', function(e) {
        if (e.target.classList.contains('dropdown')){
        }
        else {
            let dropdowns = document.querySelectorAll('.dropdown');
            dropdowns.forEach(element => element.classList.remove('selected'))
        }
    })



	// let filterWrapper = document.querySelector('.coin-filter') // get wrapper of items
	// if(filterWrapper != null) {
	// 	filterWrapper.addEventListener('click', function(e){ // get Listener on wrapper
	// 		e.preventDefault()
	// 		if (e.target.classList.contains('coin-filter-item')){ // if where we click on wrapper and if we target on elemtent
	// 			const selected = this.querySelector('.active');// check if we have square class selected
	// 		if(selected) { // if we have selected
	// 			selected.classList.remove('active') // remove class from others
	// 		}
	// 		e.target.classList.add('active') // add select class to target
	// 	}
	// 	});
	// }
	let uploader = document.querySelector("#image-upload")

	if (uploader != null) {
		uploader.addEventListener("change", function () {
			if (this.files[0]) {
			  var fr = new FileReader();

			  fr.addEventListener("load", function () {
				document.querySelector(".image-upload").style.backgroundImage = "url(" + fr.result + ")";
				document.querySelector(".image-upload p").style.display = "none";

			  }, false);

			  fr.readAsDataURL(this.files[0]);
			}
		  });
	};

		$('#network').niceSelect();
		$('#date').niceSelect();
		$('#date2').niceSelect();

let burger = document.querySelectorAll('.burger, .close-btn');
let tabletMenu = document.getElementById('tablet-menu');
burger.forEach((e) => e.addEventListener('click', function() {
	tabletMenu.classList.toggle('open')
}))


let menuTitle = document.querySelectorAll('.tablet-menu-column--title')
menuTitle.forEach((e) => e.addEventListener('click', function() {
	e.classList.toggle('open');
	e.nextElementSibling.classList.toggle('open');
}) );


let togBtn = document.getElementById('togBtn');
let priceInputs = document.querySelectorAll('#Marketcap, #Price');

if(togBtn != null) {
	togBtn.addEventListener('click', function() {
		priceInputs.forEach((e) => e.classList.toggle('hidden'))
	})
}


