document.querySelectorAll(".dayFalse").forEach(link => {
    link.setAttribute('title', 'SOON');
    link.addEventListener('click', function(event){
        event.preventDefault();
    });
    
});

function showResolution(){
    document.getElementById('resolution').style.display='block';
    document.getElementById('removeBtn').style.display = 'block';
    document.getElementById('showBtn').style.display = 'none';
    return;
}

function removeResolution(){
    document.getElementById('resolution').style.display='none';
    document.getElementById('removeBtn').style.display = 'none';
    document.getElementById('showBtn').style.display = 'block';
    return;
}


function updateLinkText(){
    document.querySelectorAll('.header__nav__item').forEach((link, index) => {
        if (window.matchMedia("(max-width: 700px)").matches){
            link.textContent = index + 1;
        } else {
            link.textContent = `Day ${index + 1}`;
        }
        
    })
}

updateLinkText();
window.addEventListener("resize", updateLinkText);
