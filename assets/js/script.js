carousel = (function(){
    var carr = document.querySelector('.carrousel');
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    var circles = document.querySelectorAll('.circles .circle');
    var circlesLength = circles.length;
    var currentCircle = circles[0];
    var counter = 0;
    var items = document.querySelectorAll('.carrousel div.slide');
    var itemsLength = items.length;
    var current = items[0];
    var myVar;
    
    
    function slide(direction) {
        current.classList.remove('current');
        currentCircle.classList.remove('active');
        counter = counter + direction;
        if(direction === -1 && counter < 0 ) {
            counter = itemsLength - 1;
        }
        if(direction === 1 && !items[counter]) {
            counter = 0;
        }
        current = items[counter];
        currentCircle = circles[counter];
        current.classList.add('current');
        currentCircle.classList.add('active');
        console.log("Slide Called!")
    }
    
    next.addEventListener('click', function() {
        slide(1);
    });
    
    prev.addEventListener('click', function() {
        slide(-1);
    });
    
    function sliding() {
        myVar = setInterval(function() {
            slide(1);
        }, 5000);
    };
    sliding();
    
    carr.addEventListener('mouseover', function() {
        clearInterval(myVar);
    });
    
    
    carr.addEventListener('mouseleave', function() {
        console.log("moseleaved!")
        sliding();
    });
    
})();