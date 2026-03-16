function throttle(fn, delay) {
  let lastcall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastcall < delay) {
      return;
    }
    lastcall = now;
    return fn(...args);
  };
}

function sendChatmessage(message) {
  console.log(`Sending Message`, message);
}

const sendChatMessageWithSlowmode = throttle(sendChatmessage, 2000);
sendChatMessageWithSlowmode("Helllooo first");
sendChatMessageWithSlowmode("hellooo ");
sendChatMessageWithSlowmode("next class sir????");
