const con = document.getElementById("coni1")
const noc = document.getElementById("coni2")
const rok = document.getElementById("biox")
const kor = document.getElementById("biox2")
const hw = document.getElementById("hw1w")


function Act(a){
    a.classList.add("act")
    a.classList.remove("box")
}


function Act2(a){
    a.classList.remove("act")
    a.classList.add("box")
}

function asd(a){
    var div = a
    div.style.display = div.style.display === "none"
    ? "block"
    : "none"
}

function asa(a){
    var div = a
    div.style.display = div.style.display === "none"
    ? "flex"
    : "none"
}
// menu console 

$(document).on("click", ".js-menu_toggle.closed", function (e) {
	e.preventDefault();
	$(".list_load, .list_item").stop();
	$(this).removeClass("closed").addClass("opened");

	$(".side_menu").css({ left: "0px" });

	var count = $(".list_item").length;
	$(".list_load").slideDown(count * 0.6 * 100);
	$(".list_item").each(function (i) {
		var thisLI = $(this);
		timeOut = 100 * i;
		setTimeout(function () {
			thisLI.css({
				opacity: "1",
				"margin-left": "0"
			});
		}, 100 * i);
	});
});

$(document).on("click", ".js-menu_toggle.opened", function (e) {
	e.preventDefault();
	$(".list_load, .list_item").stop();
	$(this).removeClass("opened").addClass("closed");

	$(".side_menu").css({ left: "-250px" }); 

	var count = $(".list_item").length;
	$(".list_item").css({
		opacity: "0",
		"margin-left": "-20px"
	});
	$(".list_load").slideUp(300);
});



// menu

// 1

function tu(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list0")
    Act2(undo)
    Act(unde)
    con.classList.remove("box")
    noc.classList.add("box") 
    rok.classList.add("box")
    kor.classList.remove("box")
}

// 2

function yu(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list1")
    Act2(undo)
    Act(unde)
    con.classList.remove("box")
    noc.classList.add("box")  
    rok.classList.add("box")
    kor.classList.remove("box")
}

// 3

function ysdu(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list2")
    Act2(undo)
    Act(unde)
    con.classList.remove("box")
    noc.classList.add("box")  
    rok.classList.add("box")
    kor.classList.remove("box")
}

// 4

function ysu(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list3")
    Act2(undo)
    Act(unde)
    con.classList.remove("box")
    noc.classList.add("box")  
    rok.classList.add("box")
    kor.classList.remove("box")
}




// 1 section
function tgr(){
    var box1 = document.getElementById("pp1")
    asd(box1)
}

// 2 section

function myFunction() {
    var box1 = document.getElementById("demo")
    asd(box1)
}

function mFunction() {
    var box1 = document.getElementById("de")
    asd(box1)
}

function Function() {
    var box1 = document.getElementById("dem")
    asd(box1)
}

function Fnction() {
    var box1 = document.getElementById("dm")
    asd(box1)
}

function Funtion() {
    var box1 = document.getElementById("em")
    asd(box1)
}

function my() {
    var box1 = document.getElementById("b1")
    asd(box1)
};

function Funn() {
    var box1 = document.getElementById("bbox")
    asd(box1)
};

function Fnn() {
    var box1 = document.getElementById("bgo")
    asd(box1)
};

function Nhh(){
    var box1 = document.getElementById("nbh")
    asd(box1)
}

// 3 section

function biop(){
    const box1 = document.getElementById("vgc")
    asd(box1)
}

function bop () {
    const box1 = document.getElementById("ajd")
    asd(box1)
}
// 4 section

