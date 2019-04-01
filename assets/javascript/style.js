$("#navbutt,#myclose,#myDropdown a").click(function(){
  document.getElementById("navbutt").classList.toggle("hide");
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myclose").classList.toggle("show");
}
);
  

    
$(document).ready(function() {
    $("#scroll").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});