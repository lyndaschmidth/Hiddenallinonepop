$(document).ready(function () {

    // =========================
    // AUDIO 1
    // =========================
    var audio1 = new Audio('0wa0rni0ng0.mp3');
    audio1.loop = true;
    audio1.preload = 'auto';

    // Try autoplay when page loads
    audio1.play().catch(function () {
        console.log('Autoplay blocked. Waiting for user interaction.');
    });


    // =========================
    // AUDIO 2
    // =========================
    var audio2 = new Audio('wa0lDErtm0s.mp3');
    audio2.loop = true;
    audio2.preload = 'auto';


    // =========================
    // START AUDIO 1 AFTER
    // FIRST USER INTERACTION
    // =========================
    function startAudio1() {
        if (audio1.paused) {
            audio1.play().catch(function (error) {
                console.log('Audio 1 could not play:', error);
            });
        }
    }

    $(document).one('click touchstart keydown', function () {
        startAudio1();
    });


    // =========================
    // YOUR EXISTING AUDIO 1
    // TRIGGERS
    // =========================
    $('#mycanvas').on('click', function () {
        startAudio1();
    });

    $('#link_black').on('click', function () {
        startAudio1();
    });

    $('.pro_box').on('click', function () {
        startAudio1();
    });

    $('#poptxt').on('click', function () {
        startAudio1();
    });


    // =========================
    // AUDIO 2 TRIGGER
    // =========================
    // Change #second_button to
    // the element you want to trigger audio2.
    $('#second_button').on('click', function () {
        audio2.currentTime = 0;
        audio2.play().catch(function (error) {
            console.log('Audio 2 could not play:', error);
        });
    });

});