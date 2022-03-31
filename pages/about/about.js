var counter = 0;

var img = [
    "myself/myself1.jpeg",
    "myself/myself2.jpeg",
    "myself/myself3.jpeg",
    "myself/myself4.jpeg",
    "myself/myself5.jpeg",
    "myself/myself6.jpeg",
    "myself/myself7.jpeg",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function imageClicked()
{
//    counter=getRandomInt(img.length)
//    if (document.images["introPicture"].src.endsWith(img[counter])) {
//	counter=counter+1;
    //    }
    counter=counter+1;
    document.images["myself"].src = img[counter%img.length];
}