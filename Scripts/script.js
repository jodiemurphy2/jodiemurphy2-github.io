//shuffles the order of the colours using Fisher–Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
   return array;
}


function startGame(){
    const flowers = ["red", "blue", "green","orange","pink","purple","teal","yellow"];
    const randFlower1 = shuffleArray(flowers.slice());
    const randFlower2 = shuffleArray(flowers.slice());

    //document.getElementById("gameStart").hidden=true;
    document.getElementById("gameDiv").hidden=false;
    for(i=0;i<8;i++){
        document.getElementById("gameImg"+(i+1)).src="../images/gameImages/"+randFlower1[i]+".jpg";
    }
    for(i=0;i<8;i++){
        document.getElementById("gameImg"+(i+9)).src="../images/gameImages/"+randFlower2[i]+".jpg";
    }

}