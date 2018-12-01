$(function () {  
    
    var pageSize;
    var totalCount;
    var totalPages;
    var currentPage = 1;
    var productid;
    render();
    setPages(currentPage-1);
    function render() {  
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            data: {
                pageid: currentPage-1
            },
            success: function (res) {  
                console.log(res);
                var htmlStr = template("contentTmp", res);
                $("#discountUl").html(htmlStr);

                
                $("#selectPage option").each(function (index, ele) {  
                    var num = $(ele).data('page');
                    if(num == currentPage){
                        currentPage = num;
                        $(this).prop("selected", true);
                    }
                })
            }
        })
    }


    function setPages(currentPage) {  
        $.ajax({
            type: "get",
            dataType: "json",
            url: "http://127.0.0.1:9090/api/getmoneyctrl",
            data: {
                pageid: currentPage
            },
            success: function (res) {
                pageSize = res.pagesize;
                totalCount = res.totalCount;
                totalPages = Math.ceil(totalCount / pageSize);
                var str = '';
                var count = currentPage + 1;
                for(var i = 1; i <= totalPages; i++){
                    str += "<option data-page="+ i +">" + count++ + "/" + totalPages + "</option>";
                    $("#selectPage").html(str);
                }
            }
        })
    }

    $("#previous").click(function () {  
        if(currentPage <= 1){
            return false;
        }
        currentPage--;
        render(currentPage);
    })

    $("#next").click(function () {  
        if(currentPage >= totalPages ){
            return false;
        }
        currentPage++;
        render(currentPage);
    })

    $("#selectPage").change(function () {  
        var current = $(this).children('option:selected').val(); 
        current = current.split("/")[0];
        currentPage = current;
        render(currentPage);
    })




    $("#discountUl").on("click", "li", function () {  
        productid = $(this).data("id");
        location.href = "monctrlGoods.html?productid="+ productid;
    })


})