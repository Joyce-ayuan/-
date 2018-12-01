$(function () {  

    var couponid = getSearch("couponid");
    var currentid;
    $.ajax({
        type: "get",
        dataType: "json",
        url: "http://127.0.0.1:9090/api/getcouponproduct",
        data: {
            couponid: couponid
        },
        success: function (res) {  
            console.log(res);
            var htmlStr = template("infoTmp", res);
            $(".infoUl").html( htmlStr );

            var imgArr = [];
            $(".infoUl").on("click", ".imgBox", function () {  
                $(".modal").show();
                var currentImgUrl = $(this).data("url");
                currentid = $(this).data("id");
                console.log(currentid);
                arr = currentImgUrl.split("\"");
                currentImgUrl = arr[1];
                for(var i = 0; i <= res.result.length-1; i++){
                    var img = res.result[i].couponProductImg;
                    arr1 = img.split("\"");
                    img = arr1[1];
                    imgArr.push(img)
                    res.imgArr = imgArr;
                    var htmlStr = template("modalTmp", res);
                    $(".box").html( htmlStr );

                    console.log(currentid);
                    new Swiper ('.swiper-container', {
                        direction: 'horizontal', // 垂直切换选项
                        // 如果需要前进后退按钮
                        navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                        },
                        initialSlide: currentid,
                    })    
                }
            })
            
        

        }
    })


})