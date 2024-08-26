
let h=0;
let w=0;
let borw=0;
let bors=0;
let borc=0;
function rsz()
{
    h=document.getElementById("hh").value;
    w=document.getElementById("ww").value;
    borw=document.getElementById("bw").value;
    bors=document.getElementById("bs").value;
    borc=document.getElementById("bc").value;
    document.getElementById("img").style.height=h+"px";
    document.getElementById("img").style.width=w+"px";
    document.getElementById("img").style.borderWidth=borw+"px";
    document.getElementById("img").style.borderStyle=bors;
    document.getElementById("img").style.borderColor=borc;
}