// console.clear();

// $(document).ready(function () {
//   if (!$.isArray) {
//     $.isArray = Array.isArray;
//   }

//   if (!$.trim) {
//     $.trim = function (str) {
//       return (str || "").trim();
//     };
//   }
//   //location.reload(true);
//   $("#main_back_CaveatSearch").hide();
//   $("#main_back_CauseList").hide();
//   $("#main_back_cnr").hide();

//   $.ajaxSetup({ cache: true });
//   //$('select').chosen();
//   $.validator.setDefaults({ ignore: ":hidden:not(select)" });

//   /*  $("#change-profile-pic").click( function(e){
// 		//alert('anil');
// 		e.preventDefault();
// 		$("#changePic").modal('show');
// 	});

// 	$("#change-password").on('click', function(e){
// 		e.preventDefault();
// 		$("#changePassword").modal('show');
// 		$('#old_pass').val('');
// 		$('#new_pass').val('');
// 		$('#conf_pass').val('');
// 	});

// 	$('#photoimg').change(function()	
// 	{ 
// 		$("#preview-avatar-profile").html('');
// 		$("#preview-avatar-profile").html('Uploading....');
// 		var postdata=new FormData($('#cropimage')[0]);
	
// 	 	var url="profile/changeAvatar";
// 		ajaxCallNew(url,postdata,callback,'cropimage');
// 		function callback(result)
// 		{
// 			$('#preview-avatar-profile').html(result.image);
// 			$('img#photo').imgAreaSelect({
// 				aspectRatio: '1:1',
// 				onSelectEnd: getSizes
// 				});
// 		}
// 		/*$("#cropimage").ajaxForm(
// 		{
// 		target: '#preview-avatar-profile',
// 		success:    function() { 
// 				$('img#photo').imgAreaSelect({
// 				aspectRatio: '1:1',
// 				onSelectEnd: getSizes,
// 			});
// 			}
// 		}).submit();

// 	});*/

//   noBack();
//   //window.history.back();
//   /*document.onmousedown=disableclick;
// 	status="Right Click is not allowed";
	
//     $(document).on("keydown", disableF5);
// 	*/
//   /*var sidebar=localStorage.getItem("sidebar");
// 	//alert(sidebar+'=='+$( "#accordionSidebar" ).hasClass( "toggled" ))
// 	if(sidebar=='Y')
// 		$('#accordionSidebar').addClass('toggled');
// 	else
// 		$('#accordionSidebar').removeClass('toggled');*/

//   $(document).on("click", function () {
//     $(".collapse").removeClass("show");
//   });

//   setToken();
// });

// function showmodalReport(url) {
//   $("#modal_ifr").modal("show");
//   str = "<iframe src='" + url + "' style='width:100%; height:90vh;'></iframe>";
//   $("#db_title").attr("style", "color:#fda006;");
//   //alert(result)
//   // $('#db_body').load($(this).attr('href'));
//   $("#modal_ifr_body").html(str);
// }

// function externalLink(url) {
//   $("#externalSiteModal").modal("show");
//   $("#externalSiteLink").attr("href", url);
// }

// function setToken() {
//   var app_token = $("#app_token").val();
//   //alert('anilPPP'+app_token);
//   $("a").on("click", function () {
//     //alert('anil'+$(this).attr('href'));
//     var href = $(this).attr("href");
//     if (app_token != undefined && href != undefined) {
//       if (!$(this).hasClass("noToken")) $(this).attr("href", "#");
//       //alert(href)
//       var ques = href.includes("?");
//       var token_exists = href.includes("app_token");
//       if (!token_exists) {
//         if (!$(this).hasClass("noToken")) {
//           if (ques) href1 = href + "&app_token=" + app_token;
//           else href1 = href + "?app_token=" + app_token;
//         }
//       } else {
//         if (!$(this).hasClass("noToken")) {
//           a = href.split("app_token");
//           href1 = a[0] + "app_token=" + app_token;
//         }
//       }
//       if (!$(this).hasClass("noToken")) $(this).attr("href", href1);
//       //alert('role'+$(this).attr('href'));
//     }
//   });
//   $("button").on("click", function () {
//     $("a").each(function () {
//       //alert('anil'+$(this).attr('href'));
//       var href = $(this).attr("href");
//       if (app_token != undefined && href != undefined) {
//         if (!$(this).hasClass("noToken")) $(this).attr("href", "#");
//         //alert(href)
//         var ques = href.includes("?");
//         var token_exists = href.includes("app_token");
//         if (!token_exists) {
//           if (!$(this).hasClass("noToken")) {
//             if (ques) href1 = href + "&app_token=" + app_token;
//             else href1 = href + "?app_token=" + app_token;
//           }
//         } else {
//           if (!$(this).hasClass("noToken")) {
//             a = href.split("app_token");
//             href1 = a[0] + "app_token=" + app_token;
//           }
//         }
//         if (!$(this).hasClass("noToken")) $(this).attr("href", href1);
//         //alert('role'+$(this).attr('href'));
//       }
//     });
//   });
// }
// function requestUri(param) {
//   var app_token = $("#app_token").val();
//   var base_url = $("#base_url").val();
//   var redirect_path = base_url + "/?p=" + param + "&app_token=" + app_token;
//   //alert(redirect_path)
//   window.location.replace(redirect_path);
// }
// function noBack() {
//   window.history.forward();
// }

// function disableclick(e) {
//   if (event.button == 2) {
//     alert(status);
//     return false;
//   }
// }
// function checkStatus(cnr, filename, case_val) {
//   var url = "cnr_status/checkStatus";
//   var postdata =
//     "case_no=" + cnr + "&filename=" + filename + "&case_val=" + case_val;
//   //alert(postdata);
//   ajaxCall({ url: url, postdata: postdata, callback: callbk });
//   function callbk(result) {}
// }

// function displayPdf(normal_v, case_num, court_code, ofilename, appFlag) {
//   var url = "home/display_pdf";
//   var postdata =
//     "&normal_v=" +
//     normal_v +
//     "&case_val=" +
//     case_num +
//     "&court_code=" +
//     court_code +
//     "&filename=" +
//     ofilename +
//     "&appFlag=" +
//     appFlag;
//   //alert(postdata);
//   ajaxCall({ url: url, postdata: postdata, callback: callbk });
//   function callbk(result) {
//     //alert(window.matchMedia("(max-width: 767px)").matches);
//     if (result.status) {
//       if (window.matchMedia("(max-width: 767px)").matches) {
//         //window.location.replace("https://services.ecourts.gov.in/ecourtindia_v6/"+result.order);
//         window.open(
//           "https://services.ecourts.gov.in/ecourtindia_v6/" + result.order,
//           "_blank",
//         );
//       } else {
//         $("#p_order").val(result.order);
//         file_name =
//           "<object data='" +
//           result.order +
//           "' height='100%' width='100%' style='min-height:600px;'></object>";
//         $("#modal_order_body").show().html(file_name);
//         var myModal = new bootstrap.Modal($("#modalOders"), {
//           backdrop: "static", //remove ability to close modal with click
//           keyboard: false, //remove option to close with keyboard
//           show: true, //Display loader!
//         });
//       }
//       myModal.toggle();
//     }
//   }
// }

// function display_case_acknowlegement(url) {
//   //alert(url);
//   //var url='cnr_status/checkStatus';
//   var postdata = "";
//   //alert(postdata);
//   ajaxCall({ url: url, postdata: postdata, callback: callbk });
//   function callbk(result) {
//     if (result.status) {
//       $("#modal_ack_body").show().html(result.ack_details);
//       var myModal = new bootstrap.Modal($("#modal-ack"), {
//         backdrop: "static", //remove ability to close modal with click
//         keyboard: false, //remove option to close with keyboard
//         show: true, //Display loader!
//       });
//       myModal.toggle();
//     }
//   }
// }

// function closefile() {}

// function funView_CinoHistory(cino) {
//   var cinolen = cino.length;

//   if (cinolen != 16) {
//     errorAlert(alerts_array[262]);
//     return false;
//   }
//   var cino = cino.toUpperCase();

//   if (cino != "") {
//     if (!cino.match(/^[a-zA-Z0-9]+$/) && cino != "") {
//       errorAlert(alerts_array[263]);
//       return false;
//     }
//   }
//   var url = "cnr_status/viewCNRHistory/";
//   var postdata = "cino=" + cino;
//   ajaxCall({ url: url, postdata: postdata, callback: callbackEST });
//   /*$('#cnr_div').hide();
// 		$('#help_cnr').hide();
// 		$('#main_back_cnr').show();*/
//   function callbackEST(result) {
//     $("#modal_est_trans_body").html("");
//     $(this).attr("href", "javascript:void(0);");
//     //$('#div_captcha_cnr').html(result.div_captcha);
//     if (result.status) {
//       $("#modal_trans_est").show();
//       $("#modal_est_trans_body").html(result.casetype_list);
//     }
//   }
// }

// function disableF5(e) {
//   if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82)
//     e.preventDefault();
// }

// function ajaxCall(jsonobj) {
//   $(".alert-danger").hide();
//   $("#msg-danger").html("");
//   $(".alert-success").hide();
//   $("#msg-success").html("");
//   var base_url = $("#base_url").val();
//   var token = $("#app_token").val();
//   var url = jsonobj.url;
//   var postdata = jsonobj.postdata;
//   var callback = jsonobj.callback;
//   var connection = jsonobj.connection;
//   var redirect = jsonobj.redirect;
//   var flag = jsonobj.flag;

//   var result = [];
//   if (jsonobj.chosen == false) objchosen = { chosen: false };
//   else if (jsonobj.chosen == true) objchosen = { chosen: true };
//   else if (typeof jsonobj["chosen"] == "undefined")
//     objchosen = { chosen: false };
//   if (typeof jsonobj["dataType"] == "undefined") jsondataType = "json";
//   else jsondataType = jsonobj.dataType;

//   if (typeof jsonobj["loader"] == "undefined") objloader = { loader: true };
//   else objloader = jsonobj.loader;
//   if (objloader && flag != "header") fadein();

//   setTimeout(function () {
//     var chosen = objchosen.chosen;

//     var estCode = $("#selEstablishment").val();
//     if (estCode != "" && estCode != undefined) {
//       var myarr = estCode.split("~");
//       var stateCode = myarr[0];
//       var distCode = myarr[1];
//       var estCode = myarr[2];
//     }

//     /*if($('#hid_case_adv_pde').val() && $('#hid_case_adv_flag').val()){
// 		postdata +="&hid_case_adv_pde="+$('#hid_case_adv_pde').val()+"&hid_case_adv_flag="+$('#hid_case_adv_flag').val()
// 	}*/

//     $.ajax({
//       type: "POST",
//       url: base_url + "/?p=" + url,
//       dataType: jsondataType,
//       async: false,
//       data: postdata + "&ajax_req=" + true + "&app_token=" + token,
//       error: function (jqXHR, textStatus, errorThrown) {
//         if (flag != "header") {
//           fadeout();
//         }
//         //setTimeout(function(){fadeout()},300);
//         //	setTimeout(function(){fadeout()},1000);
//         var responseArray = jqXHR.responseText.split("#####");

//         if (redirect == "Y") {
//           $("#redirect").html(jqXHR.responseText);
//         }

//         $("#submitdata").attr("disabled", false);

//         if (responseArray[1] != "" && responseArray[1] != undefined) {
//           $("#app_token").val(responseArray[1]);
//           setToken();
//         } else {
//           responseArray = jqXHR.responseText.split('"app_token":"');
//           if (responseArray[1] != undefined) {
//             abc = responseArray[1].split('"}');
//             if (abc != undefined) {
//               $("#app_token").val(abc[0]);
//               setToken();
//             }
//           }
//           /*else
// 				{
// 					$.ajax({
// 					type: "POST",
// 					url:  base_url+'/?p=defaultCls/amrt',
// 					dataType: jsondataType,
// 					async: false,
// 					data:postdata+'&ajax_req='+true+'&app_token='+token,		
// 					error: function(jqXHR, textStatus, errorThrown) {
// 					},
// 					success:function( result ) {
// 						$('#app_token').val(result.amrt);
// 						setToken();
// 					}
// 					});
// 				}*/
//         }
//         if (
//           responseArray[0] != "" &&
//           responseArray[0] != undefined &&
//           responseArray[0] != null &&
//           redirect != "Y"
//         )
//           errorAlert(responseArray[0]);

//         result["status"] = false;
//         callback(result);
//       },
//       beforeSend: function () {},
//       success: function (result) {
//         $("#app_token").val(result.app_token);
//         setToken();
//         //if(url != restricted_url && url != restricted_url1){
//         if (flag != "header") {
//           setTimeout(function () {
//             fadeout();
//           }, 300);
//           setTimeout(function () {
//             fadeout();
//           }, 1000);
//         }
//         //}
//         if (
//           result.errormsg != "" &&
//           result.errormsg != undefined &&
//           result.errormsg != null
//         ) {
//           errorAlert(result.errormsg);
//           result["status"] = false;
//           callback(result);
//           return false;
//         }
//         if (result.msg != "" && result.msg != undefined && result.msg != null) {
//           successAlert(result.msg);
//         }

//         if (flag != "header") {
//           setTimeout(function () {
//             fadeout();
//           }, 1500);
//         }
//         result["status"] = true;
//         callback(result);
//       },
//     });
//   }, 50);
// }

// function ajaxCallNormal(jsonobj) {
//   $(".alert-danger").hide();
//   $("#msg-danger").html("");
//   $(".alert-success").hide();
//   $("#msg-success").html("");
//   var base_url = $("#base_url").val();
//   var token = $("#app_token").val();
//   var url = jsonobj.url;
//   var postdata = jsonobj.postdata;
//   var callback = jsonobj.callback;
//   var connection = jsonobj.connection;
//   var result = [];
//   if (jsonobj.chosen == false) objchosen = { chosen: false };
//   else if (jsonobj.chosen == true) objchosen = { chosen: true };
//   else if (typeof jsonobj["chosen"] == "undefined")
//     objchosen = { chosen: false };
//   if (typeof jsonobj["dataType"] == "undefined") jsondataType = "json";
//   else jsondataType = jsonobj.dataType;

//   if (typeof jsonobj["loader"] == "undefined") objloader = { loader: true };
//   else objloader = jsonobj.loader;
//   if (objloader)
//     //		fadein();

//     var chosen = objchosen.chosen;
//   var estCode = $("#selEstablishment").val();

//   if (estCode != "" && estCode != undefined) {
//     var myarr = estCode.split("~");
//     var stateCode = myarr[0];
//     var distCode = myarr[1];
//     var estCode = myarr[2];
//   }

//   if ($("#hid_case_adv_pde").val() && $("#hid_case_adv_flag").val()) {
//     postdata +=
//       "&hid_case_adv_pde=" +
//       $("#hid_case_adv_pde").val() +
//       "&hid_case_adv_flag=" +
//       $("#hid_case_adv_flag").val();
//   }

//   var restricted_url = "advocate_case_registration/getActs";
//   var restricted_url1 = "advocate_case_registration/autocomplete_section";
//   $.ajax({
//     type: "POST",
//     url: base_url + "/?p=" + url,
//     async: false,
//     data: postdata + "&ajax_req=" + true + "&app_token=" + token,
//     error: function (jqXHR, textStatus, errorThrown) {
//       var responseArray = jqXHR.responseText.split("#####");
//       if (
//         responseArray[0] != "" &&
//         responseArray[0] != undefined &&
//         responseArray[0] != null
//       )
//         errorAlert(responseArray[0]);
//       setTimeout(function () {
//         fadeout();
//       }, 300);
//       setTimeout(function () {
//         fadeout();
//       }, 1000);
//       $("#submitdata").attr("disabled", false);

//       if (responseArray[1] != "" && responseArray[1] != undefined) {
//         $("#app_token").val(responseArray[1]);
//         setToken();
//       }

//       result["status"] = false;
//       callback(result);
//     },
//     beforeSend: function () {
//       //alert('fadein')
//       //if(chosen && url != restricted_url && url != restricted_url1)
//     },
//     success: function (result) {
//       $("#app_token").val(result.app_token);
//       setToken();
//       //if(url != restricted_url && url != restricted_url1){
//       setTimeout(function () {
//         fadeout();
//       }, 300);
//       setTimeout(function () {
//         fadeout();
//       }, 1000);
//       //}
//       if (
//         result.errormsg != "" &&
//         result.errormsg != undefined &&
//         result.errormsg != null
//       ) {
//         //$(".alert-danger").show();$("#msg-danger").html(result.errormsg);
//         errorAlert(result.errormsg);
//         result["status"] = false;
//         callback(result);
//       }
//       if (result.msg != "" && result.msg != undefined && result.msg != null) {
//         successAlert(result.msg);
//       }

//       callback(result);
//     },
//   });
// }

// function ajaxExternalCall(url, postdata, callback) {
//   $(".alert-danger").hide().html("");
//   $(".alert-success").hide().html("");

//   $.ajax({
//     type: "POST",
//     url: url,
//     dataType: "json",
//     async: false,
//     data: postdata,
//     error: function (jqXHR, textStatus, errorThrown) {
//       fadeout();
//     },
//     beforeSend: function () {
//       fadein();
//     },
//     success: function (result) {
//       fadeout();

//       callback(result);
//     },
//   });
// }

// function jsonCall(url, postdata, callback) {
//   $(".alert-danger").hide().html("");
//   $(".alert-success").hide().html("");
//   var base_url = $("#base_url").val();
//   var token = $("#app_token").val();

//   var url1 = base_url + "/?p=" + url + "&app_token=" + token;
//   //var url="jsonFiles/jsondistrict.php";
//   fadein();
//   $.getJSON(url1, postdata, function (obj) {
//     fadeout();
//     if (obj.errormsg != "" && obj.errormsg != undefined && obj.errormsg != null)
//       $(".alert-danger").show().html(obj.errormsg);
//     if (obj.msg != "" && obj.msg != undefined && obj.msg != null)
//       $(".alert-success").show().html(obj.msg);
//     $("#app_token").val(obj.app_token);
//     setToken();
//     callback(obj);
//   }).fail(function (jqXHR, textStatus, errorThrown) {
//     var responseArray = jqXHR.responseText.split("#####");
//     $(".alert-danger").show().html(jqXHR.responseText);
//     //$('#submitdata').attr('disabled',false);
//     fadeout();
//     if (responseArray[1] != "" && responseArray[1] != undefined) {
//       $("#app_token").val(responseArray[1]);
//       setToken();
//     }
//   });
// }

// function ajaxCallNew(url, postdata, callback, formid) {
//   $(".alert-danger").hide().html("");
//   $(".alert-success").hide().html("");
//   var base_url = $("#base_url").val();
//   var token = $("#app_token").val();
//   postdata.append("ajax_req", true);
//   var result = [];
//   fadein();
//   $.ajax({
//     type: "POST",
//     url: base_url + "/?p=" + url,
//     dataType: "json",
//     async: "false",
//     cache: false,
//     contentType: false,
//     processData: false,
//     data: postdata,
//     error: function (jqXHR, textStatus, errorThrown) {
//       var responseArray = jqXHR.responseText.split("#####");

//       if (
//         responseArray[0] != "" &&
//         responseArray[0] != undefined &&
//         responseArray[0] != null
//       )
//         errorAlert(responseArray[0]);
//       setTimeout(function () {
//         fadeout();
//       }, 300);
//       setTimeout(function () {
//         fadeout();
//       }, 1000);
//       $("#submitdata").attr("disabled", false);

//       if (responseArray[1] != "" && responseArray[1] != undefined) {
//         $("#app_token").val(responseArray[1]);
//         setToken();
//       }

//       result["status"] = false;
//       callback(result);
//     },
//     beforeSend: function () {
//       //alert('fadein')
//       //if(chosen && url != restricted_url && url != restricted_url1)
//     },
//     success: function (result) {
//       $("#app_token").val(result.app_token);
//       setToken();
//       //if(url != restricted_url && url != restricted_url1){
//       //	setTimeout(function(){fadeout()},300);
//       //	setTimeout(function(){fadeout()},1000);
//       //}
//       if (
//         result.errormsg != "" &&
//         result.errormsg != undefined &&
//         result.errormsg != null
//       ) {
//         //$(".alert-danger").show();$("#msg-danger").html(result.errormsg);
//         errorAlert(result.errormsg);
//         result["status"] = false;
//         callback(result);
//       }
//       if (result.msg != "" && result.msg != undefined && result.msg != null) {
//         successAlert(result.msg);
//       }
//       result["status"] = true;
//       callback(result);
//     },
//   });
// }
// function fadein() {
//   //$("form").css("background",'#989898').css("opacity",'0.7');
//   //$(".faded").show();
//   var myModal = new bootstrap.Modal($("#loadMe"), {
//     backdrop: "static", //remove ability to close modal with click
//     keyboard: false, //remove option to close with keyboard
//     show: true, //Display loader!
//   });
//   myModal.toggle();
// }
// function fadeout() {
//   //$("form").show().css("background",'white').css("opacity",'1');
//   //$(".faded").hide();

//   $("#loadMe").modal("hide");
//   $("#loadMe").removeClass("show");
//   $("#loadMe").removeClass("fade");
//   $("#loadMe").addClass("hide");
//   $("body").removeAttr("style");
//   $(".modal-backdrop").remove();
//   //alert('bbb')
// }

// function closeModel(obj) {
//   var modal_id = obj.modal_id;
//   var clear_data = obj.clear_data_id;
//   if (clear_data != "" && clear_data != undefined) $("#" + clear_data).html("");

//   $("#" + modal_id).modal("hide");
//   $("#" + modal_id).removeClass("show");
//   $("#" + modal_id).removeClass("fade");
//   $("#" + modal_id).addClass("hide");
//   $(".xdsoft_datetimepicker").hide();
//   $(".popover").popover("hide");
//   $(".modal-backdrop").remove();
// }

// function get_age(dob) {
//   var diff_ms = Date.now() - dob.getTime();
//   var age_dt = new Date(diff_ms);

//   return Math.abs(age_dt.getUTCFullYear() - 1970);
// }

// function datePickerIcon(mydate, maxDate1, minDate1) {
//   var base_url = $("#base_url").val();
//   if (minDate1 == "" || minDate1 == undefined)
//     minDate1 = new Date("15-08-1947"); //minDate1='15-08-1947';

//   $("#" + mydate)
//     .datepicker({
//       // defaultDate: new Date(2014, February 2015'),
//       onClose: function (date, datepicker) {
//         if (datepicker.id == "fpet_dob") {
//           if (date != "") {
//             var bdate = date.split("-");
//             var bday = bdate[0];
//             var bmonth = bdate[1];
//             var byear = bdate[2];
//             var my_age = get_age(new Date(byear, bmonth, bday));
//             $("#fextra_age").val(my_age);
//           }
//         }

//         if (datepicker.id == "fpet_dob_lh") {
//           if (date != "") {
//             var bdate = date.split("-");
//             var bday = bdate[0];
//             var bmonth = bdate[1];
//             var byear = bdate[2];
//             var my_age = get_age(new Date(byear, bmonth, bday));
//             $("#fextra_age_lh").val(my_age);
//           }
//         }
//       },
//       dateFormat: "dd-mm-yy",
//       changeMonth: true,
//       changeYear: true,
//       // beforeShowDay: editDays,
//       showOtherMonths: true,
//       selectOtherMonths: true,
//       showOn: "button",
//       buttonImage: base_url + "/jquery-date/images/calendar.gif",
//       buttonImageOnly: true,
//       maxDate: maxDate1,
//       minDate: minDate1,
//       yearRange: "-100:+2",
//     })
//     .next("img.ui-datepicker-trigger")
//     .attr("tabIndex", "-1");
// }

// function compulsaryCheck(str, flag) {
//   if (flag == "Y") {
//     $("#" + str).rules("add", {
//       required: true,
//       messages: {
//         required: alerts_array[1],
//       },
//     });
//     setTimeout(function () {
//       $("#" + str).css("background", "rgb(229, 247, 254)");
//     }, 300);
//   } else if (flag == "N") {
//     $("#" + str).rules("add", {
//       required: false,
//     });
//     setTimeout(function () {
//       $("#" + str).css("background", "white");
//     }, 300);
//   }
// }
// function manualCheck(str, msg) {
//   if (msg == "N") {
//     $("#" + str).rules("add", {
//       manual_invalid: false,
//     });
//   } else {
//     $("#" + str).rules("add", {
//       manual_invalid: true,
//       messages: {
//         manual_invalid: msg,
//       },
//     });
//   }
// }

