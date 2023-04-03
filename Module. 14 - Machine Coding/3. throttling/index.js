const container = document.querySelector(".container");

const throttle = (callback, delay) => {
  let isWaiting = false;
  return (...args) => {
    if (isWaiting) return;
    callback(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
};

const handleScroll = () => {
  console.log("scrolled");
};

const throttledScroll = throttle(handleScroll, 500);

container.addEventListener("scroll", throttledScroll);
