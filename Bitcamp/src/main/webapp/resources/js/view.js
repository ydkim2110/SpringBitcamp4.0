var adminView=x=>{
	return '		<h1>회원관리</h1>'
	+'		<table class="table table-bordered">'
	+'			<tr>'
	+'				<td>'
	+'					테이블 생성'
	+'				</td>'
	+'				<td>'
	+'					준비중'
	+'				</td>'
	+'				<td>'
	+'					준비중'
	+'				</td>'
	+'			</tr>'
	+'			<tr>'
	+'				<td>'
	+'					준비중'
	+'				</td>'
	+'				<td>'
	+'					준비중'
	+'				</td>'
	+'				<td id="td-table">테이블 생성'
	+'						<select  name="table_name" id="create_table">'
	+'							<option value="member">member</option>'
	+'							<option value="attend">attend</option> '
	+'							<option value="bank">bank</option> '
	+'							<option value="sktelecom">sktelecom</option> '
	+'						</select> <br />'
	+'						<input type="hidden" name="cmd" value="create_table" />'
	+'						<input type="hidden" name="dir" value="admin" />'
	+'						<input type="hidden" name="page" value="main" />'
	+'				</td>'
	+'			</tr>'
	+'		</table>		';
}

var joinView=x=>{
	return '<div class="container" style="margin-top: 50px">'
	+'<div class="jumbotron">'
	+'<table class="table">'
	+'	<tr>'
	+'		<td>아이디</td>'
	+'		<td>'
	+'			<div class="input-group">'
	+'				<input id="id" class="form-control" name="id" type="text"/>'
	+'				<span class="input-group-btn">'
	+'					<button class="btn btn-secondary" type="button">중복확인</button>'
	+'				</span>'
	+'			</div>'
	+'		</td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>비밀번호</td>'
	+'		<td><input id="pass" class="form-control" type="password" name="pass"/></td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>비밀번호확인</td>'
	+'		<td><input class="form-control" type="password" name="passconfirm" /></td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>이름</td>'
	+'		<td><input id="name" class="form-control" type="text" name="name"/></td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>가입일</td>'
	+'		<td><input class="form-control" type="date" name="date"/></td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>주민번호</td>'
	+'		<td><input class="form-control" type="text" name="ssn"/></td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>전화번호</td>'
	+'		<td>'
	+'			<input type="radio" name="company" value="SKT" checked> SKT'
	+'			<input type="radio" name="company" value="KT"> KT'
	+'			<input type="radio" name="company" value="LG"> LG '
	+'			<select id="combo_box">'
	+'				<option >010</option>'
	+'			</select>'
	+'			<input pattern="[0-9]{4}" type="tel" name="phone" style="height: 25px" />'
	+'		</td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>이메일</td>'
	+'		<td>'
	+'			<div class="input-group">'
	+'			<input class="form-control" aria-label="Text input with dropdown button" type="email" name="email" />'
	+'				<div class="input-group-btn">'
	+'					<button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" '
	+'					aria-haspopup="true" aria-expanded="false">'
	+'					Email'
	+'					</button>'
	+'				        <div class="dropdown-menu dropdown-menu-right">'
	+'				          <ul>'
	+'				          <li><a class="dropdown-item" href="#">Action</a></li>'
	+'				        </ul>'
	+'				        </div>'
	+'				</div>'
	+'			</div>'
	+'		</td>'
	+'	</tr>'
	+'	<tr>'
	+'		<td>프로필사진</td>'
	+'		<td>'
	+'			<div class="input-group">'
	+'				<input id="profile" class="form-control" name="profile" type="text"/>'
	+'				<span class="input-group-btn">'
	+'					<button class="btn btn-secondary" type="button">업로드</button>'
	+'				</span>'
	+'			</div>'
	+'		</td>'
	+'		'
	+'	</tr>'
	+'	<tr>'
	+'		<td>주소</td>'
	+'		<td>'
	+'			<div class="input-group">'
	+'				<input id="addr" class="form-control" name="addr" type="text"/>'
	+'				<span class="input-group-btn">'
	+'					<button class="btn btn-secondary" type="button">주소검색</button>'
	+'				</span>'
	+'			</div>'
	+'		</td>'
	+'	</tr>'
	+'</table>'
	+'<br />'
	+'<div class="text-center">'
	+'	<button id="confirm-btn" class="btn btn-danger"> 확인 </button> &nbsp;&nbsp;&nbsp; '
	+'	<button id="cancel-btn" class="btn btn-primary"> 취소 </button>'
	+'</div>'
	+'</div>'
	+'</div>';
}

