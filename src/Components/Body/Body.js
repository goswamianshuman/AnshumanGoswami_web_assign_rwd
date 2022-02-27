import React from "react";
import usd_spread from "../../data/orderbook/data_usd_spread.json";
import market_data from "../../data/orderbook/data_market_size.json";
import history from "../../data/trade_history/trade_history.json";
import Chart from "../../Components/Body/Chart";

const style = {
  main_container: `w-[100%] h-[89vh] bg-[#040b11] `,

  top_bar: `flex items-center justify-start w-[100%] h-[55px] border-[#ffffff27] border-b-[0.002px]`,
  trade: `text-center flex flex-col items-center justify-center`,
  trade_detail: `text-[10px] opacity-50 tracking-tight font-[300]`,

  sub_bar: `w-[100%] h-[91.25%]  flex flex-row`,

  head: `flex w-[100%] h-[25px] bg-[#040b11] border-[#ffffff27] border-t-[0.002px] border-b-[0.002px]`,
  para_head: `flex-1 text-[11px] font-[400] tracking-tight text-[#ffffff70] flex items-center justify-end`,
  sub_head: `flex-1 text-[11px] font-[400] tracking-tight text-[#ffffff70] flex items-center justify-end`,
  sub_heading: `flex items-center justify-center w-[65%]`,

  around_chart: `h-[100%] w-[20%]  flex items-center justify-center text-white font-semibold text-[12px]`,
};

