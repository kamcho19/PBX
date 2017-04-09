var api_data;

function init_nav(){
	var html_txt ="No data";
	if(api_data.length>0){
		html_txt=""
		for(var i=0; i<api_data.length; i++ ){			
			html_txt=html_txt.concat('<li><a><i class="fa"></i>', 
									api_data[i].name, 
									'<span class="fa fa-chevron-down"></span></a></li>' );
/*    		html_txt=html_txt.concat(api_data[i].name);
			html_txt=html_txt.concat('<span class="fa fa-chevron-down"></span></a></li>');*/
		}		
	}
	$("#left_navi").html(html_txt);
	
	$("#left_navi").find('a').on('click', function(ev){
		$("#response").html("");
		var idx =$(this.parentElement).index();

		var obj = api_data[idx];
		var url=obj.url;
		var method=obj.method;	
		var data =obj.param[0];
		var content_type ="application/x-www-form-urlencoded; charset=UTF-8"
		if(obj.method=="PUT"||obj.method=="DELETE"){
			content_type="application/json; charset=UTF-8";
		}
			
		if(obj.method=="POST"||obj.method=="PUT"){
			data =JSON.stringify(obj.param[0]);
		}
	
		$.ajax({
			url:url,
			method:method,
			contentType:content_type, //application/json charset=UTF-8 application/x-www-form-urlencoded, multipart/form-data, text/plain
			data:data,
			dataType:'json',
			/*crossDomain:false,*/
			//headers:{_method : 'PUT'},
			//headers: {"Content-Type":"application/json"},
			success:function(data){
				console.log("==SUCCESS==");
				console.log(data);
				$("#response").html(JSON.stringify(data));
			},
			error:function(data){
				console.log("==ERROR==");
			},
			complete:function(data){
				console.log("==COMPLETE==");
			}
				
		})
	})

}
function load_api(){
	$.ajax({
		url:'./data.json',
		type:'GET',
		dataType:'json',
		success:function(data){
			console.log('==SUCCESS_API_SETTING==');
			console.log(data);
			api_data = data.api;    			
		},
		error:function(data){
			console.log('==ERROR_API_SETTING==');
		},		
		complete:function(data){
			console.log('==COMPLETE_API_SETTING==');
			init_nav();
			$("#request").html(JSON.stringify(api_data));
		}    		
	});	
}

function init_setting(){
    $('#setting').on('click', function(e){
    	console.log("=========API_SETTING========");
    	reset();
    	//load_api();
    	change_api();
    	
    });
}

function change_api(){
	var temp = $("#request").val();	
	api_data = JSON.parse(temp);
	init_nav();
	
}

function reset(){
	$("#left_navi").html("");
	$("#response").html("");
}


$(document).ready(function() {
		console.log('dashboard');
		load_api();
		//init_nav();
		init_setting();
		/*init_flot_chart();
		init_sidebar();
		init_wysiwyg();
		init_InputMask();
		init_JQVmap();
		init_cropper();
		init_knob();
		init_IonRangeSlider();
		init_ColorPicker();
		init_TagsInput();
		init_parsley();
		init_daterangepicker();
		init_daterangepicker_right();
		init_daterangepicker_single_call();
		init_daterangepicker_reservation();
		init_SmartWizard();
		init_EasyPieChart();
		init_charts();
		init_echarts();
		init_morris_charts();
		init_skycons();
		init_select2();
		init_validator();
		init_DataTables();
		init_chart_doughnut();
		init_gauge();
		init_PNotify();
		init_starrr();
		init_calendar();
		init_compose();
		init_CustomNotification();
		init_autosize();
		init_autocomplete();
		*/		
	});	