var audio = new Audio('../sfx.mp3');

window.onload = () => {
    var s = Snap("#svg");
    var g = s.group();
    audio.autoplay = false;
    audio.volume = .1;

    Snap.load("assets/logo.svg", (data) => {
        g.append(data);
        g.hover(hoverover, hoverout);
        s.append(data);
    });

    var hoverover = function () { 
        g.animate({ transform: 'S1.18 t30,30' }, 300, mina.easeOut)
    };
    var hoverout = function () { 
        g.animate({ transform: 'S1' }, 500, mina.bounce)
        audio.currentTime = 0;
        audio.play();
    };
}

