$(function () {  

    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getcoupon",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("infoTmp", res);
            $(".infoUl").html( htmlStr );


            $(".infoUl").on("click", "li", function () {  
                var couponid = $(this).data("id");
                location.href = "couponproduct.html?couponid=" + couponid;
            })
        }
    })

})