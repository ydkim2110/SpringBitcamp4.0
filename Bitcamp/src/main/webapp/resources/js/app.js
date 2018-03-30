var app = app || {};

app = {init : x=>{
	    $.getScript(x+'/resources/js/router.js',()=>{
		      $.extend(new router(x));
			      app.algorithm.onCreate();
			      app.member.onCreate();
			      app.main.onCreate();
			      app.about.onCreate();
		    	})
}};

app.home={move : x=>{
	$.getScript(x, ()=>{
		$('#li-home').empty();
		$(createATag({id : 'a-home', link : '#', val : createSpan({id : '', clazz : 'glyphicon-home', val : 'HOME'})}))
			.appendTo($('#li-home'))
			.on('click', ()=>{
				app.member.onCreate();
			})
	});
}};

app.board=(x=>{
	var $wrapper,context,view;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    setContentView();
	};
	var setContentView=()=>{
		articles(1)
	};
	var write =x=>{
		var view = $.javascript()+'/view.js';
		var $content = $('#content');
		$.getScript(view, ()=>{
			$content.empty();
			$content.html($(createDiv({id : 'div-board-write', clazz : 'container text-center'}))
					.attr('style', 'min-height: 450px; margin-top: 50px; margin-bottom: 50px; background-color: white; padding: 50px'));
					$(boardWriteView()).appendTo('#div-board-write');
		})

	};
	var articles =x=>{
		$.getJSON(context+'/articles/'+x, d=>{
			$.getScript(view, ()=>{
				$(content)
					.html(
						$(createDiv({id : 'div-board', clazz : 'container text-center'}))
							.attr('style', 'min-height: 450px; margin-top: 50px; margin-bottom: 50px; background-color: white; padding: 50px')
							.append($(createDiv({id : 'div-search', clazz : 'col-md-4 input-group pull-right'}))
									.attr('style', 'margin-bottom: 30px'))
							.append($(createNewTab({id : 'tab-articles', clazz : 'bordered'})))
						);
						// Create Search
						$(createInputText({id : 'myInput', clazz : 'form-control'})).appendTo('#div-search');
						$(createATag({id : 'a-search', link : '#', clazz : 'btn btn-primary input-group-addon', val : 'Search'}))
							.appendTo('#div-search');
						$(createTH({id : 'th-articles', array : ['No.', '제목', '작성자', '작성일', '수정/삭제']}))
						.attr('style', 'background-color: #333; color: white; height: 40px')
						.appendTo('#tab-articles');
						$('#th-articles-0').attr('style', 'width: 5%; text-align: center');
						$('#th-articles-1').attr('style', 'width: 30%; text-align: center');
						$('#th-articles-2').attr('style', 'width: 15%; text-align: center');
						$('#th-articles-3').attr('style', 'width: 20%; text-align: center');
						$('#th-articles-4').attr('style', 'width: 20%; text-align: center');
						$(createTR({list : d.list, clazz : '', json: {list : '', clazz :'flag-'}})).appendTo('#tab-articles')
						.attr('style', 'text-align: center; border-bottom: 1px solid gray; height: 40px');
						for(var i=1; i<=d.page.pageEnd ; i++) {
							$('#td_'+i+'_5').html($(createATag({id:'a', link : '#', clazz : '', val:''}))
									.append($(createDiv({id : 'div-btn', clazz : 'btn-group'}))
											.append($(createButton({id : 'btn-modify-'+i, clazz : 'btn-success btn-sm', val : '수정'}))
													.on('click', ()=>{
														alert('modify click!!');
											}))
											.append($(createButton({id : 'btn-delete-'+i, clazz : 'btn-danger btn-sm', val : '삭제'}))
													.on('click', ()=>{
														alert('delete click!!');
													}))
									)
							)
						}
						
						$(createUL({id : 'ul-page', clazz : 'pagination'})).appendTo('#div-board');
						var t = '';
						if(d.page.pageStart!=1){
							t += '    <li>'
							+'<a href="# "onclick="app.board.articles('+d.page.prevPageNum+'); return false;" aria-label="Previous">'
							+'<span aria-hidden="true">&laquo;</span>'
							+'</a>'
							+'</li> ';
						}
						for(var i = d.page.pageStart; i <= d.page.pageEnd; i++){
							if(i == d.page.pageNum){
								t += '<li><a href="#" onclick="app.board.articles('+i+'); return false;" '
								+'style="background-color:#3175af; color: white">'+i+'</a></li>';
							} else{
								t += '<li><a href="#" onclick="app.board.articles('+i+'); return false;">'+i+'</a></li>';
							}
						}
						if(d.page.totalPage > d.page.pageEnd) {
							t += '<li>'
								+'<a href="#" onclick="app.board.articles('+d.page.nextPageNum+'); return false;" aria-label="Next">'
								+'<span aria-hidden="true">&raquo;</span>'
								+'</a>'
								+'</li>';
						}
						$('#ul-page').html(t);
				})
			})
	}
		return {onCreate : onCreate, articles : articles, write : write}
})();

