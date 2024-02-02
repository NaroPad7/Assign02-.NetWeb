$(function(){
     // preload audio
     var toast = new Audio('toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();
        $('#name').html($(this).data('name'))
        $('#code').html($(this).data('code'))
        $('#liveToast').toast({ autohide: false }).toast('show');
    });
});