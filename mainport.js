$(document).ready(function () {

		document.title ='Case Status - eCourt India Services';
$('.sidebarMainMenu .nav-link').removeAttr('aria-current');
			$("#leftPaneMenuCS").attr("aria-current", "page");



	  $('#case_captcha_code, #file_captcha_code, #adv_captcha_code, #fir_captcha_code, #act_captcha_code, #ct_captcha_code, #fcaptcha_code, #adv_bar_state, #search_act, #under_sec').on('input', function () {
		$(this).val($(this).val().replace(/[^a-zA-Z0-9 ]/g, ''));
	  });

	  $('#petres_name').on('input', function () {
		$(this).val($(this).val().replace(/[^a-zA-Z ]/g, ''));
	  });

	  $('#adv_bar_code, #adv_bar_year, #rgyearP, #search_case_no, #rgyear, #filing_no, #filyear, #firyear, #search_year').on('input', function () {
		$(this).val($(this).val().replace(/[^0-9 ]/g, ''));
	  });

	  $('#fir_no').on('input', function () {
		$(this).val($(this).val().replace(/[^0-9]/g, ''));
	  });

	  $('#advocate_name').on('input', function () {
		$(this).val($(this).val().replace(/[^a-zA-Z ._]/g, ''));
	  });

});


//datePickerIcon('caselist_date',0); 
datePickerIcon('caselist_date','+1m','-7'); 

function resetDataGrid(element) {
    $('#' + element).hide();

    if (element === 'res_adv_name') {
        $("#radAdvtName").prop("checked", true);
        show_bar_code();
    }
	// Clear first so screen readers re-announce
  $('#sr-alert').text('');
  setTimeout(function () {
    $('#sr-alert').text('Form has been reset');
  }, 100);
}

function submit_party_name()
{ 
	if(validatePartyName())
	{
	   var state_code    = $("#sess_state_code").val() ;
	   var dist_code     = $('#sess_dist_code').val();
	   var courtArr      = $('#court_complex_code').val();
	   var court_est_arr = courtArr.split('@');
	   var court_complex = court_est_arr[0];
	   var est_code      = $('#court_est_code').val();
	   var differ_mast_est = court_est_arr[2];
          if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                errorAlert(alerts_array[71]);
                return false;
        }

		
	if(validate_state_dist_complex()) //======== written in common function.js
	{

		var fcaptcha_code=$('#fcaptcha_code').val();
		if(fcaptcha_code=='')
		{
			errorAlert(alerts_array[475]);
			return false;
		}
	   var url="casestatus/submitPartyName";

	   var postdata =$("#frmsearch_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;;
		$('#party_help').hide();

		ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
			function callbackParty(obj){  
				$('#div_captcha_party').html(obj.div_captcha);	
				if(obj.status==0)
				{
				$("#fcaptcha_code").val('');
				captcha_image_audioObj.refresh();
				document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
				return false;
				}
				else if(obj.status == 1)
				{ 	//alert(obj.party_data);
					$('#res_party').html(obj.party_data);
					$('#fcaptcha_code').val('');
					//displayRecordsJson(obj,'CScaseNumber');
				}	 else {
					$('#res_party').html('');
				}

					$('#res_party').show();

			}
		 }
	}
}


