"use client";
import React, { useState, useEffect } from "react";
import "./page.scss";

const LoadingQuest = () => {
  const [timeLeft, setTimeLeft] = useState(1200);
  const [showSymbol, setShowSymbol] = useState(false);
  const [symbol, setSymbol] = useState("");
  const [peopleSrcImg, setPeopleSrcImg] = useState("/media/ispeople.png");

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowSymbol(true);
      setPeopleSrcImg("/media/ispeople-2.png");
      setSymbol("K");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="LoadingQuest">
      <div className="container">
        <div className="container__loader-time">
          {!showSymbol ? (
            <>
              <img
                src="/media/maskLoader.png"
                className="maskLoaderTime"
                alt=""
              />
              <div className="loadTime">
                <img src="/media/loader.gif" alt="Loading" className="loader" />
                <div className="time">
                  <img src="/media/clock.svg" className="clock" alt="" />
                  {formatTime(timeLeft)}
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src="/media/maskLoader.png"
                className="maskLoaderTime"
                alt=""
              />
              <div className="symbol">{symbol}</div>
            </>
          )}
        </div>
        <div className="img-container">
          <img src={peopleSrcImg} className="is-people" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadingQuest;
