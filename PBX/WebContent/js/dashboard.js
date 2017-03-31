var api_arr;

function init_nav(){
  // $SIDEBAR_MENU.find('a').on('click', function(ev) {
	  // console.log('dashboard_sidebar');
/*        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }else
            {
				if ( $BODY.is( ".nav-sm" ) )
				{
					$SIDEBAR_MENU.find( "li" ).removeClass( "active active-sm" );
					$SIDEBAR_MENU.find( "li ul" ).slideUp();
				}
			}
            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }*/
    // });
    $('#btn').on('click', function(e){
    	console.log("##########btn");
    	$.ajax({
    		//crossDomain:true,
    		url:'http://earth.pchero21.com:8081/ob/plans',
    		type:'GET',
    		dataType:'json',
    		//contentType: "application/x-www-form-urlencoded",

    		// xml,html,json,jsonp,script,text
    		error:function(){
    			// alert('Error');
    			console.log('Error');

    		},
    		success:function(e){
    			// alert('success');
    			console.log('success');
    			console.log(e);
    			
    		},
    		complete:function(){
    			// alert('complete');
    			console.log('complete');
    		}

    	});
    });	
    

}
function load_api(){
	$.ajax({
		url:'./data.json',
		type:'GET',
		dataType:'json',    		
		error:function(data){
			console.log('==ERROR_API_SETTING==');
		},
		success:function(data){
			console.log('==SUCCESS_API_SETTING==');
			console.log(data);
			api_arr = data.api;    			
		},
		complete:function(data){
			console.log('==COMPLETE_API_SETTING==');
		}    		
	});	
}

function init_setting(){
    $('#setting').on('click', function(e){
    	console.log("=========API_SETTING========");
    	load_api();
    });
}


$(document).ready(function() {
		console.log('dashboard');		
		init_nav();
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