function submit_filing_no()
{ 
   if(validateFilingNo())
	{
	 
		   var state_code    = $("#sess_state_code").val() ;
		   var dist_code     = $('#sess_dist_code').val();
		   var courtArr      = $('#court_complex_code').val();
		   var court_est_arr = courtArr.split('@');
		   var court_complex = court_est_arr[0];
		   var est_code      = $('#court_est_code').val();
		
		   var differ_mast_est = court_est_arr[2];
	
          	   if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                	errorAlert(alerts_array[71]);
                	return false;
       		   }


			 if(state_code==3)
                        {
                             var    case_type      = $('#case_type_1').val();
                                if(case_type=='')
                                 {
                                        errorAlert(alerts_array[728]);
                                        return false;

                                 }
                        }else
			 var case_type        = '';


		  if(validate_state_dist_complex()) //======== written in common function.js
		 {

		   var fcaptcha_code=$('#file_captcha_code').val();
			if(fcaptcha_code=='')
			{
				errorAlert(alerts_array[475]);
				return false;
			}

			/*if(state_code==3)
			{
				case_type      = $('#case_type_1').val();
				if(case_type=='')
       				 {
          				errorAlert(alerts_array[728]);
          				return false;

       				 }	
			}*/

		   var url="casestatus/submitFillingNo";

		   var postdata =$("#frm_file_search_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type;
		   $("#help_filno").hide();
			
			ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
			function callbackParty(obj){  
				$('#div_captcha_fileno').html(obj.div_captcha);	
				if(obj.status==0)
				{
				$("#file_captcha_code").val('');
				captcha_image_audioObj.refresh();
				document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
				return false;
				}
				else if(obj.status == 1)
				{ 	
					$('#res_filing').html(obj.filing_data);
					$('#file_captcha_code').val('');
				}	else {
					$('#res_filing').html('');
			
				}
					$('#res_filing').show();
		
			}
		}
	}
}



function submit_adv_name()
{ 
//alert(validateAdvName());
 if(validate_adv_name())
  {
	   var state_code    = $("#sess_state_code").val() ;
	   var dist_code     = $('#sess_dist_code').val();
	   var courtArr      = $('#court_complex_code').val();
	   var court_est_arr = courtArr.split('@');
	   var court_complex = court_est_arr[0];
	   var est_code      = $('#court_est_code').val();
	   var case_type	= '';

	   var differ_mast_est = court_est_arr[2];

            if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                errorAlert(alerts_array[71]);
                return false;
             }


		if(validate_state_dist_complex()) //======== written in comopnent.js
		{
			   var fcaptcha_code=$('#adv_captcha_code').val();
				if(fcaptcha_code=='')
				{
					errorAlert(alerts_array[475]);
					return false;
				}		

			   var url="casestatus/submitAdvName";

			   var postdata =$("#frm_adv_search_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type;
				//alert(postdata);
				ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
				$("#help_adv").hide();
					
				function callbackParty(obj){ 
					//alert(obj);
					$('#div_captcha_adv').html(obj.div_captcha);
					if(obj.status==0)
						{
						$("#advocate_name").val('');
						$("#adv_captcha_code").val('');
						captcha_image_audioObj.refresh();
						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
						return false;
						}
						else if(obj.status == 1)
					{ 	
					//	$("#advocate_name").val('');
						$('#res_adv_name').html(obj.adv_data);
						$('#adv_captcha_code').val('');
					}	else {
							$('#res_adv_name').html('');
						$("#advocate_name").val('');
					}
					$('#res_adv_name').show();
					
				}
			 }
		 } 
}





function submitCaseNo()
{
   	if(validateCaseSubmit())
	{
	   var state_code =$("#sess_state_code").val() ;
	   var dist_code=$('#sess_dist_code').val();
	   var courtArr=$('#court_complex_code').val();
	   var court_est_arr=courtArr.split('@');
	   var court_complex=court_est_arr[0];
	   var est_code=$('#court_est_code').val();
	   var case_type=$('#case_type').val();
	   var case_no=$('#search_case_no').val();
	   var rgyear=$('#rgyear').val();

	   var differ_mast_est = court_est_arr[2];

           if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                errorAlert(alerts_array[71]);
                return false;
           }


	   if(validate_state_dist_complex()) //======== written in comopnent.js
	  {

		   var fcaptcha_code=$('#case_captcha_code').val();  //alert(fcaptcha_code);
			if(fcaptcha_code=='')
			{
				errorAlert(alerts_array[475]);
				return false;
			}

		   var url="casestatus/submitCaseNo";
		   

			var postdata =$("#search_case").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type+"&case_no="+case_no+"&rgyear="+rgyear;
			$("#help_case").hide();
			//alert(postdata);

			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
			function callbackComplex(obj){  
				$('#div_captcha_caseno').html(obj.div_captcha);	
				if(obj.status==0)
					{
					$("#case_captcha_code").val('');
					captcha_image_audioObj.refresh();
					document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
					return false;
					}
					else if(obj.status == 1)
				{ 				//alert(obj.case_data);
					$('#case_no_res').html(obj.case_data);
					$('#case_captcha_code').val('');
					//displayRecordsJson(obj,'CScaseNumber');
				}	else {
					$('#case_no_res').html('');
				}
				$('#case_no_res').show();

			}
		}
	}
}