app.about=(()=>{
	var $wrapper,context,view, algo;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    algo = $.javascript()+'/algo.js';
	    setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$content.html($(createDiv({id : 'div-home', clazz : 'container'}))
				.attr('style', 'background-color: white; margin-top: 50px;')
				.append(aboutView())
				.append(createButton({id : 'btn-confirm', clazz : 'btn-primary', val : 'confirm'}))
			);
		});
	};
	return {onCreate:onCreate};
})();


app.main=(()=>{
	var $wrapper,context,view, algo;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    algo = $.javascript()+'/algo.js';
	    setContentView();
	};
	var setContentView=()=>{
		console.log('main');
		$.getScript(view, ()=>{
			$content.html($(createDiv({id : 'div-home', clazz : 'container'})).attr('style', 'margin-top: 50px')
				.append(
					$(createDiv({id : 'div-home', clazz : 'container'}))
					.append($.getScript(algo, ()=>{
						googleChart();
					})))
			);
		});
	};
	return {onCreate:onCreate};
})();


app.member=(()=>{
	var $wrapper,context,view,data;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    data = $.javascript()+'/data.js';
	    setContentView();
	};
	var setContentView=()=>{
		$.getScript(view, ()=>{
			$content.html(
			$(createDiv({id : 'content', clazz : 'container'}))
			.attr('style', 'margin-top: 50px; border: 2px dashed red; padding: 20px')
			.append(loginView('div-login'))
			);
			$(createButton({id : 'login-btn', clazz : 'btn-primary btn-block', val : 'LOGIN'}))
			.appendTo('#div-login-btn')
			.on('click', e=>{
				e.preventDefault();
				var id = $('#id').val();
				var json = {
						'pass' : $('#password').val()
				}
				$.ajax({
					url : context+'/members/'+id+'/login',
					method : 'POST',
					data : JSON.stringify(json),
					dataType : 'json',
					contentType : 'application/json',
					success : x=>{
						if(x.success==='1'){
							var id = x.user.id;
							var json = {
									id : x.user.id,
									ssn : x.user.ssn,
									pass : x.user.pass,
									phone : x.user.phone,
									name : x.user.name,
									email : x.user.email,
									addr : x.user.addr,
									profile : x.user.profile
							};
							myPage(json);
						}else{
							alert('로그인 실패 ID : '+x.user.id);
						}
					},
					error : (x, h, m)=>{
						alert('로그인에서 에러 발생 x='+x+', h='+h+', m='+m);
					}
				});
			});
		});
	};
	var login=()=>{
                        
	};
	var myPage=x=>{
		var id = x.id;
		var pass = x.pass;
		$.getScript(view, ()=>{
			$content.html(
				$(createDiv({id : 'div-myPage', clazz : 'container'}))
				.append(myPageView(x))
			);
				$(createDiv({id : 'div-mypage2', clazz : 'container'}))
				.attr('style', 'background-color: white; margin-bottom: 40px; padding: 20px 100px')
				.append(createMyPageTab('', 'table', x, 'default'))
				.appendTo('#div-myPage')
			$(function() {
				var phone = (x.phone === '') ? "개통하기" : x.phone;
				console.log(phone);
				$(createATag({id : '', link : '#', clazz : '', val : phone})).appendTo('#td-phone');
			});
		});
	};
	return {onCreate:onCreate};
})();