var fileUploadView=x=>{
	return '  <div class="row">'
	+'	  <div class="text-center">'
	+'		  <h4 style="color: purple; font-size: 40px">File Upload</h4>'
	+'	  </div>'
	+'	  <div class="text-center">'
	+'	  	<span class="glyphicon glyphicon-sort fa-5x" style="font-size:20px;"></span>'
	+'	  </div><br />'
	+'  </div>'
	+'  <div class="row" style="padding-left: 40px; padding-right: 40px">'
	+'	  <div id="div-input-fileupload" class="form-group">'
	+'	  </div>'
	+'  </div>'
	+'   <div class="row">'
	+'	  <div id="btn-group" class="btn-group pull-right" style="margin-right: 40px">'
	+'	  </div>'
	+'	</div>';
}

var boardWriteView=x=>{
	return '<style>'
	+'    .col-sm-4{'
	+'        text-align: right'
	+'    }'
	+'    .form-control {'
	+'    	background-color: #eeeeee;'
	+'    }'
	+'</style>'
	+'    <h2>글쓰기</h2><br/>'
	+'    <div id="'+x.id+'" class="'+x.clazz+'">'
	+'        <label for="name">작성자</label>'
	+'        <input id="input-name" type="text" class="form-control"><br/>'
	+'        <label for="title">제목</label>'
	+'        <input id="input-title" type="text" class="form-control"><br/>'
	+'        <label for="comment">내용</label><br />'
	+'        <textarea id="input-content" class="form-control" rows="15" >'
	+'        </textarea><br />'
	+'        <div class="">'
	+'        </div>'
	+'    </div><br />'
	+'    <div class="row">'
	+'        <div class="col-sm-8"></div>'
	+'        <div class="col-sm-4">'
	+'            <div id="div-btn-group" class="btn-group">'
	+'            </div>'
	+'        </div>'
	+'    </div>'
	+'</div>';
};

var shortText=x=>{
	var length = 5;
	var t = x.json;
	console.log(t);
	console.log(t.length);
	if(t.length > length) {
		t = t.substr(0, length)+'...';
	}
	console.log(t);
	return t;
}

var aboutView=x=>{
	return ''
	+'    <div class="container">'
	+'            <form>'
	+'                <div class="form-group">'
	+'                    <label>siteName</label>'
	+'                    <input type="text" id="siteName" class="form-control">'
	+'                </div>'
	+'                <div class="form-group">'
	+'                    <label>siteUrl</label>'
	+'                    <input type="text" id="siteUrl" class="form-control">'
	+'                </div>'
	+'            </form>'
	+'    </div>'
	+'    <div class="container">'
	+'            <div id="results"></div>'
	+'    </div>';
}

