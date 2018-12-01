$(function () {  

    var productid = getSearch("productid");
    console.log(productid);
    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getdiscountproduct",
        data:{
            productid: productid
        },
        success: function (res) {  
            console.log(res);
            var htmlStr = template("detailsTmp", res);
            $(".content").html( htmlStr );
        }
    })

    

})