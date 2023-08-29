let yCanos = [650,100,150,210];
let xCanos = [600,600,600,600]
let canosSpeed = [6,6,6,6];

let comprimentoCanos = 50;
let larguraCanos = 40;



function showCanos() {

    for (let i = 0; i < imgCanos.length; i++) {
    
        image(imgCanos[i], xCanos[i], yCanos[i], comprimentoCanos + 15, larguraCanos + 15);
    }

}

function canosMov(){

    for (let i = 0; i < imgCanos.length; i++) {
        xCanos[i] -= canosSpeed[i];

        if (xCanos[i] < -50) {
            xCanos[i] = 810
            
        }
    }
}