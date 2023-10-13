/*계산기 호출버튼*/
//토글기능으로 계산기버튼 누르면 div 보이기 <-> 숨기기
var cBack = document.getElementById('calBack');
function calculate(){
	if(cBack.style.display == 'none'){
		cBack.style.display = 'block';
	}else{
		cBack.style.display = 'none';
	}
}
/*계산기*/

//체크박스 값들 가져오기
var lGift = document.getElementById('lotGift');
var lSpcl = document.getElementById('lotSpecial');
var lHotel = document.getElementById('lotHotel');
var sGift = document.getElementById('shinGift');
var hGift = document.getElementById('hyunGift');
var pGift = document.getElementById('peoGift');
var gift = [lGift, lSpcl, lHotel, sGift, hGift, pGift]; //6개

//체크박스 클릭 시 div호출
function check(){
	for(var i = 0; i<gift.length; i++){
		var giftDiv = document.getElementById(gift[i].value);
		if(gift[i].checked){
			console.log(gift[i].value);
			giftDiv.classList.add('show');
		}else{
			giftDiv.classList.remove('show');
		}
	}
}

/*롯데상품권*/
var lTen = document.getElementById('lotTen');
var lFifty = document.getElementById('lotFifty');
var lHund = document.getElementById('lotHund');
var lFiveHund = document.getElementById('lotFiveHund');
var lList = [lTen, lFifty, lHund, lFiveHund]; // 4개
var lSell = document.getElementById('lotSell');
var lBuy = document.getElementById('lotBuy');