// function customizeValidation(str, msg, reg_expr) {
//   $('[name="' + str + '"]').rules("add", {
//     cutomize: true,

//     messages: {
//       cutomize: msg,
//     },
//   });

//   $.validator.addMethod("cutomize", function (value, element) {
//     var regex = new RegExp(reg_expr);
//     var key = value;

//     if (regex.test(key)) {
//       return true;
//     }
//     return false;
//   });
// }
// function logOut() {
//   var base_url = $("#base_url").val();
//   var a = confirm("Are you sure you want to logout?");
//   if (a) {
//     var app_token = $("#app_token").val();
//     window.location.href =
//       "" + base_url + "/?p=login/logOut&app_token=" + app_token;
//   }
// }

// function sideBarToggle() {
//   $("#accordionSidebar").toggleClass("toggled");
//   if ($("#accordionSidebar").hasClass("toggled"))
//     localStorage.setItem("sidebar", "Y");
//   else localStorage.setItem("sidebar", "N");
//   $("#appl_logo").toggleClass("appl_logo");
// }

// $.validator.addMethod("accept", function (value, element, param) {
//   return value.match(new RegExp("." + param + "$"));
// });
// $.validator.addMethod("alphanum", function (value, element) {
//   return this.optional(element) || /^\w+$/i.test(value);
// });

// $.validator.addMethod("EngNotAllowed", function (value, element) {
//   var regex = new RegExp("^[^a-zA-Z]*$");
//   var key = value;

//   if (regex.test(key)) {
//     return true;
//   }
//   return false;
// });

// $.validator.addMethod(
//   "time",
//   function (value, element, param) {
//     return (
//       value == "" ||
//       value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/) ||
//       value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
//     );
//   },
//   "Enter a valid time: hh:mm",
// );

// $.validator.addMethod("EngAndSpecialCharNotAllowed", function (value, element) {
//   var regex = new RegExp('^[^a-zA-Z<>";`%!~#$|+%&*=\[\\]\:^{}?]*$');
//   var key = value;

//   if (regex.test(key)) {
//     return true;
//   }
//   return false;
// });
// $.validator.addMethod("OnlySpecialCharsNotAllowed", function (value, element) {
//   // var regex = new RegExp("^[0-9@,-./_]*$");
//   var regex = new RegExp("^[^0-9][()@,./\-_:]*$");
//   var key = value;

//   if (regex.test(key)) {
//     return false;
//   } else {
//     return true;
//   }
// });
// $.validator.addMethod("CharCheckForSection", function (value, element) {
//   var regexalpha = new RegExp("^[a-zA-Z0-9,()]+$");
//   var keyalpha = value;

//   if (regexalpha.test(keyalpha) || keyalpha == "") {
//     return true;
//   }
//   return false;
// });

// $.validator.addMethod("specialChars", function (value, element) {
//   var regex = new RegExp('^[^<>";`%!~#$|+%&*=\[\\]\:^{}?]*$');
//   var key = value;

//   if (regex.test(key)) {
//     return true;
//   }
//   return false;
// });

// $.validator.addMethod("nospecialChars", function (value, element) {
//   //var regex = new RegExp("^[^<>'\"/;`%!~#$%&*()=\[\\]\:{}?@.,_-]*$");
//   var regex = new RegExp("^[a-zA-Z]+$");
//   var key = value;

//   if (regex.test(key)) {
//     return true;
//   }
//   return false;
// });
// $.validator.addMethod("urlspecialChars", function (value, element) {
//   var regex = new RegExp("^[^<>'\";`%!~#$%&*()=\[\\]\^{}?@,]*$");
//   var key = value;

//   if (regex.test(key)) {
//     return true;
//   }
//   return false;
// });

// /*$.validator.addMethod("alphabet", function( value, element ) {
//         var regexalpha = new RegExp("^[a-zA-Z0-9()@,. -_/\\n]+$");
//         var keyalpha = value;

//         if (regexalpha.test(keyalpha) || keyalpha=='') {
//            return true;
//         }
//         return false;
//     });*/

// $.validator.addMethod("emailchar", function (value, element) {
//   var regexalpha = new RegExp("^[a-zA-Z0-9@._-]+$");
//   var keyalpha = value;

//   if (regexalpha.test(keyalpha) || keyalpha == "") {
//     return true;
//   }
//   return false;
// });

// $.validator.addMethod("alphabetnumber", function (value, element) {
//   var regexalpha = new RegExp("^[a-zA-Z0-9,]+$");
//   var keyalpha = value;

//   if (regexalpha.test(keyalpha) || keyalpha == "") {
//     return true;
//   }
//   return false;
// });

// $.validator.addMethod("noalphabet", function (value, element) {
//   var regexalpha = new RegExp("^[a-zA-Z]+$");
//   var keyalpha = value;

//   if (regexalpha.test(keyalpha) && keyalpha != "") {
//     return false;
//   }
//   return true;
// });
// $.validator.addMethod("manual_valid", function (value, element) {
//   return true;
// });
// $.validator.addMethod("manual_invalid", function (value, element) {
//   return false;
// });

// function hasWhiteSpace(s) {
//   return /\s/g.test(s);
// }

// $.validator.addMethod("notNumber", function (value, element, param) {
//   var reg = /[0-9]/;
//   var regex = new RegExp("^[0-9()@,-./_]*$");
//   var regex1 = new RegExp(
//     "^[()@,-./_0-9()@,-./_ ']+( [()@,-./_0-9()@,-./_ ']+)*$",
//   );
//   //var regex2 = new RegExp("^[0-9@,./_]+( [0-9']+)*$");

//   /* if((!isNaN(value) || value.indexOf(' ') >= 0 || regex.test(value)) && value!="" ){
// 			 return false;
// 	   }else{
// 			   return true;
// 	   }
// 	 */
//   //if((!isNaN(value) || regex.test(value) || regex1.test(value) || value.indexOf('\\') >= 0) && value!="" )--for not allowing \
//   if (
//     (!isNaN(value) || regex.test(value) || regex1.test(value)) &&
//     value != ""
//   ) {
//     return false;
//   } else {
//     return true;
//   }
// });

// $.validator.addMethod("Number", function (value, element, param) {
//   var reg = /^[0-9]+$/;
//   if (reg.test(value)) {
//     return true;
//   } else {
//     return false;
//   }
// });

// $.validator.addMethod("onlyzeronotallowed", function (value, element, param) {
//   if (value != "") {
//     if (parseInt(value) > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return true;
//   }
// });

// $.validator.addMethod("noNumberAtAll", function (value, element, param) {
//   var reg = /[0-9]/;
//   if (reg.test(value)) {
//     return false;
//   } else {
//     return true;
//   }
// });

// $.validator.addMethod("validstring", function (value, element, param) {
//   var reg = /(.)\1{2,}/;
//   if (reg.test(value)) {
//     return false;
//   } else {
//     return true;
//   }
// });

// $.validator.addMethod("date", function (date, element) {
//   //
//   /*var regDate = /^(((0[1-9]|[12]\d|3[01])\-(0[13578]|1[02])\-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\-(0[13456789]|1[012])\-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\-02\-((19|[2-9]\d)\d{2}))|(29\-02\-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
//    if (optional(element) || date.match(regDate))
// 	{
// 		return true;
// 	}
// 	return false;*/
//   return (
//     this.optional(element) ||
//     date.match(
//       /^(((0[1-9]|[12]\d|3[01])\-(0[13578]|1[02])\-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\-(0[13456789]|1[012])\-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\-02\-((19|[2-9]\d)\d{2}))|(29\-02\-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
//     )
//   );
// });

// $.validator.addMethod("float1", function (value, element) {
//   var reg = /^[-+]?\d{0,12}(\.\d{1})?\d{0,2}$/;
//   if (reg.test(value)) {
//     return true;
//   } else {
//     return false;
//   }
// });

// function errorAlert(msg) {
//   //alert("err="+msg);
//   $("#successIcon").addClass("d-none");
//   $("#errorIcon").removeClass("d-none");
//   $(".alert-danger-cust").show().html(msg);
//   $(".alert-success-cust").hide().html("");
//   //	$('#validateError').modal('show');

//   var myModal = new bootstrap.Modal($("#validateError"), {
//     backdrop: "static", //remove ability to close modal with click
//     keyboard: false, //remove option to close with keyboard
//     show: true, //Display loader!
//   });
//   myModal.toggle();

//   /*$("#validateError").modal({
// 	 backdrop: "static", //remove ability to close modal with click
// 	 keyboard: false, //remove option to close with keyboard
// 	  show: true //Display loader!
// 	});*/
// }
// function successAlert(msg) {
//   $("#errorIcon").addClass("d-none");
//   $("#successIcon").removeClass("d-none");
//   $(".alert-success-cust").show().html(msg);
//   $(".alert-danger-cust").hide().html("");

//   var myModal = new bootstrap.Modal($("#validateError"), {
//     backdrop: "static", //remove ability to close modal with click
//     keyboard: false, //remove option to close with keyboard
//     show: true, //Display loader!
//   });
//   myModal.toggle();

//   /*$("#validateError").modal({
// 	  backdrop: "static", //remove ability to close modal with click
// 	  keyboard: false, //remove option to close with keyboard
// 	  show: true //Display loader!
// 	});*/
// }

// function pattern() {
//   $.validator.addMethod("alphanum", function (value, element) {
//     return this.optional(element) || /^\w+$/i.test(value);
//   });

//   $.validator.addMethod("EngNotAllowed", function (value, element) {
//     var regex = new RegExp("^[^a-zA-Z]*$");
//     var key = value;

//     if (regex.test(key)) {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod(
//     "time",
//     function (value, element, param) {
//       return (
//         value == "" ||
//         value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]$/) ||
//         value.match(/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)
//       );
//     },
//     "Enter a valid time: hh:mm",
//   );

//   $.validator.addMethod(
//     "EngAndSpecialCharNotAllowed",
//     function (value, element) {
//       var regex = new RegExp('^[^a-zA-Z<>";`%!~#$|+%&*=\[\\]\:^{}?]*$');
//       var key = value;

//       if (regex.test(key)) {
//         return true;
//       }
//       return false;
//     },
//   );
//   $.validator.addMethod(
//     "OnlySpecialCharsNotAllowed",
//     function (value, element) {
//       // var regex = new RegExp("^[0-9@,-./_]*$");
//       var regex = new RegExp("^[^0-9][()@,./\-_:]*$");
//       var key = value;

//       if (regex.test(key)) {
//         return false;
//       } else {
//         return true;
//       }
//     },
//   );
//   $.validator.addMethod("CharCheckForSection", function (value, element) {
//     var regexalpha = new RegExp("^[a-zA-Z0-9,()]+$");
//     var keyalpha = value;

//     if (regexalpha.test(keyalpha) || keyalpha == "") {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod("specialChars", function (value, element) {
//     var regex = new RegExp('^[^<>";`%!~#$|+%&*=\[\\]\:^{}?]*$');
//     var key = value;

//     if (regex.test(key)) {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod("nospecialChars", function (value, element) {
//     //var regex = new RegExp("^[^<>'\"/;`%!~#$%&*()=\[\\]\:{}?@.,_-]*$");
//     var regex = new RegExp("^[a-zA-Z]+$");
//     var key = value;

//     if (regex.test(key)) {
//       return true;
//     }
//     return false;
//   });
//   $.validator.addMethod("urlspecialChars", function (value, element) {
//     var regex = new RegExp("^[^<>'\";`%!~#$%&*()=\[\\]\^{}?@,]*$");
//     var key = value;

//     if (regex.test(key)) {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod("alphabet", function (value, element) {
//     var regexalpha = new RegExp("^[a-zA-Z,. ]+$");
//     var keyalpha = value;

//     if (regexalpha.test(keyalpha) || keyalpha == "") {
//       return true;
//     }
//     return false;
//   });
//   $.validator.addMethod("password", function (value, element) {
//     return (
//       /^[A-Za-z0-9\d@#$%&*]*$/.test(value) &&
//       /[A-Z]/.test(value) &&
//       /[a-z]/.test(value) &&
//       /[@#$%&*]/.test(value) &&
//       /\d/.test(value)
//     );
//   });

//   $.validator.addMethod("emailchar", function (value, element) {
//     var regexalpha = new RegExp("^[a-zA-Z0-9@._-]+$");
//     var keyalpha = value;

//     if (regexalpha.test(keyalpha) || keyalpha == "") {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod("alphabetnumber", function (value, element) {
//     var regexalpha = new RegExp("^[a-zA-Z0-9, ]+$");
//     var keyalpha = value;

//     if (regexalpha.test(keyalpha) || keyalpha == "") {
//       return true;
//     }
//     return false;
//   });

//   $.validator.addMethod("noalphabet", function (value, element) {
//     var regexalpha = new RegExp("^[a-zA-Z]+$");
//     var keyalpha = value;

//     if (regexalpha.test(keyalpha) && keyalpha != "") {
//       return false;
//     }
//     return true;
//   });
//   $.validator.addMethod("manual_valid", function (value, element) {
//     return true;
//   });
//   $.validator.addMethod("manual_invalid", function (value, element) {
//     return false;
//   });
//   $.validator.addMethod("notNumber", function (value, element, param) {
//     var reg = /[0-9]/;
//     var regex = new RegExp("^[0-9()@,-./_]*$");
//     var regex1 = new RegExp(
//       "^[()@,-./_0-9()@,-./_ ']+( [()@,-./_0-9()@,-./_ ']+)*$",
//     );
//     //var regex2 = new RegExp("^[0-9@,./_]+( [0-9']+)*$");

//     /* if((!isNaN(value) || value.indexOf(' ') >= 0 || regex.test(value)) && value!="" ){
//                  return false;
//            }else{
//                    return true;
//            }
//          */
//     //if((!isNaN(value) || regex.test(value) || regex1.test(value) || value.indexOf('\\') >= 0) && value!="" )--for not allowing \
//     if (
//       (!isNaN(value) || regex.test(value) || regex1.test(value)) &&
//       value != ""
//     ) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   $.validator.addMethod("Number", function (value, element, param) {
//     var reg = /^[0-9]+$/;
//     if (reg.test(value) || value == "") {
//       return true;
//     } else {
//       return false;
//     }
//   });

//   $.validator.addMethod("onlyzeronotallowed", function (value, element, param) {
//     if (value != "") {
//       if (parseInt(value) > 0) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return true;
//     }
//   });

//   $.validator.addMethod("noNumberAtAll", function (value, element, param) {
//     var reg = /[0-9]/;
//     if (reg.test(value)) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   $.validator.addMethod("validstring", function (value, element, param) {
//     var reg = /(.)\1{2,}/;
//     if (reg.test(value)) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   $.validator.addMethod("validateYear", function (value, element, param) {
//     var curr_year = new Date().getFullYear();

//     if (value < 1901 || value > curr_year) {
//       return false;
//     } else {
//       return true;
//     }
//   });

//   $.validator.addMethod("date", function (date, element) {
//     //
//     /*var regDate = /^(((0[1-9]|[12]\d|3[01])\-(0[13578]|1[02])\-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\-(0[13456789]|1[012])\-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\-02\-((19|[2-9]\d)\d{2}))|(29\-02\-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
// 	   if (optional(element) || date.match(regDate))
// 	    {
// 	        return true;
// 	    }
// 	    return false;*/
//     return (
//       this.optional(element) ||
//       date.match(
//         /^(((0[1-9]|[12]\d|3[01])\-(0[13578]|1[02])\-((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\-(0[13456789]|1[012])\-((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\-02\-((19|[2-9]\d)\d{2}))|(29\-02\-((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/,
//       )
//     );
//   });

//   $.validator.addMethod("float1", function (value, element) {
//     var reg = /^[-+]?\d{0,12}(\.\d{1})?\d{0,2}$/;
//     if (reg.test(value)) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }

// function viewHistory(
//   case_no,
//   cino,
//   sel_court_code,
//   hideparty,
//   caseStatusSearchType,
//   state_code,
//   dist_code,
//   complex_code,
//   search_by,
// ) {
//   var url = "home/viewHistory";

//   var send_str = "court_code=" + sel_court_code;
//   send_str += "&state_code=" + state_code;
//   send_str += "&dist_code=" + dist_code;
//   send_str += "&court_complex_code=" + complex_code;
//   send_str += "&case_no=" + case_no;
//   send_str += "&cino=" + cino;
//   send_str += "&hideparty=" + hideparty;
//   send_str += "&search_flag=" + caseStatusSearchType;
//   send_str += "&search_by=" + search_by;

//   ajaxCall({
//     url: url,
//     postdata: send_str,
//     callback: callbackEST,
//     connection: "N",
//   });
//   function callbackEST(obj) {
//     //alert(obj.data_list);
//     if (obj.status == 1) {
//       if (obj.search_by == "CSpartyName") {
//         $("#partyname_div").hide();
//         $("#partyAddress_div").hide(); //-----------village search
//         $("#CSpartyName").html(obj.data_list);
//         $("#CSpartyName").show();
//         $("#main_back_party").show();
//         $("#village_party").hide();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CScaseNumber") {
//         $("#casenumber_div").hide();
//         $("#CScaseNumber").html(obj.data_list);
//         $("#CScaseNumber").show();
//         $("#main_back_caseNo").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CSfilingNumber") {
//         $("#filingnumber_div").hide();
//         $("#CSfilingNumber").html(obj.data_list);
//         $("#CSfilingNumber").show();
//         $("#main_back_filingNo").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CSAdvName") {
//         $("#advname_div").hide();
//         $("#CSAdvName").html(obj.data_list);
//         $("#CSAdvName").show();
//         $("#main_back_AdvName").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CSFIRNumber") {
//         $("#firnumber_div").hide();
//         $("#CSFIRNumber").html(obj.data_list);
//         $("#CSFIRNumber").show();
//         $("#main_back_Fir").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CSact") {
//         $("#act_div").hide();
//         $("#CSact").html(obj.data_list);
//         $("#CSact").show();
//         $("#main_back_act").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CScaseType") {
//         $("#casetype_div").hide();
//         $("#CScaseType").html(obj.data_list);
//         $("#CScaseType").show();
//         $("#main_back_caseType").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CauseList") {
//         $("#causeList_div").hide();
//         $("#CauseList").html(obj.data_list);
//         $("#CauseList").show();
//         $("#main_back_CauseList").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "CaveatSearch") {
//         $("#caveat_div").hide();
//         $("#CaveatSearch").html(obj.data_list);
//         $("#CaveatSearch").show();
//         $("#main_back_CaveatSearch").show();
//         $(".sevenmenu").hide();
//       } else if (obj.search_by == "VillageDispute") {
//         //	alert(1111111111);
//         $("#village_dispute").hide();
//         $("#dispute_div").hide();
//         $(".sevenmenu").hide();
//         $("#displuteData").html(obj.data_list);
//         $("#displuteData").show();
//         $("#main_back_dispute").show();
//       } else if (obj.search_by == "VillageParty") {
//         $("#village_party").hide();
//         $("#partyAddress_div").hide(); //-----------village search
//         $(".sevenmenu").hide();
//         $("#villageData").html(obj.data_list); ///-------- history
//         $("#villageData").show();
//         $("#main_back_party").show();
//       }
//     }
//   }
// }

// //**show business data *************/

// function viewBusiness(
//   court_code,
//   dist_code,
//   n_dt,
//   case_number,
//   state_code,
//   businessStatus,
//   todays_date1,
//   court_no,
//   national_court_code,
//   caseStatusSearchType,
//   srno,
// ) {
//   var url = "home/viewBusiness";
//   var search_by = caseStatusSearchType;
//   //var state_code=$('#sess_state_code').val();
//   var dist_code = $("#sess_dist_code").val();
//   if (search_by != "cnr") {
//     var court_complex_code = $("#court_complex_code").val();
//     var court_complex_codeArr = court_complex_code.split("@");
//     var differ_mast_est = court_complex_codeArr[2];
//     var combo_val = court_complex_code;
//     var court_codeArr = court_complex_codeArr[1];
//   }

//   var send_str = "court_code=" + court_code;
//   send_str += "&state_code=" + state_code;
//   send_str += "&dist_code=" + dist_code;
//   if (search_by != "cnr") {
//     send_str += "&court_complex_code=" + court_complex_codeArr[0];
//   }
//   send_str += "&nextdate1=" + n_dt;
//   send_str += "&case_number1=" + case_number;
//   send_str += "&state_code=" + state_code;
//   send_str += "&disposal_flag=" + businessStatus;
//   send_str += "&businessDate=" + todays_date1;
//   send_str += "&national_court_code=" + national_court_code;
//   send_str += "&court_no=" + court_no;
//   send_str += "&search_by=" + caseStatusSearchType;
//   send_str += "&srno=" + srno;

//   ajaxCall({
//     url: url,
//     postdata: send_str,
//     callback: callbackComplex,
//     connection: "N",
//   });
//   function callbackComplex(obj) {
//     //alert(obj.data_list);

//     //$("#printDiv").show();
//     if (search_by == "CSpartyName") {
//       $("#history").hide();
//       $("#CSpartyName").hide();
//       $("#main_back_party").hide();
//       $("#caseBusinessDiv_csParty").show();
//       $("#caseBusinessDiv_csParty").html(obj.data_list);
//       $("#printDiv").show();
//     } else if (search_by == "CScaseNumber") {
//       $("#history").hide();
//       $("#CScaseNumber").hide();
//       $("#main_back_caseNo").hide();
//       $("#caseBusinessDiv_csNo").show();
//       $("#caseBusinessDiv_csNo").html(obj.data_list);
//       $("#printDiv_csNo").show();
//     } else if (search_by == "CSfilingNumber") {
//       $("#history").hide();
//       $("#CSfilingNumber").hide();
//       $("#main_back_filingNo").hide();
//       $("#caseBusinessDiv_filingNo").show();
//       $("#caseBusinessDiv_filingNo").html(obj.data_list);
//       $("#printDiv_filingno").show();
//     } else if (search_by == "CSAdvName") {
//       $("#history").hide();
//       $("#CSAdvName").hide();
//       $("#main_back_AdvName").hide();
//       $("#caseBusinessDiv_AdvName").show();
//       $("#caseBusinessDiv_AdvName").html(obj.data_list);
//       $("#printDiv_advnm").show();
//     } else if (search_by == "CSFIRNumber") {
//       $("#history").hide();
//       $("#CSFIRNumber").hide();
//       $("#main_back_Fir").hide();
//       $("#caseBusinessDiv_Fir").show();
//       $("#caseBusinessDiv_Fir").html(obj.data_list);
//       $("#printDiv_fir").show();
//     } else if (search_by == "CSact") {
//       $("#history").hide();
//       $("#CSact").hide();
//       $("#main_back_act").hide();
//       $("#caseBusinessDiv_act").show();
//       $("#caseBusinessDiv_act").html(obj.data_list);
//       $("#printDiv_act").show();
//     } else if (search_by == "CScaseType") {
//       $("#history").hide();
//       $("#CScaseType").hide();
//       $("#main_back_caseType").hide();
//       $("#caseBusinessDiv_caseType").show();
//       $("#caseBusinessDiv_caseType").html(obj.data_list);
//       $("#printDiv_fir").show();
//     } else if (search_by == "CauseList") {
//       $("#history").hide();
//       $("#CauseList").hide();
//       $("#main_back_CauseList").hide();
//       $("#caseBusinessDiv_CauseList").show();
//       $("#caseBusinessDiv_CauseList").html(obj.data_list);
//       $("#printDiv_causelist").show();
//     } else if (search_by == "cnr") {
//       $("#history_cnr").hide();
//       $("#cnr_div").hide();
//       $("#main_back_cnr").hide();
//       $("#help_cnr").hide();
//       $("#caseBusinessDiv_cnr").show();
//       $("#caseBusinessDiv_cnr").html(obj.data_list);
//       $("#printDiv_cnr").show();
//     }
//   }
// }

