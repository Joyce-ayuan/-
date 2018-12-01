$(function () {  

    var brandtitleid = getSearch("brandtitleid");
    var pagesize = 1;
    var productid;
    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getbrand",
        data: {
            brandtitleid: brandtitleid
        },
        success: function (res) {  
            console.log(res);
            var htmlStr = template("sortTmp", res);
            $(".cate ul").html( htmlStr );
        }
    })

    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getbrandproductlist",
        data: {
            brandtitleid: brandtitleid,
            pagesize: pagesize
        },
        success: function (res) {  
            console.log(res);
            var htmlStr = template("marketTmp", res);
            $(".market ul").html( htmlStr );

            productid = $(".market ul li:first-child").data("productid");
            var imgUrl = $(".market ul li:first-child img").attr("src");
            console.log(imgUrl);
            $.ajax({
                type: "get",
                dataType: "json",
                url: "http://127.0.0.1:9090/api/getproductcom",
                data: {
                    productid: productid
                },
                success: function (res) {  
                    console.log(res);
                    var htmlStr = template("comTmp", res);
                    $(".updateCom ul").html( htmlStr );

                    $(".updateCom .imgBox img").attr("src", imgUrl);
                }
            })
        }
    })





})