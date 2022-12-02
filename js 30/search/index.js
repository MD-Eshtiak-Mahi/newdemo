console.log("hi")

 var indic =document.getElementsByTagName("kbd");
// console.log(indic);



function playSound(e){
    // var coll = e.srcElement.id;
    // console.log(coll[0])
// var audio =document.querySelectorall(audio);
// var audio =document.getElementById("ok");
//   console.log("this is id"+ " "+ e.srcElement.id)
//   console.log(audio.id)
//   console.log(coll)
//   console.log(e.srcElement.id)
//  coll[0].

//  audio.play();
var audio =document.getElementById("ok");
console.log(audio)

if (!audio) return;


audio.currentTime = 0;
audio.play();
}
function playSound1(e){

var audio =document.getElementById("okey");
console.log(audio)

if (!audio) return;


audio.currentTime = 0;
audio.play();
}

indic[0].addEventListener('click',playSound);
// window.addEventListener('click',playSound);
 indic[1].addEventListener('click',playSound1);

// indic[2].addEventListener('click',playSound);
// indic[3].addEventListener('click',playSound);

// indic[4].addEventListener('click',playSound);
// indic[5].addEventListener('click',playSound);



// console.log("this is className"+ " " + a.className)
// console.log("this is className"+ " " + b.className)
// console.log("this is className"+ " " + c.className)
// console.log("this is className"+ " " + d.className)
// console.log("this is className"+ " " + e.className)
// console.log("this is className"+ " " + f.className)

// var abc =a;
// console.log(abc) 
