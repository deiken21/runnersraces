class Runner{constructor(name,imagesPath,numberOfFrames,typeOfImage,n){
    this.name=name
    this.imagesPath=imagesPath
    this.numberOfFrames=numberOfFrames
    this.typeOfImage=typeOfImage
    this.n=n
     // Get the current runner's configuration
    //  let configCounter = i % runners.length;
    //  let currentRunnerConfig = runners[configCounter]

    
     // Add the HTML element to the runner
     this.element = document.createElement("img")
     document.body.appendChild(this.element)

     // Loading animation frames for the runner
     this.frames = [];
     for(let j = 1; j <= this.numberOfFrames; j++) {
         this.frames.push(this.imagesPath + j + this.typeOfImage);
     }

     this.element.id = this.name + n
     this.element.src = this.frames[0]; // Set the initial frame
     this.element.style.top = 50 + n * 50 + "px"
     this.element.classList.add("runner")

     this.name = this.name + n

     this.position = 0

     this.currentFrame = 0


}
}
function setupRunners(){
    runners.push(new Runner( "Sonic","./Images/SR/", 7,".png",1))
    runners.push(new Runner("Rogue","/Images/Rogue/",9,".png",2))
    runners.push(new Runner("Shadow","/Images/SHR/",24,".png",3))
    runners.push(new Runner("Knuckle","/Images/Knuckle/",7,".png",4))

}