// function viewIABusiness(
//   ia_no,
//   cinoia,
//   ia_case_type_name,
//   ia_filno,
//   ia_filyear,
//   national_court_code,
//   caseStatusSearchType,
// ) {
//   var url = "home/viewIABusiness";
//   var search_by = caseStatusSearchType;

//   var state_code = $("#sess_state_code").val();
//   var dist_code = $("#sess_dist_code").val();
//   if (search_by != "cnr") {
//     var court_complex_code = $("#court_complex_code").val();
//     var court_complex_codeArr = court_complex_code.split("@");
//     var differ_mast_est = court_complex_codeArr[2];
//     var combo_val = court_complex_code;
//     var court_codeArr = court_complex_codeArr[1];
//   }

//   //var send_str="court_code="+court_code;
//   var send_str = "state_code=" + state_code;
//   send_str += "&dist_code=" + dist_code;

//   if (search_by != "cnr") {
//     send_str += "&court_complex_code=" + court_complex_codeArr[0];
//   }
//   send_str += "&ia_no=" + ia_no;
//   send_str += "&cinoia=" + cinoia;
//   send_str += "&ia_case_type_name=" + ia_case_type_name;
//   send_str += "&ia_filno=" + ia_filno;
//   send_str += "&ia_filyear=" + ia_filyear;
//   send_str += "&national_court_code=" + national_court_code;
//   send_str += "&search_by=" + caseStatusSearchType;

//   ajaxCall({
//     url: url,
//     postdata: send_str,
//     callback: callbackComplex,
//     connection: "N",
//   });
//   function callbackComplex(obj) {
//     //alert(obj.data_list);

//     $("#modal_ia_business_body").html(obj.data_list);
//   }
// }

// function viewBusinessCaveat(
//   caveat_no,
//   caveat_disp_no,
//   court_code,
//   search_flag,
//   state_code,
//   dist_code,
//   court_complex_code,
// ) {
//   var url = "home/caveat_search_case_history";
//   var send_str = "caveat_no=" + caveat_no;
//   send_str += "&caveat_disp_no=" + caveat_disp_no;
//   send_str += "&court_code=" + court_code;
//   send_str += "&search_flag=" + search_flag;
//   send_str += "&state_code=" + state_code;
//   send_str += "&dist_code=" + dist_code;
//   send_str += "&court_complex_code=" + court_complex_code;
//   $("#main_back_CaveatSearch").hide();

//   ajaxCall({
//     url: url,
//     postdata: send_str,
//     callback: callbackComplex,
//     connection: "N",
//   });
//   function callbackComplex(obj) {
//     if (obj.status == 1) {
//       $("#history_caveat").hide();
//       //$('#res_caveat_search').hide();
//       //$('#how_to_caveat').hide();
//       $("#main_back_CaveatSearch").show();
//       $("#caveat_div").hide();
//       $("#caseBusinessDiv_CaveatSearch").show();
//       $("#caseBusinessDiv_CaveatSearch").html(obj.data_list);
//     }
//   }
// }

// function showProcess() {
//   var process_id = $("#fprocess_id").val();
//   var fcaptcha_code = $("#fcaptcha_code").val();
//   $("#hdn_process_id").val(process_id);

//   if (validateProcess()) {
//     //alert(112345);
//     var url = "processDetails/showProcess";
//     var send_str =
//       "&fcaptcha_code=" + fcaptcha_code + "&process_id=" + process_id;
//     //alert(send_str);
//     //$('#modal_process_data').modal('show');
//     $("#proc_msg").show();

//     ajaxCall({
//       url: url,
//       postdata: send_str,
//       callback: callbackComplex,
//       connection: "N",
//     });
//     function callbackComplex(obj) {
//       if (obj.status == 0) {
//         $("#modal_process_data").modal("hide");
//         $("#fcaptcha_code").val("");
//         captcha_image_audioObj.refresh();
//         document.getElementById("captcha_image").src =
//           "vendor/securimage/securimage_show.php? " + Math.random();
//         this.blur();
//         return false;
//       } else if (obj.status == 1) {
//         $("#modal_process_data").show();
//         $("#modal_process_data").modal("show");
//         $("#proc_msg").show();
//         $("#modal_process_body").html(obj.str);
//         $("#fcaptcha_code").val("");
//       }
//     }
//   }
// }
// function validateProcess() {
//   //alert(1);
//   $("#frmprocess").validate();
//   pattern();

//   $("#fprocess_id").rules("add", {
//     required: true,
//     //maxlength : 4,
//     messages: {
//       required: "Please Enter Process ID",
//     },
//   });

//   if (!$("#frmprocess").valid()) $(".error").first().focus();
//   return $("#frmprocess").valid();
// }
// let countdownInterval1;
// function ModalsendOtp(process_id, user_email, usermobno) {
//   $("#modal_process_data").show();
//   $("#div_otp_modal").show();
//   $("#gotp").hide();
//   $("#proc_msg").hide();
//   $("#user_otp").val("");
//   /*var usermobno = encodeURIComponent($('#user_mobile').val());
// 	var user_email = encodeURIComponent($('#user_email').val());
// 	var processid = encodeURIComponent($('#hdn_process_id').val());*/

//   $("#user_email").val(user_email);
//   $("#user_mobile").val(usermobno);
//   $("#hdn_process_id").val(process_id);

//   var url = "processDetails/sendotp";

//   var postdata =
//     "mobile=" +
//     usermobno +
//     "&user_email=" +
//     user_email +
//     "&processid=" +
//     process_id; //processid="+pid+"&

//   ajaxCall({
//     url: url,
//     postdata: postdata,
//     callback: callbackParty,
//     connection: "N",
//   });
//   function callbackParty(result) {
//     //alert(result.status);
//     if (result.status == 1) {
//       //alert(result.hdn_otp);
//       if (result.sent == "Y") {
//         $("#div_send_otp_msg").show();
//         $("#div_send_otp_msg").html(result.otp_msg);
//         $("#div_send_otp_msg").val(result.sent_message);
//         $("#hdn_otp").val(result.hdn_otp);
//         /* $("#inputbox").hide();
//                 $("#otpbox").show();*/
//         $("#waitmsg").html(
//           "Please enter the verification code sent via Email <br>Do not refresh or close this window.",
//         );

//         $("#verifyotp").attr("disabled", false);
//         $("#sendOtp").attr("disabled", true);

//         $("#resendbtn").attr("disabled", true);
//         startOtpTimer(20); // Start 2-minute timer
//       } else {
//         $("#sendOtp").attr("disabled", true);
//       }
//     }
//   }
// }
// function startOtpTimer(duration) {
//   let timer = duration;
//   const display = document.getElementById("timerotp");

//   clearInterval(countdownInterval1); // Stop any previous timer

//   countdownInterval1 = setInterval(function () {
//     let minutes = Math.floor(timer / 60);
//     let seconds = timer % 60;

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     //display.textContent = "Resend OTP available in " + minutes + ":" + seconds;
//     display.textContent = " " + minutes + ":" + seconds;
//     if (--timer < 0) {
//       clearInterval(countdownInterval1);
//       display.textContent = ""; // Clear the timer display
//       document.getElementById("resendbtn").disabled = false;
//       $("#waitmsg").html("");
//     }
//   }, 1000);
// }

// let attempts = 0;
// function verify_otp_modal() {
//   var user_otp = encodeURIComponent($("#user_otp").val());
//   var hdn_process_id = encodeURIComponent($("#hdn_process_id").val());

//   // Tracks the number of incorrect OTP attempts
//   const maxAttempts = 5; // Maximum number of attempts allowed
//   var correctOtp = $("#hdn_otp").val();
//   // alert(correctOtp+"=="+user_otp);
//   if (correctOtp == user_otp) {
//     //alert('OTP correct!');
//     attempts = 0; // Reset on success
//   } else {
//     attempts++;
//     //alert( attempts+"==="+maxAttempts);
//     console.log("Failed attempt, attempts now: " + attempts); // Debugging line

//     if (attempts > maxAttempts) {
//       $("#proc_msg").show(); // Show error message after max attempts
//       $("#gotp").show();
//       $("#div_send_otp_msg").hide();
//       $("#div_otp_modal").hide();
//       $("#submitOtp").prop("disabled", true); // Disable the OTP submit button
//       attempts = 0;
//       $("#hdn_otp").val("");
//       //return false;
//     } else {
//       //alert(111111);
//       alert("Incorrect OTP. "); //You have ' + (maxAttempts - attempts) + ' attempts left.'
//       //return false;
//     }
//   }
//   var postdata = "process_id=" + hdn_process_id + "&user_otp=" + user_otp;

//   var url = "processDetails/verify_otp";

//   ajaxCall({
//     url: url,
//     postdata: postdata,
//     callback: callbackParty,
//     connection: "N",
//   });
//   function callbackParty(result) {
//     //alert(result.status);
//     if (result.status == 1) {
//       $("#modal_process_data").hide();
//       //alert(result.sent);
//       //if (result.sent == "Y")
//       {
//         /*$('#send_otp_msg').show();
//                 $('#send_otp_msg').html(result.otp_msg);
//                 $('#sent_message').val(result.sent_message);

             
//                 $("#waitmsg").html("Please enter the 6-digit code sent via SMS <br>Do not refresh or close this window.");


//                 $("#verifyotp").attr("disabled", false);
//                 $("#sendOtp").attr("disabled", true);

//                 $("#resendbtn").attr("disabled", true);
//                 startOtpTimer(120); // Start 2-minute timer*/

//         if (window.matchMedia("(max-width: 767px)").matches) {
//           //window.location.replace("https://services.ecourts.gov.in/ecourtindia_v6/"+result.order);
//           window.open(
//             "https://services.ecourts.gov.in/ecourtindia_v6/" + result.order,
//             "_blank",
//           );
//         } else {
//           $("#user_otp").val("");
//           $("#p_order").val(result.order);

//           file_name =
//             "<object data='" +
//             result.order +
//             "' height='100%' width='100%' style='min-height:600px;'></object>";
//           //alert(file_name);
//           $("#modal_order_body").show().html(file_name);
//           var myModal = new bootstrap.Modal($("#modalOders"), {
//             backdrop: "static", //remove ability to close modal with click
//             keyboard: false, //remove option to close with keyboard
//             show: true, //Display loader!
//           });
//         }
//         myModal.toggle();
//       } /*else {
//                 $("#sendOtp").attr("disabled", true);
//             }*/
//     } else if (result.flag == 2) {
//       // alert(result.errormsg);  // Show the message from PHP
//       $("#gotp").show();
//       $("#proc_msg").show();
//       $("#div_otp_modal").hide();
//     }
//   }
// }
// function isNumber(event) {
//   var charCode = event.which ? event.which : event.keyCode; // Get keyCode for the pressed key
//   if (charCode >= 48 && charCode <= 57) {
//     // Check if key is a number (0-9)
//     return true;
//   } else {
//     return false; // Prevent input if it's not a number
//   }
// }

// function back_fun(search_flag) {
//   if (search_flag == "CSpartyName") {
//     $("#caseBusinessDiv_csParty").hide();
//     $("#CSpartyName").show();
//     $("#main_back_party").show();
//     $("#printDiv").hide();
//   } else if (search_flag == "CScaseNumber") {
//     $("#caseBusinessDiv_csNo").hide();
//     $("#CScaseNumber").show();
//     $("#main_back_caseNo").show();
//     $("#printDiv_csNo").hide();
//   } else if (search_flag == "CSfilingNumber") {
//     $("#caseBusinessDiv_filingNo").hide();
//     $("#CSfilingNumber").show();
//     $("#main_back_filingNo").show();
//     $("#printDiv_filingno").hide();
//   } else if (search_flag == "CSAdvName") {
//     $("#caseBusinessDiv_AdvName").hide();
//     $("#CSAdvName").show();
//     $("#main_back_AdvName").show();
//     $("#printDiv_advnm").hide();
//   } else if (search_flag == "CSFIRNumber") {
//     $("#caseBusinessDiv_Fir").hide();
//     $("#CSFIRNumber").show();
//     $("#main_back_Fir").show();
//     $("#printDiv_fir").hide();
//   } else if (search_flag == "CSact") {
//     $("#caseBusinessDiv_act").hide();
//     $("#CSact").show();
//     $("#main_back_act").show();
//     $("#printDiv_act").hide();
//   } else if (search_flag == "CScaseType") {
//     $("#caseBusinessDiv_caseType").hide();
//     $("#CScaseType").show();
//     $("#main_back_caseType").show();
//     $("#printDiv_casetype").hide();
//   } else if (search_flag == "CauseList") {
//     $("#caseBusinessDiv_CauseList").hide();
//     $("#CauseList").show();
//     $("#main_back_CauseList").show();
//     $("#printDiv_causelist").hide();
//   } else if (search_flag == "CaveatSearch") {
//     $("#caseBusinessDiv_CaveatSearch").hide();
//     $("#CaveatSearch").show();
//     $("#main_back_CaveatSearch").show();
//     $("#printDiv_cavaeat").hide();
//   } else if (search_flag == "cnr") {
//     $("#caseBusinessDiv_cnr").hide();
//     $("#history_cnr").show();
//     $("#cnr_div").hide();
//     $("#main_back_cnr").show();
//     $("#help_cnr").hide();
//     $("#printDiv_cnr").hide();
//   }
// }

// function main_back(flag) {
//   if (flag === "CSpartyName") {
//     $("#caseBusinessDiv_csParty").hide();
//     $("#CSpartyName").hide();
//     $("#res_party").show();
//     $("#partyname_div").show();
//     $("#partyAddress_div").show();
//     $("#main_back_party").hide();
//     $(".sevenmenu").show();
//     //	$('#village_party').show();
//   } else if (flag === "CScaseNumber") {
//     $("#caseBusinessDiv_csNo").hide();
//     $("#CScaseNumber").hide();
//     $("#casenumber_div").show();
//     $("#main_back_caseNo").hide();
//     $("#case_no_res").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CSfilingNumber") {
//     $("#caseBusinessDiv_filingNo").hide();
//     $("#CSfilingNumber").hide();
//     $("#filingnumber_div").show();
//     $("#main_back_filingNo").hide();
//     $("#res_filing").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CSAdvName") {
//     $("#caseBusinessDiv_AdvName").hide();
//     $("#CSAdvName").hide();
//     $("#advname_div").show();
//     $("#main_back_AdvName").hide();
//     $("#res_adv_name").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CSFIRNumber") {
//     $("#caseBusinessDiv_Fir").hide();
//     $("#CSFIRNumber").hide();
//     $("#firnumber_div").show();
//     $("#main_back_Fir").hide();
//     $("#res_fir").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CSact") {
//     $("#caseBusinessDiv_act").hide();
//     $("#CSact").hide();
//     $("#act_div").show();
//     $("#main_back_act").hide();
//     $("#res_act").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CScaseType") {
//     $("#caseBusinessDiv_caseType").hide();
//     $("#CScaseType").hide();
//     $("#casetype_div").show();
//     $("#main_back_caseType").hide();
//     $("#res_case_type").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CauseList") {
//     $("#caseBusinessDiv_CauseList").hide();
//     $("#CauseList").hide();
//     $("#causeList_div").show();
//     $("#main_back_CauseList").hide();
//     $("#res_cause_list").show();
//     $(".sevenmenu").show();
//   } else if (flag === "CaveatSearch") {
//     $("#caseBusinessDiv_CaveatSearch").hide();
//     $("#CaveatSearch").hide();
//     $("#caveat_div").show();
//     $("#main_back_CaveatSearch").hide();
//     $("#res_caveat_search").show();
//     $(".sevenmenu").show();
//   } else if (flag === "cnr") {
//     $("#history_cnr").hide();
//     $("#cnr_div").show();
//     $("#main_back_cnr").hide();
//     $("#caseBusinessDiv_cnr").hide();
//     $("#help_cnr").show();
//   } else if (flag === "VillageDispute") {
//     $("#displuteData").hide();
//     $("#village_dispute").show();
//     $("#main_back_dispute").hide();
//     $("#caseBusinessDiv").hide();
//     $(".sevenmenu").show();
//     $("#dispute_div").show();
//   } else if (flag === "VillageParty") {
//     $("#villageData").hide();
//     $("#village_party").show();
//     $("#main_back_party").hide();
//     $("#caseBusinessDiv").hide();
//     $(".sevenmenu").show();
//     $("#partyAddress_div").show();
//   }
// }

// function printContent(id) {
//   //$("#caseBusinessDiv").show();
//   // divContents = $('#caseBusinessDiv').html()
//   $("#" + id).show();
//   var divContents = $("#mydiv").html();
//   // $('#allbk_btn').hide();
//   var printWindow = window.open("", "", "height=400,width=800");
//   printWindow.document.write(divContents);
//   //$('#allbk_btn').hide();
//   printWindow.document.close();
//   printWindow.print();
// }

// function printContent_data() {
//   window.print();
// }

// function reg_lang(setPramukeLang) {
//   //var sesslangid;
//   //alert(setPramukeLang);

//   if (setPramukeLang == "N") {
//     pramukhIME.addLanguage(PramukhIndic, "english");
//     pramukhIME.enable();
//   } else {
//     if (setPramukeLang == "Y") {
//       //var pramukhe_lang="<?php echo  $sessSelLang;?>";
//       var pramukhe_lang = $("#hdn_lang").val();

//       //alert(pramukhe_lang);
//       pramukhIME.addLanguage(PramukhIndic, pramukhe_lang);
//       pramukhIME.enable();
//     } else {
//       pramukhIME.addLanguage(PramukhIndic, "english");
//       pramukhIME.enable();
//     }
//   }
// }

// function validate_state_dist_complex() {
//   var state_code = $("#sess_state_code").val();
//   var dist_code = $("#sess_dist_code").val();
//   var courtArr = $("#court_complex_code").val();
//   var court_est_arr = courtArr.split("@");
//   var court_complex = court_est_arr[0];
//   var est_code = $("#court_est_code").val();

//   if (state_code == 0) {
//     errorAlert(alerts_array[52]);
//     return false;
//   }

//   if (dist_code == 0) {
//     errorAlert(alerts_array[49]);
//     return false;
//   }

//   if (court_complex == 0) {
//     errorAlert(alerts_array[277]);
//     return false;
//   }
//   return true;
// }

// function highLightWord() {
//   var option = {
//     color: "black",
//     background: "yellow",
//     bold: false,
//     class: "high",
//     ignoreCase: true,
//     wholeWord: false,
//   };
//   var originalContent = $("tbody").html();
//   if (isNaN($("#txtSearch").val())) {
//     searchCnt = $("tbody").highlight($("#txtSearch").val(), option);
//     $("#matcheCnt").text(searchCnt + " matches");
//   } else {
//     $("#bs_alert").modal("show");
//     $("#bs_alert .modal-body").text("Please search text");
//   }
// }

// function checkDateInpuWithNextMonth(objVal) {
//   //get today's date in string
//   var todayDate = new Date();
//   var todayMonth = todayDate.getMonth() + 1;
//   var todayDay = todayDate.getDate();
//   var todayYear = todayDate.getFullYear();
//   var todayDateText = todayMonth + "/" + todayDay + "/" + todayYear;

//   var nextMonth = new Date();
//   //31 days after
//   nextMonth.setTime(nextMonth.valueOf() + 32 * 24 * 60 * 60 * 1000);

//   var prevDay = nextMonth.getDate();
//   var prevMonth = nextMonth.getMonth() + 1;
//   var prevYear = nextMonth.getFullYear();
//   var nextMonthText = prevMonth + "/" + prevDay + "/" + prevYear;

//   //get date input from SharePoint DateTime Control
//   ////var inputDateText = document.getElementById('causelist_date').value;

//   var inputDateText = objVal;
//   var dateString = inputDateText.replace(/\-/g, "/");
//   var dateString_arr = dateString.split("/");
//   dateString =
//     dateString_arr[1] + "/" + dateString_arr[0] + "/" + dateString_arr[2];

//   //Convert both input to date type
//   var inputToDate = Date.parse(dateString);
//   var todayToDate = Date.parse(todayDateText);
//   var nextMonthToDate = Date.parse(nextMonthText);

//   if (inputToDate < nextMonthToDate) {
//     return true;
//   } else {
//     return false;
//   }
// }


// //source page code 

// <!DOCTYPE html >
// <html lang="en">
// <head>
// 	<title>Home - eCourt India Services</title>
//     <meta charset="utf-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link rel="icon" type="image/x-icon" href="favicon.ico">
// 	<meta name="description" content="eCourts Services Portal - Get real-time case status, court orders, cause lists, caveats, and court locations across India.">
// 	<meta name="author" content="eCommittee, Supreme Court of India">
// 	<meta name="keywords" content="eCourts, Indian Judiciary, Case Status, Court Orders, Cause List, High Court, District Court, eCommittee">
// 	<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 	<meta name="robots" content="index, follow">
// 	<meta http-equiv="content-language" content="en">
// 	<!-- Open Graph -->
// 	<meta property="og:title" content="eCourts Services Portal">
// 	<meta property="og:description" content="Access case status, court orders, cause lists, and court information online across India.">
// 	<meta property="og:type" content="website">
// 	<meta property="og:url" content="https://services.ecourts.gov.in/">
// 	<meta property="og:image" content="https://services.ecourts.gov.in/ecourtindia_v6/images/ecourts-logo.png">
// 	<!-- Twitter Card -->
// 	<meta name="twitter:card" content="summary">
// 	<meta name="twitter:title" content="eCourts Services Portal">
// 	<meta name="twitter:description" content="Check case status, court orders, cause lists, and more from Indian courts.">
// 	<meta name="twitter:image" content="https://services.ecourts.gov.in/ecourtindia_v6/images/ecourts-logo.png">
// 	<script src="/ecourtindia_v6/vendor/jquery/jquery.min.js"></script>
// 	<script src="/ecourtindia_v6/dist1/js/jquery.validate.min.js" type="text/javascript"></script>
	
// 	<!--<script src="/ecourtindia_v6/dist1/js/chosen.jquery.min.js"></script>	
// 	<link href="/ecourtindia_v6/dist1/css/chosen.min.css" rel="stylesheet">	-->
// 	<script src="/ecourtindia_v6/jquery-date/js/jquery-ui.js"></script>
// 	<link rel="stylesheet" href="/ecourtindia_v6/jquery-date/jquery-ui.css">
// 	<script src="/ecourtindia_v6/js/components.js"></script>
// 	<!--<script src="/ecourtindia_v6/csrf-magic.js"></script>
	
// 	<link href="/ecourtindia_v6/dist1/vendor/bootstrap5/css/bootstrap.css" rel="stylesheet">-->   
// 	<script src="/ecourtindia_v6/dist1/vendor/UX4G/js/ux4g.min.js"></script>	
// 	<link href="/ecourtindia_v6/dist1/vendor/UX4G/css/ux4g-min.css" rel="stylesheet">
//    <link href="/ecourtindia_v6/vendor/fontawesome-free/css/all.min.css" rel="stylesheet">
//   <!-- Custom styles for this template -->
  
//   <link href="css/mystyle.css" rel="stylesheet">
  
// <link href="css/jquery-scrollify-style.css" rel="stylesheet">
//   <script src="/ecourtindia_v6/js/myscript.js"></script>
//   <script src="/ecourtindia_v6/js/jQuery.highlight.js"></script>
//   <script src="/ecourtindia_v6/js/jquery.scrollify.js"></script>
//   <script type="text/javascript" src="pramukhime/js/pramukhime.js"></script>
//   <script type="text/javascript" src="pramukhime/js/pramukhindic.js"></script>

//     <style>
//     .alert {
// 	    padding: 0px;
// 	    margin-bottom: 2px;
// 	    border: 1px solid transparent;
// 	    border-radius: 4px;
// 	}
//  	label.error {
// 	    color: red;
// 	    font-size: 12px;
// 		font-weight: normal !important;
//     }
// </style>
// <script>
// var labels_array;
// var buttons_array;
// var alerts_array;
// $(document).ready(function(){