function Body() {
  return (
    <div className={style.main_container}>
      {/* topbar */}
      <div className={style.top_bar}>
        <div className="text-white flex items-center justify-evenly w-[30%]">
          {/* last trade price */}
          <div className={style.trade}>
            <p className="text-[13px] font-semibold tracking-tight ">
              0.9260&ensp;USD
            </p>
            <p className={style.trade_detail}>Last trade price</p>
          </div>

          {/* 24h price */}
          <div className={style.trade}>
            <p className="text-[13px] text-[#00fc00] font-semibold tracking-tight ">
              +5.42%
            </p>
            <p className={style.trade_detail}>24h price</p>
          </div>

          {/* 24h volume */}
          <div className="text-start ">
            <p className="text-[13px] font-semibold tracking-tight ">
              118,029,098&ensp;ADA
            </p>
            <p className={style.trade_detail}>24h volume</p>
          </div>
        </div>
      </div>

      {/* sub bar */}
      <div className={style.sub_bar}>
        {/* orderbook */}
        <div className="flex-[0.25] bg-transparent">
          {/* orderbook head */}
          <div className="w-[100%] h-[45px] bg-[#0b1d2e] ">
            <div className="h-[100%] w-[40%] flex items-center justify-center text-white font-semibold text-[12px] ">
              Order Book
            </div>
          </div>

          {/* market size  */}
          <div className="w-[100%] h-[44%]">
            {/* market_head */}
            <div className={style.head}>
              <div className={style.sub_head}>
                <div className={style.sub_heading}>Market Size</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Price (USD)</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>My Size</div>
              </div>
            </div>
            {/* data  */}
            <div className=" h-[100%] w-[100%] ">
              {market_data.map((value) => {
                return (
                  <div key={value.id} className="flex h-[2.3vh] w-[100%]">
                    <div className={style.para_head}>
                      <div className="flex items-center justify-end text-[#ffffffd0] w-[65%] ">
                        {value.market_size}
                      </div>
                    </div>
                    <div className={style.para_head}>
                      <div className="flex text-[#fa5032] items-center justify-center w-[65%] ">
                        {value["price(USD)"]}
                      </div>
                    </div>
                    <div className={style.para_head}>
                      <div className={style.sub_heading}>{value.my_size}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* usd spread */}
          <div className="w-[100%] h-[44%]">
            <div className={style.head}>
              <div className={style.sub_head}>
                <div className={style.sub_heading}>USD Spread</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>0.0003</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}></div>
              </div>
            </div>
            {/* data */}

            <div className=" h-[100%] w-[100%] ">
              {usd_spread.map((value) => {
                return (
                  <div key={value.id} className="flex h-[2.3vh] w-[100%]">
                    <div className={style.para_head}>
                      <div className="flex items-center justify-end text-[#ffffffd0] w-[65%] ">
                        {value.USD_spread}
                      </div>
                    </div>
                    <div className={style.para_head}>
                      <div className="flex items-center text-[#00fc00]  justify-center w-[65%] ">
                        {value.points}
                      </div>
                    </div>
                    <div className={style.para_head}>
                      <div className={style.sub_heading}>{value.empty}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* aggregation  */}
          <div className="flex w-[100%] h-[25px] bg-[#040b11] border-[#ffffff27] border-t-[0.002px]">
            <div className={style.sub_head}>
              <div className={style.sub_heading}>Aggregation</div>
            </div>
            <div className={style.para_head}>
              <div className={style.sub_heading}>0.0001</div>
            </div>
            <div className={style.para_head}>
              <div className={style.sub_heading}></div>
            </div>
          </div>
        </div>

        {/* price chart */}
        <div className="flex-[0.50] flex flex-col border-[#ffffff27] border-l-[0.002px] border-r-[0.002px]">
          <div className="flex-[0.517] ">
            {/* price chart heading */}
            <div className="w-[100%] h-[45px] bg-[#0b1d2e] flex items-center justify-between">
              <div className={style.around_chart}>Price Chart</div>
              <div className="h-[100%] w-[30%]  flex items-center text-white font-semibold text-[12px] ">
                <div className="h-[50%] w-[35%]  flex items-center justify-center text-white font-semibold text-[10px] border-b-white border-b">
                  Price Chart
                </div>
                <div className="h-[50%] w-[35%]  flex items-center justify-center text-white font-semibold text-[10px] text-[#ffffff27] border-b-[#ffffff27] border-b">
                  Depth Chart
                </div>
              </div>
            </div>

            {/* other details settings for chart */}
            <div className="w-[100%] h-[100%] cursor-pointer border-[#ffffff27] border-t-[0.002px]">
              <div className={style.head}>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>
                    5m{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>
                    candle{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>
                    Overlay{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>other values</div>
                </div>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>other values</div>
                </div>
                <div className={style.para_head}>
                  <div className={style.sub_heading}>other values</div>
                </div>
              </div>
              <Chart />
            </div>
          </div>

          <div className="flex-[0.483] ">
            {/* order chart heading */}
            <div className="w-[100%] h-[45px] bg-[#0b1d2e] border-[#ffffff27] border-t-[0.002px] flex items-center justify-between">
              <div className={style.around_chart}>Open Order</div>
              <div className="h-[100%] w-[30%]  flex items-center text-white font-semibold text-[12px] ">
                <div className="h-[50%] w-[35%]  flex items-center justify-center text-white font-semibold text-[10px] border-b-white border-b">
                  Open
                </div>
                <div className="h-[50%] w-[35%]  flex items-center justify-center text-white font-semibold text-[10px] text-[#ffffff27] border-b-[#ffffff27] border-b">
                  fills
                </div>
              </div>
            </div>

            <div className="flex w-[100%] h-[25px] bg-[#040b11] border-[#ffffff27] border-t-[0.002px] ">
              <div className={style.para_head}>
                <div className={style.sub_heading}>side</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>size</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Filled (ADA)</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Price (USD)</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Fee (USD)</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Status</div>
              </div>
            </div>

            <div className="h-[10%] w-[100%] flex items-center justify-center text-[11px] font-[400] tracking-tight text-[#ffffff70]">
              No orders to show
            </div>
          </div>
        </div>

        {/* trade history */}
        <div className="flex-[0.25]">
          {/* trade history */}
          <div className="w-[100%] h-[45px] bg-[#0b1d2e] ">
            <div className="h-[100%] w-[40%]  flex items-center justify-center text-white font-semibold text-[12px] ">
              Trade History
            </div>
          </div>
          {/* details and data */}
          <div className="h-[87%]">
            {/* details */}
            <div className={style.head}>
              <div className={style.sub_head}>
                <div className={style.sub_heading}>Trade Size</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Price (USD)</div>
              </div>
              <div className={style.para_head}>
                <div className={style.sub_heading}>Time</div>
              </div>
            </div>

            {/* data */}

            {history.map((value) => {
              return (
                <div key={value.id} className="flex h-min w-[100%]">
                  <div className={style.para_head}>
                    <div className="flex items-center justify-end text-[#ffffffd0] w-[65%] ">
                      {value.trade_size}
                    </div>
                  </div>
                  <div className={style.para_head}>
                    <div className="flex items-center text-[#00fc00]  justify-end w-[65%] ">
                      {value.price_usd} &ensp;
                      {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-3 w-3"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      }
                    </div>
                  </div>
                  <div className={style.para_head}>
                    <div className={style.sub_heading}>{value.time}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[25px] bg-[#040b11] border-[#ffffff27] border-t-[0.002px]"></div>
    </div>
  );
}

export default Body;
