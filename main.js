const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    focus = document.getElementById('focus'),
    name = document.getElementById('name');

function showTime(){
    let today = new Date();
        hour = today.getHours();
        minutes = today.getMinutes();
        seconds = today.getSeconds();

    //Manhã ou Tarde
    const amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;
    
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)}`;

    //chamar a cada segundo
    setTimeout(showTime, 1000);
}

function addZero(z){
    return (parseInt(z, 10) < 10 ? '0' : '') + z;  
}

//Trocar o backgroud
function changeBackground(){
    let today = new Date(),
        hour = today.getHours();
    
    if(hour < 12){
        document.body.style.backgroundImage="url('img/morning.jpg')";
        greeting.textContent = 'Good Morning!';
        document.body.style.color = 'white';
    }else if(hour < 18){
        document.body.style.backgroudImage="url('img/afternoon1.jpg')";
        greeting.textContent = 'Good Afternoon!';
    }else{
        document.body.style.backgroudImage="url(img/night.jpg)";
        greeting.textContent = 'Good Evening!';
        document.body.style.color = 'white';
    }
}

showTime();
changeBackground();