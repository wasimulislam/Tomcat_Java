
//*** for opening profile modal ***************//
////var profileimg = document.getElementById("navprofileimg");

var modal = document.getElementById("profilemodal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/*
profileimg.onclick = function() {
//	alert('b');
  modal.style.display = "block";
}
*/
//********** Menu searching **************//
$(document).ready(function(){
  $("#menuInput").on("keyup", function() {
	    var value = $(this).val().toLowerCase();
    $("#menuul li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
   $('.select2').select2();
});



function addCommas(nStr)
{
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


function getReport(repname) {
	$('.printrptbutton').attr('disabled', true);
	$('.View').attr('disabled', true);
	 setTimeout(function() { 
        $('.printrptbutton').attr('disabled', false);
		 $('.View').attr('disabled', false);
     //   $(this).val('Submit');
    }, 4000);
  window.open("",repname,'toolbar=0,location=0,resizable=yes,scrollbars=yes,width=800,top=0,height=600');
}

/*********** for confirm delete ***************/

function confirmDelete(){
	var forms = eval(document.forms);
	var form = document.forms[0];
	if (forms.length>1){
		form=document.forms[forms.length-1]
	}
	if(confirm('Are You Confirm')){
		form.searchbutton.value = "Delete"
    }else{
        form.searchbutton.value = "Show"
    }
	
}

function one(id, email, table, today, fields) {

    var url;
    document.getElementById('demo').innerHTML = '<div class="loader"></div>';
    document.getElementById('admissiondemo').innerHTML = '<div class="loader"></div>';
    document.getElementById('patientlist').innerHTML = '<div class="loader"></div>';
    document.getElementById('otschedule').innerHTML = '<div class="loader"></div>';
    url = "/zab/getone?zid=" + id + "&positionid=" + email + "&table=" + table + "&today=" + today + "&fields=" + fields
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchProcessRequest(); };
    httpRequest.send(null);
}

function admission(id, email, table, fields) {

    var url;
    document.getElementById('demo').innerHTML = '<div class="loader"></div>';
    document.getElementById('admissiondemo').innerHTML = '<div class="loader"></div>';
    document.getElementById('patientlist').innerHTML = '<div class="loader"></div>';
    document.getElementById('otschedule').innerHTML = '<div class="loader"></div>';
    url = "/zab/admittedpatient?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchadmission(); };
    httpRequest.send(null);
}

function patientlist(id, email, table, fields) {

    var url;
    document.getElementById('demo').innerHTML = '<div class="loader"></div>';
    document.getElementById('admissiondemo').innerHTML = '<div class="loader"></div>';
    document.getElementById('patientlist').innerHTML = '<div class="loader"></div>';
    document.getElementById('otschedule').innerHTML = '<div class="loader"></div>';
    url = "/zab/patientlist?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchpatientlist(); };
    httpRequest.send(null);
}

function otschedule(id, email, table, fields) {

    var url;
    document.getElementById('demo').innerHTML = '<div class="loader"></div>';
    document.getElementById('admissiondemo').innerHTML = '<div class="loader"></div>';
    document.getElementById('patientlist').innerHTML = '<div class="loader"></div>';
    document.getElementById('otschedule').innerHTML = '<div class="loader"></div>';
    url = "/zab/otschedule?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchotschedule(); };
    httpRequest.send(null);
}

function patienthistory(id, email, table, table2, fields, fields2, patient) {

    var url;

    url = "/zab/patienthistory?zid=" + id + "&positionid=" + email + "&table=" + table + "&table2=" + table2 + "&fields=" + fields + "&fields2=" + fields2 + "&patient=" + patient
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchpatienthistory(); };
    httpRequest.send(null);
}

function getlabresult(id, email, table, fields, patient) {

    var url;

    url = "/zab/getlabresult?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields + "&patient=" + patient
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresult(); };
    httpRequest.send(null);
}

function getlabresultparameter(id, email, table, fields, patient, catagory, date, todate) {

    var url;

    url = "/zab/getlabresult?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields + "&patient=" + patient + "&catagory=" + catagory + "&date=" + date + "&todate=" + todate
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresultparameter(); };
    httpRequest.send(null);
}

function radiologyresult(id, email, table, fields, patient) {

    var url;

    url = "/zab/radiologyresult?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields + "&patient=" + patient
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetradiologyresult(); };
    httpRequest.send(null);
}

