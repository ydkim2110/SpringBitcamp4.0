var app = app || {};
var route = route || {};
app = (()=>{
	var init =x=>{
		onCreate(x);
		setContentView(x);
	};
	var onCreate =x=>{
		route.init(x);
	};
	var setContentView =()=>{
		alert(route.$());
		$('#wrapper').empty();
		app.algorithm.init();
	};
	var test2 =()=>{};
	return { //클로저
		init : init
	};
})(); //IIFE(이파이) 즉시 실행함수 패턴


app.algorithm = (()=>{
	var init =()=> {
		onCreate();
		setContentView();
	};
	var onCreate =()=> {
		
	};
	var setContentView =()=>{
		$('#wrapper').html('<h1>Hello AJAX~!!</h1>');
	};
	return {
		init:init
	};
})();


route =(()=>{
	var init=x=>{
		sessionStorage.setItem('x', x);
	}; 
	var $=()=> {return sessionStorage.getItem('x')}
	var onCreate =()=>{};
	var setContentView =()=>{};
	return {init:init, $:$};
})();