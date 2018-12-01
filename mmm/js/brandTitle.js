$(function () {  

    $.ajax({

        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getbrandtitle",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("titleTmp", res);
            $("#category").html( htmlStr );

            $("#category").on("click", "li", function () {  
                var brandtitleid = $(this).data("brandtitleid");
                location.href = "brand.html?brandtitleid=" + brandtitleid;
            })
        }

    })

})