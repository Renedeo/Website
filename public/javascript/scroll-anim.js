
$(function () {
  const $scrollBox = $(".imglist");
  let scrollSpeedArray = Array($scrollBox.length).fill(4)
  $scrollBox.scrollLeft(0)
//   let scrollSpeed = 1;
  function scrollLoop() {
    Array.from($scrollBox).forEach((el, index) => {
      let currentScroll = $(el).scrollLeft();
      let maxScroll = $(el)[0].scrollWidth - $(el).outerWidth();

      if (currentScroll >= maxScroll || currentScroll === 0) {
        scrollSpeedArray[index] *= -1;
      }

      $(el).scrollLeft(currentScroll + scrollSpeedArray[index]);
    });

    requestAnimationFrame(scrollLoop);
  }

  scrollLoop();
});