function patientvitals(id, email, table, fields, patient) {

    var url;

    url = "/zab/patientvitals?zid=" + id + "&positionid=" + email + "&table=" + table + "&fields=" + fields + "&patient=" + patient
    //alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetpatientvitals(); };
    httpRequest.send(null);

}

function report(procedure, id, fdate, tdate, fields, type) {

    var url;
    document.getElementById('reportresult').innerHTML = '<div class="loader"></div>';
    url = "/zab/report?procedure=" + procedure + "&id=" + id + "&fdate=" + fdate + "&tdate=" + tdate + "&fields=" + fields + "&type=" + type
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOnereport(); };
    httpRequest.send(null);

}

function billreport(table, id, dornum) {

    var url;
    document.getElementById('billreportresult').innerHTML = '<div class="loader"></div>';
    url = "/zab/billreport?table=" + table + "&id=" + id + "&dornum=" + dornum
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getbillreport(); };
    httpRequest.send(null);

}

function billsummary(table,id,dornum) {

    var url;
    document.getElementById('billreportresult').innerHTML = '<div class="loader"></div>';
    url = "/zab/billsummary?table=" + table + "&id=" + id + "&dornum=" + dornum
     //alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getbillreportsummary(); };
    httpRequest.send(null);

}

function getOneSearchProcessRequest() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            var one = document.getElementById('demo');
            var two = document.getElementById('admissiondemo');
            var three = document.getElementById('patientlist');
            var four = document.getElementById('otschedule');
            var five = document.getElementById('main-section');

            //Update the HTML
            if (resultText == '') {
                //	alert('Cannot Proceed-'+value+' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            one.style.display = "block"
            two.style.display = "none"
            three.style.display = "none"
            four.style.display = "none"
            five.style.display = "none"
            document.getElementById('demo').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            //alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText);
        }
    }
}

function getOneSearchadmission() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            var one = document.getElementById('demo');
            var two = document.getElementById('admissiondemo');
            var three = document.getElementById('patientlist');
            var four = document.getElementById('otschedule');
            var five = document.getElementById('main-section');
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            one.style.display = "none"
            two.style.display = "block"
            three.style.display = "none"
            four.style.display = "none"
            five.style.display = "none"
            document.getElementById('admissiondemo').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchpatientlist() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            var one = document.getElementById('demo');
            var two = document.getElementById('admissiondemo');
            var three = document.getElementById('patientlist');
            var four = document.getElementById('otschedule');
            var five = document.getElementById('main-section');
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "block"
            four.style.display = "none"
            five.style.display = "none"
            document.getElementById('patientlist').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchotschedule() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            var one = document.getElementById('demo');
            var two = document.getElementById('admissiondemo');
            var three = document.getElementById('patientlist');
            var four = document.getElementById('otschedule');
            var five = document.getElementById('main-section');
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            one.style.display = "none"
            two.style.display = "none"
            three.style.display = "none"
            four.style.display = "block"
            five.style.display = "none"
            document.getElementById('otschedule').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchpatienthistory() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('patienthistory').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchgetlabresult() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchgetlabresultparameter() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchgetradiologyresult() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('radiologyresult').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOneSearchgetpatientvitals() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('patientvital').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getOnereport() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('reportresult').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getbillreport() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('billreportresult').innerHTML = resultText
            setTimeout(function () {
                var text = document.getElementById("barcodeValue").value;
                JsBarcode("#barcode", text, {
                    width: 1.3,
                    height: 20,
                    displayValue: false
                });

                console.log('success')
            }, 1)
            setTimeout(function () {
                var text = document.getElementById("barcodeValuebill").value;
                JsBarcode("#barcode2", text, {
                    width: 1.3,
                    height: 20,
                    displayValue: false
                });

                console.log('success')
            }, 1)

            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getbillreportsummary() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('billreportresult').innerHTML = resultText
            setTimeout(function () {
                var text = document.getElementById("barcodeValue").value;
                JsBarcode("#barcode", text, {
                    width: 1.3,
                    height: 20,
                    displayValue: false
                });

                console.log('success')
            }, 1)
            setTimeout(function () {
                var text = document.getElementById("barcodeValuebill").value;
                JsBarcode("#barcode2", text, {
                    width: 1.3,
                    height: 20,
                    displayValue: false
                });

                console.log('success')
            }, 1)

            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}


