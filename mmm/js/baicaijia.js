$(function () {  

    render(0);
    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType: "json",
        success: function (res) {  
            console.log(res);
            var htmlStr = template("navTmp", res);
            $(".navUl").html( htmlStr );

            $(".navUl li:first-child a").addClass("underline");

            $(".navUl").on("click", "li a", function () {
                $(".navUl li a").removeClass("underline");  
                $(this).addClass("underline")
            })

            $liWidth = $(".navUl li").width();
            $liWidth += 40
            ulWidth = $liWidth * res.result.length;
            $(".nav ul").css({
                "width": ulWidth+"px",
            });
        }
    })

    // 导航栏区域滚动
    $(window).load(function () {  
        new IScroll(".box", {
            scrollX: true,
            scrollY: true,
        });
    })

    $(".navUl").on("click", "li a", function () {
        titleid = $(this).parent().data("titleid");
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            dataType: "json",
            data: {
                titleid: titleid
            },
            success: function (res) {  
                console.log(res);
                var htmlStr = template("infoTmp", res);
                $(".content").html( htmlStr );

            }
        })
    })

    function render(titleid) {  
        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            dataType: "json",
            data: {
                titleid: titleid
            },
            success: function (res) {  
                console.log(res);
                var htmlStr = template("infoTmp", res);
                $(".content").html( htmlStr );

                var eles = $(".content .infoBox .remain i");
                for(var i = 0; i<= eles.length-1; i++){
                    var val = eles[i].innerText;
                    var str = eles[i].firstChild;
                    str.style.width = val;
                }


            }
        })
    }


    

})