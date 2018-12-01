$(function() {
  // 功能1：导航栏 点击更多 加载第三行菜单 再次点击隐藏第三栏菜单
  $("#navUl").on("click", "li:nth-last-child(5)", function() {
    $(".mmm_nav li:nth-last-child(-n+4)").toggleClass("show");
  });

  // 功能2：动态渲染首页菜单导航栏数据
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getindexmenu",
    dataType: "json",
    success: function(res) {
      console.log(res);
      var htmlStr = template("indexTmp", res);
      $("#navUl").html(htmlStr);
    }
  });
});

$(function() {
  // 功能3：动态渲染首页折扣区域的数据
  $.ajax({
    type: "get",
    url: "http://127.0.0.1:9090/api/getmoneyctrl",
    dataType: "json",
    success: function(res) {
      console.log(res);
      var htmlStr = template("discountTmp", res);
      $("#discountUl").html(htmlStr);

    }
  });



});