window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

function home() {

    var resultText = httpRequest.responseText
    var one = document.getElementById('demo');
    var two = document.getElementById('admissiondemo');
    var three = document.getElementById('patientlist');
    var four = document.getElementById('otschedule');
    var five = document.getElementById('main-section');
    one.style.display = "none"
    two.style.display = "none"
    three.style.display = "none"
    four.style.display = "none"
    five.style.display = "block"

}

function Searchtable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function Searchtablelab() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInputlab");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTablelab");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


$(document).ready(function () {
    $("#xpatientnListTable td:contains(Corporate)").css("color", "red");
});


$(document).ready(function () {
    $("#searchtable td:contains(Corporate)").css("color", "red");
});


function preventBack() { window.history.forward(); }
setTimeout("preventBack()", 0);
window.onunload = function () { null };




function labresult(xresult,id,patient,catitem) {

    var url;
    document.getElementById('mmprescription').innerHTML = '<div class="loader"></div>';
    url = "/zab/labresult?xresult=" + xresult + "&id=" + id + "&patient=" + patient+ "&catitem=" + catitem
     alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getlabresultedit(); };
    httpRequest.send(null);

}

function getlabresultedit() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('mmprescription').innerHTML = resultText
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getlabresultipd(id, email,Admission, table, fields, patient) {

    var url;
	document.getElementById('labresultview').innerHTML = '<div class="loader"></div>';
    url = "/zab/getlabresultipd?zid=" + id + "&positionid=" + email + "&Admission=" + Admission + "&table=" + table + "&fields=" + fields + "&patient=" + patient
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresultipd(); };
    httpRequest.send(null);
}

function getOneSearchgetlabresultipd() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getlabresultparameteripd(id, email,Admission, table, fields, patient, catagory, date, todate) {

    var url;
	document.getElementById('labresultview').innerHTML = '<div class="loader"></div>';
    url = "/zab/getlabresultipd?zid=" + id + "&positionid=" + email +  "&Admission=" + Admission +"&table=" + table + "&fields=" + fields + "&patient=" + patient + "&catagory=" + catagory + "&date=" + date + "&todate=" + todate
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresultparameteripd(); };
    httpRequest.send(null);
}

function getOneSearchgetlabresultparameteripd() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getlabresultmicroipd(id, email,Admission, table, fields, patient) {

    var url;
	document.getElementById('labresultview').innerHTML = '<div class="loader"></div>';
    url = "/zab/getlabresultmicroipd?zid=" + id + "&positionid=" + email + "&Admission=" + Admission + "&table=" + table + "&fields=" + fields + "&patient=" + patient
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresultmicroipd(); };
    httpRequest.send(null);
}

function getOneSearchgetlabresultmicroipd() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}

function getlabresultparametermicroipd(id, email,Admission, table, fields, patient, catagory, date, todate) {

    var url;
	document.getElementById('labresultview').innerHTML = '<div class="loader"></div>';
    url = "/zab/getlabresultmicroipd?zid=" + id + "&positionid=" + email +  "&Admission=" + Admission +"&table=" + table + "&fields=" + fields + "&patient=" + patient + "&catagory=" + catagory + "&date=" + date + "&todate=" + todate
    // alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getOneSearchgetlabresultparametermicroipd(); };
    httpRequest.send(null);
}

function getOneSearchgetlabresultparametermicroipd() {
    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('labresultview').innerHTML = resultText
            //  $(document).ready(function(){ $('#myModal');});
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}


	$(function() {
		$(".searchtable span").each(function() {
			if ($(this).text() == '*') {
				$(this).css('color', 'red');
			}
		});
			console.log("searchtable")
	});
	
function prescription(table,id,caseno,screen) {

    var url;
    document.getElementById('mmprescription').innerHTML = '<div class="loader"></div>';
    url = "/zab/mmprescription?table=" + table + "&id=" + id + "&caseno=" + caseno  + "&screen=" + screen
 //    alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { getprescription(); };
    httpRequest.send(null);

}


