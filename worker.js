//self means worker is itself the global object for worker.js
//computes the expensive calculation
self.onmessage = function (message) {
  let sum = 0;
  for (let i = 0; i < 10000000000; i++) {
    sum += i;
  }
  //sends the result to the script.js
  postMessage(sum);
};
