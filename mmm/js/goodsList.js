$(function () {

    var categoryId = getSearch("id");
    var currentPage = 1;
    var totalNum;
    var currentId;
    var productName;
    var categoryName;
    $.ajax({
        url: "http://127.0.0.1:9090/api/getcategorybyid",
        dataType: "json",
        type: "get",
        data: "categoryid=" + categoryId,
        success: function (res) {
            var htmlStr = template("breadTmp", res);
            $(".breadcrumb>p").html(htmlStr);
            categoryName = $(".breadcrumb span").text();
            console.log(categoryName);
        }
    })

    render();
    setPages();

    function render(page) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist",
            dataType: "json",
            type: "get",
            data: {
                categoryid: categoryId,
                pageid: page || 1
            },
            success: function (res) {
                console.log(res);
                var htmlStr = template("goodsTmp", res);
                $(".details>ul").html(htmlStr);
                $(".details").on("click", "li", function () {
                    currentId = $(this).data("id");
                    productName = $(this).data("productname");
                    location.href = "details.html?productId=" + currentId + "&productName=" + productName + "&categoryName=" + categoryName;
                })
            }
        })
    }

    function setPages(page) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist",
            dataType: "json",
            type: "get",
            data: {
                categoryid: categoryId,
                pageid: currentPage
            },
            success: function (res) {
                totalNum = res.totalCount;
                $("#pagination").pagination(totalNum, {
                    prev_text: "< 上一页",
                    next_text: "下一页 >",
                    num_edge_entries: 1, //两侧首尾分页条目数
                    num_display_entries: 5, //连续分页主体部分分页条目数
                    current_page: page-1 || 0, //当前页索引
                    load_first_page: false,
                    callback: function (index) {
                        currentPage = index + 1;
                        render(currenPage);
                    }
                });
            }
        })
    }



})