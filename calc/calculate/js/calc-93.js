$(document).ready(function(){$(".danwei").change(function(){var ck=document.getElementsByName("danwei");if(ck[2].checked){$(".velocity").removeAttr("disabled")}else{$(".velocity").attr("disabled","true")}})});function MDCalc(z){var msg="";var sec="";if(z.danwei==1){msg="秒";sec=z.rr}else if(z.danwei==2){msg="毫秒";sec=z.rr*.001}else if(z.danwei==3){msg="小格";if(z.velocity==1){sec=z.rr*.04}else{sec=z.rr*.02}}Answer(Math.round(parseFloat(60/sec)));Text(msg)}