// 	////For Right click and f12 disable///////
// 	/*document.addEventListener('contextmenu',event => event.preventDefault());
// 	document.onkeydown = function (event) {  
// 	event = (event || window.event);  
// 		if (event.keyCode == 123) {  
// 			return false;  
// 		}  
// 	}  */
// 	//////End /////////////
//    $('.sidebar-nav').height($(window).height())-50;
// });
// </script>
// </head>
// <body class="">
// 	<input type="hidden" name="base_url" id='base_url' value="/ecourtindia_v6">
// 	<input type="hidden" id="hidSelLang" name="hidSelLang" value="english" />
// 	<input type="hidden" id="lang_choice" name="lang_choice" value="english" />
	
//   <!-- Topbar 
//         <nav class="navbar navbar-expand navbar-light bg-info text-white topbar static-top border-bottom" id='topbar'>
// 		<a class="align-items-center justify-content-center mr-2 text-decoration-none" href="/ecourtindia_v6/?p=home">
//         <img src="images/ecourts-logo.png" id='appl_logo'  alt="eCourts LOGO" style="width: 40px" />
      
// 		<span class="subHeading mr-2 d-inline-block text-white">eCourts App Store</span></a>
// 		<span style="text-align: right;color: #0171bd;font-size: 0.9rem;" class="d-none d-sm-inline-block">
			
// 				</span>
//           <button id="sidebarToggleTop" class="btn btn-link d-none rounded-circle mr-3 float-right">
//             <i class="fa fa-bars"></i>
//           </button>

          

//         </nav>-->
// <header  role="banner">
// <nav class="navbar navbar-expand-lg bg-light p-0 secondary-navbar" aria-label="Primary top navigation">

// <div class="container d-flex flex-wrap">
//       <ul class="nav me-auto">
// 		<li class="nav-item"><a lang="en" class="nav-link link-dark noToken" href="https://ecommitteesci.gov.in" onclick="return confirm('You are being redirected to an external website.')" target="_blank" rel="noopener noreferrer" title="External website that opens a new window">e-Committee, Supreme Court of India <sup><i class=" fa fa-external-link-alt"></i></sup></a></li>
//         <li class="nav-item">
// 		<!--<button class='btn btn-secondary btn-sm toolbarbtn' aria-label="Back"><i class="fas fa-arrow-left me-1" aria-hidden='true'></i></button>-->
// 		<a class='btn btn-secondary btn-sm toolbarbtn' aria-label="Reload current page"   id='reload' href="/ecourtindia_v6/?p=home/index" ><i class="fas fa-redo-alt" aria-hidden='true'></i></a>
// 		</li>
// 		<li class="nav-item"><a href="#navbarsToggle01" class="nav-link link-dark noToken">Skip to Navigation</a></li>
//         <li class="nav-item"><a href="#sidebarMenu" class="nav-link link-dark noToken">Skip to Main Content</a></li>
//         <li class="nav-item"><a class="nav-link link-dark" href="/ecourtindia_v6/?p=site_map/index" rel="noopener noreferrer">Site map </a></li>
//       </ul>
//       <ul class="nav">
//         <li class="nav-item border-start"><button id="decresefont" title="Decrease Font Size" aria-label="Decrease Font Size" class="nav-link link-dark btn btn-link p-0 fontSize">A-</button></li>
// 		<li class="nav-item"><button id="normalfont" title="Normal Font Size" aria-label="Normal Font Size" class="nav-link link-dark btn btn-link p-0 fontSize">A</button></li>
// 		<li class="nav-item"><button id="incresefont" title="Increase Font Size" aria-label="Increase Font Size" class="nav-link link-dark btn btn-link p-0 fontSize">A+</button></li>
// 		<li class="nav-item border-start ps-2"><a href="#" id="Defaultcontrast" onclick="setBackgroud('Defaultcontrast');" title="Default contrast" aria-label="A normal contrast theme" class="nav-link link-dark">A</a></li>
// 		<li class="nav-item pe-2"><a href="#" id="Highcontrast" title="High contrast"  onclick="setBackgroud('Highcontrast');" aria-label="A high contrast theme" class="nav-link link-dark text-white">A</a></li>
// 		<li class="nav-item dropdown border-start border-end">
//           <a class="nav-link dropdown-toggle" href="" id="navbarDropdown"  aria-label="Language selection" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Language
// 			<input type="hidden" id="hidSelLang1" name="hidSelLang" value="" />
// 			<input type="hidden" id="lang_choice1" name="lang_choice" value="" />
//           </a>
//           <ul class="dropdown-menu langdropdown" aria-labelledby="navbarDropdown" >
// 		  <span id="selLang"></span>
//             <li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=English&code=english" >English</a></li>
//             <li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=हिन्दी&code=hindi">हिन्दी</a></li>
// 			<li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=मराठी&code=marathi" >मराठी</a></li>
// 			<li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=ગુજરાતી&code=gujarati" >ગુજરાતી</a></li>
//             <li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=ಕನ್ನಡ&code=kannada">ಕನ್ನಡ</a></li>
// 			<li><a class="dropdown-item" href="/ecourtindia_v6/?p=home/fillLangState&lang=தமிழ்&code=tamil">தமிழ்</a></li>
// 			<!--<li><a class="dropdown-item" href="#" onclick="funselectLang('English','english')">English</a></li>-->
//           </ul>
//         </li>
//       </ul>
//     </div>
// </nav>
// 	<nav class="navbar navbar-expand-lg navbar-dark bg-primary primary-navbar" aria-label="Primary Navigation">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="/ecourtindia_v6/?p=home">
// 		<img class="logo1" src="images/logo.png" alt="eCourt India Services" title="eCourt India Services">
// 		<img src="images/ecourts-logo.png" id='appl_logo'  alt="eCourts LOGO" class="img-fluid"/>
//       </a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsToggle01" aria-controls="navbarsToggle01" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse" id="navbarsToggle01">
//         <ul class="navbar-nav ms-auto mb-2 mb-md-0">
//           <li class="nav-item">
//             <a class="nav-link active" aria-current="page" href="/ecourtindia_v6/?p=home/index"">Home</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link noToken" href="http://ecommitteesci.gov.in/" target="_blank" rel="noopener noreferrer" title="External website that opens a new window">e-Committee</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link noToken" href="http://supremecourtofindia.nic.in/" target="_blank" rel="noopener noreferrer" title="External website that opens a new window">Supreme Court</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link "  href="/ecourtindia_v6/?p=high_court/index">High Courts</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link noToken" href="https://ecourts.gov.in/ecourts_home/index.php" target="_blank" rel="noopener noreferrer" title="District Courts">District Courts</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link" href="http://njdg.ecourts.gov.in/njdg_public/" target="_blank" rel="noopener noreferrer" title="External website that opens a new window">NJDG</a>
//           </li>
// 		  <li class="nav-item">
//             <a class="nav-link" href="/ecourtindia_v6/?p=contact_us/index">Contact Us</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
//   </header>





// <div id="sr-alert" class="visually-hidden" aria-live="assertive" aria-atomic="true"></div>

// <script  src='/ecourtindia_v6/js/home.js' type='text/javascript'></script>
// <script  src='/ecourtindia_v6/js/myscript.js' type='text/javascript'></script>
// <script  src='/ecourtindia_v6/js/common_header.js' type='text/javascript'></script>
 

// <div class="container-fluid">
//   <div class="row" id="divLangState">
//     <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar  overflow-auto" aria-label="Search menu">
//       <div class="position-sticky pt-3" role="region" aria-label="side navigation">
// 		<h2 class="nav-link text-center fw-bold">Search Menu</h2>

		

//         <ul class="nav flex-column sidebarMainMenu">

//           <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mb-1 mx-2 active" aria-current="page" id="leftPaneMenuCnr" href="/ecourtindia_v6/?p=home/index" aria-current="page">
//               <img class="cnr-dp1" src="images/CNR_Number-bg1.png" alt="" width="334" height="155">
//              CNR Number            </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link  text-md-center text-start shadow border rounded mx-2 mb-1" id="leftPaneMenuCS" href="/ecourtindia_v6/?p=casestatus/index"  data-title="Court Status" aria-current="page">
//               <img class="case-status-dp1" src="images/CaseStatus-bg1.png" alt="" width="334" height="155">
//               Case Status            </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1" id="leftPaneMenuCO" href="/ecourtindia_v6/?p=courtorder/index" data-title="Court Order" aria-current="page">
//               <img class="court-orders-dp1" src="images/CourtOrder-bg1.png" alt="" width="334" height="155">
//              Court Orders            </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1" id="leftPaneMenuCL"  href="/ecourtindia_v6/?p=cause_list/index" data-title="Cause list " aria-current="page" >
//               <img class="causelist-dp1" src="images/CauseList-bg1.png" alt="" width="334" height="155">
//             Cause List            </a>
//           </li>
		 
// 		  <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1"  id="leftPaneMenuCavet"  href="/ecourtindia_v6/?p=caveat_search/index" data-title="Caveat Search " aria-current="page">
//               <img class="cav-search-dp1" src="images/cav-search.jpg" alt="" width="334" height="155">
//              Caveat Search            </a>
//           </li>

// 	<!--	    <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1"  id="leftPaneMenuvillageSearch"  href="/ecourtindia_v6/?p=villageSearch/index" data-title="Village Search " aria-current="page">
//               <img class="cav-search-dp1" src="images/village-search.png" alt="" width="334" height="155">
//                          </a>
//           </li>

// 		   <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1"  id="leftPaneMenuprocessDetails"  href="/ecourtindia_v6/?p=processDetails/processData" data-title="Process Details " aria-current="page">
//               <img class="cav-search-dp1" src="images/process-details.png" alt="" width="334" height="155">
//                          </a>
//           </li>

// 		  -->
		 
		  
//           <li class="nav-item">
//             <a class="nav-link text-md-center text-start shadow border rounded mx-2 mb-1" id="leftPaneMenuLocation" href="/ecourtindia_v6/?p=location/index" data-title="location " aria-current="page">
//               <img class="court-complex-locator-dp1" src="images/court-complex-locator.jpg" alt="Get Location" width="334" height="155">
//               Location            </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
// <!--<script src="/ecourtindia_v6/js/common_header.js"></script>-->

//     <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 maincontentDiv">
//       <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-0 mb-2">
// 	  <div class="col px-2">
//           <h1 class="h1class text-center">Case Status</h1>
// 		      <!--<script src="/ecourtindia_v6/js/common_header.js" type="text/javascript"></script>-->

// <input id="location_checked" name="location_checked" type="hidden" value="N" />
// <input id="s_type" name="s_type" type="hidden" value="" />
// <input id="sees_complex_code" name="sees_complex_code" type="hidden" value="1100120"/>
// <input id="sees_district_code" name="sees_district_code" type="hidden" value="13"/>
// <input id="sees_est_code" name="sees_est_code" type="hidden"/>
// <input id="active_tab" name="active_tab" type="hidden" value="party" />
// <input id="sees_court_est_code" name="sees_court_est_code" type="hidden" value="null"/>
// <input id="session_differ_mast_est" name="session_differ_mast_est" type="hidden" value="N"/>


//  <div class="row statedistdiv p-3">
// 	<div class="col-md-3" id="langState">
// 	<label for="sess_state_code" class="form-label small text-white">Select State</label>
// 		<select  name='sess_state_code' id='sess_state_code' class='form-select form-select-sm' onchange='fillDistrict(this.value);'><option value='0'>Select state</option><option value='28'  >Andaman and Nicobar</option><option value='2'  >Andhra Pradesh</option><option value='36'  >Arunachal Pradesh</option><option value='6'  >Assam</option><option value='8'  >Bihar</option><option value='27'  >Chandigarh</option><option value='18'  >Chhattisgarh</option><option value='26'  >Delhi</option><option value='30'  >Goa</option><option value='17'  >Gujarat</option><option value='14'  >Haryana</option><option value='5'  >Himachal Pradesh</option><option value='12'  >Jammu and Kashmir</option><option value='7'  >Jharkhand</option><option value='3'  >Karnataka</option><option value='4'  >Kerala</option><option value='33'  >Ladakh</option><option value='37'  >Lakshadweep</option><option value='23'  >Madhya Pradesh</option><option value='1'  >Maharashtra</option><option value='25'  >Manipur</option><option value='21'  >Meghalaya</option><option value='19'  >Mizoram</option><option value='34'  >Nagaland</option><option value='11'  >Odisha</option><option value='35'  >Puducherry</option><option value='22'  >Punjab</option><option value='9'  >Rajasthan</option><option value='24'  >Sikkim</option><option value='10' selected >Tamil Nadu</option><option value='29'  >Telangana</option><option value='38'  >The Dadra And Nagar Haveli And Daman And Diu</option><option value='20'  >Tripura</option><option value='15'  >Uttarakhand</option><option value='13'  >Uttar Pradesh</option><option value='16'  >West Bengal</option></select>	<input id="hdn_lang" name="hdn_lang" type="hidden" value=""/>

//    </div>
// 	<div class="col-md-3">
// 		  <label for="sess_dist_code" class="form-label small text-white">Select District</label>
//           <select class="form-select form-select-sm" name='sees_dist_code' id="sess_dist_code" onchange="fillCourtComplex(this.value);" aria-describedby="Select_alert"><option value="0">Select district</option></select>
//      </div>

// 	<div class="col-md-3">
// 	  <label for="court_complex_code" class="form-label small text-white">Select Court Complex</label>
// 	  <select class="SDC_Select form-select form-select-sm col" id="court_complex_code" onchange="funShowDefaultTab('complex'); set_data();set_state()" aria-describedby="Select_alert"><option value="0">Select court complex</option></select> <!--fillCauseList()-->
// 	</div>

// 	<div class="col-md-3" id='est_codes' style="display:none;">
// 		<label for="court_est_code" class="form-label small text-white">Select Establishment</label>
// 	  <select class="SDC_Select form-select form-select-sm col"  id="court_est_code" onchange="funShowDefaultTab('establishment');set_data();set_state()" aria-describedby="Select_alert"><option value="0">Select establishment</option></select>
// 	</div>

	
// </div>
	
//         </div>
//       </div>

// 	  <div class="row  mt-3">
//         <div class="col">
		
// 		<ul class="nav nav-tabs sevenmenu" id="caseSearchTabs" role="tablist" aria-label="Case Search Tabs" style='word-break: break-word;'>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs active"
//             id="partyname-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#partynametab"
//             type="button"
//             role="tab"
//             aria-controls="partynametab"
//             aria-selected="true"
//             tabindex="0"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fa fa-users fa-2x" aria-hidden="true"></i>&nbsp;Party Name    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="casenumber-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#casenumbertab"
//             type="button"
//             role="tab"
//             aria-controls="casenumbertab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fa fa-info fa-2x" aria-hidden="true"></i>&nbsp;Case Number    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="filingnumber-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#filingnumbertab"
//             type="button"
//             role="tab"
//             aria-controls="filingnumbertab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fa fa-copy fa-2x" aria-hidden="true"></i>&nbsp;Filing Number    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="advname-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#advnametab"
//             type="button"
//             role="tab"
//             aria-controls="advnametab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fa fa-user fa-2x" aria-hidden="true"></i>&nbsp;Advocate    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="firnumber-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#firnumbertab"
//             type="button"
//             role="tab"
//             aria-controls="firnumbertab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fab fa-wpforms fa-2x" aria-hidden="true"></i>&nbsp;FIR Number    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="act-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#acttab"
//             type="button"
//             role="tab"
//             aria-controls="acttab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fas fa-gavel fa-2x" aria-hidden="true"></i>&nbsp;Act    </button>
//   </li>

//   <li class="nav-item" role="presentation">
//     <button class="nav-link tabs"
//             id="casetype-tabMenu"
//             data-bs-toggle="tab"
//             data-bs-target="#casetypetab"
//             type="button"
//             role="tab"
//             aria-controls="casetypetab"
//             aria-selected="false"
//             tabindex="-1"
//             onclick="validateStateDistCourt(this.id);">
//       <i class="fas fa-file-alt fa-2x" aria-hidden="true"></i>&nbsp;Case Type    </button>
//   </li>

// </ul>


// <div class="tab-content" id="myTabContent">

//   <div class="tab-pane fade show active border"
//        id="partynametab"
//        role="tabpanel"
//        aria-labelledby="partyname-tabMenu"
//        >
//     <div id="partyname_div">
// <form name="frmsearch_name" id="frmsearch_name" action="" method="post">
//  <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Petitioner/Respondent</h2>
//   <p class="visually-hidden">How to 1. Enter the Party Name, in part (minimum 3 characters) or full - e.g. for searching the Party Name �Ramesh Narayan Yadav� either Ramesh, Narayan, Yadav, Ram, Nar etc. can be given as the search criteria. 2. Party Name maybe the name of the Petitioner, Plaintiff, Complainant, Respondent, Defendant, Appellant, Accused or Extra Party. 3.In the Year box, enter the Case Registration Year. 4.Click on either the Pending or Disposed option button, according to the status of the Case. If you don�t know the exact status of the Case, then click on the Both option button. 5. Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided. 6. Click on the Go button, to get the list of Cases satisfying the given Party Name condition. 7. On finding the Case with the required Party Name, in the list, click on the adjacent View button from the list, to see the Case History of the respective Case.</p>
// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					  <div class="col-md-auto   text-sm-start text-md-end">
// 						<label for="petres_name" class="col-form-label"><span class="redStar">*</span>Petitioner/Respondent</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="petres_name" id="petres_name" class="form-control" size="20" maxlength="99"  onkeypress="return event.keyCode != 13;" onfocus="reg_lang('N');" placeholder="Enter Petitioner/Respondent"  onblur="reg_lang('N');" aria-required="true">
// 					  </div>
// 					  <div class="col-md-auto   text-sm-start text-md-end">
// 						<label for="rgyearP" class="col-form-label"><span class="redStar">*</span>Registration Year</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="rgyearP" id="rgyearP" maxlength="4" required="" autocomplete="off" class="form-control regyear"  placeholder="Enter Year"onkeypress="return event.keyCode != 13;" onfocus="reg_lang('N');" style="width: 242px;" title="" onblur="reg_lang('N');" aria-required="true">
// 					  </div>

// 					<div class="col-md-auto">
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radP" value="Pending" checked="checked">
// 						  <label class="form-check-label" for="radP">Pending</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radD" value="Disposed">
// 						  <label class="form-check-label" for="radD">Disposed</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radB" value="Both">
// 						  <label class="form-check-label" for="radB">Both</label>
// 						</div>
// 					</div>


// 					</div>


// 										<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_party" class='col-md-auto row'>
// 												</div>
// 						<label for="fcaptcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="fcaptcha_code" name="fcaptcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off"  onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">
// 					</div>

// 									<div class="row p-3">
// 					  <div class="col-2">
// 					  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" value="Go" onclick="submit_party_name();">Go</button>
// 						   <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_party');" name ="reset ">

// 					  </div>
// 				</div>

// 				<div id="res_party" class="p-2"></div>

// 				<div class="row p-3" id='party_help'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer"  href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSPartyNameHelp">Click here to view help video</a></li>
// 								  <li class="list-group-item">Enter at least 3 characters</li>
// 								  <li class="list-group-item">Party Name maybe the name of the Petitioner, Plaintiff, Complainant, Respondent, Defendant, Appellant, Accused or Extra Party.</li>
// 								  <li class="list-group-item">In the Year box, enter the Case Registration Year.</li>
// 								  <li class="list-group-item">Select Pending or Disposed option button according to the status of the case. Click on Both option if case status is not known</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on Go button to view the case details for the given FIR Number</li>
// 								  <li class="list-group-item">Click on the Go button, to get the list of cases matching the given party name</li>
// 								</ul>
// 					  </div>
// 				</div>


				
// 	</form>
// </div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to Party Name results" onclick="main_back('CSpartyName')" id="main_back_party" style="display:none">Back</button></p>
// <div id="CSpartyName"></div>
// <div id="caseBusinessDiv_csParty" style="display:none"></div>

// <div id="caseBusinessDiv" style="display:none"></div>

// <div  class="col text-center" id="printDiv" style="display:none;">
// 	<input id='printbtn4' class='button btn btn-primary mx-auto' type='button' 
// 	value='Print' onclick="printContent('caseBusinessDiv_csParty');" >
// </div>
//   </div>

//   <div class="tab-pane fade border"
//        id="casenumbertab"
//        role="tabpanel"
//        aria-labelledby="casenumber-tabMenu"
//        >
//     <div id="casenumber_div">
// <form name="search_case" id="search_case" action="" method="post">
// 			   <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Case Number</h2>

// 				<div class="row p-3 align-items-center" role="region" aria-label="form">
// 				<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					  <div class="col-md-2  text-sm-start text-md-end">
// 						<label for="case_type" class="col-form-label"><span class="redStar">*</span>Case Type</label>
// 						</div>
// 					<div class="col-md-3">
// 						<select id="case_type"  name="case_type" required="" class="form-select" aria-required="true"><option>Select case type</option></select>
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="search_case_no" class="col-form-label"><span class="redStar">*</span>Case Number</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" class="form-control" name="search_case_no" id="search_case_no" placeholder="Case Number" maxlength="7" required="" autocomplete="off" aria-required="true">
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="rgyear" class="col-form-label"><span class="redStar">*</span>Year</label>
// 					</div>
// 					<div class="col-md-auto">
// 						<input type="text" class="form-control regyear" name="rgyear" id="rgyear" placeholder="Year" maxlength="4" required="" autocomplete="off">
// 					  </div>
// 					</div>
// 										<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_caseno" class='col-md-auto row'>
// 												</div>
// 						<label for="case_captcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="case_captcha_code" name="case_captcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off" aria-required="true">
// 					</div>

					

// 					<div class="row p-3">
// 					  <div class="col-2">
// 					  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" onclick="submitCaseNo();">Go</button>
// 						    <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('case_no_res');"  name ="reset">

// 					  </div>
// 				</div>



// <div id="case_no_res" class="p-2"></div>


// 				<div class="row p-3" id='help_case'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								 				<li class="list-group-item"><a target="_blank" rel="noopener noreferrer" href="/ecourtindia_v6/?p=hcservices/show_help_videos&caseSearchType=CSPartyNameHelp">Click here to view help video</a></li>

// 								  <li class="list-group-item">Select case type</li>
// 								  <li class="list-group-item">Enter the case registration number</li>
// 								  <li class="list-group-item">In the Year box, enter the Case Registration Year.</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on Go button to view the case details for the given Case Number</li>
// 								  <li class="list-group-item">Click on the View button to see the Case History of the respective Case</li>
// 								</ul> 
// 					  </div>
// 				</div>
// 				</form>
   
// </div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to Case Number results" onclick="main_back('CScaseNumber')" id="main_back_caseNo" style="display:none">Back</button></p>
// <div id="CScaseNumber"></div>
// <div id="caseBusinessDiv_csNo" style="display:none"></div>


// <div  class="col text-center" id="printDiv_csNo" style="display:none;">
//         <input id='printbtn4' class='button btn btn-primary mx-auto' type='button' 
//         value='Print' onclick="printContent('caseBusinessDiv_csNo');" >
// </div>

//   </div>

//   <div class="tab-pane fade border"
//        id="filingnumbertab"
//        role="tabpanel"
//        aria-labelledby="filingnumber-tabMenu"
//        >
//     <div id="filingnumber_div">
// <form name="frm_file_search_name" id="frm_file_search_name" action="" method="post">
//  <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Filing Number</h2>
//  <p class="visually-hidden">How to 1. In the Filing Number box, enter the Filing Number of the Case. 2. In the Year box, enter the Case Filing Year. 3. Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided. 4. Click on Go button to view the case matching the given filing number 5. Click on the View button to see the Case History of the respective Case</p>
// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 		 <div class="col-md-auto  text-sm-start text-md-end" id='case_type_lbl_div' style='display:none;'>
//                 <label for="case_type44" class="col-form-label"><span class="redStar">*</span>Case Type</label>
//         </div>
//         <div class="col-md-3" id='case_type_div' style='display:none;'>
//                 <select name="case_type" id="case_type_1"  aria-describedby="Select_alert" class="form-select" aria-required="true"><option value="">Select case type</option></select>
//         </div>


