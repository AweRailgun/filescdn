//动态点击打勾显示  不点击打勾隐藏
function energyTypeCheck_1(chk) {
    if(chk.checked){ //显示
        document.getElementById("RSS").style.display = "block";
    }else{      //隐藏
        document.getElementById("RSS").style.display = "none";
    }
}
function energyTypeCheck_2(chk) {
    if(chk.checked){ //显示
        document.getElementById("SSL").style.display = "block";
    }else{      //隐藏
        document.getElementById("SSL").style.display = "none";
    }
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)})