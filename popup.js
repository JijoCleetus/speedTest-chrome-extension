var imageAddr =
  "https://public.boxcloud.com/api/2.0/internal_files/1677226964956/versions/1845511691356/representations/jpg_paged_2048x2048/content/1.jpg?access_token=1!S0I9sHzLVG9_IG0IA3gf4hLCd9h43Tm6XeS_RWDD-j5_GR5vVQQTh5tV2aSmJ5e0rg3FWoZcX8ejcbuu3yG2hQcVtYijFRIxXsvK7O1UAZ_O8Qrf_l_7v3-n9zsXzOOUdMqQrLdgTta2o-xTmXshvdKG_EFeDjRf_ilXFaA_Lndp5QaTzoIGwzPYldS5L9CrYtu4UJ2iMUayRS6XvFqgWo0ue5j0FRV4-GknDlkjWdu2hkziCSi6bBLHqxz8UFoDbJMjf_adtM7nengOo29utrgxkY53MCamyDvrh08DdEk0LJvgqzM6KoFsVMheJRWm57y4HdF_kykYWIzMiV4hqaKVwCYLMm8b7dBKDYPmYfAHy_F2jSaHX3hBNHhlExzsxhm-NbKTAjC129qH22dqoLh9ldi_Ddbbz1fCB599CQ9OBj0RaVmrN_CWlzVMMDiXUMhwdZ4ts6Q-9bh2QcSSpz_-EIhPbeuq2FZMhIJ8WJzKFqfAESmzhAIhCCkfqJHIfSpnxXdFJVs-JxL3GlF8JB9vdkHc_tPFJDh86TJaP6ZkzVkz9yRL1ugn6EqUj97lpGLqPbNqjwsgBqOX4TKKES4XpJZN2v3GGV_dvDNb&shared_link=https%3A%2F%2Fapp.box.com%2Fs%2F5uak3wno9i6y5g3qhqvge0a9w7qjwdaa&box_client_name=box-content-preview&box_client_version=2.110.0";
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
