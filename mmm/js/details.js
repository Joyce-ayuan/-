$(function () {  

    var productId = getSearch("productId");
    var productName = getSearch("productName");
    var categoryName = getSearch("categoryName");
    arr = productName.split(" ");
    productName = arr[0];
    var price = getSearch("price");
    price = 
    $.ajax({
        url: "http://127.0.0.1:9090/api/getproduct",
        dataType: "json",
        type: "get",
        data: {
            productid: productId
        },
        success: function (res) {  
            var htmlStr = template("goodsShowTmp", res);
            $(".details_img").html(htmlStr);
            $(".breadcrumb p .tit").text(productName);
            $(".breadcrumb p .category").text(categoryName);

            var htmlStr2 = template("buyTmp", res);
            $(".details_shopping").html( htmlStr2 );
        }
    })


    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getproductcom",
        data: {
            productid: productId
        },
        success: function (res) {  
            console.log(res);
            var htmlStr = template("commentsTmp", res);
            $(".details_comments .info").html( htmlStr );
        }
    })
    

})