var myPageView=x=>{
	return '<div id="" class="container" style="padding-bottom: 0px">'
	+'    <h3>회원정보</h3><hr />'
	+'</div>'
	+'<div class="container">'
	+'<div class="jumbotron example z-depth-5">'
	+'<div class="row">'
	+'<div class="col-sm-2">'
	+'<div class="thumbnail" style="padding: 10px">'
	+'    <img src="'+$.image()+'/default-profile.png" width="170px" height="170px" alt="" /><br />'
	+'    <div class="text-center">'
	+'        <button class="btn btn-basic">사진 수정</button>'
	+'    </div>'
	+'</div>'
	+'</div>'
	+'<div class="col-sm-10">'
	+'<div class="thumbnail" style="padding: 10px">'
	+'    <table id="bitc_table" class="table">'
	+'        <tr id="bitcamp_profile_table tr">'
	+'            <td >ID</td>'
	+'            <td >'+x.id+'</td>'
	+'            <td >생년</td>'
	+'            <td >'+x.ssn+'</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >Password</td>'
	+'            <td >'+x.pass+'</td>'
	+'            <td >전화번호</td>'
	+'            <td id="td-phone">'
	+'            </td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >이름</td>'
	+'            <td >'+x.name+'</td>'
	+'            <td >이메일</td>'
	+'            <td >'+x.email+'</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >성별</td>'
	+'            <td >남자</td>'
	+'            <td >주소</td>'
	+'            <td >'+x.addr+'</td>'
	+'        </tr>'
	+'        <tr>'
	+'            <td >계좌번호</td>'
	+'            <td ></td>'
	+'            <td >고객번호</td>'
	+'            <td ></td>'
	+'        </tr>'
	+'    </table>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="text-center">'
	+'    <button class="btn btn-primary" id="update-btn">수정</button>&nbsp;&nbsp;&nbsp;'
	+'    <button class="btn btn-danger" id="drop-btn">탈퇴</button>&nbsp;&nbsp;&nbsp;'
	+'</div>'
	+'</div>'
	+'</div>';
};


function hello() {
	return '<h1>Hello AJAX 2~!!</h1>';
};
var loginView=x=>{
	return '<div id="'+x+'" class="container">'
	+'    <div class="row">'
	+'        <div class="col-md-4 col-md-offset-4">'
	+'            <div class="panel panel-success">'
	+'                <div class="panel-heading">'
	+'                    <h3 class="panel-title" style="text-align: left;"><b>로그인 페이지 입니다.</b></h3>'
	+'                </div>'
	+'                <div class="panel-body" style="padding: 30px, 10px;">'
	+'                    <form role="form">'
	+'                        <fieldset>'
	+'                            <div class="input-group">'
	+'                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>'
	+'                                <input id="id" class="form-control" placeholder="Id를 입력하세요.." value="anti2110">'
	+'                            </div>'
	+'                            <br />'
	+'                            <div class="input-group">'
	+'                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>'
	+'                                <input id="password" class="form-control" placeholder="Password를 입력하세요." value="4512">'
	+'                            </div>'
	+'                            <br />'
	+'                            <div id="div-login-btn">'
	+'                            </div>'
	+'                        </fieldset>'
	+'                    </form>'
	+'                </div>'
	+'                <div class="panel-footer text-center">'
	+'                    <p>New Member?&nbsp;&nbsp;'
	+'                    <button id="a-join" class="btn btn-danger btn-sm">Sign up</button></p>'
	+'                </div>'
	+'            </div>'
	+'        </div>'
	+'    </div>'
	+'</div>  '
};

