$(document).ready(function(){
    
    var sessionTimeClock = false;
    var breakTimeClock = false;
    var counter;
    var display = "00:00";
    var myVar;
    var myVar2;
    
    /*
    code for sound found on stack overflow answer by Paul Fournel:
    http://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
    */
    
    function beep() {
    var snd = new  Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}
    
    // clock buttons 
    
    $(".session-time-clock").click(function(){
        // changes the color to make it flash, add a duration and then change it back
        $(".num-button").css("background-color", "#BCC6CC");
        function myFunction() {
            myVar = setTimeout(changeBackground, 500);
        }
        function changeBackground() {
            $(".num-button").css("background-color", "#575e62");
        }
        myFunction();
        sessionTimeClock = true;
        breakTimeClock = false;
        display = "00:00";
        $(".session-time-clock").text(display);
        counter = 4;
    });
    
    $(".break-time-clock").click(function(){
        $(".num-button").css("background-color", "#BCC6CC");
        function myFunction() {
            myVar = setTimeout(changeBackground, 500);
        }
        function changeBackground() {
            $(".num-button").css("background-color", "#575e62");
        }
        myFunction();
        breakTimeClock = true;
        sessionTimeClock = false;
        display = "00:00";
        $(".break-time-clock").text(display);
        counter = 4;
    });
        
    $("button").click(function(){
            // gets button text label
            var input = $(this).text();
            // if, else if chain for calculator functions
            if(input !== "Start" && input !== "Pause" && input !== "Reset" && counter > -1 && breakTimeClock === false && sessionTimeClock === true)
                {
                    if(counter === 4)
                        {
                            display = display.slice(0,counter) + input;
                        }
                    if(counter === 3)
                        {
                            display = "00:" + display.slice(4) + input;
                        }
                    if(counter === 2)
                        {
                            counter--;
                            display = "0" + display.slice(3,4) + ":" + display.slice(4,5) + input;
                            
                        }
                    if(counter === 0)
                        {
                            display = display.slice(1,2) + display.slice(3,4) + ":" + display.slice(4,5) + input;
                        }
                    counter--;
                    $(".session-time-clock").text(display);
                }
        }); 
    
    $("button").click(function(){
            // gets button text label
            var input = $(this).text();
            // if, else if chain for calculator functions
            if(input !== "Start" && input !== "Pause" && input !== "Reset" && counter > -1 && breakTimeClock === true && sessionTimeClock === false)
                {
                    if(counter === 4)
                        {
                            display = display.slice(0,counter) + input;
                        }
                    if(counter === 3)
                        {
                            display = "00:" + display.slice(4) + input;
                        }
                    if(counter === 2)
                        {
                            counter--;
                            display = "0" + display.slice(3,4) + ":" + display.slice(4,5) + input;
                            
                        }
                    if(counter === 0)
                        {
                            display = display.slice(1,2) + display.slice(3,4) + ":" + display.slice(4,5) + input;
                        }
                    counter--;
                    $(".break-time-clock").text(display);
                }
        }); 
    
    // start pause reset buttons
    
    $("button").click(function(){
       
        var input = $(this).text();
        if(input === "Start" && $(".session-time-clock").text() !== "00:00" && $(".break-time-clock").text() !== "00:00")
            {
                $(".session-time-clock").css("pointer-events", "none");
                $(".break-time-clock").css("pointer-events", "none");
                var sessionTimer = $(".session-time-clock").text();
                var breakTimer = $(".break-time-clock").text();
                var breakSeconds = parseInt(breakTimer.slice(0,2),10)*60 + parseInt(breakTimer.slice(3,5),10);
                var sessionSeconds = parseInt(sessionTimer.slice(0,2),10)*60 + parseInt(sessionTimer.slice(3,5),10);
                var count1 = 0;
                var count2 = 0;
                
                myVar = setInterval(myTimer, 1000);
                
                function myTimer() {
                    $(".session-time-clock").css("color", "rgba(76, 175, 80, 1.0)")
                    sessionSeconds--;
                    var minutes = Math.floor(sessionSeconds/60);
                    if(minutes < 10)
                        {
                            minutes = "0" + minutes;
                        }
                    if(minutes < 1)
                        {
                            minutes = "00";
                        }
                    var seconds = sessionSeconds - minutes *60;
                    if(seconds < 10)
                        {
                            seconds = "0" + seconds;
                        }
                    var time = minutes + ":" + seconds;
                    count1++;
                    var greenClockSize = Math.floor(sessionSeconds/(sessionSeconds+count1)*100);
                    var greenTransition = greenClockSize/100;
                    $(".circle-clock").css('background-color','rgba(76, 175, 80, ' + greenTransition + ')');
                    if(greenClockSize < 100 && greenClockSize > 9)
                        {
                            $(".percent-display").css("margin-left", "135px");
                        }
                    if(greenClockSize < 9)
                        {
                            $(".percent-display").css("margin-left", "145px");
                        }
                    $(".percent-display").text(greenClockSize + "%");
                    $(".session-time-clock").text(time);
                    if(minutes === "00" && seconds === "00")
                        {
                            clearInterval(myVar);
                            $(".session-time-clock").text("00:00");
                            minutes = Math.floor(count1/60);
                            if(minutes < 10)
                                {
                                    minutes = "0" + minutes;
                                }
                            if(minutes < 1)
                                {
                                    minutes = "00";
                                }
                            seconds = count1 - minutes *60;
                            if(seconds < 10)
                                {
                                    seconds = "0" + seconds;
                                }
                            time = minutes + ":" + seconds;
                            var zero1 = function()
                            {
                                $(".session-time-clock").text(time);
                                beep();
                                $(".session-time-clock").css("color", "rgba(188, 198, 204, 1.0)")
                                myVar2 = setInterval(myTimer2, 1000);
                                sessionSeconds = count1;
                                count1 = 0;
                            };
                            setTimeout(zero1, 800);
                        }
                    $("button").click(function(){
                        var input = $(this).text();
                        if(input === "Pause")
                        {
                            clearInterval(myVar);
                            clearInterval(myVar2);
                        }
                        if(input === "Reset")
                        {
                            clearInterval(myVar);
                            clearInterval(myVar2);
                            display = "00:00";
                            $(".session-time-clock").text(display);
                            $(".break-time-clock").text(display);
                            breakTimer = "00:00";
                            sessionTimer = "00:00";
                            $(".percent-display").text("100%");
                            $(".circle-clock").css('background-color','rgba(76, 175, 80, 1.0)');
                            $(".session-time-clock").css("color", "rgba(188, 198, 204, 1.0)")
                            $(".break-time-clock").css("color", "rgba(188, 198, 204, 1.0)")
                            $(".session-time-clock").css("pointer-events", "auto");
                            $(".break-time-clock").css("pointer-events", "auto");
                            $(".percent-display").css("margin-left", "125px");
                        }
                    });
                }
                
                function myTimer2() {
                    $(".break-time-clock").css("color", "rgba(196, 0, 0, 1.0)")
                    breakSeconds--;
                    var minutes = Math.floor(breakSeconds/60);
                    if(minutes < 10)
                        {
                            minutes = "0" + minutes;
                        }
                    if(minutes < 1)
                        {
                            minutes = "00";
                        }
                    var seconds = breakSeconds - minutes *60;
                    if(seconds < 10)
                        {
                            seconds = "0" + seconds;
                        }
                    var time = minutes + ":" + seconds;
                    count2++;
                    var redClockSize = Math.floor(breakSeconds/(breakSeconds+count2)*100);
                    var redTransition = redClockSize/100;
                    $(".circle-clock").css('background-color','rgba(196, 0, 0, ' + redTransition + ')');
                    $(".percent-display").text(redClockSize + "%");
                    $(".break-time-clock").text(time);
                    if(minutes === "00" && seconds === "00")
                        {
                            clearInterval(myVar2);
                            $(".break-time-clock").text("00:00");
                            minutes = Math.floor(count2/60);
                            if(minutes < 10)
                                {
                                    minutes = "0" + minutes;
                                }
                            if(minutes < 1)
                                {
                                    minutes = "00";
                                }
                            seconds = count2 - minutes *60;
                            if(seconds < 10)
                                {
                                    seconds = "0" + seconds;
                                }
                            time = minutes + ":" + seconds;
                            var zero2 = function()
                            {
                                $(".break-time-clock").text(time);
                                beep();
                                $(".break-time-clock").css("color", "rgba(188, 198, 204, 1.0)")
                                myVar = setInterval(myTimer, 1000);
                                breakSeconds = count2;
                                count2 = 0;
                            };
                            setTimeout(zero2, 800);
                            
                        }
                    $("button").click(function(){
                        var input = $(this).text();
                        if(input === "Pause")
                        {
                            clearInterval(myVar);
                            clearInterval(myVar2);
                        }
                        if(input === "Reset")
                        {
                            clearInterval(myVar);
                            clearInterval(myVar2);
                            display = "00:00";
                            $(".session-time-clock").text(display);
                            $(".break-time-clock").text(display);
                            breakTimer = "00:00";
                            sessionTimer = "00:00";
                            $(".percent-display").text("100%");
                            $(".circle-clock").css('background-color','rgba(76, 175, 80, 1.0)');
                            $(".session-time-clock").css("color", "rgba(188, 198, 204, 1.0)");
                            $(".break-time-clock").css("color", "rgba(188, 198, 204, 1.0)");
                            $(".session-time-clock").css("pointer-events", "auto");
                            $(".break-time-clock").css("pointer-events", "auto");
                            $(".percent-display").css("margin-left", "125px");
                        }
                    });
                }
            }
    });
    
});