// 		  <div class="col-md-2  text-sm-start text-md-end">
// 			<label for="filing_no"  class="col-form-label"><span class="redStar">*</span>Filing Number</label>
// 			</div>
// 		<div class="col-md-auto">
// 			<input type="text" name="filing_no" id="filing_no" maxlength="7" required="" autocomplete="off" placeholder="Filing Number" class="form-control" aria-required="true">
// 		  </div>
// 		  <div class="col-md-auto  text-sm-start text-md-end">
// 			<label for="rgyearP"  class="col-form-label"><span class="redStar">*</span>Year</label>
// 			</div>
// 		<div class="col-md-auto">
// 			<input type="text" name="filyear" id="filyear" maxlength="4" required=""  autocomplete="off" placeholder="Year" class="form-control regyear" aria-required="true">
// 		  </div>
// 		</div>
// 				<div class='row px-3'>
// 				<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 				<div id="div_captcha_fileno" class='col-md-auto row'>
// 								</div>
// 				<label for="file_captcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 				<input type="text" class="col-md-2 form-control w-auto" id="file_captcha_code" name="file_captcha_code" onfocus="reg_lang('N')"  maxlength='6' placeholder="Enter Captcha" autocomplete="off" aria-required="true">
// 			</div>

			
// 		<div class="row p-3">
// 			  <div class="col-2">
// 			  </div>
// 			  <div class="col-md-auto">
// 				  <button type="button" class="btn btn-primary" onclick="submit_filing_no();">Go</button>
// 				   <!--<button type="reset" class="btn btn-secondary">Reset</button>-->
// 					  <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_filing');" name ="reset">

// 			  </div>
// 		</div>

// 				<div id="res_filing" class="p-2"></div>

// 				<div class="row p-3" id='help_filno'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer" 
// 								  href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSFilingNumberHelp"
// 								  >Click here to view help video</a></li>
// 								  <li class="list-group-item">In the Filing Number box, enter the Filing Number of the Case.</li>
// 								  <li class="list-group-item">In the Year box, enter the Case Filing Year.</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on Go button to view the case matching the given filing number</li>
// 								  <li class="list-group-item">Click on the View button to see the Case History of the respective Case</li>
// 								</ul>
// 					  </div>
// 				</div>

// 		</form>
// 	</div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto"  aria-label="Back to Filing No results" onclick="main_back('CSfilingNumber')" id="main_back_filingNo" style="display:none">Back</button></p>
// <div id="CSfilingNumber"></div>
// <div id="caseBusinessDiv_filingNo" style="display:none"></div>


// <div  class="col text-center" id="printDiv_filingno" style="display:none;">
//         <input id='printbtn6' class='button btn btn-primary mx-auto' type='button' 
//         value='Print' onclick="printContent('caseBusinessDiv_filingNo');" >
// </div>

//   </div>

//   <div class="tab-pane fade border"
//        id="advnametab"
//        role="tabpanel"
//        aria-labelledby="advname-tabMenu"
//        >
//     <div id="advname_div">
//  <form name="frm_adv_search_name" id="frm_adv_search_name" action="" method="post">
//  <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Advocate</h2>
// <p class="visually-hidden">How to 1. The Cases can be searched by either clicking on the Advocate Name, Bar Registration Number or Advocate's Cause List (to view the date wise cause list of Advocate) option buttons. 2. On clicking the Advocate Name option button, enter the Name of the Advocate in the box, in part (minimum 3 characters) or full - e.g. for searching the name of the advocate as �Suresh Mahohar Singh� either Suresh, Manohar, Singh, Sur, Sin etc., can be given. 3. On clicking the Bar Registration Number option button, enter the Bar Registration Number of the advocate, in the box, for e.g. MAH/XXXX/1982 (where MAH is the state code, XXXX is the bar registration number and 1982 is the year). 4. Click on either the Pending or Disposed option button, according to the status of the Case (only in case the Advocate Name or Bar Registration Number options have been chosen - refer to step iii and iv above). If you don't know the exact status of the Case, then click on the Both option button. 5. On clicking the Advocate's Cause List option button, enter the Bar Registration Number in the box, for e.g. MAH/XXXX/1982 (where MAH is the State Code, XXXX is the Bar Registration Number and 1982 is the Year) and select the Cause List Date from the calendar control. 6. Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided. 7. In case of Advocate and Bar Registration Number option, Click on the Go button, to get Cases satisfying the given Advocate's Name or Bar Registration Number condition. Click on the adjacent View button from the list, to see the Case History of the respective Case. 8. In case of Advocate's Cause List option, Click on Go button, to get the Advocate's Cause List on the selected date.</p>

// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					<div class="col-md-auto">
// 						<div class="form-check form-check-inline" >
// 						  <input class="form-check-input" type="radio" name="radAdvt" id="radAdvtName" value="1" onclick="show_bar_code()" checked="checked">
// 						  <label class="form-check-label" for="radAdvtName">Advocate Name</label>
// 						</div>
// 						<div class="form-check form-check-inline" >
// 						  <input class="form-check-input" type="radio" name="radAdvt" id="radAdvtBarCode" value="2" onclick="show_bar_code()">
// 						  <label class="form-check-label" for="radAdvtBarCode" >Bar Code</label>
// 						</div>
// 						<div class="form-check form-check-inline" >
// 						  <input class="form-check-input" type="radio" name="radAdvt" id="radTodCaseList" onclick="show_bar_code()" value="3">
// 						  <label class="form-check-label" for="radTodCaseList">Date Case List</label>
// 						</div>
// 					 </div>

// 					  <div class="col-md-auto  text-sm-start text-md-end adv_div">
// 						<label for="rgyearP" class="col-form-label"><span class="redStar">*</span>Advocate</label>
// 					  </div>
// 					  <div class="col-md-2 adv_div">
// 						<input type="text" maxlength="100" size="30" name="advocate_name" id="advocate_name" placeholder="Advocate" class="form-control"  onkeypress="return event.keyCode != 13;" onfocus="reg_lang('N');"  title="" onblur="reg_lang('N');" tabindex='0' autocomplete='off' aria-required="true">

// 						<div id="error_advocate_name"></div>
// 					  </div>

// 					  <div class="col-md-auto  text-sm-start text-md-end divAdvtBarCode" style="display:none">
// 							<label for="adv_bar_state" class="col-form-label" ><span class="redStar">*</span>Advocate&nbsp;Bar Code</label>
// 						</div>
// 						<div class="col-md-2 input-group divAdvtBarCode w-250" style="display:none">							
// 							<input type="text"  maxlength="6" size="10" name="adv_bar_state" id="adv_bar_state" onkeypress="return event.keyCode != 13;" class="form-control csBarCode" title="Enter Advocate state code Mandatory field" placeholder="statecode" autocomplete="off" onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">
// 							<input type="text" maxlength="8" size="10" name="adv_bar_code" id="adv_bar_code" onkeypress="return event.keyCode != 13;" class="form-control csBarCode" title="Enter Advocate bar code Mandatory field" placeholder="barcode" autocomplete="off" onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">
// 							<input type="text" maxlength="4"  size="4" name="adv_bar_year" id="adv_bar_year" onkeypress="return event.keyCode != 13;" class="form-control csBarCode" title="Enter Advocate bar code year Mandatory field" placeholder="year" autocomplete="off" onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">

// 							<div id="error_advocate_barcode"></div>
// 						</div>
					

// 					<div class="col-md-auto" id="c_status">
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radPAdvt" value="Pending" checked="checked">
// 						  <label class="form-check-label" for="radPAdvt">Pending</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radDAdvt" value="Disposed">
// 						  <label class="form-check-label" for="radDAdvt">Disposed</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radBAdvt" value="Both">
// 						  <label class="form-check-label" for="radBAdvt">Both</label>
// 						</div>
// 					</div>


// 					<div class="col-md-auto divCaseListCal" style="display:none">
// 						<label for="caselist_date" class="mainLabel col-form-label" tabindex="0" ><span class="redStar">*</span>Case List Date</label>
// 					</div>

// 					<div class="col-md-2  divCaseListCal" style="display:none">
// 						<input type="text" tabindex="0" name="caselist_date" class="form-control is-datepick" id="caselist_date" size='11' value="28-03-2026 " maxlength='12'  onkeydown="return false;"  autocomplete="off" class="" aria-required="true">
// 						<!--<img class="calendar datepick-trigger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPAQMAAADXvd1sAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYCABAAAALQAB+yoTKgAAAABJRU5ErkJggg==" alt="Calendar Button" tabindex="0">-->
// 					</div>

// 						<div style="display:none;"> 
// 						<img id="calImgAdv" class="calendar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPAQMAAADXvd1sAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAxJREFUeNpjYCABAAAALQAB+yoTKgAAAABJRU5ErkJggg==" alt="Calendar Button" tabindex="0"> 
// 						</div>
// 					<!--</div>-->


// 			</div>
// 							<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_adv" class='col-md-auto row'>
// 												</div>
// 						<label for="fcaptcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="adv_captcha_code" name="adv_captcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off"   onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">
// 					</div>
			
				


// 				<div class="row p-3">
// 					  <div class="col-2">
// 					  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" onclick="submit_adv_name()">Go</button>
// 						   <!--<button type="reset" class="btn btn-secondary"></button>-->
// <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_adv_name');" name ="reset">
 

// 					  </div>
// 				</div>

// 				<div id="res_adv_name" class="p-2"></div>

// 				<div class="row p-3" id='help_adv'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer" 
// 								  href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSAdvocateHelp">
// 								  Click here to view help video</a></li>
// 								  <li class="list-group-item">The Cases can be searched by either clicking on the Advocate Name, Bar Registration Number or Advocate&#039;s Cause List (to view the date wise cause list of Advocate) option buttons.</li>
// 								  <li class="list-group-item">On clicking the Advocate Name option button, enter the Name of the Advocate in the box, in part (minimum 3 characters) or full - e.g. for searching the name of the advocate as &sbquo;Suresh Mahohar Singh&sbquo; either Suresh, Manohar, Singh, Sur, Sin etc.</li>
// 								  <li class="list-group-item">On clicking the Bar Registration Number option button, enter the Bar Registration Number of the advocate in the box, for e.g. MAH/XXXX/1982 (where MAH is the state code, XXXX is the bar registration number and 1982 is the year).</li>
// 								  <li class="list-group-item">Click on either the Pending or Disposed option button, according to the status of the Case (only in case the Advocate Name or Bar Registration Number options have been chosen</li>
// 								  <li class="list-group-item">On clicking the Advocate&#039;s Cause List option button, enter the Bar Registration Number in the box, for e.g. MAH/XXXX/1982 (where MAH is the State Code, XXXX is the Bar Registration Number and 1982 is the Year) and select the Cause List Date from the calendar control.</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">For Advocate and Bar Registration Number options, click on the Go button to display cases matching the Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Name or Bar Registration Number. Click on the View button from the list, to see the Case History of the respective Case.</li>
// 								  <li class="list-group-item">For Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Cause List option, click on Go button to get the Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Cause List on the selected date</li>
// 								</ul>
// 					  </div>
// 				</div>

// 				</form>
// </div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to Advocate results"  onclick="main_back('CSAdvName')" id="main_back_AdvName" style="display:none">Back</button></p>
// <div id="CSAdvName"></div>
// <div id="caseBusinessDiv_AdvName" style="display:none"></div>

// <div  class="col text-center" id="printDiv_advnm" style="display:none;">
// 	<input id='printbtn3' class='button btn btn-primary mx-auto' type='button' 
// 	value='Print' onclick="printContent('caseBusinessDiv_AdvName');" >
// </div>
//   </div>

//   <div class="tab-pane fade border"
//        id="firnumbertab"
//        role="tabpanel"
//        aria-labelledby="firnumber-tabMenu"
//        >
//     <div id="firnumber_div">
//   <form name="search_fir" id="search_fir" action="" method="post">
//   <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by FIR number</h2>
// <p class="visually-hidden">How to 1. Select the Police Station from the select box. 2. In the FIR Number box, enter the FIR Number of the case. 3. In the Year box, enter the FIR Year. 4. Click on either the Pending or Disposed option button, according to the status of the Case. If you don't know the exact status of the Case, then click on the Both option button. 5. Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided. 6. Click on the Go button, to get the Case satisfying the FIR Number search criteria. 7. Click on the adjacent View button, to see the Case History of the respective Case.</p>
// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="police_st_code" class="col-form-label"><span class="redStar">*</span>Police Station</label>
// 						</div>
// 					<div class="col-md-3">
// 						<select name="police_st_code" id="police_st_code"  required="" aria-describedby="Select_alert" class="form-select" aria-required="true"><option value="">Select police station</option></select>
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="fir_no" class="col-form-label">FIR Number</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="fir_no" id="fir_no" maxlength="15" size="10" autocomplete="off" placeholder="FIR Number" class="form-control">
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="firyear" class="col-form-label">Year</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="firyear" id="firyear" maxlength="4" autocomplete="off" placeholder="Year" class="form-control regyear">
// 					  </div>

// 					<div class="col-md-auto">
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radPFir" value="Pending" checked="checked">
// 						  <label class="form-check-label" for="radPFir">Pending</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radDFir" value="Disposed">
// 						  <label class="form-check-label" for="radDFir">Disposed</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radBFir" value="Both">
// 						  <label class="form-check-label" for="radBFir">Both</label>
// 						</div>
// 					</div>
// 				</div>
// 									<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_fir" class='col-md-auto row'>
// 												</div>
// 						<label for="fir_captcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="fir_captcha_code" name="fir_captcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off"  onfocus="reg_lang('N');" onblur="reg_lang('N');" aria-required="true">
// 					</div>

// 								<div class="row p-3">
// 					  <div class="col-2">
// 					  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" onclick="submitFirNumber();">Go</button>
// 						     <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_fir');"  name ="reset">
// 					  </div>
// 				</div>


// 				<div id="res_fir" class="p-2"></div>

// 				<div class="row p-3" id='help_fir'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer" 
// 								   href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSFIRNumberHelp"
// 								  >Click here to view help video</a></li>
// 								  <li class="list-group-item">Select the Police Station from the select box.</li>
// 								  <li class="list-group-item">In the FIR Number box, enter the FIR Number of the case.</li>
// 								  <li class="list-group-item">In the Year box, enter the FIR Year.</li>
// 								  <li class="list-group-item">Select Pending or Disposed option button according to the status of the case. Click on Both option if case status is not known</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on Go button to view the case details for the given FIR Number</li>
// 								  <li class="list-group-item">Click on the View button to see the Case History of the respective Case</li>
// 								</ul>
// 					  </div>
// 				</div>
// 			</form>
// </div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to FIR Number results"   onclick="main_back('CSFIRNumber')" id="main_back_Fir" style="display:none">Back</button></p>
// <div id="CSFIRNumber"></div>
// <div id="caseBusinessDiv_Fir" style="display:none"></div>


// <div  class="col text-center" id="printDiv_fir" style="display:none;">
//         <input id='printbtn5' class='button btn btn-primary mx-auto' type='button' 
//         value='Print' onclick="printContent('caseBusinessDiv_Fir');" >
// </div>

//   </div>

//   <div class="tab-pane fade border"
//        id="acttab"
//        role="tabpanel"
//        aria-labelledby="act-tabMenu"
//       >
//     <div id="act_div">
//  <form name="frm_act" id="frm_act" action="" method="post">
//  <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Act Type</h2>
// <p class="visually-hidden">How to 1. Facility to search the Acts from the Act list is also provided, since the Act List is very long. Enter a few letters of the Act Description in the Search Act box and press the Search button. 2. All the Acts matching the search criteria are displayed in the Act Type select box. Select the required Act Type from the select box. 3. If no search criteria are specified then, all the Acts are displayed in the Act Type select box. Select the required Act Type from the select box. 4. In the Under Section box, enter the Section which you want to search under the selected Act. If the section is not entered in the Under Section box, then the Cases belonging to all the sections under the selected Act will be listed. 5. Click on either the Pending or Disposed option button, according to the status of the Case. 6. Enter the Captcha (the 5 digit numbers shown on the screen) in the text box provided. 7. Click on the Go button, to get the Cases satisfying the given Act and Under Section condition. 8. Click on the adjacent View button from the list, to see the Case History of the respective Case.</p>
// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="search_act" class="col-form-label">Search Act</label>
// 						</div>
// 					<div class="col-md-2">
// 						<div class="input-group">
// 						  <input name="search_act" id="search_act" type="text" maxlength="100" autocomplete="off" class="form-control" placeholder="Search Act" aria-label="Search Act" aria-describedby="fillActTypebtn">
// 						  <button class="btn btn-primary" type="button" id="fillActTypebtn" onclick="fillActType();" aria-label="click here to search act"><i class="fa fa-search" aria-hidden="true"></i></button>
// 						</div>
// 					 </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="actcode" class="col-form-label"><span class="redStar">*</span>Act Type</label>
// 						</div>
// 					<div class="col-md-2">
// 						<select name="actcode" id="actcode" required="" aria-describedby="Select_alert" class="form-select" aria-required="true"><option value="">Select Act Type</option></select>
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="under_sec" class="col-form-label">Under Section</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="under_sec" id="under_sec" autocomplete="off" class="form-control"  placeholder="Under Section" maxlength="15" >
// 					  </div>

// 					<div class="col-md-auto">
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radPAct" value="Pending" checked="checked">
// 						  <label class="form-check-label" for="radPAct">Pending</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radDAct" value="Disposed">
// 						  <label class="form-check-label" for="radDAct">Disposed</label>
// 						</div>
// 					</div>
// 				</div>
// 									<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_act" class='col-md-auto row'>
// 												</div>
// 						<label for="act_captcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="act_captcha_code" name="act_captcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off" aria-required="true">
// 					</div>
// 									<div class="row p-3">
// 					  <div class="col-2">  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" onclick="submitAct()">Go</button>
// 						    <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_act');" name ="reset">
// 					  </div>
// 				</div>

// 				<div id="res_act" class="p-2"></div>

// 				<div class="row p-3" id='help_act'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer" href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSActHelp">Click here to view help video</a></li>
// 								  <li class="list-group-item">To search Act from Act list, please enter minimum 3 characters of the Act description and click on search button</li>
// 								  <li class="list-group-item">All the Acts matching the search criteria are displayed in the Act Type select box. Select the required Act Type from the select box.</li>
// 								  <li class="list-group-item">If no search criteria are specified then, all the Acts are displayed, select the required Act Type from the select box.</li>
// 								  <li class="list-group-item">In the Under Section box, enter the Section which you want to search under the selected Act. If the section is not entered in the Under Section box, then the Cases belonging to all the sections under the selected Act will be listed.</li>
// 								  <li class="list-group-item">Click on either the Pending or Disposed option button, according to the status of the Case.</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on the Go button, to get the Cases satisfying the given Act and Under Section condition.</li>
// 								  <li class="list-group-item">Click on the adjacent View button from the list, to see the Case History of the respective Case.</li>
// 								</ul>
// 					  </div>
// 				</div>
// 		</form>
// 	</div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to Act results" onclick="main_back('CSact')" id="main_back_act" style="display:none">Back</button></p>
// <div id="CSact"></div>
// <div id="caseBusinessDiv_act" style="display:none"></div>



// <div  class="col text-center" id="printDiv_act" style="display:none;">
// 	<input id='printbtn1' class='button btn btn-primary mx-auto' type='button' 
// 	value='Print' onclick="printContent('caseBusinessDiv_csParty');" >
// </div>
//   </div>

//   <div class="tab-pane fade border"
//        id="casetypetab"
//        role="tabpanel"
//        aria-labelledby="casetype-tabMenu"
//        >
//     <div id="casetype_div">
// <form name="frm_casetype" id="frm_casetype" action="" method="post">
//  <h2 class="h2class text-start border-bottom py-2 ps-2">Case Status : Search by Case Type</h2>
// <p class="visually-hidden">How to 1. Select the Case Type from the select box. 2. In the Year box, enter the Case Registration Year. 3. Click on either the Pending or Disposed option button, according to the status of the Case. 4. Enter the Captcha (the 5 digit numbers shown on the screen) in the text box provided. 5. Click on the Go button, to get list of all the Cases satisfying the given Case Type condition. 6. Click on the adjacent View button from the list, to see the Case History.</p>
// 	<div class="row p-3 align-items-center" role="region" aria-label="form">
// 	<span style="color: #b30000;" class="mb-2 small">Fields marked with * are required</span>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="case_type44" class="col-form-label"><span class="redStar">*</span>Case Type</label>
// 						</div>
// 					<div class="col-md-3">
// 						<select name="case_type_1" id="case_type_2" required="" aria-describedby="Select_alert" class="form-select" aria-required="true"><option value="">Select case type</option></select>
// 					  </div>
// 					  <div class="col-md-auto  text-sm-start text-md-end">
// 						<label for="search_year" class="col-form-label"><span class="redStar" style="float:left">*</span>Year</label>
// 						</div>
// 					<div class="col-md-auto">
// 						<input type="text" name="search_year" id="search_year" autocomplete="off" placeholder="Year" class="form-control regyear" maxlength="4" aria-required="true">
// 					  </div>

// 					<div class="col-md-auto">
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radPCT" value="Pending" checked="checked">
// 						  <label class="form-check-label" for="radPCT">Pending</label>
// 						</div>
// 						<div class="form-check form-check-inline">
// 						  <input class="form-check-input" type="radio" name="case_status" id="radDCT" value="Disposed">
// 						  <label class="form-check-label" for="radDCT">Disposed</label>
// 						</div>
// 					</div>
// 					</div>
// 									<div class='row px-3'>
// 						<label for="" class="capLabel col-md-2 col-form-label font-weight-bold text-lg-end" >Captcha</label>
// 						<div id="div_captcha_ct" class='col-md-auto row'>
// 												</div>
// 						<label for="ct_captcha_code" class="col-md-auto col-form-label text-lg-right font-weight-bold"><span class="redStar">*</span>Enter Captcha</label>
// 						<input type="text" class="col-md-2 form-control w-auto" id="ct_captcha_code" name="ct_captcha_code"  maxlength='6' placeholder="Enter Captcha" autocomplete="off" aria-required="true">
// 					</div>
// 								<div class="row p-3">
// 					  <div class="col-2">
// 					  </div>
// 					  <div class="col-md-auto">
// 						  <button type="button" class="btn btn-primary" onclick="submitCaseType();">Go</button>
// 						    <input type="reset" class="btn btn-secondary" value="Reset" onclick="resetDataGrid('res_case_type');" name ="reset">
// 					  </div>
// 				</div>

// <div id="res_case_type" class="p-2"></div>


// 				<div class="row p-3" id='help_case_type'>
// 					  <div class="col">
// 							<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 								<ul class="list-group list-group-numbered">
// 								  <li class="list-group-item"><a target="_blank" aria-label="Click here to view help video, Opens in new tab" rel="noopener noreferrer" 
// 								   href="/ecourtindia_v6/?p=view_help_videos/show_help_videos&caseSearchType=CSCaseTypeHelp">Click here to view help video</a></li>
// 								  <li class="list-group-item">Select case type</li>
// 								  <li class="list-group-item">In the Year box, enter the Case Registration Year.</li>
// 								  <li class="list-group-item">Click on either the Pending or Disposed option button, according to the status of the Case.</li>
// 								  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 								  <li class="list-group-item">Click on the Go button, to get list of all the Cases satisfying the given Case Type condition</li>
// 								  <li class="list-group-item">Click on the adjacent View button from the list, to see the Case History.</li>
// 								</ul>
// 					  </div>
	
// 				</div>

// 				</form>
// 			</div>
// <p class="text-center m-0"><button class="btn btn-primary px-2 my-2 mx-auto" aria-label="Back to Case Type results" onclick="main_back('CScaseType')" id="main_back_caseType" style="display:none">Back</button></p>
// <div id="CScaseType"></div>
// <div id="caseBusinessDiv_caseType" style="display:none"></div>


// <div  class="col text-center" id="printDiv_casetype" style="display:none;">
// 	<input id='printbtn2' class='button btn btn-primary mx-auto' type='button' 
// 	value='Print' onclick="printContent('caseBusinessDiv_caseType');" >
// </div>
//   </div>

// </div>

//         </div>
//       </div>
//         </div>

//       </div>

// 	  </div>

// 	  <div class="modal fade" id="bs_alert" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="alert message" data-bs-keyboard="false" data-bs-backdrop="static">
// 	  <div class="modal-dialog" role="document">
// 		<div class="modal-content">
// 		  <div class="modal-body px-2 py-4">
			
