var _player = document.getElementById("player"),
    _playlist = document.getElementById("playlist");
    
   
 
function playlistItemClick(clickedElement) {
    var selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");

    _player.src = clickedElement.getAttribute("data-ogg");
    _player.play();
}




function play() {
    var _player = document.getElementById("player");
   
    if (_player.paused) {
    _player.play();
  
    } else {
    _player.pause();
   
    }
    }

function playNext() {
    var selected = _playlist.querySelector("li.selected");
    if (selected && selected.nextElementSibling) {
        playlistItemClick(selected.nextElementSibling);
    }
}
 function playPrevious() {
    var selected = _playlist.querySelector("li.selected");
    if (selected && selected.previousElementSibling) {
        playlistItemClick(selected.previousElementSibling);
    }
}



_player.addEventListener("ended", playNext);
_playlist.addEventListener("click", function (e) {
     if (e.target && e.target.nodeName === "LI") {
        playlistItemClick(e.target);
    }


});




