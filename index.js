"use strict";

const shareBtn = document.getElementById("share_btn");
const toolTip = document.getElementById("tool-tip");
const toolTipCloseBtn = document.getElementById("share_btn--close");

const handleShare = function(){
    toolTip.classList.toggle("hidden");
}
const handleRemoveShare = function(){
    toolTip.classList.add("hidden");
}

const activateShare = function(){
    shareBtn.addEventListener("click",handleShare)
    toolTipCloseBtn.addEventListener("click",handleRemoveShare)
}

activateShare();