$(function () {
  const $scrollBox = $(".imglist");
  let initValue = 1
  let scrollSpeedArray = Array($scrollBox.length).fill(initValue);
  const edgeBuffer = initValue; // buffer zone to prevent jitter

  $scrollBox.scrollLeft(0);

  function scrollLoop() {
    Array.from($scrollBox).forEach((el, index) => {
      let $el = $(el);
      let currentScroll = $el.scrollLeft();
      let maxScroll = el.scrollWidth - $el.outerWidth();
      let speed = scrollSpeedArray[index];

      // Clamp scroll to bounds and reverse only if near edges
      if (currentScroll + speed >= maxScroll - edgeBuffer) {
        scrollSpeedArray[index] = -Math.abs(speed); // go left
        currentScroll = maxScroll - edgeBuffer; // prevent overshoot
      } else if (currentScroll + speed <= edgeBuffer) {
        scrollSpeedArray[index] = Math.abs(speed); // go right
        currentScroll = edgeBuffer; // prevent overshoot
      } else {
        currentScroll += speed;
      }

      $el.scrollLeft(currentScroll);
    });

    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();
});
