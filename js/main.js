$(function () {
    var num = 0;
    $(".active").css("display","block");
    var timer = null;
    timer = setInterval(autoPlay,5000);
    function autoPlay(){
        num ++;
        if(num > $(".slider ul li").length -1){
            num = 0;
        }
        $(".slider ul li").eq(num).fadeIn(1000).siblings().fadeOut(1000);
        console.log(num);
    }
    // 鼠标移到指定焦点显示该焦点对应图片
    $(".slider ol li").mouseenter(function () {
        var idx = $(this).index();
        $(".slider ul li").eq(idx).fadeIn(1000).siblings().fadeOut(1000);
        num = idx; // 鼠标离开焦点后从该焦点自动播放
    })
    $(".slider").mouseenter(function () {
        clearInterval(timer);
    });
    $(".slider").mouseleave(function () {
        clearInterval(timer);
        timer = setInterval(autoPlay,5000);
    });
})