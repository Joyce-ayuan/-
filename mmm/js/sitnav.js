$(function () {  
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getsitenav",
        dataType: "json",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("infoTmp", res);
            $(".infoUl").html( htmlStr );
        }
    })
})