function submitFirNumber()
{

	if(validateFirSubmit())
	{
	   var state_code =$("#sess_state_code").val() ;
	   var dist_code=$('#sess_dist_code').val();
	   var courtArr=$('#court_complex_code').val();
	   var court_est_arr=courtArr.split('@');
	   var court_complex=court_est_arr[0];
	   var est_code=$('#court_est_code').val();
//	   var police_st_code=$('#police_st_code').val();
 	 var police_st=$('#police_st_code').val();
            var police_st_code_arr=police_st.split('-');
            var police_st_code=police_st_code_arr[0];
            var uniform_code=police_st_code_arr[1];

	   var fir_no=$('#fir_no').val();
	   var firyear=$('#firyear').val();

	   var differ_mast_est = court_est_arr[2];

           if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                 errorAlert(alerts_array[71]);
                  return false;
           }


	  if(validate_state_dist_complex()) //======== written in comopnent.js
	 {

		   var fcaptcha_code=$('#fir_captcha_code').val();
			if(fcaptcha_code=='')
			{
				errorAlert(alerts_array[475]);
				return false;
			}
			var url="casestatus/submitFirNo";
			//var postdata =$("#search_fir").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;

			var postdata =$("#search_fir").serialize()+"&police_st_code="+police_st_code+"&uniform_code="+uniform_code+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
			
			$("#help_fir").hide();

			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
				function callbackComplex(obj){  
					$('#div_captcha_fir').html(obj.div_captcha);
					if(obj.status==0)
						{
						$("#fir_captcha_code").val('');
						captcha_image_audioObj.refresh();
						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
						return false;
						}
						else if(obj.status == 1)
					{ 				
						$('#res_fir').html(obj.case_data);	
						$('#fir_captcha_code').val('');				
					}	else {
						$('#res_fir').html('');
					}
					$('#res_fir').show();
				}
		}
	}
}


function submitAct()
{
	if(validatesAct())
	{
	   var state_code =$("#sess_state_code").val() ;
	   var dist_code=$('#sess_dist_code').val();
	   var courtArr=$('#court_complex_code').val();
	   var court_est_arr=courtArr.split("@");
	   var court_complex=court_est_arr[0];
	   var est_code=$('#court_est_code').val();

	   var differ_mast_est = court_est_arr[2];

           if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                  errorAlert(alerts_array[71]);
                  return false;
           }


	   if(validate_state_dist_complex()) //======== written in comopnent.js
	  {

			var fcaptcha_code=$('#act_captcha_code').val();
			if(fcaptcha_code=='')
			{
				errorAlert(alerts_array[475]);
				return false;
			}
		  
		   var url="casestatus/submitAct";

			var postdata =$("#frm_act").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
			//alert(postdata);
			$("#help_act").hide();
			
			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
				function callbackComplex(obj){  
					$('#div_captcha_act').html(obj.div_captcha);

					if(obj.status==0)
						{
						$("#act_captcha_code").val('');
						captcha_image_audioObj.refresh();
						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
						return false;
						}
						else if(obj.status == 1)
					{ 			
						$('#res_act').html(obj.act_data);				
						$('#act_captcha_code').val('');
					}	else {
						$('#res_act').html('');
					}
					$('#res_act').show();
				}
		}
	} 
}


