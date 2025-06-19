for(var i =0; i <=document.querySelectorAll('.drum').length; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        if (buttonInnerHTML === 'w') {
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 'a') {
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 's') {
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 'd') {
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 'j') {
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 'l') {
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
        }
        else if (buttonInnerHTML === 'k') {
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
        }

    });
} 
