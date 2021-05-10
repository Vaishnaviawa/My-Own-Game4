const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg;
var gc1, gc1Img, gc2, gc2Img, gg1, gg1Img, gg2, gg2Img, mr1, mr1Img, mr2, mr2Img, sol1, sol1Img, sol2, sol2Img;
var sh1, sh1Img, sh2, sh2Img, sh3, sh3Img, sh4, sh4Img, sh5, sh5Img, wcd1, wcd1Img, wcd2, wcd2Img, wcd3, wcd3Img;
var ml1, ml1Img, ml2, ml2Img, ml3, ml3Img, ml4, ml4Img, tk1, tk1Img, tk2, tk2Img, tk3, tk3Img, tk4, tk4Img;
var mp1, mp1Img, mp2, mp2Img, mp3, mp3Img, mp4, mp4Img, mp5, mp5Img, mp6, mp6Img, lt1, lt1Img, lt2, lt2Img;
var w1, w1Img, w2, w2Img, ghl1, ghl1Img, ghl2, ghl2Img, hbc1, hbc1Img, c1, c1Img, c2, c2Img, c3, c3Img;
var aw1, aw1Img, aw2, aw2Img, shb1, shb1Img, shb2, shb2Img, soh1, soh1Img, soh2, soh2Img, ul1, ul1Img, ul2, ul2Img;
var tm1, tm1Img, tm2, tm2Img, tm3, tm3Img, vvt1, vvt1Img, rf1, rf1Img, qm1, qm1Img, gt1, gt1Img, cst1, cst1Img;

function preload(){
    //USA
    gc1Img = loadAnimation("USA/grand canyon1.png");
    gc2Img = loadAnimation("USA/grand canyon2.png");
    gg1Img = loadAnimation("USA/golden gate bridge1.png");
    gg2Img = loadAnimation("USA/golden gate bridge2.png");
    mr1Img = loadAnimation("USA/mount rushmore1.png");
    mr2Img = loadAnimation("USA/mount rushmore2.png");
    sol1Img = loadAnimation("USA/statue of liberty1.png");
    sol2Img = loadAnimation("USA/statue of liberty2.png");
    //UK
    sh1Img = loadAnimation("UK/stonehenge1.png");
    sh2Img = loadAnimation("UK/stonehenge2.png");
    sh3Img = loadAnimation("UK/stonehenge3.png");
    sh4Img = loadAnimation("UK/stonehenge4.png");
    sh5Img = loadAnimation("UK/stonehenge5.png");
    wcd1Img = loadAnimation("UK/white cliffs of dover1.png");
    wcd2Img = loadAnimation("UK/white cliffs of dover2.png");
    wcd3Img = loadAnimation("UK/white cliffs of dover3.png");
    //Russia
    ml1Img = loadAnimation("Russia/mystical lake1.png");
    ml2Img = loadAnimation("Russia/mystical lake2.png");
    ml3Img = loadAnimation("Russia/mystical lake3.png");
    ml4Img = loadAnimation("Russia/mystical lake4.png");
    tk1Img = loadAnimation("Russia/the kremlin1.png");
    tk2Img = loadAnimation("Russia/the kremlin2.png");
    tk3Img = loadAnimation("Russia/the kremlin3.png");
    tk4Img = loadAnimation("Russia/the kremlin4.png");
    //Peru
    lt1Img = loadAnimation("Peru/lake titicaca peru1.png");
    lt2Img = loadAnimation("Peru/lake titicaca peru2.png");
    mp1Img = loadAnimation("Peru/macchu picchu1.png");
    mp2Img = loadAnimation("Peru/macchu picchu2.png");
    mp3Img = loadAnimation("Peru/macchu picchu3.png");
    mp4Img = loadAnimation("Peru/macchu picchu4.png");
    mp5Img = loadAnimation("Peru/macchu picchu5.png");
    mp6Img = loadAnimation("Peru/macchu picchu6.png");
    //Bermuda
    w1Img = loadAnimation("Bermuda/bermuda1.png");
    w2Img = loadAnimation("Bermuda/bermuda2.png");
    hbc1Img = loadAnimation("Bermuda/horseshoe bay cove1.png");
    c1Img = loadAnimation("Bermuda/crystal and fantasy caves bermuda1.png");
    c2Img = loadAnimation("Bermuda/caves bermuda2.png");
    c3Img = loadAnimation("Bermuda/caves bermuda3.png");
    ghl1Img = loadAnimation("Bermuda/gibbs hill lighthouse1.png");
    ghl2Img = loadAnimation("Bermuda/gibbs hill lighthouse2.png");
    //Australia
    aw1Img = loadAnimation("Australia/australia1.png");
    aw2Img = loadAnimation("Australia/australia2.png");
    shb1Img = loadAnimation("Australia/sydney harbour bridge1.png");
    shb2Img = loadAnimation("Australia/sydney harbour bridge2.png");
    soh1Img = loadAnimation("Australia/sydney opera house1.png");
    soh2Img = loadAnimation("Australia/sydney opera house2.png");
    ul1Img = loadAnimation("Australia/uluru1.png");
    ul2Img = loadAnimation("Australia/uluru2.png");
    //India
    tm1Img = loadAnimation("India/tajmahal1.png");
    tm2Img = loadAnimation("India/tajmahal2.png");
    tm3Img = loadAnimation("India/tajmahal3.png");
    vvt1Img = loadAnimation("India/vijay vitthala temple1.png");
    rf1Img = loadAnimation("India/red fort1.png");
    qm1Img = loadAnimation("India/qutub minar1.png");
    gt1Img = loadAnimation("India/golden temple1.png");
    cst1Img = loadAnimation("India/chatrapati shivaji terminus1.png");
}

