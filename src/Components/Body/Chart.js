import React, { useEffect, useCallback } from "react";
import { createChart, CrosshairMode } from "lightweight-charts";
import { data } from "../../data/graph_data";

function Chart() {
  useEffect(() => {
    init();
  }, []);
  const init = useCallback(() => {
    var chart = createChart(document.getElementById("chart1"), {
      width: 650,
      height: 234.5,
      crosshair: {
        mode: CrosshairMode.Normal,
      },
      priceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
        borderVisible: false,
      },
      layout: {
        backgroundColor: "#040b11",
        textColor: "#d1d4dc",
      },
      grid: {
        vertLines: {
          color: "rgba(42, 46, 57, 0.6)",
        },
        horzLines: {
          color: "rgba(42, 46, 57, 0.6)",
        },
      },
    });

    var candleSeries = chart.addCandlestickSeries({
      upColor: "#000",
      downColor: "#00fc00",
      borderDownColor: "#00fc00",
      borderUpColor: "#fa5032",
      wickDownColor: "#00fc00",
      wickUpColor: "#fa5032",
    });
    candleSeries.setData(data);

    var lastClose = data[data.length - 1].close;
    var lastIndex = data.length - 1;

    var targetIndex = lastIndex + 105 + Math.round(Math.random() + 30);
    var targetPrice = getRandomPrice();

    var currentIndex = lastIndex + 1;
    var currentBusinessDay = { day: 29, month: 5, year: 2022 };
    var ticksInCurrentBar = 0;
    var currentBar = {
      open: null,
      high: null,
      low: null,
      close: null,
      time: currentBusinessDay,
    };
    var currentVolume = {
      value: null,
      time: currentBusinessDay,
    };

    function mergeTickToBar(price, volumn) {
      let color = "#fa5032";
      if (currentBar.open === null) {
        currentBar.open = price;
        currentBar.high = price;
        currentBar.low = price;
        currentBar.close = price;
      } else {
        currentBar.close = price;
        currentBar.high = Math.max(currentBar.high, price);
        currentBar.low = Math.min(currentBar.low, price);
      }
      if (currentBar.open > price) {
        color = "#00fc00";
      }
      if (currentVolume.value === null) {
        currentVolume.value = volumn;
      } else {
        currentVolume.value = currentVolume.value;
      }
      currentVolume.color = color;
      candleSeries.update(currentBar);
    }

    function reset() {
      candleSeries.setData(data);
      lastClose = data[data.length - 1].close;
      lastIndex = data.length - 1;

      targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
      targetPrice = getRandomPrice();

      currentIndex = lastIndex + 1;
      currentBusinessDay = { day: 29, month: 5, year: 2019 };
      ticksInCurrentBar = 0;
    }

    function getRandomPrice() {
      return 10 + Math.round(Math.random() * 10000) / 100;
    }

    function nextBusinessDay(time) {
      var d = new Date();
      d.setUTCFullYear(time.year);
      d.setUTCMonth(time.month - 1);
      d.setUTCDate(time.day + 1);
      d.setUTCHours(0, 0, 0, 0);
      return {
        year: d.getUTCFullYear(),
        month: d.getUTCMonth() + 1,
        day: d.getUTCDate(),
      };
    }

    setInterval(function () {
      var deltaY = targetPrice - lastClose;
      var deltaX = targetIndex - lastIndex;
      var angle = deltaY / deltaX;
      var basePrice = lastClose + (currentIndex - lastIndex) * angle;
      var noise = 0.1 - Math.random() * 0.2 + 1.0;
      var noisedPrice = basePrice * noise;
      var volumn = Math.round(Math.random() * 100000000);
      mergeTickToBar(noisedPrice, volumn);
      if (++ticksInCurrentBar === 5) {
        // move to next bar
        currentIndex++;
        currentBusinessDay = nextBusinessDay(currentBusinessDay);
        currentBar = {
          open: null,
          high: null,
          low: null,
          close: null,
          time: currentBusinessDay,
        };
        currentVolume = {
          value: null,
          time: currentBusinessDay,
          color: "rgba(0, 150, 136, 0.8)",
        };
        ticksInCurrentBar = 0;
        if (currentIndex === 5000) {
          reset();
          return;
        }
        if (currentIndex === targetIndex) {
          // change trend
          lastClose = noisedPrice;
          lastIndex = currentIndex;
          targetIndex = lastIndex + 5 + Math.round(Math.random() + 30);
          targetPrice = getRandomPrice();
        }
      }
    }, 2000);
  }, []);
  return (
    <div>
      <div id="chart1" />
    </div>
  );
}

export default Chart;
