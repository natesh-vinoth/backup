function readfile(pagename)
{
    //alert("It will display : " +pagename);
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("ajaxdata").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET",pagename,true);
    xmlhttp.send();
}

function getnav()
{
    //alert("Hello Navigation");

    var xhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("leftnav").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET","navigation.html",true);
    xmlhttp.send();

}

function localjson()
{
    var itemjson = '["Apple","Mango","Banana","Orange","Grapes"]';
    //alert(itemjson.length);
    var item = JSON.parse(itemjson); // Converting JSON to Array
    //alert(item.length);
    //var json2 = JSON.stringify(item); // Converting Array to JSON
    //alert(json2.length + "\n" + itemjson + "\n" + json2);

    var data ="";
    var j=1;
    for(var i=0; i<item.length; i++)
    {
        data = data + "<h4>" + j + "." + item[i] + "</h4>";
        j++;
    }
    document.getElementById("ajaxdata").innerHTML=data;
}

function externaljson()
{
    var xhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var item=JSON.parse(this.responseText);

            var data ="";
            var j=1;
            for(var i=0; i<item.length; i++)
            {
                data = data + "<h4>" + j + "." + item[i] + "</h4>";
                j++;
            }
            document.getElementById("ajaxdata").innerHTML=data;
        }
        
    };
    xmlhttp.open("GET","item.json",true);
    xmlhttp.send();


}