$(document).ready(function () {

  $("#js_AddCode").click(function () {

     var GetCode = $("#textbit").text();

     //  Validate GetCode Value
     if (GetCode === "") {
       alert("Please Select a BarCode");
     }else {

      // Add the scaned code to code list.
      $(".js_BarCodeList").append("<tr> <td>"+GetCode+"</td> </tr>");
       console.log(GetCode);
     }



  }); //End click

}); // End Scope