var navigation=()=>{
	return '<style>'
	+'    .navbar-inverse {'
	+'        margin-bottom: 0px; '
	+'        border-radius: 0px;'
	+'    }'
	+'    .navbar-brand {'
	+'        width: 150px;'
	+'        font-size: 30px;'
	+'        padding-left: 30px;'
	+'        padding-right: 30px;'
	+'        text-align: center;'
	+'    }'
	+'    .navbar-header {'
	+'    }'
	+'    .sticky {'
	+'        position: fixed;'
	+'        top: 0;'
	+'        width: 100%;'
	+'    }'
	+'    .jumbotron {'
	+'        margin: 0 auto;'
	+'    }'
	+'    .bg {'
	+'        background-image: url("'+$.image()+'/home/chicago.jpg");'
	+'    }'
	+'    .mega-dropdown {'
	+'        position: static !important;'
	+'    }'
	+'    .mega-dropdown-menu {'
	+'        padding: 20px 15px 15px;'
	+'        text-align: center;'
	+'        width: 100%;'
	+'    }'
	+'</style>'
	+'<div id="navbar" style="z-index: 9">'
	+'<nav class="navbar navbar-inverse">'
	+'  <div class="container-fluid">'
	+'    <div id="div-nav-1st" class="navbar-header">'
	+'        <a class="navbar-brand" href="#"><strong>BIT</strong></a>'
	+'    </div>'
	+'    <div class="collapse navbar-collapse" id="myNavbar">'
	+'      <ul class="nav navbar-nav">'
	+'        <li id="li-home"></li>'
	+'        <li id="li-about"></li>'
	+'        <li id="li-board"></li>'
	+'        <li class="dropdown mega-dropdown">'
	+'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"'
	+'                aria-haspopup="true" aria-expanded="false">유틸리티<span class="caret"></span>'
	+'            </a>'
	+'            <ul id="ul-util" class="dropdown-menu mega-dropdown-menu list-inline">'
	+'                 <li id="li-sequence" class="col-sm-2"></li>'
	+'                 <li id="li-math" class="col-sm-2"></li>'
	+'                 <li id="li-matrix" class="col-sm-2"></li>'
	+'                 <li id="li-sort" class="col-sm-2"></li>'
	+'                 <li id="li-application" class="col-sm-2"></li>'
	+'            </ul>'
	+'        </li>'
	+'      </ul>'

	+'      <ul class="nav navbar-nav navbar-right">'
	+'        <li>'
	+'      	<form id="form-search" class="navbar-form" role="search">'
	+'      		<div id="div-search-form" class="form-group">'
	+'      		</div>'
	+'      	</form>'
	+'        </li>'	
	+'        <li class="dropdown mega-dropdown">'
	+'            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"'
	+'                aria-haspopup="true" aria-expanded="false">접속하기<span class="caret"></span>'
	+'            </a>'
	+'            <ul id="ul-etc" class="dropdown-menu mega-dropdown-menu list-inline">'
	+'                 <li id="li-login" class="col-sm-2"></li>'
	+'                 <li id="li-admin" class="col-sm-2"></li>'
	+'                 <li id="li-join" class="col-sm-2"></li>'
	+'            </ul>'
	+'        </li>'	
	+'      </ul>'

	+'    </div>'
	+'  </div>'
	+'</nav>'
	+'</div>'
	;
}
function createButtonNav1st() {
	return '<button id="btn-nav-1st" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'</button>';
};

var createSelect=x=>{
  return '<select id="'+x.id+'" class="'+x.clazz+'" name="'+x.name+'">"'+x.op+'"</select>'
};

var createOption=x=>{
  return '<option value="'+x.op+'" " '+x.sel+'">'+x.val+'</option>'
};

var createForm=x=>{
	return '<form id="'+x.id+'" class="'+x.clazz+'" action="'+x.action+'" method="post"></form>';
};

var createFont=x=>{
	return '<font>'+x.val+'</font>'
};

var createATag=x=>{
	return '<a id="'+x.id+'" href="'+x.link+'" class="'+x.clazz+'">'+x.val+'</a>';
};

var createSpan=x=>{
	return '<span id="'+x.id+'" class="glyphicon ' +x.clazz+'" aria-hidden="true">&nbsp;'+x.val+'</span>'
};
var createHTag=x=>{
	return '<h'+x.num+'>'+x.val+'</h'+x.num+'>';
};

