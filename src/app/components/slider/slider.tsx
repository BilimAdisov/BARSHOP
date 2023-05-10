"use client";
import { useEffect, useState } from "react";

export function Slider() {
  const sliderItem = [
    {
      id: 1,
      title: "Real Madrid",
      img: "https://i.pinimg.com/564x/f7/e9/91/f7e991354f7971363f5f7506c53c749a.jpg",
    },
    {
      id: 2,
      title: "Manchester City",
      img: "https://i.pinimg.com/564x/9d/ff/d7/9dffd708a96e7a70964a4664a2d15f4f.jpg",
    },
    {
      id: 3,
      title: "PSG",
      img: "https://i.pinimg.com/564x/e9/6c/67/e96c675afa3d76277bf0c26dae200bba.jpg",
    },
    {
      id: 4,
      title: "Manchester United",
      img: "https://i.pinimg.com/564x/fe/8e/1d/fe8e1dea7e974d47e17d6c68e50e4b39.jpg",
    },
  ];

  const [amount, setAmount] = useState<number>(0);
  const [cord, setCord] = useState<number | null>(100);
  const [size, setSize] = useState<any>();

  useEffect(() => {
    setCord(amount * 500);
    setSize(sliderItem.length * 500);
  }, [amount]);

  const lengthFix = sliderItem.length - 1;

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="Sleft">
          <div className="title-container" style={{ height: `${size}px` }}>
            {sliderItem.reverse().map((title: any) => (
              <div
                className="title-wrapper"
                style={{
                  transition: "all 0.5s",
                  transform: `translateY(${cord}px)`,
                }}
                key={title.id}
              >
                <h5>{title.title}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="Sright">
          <div className="img-container" style={{ height: `${size}px` }}>
            {sliderItem.reverse().map((img: any) => (
              <div
                className="img-wrapper"
                key={img.id}
                style={{
                  transition: "all 0.5s",
                  transform: `translateY(-${cord}px)`,
                }}
              >
                <img src={img.img} alt="image" />
              </div>
            ))}
          </div>
        </div>
        <div className="navigation">
          <button
            onClick={() => setAmount(amount > lengthFix - 1 ? 0 : amount + 1)}
          >
            up
          </button>
          <button
            onClick={() => setAmount(amount <= 0 ? lengthFix : amount - 1)}
          >
            down
          </button>
        </div>
      </div>
    </div>
  );
}
