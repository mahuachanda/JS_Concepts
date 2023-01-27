const worker = new Worker("worker.js");

const sumButton = document.querySelector("#sumButton");
const bgButton = document.querySelector("#bgButton");

sumButton.addEventListener("click", (event) => {
  //Sends data to worker
  worker.postMessage("hello!!, worker");
});
//listens workers computation results
worker.onmessage = function (message) {
  alert(`The final sum is ${message.data}`);
};

bgButton.addEventListener("click", (e) => {
  if (document.body.style.background !== "grey")
    document.body.style.background = "grey";
  else document.body.style.background = "black";
});