// 		  </div>
// 		  <div class="modal-footer">
// 			<button type="button" class="btn btn-primary btn-sm" data-bs-dismiss="modal">OK</button>
// 		  </div>
// 		</div>
// 	  </div>
// 	</div>

// 	  <!-- <div class="row mt-2">
// 		<div class="col">
// 		<h3 class="bg-primary fw-bold text-white howtotext rounded p-1"><i class="fa fa-question-circle" aria-hidden="true"></i>&nbsp;How to</h3>
// 			<ul class="list-group list-group-numbered">
//           <li class="list-group-item"><a target="_blank" rel="noopener noreferrer" href="https://services.ecourts.gov.in/ecourtindia_v6/static/viewHelpVideo.php?caseSearchType=CSPartyNameHelp">Click here to view help video</a></li>
//           <li class="list-group-item">Enter the Party Name, in part (minimum 3 characters) or full</li>
//           <li class="list-group-item">Party Name maybe the name of the Petitioner, Plaintiff, Complainant, Respondent, Defendant, Appellant, Accused or Extra Party.</li>
//           <li class="list-group-item">In the Year box, enter the Case Registration Year.</li>
// 		  <li class="list-group-item">Select Pending or Disposed option button according to the status of the case. Click on Both option if case status is not known</li>
// 		  <li class="list-group-item">Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.</li>
// 		  <li class="list-group-item">vii.Click on Go button to view the case details for the given FIR Number</li>
// 		  <li class="list-group-item">Click on the Go button, to get the list of cases matching the given party name</li>
// </ul>
// 		</div>
// 	  </div> -->
//     </main>
//   </div>
// </div>
// <script src="/ecourtindia_v6/js/searchByCaseStatus.js"></script>
// <script>
// (function () {
//   const tablist = document.getElementById('caseSearchTabs');
//   if (!tablist) return;

//   const tabs = Array.from(tablist.querySelectorAll('[role="tab"]'));

//   function syncTabs(activeTab) {
//     tabs.forEach(t => {
//       const isActive = t === activeTab;
//       t.setAttribute('aria-selected', isActive ? 'true' : 'false');
//       t.tabIndex = isActive ? 0 : -1;
//     });
//   }

//   // When Bootstrap activates a tab
//   tabs.forEach(tab => {
//     tab.addEventListener('shown.bs.tab', (e) => syncTabs(e.target));

//     tab.addEventListener('keydown', (e) => {
//       const key = e.key;
//       const i = tabs.indexOf(e.currentTarget);
//       let next = null;

//       if (key === 'ArrowRight') next = (i + 1) % tabs.length;
//       if (key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
//       if (key === 'Home') next = 0;
//       if (key === 'End') next = tabs.length - 1;

//       if (next !== null) {
//         e.preventDefault();
//         tabs[next].focus();
//       }

//       if (key === 'Enter' || key === ' ') {
//         e.preventDefault();
//         tabs[i].click();
//       }
//     });
//   });

//   // Initial sync
//   syncTabs(tabs.find(t => t.classList.contains('active')) || tabs[0]);
// })();
// </script>


// <script>
// $(document).ready(function(){
	
// 	/*setTimeout(function(){
// 	 var state_code =$("#sess_state_code").val() ;
// 	 var dist_code=$('#sess_dist_code').val();
// 	 var courtArr=$('#court_complex_code').val();
// 	//alert(state_code+"--"+dist_code+'=='+courtArr)	
// 	 if(state_code==0 || dist_code==0 || courtArr==0) {
// 		 errorAlert(alerts_array[485]);
// 		return false;
//      	// alert("Select State District and Court Complex ");
// 		 //return false;
// 	 }
// 	},1000);
// });	*/
// </script>


   
// <br/><br/><br/><br/>
 
//     <div class='alert alert-danger alert-dismissiblefade'  style='align:center;text-align:center;display: none;'><a href="#" class="btn-close" data-bs-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-danger'></div></div>
//     <div class='alert alert-success alert-dismissible fade' style='align:center;text-align:center;display: none;'><a href="#" class="btn-close" data-bs-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-success'></div></div>
// 	<div class='alert alert-warning alert-dismissible fade' style='align:center;text-align:center;display: none;'><a href="#" class="btn-close" data-bs-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-warning'></div></div>
// 	<div class='alert alert-info alert-dismissible fade' style='align:center;text-align:center;display: none;'><a href="#" class="btn-close" data-bs-dismiss="alert" aria-label="close" style='padding: 0px;'>&times;</a><div id='msg-info'></div></div>
   
	
//     <input type="hidden" name="base_url" id='base_url1' value="/ecourtindia_v6">
   
  
//     <input type="hidden" name="app_token" id='app_token' value="">
// 	<input type="hidden" name="sessionlangid" id='sessionlangid' value="1">
// 	 <input type="hidden" name="p_order" id='p_order' value="">
// 	  <input type="hidden" name="hdn_process_id" id="hdn_process_id" value="">


	
   
// 	<div class="modal fade" id="loadMe" tabindex="-1" role="dialog"  aria-label="loading panel">
// 	  <div class="modal-dialog modal-sm" role="document">
// 		<div class="modal-content">
// 		  <div class="modal-body text-center">
// 		  <div class="fa-2x">
// 			  <i class="fas fa-spinner fa-spin"></i>
// 			</div>
// 			<div class="loader"></div>
// 			<div class="loader-txt">
// 			  <p>Loading...</small></p>
// 			</div>
// 		  </div>
// 		</div>
// 	  </div>
// 	</div>


// 	<div class="modal fade" id="validateError" tabindex="-1" role="dialog"  aria-label="validation error panel"  style="display:none;">
//   <div class="modal-dialog" role="document">
// 	<div class="modal-content">
// 	<div class="modal-header text-center align-items-start">
//         <i class="fas fa-3x fa-exclamation-triangle mb-3 text-secondary mx-auto w-100 d-none" id="errorIcon"></i>
// 		<i class="fas fa-3x fa-check-circle mb-3 text-success mx-auto w-100 " id="successIcon" aria-hidden="true"></i>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closeModel({modal_id:'validateError'})">&nbsp;</button>
//       </div>

// 	  <div class="modal-body p-1 text-center">
		
// 		<div clas="loader-txt">
// 		  <div class='alert alert-danger-cust'  style='align:center;text-align:center;word-wrap: break-word;'>
//               </div>
// 		<div class='alert alert-success-cust' style='align:center;text-align:center;display: none;word-wrap: break-word;'></div>
// 		</div>
// 	  </div>
// 	</div>
//   </div>
// </div>

// <!-- Modal -->
// <div class="modal fade" id="externalSiteModal" tabindex="-1" aria-labelledby="externalSite" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h2 class="modal-title h5" id="externalSite">External site alert</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
// 		 <p>This link shall take you to a external webpage. For any query regarding the contents of the linked page, please contact the webmaster of the concerned website.</p>
//       </div>
//       <div class="modal-footer">
//         <a class="btn btn-success" id='externalSiteLink' target='_blank' >Go</a>
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
//       </div>
//     </div>
//   </div>
// </div>


// <!-- Modal -->
// <div class="modal fade" id="modalOders" tabindex="-1" aria-label="Orders panel"  aria-hidden="true">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h2 class="modal-title h5" > PDF Viewer</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="closefile()"></button>
//       </div>
//       <div class="modal-body" id='modal_order_body'>
		
//       </div>
     
//     </div>
//   </div>
// </div>

// <div class="modal fade mt-2" id="modal-ack" tabindex="-1" aria-hidden="true" role="dialog"  aria-modal="true"  aria-label="View QR Code or Cause Title">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h2 class="modal-title h5" >Acknowlegement</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body" id='modal_ack_body'>
		
//       </div>
     
//     </div>
//   </div>
// </div>

// <div class="modal fade" id="modal_trans_est" tabindex="-1" aria-label="external Site" aria-hidden="true">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       <div class="modal-header" style='background-color:#9edbf9;'>
//         <h2 class="modal-title h5" >History</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body" id='modal_est_trans_body'>
		
//       </div>
     
//     </div>
//   </div>
// </div>

// <div class="modal fade" id="modal_trans_est1" tabindex="-1" aria-label="external Site" aria-hidden="true">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       <div class="modal-header" style='background-color:#9edbf9;'>
//         <h2 class="modal-title h5" >History</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body" id='modal_est_trans1_body'>
		
//       </div>
     
//     </div>
//   </div>
// </div>

// <div class="modal fade" id="modal_ia_business" tabindex="-1" aria-label="external Site" aria-hidden="true">
//   <div class="modal-dialog modal-xl">
//     <div class="modal-content">
//       <div class="modal-header" style='background-color:#9edbf9;'>
//         <h2 class="modal-title h5" >IA Business</h2>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body" id='modal_ia_business_body'>

//       </div>

//     </div>
//   </div>
// </div>

// <script>
// $('button').attr('type','button');
// </script>

//  </div>
        
//     </div>
//     </div>
//   </section>
  
// <!-- Footer -->
//  <div id="footer-container" class="container-fluid clearfix" role="contentinfo">
//   <div class="row topfooter">
//   <div class="col-md-3 borderright">
// <nav aria-label="footer navigation">
// 	<div class="row">
//       <ol class="col footerlinks ">
//       <li><a href="/ecourtindia_v6/?p=about_us/index" rel="noopener noreferrer">About Us</a></li>
//       <li><a href="/ecourtindia_v6/?p=news_letter/index" rel="noopener noreferrer">Newsletter</a></li>
//       <li><a href="/ecourtindia_v6/?p=forms_for_advocates/index" rel="noopener noreferrer">Forms for Advocates</a></li>
//       <li><a href="/ecourtindia_v6/?p=help_videos/index" rel="noopener noreferrer">Help Videos</a></li>
//       <li><a href="/ecourtindia_v6/?p=site_map/index" rel="noopener noreferrer">Site map </a></li>
// 	  <li><a href="/ecourtindia_v6/?p=contact_us/index" rel="noopener noreferrer">Contact Us</a></li>
// 	  <li><a href="/ecourtindia_v6/?p=web_info_manager/index" rel="noopener noreferrer">Web Information Manager</a></li>
//       <!--<li><a href="/ecourtindia_v6/?p=terms_and_conditions/index" rel="noopener noreferrer">Terms and Conditions</a></a></li>-->
//       <li><a href="/ecourtindia_v6/?p=copy_right_policy/index" rel="noopener noreferrer">Copyright Policy</a></li>
//       <li><a href="/ecourtindia_v6/?p=hyper_linking_policy/index" rel="noopener noreferrer">Hyperlinking Policy</a></li>
//       <!--<li><a href="/ecourtindia_v6/?p=privacy_policy/index" rel="noopener noreferrer">Privacy Policy</a></li>-->
// 	  <li><a href="/ecourtindia_v6/?p=accessibility_statement/index" rel="noopener noreferrer">Accessibility Statement</a></li>
//       <li><a href="/ecourtindia_v6/?p=screen_reader_access/index" rel="noopener noreferrer">Screen Reader Access</a></li>
// 	  <li><a href="/ecourtindia_v6/?p=disclaimer/index" rel="noopener noreferrer">Disclaimer</a></li>
// 	   <!--<li><a href="/ecourtindia_v6/?p=help/index" rel="noopener noreferrer">Help</a></li>-->
//       </ol>
// 	  </div>
// 	</nav>
//   </div>
//   <!--end od border right class-->
//   <div class="col-md-6">
//    <div class="align-middle" id="complementary">
//      <a onclick="externalLink('http://www.digitalindia.gov.in/')" href="#" rel="noopener noreferrer" title="Digital India External website that opens a new window">
// 	 <img class="digital-india1 fooimg" src="images/DigitalIndia_Logo.png" alt="Digital India External website that opens a new window" width="95" height="51"></a>
// 	 <a onclick="externalLink('http://www.india.gov.in/')" href="#" rel="noopener noreferrer" title="National Portal of India External website that opens a new window">
// 	 <img class="india-gov-logo1 fooimg" src="images/govin_Logo.png" alt="National Portal of India External website that opens a new window" width="80" height="46"></a>
// 	 <a onclick="externalLink('https://doj.gov.in/')" href="#" rel="noopener noreferrer" title="Department of Justice External website that opens a new window">
// 	 <img class="doj-logo1 fooimg" src="images/Justice_Logo.png" alt="Department of Justice External website that opens a new window" width="120" height="45"></a>
// 	 <a onclick="externalLink('https://ecommitteesci.gov.in/')" href="#" title="e-Committee Supreme Court of India External website that opens a new window">
// 	 <img class="ecommittee-logo1 fooimg" src="images/ecommittee-logo.png" alt="e-Committee Supreme Court of India" width="115" height="43"></a>
// 	 <a onclick="externalLink('http://indiacode.nic.in/')" href="#" rel="noopener noreferrer" title="India Code External website that opens a new window">
// 	<img class="IC-logo1 fooimg" src="images/IC-logo.png" alt="India Code Centre External website that opens a new window" width="89" height="45"></a>
// 	<a onclick="externalLink('https://www.nic.in/')" href="#" title="National Informatics Centre External website that opens a new window">
// 	 <img class="nic-logo1 fooimg" src="images/nic-logo.png" alt="National Informatics Centre External website that opens a new window" width="115" height="26"></a>
//    </div>
//    <!--end of row-->
//     <div class="row">
// 	<p>This site is designed, hosted and maintained by <a class="nicLink" onclick="externalLink('http://www.nic.in/')" href="#" rel="noopener noreferrer" title="National Informatics Centre">National Informatics Centre (NIC) <span class="visually-hidden">External website that opens a new window</span><sup><i class=" fa fa-external-link-alt"></i></sup></a> Ministry of Electronics &amp; Information Technology,
// 	Government of India.</p>
//    </div><!--end of row-->
//   </div><!--end of complementary-->
//   <div class="col-md-3">
//     <ol style="display:none;">
//       <li class="ol-foo-title">Visitor count</li>
//       <li><input type="text" name="visitor_count" value="1324657" class="visitor_ct" readonly="readonly"></li>
//       </ol>
// <!--	<p>Last reviewed and updated on&nbsp;:&nbsp; 21 October 2022</p>      -->
// <p>Content Reviewed and Updated on: 2 April 2024</p>

// <p><strong>Download eCourts Services App :</strong></p>
// 	<p><a onclick="externalLink('https://play.google.com/store/apps/details?id=in.gov.ecourts.eCourtsServices')" href="#" rel="noopener noreferrer" title="Google play External website that opens a new window"><img class="gp-b1" src="images/GooglePlay_Logo.png" alt="Google Play" width="119" height="34"><span class="visually-hidden">download app on Google Play</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a onclick="externalLink('https://apps.apple.com/in/app/ecourts-services/id1260905816')" href="#" rel="noopener noreferrer" title="App Store External website that opens a new window"><img class="app-store-b1" src="images/Appstore_Logo.png" alt="App Store" width="102" height="34"><span class="visually-hidden">download app on App Store</span></a></p>
//   </div>

//   </div><!--end of top footer row-->
// <div class="row bottomfooter bg-dark">
// <div class="col p-3">
// <p class='m-0'>S6 © 2022 eCommittee Supreme Court of India. All Rights Reserved</p>
// </div>
// <div class="col p-3 text-end">
// <a href="/ecourtindia_v6/?p=terms_and_conditions/index" rel="noopener noreferrer" class="text-white">Terms and Conditions</a></a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="/ecourtindia_v6/?p=privacy_policy/index" rel="noopener noreferrer" class="text-white">Privacy Policy</a>
// </div>
// </div>
// </div>
  
//    </div>
//       <!-- End of Main Content -->

//     </div>
//     <!-- End of Content Wrapper -->

//   </div>  
//   <!-- End of Page Wrapper -->

//   <!-- Scroll to Top Button-->
//   <a class="scroll-to-top rounded d-none" href="#page-top" aria-label="scroll to top">
//     <i class="fas fa-angle-up"></i>
//   </a>
// <a id="topbutton"><span class="visually-hidden">go to Top</span><i class="fa fa-arrow-up"></i></a>
//   </body>
// </html>
// <script>
	
