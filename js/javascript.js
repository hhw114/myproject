let currentIndex = 0;

function moveCarousel(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  currentIndex = (currentIndex + direction + totalItems) % totalItems;

  const carouselInner = document.querySelector(".carousel-inner");
  carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// 自动播放轮播图
setInterval(() => {
  moveCarousel(1);
}, 3000); // 每3秒切换一次
