$(document).ready(init);
function init(){
    $("#comics").booklet(
        {
            width:900,
            height:650,
            covers:true,
            closed: true,
            autoCenter: true,
            pagePadding:0,
        }
       
    );
    
    $("#bt_go").click(function(){
        $("#comics").booklet("#gotopage",
        $("#in_go").val());  

    });

}