// 	var labels_array=null
// 	var buttons_array=null
// 	var alerts_array={"1":"Act","2":"Act Type","3":"Advocate","837":"judgments search","5":"Bar Code","6":"Bookmark Us","7":"Both","8":"Case Code","9":"Case Number","10":"Case Number","11":"Case Status","12":"Case Type","13":"Cause Lists","14":"Cause list displayed may differ from the actual cause list. For further queries, contact court administrator.","15":"Contact Us","16":"Court Establishment","17":"Court Name","18":"Court Number","19":"Court Number","20":"Court Orders","21":"Disposed","22":"FIR Number","23":"FIR Number","24":"From Date","25":"From Date should be not be later than To Date","26":"Go","27":"High Courts","28":"News and Events","29":"Order Date","30":"Party Name","31":"Pending","32":"Petitioner\/Respondent","33":"Enter atleast 3 characters","34":"Enter atleast 3 characters","35":"Enter case number","36":"Enter numeric value","37":"Enter numeric value","38":"Only alphabets, single quotes, dot and space are allowed in village name","39":"Only alphabets, single quotes, dot and space are allowed in Petitioner\/Respondent","40":"Enter Petitioner\/Respondent name","135":"Act Details","41":"Enter numeric value in year","42":"Enter year in yyyy format","43":"Enter year from 1901 to","44":"Select case type","45":"Select court establishment","46":"Select court","47":"Select court number","48":"Select district from the left panel","49":"Select district","50":"Select From Date","51":"Select police station","52":"Select state","53":"Select state from the left panel","54":"Select To Date","55":"Please wait","56":"Police Station","57":"Reset","58":"Screen Reader Access","59":"Search","60":"Search Act","61":"Search by","62":"Search by Act Type","63":"Search by Advocate","64":"Search by Case Code\/CNR Number","65":"Search by Case Type","66":"Search by FIR number","67":"Search by Petitioner\/Respondent","68":"Select","69":"Select act type","70":"Select case type","71":"Select court establishment","72":"Select court number","73":"Select police station","74":"Select State\/District","75":"Site map","76":"Skip to navigation","77":"Supreme Court","78":"To Date","79":"Todays Case List","80":"Under Section","81":"Year","82":"Year should not be later than current year","83":"Total number of cases","84":"Sr No","85":"View","86":"versus","87":"Record not found","88":"Petitioner","89":"Respondent","90":"Case Year","91":"Next Hearing Date","92":"Case Stage","93":"Enter advocate name","94":"Enter name in regional language","95":"Enter Advocate bar code","96":"Only alphabets, numbers and hyphen are allowed","97":"Search by Order Date","98":"Search by Party Name","99":"Search by Court Number","100":"Search by Registration Number","101":"Opens in new window","102":"Search by Case Number","103":"NJDG","104":"New","105":"Old","106":"Select state","107":"Select district","108":"Home","109":"eCourts Services","136":"Case Details","110":"Disclaimer","111":"Version 2.0","112":"Designed &amp; Developed by NIC","113":"Last Updated On","114":"English","115":"Enter year","116":"Enter Under Section","117":"Enter case code","118":"Enter 15 digit case code","119":"Back","120":"Filing Number","121":"Objection","122":"Petitioner","123":"Respondent","124":"Filing Date","125":"Redressal Date","126":"Under Act(s)","127":"Under Section(s)","128":"Case History","129":"Judge","130":"Business on Date","131":"Purpose of Hearing","132":"Select act type","133":"Enter only valid characters in Under Section","134":"Copy Status","204":"Date of Institution","137":"Case History","138":"Address","139":"Extra Parties","140":"Enter Petitioner\/Respondent","141":"Case disposed","142":"Registration Number","143":"Registration Date","145":"First Hearing Date","146":"Decision Date","147":"Nature of Disposal","148":"Search by Advocate Bar Code","149":"Orders","150":"Judge","151":"Order Number","152":"Designation","153":"Total Civil Disposed Cases","154":"Orders not uploaded","155":"Subject","156":"Subordinate Court Information","157":"Case Decision Date","158":"FIR Details","159":"Next date is not given","160":"Hearing Date","161":"Order Details","162":"Appellate Information","163":"Registration Number","164":"Appellate Case Number","284":"Exhibits","205":"Sh.\/Smt.","165":"Appellate Authority","166":"Receipt Date","167":"Deposit\/Payment","168":"CNR Number","169":"District Court","170":"Case Transfer Details within Establishment","171":"Transfer Date","172":"From Court Number","173":"To Court Number","174":"Case is not allocated to court","175":"and","176":"Name","177":"Acts","178":"January","179":"February","180":"March","181":"April","182":"May","183":"June","184":"July","185":"August","186":"September","187":"October","188":"November","189":"December","190":"Cause List","191":"Daily Board","192":"&#039;Today&#039;&#039;s&#039;","193":"Tomorrow","194":"Civil","195":"Criminal","196":"In the court of","197":"Dated","198":"Title","199":"Party wise","200":"Date","201":"Advocate wise","202":"Vs","203":"Sub Stage","206":"Enter From Date in dd-mm-yyyy format","207":"Enter To Date in dd-mm-yyyy format","208":"Select court","209":"Cause list will open in new window","210":"Appellate Information for Case Number","211":"Appellate Case Number","212":"Appellate Authority","213":"Brief Order","214":"Compliance Date","215":"Business","216":"Short Order","217":"Site map","218":"The eCourts","219":"Increase\/Decrease Controls","220":"Advocate","221":"Print","222":"The Supreme Court of India","223":"High Courts of India","224":"National Judicial Data Grid","225":"Additional Links","285":"Reason for Adjournment","664":"Granted","840":"More","226":"Press Ctrl+D to add manually","227":"Cases","228":"Total Cases","229":"Case Number (Date of Institution)","230":"Urgent Cases","231":"Main Matter","233":"Sub Matter","234":"Sub Matter (Disposed)","235":"Total Civil Cases Listed Today","236":"Total Civil Cases Listed Tomorrow","237":"Total Criminal Cases Listed Today","238":"Total Criminal Cases Listed Tomorrow","239":"Total Criminal Disposed Cases","240":"Total Civil Pending Cases","241":"Total Criminal Pending Cases","242":"Particulars of Offence","243":"Age","244":"Pending in Mediation Cases","245":"Reference Date","246":"Result","247":"Successful","248":"Not fit for Mediation","249":"Fall","250":"Mdeiation cases referred in this month","251":"Mediation cases completed in this month","252":"Disposal Date","253":"Enter 7 digit filing number","254":"Enter filing number","255":"Son of","256":"Enter numeric value in FIR number","257":"Daughter of","258":"Wife of","259":"Relative of","260":"Legal Heir","261":"Enter 16 digit CNR number","262":"Enter 16 digit CNR number","263":"Only alphabets and numbers are allowed for CNR Number","264":"Select cause list date","265":"To Date should be later than From Date","286":"Case adjourned for","406":"Petitioner","266":"To Date should not be later than current date","267":"To Date should not be later than current date","268":"Select court complex","269":"Court Complex","270":"Presentee","271":"Next Purpose","272":"Next Listing Date","273":"Go to Proceeding","274":"Civil Cases Listed on","275":"Criminal Cases Listed on","276":"Cause List Date","277":"Select court complex","278":"Date Case List","279":"Case List Date","280":"Only alphabets are allowed","281":"Only numbers are allowed","282":"Only alphabets and &nbsp;numbers are allowed","283":"Enter date in dd-mm-yyyy format","287":"Only last 7 days date selection allowed","288":"Mandatory field","289":"Enter 7 digit case number","290":"Enter Advocate state code","291":"Enter Advocate bar code year","292":"Enter FIR number","293":"Identified Cases","294":"EAs Listed","295":"IAs Listed","296":"CRLMP Listed","297":"Enter act","298":"Enter only valid characters in search act","299":"Contested","300":"Uncontested","301":"Dormant Case","302":"Sinedie Case","303":"Restored","304":"From Date should not be later than To Date","376":"Attached","305":"To Date should be between From Date and current date","306":"Search by Filing Number","307":"Generate Cause List for a particular Court","308":"Official website of the Supreme Court of India","309":"External Link","310":"External website that opens in a new window","311":"Daily Status","312":"Name cannot start with quotes","313":"Judgement","314":"is not uploaded for case number","315":"Search by Village","316":"Taluka","317":"Select taluka","318":"Village","319":"Select village","320":"Village name cannot be blank","321":"Only alphabets, single quotes, dot and space are allowed","462":"Search Act","322":"Enter atleast 3 characters","323":"Case Transferred to Establishment","324":"Case Transferred from Establishment","325":"Member","326":"Case Transferred to Establishment","327":"Rejection","328":"Date of Rejection","329":"Reason for Rejection","330":"Represented by Power of Attorney","331":"Represented by Guardian","332":"Copy Status of CCA Number","333":"Caveat Number","334":"Applicant","335":"Date of Appearance","336":"Estimated Amount","337":"Actual Pages","338":"Paid","339":"Deficit Amount","340":"Nature of Defect","341":"Notify Date","342":"Last Date for Rectification","343":"Rectifying Date","344":"Receipt Details","345":"Deficit Amount","346":"Refund Details","347":"Returnable Amount","348":"Returned Date","349":"Document Requested","350":"Number of Sheets","351":"Status Remark","352":"Ready Date","353":"Delivery on Date","354":"Receiver","355":"Actual Cost of Copy","356":"Partial Struck off Details","357":"Restore Date","358":"Amount","359":"Register","360":"CCA Number","361":"Application Number","362":"Application Number","363":"Deposited by","364":"Remarks","365":"Orders for Deposit","366":"Orders for Payments","367":"Receipt Number","368":"RO Number","369":"Mode of Payment","370":"Bank","371":"Branch","372":"Cheque\/D.D. Number","373":"Cheque\/D.D. Date","374":"Entry in C","375":"Depositor Name","377":"Receiver Name","378":"Credit","379":"Penalty Register","380":"Entry in D","381":"Entry in G","382":"R. Number","383":"Not Ready","384":"Disposed Cases List","385":"Pending Cases List","386":"eCourtIS - The Application for Indian Judiciary","387":"Judicial Officer","388":"Retired Judicial Officer","389":"Other","390":"Total Number of Establishments in Court Complex","391":"Subordinate Court","392":"District","393":"Scrutiny Date","394":"Sub Category","395":"On same stage since","397":"CC Ready Date","398":"CC Applied Date","399":"CNR Number","400":"Registration","401":"State","402":"Case Number","403":"Sr No","404":"Case Type","405":"Case Year","407":"Respondent","408":"View","409":"Total Number of Cases","410":"Record not found","411":"Back","412":"Only numbers are allowed","413":"Add","414":"Show All","415":"Duplicate record","416":"Remand Details","417":"Remand Order","418":"Type","419":"Days","420":"From Date","421":"To Date","422":"Date of Order","423":"Order","424":"FIR Type","425":"Bail Details","426":"Bail Order","427":"Application Details","428":"Application Order","429":"Status","430":"Next","431":"Name","432":"Accused","433":"Application","434":"Date","435":"Disposed","436":"Court Judge","437":"Hearing Status","438":"Bail","439":"Top Pending Cases","440":"Appellate Information","441":"Appellate Case Parties","796":"October","442":"Appellate Filed by","443":"Appellate Date of Dispatch","444":"Writ Type","445":"Appellate Outward No.","446":"Compliance","447":"Dispatch Number","448":"Enter captcha","449":"Captcha","450":"Caveat Search","451":"Search by CNR number","452":"Enter CNR Number, for example MHAU019999992015","453":"Enter 16 digit CNR number","454":"Note : If you don\\&#039;t have CNR Number then use other options from Search Menu section\\&#039;","455":"Search by Case Number","456":"Court Establishment","457":"Search by FIR Number","458":"Petitioner\/Respondent","459":"Search By Filing Number","460":"Petitioner Name versus Respondent Name","461":"Search by Act Type","463":"Case Type\/Case Number\/Case Year","464":"Act Type","465":"Select Act Type","466":"Invalid Captcha","467":"Date of Decision","468":"Filing Number","469":"Caveatee","470":"Respondent","471":"Caveator","472":"Caveat Number","473":"Subordinate Court","474":"Soundex","475":"Enter captcha","476":"Starting with","477":"Anywhere","478":"Enter year from 1901 to","479":"Enter valid captcha","480":"Enter caveat year","481":"Name cannot start with dot","482":"Enter caveat number","483":"The selected date is","484":"Enter case year","596":"Caveatee Details","485":"Select state, district and court complex to proceed further","486":"Enter caveator name","487":"Enter caveatee name","488":"How to","489":"Click here to view help video","490":"Enter the 16 digit alphanumeric CNR Number without any hyphen or space","491":"Click Search button to view current status and history of the case","492":"If you don&#039;t know the CNR number of the case, click on the Case Status icon on the left menu to search the case with other options like case registration number, party name, advocate name etc.","665":"Application Type","493":"Select case type","494":"Enter the case registration number","495":"District Courts","496":"About Us","497":"Newsletter","498":"Forms for Advocates","499":"Help Videos","500":"Web Information Manager","501":"Terms and Conditions","502":"Privacy Policy","503":"Accessibility Statement","504":"This site is designed, hosted and maintained by National Informatics Centre (NIC).Ministry of Electronics &amp; Information Technology, Government of India","505":"Last reviewed and updated on","506":"Download eCourts Services App","507":"In the Year box, enter the Case Registration Year.","508":"Enter the Captcha (the 5 alphanumeric characters shown on the screen) in the text box provided.","509":"Click on Go button to view the case details for the given Case Number","510":"Click on the View button to see the Case History of the respective Case","511":"Select the Police Station from the select box.","512":"In the FIR Number box, enter the FIR Number of the case.","513":"In the Year box, enter the FIR Year.","514":"Select Pending or Disposed option button according to the status of the case. Click on Both option if case status is not known","797":"November","515":"Click on Go button to view the case details for the given FIR Number","516":"Click on the View button to see the Case History of the respective Case","517":"Enter the Party Name, in part (minimum 3 characters) or full","518":"Party Name maybe the name of the Petitioner, Plaintiff, Complainant, Respondent, Defendant, Appellant, Accused or Extra Party.","519":"Click on the Go button, to get the list of cases matching the given party name","597":"Caveatee Address","598":"Extra Party Caveatee","520":"The Cases can be searched by either clicking on the Advocate Name, Bar Registration Number or Advocate&#039;s Cause List (to view the date wise cause list of Advocate) option buttons.","521":"On clicking the Advocate Name option button, enter the Name of the Advocate in the box, in part (minimum 3 characters) or full - e.g. for searching the name of the advocate as &sbquo;Suresh Mahohar Singh&sbquo; either Suresh, Manohar, Singh, Sur, Sin etc.","522":"On clicking the Bar Registration Number option button, enter the Bar Registration Number of the advocate in the box, for e.g. MAH\/XXXX\/1982 (where MAH is the state code, XXXX is the bar registration number and 1982 is the year).","523":"Click on either the Pending or Disposed option button, according to the status of the Case (only in case the Advocate Name or Bar Registration Number options have been chosen","599":"Interim Orders","600":"Final Orders","524":"On clicking the Advocate&#039;s Cause List option button, enter the Bar Registration Number in the box, for e.g. MAH\/XXXX\/1982 (where MAH is the State Code, XXXX is the Bar Registration Number and 1982 is the Year) and select the Cause List Date from the calendar control.","525":"For Advocate and Bar Registration Number options, click on the Go button to display cases matching the Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Name or Bar Registration Number. Click on the View button from the list, to see the Case History of the respective Case.","526":"For Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Cause List option, click on Go button to get the Advocate&acirc;&sbquo;&not;&acirc;&bdquo;&cent;s Cause List on the selected date","527":"In the Filing Number box, enter the Filing Number of the Case.","528":"In the Year box, enter the Case Filing Year.","601":"Party","602":"Caveat","603":"Pre Trial Application","604":"Search Type","529":"Click on Go button to view the case matching the given filing number","530":"To search Act from Act list, please enter minimum 3 characters of the Act description and click on search button","531":"All the Acts matching the search criteria are displayed in the Act Type select box. Select the required Act Type from the select box.","532":"If no search criteria are specified then, all the Acts are displayed, select the required Act Type from the select box.","539":"Click on the Go button, to get the Case satisfying the Case Number search criteria","533":"In the Under Section box, enter the Section which you want to search under the selected Act. If the section is not entered in the Under Section box, then the Cases belonging to all the sections under the selected Act will be listed.","534":"Click on either the Pending or Disposed option button, according to the status of the Case.","535":"Click on the Go button, to get the Cases satisfying the given Act and Under Section condition.","536":"Click on the adjacent View button from the list, to see the Case History of the respective Case.","537":"Click on the Go button, to get list of all the Cases satisfying the given Case Type condition","538":"Click on the adjacent View button from the list, to see the Case History.","540":"Click on the Order on Exhibit or Copy of Judgement to view the Orders\/Judgement in PDF format.","541":"Select the entry from the Court Number select box, which shows the court number, the judge name, the designation of the judge and the judge period for searching the Order\/Judgement of the case","542":"Click on the Go button, to get the Cases satisfying the above Court Number search criteria.","543":"Click on the Go button, to get list of all the Cases satisfying the given Caveat Search condition.","544":"Enter the Captcha in the text box provided","605":"Filing Case History","798":"December","545":"Click on the Order Number to view the Orders\/Judgment in PDF format.","546":"For Caveat Number, the system will display the Caveat when you enter a part of the Caveat Number and Year; if any of the active Caveats match the search criteria then the relevant details are displayed on the screen.","547":"Subordinate Court","548":"Enter at least 3 characters","558":"Select state, district and court complex to display the cause list","549":"Soundex","550":"Starting with","551":"Click on the Go button, to get the Oders\/Judgements of the cases satisfying the search criteria.","552":"Anywhere","559":"Select the Cause list Date from the calendar control.","606":"Remand","553":"Select state, district and court complex for the caveat search","554":"Click on the Order on Exhibit or Copy of Judgement to view the Orders\/Judgements in PDF format.","555":"Select the period (From Date and To Date), for searching the Order\/Judgement of the Cases which are delivered in the given period.","556":"Click on the Go button, to get the cases satisfying the above Order Date search criteria.","557":"Click on the Civil or Criminal button, to accordingly display the Civil or Criminal Cause list of the selected Court and Date.","607":"Language","608":"Bench","560":"Select the entry from the Court Name select box which shows the court number, the judge name and the designation of the judge for displaying the Cause list","561":"Court","562":"Back","563":"Date of Filing","564":"Next Date","565":"Purpose","566":"IA Status","567":"IA Status","568":"IA Number","569":"versus","570":"Linked Cases","571":"Split Case Details","572":"Date of Registration","573":"Location","574":"Case Registration Number","575":"Select Subordinate Court Code","578":"Search Menu","579":"Newsletter","580":"Cases can be searched on","581":"First, select","582":"to which the case being searched belongs","595":"Extra Party Caveat","583":"Select the criteria on which you want to search the case, from the tabs provided on the screen","584":"Or","585":"Location: Refer popup new window to view location","586":"Copyright Policy","587":"Hyperlinking Policy","588":"This site is designed, hosted and maintained by","589":"On finding the Case with the required Party Name, click on the adjacent View button from the list, to see the Case History of the respective Case.","590":"Matched Case Number","591":"Caveator\/Caveatee Details","592":"Time of Filing","593":"Caveator Details","594":"Caveator Address","663":"Bail Orders","609":"Last Hearing Date","610":"State","611":"District Name","612":"Trial Court Details","613":"Get Map","614":"Undated Cases","615":"Trial Court Name","616":"Processes","617":"My Cases related to District Court","618":"Process ID","619":"Process Date","620":"Process Title","621":"with","622":"Extra Party Caveator","623":"To","624":"(Deceased)","625":"Date wise","626":"District wise","627":"Month","628":"Configure","629":"Language","630":"Remove case","631":"Case added successfully","632":"Case removed successfully","633":"Date not provided","634":"Undated cases","635":"My Cases","636":"No cases listed","637":"case(s) found","638":"No Date","639":"Case Type\/Case Number\/Case Year","640":"Trial Court decision date","641":"QJ Number","642":"QJ Number1","643":"Date of Order1","644":"QJ Details","645":"High Court Details","646":"High Court","647":"Caveator\/Caveatee Name","648":"Caveator\/Caveatee Name","649":"Caveatee","650":"Lower Court Decision Date","651":"View Business","652":"Help","653":"Import","654":"Export","655":"Appellate Court","656":"Search by Pre Trial Application","657":"Remand Orders","658":"Accused","659":"Lower Court Decision Date","660":"Process tables all IDs","661":"Application Date","662":"Next\/Disposed Date","666":"Application Orders","667":"Pending","668":"Caveat Details","669":"Cases imported successfully","671":"File with same name already exists in drive","672":"File","673":"Not found at internal storage","674":"Please&nbsp;export&nbsp;your&nbsp;cases","675":"Unable to fetch labels","676":"Updated in drive successfully","677":"Saved in drive successfully","678":"Saved successfully to internal storage","679":"Case deleted","680":"Unable to check","681":"Case not found","682":"Enter Case Number","683":"Enter year","684":"Enter party name","685":"Enter caveator name","761":"Server may be busy","686":"Enter caveatee name","687":"Enter Caveator\/Caveatee Name","688":"Select subordinate court name","689":"Enter caveat number","690":"Enter caveat year","691":"Select FIR Type","692":"State Code","693":"Enter text to search","694":"Enter Filing Number","695":"Extra Party Caveator","696":"Maximum 99 letters are allowed in caveator name","697":"Maximum 99 letters are allowed in caveatee name","698":"Only alphabets are allowed","699":"Maximum 99 letters are allowed in caveator\/caveatee name","700":"Only 7 digits are allowed in case number","701":"Enter text to search","702":"Enter state code","703":"Enter valid state code","704":"Enter barcode","705":"Error","706":"Select subordinate court name","707":"Enter valid party name","708":"Enter non zero year","709":"Enter non zero filing number","710":"Enter valid FIR number","711":"Enter non zero FIR number","712":"Enter valid year","713":"Enter valid Advocate name","714":"Enter non zero barcode","715":"Enter atleast 3 characters","729":"Enter year from 1901 to","762":"Only alphabets and numbers are allowed","716":"Enter atleast 3 characters","717":"Please check your internet connection and try again","718":"Error opening case history","719":"Cases not found","720":"Case transferred to establishment","721":"Case transferred from establishment","722":"Error opening case history for the case number","723":"Please&nbsp;select&nbsp;Cause&nbsp;List&nbsp;date","724":"Date selection for only last 7 days is allowed","725":"Enter text to search","726":"Only alphabets and numbers are allowed","727":"Please&nbsp;Select&nbsp;Cause&nbsp;List&nbsp;Date","728":"Select&nbsp;Case&nbsp;Type","750":"Processes (data)","751":"Caveator","730":"FIR number should be only 6 digits","731":"Enter year in yyyy format","732":"Maximum 99 letters are allowed in party name","733":"Party name should start with letter","734":"CNR Number","735":"Search by CNR number","736":"OR","737":"Scan QR Code","738":"Services for High Courts and District Courts","739":"Court Complex Locator","741":"c. On Clicking the search button, the current status and entire history of the case will be shown.","786":"District Court","787":"January","788":"February","789":"March","743":"e. Click on Case Number to view current status, entire history and orders\/judgments delivered in the case","781":"Cancel","746":"Only 6 digits are allowed in barcode","747":"Only numbers are allowed","748":"Enter year in yyyy format","749":"View Business","745":"g. For Future reference, your saved cases can be seen in My Cases","744":"f. When you view the history of the case you have option to Save the Case and can create your own portfolio of cases","753":"ePay","754":"eFiling","755":"Invalid CNR Number","756":"Enter non zero case number","757":"Party name should start with letter","758":"Select cause list date","759":"Select court complex","760":"Select cause list date","763":"Enter atleast 3 characters","790":"April","791":"May","792":"June","793":"July","794":"August","795":"September","764":"Enter atleast 3 characters","765":"Enter Caveator\/Caveatee name","766":"Enter atleast 3 characters","767":"Enter year in yyyy format","768":"Add Case","769":"Objection","770":"Rejection","771":"Case Decision Date","772":"Processes","773":"Saved Case","774":"Ok","775":"Close","776":"Import from drive","777":"Import from this device","778":"Email","779":"Save to drive","780":"This device","782":"Share with","783":"District and Taluka Courts of India","784":"QR Code","785":"High Court","799":"Order not uploaded by concerned court","800":"New Version","801":"Available","802":"App Version","803":"Incompatible app version. Please update!","804":"Settings","805":"Personalize","806":"Only 6 digits are allowed in barcode","807":"Only 7 digits are allowed in case number","808":"Enter year in yyyy format","809":"Only 7 digits are allowed in filing number","810":"Subordinate Court Name","811":"Select subordinate court name","812":"Import from","813":"for","814":"India Code","815":"Virtual Courts","816":"Select language","817":"Enter text here","818":"Note","819":"State","820":"Undelete successful","821":"Calculate1","822":"District1","823":"Set Max No.","824":"Bench","825":"Submit","826":"Bench","827":"Mandatory field","828":"Bench","829":"Add Note","830":"Case already added","831":"Please enter valid note","832":"Court Complex Location","833":"Not a QR code","834":"This case code does not exist.","835":"CNR special character not allowed","836":"No content to backup.","670":"does not exist in Drive","4":"Advocate Name","843":"E-Filing Date","844":"Last Business Date","846":"Last Order","847":"Old Case Name","740":"b. If you know the CNR Number of the Case, enter the 16 alphanumeric CNR Number without any (hyphen) or space.","742":"d. If you don&#039;t know the CNR number of the Case then it can be searched by other options like Case Registration Number, Party Name, Advocate Name etc. For this, click on the Case Status image","144":"CNR Number","752":"a. Use settings option in side menu to manage your cases from majority of the High Courts or District courts or Both","943":"Search your case","900":"District Court Services","901":"Hearing History","902":"Search by Court Order Party Name","903":"Status","838":"e-Committee","904":"Search by Court Order Case Number","905":"Search by Court Order Number","906":"Skip to Main Content","907":"Theme","908":"Color Theme Adjustment","909":"Default Theme","910":"Dark Theme","911":"HC Pending Cases","912":"HC Disposed Cases","913":"HC Cases Listed Today","914":"District &amp; Taluka Court Complexes","915":"DC Pending Cases","916":"DC Disposed Cases in Last Month","917":"DC Cases Listed Today","918":"Login with Parichay","919":"Quick Links","920":"High Court Services","921":"Services and updates for the High Court.","922":"District Court Services","923":"Information on District Court services.","924":"e-Filing","925":"Services and updates for the High Court.","926":"Virtual Court","927":"Judicial data for High Court NJDG.","928":"ePay","929":"Judgment Search","930":"Judicial data for District Court NJDG.","931":"References","932":"Registration Year","933":"Helpdesk","934":"Manuals","935":"Statistics","936":"e-Committee","937":"Policies","938":"Contact","939":"Services","940":"DC Disposed Cases","941":"Court Number","942":"High Court Complexes","944":"Search court orders","839":"Quick Links","841":"Calendar","842":"E-Filing No","845":"Case Conversion","848":"New Case Name","849":"Case Transfer Details"}
	
	
// 	</script><script>
// /*$(function() {
// 		var lang_choice=$('#lang_choice').val();   
// 		if(lang_choice=='' || lang_choice==null)
// 		{
// 			var default_lang=$("#language_select li").attr("value","english"); 
// 			$(default_lang).addClass('selected');
// 		}

// });

// function funselectLang(lang,val)
// {	
// 	var labelLang="English";
// 	//alert(labelLang);
// 	$("#selLang").html(labelLang);
	
// 	fillLangState(lang,val);
// }

// //Fill State Box According To Selected Language ---------------------------------------------------------------------------------
// function fillLangState(langName,langVal){
	
// 	var lang_code =langVal;
// 	//var selected_state=
// 	var url ="home/fillLangState";

// 	var postdata ="lang_code="+lang_code+"&lang_name="+langName;
// 	//alert(postdata);

// 	ajaxCall({url:url,postdata:postdata,callback:callbackLang,connection:'N'});
// 		function callbackLang(obj){  
// 			if(obj.status == 1)
// 			{ 				
// 				alert(obj.selState);
// 				$('#langState').html(obj.selState);
// 				location.reload();
// 			}			
// 		}


	
// }

// */
// </script>

// $(document).ready(function () {

// 		document.title ='Case Status - eCourt India Services';
// $('.sidebarMainMenu .nav-link').removeAttr('aria-current');
// 			$("#leftPaneMenuCS").attr("aria-current", "page");



// 	  $('#case_captcha_code, #file_captcha_code, #adv_captcha_code, #fir_captcha_code, #act_captcha_code, #ct_captcha_code, #fcaptcha_code, #adv_bar_state, #search_act, #under_sec').on('input', function () {
// 		$(this).val($(this).val().replace(/[^a-zA-Z0-9 ]/g, ''));
// 	  });

// 	  $('#petres_name').on('input', function () {
// 		$(this).val($(this).val().replace(/[^a-zA-Z ]/g, ''));
// 	  });

// 	  $('#adv_bar_code, #adv_bar_year, #rgyearP, #search_case_no, #rgyear, #filing_no, #filyear, #firyear, #search_year').on('input', function () {
// 		$(this).val($(this).val().replace(/[^0-9 ]/g, ''));
// 	  });

// 	  $('#fir_no').on('input', function () {
// 		$(this).val($(this).val().replace(/[^0-9]/g, ''));
// 	  });

// 	  $('#advocate_name').on('input', function () {
// 		$(this).val($(this).val().replace(/[^a-zA-Z ._]/g, ''));
// 	  });

// });


// //datePickerIcon('caselist_date',0); 
// datePickerIcon('caselist_date','+1m','-7'); 

// function resetDataGrid(element) {
//     $('#' + element).hide();

//     if (element === 'res_adv_name') {
//         $("#radAdvtName").prop("checked", true);
//         show_bar_code();
//     }
// 	// Clear first so screen readers re-announce
//   $('#sr-alert').text('');
//   setTimeout(function () {
//     $('#sr-alert').text('Form has been reset');
//   }, 100);
// }

// function submit_party_name()
// { 
// 	if(validatePartyName())
// 	{
// 	   var state_code    = $("#sess_state_code").val() ;
// 	   var dist_code     = $('#sess_dist_code').val();
// 	   var courtArr      = $('#court_complex_code').val();
// 	   var court_est_arr = courtArr.split('@');
// 	   var court_complex = court_est_arr[0];
// 	   var est_code      = $('#court_est_code').val();
// 	   var differ_mast_est = court_est_arr[2];
//           if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                 errorAlert(alerts_array[71]);
//                 return false;
//         }

		
// 	if(validate_state_dist_complex()) //======== written in common function.js
// 	{

// 		var fcaptcha_code=$('#fcaptcha_code').val();
// 		if(fcaptcha_code=='')
// 		{
// 			errorAlert(alerts_array[475]);
// 			return false;
// 		}
// 	   var url="casestatus/submitPartyName";

// 	   var postdata =$("#frmsearch_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;;
// 		$('#party_help').hide();

// 		ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
// 			function callbackParty(obj){  
// 				$('#div_captcha_party').html(obj.div_captcha);	
// 				if(obj.status==0)
// 				{
// 				$("#fcaptcha_code").val('');
// 				captcha_image_audioObj.refresh();
// 				document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 				return false;
// 				}
// 				else if(obj.status == 1)
// 				{ 	//alert(obj.party_data);
// 					$('#res_party').html(obj.party_data);
// 					$('#fcaptcha_code').val('');
// 					//displayRecordsJson(obj,'CScaseNumber');
// 				}	 else {
// 					$('#res_party').html('');
// 				}

// 					$('#res_party').show();

// 			}
// 		 }
// 	}
// }


// function submit_filing_no()
// { 
//    if(validateFilingNo())
// 	{
	 
// 		   var state_code    = $("#sess_state_code").val() ;
// 		   var dist_code     = $('#sess_dist_code').val();
// 		   var courtArr      = $('#court_complex_code').val();
// 		   var court_est_arr = courtArr.split('@');
// 		   var court_complex = court_est_arr[0];
// 		   var est_code      = $('#court_est_code').val();
		
// 		   var differ_mast_est = court_est_arr[2];
	
