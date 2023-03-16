$(document).ready(function () {
    $(".dTree").dTree();

    /**** for sidelist top and left adjustment **************/
    $('#sidebartd .div-list').css("top", $('#table2-top-btn').height() + 5 + 'px'); //original
    $('.list-collapse button').css("top", $('#table2-top-btn').height() + 5 + 'px');
    //$('.table-datatable').css("top",$('#table-btn-command').height()+0+'px');
    $('.table-formsection-list div').removeClass("list-collapse").addClass("list-collapse-section");
    $('#poslist-table div').removeClass("list-collapse").addClass("list-collapse-section");
    //$('#poslist-table div').removeClass("list-collapse");


	var fired_button;

	$("button").click(function() {
		fired_button = $(this).val();
		
	});

			
	$("form").submit(function(){
		// alert(fired_button);
		
		if (fired_button=="Show")
		{
			setTimeout(function () {
				$('#Showrecord').attr('disabled', true);
			}, 1);
			setTimeout(function () {
				$('#showrecord').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Clear")
		{
			setTimeout(function () {
				$('#Clearrecord').attr('disabled', true);
			}, 1);
			setTimeout(function () {
				$('#clearrecord').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="add")
		{
			setTimeout(function () {
				$('#Add').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Update")
		{
			setTimeout(function () {
				$('#Update').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Delete")
		{
			setTimeout(function () {
				$('#Delete').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Top")
		{
			setTimeout(function () {
				$('#Top').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Next")
		{
			setTimeout(function () {
				$('#Next').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Previous")
		{
			setTimeout(function () {
				$('#Previous').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Bottom")
		{
			setTimeout(function () {
				$('#Bottom').attr('disabled', true);
			}, 1);
		}
		else if(fired_button=="Add")
		{
			setTimeout(function () {
				$('#Add').attr('disabled', true);
			}, 1);
		}
		else {
			return true;
		}
	
	});

});


$(document).ready(function(e) {
    $('.nav-slide').SlideMenu({
        speedLR: 1000,
        speedUD: 500,
        expand: true,
        collapse: true
    });
});


function updateParent(link,field){

//
    if ((field == '')||(field.charAt(0) == '$')){
      var equal = true;
  	  var query = location.search.substring(1);
      var index = query.indexOf('_VALUE_field=');
      if (index <0){
    		equal = false;
	    	index = query.indexOf('_VALUE_field%3D');
  	  }

	    if (index >=0){
        if (equal == true){
	    	  field = query.substring(index+13);
        }else{
	  	    field = query.substring(index+15);
        }
        index = field.indexOf('_VALUE_');
        if (index >=0) field = field.substring(0,index);
      }
      // Break at ampersand.
      //var pairs = query.split("&");
    }

  var mytext
  if (navigator.appName.indexOf("Netscape") >= 0){
      mytext=link.text;
  }else{
      mytext=link.innerText;
  }

  var mys = eval("opener.document.forms")

  if (field.charAt(0) == '_'){
    field = field.substring(1);
    if(mys.length>1){
      for (var i = 0; i < opener.document.forms[mys.length-1].elements.length; i++){
        if (opener.document.forms[mys.length-1].elements[i].name == (field+'_ONE')){
          opener.document.forms[mys.length-1].elements[i].value=mytext.substring(0,4);
        }
      }
      for (var i = 0; i < opener.document.forms[mys.length-1].elements.length; i++){
        if (opener.document.forms[mys.length-1].elements[i].name == (field+'_TWO')){
          opener.document.forms[mys.length-1].elements[i].value=mytext.substring(4);
          opener.document.forms[mys.length-1].searchbutton.value='';

          parent.focus();
          window.close();
          return false;
        }
      }
    }else{
      for (var i = 0; i < opener.document.forms[0].elements.length; i++){
        if (opener.document.forms[0].elements[i].name == (field+'_ONE')){
          opener.document.forms[0].elements[i].value=mytext.substring(0,4);
        }
      }
      for (var i = 0; i < opener.document.forms[0].elements.length; i++){
        if (opener.document.forms[0].elements[i].name == (field+'_TWO')){
          opener.document.forms[0].elements[i].value=mytext.substring(4);
          opener.document.forms[0].searchbutton.value='';

          parent.focus();
          window.close();
          return false;
        }
      }
    }

  }else{
    if(mys.length>1){
      for (var i = 0; i < opener.document.forms[mys.length-1].elements.length; i++){
        if (opener.document.forms[mys.length-1].elements[i].name == field){
          opener.document.forms[mys.length-1].elements[i].value=mytext;
          opener.document.forms[mys.length-1].searchbutton.value='';

          parent.focus();
          window.close();
          return false;
        }
      }
    }else{
      for (var i = 0; i < opener.document.forms[0].elements.length; i++){
        if (opener.document.forms[0].elements[i].name == field){
          opener.document.forms[0].elements[i].value=mytext;
          opener.document.forms[0].searchbutton.value='';

          parent.focus();
          window.close();
          return false;
        }
      }
    }
  }
}


function showlist(form,page,field, pick,focusbutton)
{
	var VALUEseparator = '_VALUE_';
	var helpURL = 'helplist';

  var s1 = eval("document.forms");
  var s = "";
  if(s1.length >1)
    s = "document.forms[s1.length-1]."+field+".value";
  else
    s = "document.forms[0]."+field+".value";

  var fvalue = eval(s);
  fvalue = encodeURIComponent(fvalue);
  
  var value = ""
  if(s1.length >1)
    value = document.forms[s1.length-1].searchbutton.value;
  else
    value = document.forms[0].searchbutton.value;

  var width = 400;
//alert(page+' '+VALUEseparator+' '+field)
  var param = 'page='+page+VALUEseparator+'field='+field+VALUEseparator+'zvalue='+fvalue+VALUEseparator+'pick='+pick+VALUEseparator;

  var left = 600;
  if (screen){
    left = screen.width-width;
  }
  OpenWindow=window.open(helpURL+'?zvalue='+fvalue+'&helplist='+param+'&value='+value, 'List', 'toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=1,center=0,alwaysRaised=yes,resizable=yes,width='+width+',top=0,left='+left);
  if (focusbutton =''){
	focusbutton = 'showrecord'
	document.getElementById(focusbutton).focus();
  }else 
	document.getElementById(field).focus();
  return false;
}

function showblist(){
 var x = document.getElementById('blistholder');
     if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function getHelp(fixedobj,fixedfield,b,fieldname,table,fields,order,select,zid,rows,nextfieldid,caption,linksql,fieldlength){
	
	var listid = 'search'+fieldname
	
	document.getElementById(listid).style.visibility=  "visible"
	var url = '';
	if(b.value.length>fieldlength){
//	    url = "/zab/gethelp?zid="+zid+"&rows="+rows+"&fieldid="+fieldname+"&xfieldval="+b.value+"&xfields="+fields+"&table="+table+"&order="+order+"&select="+select+"&fixed="+fixedfield+"&fixedval="+fixedobj.value+"&nextfieldid="+nextfieldid+"&caption="+caption    
	    url = "/zab/gethelp?zid="+zid+"&rows="+rows+"&fieldid="+fieldname+"&xfieldval="+encodeURIComponent(b.value)+"&xfields="+fields+"&table="+table+"&order="+order+"&select="+select+"&fixed="+fixedfield+"&fixedval="+fixedobj.value+"&nextfieldid="+nextfieldid+"&caption="+caption+"&linksql="+linksql
		if (window.ActiveXObject)
		{
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest)
		{
			httpRequest = new XMLHttpRequest();
		}

		httpRequest.open("GET", url, true);
		httpRequest.onreadystatechange = function() {getHelpSearchProcessRequest(b.value,listid); } ;
		httpRequest.send(null);
	}else{ 
		url = ''
		document.getElementById(listid).style.visibility="hidden"
	}
		document.getElementById(fieldname).addEventListener('click',function(event){
        var pol = document.getElementById(listid);
        if(event.target != pol && event.target.parentNode != pol){
            pol.style.visibility="hidden"; 
        }
	});  
}
function getHelpSearchProcessRequest(value,listid){
	if (httpRequest.readyState == 4){
    	if(httpRequest.status == 200){
        	//get the Value send by the servlet
            var resultText = httpRequest.responseText 
            //Update the HTML
            if(resultText==''){
            //	alert('Cannot Proceed-'+value+' Is Not A Valid ID')
            }else{
            }
//			alert(resultText)
	        document.getElementById(listid).innerHTML=resultText
        }
        else{
        	//alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText);
        }
    }
}

function pickResult(b,fieldid,listid,nextfieldid,zid,linksql,fixedfield,fixedval){
	//alert(fixedfield)
	//fixedval=''
	document.getElementById(fieldid).value=b
	document.getElementById(listid).style.visibility="hidden"
	//document.getElementById(nextfieldid).focus()
	getDesc(fieldid,zid,linksql,fixedfield,fixedval)
	document.getElementById(nextfieldid).select()

}

function getDesc(fieldid,zid,linksql,fixedfield,fixedval){

	var url = '';
	var fieldval = document.getElementById(fieldid).value
	
//	if(b.value.length>1){
	    url = "/zab/getdesc?zid="+zid+"&fixedfield="+fixedfield+"&fixedval="+fixedval+"&fieldid="+fieldid+"&xfieldval="+encodeURIComponent(fieldval)+"&linksql="+linksql
		//alert(url)
		if (window.ActiveXObject)
		{
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest)
		{
			httpRequest = new XMLHttpRequest();
		}

		httpRequest.open("GET", url, true);
		httpRequest.onreadystatechange = function() {getDescSearchProcessRequest(fieldid); } ;
		httpRequest.send(null);
}

function getDescSearchProcessRequest(fieldid){
	if (httpRequest.readyState == 4){
    	if(httpRequest.status == 200){
        	//get the Value send by the servlet
            var resultText = httpRequest.responseText 
            //Update the HTML
            if(resultText==''){
            //	alert('Cannot Proceed-'+value+' Is Not A Valid ID')
            }else{
            }
//			alert(resultText)
	        document.getElementById(fieldid+'desc').innerHTML=resultText
        }
        else{
        	//alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText);
        }
    }
}

function setSpCrystalDates(){
  var dateformat = document.forms[0].dateformat.value;
  for (var i = 0; i < document.forms[0].elements.length; i++){
    if (document.forms[0].elements[i].title == 'date'){
      var val = document.forms[0].elements[i].value;
      var sep = '/';
      if (val.indexOf(sep)>=0){
      }else if (val.indexOf('-')>=0){
        sep = '-';
      }else if (val.indexOf('/')>=0){
        sep = '/';
      }else if (val.indexOf('.')>=0){
        sep = '.';
      }
      var date = val.split(sep);
      if(date[0].length<4){
      var result = '';
      var searchresult = val.search(/Date/i);
      if (searchresult >= 0) {
  	    result = val;
      }else if (dateformat == 'D'){
	      result = ''+date[2]+'-'+date[1]+'-'+date[0]+'';
      }else if (dateformat == 'Y'){
	      result = 'Date('+date[0]+','+date[1]+','+date[2]+')';
	      result = ''+date[2]+'-'+date[1]+'-'+date[0]+'';
      }else{
 	    result = 'Date('+date[2]+','+date[0]+','+date[1]+')';
	    result = ''+date[2]+'-'+date[1]+'-'+date[0]+'';
      }
      document.forms[0].elements[i].value = result;
      }
    }
  }
  return true;
}
//"$(\"."+f.name+"dtcheckbox\").editable(\"/zab/calldatatable?spname="+f.linespname+"&user_id="+user_id+"&user_pass="+user_pass+"&zid="+id+"&table="+list.table+"&pkey="+list.primarykey+"\",{\n";
//"<input id=\""+f.name+records+"\" onclick=\"clickedcheck("+f.value+","+f.linespname+","+user_id+","+user_pass+","+id+","+list.table+","+list.primarykey+","+pval+")\" class=\"dtcheckbox\" name=\""+f.name+records+"\"";
//1,,zabadmin,,400010,opdodetail,xdornumcommaxrow,xcollectioncolonDO--21000368comma1
//function clickedcheck(fieldValue,spName,user_id,user_pass,zid,table,pkey,pval){
function clickedcheck1(){
	alert()
}

function clickedcheck(fieldid,fieldValue,spName,user_id,user_pass,zid,table,pkey,pval,displayType){
	var url = '';
	var updatedFieldValue = '';
	var checked = '';
	//alert(fieldid)
	//fieldValue = document.getElementById(fieldid).value
	if(displayType == 'checkbox'){
		checked = document.getElementById(fieldid).checked
		if(checked)
			fieldValue = 1
		else
			fieldValue = 0
	//}else if(displayType == 'text'){
	//	fieldValue = document.getElementById(fieldid).value
	}else{
		fieldValue = document.getElementById(fieldid).value
		//alert(fieldValue)
	}
	//alert(document.getElementById(fieldid))
    url = "/zab/calldatatable?id="+pval+"&value="+fieldValue+"&spname="+spName+"&user_id="+user_id+"&user_pass="+user_pass+"&zid="+zid+"&table="+table+"&pkey="+pkey
	//alert(url)
	if (window.ActiveXObject)
	{
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	else if (window.XMLHttpRequest)
	{
		httpRequest = new XMLHttpRequest();
	}
	httpRequest.open("GET", url, true);
	httpRequest.onreadystatechange = function() {getDtCkVal(fieldid,displayType); } ;
	httpRequest.send(null);

}

function getDtCkVal(fieldid,displayType){
	//alert()
	if (httpRequest.readyState == 4){
    	if(httpRequest.status == 200){
        	//get the Value send by the servlet
            var resultText = httpRequest.responseText 
            //Update the HTML
            if(resultText==''){
            //	alert('Cannot Proceed-'+value+' Is Not A Valid ID')
            }else{
				//alert(resultText)
				if(displayType == 'text')
					document.getElementById(fieldid).value=resultText
				else if(displayType == 'combo')
					fieldid.options[fieldid.selectedIndex].innerHTML=resultText
            }
			//var elem = document.getElementById(fieldid);
			//alert(elem)
			//if(resultText=='1'){
			//	elem.checked = true;
			//	alert(elem)
			//}else{
			//	elem.checked = false;
			//}	
//alert('result '+resultText)			
	   //     document.getElementById(fieldid).value=resultText
        }
        else{
        	//alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText);
        }
    }
}

function printDiv() {
        var printWindow = window.open('', '', 'height=1200,width=2000');
        printWindow.document.write('<html><head><title></title>');
 
        //Print the Table CSS.
        var table_style = document.getElementById("table_style").innerHTML;
        printWindow.document.write('<style type = "text/css" href="homestyle.css" >');
        printWindow.document.write(table_style);
        printWindow.document.write('</style>');
        printWindow.document.write('</head>');
 
        //Print the DIV contents i.e. the HTML Table.
        printWindow.document.write('<body>');
        var divContents = document.getElementById("GFG").innerHTML;
        printWindow.document.write(divContents);
		//printWindow.document.write('<footer>');
		//printWindow.document.write('Powered By ZAB Framework © All Rights Reserved by Orange Solutions Ltd. www.makeitorange.com.bd Printed on:');
		//printWindow.document.write('</footer>');
        printWindow.document.write('</body>');
        printWindow.document.write('</html>');
        printWindow.document.close();
        printWindow.print();
		printWindow.close();;
    }
	
	
history.pushState(null, null, location.href);
window.onpopstate = function () {
  history.go(1);
};

function statusDiv(caseno){

	var url = '';
	url = "/zab/mmprescription?zid=400010&xcase="+caseno+"&xupdate=update";
	
		if (window.ActiveXObject)
		{
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else if (window.XMLHttpRequest)
		{
			httpRequest = new XMLHttpRequest();
		}
		
		httpRequest.open("GET", url, true);
		httpRequest.onreadystatechange = function() {getDescSearchProcessRequest(fieldid); } ;
		httpRequest.send(null);
}


function generateBarcode(){
        var value = $("#barcodeValue").val();
		var valuebill = $("#barcodeValuebill").val();
        var btype = 'code128';
        var renderer = 'bmp';
		
		//console.log(value);
        //console.log(valuebill);
		
        var settings = {
          output:renderer,
          bgColor: '#FFFFFF',
          color: '#000000',
          barWidth: '1',
          barHeight: '20',
          moduleSize: '6',
          posX: '10',
          posY: '10',
          addQuietZone: '1'
        };
        
        if (renderer == 'canvas'){
          clearCanvas();
          $("#barcodeTarget").hide();
		  $("#barcodeTargetbill").hide();
        } else {
          $("#barcodeTarget").html("").show().barcode(value, btype, settings);
		  $("#barcodeTargetbill").html("").show().barcode(valuebill, btype, settings);
        }
	}
      
  $(function(){
	$('input[name=renderer]').click(function(){
	  if ($(this).attr('id') == 'canvas') $('#miscCanvas').show(); else $('#miscCanvas').hide();
	});
	generateBarcode();
  });

const OnEvent = (doc) => {
    return {
        on: (type, selector, callback) => {
            doc.addEventListener(type, (event) => {
                if (!event.target.matches(selector)) return;
                callback.call(event.target, event);
            }, false);
        }
    }
};
OnEvent(document).on('click', '.custombutton', function (e) {
    setTimeout(function () {
        $('.custombutton').attr('disabled', true);
    }, 1);
});

OnEvent(document).on('click', '.printrptbutton', function (e) {
    setTimeout(function () {
        $('.printrptbutton').attr('disabled', true);
		
    }, 1);
	
	setTimeout(function () {
        $('.printrptbutton').attr('disabled', false);
    }, 5000);	
});

OnEvent(document).on('click', '.view_report_button', function (e) {
    setTimeout(function () {
        $('.view_report_button').attr('disabled', true);
    }, 1);
    setTimeout(function () {
        $('.view_report_button').attr('disabled', false);
    }, 5000);
    console.log("view_report_button");
});