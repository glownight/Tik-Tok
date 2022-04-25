$(document).ready(function() {
    //
    const video = $("#video-tvc")[0];


    //视频声音开关
    $(".unmute").click(function() {
        if ($(this).hasClass("mute")) {
            video.muted = true;
        } else {
            video.muted = false;
        }
        $(".unmute").toggleClass("mute")
    })


    //年份更新
    $("#copyyear").text((new Date()).getFullYear());


})