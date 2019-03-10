window.onload = function(){
    document.getElementById("footer").style.animation='blink 10s ease infinite forwards';
    var menu = document.getElementById("menu");
    var container = document.getElementById("container");
    var item = document.getElementsByClassName('item');
    document.getElementById("menu-bar").addEventListener("mouseover",function(){
        menu.style.visibility='visible';
        container.style.left='250px';
        for (var i = 0; i < item.length; i++) { item[i].style.marginLeft = '10px'; }
        menu.addEventListener("mouseout", function(){
            menu.style.visibility='hidden';
            container.style.left='0px';
            for (var i = 0; i < item.length; i++) { item[i].style.marginLeft = '200px'; }
        })
    });
}