function mmopthprescription(table,id,caseno,screen) {

    var url;
    document.getElementById('mmprescription').innerHTML = '<div class="loader"><ophthprescription/div>';
    url = "/zab/mmopthprescription?table=" + table + "&id=" + id + "&caseno=" + caseno + "&screen=" + screen
	//alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { ophthgetprescription(); };
    httpRequest.send(null);

}

function mmdentalprescription(table,id,caseno,screen) {

    var url;
    document.getElementById('mmprescription').innerHTML = '<div class="loader"><ophthprescription/div>';
    url = "/zab/mmdentalprescription?table=" + table + "&id=" + id + "&caseno=" + caseno + "&screen=" + screen
  //   alert(url)

    if (window.ActiveXObject) {
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else (window.XMLHttpRequest)
    {
        httpRequest = new XMLHttpRequest();
    }

    httpRequest.open("GET", url, true);
    httpRequest.onreadystatechange = function () { dentalgetprescription(); };
    httpRequest.send(null);

}




function getprescription() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('mmprescription').innerHTML = resultText
			
			setTimeout(function () {
					$(document).ready(function(){
					//	alert("Height of div: " + $("#prescription-height").height());
					$("#height").html($("#prescription-height").height());
				});
                console.log('success')
            }, 1)
			
			
			setTimeout(function () {
				var ht = document.getElementById("height").innerHTML; 
				var vl = document.getElementById("vl");  
				var vl2 = document.getElementById("vl2");
				var vl3 = document.getElementById("vl3");  				
				console.log(ht)
				if (ht < 700) {
					vl.style.display = "block";
					vl2.style.display = "none"; 
					vl3.style.display = "none";						
				}
				else if(ht < 1000){
					vl.style.display = "none";
					vl2.style.display = "block";  
					vl3.style.display = "none";	
				}
				else{
					vl.style.display = "none";
					vl2.style.display = "none";
					vl3.style.display = "block";					
				}
            }, 1000)
			
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}
function dentalgetprescription() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('mmprescription').innerHTML = resultText
			
			setTimeout(function () {
					$(document).ready(function(){
					//	alert("Height of div: " + $("#prescription-height").height());
					$("#height").html($("#prescription-height").height());
				});
                console.log('success')
            }, 1)
			
			
			setTimeout(function () {
				var ht = document.getElementById("height").innerHTML; 
				var vl = document.getElementById("vl");  
				var vl2 = document.getElementById("vl2");
				var vl3 = document.getElementById("vl3");  				
				console.log(ht)
				if (ht < 700) {
					vl.style.display = "block";
					vl2.style.display = "none"; 
					vl3.style.display = "none";						
				}
				else if(ht < 1000){
					vl.style.display = "none";
					vl2.style.display = "block";  
					vl3.style.display = "none";	
				}
				else{
					vl.style.display = "none";
					vl2.style.display = "none";
					vl3.style.display = "block";					
				}
            }, 1000)
			
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}


function ophthgetprescription() {

    if (httpRequest.readyState == 4) {
        if (httpRequest.status == 200) {
            //get the Value send by the servlet
            var resultText = httpRequest.responseText
            //Update the HTML
            if (resultText == '') {
                alert('Cannot Proceed-' + value + ' Is Not A Valid ID')
            } else {
            }
            //alert(resultText)
            document.getElementById('mmprescription').innerHTML = resultText
			
			setTimeout(function () {
					$(document).ready(function(){
					//	alert("Height of div: " + $("#prescription-height").height());
					$("#height").html($("#prescription-height").height());
				});
                console.log('success')
            }, 1)
			
			
			setTimeout(function () {
				var ht = document.getElementById("height").innerHTML; 
				var vl = document.getElementById("vl");  
				var vl2 = document.getElementById("vl2");
				var vl3 = document.getElementById("vl3");  				
				console.log(ht)
				if (ht < 700) {
					vl.style.display = "block";
					vl2.style.display = "none"; 
					vl3.style.display = "none";						
				}
				else if(ht < 1000){
					vl.style.display = "none";
					vl2.style.display = "block";  
					vl3.style.display = "none";	
				}
				else{
					vl.style.display = "none";
					vl2.style.display = "none";
					vl3.style.display = "block";					
				}
            }, 1000)
			
        }
        else {
            alert("Error loading page\n" + httpRequest.status + ":" + httpRequest.statusText);
        }
    }
}