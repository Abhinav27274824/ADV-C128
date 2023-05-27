belupacito = "";
sonic_unleashed = "";

function preload(){
    belupacito = loadSound("belupacito.mp3");
    sonic_unleashed = loadSound("sonic_unleashed.mp3")
}

function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)


}

function draw(){
    image(video, 0, 0, 600, 500);
}

function modelLoaded(){
    console.log("PoseNet successfully operational!")
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x
        leftWristY = results[0].pose.leftWrist.y 
        console.log("Left wrist X = " + leftWristX + " Left wrist Y = " + leftWristY)
        rightWristX = results[0].pose.rightWrist.x
        rightWristY = results[0].pose.rightWrist.y
        console.log("Right wrist X = " + rightWristX + " Right wrist Y = " + rightWristY)
    }
}



