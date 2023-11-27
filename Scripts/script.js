//variables
const flowers = ["red", "blue", "green","orange","pink","purple","teal","yellow","red", "blue", "green","orange","pink","purple","teal","yellow"];
let shuffledFlowers;
let firstImage;
let secondImage;
let gamePaused = false;

function startGame(){
    
    //generates an array with flower colours shuffled
    shuffledFlowers = shuffleArray(flowers.slice());

    //document.getElementById("gameStart").hidden=true;
    document.getElementById("gameDiv").hidden=false;

    for(i=0;i<16;i++){
        // assigns flower images randomly
        document.getElementById("gameImg"+(i+1)).src="../images/gameImages/"+shuffledFlowers[i]+".jpg";
        
        //assigns data values to the image elements
        document.getElementById("gameImg"+(i+1)).setAttribute("data-name", shuffledFlowers[i]);
    }
    
    //images wil grey out after 10 seconds
    setTimeout(hideColours, 10000);
}


//shuffles the order of the colours using Fisher–Yates shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
   return array;
}

//hides the colurs of cards and adds event listener to the images
function hideColours(){
    for(i=0;i<16;i++){
        document.getElementById("gameImg"+(i+1)).src="../images/gameImages/black.png";
        document.getElementById("gameImg"+(i+1)).addEventListener("click", flipImage);
    }
}

//turns image aroung if clicked
function flipImage(){
    
    //when this is true the player will not be able to click on images and progress game
    if(gamePaused) return;

    //if player clicks on the same image they have already selected they will not progress
    if(this === firstImage) return;

    //reveals colour
    this.src="../images/gameImages/"+this.dataset.name+".jpg";

    //If this is the first selection the value will be kept and the player can make another choice
    if (!firstImage){
        firstImage=this;
        return;
    }

    //locks in second image
    secondImage = this;

    //the game is now paused and no click will register until we check if they flowers matched
    gamePaused = true;

    //checks for a match with a delay to allow colour change
    setTimeout(checkMatch, 500);

}


//checks if the cards clicked are matches
function checkMatch(){
    if (firstImage.dataset.name === secondImage.dataset.name){
        alert("Its a Match!");
        
    }
    else{
        alert("You lose! Press the button to start again");
        document.getElementById("gameDiv").hidden=true;
    }

    //reset values
    firstImage = null;
    secondImage = null;
    gamePaused = false;
}

//checks that the data type is correct in the contact form
function validateForm() {
            var form = document.getElementById("contact-form");
            if (form.checkValidity()) {
                showMessage();
            } else {
                form.reportValidity();
            }
        }
//shows a message when the contact form is completed
function showMessage() {
            document.getElementById("contact-form").style.display = "none";
            document.getElementById("message").style.display = "block";
        }
