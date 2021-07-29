const main = document.querySelector('.main');
const heading = document.querySelector('.main > h1')
const walk = 300 ;

function giveShadow(e) {
    console.log(e)
    // const width = main.offsetWidth ;
    // const height = main.offsetHeight ;
    //ES6 substitute of above assignment
    const { offsetHeight :  height , offsetWidth : width } = main ;
    let { offsetX : x , offsetY : y } = e ;

    if(this !== e.target){
        x = x + e.target.offsetLeft ;
        y = y + e.target.offsetTop ;
    }

    const xWalk = Math.round((x / width*walk) - (walk / 2));
    const yWalk = Math.round((y / height*walk) - (walk / 2));

    heading.style.textShadow = `${xWalk}px ${yWalk*-1}px 0px rgba(0, 255, 255, 0.681) ,
                                ${xWalk *-1}px ${yWalk}px 0 rgba(94, 255, 0, 0.681) ,
                                ${xWalk}px ${yWalk* -1}px 0 rgba(255, 0, 0, 0.681)  ,
                                ${xWalk* -1 }px ${yWalk}px 0 rgba(195, 0, 255, 0.681) 
                                `

    console.log(xWalk , yWalk)
}

main.addEventListener('mousemove', giveShadow);