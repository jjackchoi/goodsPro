/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

/*topBtn*/
//버튼속성 가져오기
let topBtn = document.getElementById('top');
//top버튼 생성 and 숨기기
window.addEventListener('scroll', function(){
	if(window.scrollY>window.innerHeight){
		topBtn.classList.add('show');
	}else{
		topBtn.classList.remove('show');
	}
})
//top버튼 누를 시 맨위로
topBtn.addEventListener('click', function(e){
	e.preventDefault();
	window.scrollTo({top:0, behavior:"smooth"});
})