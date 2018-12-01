$(function () {



    // 功能1：动态渲染标题数据
    $(function () {

        $.ajax({
            type: "get",
            url: "http://127.0.0.1:9090/api/getcategorytitle",
            dataType: "json",
            success: function (res) {
                var htmlStr = template("titleTmp", res);
                $("#category").html(htmlStr);
                var i = 0;
                // 功能2：点击details所在的a标签 显示下拉菜单
                $("#category").on("click", "#details>a", function () {
                    i++;
                    var titleId = $(this).parent().data("id");
                    $("#category li").removeClass("flag");
                    $(this).parent().addClass("flag");

                    // 详情
                    $.ajax({
                        type: "get",
                        url: "http://127.0.0.1:9090/api/getcategory",
                        data: {
                            titleid: titleId
                        },
                        dateType: "json",
                        success: function (res) {
                            console.log(res);
                            var htmlStr = template("detailsTmp", res);
                            $(".flag>.box").html( htmlStr );
                            if(i%2 == 0){
                                $(".box").empty();
                            }

                            // 获取分类ID
                            $("#category").on("click", ".categoryId", function () {  
                                var categoryId = $(this).data("id");
                                location.href = "goodsList.html?id=" + categoryId;
                            })
                        }
                    })
                   
                })
            }
        })



    })

})