//           	   if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                 	errorAlert(alerts_array[71]);
//                 	return false;
//        		   }


// 			 if(state_code==3)
//                         {
//                              var    case_type      = $('#case_type_1').val();
//                                 if(case_type=='')
//                                  {
//                                         errorAlert(alerts_array[728]);
//                                         return false;

//                                  }
//                         }else
// 			 var case_type        = '';


// 		  if(validate_state_dist_complex()) //======== written in common function.js
// 		 {

// 		   var fcaptcha_code=$('#file_captcha_code').val();
// 			if(fcaptcha_code=='')
// 			{
// 				errorAlert(alerts_array[475]);
// 				return false;
// 			}

// 			/*if(state_code==3)
// 			{
// 				case_type      = $('#case_type_1').val();
// 				if(case_type=='')
//        				 {
//           				errorAlert(alerts_array[728]);
//           				return false;

//        				 }	
// 			}*/

// 		   var url="casestatus/submitFillingNo";

// 		   var postdata =$("#frm_file_search_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type;
// 		   $("#help_filno").hide();
			
// 			ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
// 			function callbackParty(obj){  
// 				$('#div_captcha_fileno').html(obj.div_captcha);	
// 				if(obj.status==0)
// 				{
// 				$("#file_captcha_code").val('');
// 				captcha_image_audioObj.refresh();
// 				document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 				return false;
// 				}
// 				else if(obj.status == 1)
// 				{ 	
// 					$('#res_filing').html(obj.filing_data);
// 					$('#file_captcha_code').val('');
// 				}	else {
// 					$('#res_filing').html('');
			
// 				}
// 					$('#res_filing').show();
		
// 			}
// 		}
// 	}
// }



// function submit_adv_name()
// { 
// //alert(validateAdvName());
//  if(validate_adv_name())
//   {
// 	   var state_code    = $("#sess_state_code").val() ;
// 	   var dist_code     = $('#sess_dist_code').val();
// 	   var courtArr      = $('#court_complex_code').val();
// 	   var court_est_arr = courtArr.split('@');
// 	   var court_complex = court_est_arr[0];
// 	   var est_code      = $('#court_est_code').val();
// 	   var case_type	= '';

// 	   var differ_mast_est = court_est_arr[2];

//             if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                 errorAlert(alerts_array[71]);
//                 return false;
//              }


// 		if(validate_state_dist_complex()) //======== written in comopnent.js
// 		{
// 			   var fcaptcha_code=$('#adv_captcha_code').val();
// 				if(fcaptcha_code=='')
// 				{
// 					errorAlert(alerts_array[475]);
// 					return false;
// 				}		

// 			   var url="casestatus/submitAdvName";

// 			   var postdata =$("#frm_adv_search_name").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type;
// 				//alert(postdata);
// 				ajaxCall({url:url,postdata:postdata,callback:callbackParty,connection:'N'});
// 				$("#help_adv").hide();
					
// 				function callbackParty(obj){ 
// 					//alert(obj);
// 					$('#div_captcha_adv').html(obj.div_captcha);
// 					if(obj.status==0)
// 						{
// 						$("#advocate_name").val('');
// 						$("#adv_captcha_code").val('');
// 						captcha_image_audioObj.refresh();
// 						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 						return false;
// 						}
// 						else if(obj.status == 1)
// 					{ 	
// 					//	$("#advocate_name").val('');
// 						$('#res_adv_name').html(obj.adv_data);
// 						$('#adv_captcha_code').val('');
// 					}	else {
// 							$('#res_adv_name').html('');
// 						$("#advocate_name").val('');
// 					}
// 					$('#res_adv_name').show();
					
// 				}
// 			 }
// 		 } 
// }





// function submitCaseNo()
// {
//    	if(validateCaseSubmit())
// 	{
// 	   var state_code =$("#sess_state_code").val() ;
// 	   var dist_code=$('#sess_dist_code').val();
// 	   var courtArr=$('#court_complex_code').val();
// 	   var court_est_arr=courtArr.split('@');
// 	   var court_complex=court_est_arr[0];
// 	   var est_code=$('#court_est_code').val();
// 	   var case_type=$('#case_type').val();
// 	   var case_no=$('#search_case_no').val();
// 	   var rgyear=$('#rgyear').val();

// 	   var differ_mast_est = court_est_arr[2];

//            if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                 errorAlert(alerts_array[71]);
//                 return false;
//            }


// 	   if(validate_state_dist_complex()) //======== written in comopnent.js
// 	  {

// 		   var fcaptcha_code=$('#case_captcha_code').val();  //alert(fcaptcha_code);
// 			if(fcaptcha_code=='')
// 			{
// 				errorAlert(alerts_array[475]);
// 				return false;
// 			}

// 		   var url="casestatus/submitCaseNo";
		   

// 			var postdata =$("#search_case").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code+"&case_type="+case_type+"&case_no="+case_no+"&rgyear="+rgyear;
// 			$("#help_case").hide();
// 			//alert(postdata);

// 			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
// 			function callbackComplex(obj){  
// 				$('#div_captcha_caseno').html(obj.div_captcha);	
// 				if(obj.status==0)
// 					{
// 					$("#case_captcha_code").val('');
// 					captcha_image_audioObj.refresh();
// 					document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 					return false;
// 					}
// 					else if(obj.status == 1)
// 				{ 				//alert(obj.case_data);
// 					$('#case_no_res').html(obj.case_data);
// 					$('#case_captcha_code').val('');
// 					//displayRecordsJson(obj,'CScaseNumber');
// 				}	else {
// 					$('#case_no_res').html('');
// 				}
// 				$('#case_no_res').show();

// 			}
// 		}
// 	}
// }



// function submitFirNumber()
// {

// 	if(validateFirSubmit())
// 	{
// 	   var state_code =$("#sess_state_code").val() ;
// 	   var dist_code=$('#sess_dist_code').val();
// 	   var courtArr=$('#court_complex_code').val();
// 	   var court_est_arr=courtArr.split('@');
// 	   var court_complex=court_est_arr[0];
// 	   var est_code=$('#court_est_code').val();
// //	   var police_st_code=$('#police_st_code').val();
//  	 var police_st=$('#police_st_code').val();
//             var police_st_code_arr=police_st.split('-');
//             var police_st_code=police_st_code_arr[0];
//             var uniform_code=police_st_code_arr[1];

// 	   var fir_no=$('#fir_no').val();
// 	   var firyear=$('#firyear').val();

// 	   var differ_mast_est = court_est_arr[2];

//            if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                  errorAlert(alerts_array[71]);
//                   return false;
//            }


// 	  if(validate_state_dist_complex()) //======== written in comopnent.js
// 	 {

// 		   var fcaptcha_code=$('#fir_captcha_code').val();
// 			if(fcaptcha_code=='')
// 			{
// 				errorAlert(alerts_array[475]);
// 				return false;
// 			}
// 			var url="casestatus/submitFirNo";
// 			//var postdata =$("#search_fir").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;

// 			var postdata =$("#search_fir").serialize()+"&police_st_code="+police_st_code+"&uniform_code="+uniform_code+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
			
// 			$("#help_fir").hide();

// 			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
// 				function callbackComplex(obj){  
// 					$('#div_captcha_fir').html(obj.div_captcha);
// 					if(obj.status==0)
// 						{
// 						$("#fir_captcha_code").val('');
// 						captcha_image_audioObj.refresh();
// 						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 						return false;
// 						}
// 						else if(obj.status == 1)
// 					{ 				
// 						$('#res_fir').html(obj.case_data);	
// 						$('#fir_captcha_code').val('');				
// 					}	else {
// 						$('#res_fir').html('');
// 					}
// 					$('#res_fir').show();
// 				}
// 		}
// 	}
// }


// function submitAct()
// {
// 	if(validatesAct())
// 	{
// 	   var state_code =$("#sess_state_code").val() ;
// 	   var dist_code=$('#sess_dist_code').val();
// 	   var courtArr=$('#court_complex_code').val();
// 	   var court_est_arr=courtArr.split("@");
// 	   var court_complex=court_est_arr[0];
// 	   var est_code=$('#court_est_code').val();

// 	   var differ_mast_est = court_est_arr[2];

//            if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                   errorAlert(alerts_array[71]);
//                   return false;
//            }


// 	   if(validate_state_dist_complex()) //======== written in comopnent.js
// 	  {

// 			var fcaptcha_code=$('#act_captcha_code').val();
// 			if(fcaptcha_code=='')
// 			{
// 				errorAlert(alerts_array[475]);
// 				return false;
// 			}
		  
// 		   var url="casestatus/submitAct";

// 			var postdata =$("#frm_act").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
// 			//alert(postdata);
// 			$("#help_act").hide();
			
// 			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
// 				function callbackComplex(obj){  
// 					$('#div_captcha_act').html(obj.div_captcha);

// 					if(obj.status==0)
// 						{
// 						$("#act_captcha_code").val('');
// 						captcha_image_audioObj.refresh();
// 						document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 						return false;
// 						}
// 						else if(obj.status == 1)
// 					{ 			
// 						$('#res_act').html(obj.act_data);				
// 						$('#act_captcha_code').val('');
// 					}	else {
// 						$('#res_act').html('');
// 					}
// 					$('#res_act').show();
// 				}
// 		}
// 	} 
// }


// function submitCaseType()
// {
// 	if(validatesCaseType())
// 	{
// 	   var state_code =$("#sess_state_code").val() ;
// 	   var dist_code=$('#sess_dist_code').val();
// 	   var courtArr=$('#court_complex_code').val();
// 	   var court_est_arr=courtArr.split('@');
// 	   var court_complex=court_est_arr[0];
// 	   var est_code=$('#court_est_code').val();
// 	   var url="casestatus/submit_case_type";

// 	    var differ_mast_est = court_est_arr[2];

//             if(differ_mast_est=='Y' && (est_code=='' || est_code==0 )){
//                         errorAlert(alerts_array[71]);
//                         return false;
//              }


// 	   if(validate_state_dist_complex()) //======== written in comopnent.js
// 	  {

// 			var fcaptcha_code=$('#ct_captcha_code').val();
// 			if(fcaptcha_code=='')
// 			{
// 				errorAlert(alerts_array[475]);
// 				return false;
// 			}  

				 
// 		   var postdata =$("#frm_casetype").serialize()+"&state_code="+state_code+"&dist_code="+dist_code+"&court_complex_code="+court_complex+"&est_code="+est_code;
// 		   $("#help_case_type").hide();
			

// 			ajaxCall({url:url,postdata:postdata,callback:callbackComplex,connection:'N'});
// 			function callbackComplex(obj){  
			
// 				$('#div_captcha_ct').html(obj.div_captcha);	
// 				if(obj.status==0)
// 					{
// 					$("#ct_captcha_code").val('');
// 					captcha_image_audioObj.refresh();
// 					document.getElementById('captcha_image').src = 'vendor/securimage/securimage_show.php? ' + Math.random(); this.blur();
// 					return false;
// 					}
// 					else if(obj.status == 1)
// 				{ 			
// 					$('#res_case_type').html(obj.case_data);	
// 					$('#ct_captcha_code').val('');				
// 				}	else {
// 					$('#res_case_type').html('');
// 				}
// 				$('#res_case_type').show();
// 			}
// 		 }
// 	}
// }




// function validateFilingNo(){

// 	$("#frm_file_search_name").validate();
//     pattern();

// 	 $('#filing_no').rules('add', {
//     	required:true,
// 		Number : true,
//         messages: {
//         required: alerts_array[254],
// 		Number : alerts_array[412],
//         }
//     });

// 	 $('#filyear').rules('add', {
//     	required:true,
// 	Number : true,
// 	validateYear: true,
//         messages: {
//         required: alerts_array[115],
// 	Number : alerts_array[412],
// 	validateYear: 'Invalid Year',
//         //maxlength: 'Jo Code is required maximum 254 characters',
//         }
//     });
        
//     if(!$('#frm_file_search_name').valid())
//         $('.error').first().focus();
//     return $('#frm_file_search_name').valid();

// }
// /*
// function validateAdvName()
// {
// 	    pattern();
// 		$("#frm_adv_search_name").validate({
// 		errorPlacement: function(error, element) {
// 			//alert(element);
// 			if (element.data().chosen) { 
// 				//element.next().after(error);
// 			} 
// 			else if(element.attr("name")=="adv_bar_state"  || element.attr("name")=="adv_bar_code" || element.attr("name")=="adv_bar_year")
// 			{
// 				error.appendTo('#error_advocate_barcode');return;
// 				//element.next().after(error);
// 			}
// 			else if( element.attr("name")=="advocate_name"){ //alert("hi");
// 				error.appendTo('#error_advocate_name');return;
// 				//element.next().after(error);
// 			}else if(element.attr("name")=="caselist_date")
// 				{
// 					error.appendTo('#error_caselist_date');return;
// 				}
// 			else
// 			{
// 				element.next().after(error);
// 			}
// 		},
// 		 ignore: "", 
// 		  groups: {adv_state: "adv_bar_state adv_bar_code adv_bar_year"},
// 		  rules:{
// 				adv_bar_state: {required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false; } },
// 				adv_bar_code: {required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false; } },
// 				adv_bar_year: {	required: function() {if ($("#radAdvtBarCode").prop("checked")) return true; else return false;},validYear:true ,maxlength:4},
// 				adv_bar_state: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; } },
// 				adv_bar_code: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; } },
// 				adv_bar_year: {	required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; },validYear:true ,maxlength:4},
// 				caselist_date: {required: function() {if ($("#radTodCaseList").prop("checked")) return true; else return false; },date:true},
// 				advocate_name: {	required: function() {if ($("#radAdvtName").prop("checked")) return true; else return false; } ,alphabet:true},
			
				
// 		  },
			
// 		 messages: {
				
// 					adv_bar_state:{
// 					required: alerts_array[95],
// 					//nospecialChars :alerts_array[280],
// 				},
// 				adv_bar_code:{
// 					required: alerts_array[95],
// 					//Number : alerts_array[412],
// 					},
// 				adv_bar_year: {
// 					required:alerts_array[95],
// 					//Number: alerts_array[412],
// 					ValidYear:"Invalid Year",
// 					maxlength: alerts_array[731] ,
// 				},
// 				advocate_name: { required: alerts_array[747] , alphabet : alerts_array[280],},
// 			    caselist_date:{ required: alerts_array[279],
// 						date:'Invalid Date',}
				
// 		  }

// 		}); //==== validate end

// //==== dom end
//      // alert(advocate_name);
//   	//  if($('#frm_adv_search_name').valid()){    alert("in if hi"+$('#frm_adv_search_name').valid());}
       
//     return $('#frm_adv_search_name').valid();

// }

// 	function validateAdvName() {
//     // Initialize validation with proper config
//     $("#frm_adv_search_name").validate({
//         errorPlacement: function(error, element) {
//             if (element.data().chosen) {
//                 // handle chosen select plugin case here if needed
//             }
//             else if (element.attr("name") === "adv_bar_state" ||
//                      element.attr("name") === "adv_bar_code" ||
//                      element.attr("name") === "adv_bar_year") {
//                 error.appendTo('#error_advocate_barcode');
//             }
//             else if (element.attr("name") === "advocate_name") {
//                 error.appendTo('#error_advocate_name');
//             }
//             else if (element.attr("name") === "caselist_date") {
//                 error.appendTo('#error_caselist_date');
//             }
//             else {
//                 element.next().after(error);
//             }
//         },
//         ignore: "",
//         groups: {
//             adv_state: "adv_bar_state adv_bar_code adv_bar_year"
//         },
//         rules: {
//             advocate_name: {
//                 required: function () {
//                     return $("#radAdvtName").prop("checked");
//                 },
//                 alphabet: true
//             },
//             adv_bar_state: {
//                 required: function () {
//                     return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
//                 }
//             },
//             adv_bar_code: {
//                 required: function () {
//                     return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
//                 }
//             },
//             adv_bar_year: {
//                 required: function () {
//                     return $("#radAdvtBarCode").prop("checked") || $("#radTodCaseList").prop("checked");
//                 },
//                 validateYear: true,
//                 maxlength: 4
//             },
//             caselist_date: {
//                 required: function () {
//                     return $("#radTodCaseList").prop("checked");
//                 },
//                 date: true
//             }
//         },
//         messages: {
//             advocate_name: {
//                 required: alerts_array[93],
//                 alphabet: alerts_array[280]
//             },
//             adv_bar_state: {
//                 required: alerts_array[95]
//             },
//             adv_bar_code: {
//                 required: alerts_array[95]
//             },
//             adv_bar_year: {
//                 required: alerts_array[95],
//                 validateYear: "Invalid Year",
//                 maxlength: alerts_array[731]
//             },
//             caselist_date: {
//                 required: alerts_array[279],
//                 date: "Invalid Date"
//             }
//         }
//     });

//     // Optional pattern check if defined
//     if (typeof pattern === "function") {
//         pattern();
//     }

//     return $('#frm_adv_search_name').valid();
// }
// */

// function validate_adv_name() {

//     $("#frm_adv_search_name").validate();


//     if (typeof pattern === 'function') {
//         pattern();
//     }

//     if ($("#radAdvtBarCode").prop("checked") ) {

//         $('#adv_bar_state').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],
//                 alphabet: alerts_array[280],
//             }
//         });

//         $('#adv_bar_code').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],

//             }
//         });

//         $('#adv_bar_year').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],

//             }
//         });

//     }
// 	else if ($("#radTodCaseList").prop("checked")) {

//         $('#adv_bar_state').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],
//                 alphabet: alerts_array[280],
//             }
//         });

//         $('#adv_bar_code').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],

//             }
//         });

//         $('#adv_bar_year').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[95],

//             }
//         });

// 	$('#caselist_date').rules('add', {
// 	//	alert(1);
//             required: true,
//             messages: {
//               required: alerts_array[279],
// 				date:'Invalid Date',
//             }
//         });

//     }
// 	else if ($("#radAdvtName").prop("checked")) {

//         $('#advocate_name').rules('add', {
//             required: true,
//             messages: {
//                 required: alerts_array[93],
//                 alphabet: alerts_array[280],
//             }
//         });
//     }

//     const isValid = $('#frm_adv_search_name').valid();


//     if (!isValid) {
//         $('.error').first().focus();
//     }

//     return isValid;
// }


//  function validateCaseSubmit()
// {
//     $("#search_case").validate();
//     pattern();
   
//    /* $('#case_type').rules('add', {
//     	//required:true,
//         messages: {
//         //required: alerts_array[44],
//         //maxlength: 'Jo Code is required maximum 254 characters',
//         }
//     });*/

// 	 $('#search_case_no').rules('add', {
//     	required:true,
// 		Number : true,
//         messages: {
//         required: alerts_array[682],
// 		Number : alerts_array[412],
//         }
//     });

// 	 $('#rgyear').rules('add', {
//     	required:true,
// 		Number : true,
// 		maxlength : 4,
//         validateYear:true,
//         messages: {
//         required: alerts_array[115],
// 		Number : alerts_array[412],
//         maxlength: alerts_array[42],
// 	validateYear:"Invalid Year",
//         }
//     });
        
//     if(!$('#search_case').valid())
//         $('.error').first().focus();
//     return $('#search_case').valid();

// }


// function validatePartyName()
// {

// 	$("#frmsearch_name").validate();
//     pattern();
// 	var sess_lang = $("#hidSelLang").val();
//    if(sess_lang!='english')
//   {
//  		console.log(sess_lang);

//         var fname = $('#petres_name').val();

//         if (fname.charCodeAt(0)==34 || fname.charCodeAt(0)==39)
//         {
                
//                 errorAlert(alerts_array[312]);
//                 return false;
//         }

//         if (fname.charCodeAt(0)==46 )
//         {
               
//                  errorAlert(alerts_array[481]);
//                  return false;
//         }


//            for(i=0;i<fname.length;i++)
//            {    
//                 var schar = fname.charAt(i);
//                 var achar = schar.charCodeAt(0);
//                 if((achar>=65 && achar<=90)||(achar>=97 && achar<=122))
//                 {
                      
//                         errorAlert(alerts_array[94]);
//                         return false;
//                 }
     
//                 if((achar>=33 && achar <=38) || (achar>=40 && achar <=45) ||(achar>=47 && achar <=64))
//                 {
                         
//                          errorAlert(alerts_array[39]);
//                         return false;
//                 }

// }
//       return true;
// }else{   
//     $('#petres_name').rules('add', {
//     	required:true,
// 	alphabet : true,
// 	minlength :3,
//         messages: {
//         required: alerts_array[40],
// 	alphabet : alerts_array[280],
//         minlength: alerts_array[322], //'Enter atleast 3 characters',
//         }
//     });

// 	 $('#rgyearP').rules('add', {
//     	required:true,
// 	Number : true,
// 	maxlength : 4,
// 	validateYear: true,
//         messages: {
//         required: alerts_array[115],
// 	Number : alerts_array[412],
//         maxlength: alerts_array[42],
// 	validateYear : "Invalid Year",
//         }
//     });
        
//     if(!$('#frmsearch_name').valid())
//         $('.error').first().focus();
//     return $('#frmsearch_name').valid();
// 	}
// }

// function validateFirSubmit()
// {
// 	$("#search_fir").validate();
//     pattern();
   
//     $('#police_st_code').rules('add', {
//     	required:true,	
//         messages: {
//         required: alerts_array[73],
       
//         }
//     });

// 	 $('#firyear').rules('add', {
//     //	required:true,
// 		Number : true,
// 		maxlength : 4,
// 	//	validateYear:true,
//         messages: {
// 		Number : alerts_array[412],
//         maxlength: alerts_array[42],
// //	validateYear:"Invalid Year",
//         }
//     });

// 	 $('#fir_no').rules('add', {
// 		Number : true,
// 		//maxlength : 4,
//         messages: {
// 		Number : alerts_array[412],
//         }
//     });
        
//     if(!$('#search_fir').valid())
//         $('.error').first().focus();
//     return $('#search_fir').valid();


// }

// function show_bar_code()
// {
// 	$('label.error').remove();

// 	$('#advocate_name').val('');
// 	$('#adv_bar_state').val('');
// 	$('#adv_bar_code').val('');
// 	$('#adv_bar_year').val('');

// 	var bar_code_checked = $("input[name='radAdvt']:checked").val(); //alert(bar_code_checked);
// 	if(bar_code_checked==2){ 
// 		$('.divAdvtBarCode').show();
// 		$('#advocate_name').val('');
// 		$('.adv_div').hide(); 
// 		$('.divCaseListCal').hide();
// 		$('#c_status').show();
// 		$("#res_adv_name").html('');
		
// 	} else if(bar_code_checked==1){
// 		$('.adv_div').show();
// 		$('.divAdvtBarCode').hide();
// 		$('.divCaseListCal').hide();
// 		$('#c_status').show();
// 		$("#res_adv_name").html('');
// 	}
// 	else if(bar_code_checked==3){
// 		$('#c_status').hide();
// 		$('.divCaseListCal').show();
// 		$('.divAdvtBarCode').show();
// 		$('.adv_div').hide();
// 		$("#res_adv_name").html('');
// 	}

	
// }


// function validatesAct()
// {

// 	$("#frm_act").validate();
// 	pattern();
	   
// 	$('#actcode').rules('add', {
// 		required:true,	
// 		messages: {
// 		required: alerts_array[132],
	   
// 		}
// 	});

		
// 	if(!$('#frm_act').valid())
// 		$('.error').first().focus();
// 	return $('#frm_act').valid();

// }

// function validatesCaseType()
// {

// 	$("#frm_casetype").validate();
// 	pattern();
	   
// 	$('#case_type_2').rules('add', {
// 		required:true,	
// 		messages: {
// 		required: alerts_array[44],
	   
// 		}
// 	});

// 	 $('#search_year').rules('add', {
//     	required:true,
// 		Number : true,
// 		maxlength : 4,
// 		validateYear:true,
//         messages: {
//         required: alerts_array[115],
// 		Number : alerts_array[412],
//         maxlength: alerts_array[42],
// 	validateYear:"Invalid Year",
//         }
//     });

		
// 	if(!$('#frm_casetype').valid())
// 		$('.error').first().focus();
// 	return $('#frm_casetype').valid();


// }

