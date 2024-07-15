var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var showOnScroll = $$('.show-on-scroll');
function checkAnimation(item){
    var rect = item.getClientRects();
    var hightScreen = window.innerHeight
    if(!(rect[0].bottom < 0 || rect[0].top > hightScreen)){
        item.classList.add('start');
        console.log('đã thêm class')
    }else{
        item.classList.remove('start');
        console.log("Đã xóa class")
    }
}

window.onscroll = function(){
    showOnScroll.forEach(item =>{
        checkAnimation(item);
    })
    
}