var createDiv=x=>{
	return '<div id="'+x.id+'" class="'+x.clazz+'"></div>';
};
var createUL=x=>{
	return '<ul id="'+x.id+'" class="'+x.clazz+'"></ul>';
};
var createLI=x=>{
	return '<li id="'+x.id+'" class="'+x.clazz+'"></li>';
};
var createInput=x=>{
	return $('<input id="'+x.id+'"class="'+x.clazz+'" type="'+x.type+'" value="'+x.val+'" placeholder="'+x.ph+'">');
};
var createInputText=x=>{
	return $('<input type="text" id="'+x.id+'"class="'+x.clazz+'" placeholder="example">');
};
var createButton=x=>{
	return '<button type ="button" id="'+x.id+'" class="btn '+x.clazz+'">'+x.val+'</button>';
};
var createText=x=>{
	return '<span id="'+x+'"></span>';
};
var createTab=(x, y, json, type)=>{
	var a = 1;
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
		+'<tr><th>목록</th>'
		+'<th><a id="a-th"></a></th></tr>';
	$.each(json, (i, j)=> {
		tab += '<tr>'
			+'<td><a id="a-td'+i+'" href="#">'+(a++)+'. '+j+'</a></td>'
			+'<td id="'+i+'"></td>'
	});
	tab += '</tr><tr><td>결과</td><td id="td-result"></td></tr></table>'
	return tab;
};
var createNewTab=x=>{
	var a = 1;
	var tab = '<table id="'+x.id+'" class="table table-'+x.clazz+'">'
		+'</table>'
	return tab;
};

var createTH=x=>{
	var th = '<tr>'
	$.each(x.array, (i, j)=> {
		th += '<th id="'+x.id+'-'+i+'">'+j+'</th>'
	})
	th += '</tr>'
	return th;
}

var createTR=x=>{
	var q= 0;
	var t = '';
	 $.each(x.list, (i,j)=>{
	       q++;
	       t +='<tr id="tr_'+q+'" class="'+x.clazz+'">'
	           +createTd({list: j, q: q, clazz: x.json.clazz})+'</tr>';
	   });
	return t;
}
var createTd=x=>{
	   var td = '';
	   var w=0;
	    $.each(x.list, (k,j)=>{
	        w++;
	        	td +='<td id="td_'+x.q+'_'+w+'" class="'+x.clazz+w+'">'
	        	+j+'</td>';
	    });
	   return td;
}


var createMyPageTab =(x, y, json, type)=>{
	var z = 0;
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
		+'<tr><th>구분</th><th>내용</th>'
		+'<th>구분</th><th>내용</th></tr><tr>';
	$.each(json, (i, j)=>{
		tab += '<td><a id="a-td'+i+'" href="#">'+i+'</a></td>'
			+'<td><a id="a-td'+i+'" href="#">'+j+'</a></td>';
		if(z % 2 == 1 && z != 7){
			tab += '</tr><tr>';
		} else if(z == 7){
			tab += '</tr>';
		}
		z++;
	});
	return tab;
};

var createMathTab=(x, y, json, txt, type)=>{
	var tab = '<table id="'+x+'" class="table table-'+y+'">'
	+'<tr>'
	+'<th colspan="5">' + txt + '</th>'
	+'</tr>';
	$.each(JSON.parse(json), (i, j)=>{
		tab +='<tr>'
			+'<td>'+j.a+'</td>'
			+'<td>'+j.b+'</td>'
			+'<td>'+j.c+'</td>'
			+'<td>'+j.d+'</td>'
			+'<td>'+j.e+'</td>'
			+'</tr>';
	});
	tab += '<tr><td>결과</td><td></td></tr>'
	tab += '</table>';
	return tab;
};

var createAlgoTab=()=>{
	var tab = '';
	return '<table id="tab-algo" class="table table-bordered">'
	  +'<tr>'
	  +'<td id="li-arith" style="width: 50%"></td>'
	  +'<td id="result-box" rowspan="5" style="width: 50%"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-switch"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-geo"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-fact"></td>'
	  +'</tr>'
	  +'<tr>'
	  +'<td id="li-fibo"></td>'
	  +'</tr>'
	  +'<tr style="background-color: #333; color: white;">'
	  +'<td id="li-result"></td>'
	  +'<td id="li-result-answer" style="font-size: 50px; text-align: center"></td>'
	  +'</tr>'
	  +'</table>';
};