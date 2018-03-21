// 등차수열 초기값, 리밋값, 공차
// 1+3+5+....+
var arith =(x, y, z)=>{
	var  x = x*1, y = y*1, z = z*1;
	var sum = 0;
	var k = x;
	var str = "";
	sum = x;
	for(var i=1; i<y; i++) {
		k += z;
		sum += k;
	};
	return str+sum;
};

//스위치수열 초기값, 리밋값, 공차
var switchSeq =(x, y, z)=>{
	var  x = x*1, y = y*1, z = z*1;
	var SW = 0;
	var k = x;
	var sum = 0;
	var str = "";
	for(var i=1; i<=y; i++){
		if(SW == 0) {
			k += z;
			sum += k;
			SW=1;
		} else {
			k += z;
			sum -= k;
			SW=0;
		}
	};
	return str+sum;
};

// 등비수열
var geo =(x, y, z)=> {
	var  x = x*1, y = y*1, z = z*1;
	var k = x;
	var sum = x;
	var str = "";
	for(var i=1; i<y; i++){
		k *= z;
		sum += k;
	};
	return str+sum;
};

// 팩토리얼
var fact =(x, y)=>{
	var  x = x*1, y = y*1;
	var sum = 0;
	var k = x;
	var str = "";
	for(var i=1; i<=y; i++) {
		k *= i;
		sum += k;
	};
	return str+sum;
};

// 피보나치
var fibo=(x, y, z)=>{
	var  x = x*1, y = y*1, z = z*1;
	var a = x;
	var b = z;
	var c = a + b;
	var str = "";
	var sum = a+b;
	for(var i=1; i<y-1; i++){
		sum += c;
		a = b;
		b = c;
		c = a + b;
	};
	return str+sum;
};

var fiveByFive=()=>{
	var a = new Array();
	var o = null;
	var k = 1;
	for(var i=0; i<5; i++){
	    o = new Object();
	    o.a = k++;
	    o.b = k++;
	    o.c = k++;
	    o.d = k++;
	    o.e = k++;
	    a.push(o);
	}
	return JSON.stringify(a);
};
/*	var x = [
				{a : 1, b : 2, c : 3, d : 4, e : 5},
				{a : 6, b : 7, c : 8, d : 9, e : 10},
				{a : 11, b : 12, c : 13, d : 14, e : 15},
				{a : 16, b : 17, c : 18, d : 19, e : 20},
				{a : 21, b : 22, c : 23, d : 24, e : 25}
			];
	return x;*/



var matrixList=()=>{
	var x = ['기본 행렬','선택 정렬','버블 정렬','삽입 정렬','석차 구하기'];
	return x;
};

