$(function () {

    $.ajax({
        type: "get",
        url: "http://127.0.0.1:9090/api/getinlanddiscount",
        dataType: "json",
        success: function (res) {
            console.log(res);

            for(var i = 4; i<=res.result.length-1; i++){
                res.result[i].productImg = res.result[i].productImg.replace("src","data-original");
            }

            var htmlStr = template("mainTmp", res);
            $(".mainUl").html(htmlStr); 

            $(".imgBox>img").css({
                "width": "280px",
                "height": "280px"
            })

            $(".imgBox>img").lazyload({
                placeholder: "images/lazy.gif",  // 占位的图片
            })

            $(".mainUl").on("click", "li", function () {  
                var productid = $(this).data("priductid");
                location.href = "discounDetails.html?productid=" + productid;
            })
        }
    })


    


})


// window.onscroll = function () {
//     if (window.pageYOffset === 300) {

//     }
// }

// window.addEventListener(scroll,function (e) {
//     e = e || window.event;
//     if (e.wheelDelta) { 

//         if (e.wheelDelta < 0) {
//             alert("滑轮向下滚动");
//         }
//     }
//     // //给页面绑定滑轮滚动事件
//     // if (document.addEventListener) {
//     //     document.addEventListener('DOMMouseScroll', scrollFunc, false);
//     //   }
//     // //滚动滑轮触发scrollFunc方法
//     //  window.onmousewheel = document.onmousewheel = scrollFunc;
// }) 