function submitCaseType()
{
	if(validatesCaseType())
	{
	   var state_code =$("#sess_state_code").val() ;
	   var dist_code=$('#sess_dist_code').val();
	   var courtArr=$('#court_complex_code').val();
	   var court_est_arr=courtArr.split('@');
	   var court_complex=court_est_arr[0];
	   var est_code=$('#court_est_code').val();
	   var url="casestatus/submit_case_type";

	    var differ_mast_est = court_est_arr[2];

            if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
                        errorAlert(alerts_array[71]);
                        return false;
             }


	   if(validate_state_dist_complex()) //======== written in comopnent.js
	  {

			var fcaptcha_code=$('#ct_captcha_code').val();
			if(fcaptcha_code=='')
			{
				errorAlert(alerts_array[475]);
				return false;
			}  

				 
		   var postdata =$("#frm_casetype").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
		   $("#help_case_type").hide();
			

			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
			function callbackComplex(obj){  
			
				$('#div_captcha_ct').html(obj.div_captcha);	
				if(obj.status==0)
					{
					$("#ct_captcha_code").val('');
					captcha_image_audioObj.refresh();
					document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
					return false;
					}
					else if(obj.status == 1)
				{ 			
					$('#res_case_type').html(obj.case_data);	
					$('#ct_captcha_code').val('');				
				}	else {
					$('#res_case_type').html('');
				}
				$('#res_case_type').show();
			}
		 }
	}
}




function validateFilingNo(){

	$("#frm_file_search_name").validate();
    pattern();

	 $('#filing_no').rules('add', {
    	required:true,
		Number : true,
        messages: {
        required: alerts_array[254],
		Number : alerts_array[412],
        }
    });

	 $('#filyear').rules('add', {
    	required:true,
	Number : true,
	validateYear: true,
        messages: {
        required: alerts_array[115],
	Number : alerts_array[412],
	validateYear: 'Invalid Year',
        //maxlength: 'Jo Code is required maximum 254 characters',
        }
    });
        
    if(!$('#frm_file_search_name').valid())
        $('.error').first().focus();
    return $('#frm_file_search_name').valid();

}
/*
function validateAdvName()
{
	    pattern();
		$("#frm_adv_search_name").validate({
		errorPlacement: function(error, element) {
			//alert(element);
			if (element.data().chosen) { 
				//element.next().after(error);
			} 
			else if(element.attr("name")=="adv_bar_state"  || element.attr("name")=="adv_bar_code" || element.attr("name")=="adv_bar_year")
			{
				error.appendTo('#error_advocate_barcode');return;
				//element.next().after(error);
			}
			else if( element.attr("name")=="advocate_name"){ //alert("hi");
				error.appendTo('#error_advocate_name');return;
				//element.next().after(error);
			}else if(element.attr("name")=="caselist_date")
				{
					error.appendTo('#error_caselist_date');return;
				}
			else
			{
				element.next().after(error);
			}
		},
		 ignore: "", 
		  groups: {adv_state: "adv_bar_state adv_bar_code adv_bar_year"},
		  rules:{
				adv_bar_state: {required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false; } },
				adv_bar_code: {required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false; } },
				adv_bar_year: {	required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false;},validYear:true ,maxlength:4},
				adv_bar_state: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; } },
				adv_bar_code: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; } },
				adv_bar_year: {	required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; },validYear:true ,maxlength:4},
				caselist_date: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; },date:true},
				advocate_name: {	required: function() {if ($("#radAdvtName").prop("checked")) return true; else return false; } ,alphabet:true},
			
				
		  },
			
		 messages: {
				
					adv_bar_state:{
					required: alerts_array[95],
					//nospecialChars :alerts_array[280],
				},
				adv_bar_code:{
					required: alerts_array[95],
					//Number : alerts_array[412],
					},
				adv_bar_year: {
					required:alerts_array[95],
					//Number: alerts_array[412],
					ValidYear:"Invalid Year",
					maxlength: alerts_array[731] ,
				},
				advocate_name: { required: alerts_array[747] , alphabet : alerts_array[280],},
			    caselist_date:{ required: alerts_array[279],
						date:'Invalid Date',}
				
		  }

		}); //==== validate end

//==== dom end
     // alert(advocate_name);
  	//  if($('#frm_adv_search_name').valid()){    alert("in if hi"+$('#frm_adv_search_name').valid());}
       
    return $('#frm_adv_search_name').valid();

}

	function validateAdvName() {
    // Initialize validation with proper config
    $("#frm_adv_search_name").validate({
        errorPlacement: function(error, element) {
            if (element.data().chosen) {
                // handle chosen select plugin case here if needed
            }
            else if (element.attr("name") === "adv_bar_state" ||
                     element.attr("name") === "adv_bar_code" ||
                     element.attr("name") === "adv_bar_year") {
                error.appendTo('#error_advocate_barcode');
            }
            else if (element.attr("name") === "advocate_name") {
                error.appendTo('#error_advocate_name');
            }
            else if (element.attr("name") === "caselist_date") {
                error.appendTo('#error_caselist_date');
            }
            else {
                element.next().after(error);
            }
        },
        ignore: "",
        groups: {
            adv_state: "adv_bar_state adv_bar_code adv_bar_year"
        },
        rules: {
            advocate_name: {
                required: function () {
                    return $("#radAdvtName").prop("checked");
                },
                alphabet: true
            },
            adv_bar_state: {
                required: function () {
                    return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
                }
            },
            adv_bar_code: {
                required: function () {
                    return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
                }
            },
            adv_bar_year: {
                required: function () {
                    return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
                },
                validateYear: true,
                maxlength: 4
            },
            caselist_date: {
                required: function () {
                    return $("#radTodCaseList").prop("checked");
                },
                date: true
            }
        },
        messages: {
            advocate_name: {
                required: alerts_array[93],
                alphabet: alerts_array[280]
            },
            adv_bar_state: {
                required: alerts_array[95]
            },
            adv_bar_code: {
                required: alerts_array[95]
            },
            adv_bar_year: {
                required: alerts_array[95],
                validateYear: "Invalid Year",
                maxlength: alerts_array[731]
            },
            caselist_date: {
                required: alerts_array[279],
                date: "Invalid Date"
            }
        }
    });

    // Optional pattern check if defined
    if (typeof pattern === "function") {
        pattern();
    }

    return $('#frm_adv_search_name').valid();
}
*/