app.algorithm=(()=>{
	var $wrapper,context,algorithm,view, image;
	var onCreate =()=>{
	    $wrapper = $('#wrapper');
	    $content = $('#content');
	    context = $.context();
	    view = $.javascript()+'/view.js';
	    algo = $.javascript()+'/algo.js';
	    image = $.image();
	    setContentView();
	};
	var wirte=()=>{}
	var setContentView=()=>{
		$wrapper.empty();
	    $.getScript(view, ()=>{
	    	$wrapper.html(navigation());
	    	var json = null;
	    	$content.html(
	    		app.main.onCreate()
	    	);
	    	$(createATag({id : 'a-home', link : '#', clazz : '', val : createSpan({id : '', clazz : 'glyphicon-home', val : 'HOME'})}))
	    	.appendTo('#li-home')
	    	.click(()=>{
	    		app.main.onCreate();
	    	});
	    	$(createATag({id : 'a-about', link : '#', clazz : '', val : createSpan({id : '', clazz : 'glyphicon-book', val : 'About'})}))
	    	.appendTo('#li-about')
	    	.click(()=>{
	    		app.about.onCreate();
	    	});
	    	$(createATag({id : 'a-board', link : '#', clazz : '', val : createSpan({id : 'span-board', clazz : 'glyphicon-bullhorn', val : 'Board'})}))
	    	.appendTo('#li-board');
	    	$('#span-board')
	    	.click(()=>{
	    		app.board.onCreate();
	    		$('#span-board').remove();
	    		$(createSpan({id : 'span-board', clazz : 'glyphicon-bullhorn', val : 'Write'})).appendTo('#a-board');
	    	$('#span-board').on('click', e=>{
	    		e.preventDefault();
	    		$content.html($(createDiv({id : 'div-write', clazz : 'container'}))
    				.attr('style', 'background-color: white; margin-top: 50px; margin-bottom: 40px; padding: 20px 100px')
					.append(boardWriteView()));
	    		$(createATag({id : 'submit-btn', link : '#', clazz : 'btn btn-success', val : '전송'}))
	    			.appendTo('#div-btn-group');
    			$(createATag({id : 'cancel-btn', link : '#', clazz : 'btn btn-danger', val : '취소'}))
	    			.appendTo('#div-btn-group');
    			$(createATag({id : 'fileUplod-btn', link : '#', clazz : 'btn btn-primary', val : '파일업로드'}))
	    			.appendTo('#div-btn-group');

	    		/*$.magnificPopup.open(
	    				{items: {src: $(createDiv({id : 'div-write', clazz : 'container popup'}))
	    					.append(boardWriteView())}, type : 'inline'}, 0);*/
	    	});
	    	});
	    	
	    	$(createATag({id : 'a-login', link : '#', clazz : '', val : createSpan({id : '', clazz : 'glyphicon-user', val : '로그인' })}))
	    	.appendTo('#li-login')
	    	.click(()=>{
	    		app.member.onCreate();
	    	});
	    	
	    	$(createATag({id : '', link : '#', clazz : '', val : '수열'}))
	    	.appendTo('#li-sequence')
	    	.click(()=>{
	    		alert('sequence button click!');
	    		$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
	    				.append(createHTag({num : '2', val : '수열 알고리즘'}))
	    				.append(createAlgoTab()));
	    		$('#tab-algo').attr('style', 'background-color: white;')
	    		$('#result-box').attr('style', 'padding: 20px 100px;')
	    		var $left=$('#tabLeft'),$right=$('#result-box'),$result=$('#li-result-answer');
	            $(createUL({id : 'ul-seq', clazz : 'list-group'})).appendTo($left);
	            $(createLI({id : 'li-arith', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-switch', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-geo', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-fact', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-fibo', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createLI({id : 'li-result', clazz : 'list-group-item'})).appendTo('#ul-seq');
	            $(createATag({id : 'a-arith', link : '#', clazz : '', val : '등차수열의 합'})).appendTo('#li-arith');
	            $(createATag({id : 'a-switch', link : '#', clazz : '', val : '스위치수열의 합'})).appendTo('#li-switch');
	            $(createATag({id : 'a-geo', link : '#', clazz : '', val : '등비수열의 합'})).appendTo('#li-geo');
	            $(createATag({id : 'a-fact', link : '#', clazz : '', val : '팩토리얼수열의 합'})).appendTo('#li-fact');
	            $(createATag({id : 'a-fibo', link : '#', clazz : '', val : '피보나치수열의 합'})).appendTo('#li-fibo');
	            $(createATag({id : '', link : '#', clazz : '', val : '결과'})).attr('style', 'color:white').appendTo('#li-result');
	           
	            createInputText({id : 'first', clazz : 'form-control'})
				.attr('placeholder','초기값 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				createInputText({id : 'last', clazz : 'form-control'})
				.attr('placeholder','리미트값 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				createInputText({id : 'differ', clazz : 'form-control'})
				.attr('placeholder','공차 입력')
				.attr('style', 'background-color: #faffbd')
				.appendTo($right);
				
				$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
				.appendTo($right)
				.attr('style','margin-top:10px;')
				.on('click',()=>{
					alert('click!');
	    			var x = $('#first').val();
	    			var y = $('#last').val();
	    			var z = $('#differ').val();
	    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
	    				$.getScript(algo, ()=>{
	    					alert('if true!');
	    					$('#li-result-answer').text(arith(x, y, z));
			    			$('#first').val("");
			    			$('#last').val("");
			    			$('#differ').val("");
	    				});
	    			} else {
	    				alert('값을 넣어주세요!');
	    			}
	    		});	
				$('#a-arith').attr('style', 'color: red; font-weight:bold');
				$('#a-switch').attr('style', 'color: black');
				$('#a-geo').attr('style', 'color: black');
				$('#a-fact').attr('style', 'color: black');
				$('#a-fibo').attr('style', 'color: black');
				
				$('#a-arith').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공차 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(arith(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}
		    		});
					$('#a-arith').attr('style', 'color: red; font-weight:bold');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
	
		
				$('#a-switch').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText('first','form-control')
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText('last','form-control')
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText('differ','form-control')
					.attr('placeholder','공차 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('switch click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(switchSeq(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: red; font-weight:bold');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
				$('#a-geo').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공비 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('geo click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0 ) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(geo(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: red; font-weight:bold');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: black');
				});
				
				$('#a-fact').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('fact click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(fact(x, y));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: red; font-weight:bold');
					$('#a-fibo').attr('style', 'color: black');
				});
				
				$('#a-fibo').on('click', ()=>{
					$right.empty();
					$result.empty();
					createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','첫번째 갑 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','두번째값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리밋값 입력')
					.attr('style', 'background-color: #faffbd')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						alert('fibo click!');
		    			var x = $('#first').val();
		    			var y = $('#last').val();
		    			var z = $('#differ').val();
		    			if(x!=='' && x>0 && y!=='' && y>0 && z!=='' && z>0) {
		    				$.getScript(algo, ()=>{
		    					alert('if true!');
		    					$('#li-result-answer').text(fibo(x, y, z));
				    			$('#first').val("");
				    			$('#last').val("");
				    			$('#differ').val("");
		    				});
		    			} else {
		    				alert('값을 넣어주세요!');
		    			}

		    		});
					$('#a-arith').attr('style', 'color: black');
					$('#a-switch').attr('style', 'color: black');
					$('#a-geo').attr('style', 'color: black');
					$('#a-fact').attr('style', 'color: black');
					$('#a-fibo').attr('style', 'color: red; font-weight:bold');
				});
	    	});
	    	
	    	
	    	$(createATag({id : '', link : '#', clazz : '', val : '수학'}))
	    	.appendTo('#li-math')
	    	.click(()=>{
	    		alert('math button click!');
	    		$.getScript(algo, ()=>{
	    			$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
	    					.append(createHTag({num : '2', val : '수학 알고리즘'}))
	    					.append(createTab('tab-math', 'border', mathList(), 'default')));
	    			$('#tab-math').attr('style', 'background-color: white');
	    			$('#tab-math tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    			$('#a-th').attr('style', 'color: white');
	    			$('#1').remove();
	    			$('#2').remove();
	    			$('#3').remove();
	    			$('#4').remove();
	    			$('#5').remove();
	    			$('#0').attr('rowspan', mathList().length);
	    			$('#0').attr('style', 'background-color: #faffbd');
	    			$('#a-th').text(mathList()[0]);
	    			
	    			var $right=$('#0'), $result=$('#td-result');
	    			createInputText({id : 'rangeNum', clazz : 'form-control'})
					.attr('placeholder','구할 숫자의 범위 입력')
					.appendTo($right);
	    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click', ()=>{
						var x = $('#rangeNum').val();
						if(x !== '' && x>1) {
							$.getScript(algo, ()=>{
								$result.text('소수? '+primeNumber(x)+', '+x+' 까지의 소수 합: '+primeNumberSum(x)
										+', '+x+' 까지의 소수 개수: '+primeNumberCount(x));
								$('#rangeNum').val("");
							});
						} else {
							alert('값을 입력해 주세요.');
						}
						
					});
	    			
					$('#a-td0').attr('style', 'color: red; font-weight:bold');
					$('#a-td1').attr('style', 'color: black');
					$('#a-td2').attr('style', 'color: black');
					$('#a-td3').attr('style', 'color: black');
					$('#a-td4').attr('style', 'color: black');
					$('#a-td5').attr('style', 'color: black');
					
					$('#a-td0').on('click', ()=>{
						$('#a-th').text(mathList()[0]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'rangeNum', clazz : 'form-control'})
						.attr('placeholder','구할 숫자의 범위 입력')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							alert('눌림');
							var x = $('#rangeNum').val();
							if(x !== '' && x>1) {
								$.getScript(algo, ()=>{
									alert('눌림');
									$result.text('소수? '+primeNumber(x)+','+x+' 까지의 소수 합: '+primeNumberSum(x)
											+', '+x+' 까지의 소수 개수: '+primeNumberCount(x));
									$('#rangeNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});
		    			
						$('#a-td0').attr('style', 'color: red; font-weight:bold');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td1').on('click', ()=>{
						$('#a-th').text(mathList()[1]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','첫번째 정수를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','두번째 정수를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							if(x !== '' && x>0 && y !== '' && y>0) {
								$.getScript(algo, ()=>{
									$result.text('최대공약수: '+greatestCommonDivisor(x, y)
											+', 최소공배수: '+leastCommonMultiple(x, y));
									$('#firstNum').val("");
									$('#secondNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		    			
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: red; font-weight:bold');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					
					
					
					$('#a-td2').on('click', ()=>{
						$('#a-th').text(mathList()[2]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							if(x !== '' && x>0) {
								$.getScript(algo, ()=>{
									$result.text(x+' = '+primeFactorization(x));
									$('#firstNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		
						
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: red; font-weight:bold');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
		    			
		    			
					$('#a-td3').on('click', ()=>{
						$('#a-th').text(mathList()[3]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번째 숫자를 입력하세요.')
						.appendTo($right);	
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번째 숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text('최대값 : '+maxNum(x, y, z, a, b)+', 최소값 : '+minNum(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: red; font-weight:bold');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td4').on('click', ()=>{
						$('#a-th').text(mathList()[4]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							if(x !== '' && x>0) {
								$.getScript(algo, ()=>{
									$result.text('5의 배수 합: '+fiveMultipleSum(x));
									$('#firstNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
							
						});		
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: red; font-weight:bold');
						$('#a-td5').attr('style', 'color: black');
					});
					$('#a-td5').on('click', ()=>{
						$('#a-th').text(mathList()[5]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번째 숫자를 입력하세요.')
						.appendTo($right);	
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번째 숫자를 입력하세요.')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번째 숫자를 입력하세요.')
						.appendTo($right);
		    			$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click', ()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text('근사값	 : '+findNearNum(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
		    			
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
						$('#a-td5').attr('style', 'color: red; font-weight:bold');
					});
					
	    		});
	    	});
	    	
	    	$(createATag({id : '', link : '#', clazz : '', val : '배열'}))
	    	.appendTo('#li-matrix')
	    	.click(()=>{
	    		alert('matrix button click!');
	    		$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
    					.append(createHTag({num : '2', val : '배열 알고리즘'}))
    					.append(createTab('tab-matrix', 'border', sortList(), 'default')));
	    		$('#tab-matrix').attr('style', 'background-color: white');
	    		$('#tab-matrix tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    		$('#a-th').attr('style', 'color: white');
	    		$('#1').remove();
	    		$('#2').remove();
	    		$('#3').remove();
	    		$('#4').remove();
	    		$('#0').attr('rowspan', sortList().length);
	    		$('#0').attr('style', 'border: 2px solid gray');
	    		$('#a-th').text(sortList()[0]);
	    	});
	    	
	    	
			$(createATag({id : '', link : '#', clazz : '', val : '정렬'}))
	    	.appendTo('#li-sort')
	    	.click(()=>{
	    		alert('sort button click!');
	    		$.getScript(algo, ()=>{
	    			$content.html($(createDiv({id : 'content-tab', clazz : 'container'})).attr('style', 'margin-top: 50px;')
	    					.append(createHTag({num : '2', val : '정렬 알고리즘'}))
	    					.append(createTab('tab-sort', 'border', sortList(), 'default')));
	    			$('#tab-sort').attr('style', 'background-color: white');
	    			$('#tab-sort tr th').attr('style', 'background-color: #333; color: white; width: 50%');
	    			$('#a-th').attr('style', 'color: white');
	    			$('#1').remove();
	    			$('#2').remove();
	    			$('#3').remove();
	    			$('#4').remove();
	    			$('#0').attr('rowspan', sortList().length);
	    			$('#0').attr('style', 'background-color: #faffbd');
	    			$('#a-th').text(sortList()[0]);
	    			var $right=$('#0'), $result=$('#td-result');
	    			createInputText({id : 'first', clazz : 'form-control'})
					.attr('placeholder','초기값 입력')
					.appendTo($right);
					createInputText({id : 'last', clazz : 'form-control'})
					.attr('placeholder','리미트값 입력')
					.appendTo($right);
					createInputText({id : 'differ', clazz : 'form-control'})
					.attr('placeholder','공차 입력')
					.appendTo($right);
					$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
					.appendTo($right)
					.attr('style','margin-top:10px;')
					.on('click',()=>{
						
					});
					$('#a-td0').attr('style', 'color: red; font-weight:bold');
					$('#a-td1').attr('style', 'color: black');
					$('#a-td2').attr('style', 'color: black');
					$('#a-td3').attr('style', 'color: black');
					$('#a-td4').attr('style', 'color: black');
					
					$('#a-td0').on('click', ()=>{
						$('#a-th').text(sortList()[0]);
						$right.empty();
		    			createInputText({id : 'first', clazz : 'form-control'})
						.attr('placeholder','초기값 입력')
						.appendTo($right);
						createInputText({id : 'last', clazz : 'form-control'})
						.attr('placeholder','리미트값 입력')
						.appendTo($right);
						createInputText({id : 'differ', clazz : 'form-control'})
						.attr('placeholder','공차 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{

						});
						$('#a-td0').attr('style', 'color: red; font-weight:bold');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
					
					$('#a-td1').on('click', ()=>{
						$('#a-th').text(sortList()[1]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(selectionSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: red; font-weight:bold');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
					
					$('#a-td2').on('click', ()=>{
						$('#a-th').text(sortList()[2]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(bubbleSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: red; font-weight:bold');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: black');
					});
										
					$('#a-td3').on('click', ()=>{
						$('#a-th').text(sortList()[3]);
						$right.empty();
						$result.empty();
		    			createInputText({id : 'firstNum', clazz : 'form-control'})
						.attr('placeholder','1번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'secondNum', clazz : 'form-control'})
						.attr('placeholder','2번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'thirdNum', clazz : 'form-control'})
						.attr('placeholder','3번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fourthNum', clazz : 'form-control'})
						.attr('placeholder','4번재 값 입력')
						.appendTo($right);
		    			createInputText({id : 'fifthNum', clazz : 'form-control'})
						.attr('placeholder','5번재 값 입력')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							var x = $('#firstNum').val();
							var y = $('#secondNum').val();
							var z = $('#thirdNum').val();
							var a = $('#fourthNum').val();
							var b = $('#fifthNum').val();
							if(x !== '' && y !== '' && z !== '' && a !== '' && b !== '') {
								$.getScript(algo, ()=>{
									$result.text(insertSort(x, y, z, a, b));
									$('#firstNum').val("");
									$('#secondNum').val("");
									$('#thirdNum').val("");
									$('#fourthNum').val("");
									$('#fifthNum').val("");
								});
							} else {
								alert('값을 입력해 주세요.');
							}
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: red; font-weight:bold');
						$('#a-td4').attr('style', 'color: black');
					});
					$('#a-td4').on('click', ()=>{
						$('#a-th').text(sortList()[4]);
						$right.empty();
		    			createInputText({id : 'first', clazz : 'form-control'})
						.attr('placeholder','초기값 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						createInputText({id : 'last', clazz : 'form-control'})
						.attr('placeholder','리미트값 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						createInputText({id : 'differ', clazz : 'form-control'})
						.attr('placeholder','공차 입력')
						.attr('style', 'background-color: #faffbd')
						.appendTo($right);
						$(createButton({id : 'btn-result', clazz : 'btn-primary', val : '결과 보기'}))
						.appendTo($right)
						.attr('style','margin-top:10px;')
						.on('click',()=>{
							
						});
						$('#a-td0').attr('style', 'color: black');
						$('#a-td1').attr('style', 'color: black');
						$('#a-td2').attr('style', 'color: black');
						$('#a-td3').attr('style', 'color: black');
						$('#a-td4').attr('style', 'color: red; font-weight:bold');
					});
					
	    		});
	    	});
	    });
	  };
	return {onCreate:onCreate};
})();