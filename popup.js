var imageAddr = "https://jijo-general.s3.eu-west-2.amazonaws.com/Bloe.jpg";
var downloadSize = 7300000; //bytes

changeColor.addEventListener("click", async () => {
  document.querySelector("#speedValue").innerHTML = "Calculating";
  measureConnectionSpeed();
});

function measureConnectionSpeed() {
  var startTime, endTime;
  var download = new Image();
  download.onload = function () {
    endTime = new Date().getTime();
    showResults();
  };

  download.onerror = function (err, msg) {
    document.querySelector("#speedValue").innerHTML = "Error";
    console.log(err, msg);
  };

  startTime = new Date().getTime();
  var cacheBuster = "?nnn=" + startTime;
  download.src = imageAddr + cacheBuster;

  function showResults() {
    var duration = (endTime - startTime) / 1000;
    var bitsLoaded = downloadSize * 8;
    var speedBps = (bitsLoaded / duration).toFixed(2);
    var speedKbps = (speedBps / 1024).toFixed(2);
    var speedMbps = (speedKbps / 1024).toFixed(2);
    document.querySelector("#speedValue").innerHTML = speedMbps + "Mbps";

    // ShowProgressMessage([
    //   "Your connection speed is:",
    //   speedBps + " bps",
    //   speedKbps + " kbps",
    //   speedMbps + " Mbps",
    // ]);
  }
}
