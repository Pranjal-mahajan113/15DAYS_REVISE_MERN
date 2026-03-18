const getData = () => {
  console.log("Fetching Data");
};
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
const searchWithDebounce = debounce(getData, 500);
