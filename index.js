let timer;
module.exports = function debounce(func, timeout) {
  clearTimeout(timer);
  timer = setTimeout(() => {
    func();
  }, timeout || 200);
};