function validate_adv_name() {

    $("#frm_adv_search_name").validate();


    if (typeof pattern === 'function') {
        pattern();
    }

    if ($("#radAdvtBarCode").prop("checked") ) {

        $('#adv_bar_state').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],
                alphabet: alerts_array[280],
            }
        });

        $('#adv_bar_code').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],

            }
        });

        $('#adv_bar_year').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],

            }
        });

    }
	else if ($("#radTodCaseList").prop("checked")) {

        $('#adv_bar_state').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],
                alphabet: alerts_array[280],
            }
        });

        $('#adv_bar_code').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],

            }
        });

        $('#adv_bar_year').rules('add', {
            required: true,
            messages: {
                required: alerts_array[95],

            }
        });

	$('#caselist_date').rules('add', {
	//	alert(1);
            required: true,
            messages: {
              required: alerts_array[279],
				date:'Invalid Date',
            }
        });

    }
	else if ($("#radAdvtName").prop("checked")) {

        $('#advocate_name').rules('add', {
            required: true,
            messages: {
                required: alerts_array[93],
                alphabet: alerts_array[280],
            }
        });
    }

    const isValid = $('#frm_adv_search_name').valid();


    if (!isValid) {
        $('.error').first().focus();
    }

    return isValid;
}


 function validateCaseSubmit()
{
    $("#search_case").validate();
    pattern();
   
   /* $('#case_type').rules('add', {
    	//required:true,
        messages: {
        //required: alerts_array[44],
        //maxlength: 'Jo Code is required maximum 254 characters',
        }
    });*/

	 $('#search_case_no').rules('add', {
    	required:true,
		Number : true,
        messages: {
        required: alerts_array[682],
		Number : alerts_array[412],
        }
    });

	 $('#rgyear').rules('add', {
    	required:true,
		Number : true,
		maxlength : 4,
        validateYear:true,
        messages: {
        required: alerts_array[115],
		Number : alerts_array[412],
        maxlength: alerts_array[42],
	validateYear:"Invalid Year",
        }
    });
        
    if(!$('#search_case').valid())
        $('.error').first().focus();
    return $('#search_case').valid();

}


