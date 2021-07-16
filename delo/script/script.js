var num = document.getElementById('num')
var num_last = document.getElementById('num_last')

function userActive() {
        setInterval(() => {
                var max = 170
                var min = 150
                var random = Math.floor(Math.random() * (max - min)) + min;
                num.innerHTML = random
        }, 5000);
        
}

function lastPlace() {
        var i = 10;
        var timerId = setInterval(function () {
                num_last.innerHTML = i
                if (i == 1) clearInterval(timerId);
                i--;
        }, 5000);
        
}

userActive()
lastPlace();