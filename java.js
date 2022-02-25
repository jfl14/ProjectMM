let btn = document.querySelectorAll(".btn");
let timebox = document.getElementById("timebox");
let pointbox = document.getElementById("pointbox");
let mainbox = document.getElementById("mainbox");
let cardarr = [ "sumatra", 
                "jakarta", 
                "jabar", 
                "jateng", 
                "bali", 
                "kalimantan", 
                "sulawesi", 
                "papua", 
                "sumatra", 
                "jakarta", 
                "jabar", 
                "jateng", 
                "bali", 
                "kalimantan", 
                "sulawesi", 
                "papua" ];
let cardss = [
                'url(Assets/RumahGadang.jpg)',
                'url(Assets/Ondel2.jpg)',
                'url(Assets/Karedok.jpg)',
                'url(Assets/Getuk.jpg)',
                'url(Assets/Laklak.jpg)',
                'url(Assets/SotoBanjar.jpg)',
                'url(Assets/Anoa.jpg)',
                'url(Assets/Cendrawasih.jpg)',
                'url(Assets/Rendang.jpg)',
                'url(Assets/KerakTelur.jpg)',
                'url(Assets/Jaipong.jpg)',
                'url(Assets/Joglo.jpg)',
                'url(Assets/Mekotekan.jpg)',
                'url(Assets/Mandau.jpg)',
                'url(Assets/Tongkonan.jpg)',
                'url(Assets/Papeda.jpg)'
                                              ]
let a, b;
let c = 0;
let mains = document.getElementById("mainboxs");
let firstcard, secondcard;
let checkcard = [];
let win = [];
let start = false;
let timestart;
let point = 0;
let playbtn = document.getElementById("startButton");
let backBtn = document.getElementById("back2");
let mainsec = document.getElementById("main");
let startsec = document.getElementById("start");
let clear;
let _clear;
var sound = document.getElementById("backsound")

$(function(){
    $("#soundOff").hide()
    $("#soundOff2").hide()
    $("#tutor").hide()
       
    $("#soundOn").click(function(){
        $("#soundOff").show()
        $("#soundOn").hide()
        $("#soundOff2").show()
        $("#soundOn2").hide()
        sound.pause()
    })

    $("#soundOff").click(function(){
        $("#soundOff").hide()
        $("#soundOn").show()
        $("#soundOff2").hide()
        $("#soundOn2").show()
        sound.play()
    })

    $("#soundOn2").click(function(){
        $("#soundOff").show()
        $("#soundOn").hide()
        $("#soundOff2").show()
        $("#soundOn2").hide()
        sound.pause()
    })

    $("#soundOff2").click(function(){
        $("#soundOff").hide()
        $("#soundOn").show()
        $("#soundOff2").hide()
        $("#soundOn2").show()
        sound.play()
    })

    $(".tutorial").click(function(e){
        e.preventDefault()
        $("#tutor").show()
        $(".startContent").hide()
    })

    $("#backbutton").click(function(e){
        e.preventDefault()
        $(".startContent").show()
        $("#tutor").hide()
    })

    $("playbtn").click(function(e){
        e.preventDefault() 
        $(".startContent").hide()
        $("#tutor").hide()
    })

    $("back2").click(function(e){
        $(".startContent").hide()
        $("#tutor").hide()
    })
})

playbtn.addEventListener("click", function() {
    // startsec.style.display = "none";
    // mainsec.style.display == "flex"
    if (startsec.style.display != "none") {
        startsec.style.display = "none"
    }
    if (mainsec.style.display != "flex") {
        mainsec.style.display = "flex"
    }
    sound.play()

})

function second() {

    a = this;
    console.log(a);
    let b = a.getAttribute("id");

    if(b === "btn1"){
        timebox.innerHTML = 90;
        document.getElementById("btn2").disabled = true;
        document.getElementById("btn3").disabled = true;
    }else if(b === "btn2"){
        timebox.innerHTML = 60;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn3").disabled = true;
    }else if(b === "btn3"){
        timebox.innerHTML = 30;
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;
    }

    btn.forEach((element, index) => {
        console.log(btn);
        element.removeEventListener("click", second);
    });

    _clear = setInterval(() => {
        timebox.innerHTML -= 1;

        setTimeout(() => {
            if (timebox.innerHTML < 0) {
                if (win.length != 0 || win.length == 0)

                    clearInterval(_clear)
            }
        }, 500)
    }, 1000)
    mains.style.animationName = "mys";
    mains.style.animationDuration = "3s";

}


btn.forEach((element, index) => {
    element.addEventListener("click", second);

});

 
clear = setInterval(() => {
    if (timebox.innerHTML < 0) {


        setTimeout(() => {
            if (win.length != 0 || win.length == 0) {
                mains.innerHTML = "Time up!";
                mains.style.display = "flex";

                mains.style.animationName = "my";
                mains.style.animationDuration = "2s";
                timebox.innerHTML = "0";
                clearInterval(clear)
            }
        }, 1500)


        
    }
}, 1000);


function main() {
    for (let i = 0; i < 16; i++) {
        let boxs = document.createElement("div");
        boxs.setAttribute("id", i)
        boxs.className = "box";
        mainbox.appendChild(boxs)
    }
}
main()


function reassemble() {
    let i, y, z, a, b;
    for (i = 0; i < cardarr.length; i++) {
        y = cardarr[i];
        a = cardss[i];
        z = Math.floor(Math.random() * 16);
        cardss[i] = cardss[z]
        cardarr[i] = cardarr[z];
        cardss[z] = a;
        cardarr[z] = y;
    }
}
reassemble()



function play(e) {
    if (checkcard.length < 2) {
        firstcard = this;
        let aa;
        aa = firstcard.getAttribute("id");

        firstcard.style.backgroundImage = cardss[aa];
        checkcard.push(firstcard)
    }


    if (checkcard.length == 2) {

        let a, b, c, d;
        a = checkcard[0].getAttribute("id");
        b = checkcard[1].getAttribute("id");
        c = checkcard[0].innerHTML;
        d = checkcard[1].innerHTML;

        if (a == b) {
            checkcard[0].style.backgroundImage = `url("Assets/map-3798132_1280.webp")`;
            checkcard = [];
        }
        if (a != b) {

            if (c == d) {
                checkcard[0].removeEventListener("click", play)
                checkcard[1].removeEventListener("click", play)
                win.push(checkcard[0])
                win.push(checkcard[1])
                console.log(win)
                if (win.length == 16) {
                    mains.innerHTML = "You win!";
                    mains.style.display = "flex";

                    mains.style.animationName = "my";
                    mains.style.animationDuration = "3s";
                    setTimeout(() => {
                        if (timebox.innerText.length != 0) {
                            window.location.reload();
                        }
                    }, 5000)
                }

                point += 1;
                pointbox.innerHTML = point;
                checkcard = [];
            } else {
                setTimeout(() => {
                    checkcard[0].style.backgroundImage = `url("Assets/map-3798132_1280.webp")`;
                    checkcard[1].style.backgroundImage = `url("Assets/map-3798132_1280.webp")`;
                    checkcard = [];
                }, 1000)

            }

        }
    }




}






let card = document.querySelectorAll(".box");
card.forEach((element, index) => {
    element.innerText = cardarr[index]
    element.addEventListener("click", play);

});
