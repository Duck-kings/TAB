$(function(){
    $(".tablinks").click(function(){
        $(".tablinks").removeClass("active");
        $(this).addClass("active");
        if($("#btn1").hasClass("active")){
            $("#Lnd").fadeIn("slow");
        }
        else{
            $("#Lnd").fadeOut("fast");
        }
        if($("#btn2").hasClass("active")){
            $("#Psg").fadeIn("slow");
        }
        else{
            $("#Psg").fadeOut("fast");
        }
        if($("#btn3").hasClass("active")){
            $("#Tko").fadeIn("slow");
        }
        else{
            $("#Tko").fadeOut("fast");
        }
        
        
    });
});
    