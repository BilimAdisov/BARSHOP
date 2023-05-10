import { FC } from "react";
import { useSwiper } from "swiper/react";

export function swiperButton() {
  const swiper = useSwiper();
  return (
    <div className="control">
      <button
        onClick={() => swiper.slidePrev()}
        style={{
          zIndex: 100,
          background: "blue",
        }}
      >
        prev
      </button>
      <button onClick={() => swiper.slideNext()}>next</button>
    </div>
  );
}