//롯데상품권 계산
function lotCal(){
	if(lSell.checked==true){
		var result = 10000*(1-0.05)*lTen.value + 50000*(1-0.0383)*lFifty.value + 100000*(1-0.0383)*lHund.value + 500000*(1-0.0383)*lFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('lotSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(lBuy.checked==true){
		var result = 10000*(1-0.037)*lTen.value + 50000*(1-0.037)*lFifty.value + 100000*(1-0.037)*lHund.value + 500000*(1-0.037)*lFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('lotBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//롯데상품권 수량 초기화
function lotRe(){
	for(var i = 0; i<lList.length; i++){
		lList[i].value;
		console.log(lList[i].value);
		lList[i].value = null;
	}
	document.getElementById('lotSellRlt').innerHTML=null;
	document.getElementById('lotBuyRlt').innerHTML=null;
}

/*롯데스페셜카드*/
var lSpclHund = document.getElementById('lotSpclHund');
var lSpclFiveHund = document.getElementById('lotSpclFiveHund');
var lSplList = [lSpclHund, lSpclFiveHund]; // 2개
var lSpclSell = document.getElementById('lotSpclSell');
var lSpclBuy = document.getElementById('lotSpclBuy');

//롯데스페셜카드 계산
function lotSpclCal(){
	if(lSpclSell.checked==true){
		var result = 100000*(1-0.041)*lSpclHund.value + 500000*(1-0.041)*lSpclFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('lotSpclSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(lSpclBuy.checked==true){
		var result = 100000*(1-0.039)*lSpclHund.value + 500000*(1-0.039)*lSpclFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('lotSpclBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//롯데스페셜카드 수량 초기화
function lotSpclRe(){
	for(var i = 0; i<lSplList.length; i++){
		lSplList[i].value;
		console.log(lSplList[i].value);
		lSplList[i].value = null;
	}
	document.getElementById('lotSpclSellRlt').innerHTML=null;
	document.getElementById('lotSpclBuyRlt').innerHTML=null;
}

/*롯데호텔*/
var lHtlTx = document.getElementById('lotHtlTx');
var lHtlUnTx = document.getElementById('lotHtlUnTx');
var lHtlList = [lHtlTx, lHtlUnTx]; // 2개
var lHtlSell = document.getElementById('lotHtlSell');
var lHtlBuy = document.getElementById('lotHtlBuy');

//롯데호텔 계산
function lotHtlCal(){
	if(lHtlSell.checked==true){
		var result = 100000*(1-0.048)*lHtlTx.value + 100000*(1-0.048)*lHtlUnTx.value;
		result = result.toLocaleString();
		document.getElementById('lotHtlSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(lHtlBuy.checked==true){
		var result = 100000*(1-0.045)*lHtlTx.value + 100000*(1-0.045)*lHtlUnTx.value;
		result = result.toLocaleString();
		document.getElementById('lotHtlBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//롯데호텔 수량 초기화
function lotHtlRe(){
	for(var i = 0; i<lHtlList.length; i++){
		lHtlList[i].value;
		console.log(lHtlList[i].value);
		lHtlList[i].value = null;
	}
	document.getElementById('lotHtlSellRlt').innerHTML=null;
	document.getElementById('lotHtlBuyRlt').innerHTML=null;
}

/*신세계상품권*/
var sFive = document.getElementById('shinFive');
var sTen = document.getElementById('shinTen');
var sFifty = document.getElementById('shinFifty');
var sHund = document.getElementById('shinHund');
var sFiveHund = document.getElementById('shinFiveHund');
var sList = [sFive, sTen, sFifty, sHund, sFiveHund]; // 5개
var sSell = document.getElementById('shinSell');
var sBuy = document.getElementById('shinBuy');

//신세계상품권 계산
function shinCal(){
	if(sSell.checked==true){
		var result = 5000*(1-0.055)*sFive.value + 10000*(1-0.05)*sTen.value + 50000*(1-0.0405)*sFifty.value + 100000*(1-0.0405)*sHund.value + 500000*(1-0.0405)*sFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('shinSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(sBuy.checked==true){
		var result = 5000*(1-0.038)*sFive.value + 10000*(1-0.038)*sTen.value + 50000*(1-0.038)*sFifty.value + 100000*(1-0.038)*sHund.value + 500000*(1-0.038)*sFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('shinBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//신세계상품권 수량 초기화
function shinRe(){
	for(var i = 0; i<sList.length; i++){
		sList[i].value;
		console.log(sList[i].value);
		sList[i].value = null;
	}
	document.getElementById('shinSellRlt').innerHTML=null;
	document.getElementById('shinBuyRlt').innerHTML=null;
}

/*현대상품권*/
var hFive = document.getElementById('hyunFive');
var hTen = document.getElementById('hyunTen');
var hFifty = document.getElementById('hyunFifty');
var hHund = document.getElementById('hyunHund');
var hFiveHund = document.getElementById('hyunFiveHund');
var hList = [hFive, hTen, hFifty, hHund, hFiveHund]; // 5개
var hSell = document.getElementById('hyunSell');
var hBuy = document.getElementById('hyunBuy');

//현대상품권 계산
function hyunCal(){
	if(hSell.checked==true){
		var result = 5000*(1-0.055)*hFive.value + 10000*(1-0.05)*hTen.value + 50000*(1-0.04)*hFifty.value + 100000*(1-0.04)*hHund.value + 500000*(1-0.04)*hFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('hyunSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(hBuy.checked==true){
		var result = 5000*(1-0.037)*hFive.value + 10000*(1-0.037)*hTen.value + 50000*(1-0.037)*hFifty.value + 100000*(1-0.037)*hHund.value + 500000*(1-0.037)*hFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('hyunBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//현대상품권 수량 초기화
function hyunRe(){
	for(var i = 0; i<hList.length; i++){
		hList[i].value;
		console.log(hList[i].value);
		hList[i].value = null;
	}
	document.getElementById('hyunSellRlt').innerHTML=null;
	document.getElementById('hyunBuyRlt').innerHTML=null;
}

/*국민관광상품권*/
var pFifty = document.getElementById('pplFifty');
var pHund = document.getElementById('pplHund');
var pFiveHund = document.getElementById('pplFiveHund');
var pList = [pFifty, pHund, pFiveHund]; // 3개
var pSell = document.getElementById('pplSell');
var pBuy = document.getElementById('pplBuy');

//국민관광상품권 계산
function pplCal(){
	if(pSell.checked==true){
		var result = 50000*(1-0.0375)*pFifty.value + 100000*(1-0.0375)*pHund.value + 500000*(1-0.0375)*pFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('pplSellRlt').innerHTML='매입금액 '+result+'원';
	}else if(pBuy.checked==true){
		var result = 50000*(1-0.034)*pFifty.value + 100000*(1-0.034)*pHund.value + 500000*(1-0.034)*pFiveHund.value;
		result = result.toLocaleString();
		document.getElementById('pplBuyRlt').innerHTML='판매금액 '+result+'원';		
	}
}

//국민관광상품권 수량 초기화
function pplRe(){
	for(var i = 0; i<pList.length; i++){
		pList[i].value;
		console.log(pList[i].value);
		pList[i].value = null;
	}
	document.getElementById('pplSellRlt').innerHTML=null;
	document.getElementById('pplBuyRlt').innerHTML=null;
}