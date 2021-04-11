function addnum(numb){
  var valueOfNumbers = numb.value;
  valueOfNumbers = valueOfNumbers;
  document.getElementById("res").value = document.getElementById("res").value  + valueOfNumbers;
  
}
function process() {
  
  var res =document.getElementById("res").value;
  if (res.includes("+")==true) {
    var str = res;
    var n = str.indexOf("+");
    var place = n;
    var num1 = str.substring(0 , place);
    var num2 = str.substring(place+1 , str.legnth);
    var namevar1 = Number(num1);
    var namevar2 = Number(num2);
    var processnumbers;
    processnumbers  = namevar1 + namevar2;
    document.getElementById("res").value=processnumbers;
  }else{
    if (res.includes("-")==true) {
      var str = res;
      var n = str.indexOf("-");
      var place = n;
      var num1 = str.substring(0 , place);
      var num2 = str.substring(place+1 , str.legnth);
      var namevar1 = Number(num1);
      var namevar2 = Number(num2);
      var processnumbers;
      processnumbers  = namevar1 - namevar2;
      document.getElementById("res").value=processnumbers;
    }else{
      if (res.includes("x")==true) {
        var str = res;
        var n = str.indexOf("x");
        var place = n;
        var num1 = str.substring(0 , place);
        var num2 = str.substring(place+1 , str.legnth);
        var namevar1 = Number(num1);
        var namevar2 = Number(num2);
        var processnumbers;
        processnumbers  = namevar1 * namevar2;
        document.getElementById("res").value=processnumbers;
    }else{
      if (res.includes("/")==true) {
        var str = res;
        var n = str.indexOf("/");
        var place = n;
        var num1 = str.substring(0 , place);
        var num2 = str.substring(place+1 , str.legnth);
        var namevar1 = Number(num1);
        var namevar2 = Number(num2);
        var processnumbers;
        processnumbers  = namevar1 / namevar2;
        document.getElementById("res").value=processnumbers;
      }
    }
  }
}
}
function testa(kk) {
 var o =document.getElementById("res").value;
 
 console.log(o)
 var res =document.getElementById("res").value;
  if (res.includes("+")==true) {
    var str = res;
    var n = str.indexOf("+");
    var place = n;
    var num1 = str.substring(0 , place);
    var num2 = str.substring(place+1 , str.legnth);
    var namevar1 = Number(num1);
    var namevar2 = Number(num2);
    var processnumbers;
    processnumbers  = namevar1 + namevar2;
    document.getElementById("res").value=processnumbers;
  }else{
    if (res.includes("-")==true) {
      var str = res;
      var n = str.indexOf("-");
      var place = n;
      var num1 = str.substring(0 , place);
      var num2 = str.substring(place+1 , str.legnth);
      var namevar1 = Number(num1);
      var namevar2 = Number(num2);
      var processnumbers;
      processnumbers  = namevar1 - namevar2;
      document.getElementById("res").value=processnumbers;
    }else{
      if (res.includes("x")==true) {
        var str = res;
        var n = str.indexOf("x");
        var place = n;
        var num1 = str.substring(0 , place);
        var num2 = str.substring(place+1 , str.legnth);
        var namevar1 = Number(num1);
        var namevar2 = Number(num2);
        var processnumbers;
        processnumbers  = namevar1 * namevar2;
        document.getElementById("res").value=processnumbers;
    }else{
      if (res.includes("/")==true) {
        var str = res;
        var n = str.indexOf("/");
        var place = n;
        var num1 = str.substring(0 , place);
        var num2 = str.substring(place+1 , str.legnth);
        var namevar1 = Number(num1);
        var namevar2 = Number(num2);
        var processnumbers;
        processnumbers  = namevar1 / namevar2;
        document.getElementById("res").value=processnumbers;
      }
    }
  }
}
}