function setup(){
    createCanvas(1500, 800);
    engine = Engine.create();
    world = engine.world;

    gc1 = createSprite(500, 400);
    gc1.addAnimation("background", gc1Img);

}

function draw(){
    background(0);

    // if (keyCode === 39){
    //     gc1.changeAnimation("background", gc2Img);
        // gc1.changeImage("background", gc3Img);
        // gc1.changeImage("background", gc4Img);
        // gc1.changeImage("background", gc5Img);
        // gc1.changeImage("background", gc6Img);
    // }

    drawSprites();

    // grandCanyon();

    // noStroke();
    // textSize(45);
    // fill("white");
    // text("Any idea what this place is?", 350, 100);

    // S = new Letter("S", 30, 400);
    // S.display();
    // textSize(20);
    // fill("white");
    // text("U", 30, 400);
    // textSize(20);
    // fill("white");
    // text("N", 300, 40);
    // textSize(20);
    // fill("white");
    // text("I", 330, 400);
    // textSize(20);
    // fill("white");
    // text("T", 30, 400);
    // textSize(20);
    // fill("white");
    // text("E", 300, 40);
    // textSize(20);
    // fill("white");
    // text("D", 330, 400);
    // textSize(20);
    // fill("white");
    // text("S", 30, 400);
    // textSize(20);
    // fill("white");
    // text("T", 300, 40);
    // textSize(20);
    // fill("white");
    // text("A", 330, 400);
    // textSize(20);
    // fill("white");
    // text("T", 30, 400);
    // textSize(20);
    // fill("white");
    // text("E", 300, 40);
    // textSize(20);
    // fill("white");
    // text("S", 330, 400);

    //UK
    // textSize(20);
    // fill("white");
    // text("U", 300, 430);
    // textSize(20);
    // fill("white");
    // text("K", 320, 400);

    //Russia
    // textSize(20);
    // fill("white");
    // text("R", 300, 420);
    // textSize(20);
    // fill("white");
    // text("U", 350, 400);
    // textSize(20);
    // fill("white");
    // text("S", 300, 450);
    // textSize(20);
    // fill("white");
    // text("S", 310, 400);
    // textSize(20);
    // fill("white");
    // text("I", 300, 410);
    // textSize(20);
    // fill("white");
    // text("A", 360, 400);

    // //Peru
    // textSize(20);
    // fill("white");
    // text("P", 300, 460);
    // textSize(20);
    // fill("white");
    // text("E", 200, 400);
    // textSize(20);
    // fill("white");
    // text("R", 300, 300);
    // textSize(20);
    // fill("white");
    // text("U", 380, 400);

    //Bermuda
    // textSize(20);
    // fill("white");
    // text("B", 33, 400);
    // textSize(20);
    // fill("white");
    // text("E", 300, 43);
    // textSize(20);
    // fill("white");
    // text("R", 340, 400);
    // textSize(20);
    // fill("white");
    // text("M", 300, 46);
    // textSize(20);
    // fill("white");
    // text("U", 36, 400);
    // textSize(20);
    // fill("white");
    // text("D", 39, 400);
    // textSize(20);
    // fill("white");
    // text("A", 300, 49);

    //Australia
    // textSize(20);
    // fill("white");
    // text("A", 31, 400);
    // textSize(20);
    // fill("white");
    // text("U", 300, 41);
    // textSize(20);
    // fill("white");
    // text("S", 38, 400);
    // textSize(20);
    // fill("white");
    // text("T", 300, 48);
    // textSize(20);
    // fill("white");
    // text("R", 50, 400);
    // textSize(20);
    // fill("white");
    // text("A", 300, 70);
    // textSize(20);
    // fill("white");
    // text("L", 40, 400);
    // textSize(20);
    // fill("white");
    // text("I", 300, 60);
    // textSize(20);
    // fill("white");
    // text("A", 80, 400);

    //India
    // textSize(20);
    // fill("white");
    // text("I", 60, 400);
    // textSize(20);
    // fill("white");
    // text("N", 300, 50);
    // textSize(20);
    // fill("white");
    // text("D", 20, 400);
    // textSize(20);
    // fill("white");
    // text("I", 300, 90);
    // textSize(20);
    // fill("white");
    // text("A",10, 400);
}
function mouseDragged(){
    dataTransfer.setData(format);
    dataTransfer.setDragImage(element, x, y);
}

// function mouseReleased(){

// }

// function grandCanyon(){
    
// }

// function stoneHenge(){

// }

// function mysticalLake(){

// }

// function theKremlin(){

// }

// function lakeTiticaca(){

// }

// function machuPicchu(){

// }

// function theColloseum(){

// }

// function bermudaWaters(){

// }

// function bermudaCaves(){

// }

// function australiaWaters(){

// }