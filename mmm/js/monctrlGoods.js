$(function () {  

    var productid = getSearch("productid");
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getmoneyctrlproduct",
        dataType: "json",
        data: {
            productid: productid
        },
        success: function (res) {  
            console.log(res);
            var htmlStr1 = template("detailsTmp", res);
            $(".content").html(htmlStr1);

            var htmlStr2 = template("comTmp", res);
            $(".comment").html( htmlStr2 );
        }
    })

})