(function(){
    'use strict';
  
    class Menu {
      constructor(settings) {
        this.menuRootNode = settings.menuRootNode;
        this.isOpened = false;
      }
      
      changeMenuState(menuState) {
        return this.isOpened = !menuState;
      }
      
      changeToggleHint(toggleHint, toggleNode) {
        toggleNode.textContent = toggleHint;
        return toggleHint; 
      }
    }
  
    const menuClassesNames = {
      rootClass: 'menu',
      activeClass: 'menu_activated',
      toggleClass: 'menu__toggle',
      toggleHintClass: 'menu__toggle-hint'
    }
    
    const jsMenuNode = document.querySelector(`.${menuClassesNames.rootClass}`);
    const demoMenu = new Menu ({
      menuRootNode: jsMenuNode
    });
    
    function getCurrentToggleHint(currentMenuState) {
      return (currentMenuState !== true) ? 'Open menu' : 'Close menu';
    }
    
    function toggleMenu(event) {
      
        let currentMenuState = demoMenu.changeMenuState(demoMenu.isOpened);
        let toggleHint = getCurrentToggleHint(currentMenuState);
        
        demoMenu.changeToggleHint(
          toggleHint, 
          demoMenu.menuRootNode.querySelector(`.${menuClassesNames.toggleHintClass}`)
        );
        demoMenu.menuRootNode.classList.toggle(`${menuClassesNames.activeClass}`);
        
        return currentMenuState;  
    }
    
    jsMenuNode.querySelector(`.${menuClassesNames.toggleClass}`).addEventListener('click', toggleMenu);
  })();


function sdf(){
    var box1 = document.getElementById("section4")
    asd(box1)
}


// 5

function ydu(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list4")
    Act2(undo)
    Act(unde)
    noc.classList.remove("box") 
    rok.classList.remove("box")
    kor.classList.add("box") 
}

// 6

function ys(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list5")
    Act2(undo)
    Act(unde)  
    noc.classList.remove("box")
    rok.classList.remove("box")
    kor.classList.add("box")
}

// 7

function yus(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list6")
    Act2(undo)
    Act(unde)
    noc.classList.remove("box")
    rok.classList.remove("box")
    kor.classList.add("box")

}

// 8

function yug(){
    undo = document.querySelector(".act")
    unde = document.getElementById("list7")
    Act2(undo)
    Act(unde)
    noc.classList.remove("box")
    rok.classList.remove("box")
    kor.classList.add("box")
}

const ao = document.getElementById("aood")
const asto = document.getElementById("aoid")
const yo = document.getElementById("oiod")

ao.addEventListener("mouseenter", function(){
    const w1 = document.querySelector(".dioo")
    const w2 = document.querySelector(".dooi")
    asd(w1)
    asd(w2)
})

ao.addEventListener("mouseleave", function(){
    const w1 = document.querySelector(".dioo")
    const w2 = document.querySelector(".dooi")
    asd(w1)
    asd(w2)
})

asto.addEventListener("mouseenter", function(){
    const w1 = document.querySelector(".dioo1")
    const w2 = document.querySelector(".dooi1")
    asd(w1)
    asd(w2)
})

asto.addEventListener("mouseleave", function(){
    const w1 = document.querySelector(".dioo1")
    const w2 = document.querySelector(".dooi1")
    asd(w1)
    asd(w2)
})

yo.addEventListener("mouseenter", function(){
    const w1 = document.querySelector(".dioo2")
    const w2 = document.querySelector(".dooi2")
    asd(w1)
    asd(w2)
})

yo.addEventListener("mouseleave", function(){
    const w1 = document.querySelector(".dioo2")
    const w2 = document.querySelector(".dooi2")
    asd(w1)
    asd(w2)
})

// 5 section
function sdaf(){
    var box1 = document.getElementById("deopi")
    asd(box1)    
}

function iwi(){
    var box1 = document.getElementById("flopre")
    asa(box1)    
}

// 6 section

function gfg(){
    var box1 = document.getElementById("giit")
    asd(box1) 
}
// 3 section
// 3 section
// 3 section


// 3 section

// const tabs = document.getElementById("tabs")
// const content = document.querySelectorAll(".content")

// const changeClass = el =>{
//     console.log(el);
//     for (let i = 0; i < tabs.children.length; i++){ 
//         tabs.children[i].classList.remove("active")
//     }
//     el.classList.add("active")
// }


// tabs.addEventListener("click", e =>{
//     const curTab = e.target.dataset.btn;
//     changeClass(e.target);
//     for(let i = 0; i < content.length;i++){
//         content[i].classList.remove("active")
//         if(content[i].dataset.content === curTab){
//             content[i].classList.add("active")
//         }
//     }
//})

hw.addEventListener("mouseenter", function (){
    const ti = document.getElementById("tit")
    ti.classList.remove("titi")
    ti.classList.add("riti")
})

hw.addEventListener("mouseleave", function (){
    const ti = document.getElementById("tit")
    ti.classList.remove("riti")
    ti.classList.add("titi")
})