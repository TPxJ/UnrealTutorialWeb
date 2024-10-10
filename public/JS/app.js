var audio = document.getElementById("audio");
let music = document.getElementById("music")
const getstart = document.getElementById("getstart")

getstart.addEventListener("click",function(){
    getstart.classList.add("leftbarreverse")
})

function audioTog() {
   

    if(music.innerHTML === "music_off"){
        music.innerHTML = "audiotrack"
        audio.style.display = 'block'
    }
    else if(music.innerHTML === "audiotrack"){
        music.innerHTML = "music_off"
        audio.style.display = 'none'
    }
    
}

