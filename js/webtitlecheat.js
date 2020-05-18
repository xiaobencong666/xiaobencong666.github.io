// 浏览器搞笑标题
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/bad1.png");
        document.title = '╭(°A°`)╮ 页面崩溃啦~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/good1.png");
        document.title = '٩(๑❛ᴗ❛๑)۶ 噫又好啦~';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
