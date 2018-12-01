$(function () {  

    var areaid;
    var shopid;
    render();
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getgsshop",
        dataType: "json",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("info1Tmp", res);
            $(".info1Ul").html( htmlStr );


            $(".dropDown li:first-child").click(function () { 
                $(".info2Ul").removeClass("tog"); 
                $(".info1Ul").toggleClass("tog");
            })

            $(".down1Info li").click(function () {  
                $(".info1Ul").removeClass("tog");

            })

            $(".info1Ul").on("click", "li", function () {  
                shopid = $(this).data("shopid");
                render();
            })
        }
    })

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getgsshoparea",
        dataType: "json",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("info2Tmp", res);
            $(".info2Ul").html( htmlStr );

            $(".dropDown li:nth-child(2)").click(function () {  
                $(".info1Ul").removeClass("tog");
                $(".info2Ul").toggleClass("tog");

            })

            $(".down2Info li").click(function () {  
                $(".info2Ul").removeClass("tog");
            })

            $(".info2Ul").on("click", "li", function () {  
                areaid = $(this).data("areaid");
                render();
            })
        }
    })
    

    function render() {  
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getgsproduct",
            dataType: "json",
            data: {
                shopid: shopid || 0,
                areaid: areaid || 0
            },
            success: function (res) {  
                console.log(res);
                var htmlStr = template("infoTmp", res);
                $(".contentUl").html( htmlStr );
    
            }
        })
    }

})