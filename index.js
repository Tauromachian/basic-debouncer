let timer;
module.exports = function debounce(timeout, func) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    func();
  }, timeout || 200);
};
