function trocarCorAtv (){
    const activeButton = document.getElementById("changerActiveColor");

    const isYellow = activeButton.classList.contains('btn-active-green');

    activeButton.classList.toggle('btn-active-green', !isYellow)
    
}