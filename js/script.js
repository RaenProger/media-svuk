

$('input[name=inlineRadioOptions]', '#myForm').on("change", function() {
  if($('input[name=inlineRadioOptions]:checked', '#myForm').val() == 1){
  $(".submitButton").prop("disabled", false);
  document.getElementById('inlineRadio1').setCustomValidity('');

}
else{
$(".submitButton").prop("disabled", true);
document.getElementById('inlineRadio1').setCustomValidity('Кредит может быть выдан только гражданам РФ');
document.getElementById('inlineRadio1').reportValidity();

}

});

$(document).ready(function() {
  $("#droptrigger").click(function() {
    $(".dropcontent").toggleClass("open", 1000)
  })
  
});