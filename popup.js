var imageAddr =
  "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bloemen_van_adderwortel_%28Persicaria_bistorta%2C_synoniem%2C_Polygonum_bistorta%29_06-06-2021._%28d.j.b%29.jpg";
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