function validatePartyName()
{

	$("#frmsearch_name").validate();
    pattern();
	var sess_lang = $("#hidSelLang").val();
   if(sess_lang!='english')
  {
 		console.log(sess_lang);

        var fname = $('#petres_name').val();

        if (fname.charCodeAt(0)==34 || fname.charCodeAt(0)==39)
        {
                
                errorAlert(alerts_array[312]);
                return false;
        }

        if (fname.charCodeAt(0)==46 )
        {
               
                 errorAlert(alerts_array[481]);
                 return false;
        }


           for(i=0;i<fname.length;i++)
           {    
                var schar = fname.charAt(i);
                var achar = schar.charCodeAt(0);
                if((achar>=65 && achar<=90)||(achar>=97 && achar<=122))
                {
                      
                        errorAlert(alerts_array[94]);
                        return false;
                }
     
                if((achar>=33 && achar <=38) || (achar>=40 && achar <=45) ||(achar>=47 && achar <=64))
                {
                         
                         errorAlert(alerts_array[39]);
                        return false;
                }

}
      return true;
}else{   
    $('#petres_name').rules('add', {
    	required:true,
	alphabet : true,
	minlength :3,
        messages: {
        required: alerts_array[40],
	alphabet : alerts_array[280],
        minlength: alerts_array[322], //'Enter atleast 3 characters',
        }
    });

	 $('#rgyearP').rules('add', {
    	required:true,
	Number : true,
	maxlength : 4,
	validateYear: true,
        messages: {
        required: alerts_array[115],
	Number : alerts_array[412],
        maxlength: alerts_array[42],
	validateYear : "Invalid Year",
        }
    });
        
    if(!$('#frmsearch_name').valid())
        $('.error').first().focus();
    return $('#frmsearch_name').valid();
	}
}

function validateFirSubmit()
{
	$("#search_fir").validate();
    pattern();
   
    $('#police_st_code').rules('add', {
    	required:true,	
        messages: {
        required: alerts_array[73],
       
        }
    });

	 $('#firyear').rules('add', {
    //	required:true,
		Number : true,
		maxlength : 4,
	//	validateYear:true,
        messages: {
		Number : alerts_array[412],
        maxlength: alerts_array[42],
//	validateYear:"Invalid Year",
        }
    });

	 $('#fir_no').rules('add', {
		Number : true,
		//maxlength : 4,
        messages: {
		Number : alerts_array[412],
        }
    });
        
    if(!$('#search_fir').valid())
        $('.error').first().focus();
    return $('#search_fir').valid();


}

function show_bar_code()
{
	$('label.error').remove();

	$('#advocate_name').val('');
	$('#adv_bar_state').val('');
	$('#adv_bar_code').val('');
	$('#adv_bar_year').val('');

	var bar_code_checked = $("input[name='radAdvt']:checked").val(); //alert(bar_code_checked);
	if(bar_code_checked==2){ 
		$('.divAdvtBarCode').show();
		$('#advocate_name').val('');
		$('.adv_div').hide(); 
		$('.divCaseListCal').hide();
		$('#c_status').show();
		$("#res_adv_name").html('');
		
	} else if(bar_code_checked==1){
		$('.adv_div').show();
		$('.divAdvtBarCode').hide();
		$('.divCaseListCal').hide();
		$('#c_status').show();
		$("#res_adv_name").html('');
	}
	else if(bar_code_checked==3){
		$('#c_status').hide();
		$('.divCaseListCal').show();
		$('.divAdvtBarCode').show();
		$('.adv_div').hide();
		$("#res_adv_name").html('');
	}

	
}


function validatesAct()
{

	$("#frm_act").validate();
	pattern();
	   
	$('#actcode').rules('add', {
		required:true,	
		messages: {
		required: alerts_array[132],
	   
		}
	});

		
	if(!$('#frm_act').valid())
		$('.error').first().focus();
	return $('#frm_act').valid();

}

function validatesCaseType()
{

	$("#frm_casetype").validate();
	pattern();
	   
	$('#case_type_2').rules('add', {
		required:true,	
		messages: {
		required: alerts_array[44],
	   
		}
	});

	 $('#search_year').rules('add', {
    	required:true,
		Number : true,
		maxlength : 4,
		validateYear:true,
        messages: {
        required: alerts_array[115],
		Number : alerts_array[412],
        maxlength: alerts_array[42],
	validateYear:"Invalid Year",
        }
    });

		
	if(!$('#frm_casetype').valid())
		$('.error').first().focus();
	return $('#frm_casetype').valid();


}

