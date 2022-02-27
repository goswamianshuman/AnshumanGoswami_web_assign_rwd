import React from "react";

const style = {
  main_container: `w-[22.25%] h-[88.9vh] bg-[#040b11]`,
  upper_container: `w-[100%] h-[55px] bg-[#040b11] flex cursor-pointer border-[#ffffff27] border-b-[0.002px] border-r-[0.002px] `,
  ADA_logo: ` flex-1 items-center justify-center gap-1 flex h-[100%] w-[100%] text-white text-[15px] bg-transparent `,
  market_selection: ` flex-1 flex items-center justify-center gap-1 h-[100%] w-[100%] bg-transparent`,

  lower_container: `h-[91.3%] w-[100%] bg-[#0b1d2e] flex flex-col `,
  getting_started: `flex-[0.3] border-[#ffffff27] border-b-[0.002px] border-r-[0.002px] bg-transparent gap-[20px] pb-7 flex-col flex items-center justify-center`,
  gs_button: `h-[40px] w-[80%] flex items-center justify-center text-white bg-[#3080db]`,

  order_container: `flex-[0.7] border-[#ffffff27] border-r-[0.002px]`,
  order_bar: `bg-transparent h-[12%] w-[100%] flex items-center pl-6 border-[#ffffff27] border-b-[0.002px]`,
  order_details: `h-[88%] w-[100%] flex items-center justify-center `,

  buy_sell: `h-[25px] w-[100%] bg-transparent flex`,
  buy: `flex-1  bg-green-500 flex items-center justify-center text-[13px] font-semibold text-white`,
  sell: `flex-1 bg-[#ffffff27] flex items-center justify-center text-[13px] font-semibold text-white`,

  mlt: `flex mt-3 items-center justify-center border-b-[1px] border-white border-opacity-70`,
  market: `h-[30px] w-[90px] border-b-[1px] border-white flex items-center justify-center font-semibold text-[12px] text-white`,
  limit: `h-[30px] w-[90px]  flex items-center justify-center font-semibold text-[12px] text-white `,
  stop: `h-[30px] w-[90px]  flex items-center justify-center font-semibold text-[12px] text-white`,

  amount_container: `h-[80px] mt-3 flex flex-col items-start justify-center border-[#ffffff27] border-b-[0.002px] pb-3`,

  fee_total_container: `flex flex-col items-center justify-evenly h-[100px] text-white font-[400] text-[10px] tracking-tighter`,
  fee_total: `flex flex-col items-center justify-center w-[100%]`,
  place_order: `h-[40px] bottom-0 w-[100%] mt-[4px] flex items-center justify-center bg-[#ffffff2d] `,
};

function Sidebar() {
  return (
    // main container of sidebar
    <div className={style.main_container}>
      {/* upper_container */}
      <div className={style.upper_container}>
        {/* ADA-USD logo and name */}
        <div className={style.ADA_logo}>
          <img
            src="images/cardano_img.png"
            className="w-[25px] h-[25px] ml-[10px] "
            alt="cardano"
          />
          <p className="ml-[2px] tracking-tight font-semibold">ADA-USD</p>
        </div>

        {/* select market container */}
        <div className={style.market_selection}>
          <p className="text-white tracking-tight font-[400] text-[12px] ">
            Select Market
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      {/* lower_container */}
      <div className={style.lower_container}>
        {/* getting started container */}
        <div className={style.getting_started}>
          <p className="mt-[50px] font-[300] text-white tracking-tighter text-[15px]">
            Start trading Cardano
          </p>

          {/* button */}
          <div role="button" className={style.gs_button}>
            <p className="text-[12px] font-semibold tracking-tighter">
              GET STARTED
            </p>
          </div>
        </div>

        {/* order container */}
        <div className={style.order_container}>
          {/* order form bar */}
          <div className={style.order_bar}>
            <p className=" text-white tracking-tighter text-[13px] font-semibold ">
              Order Form
            </p>
          </div>

          {/* order details */}
          <div className={style.order_details}>
            {/* order container details */}
            <div className="h-[90%] w-[80%] flex flex-col gap-3">
              {/* buy and sell bar */}
              <div className={style.buy_sell}>
                {/* buy */}
                <div className={style.buy}>BUY</div>
                {/* sell */}
                <div className={style.sell}>SELL</div>
              </div>

              {/* market limit and stop */}
              <div className={style.mlt}>
                <div className={style.market}>MARKET</div>
                <div className={style.limit}>LIMIT</div>
                <div className={style.stop}>STOP</div>
              </div>

              {/* ammount container */}
              <div className={style.amount_container}>
                <p className=" text-white tracking-tighter text-[13px] font-[300] ">
                  Amount
                </p>
                <div className="w-[100%] h-[40px] text-white bg-[#ffffff31] flex flex-row">
                  <div className="flex-[0.85] text-[12px] font-[600] flex items-center justify-end pr-3">
                    0.00
                  </div>
                  <div className="flex-[0.3] flex items-center border-[#ffffff3b] border-l-[0.002px] justify-center text-[12px] font-[600] ">
                    USD
                  </div>
                </div>
              </div>

              {/* fee and total container */}
              <div className={style.fee_total_container}>
                {/* details */}
                <div className={style.fee_total}>
                  <div className="w-[100%] flex items-center justify-between ">
                    <p>Fee ≈</p>
                    <p>N/A &ensp; USD</p>
                  </div>
                  <div className="w-[100%] flex items-center justify-between ">
                    <p>Total ≈</p>
                    <p>N/A &ensp; ADA</p>
                  </div>
                </div>

                {/* place order button  */}
                <div role="button" className={style.place_order}>
                  PLACE BUY ORDER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="w-[100%] h-[25px] bg-[#040b11] border-[#ffffff27] border-t-[0.002px]"></div>
    </div>
  );
}

export default Sidebar;
