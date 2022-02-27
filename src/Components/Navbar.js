import React from "react";

const style = {
  main_container: `bg-[#040b11] border-[#ffffff27] border-b-[0.002px] h-[55px] w-[100%] flex items-center `,
  left_container: `bg-transparent h-[100%] flex-[0.182] flex items-center`,
  image_container: `ml-[20px] h-[30px] w-[30px] ml-[10px]`,

  right_container: `bg-transparent h-[100%] flex-[0.818] flex items-center justify-between`,
  trade_button_container: `bg-transparent font-bold hover:bg-[#091b2bd3] border-[#ffffff27] border-l-[0.002px] border-r-[0.002px] border-b-[3px] border-b-blue-500 text-white h-[100%] w-[5.7em] flex items-center justify-center `,
  other_container: `bg-transparent text-white gap-3 tracking-tight h-[100%] w-[30.9em] flex items-center justify-evenly`,
  link_right: `text-[13px] hover:text-[#3080db] duration-[0.25s]`,
  get_started_button: `bg-[#3080db] font-semibold w-[9em] h-[30px] flex items-center justify-center`,
};

function Navbar() {
  return (
    // this will be the main container
    <div className={style.main_container}>
      {/* this will be left side which contains logo */}
      <div className={style.left_container}>
        {/* image container */}
        <div className={style.image_container}>
          {/* image */}
          <img src="/images/nav_logo.svg" alt="" />
        </div>
      </div>

      {/* this will be the right side which contains other details  */}
      <div className={style.right_container}>
        {/* trade button container */}
        <div role="button" className={style.trade_button_container}>
          <p className="text-[12px] tracking-tight">Trade</p>
        </div>

        {/* others container */}
        <div className={style.other_container}>
          {/* link 1 */}
          <a href="/" className={style.link_right}>
            Institution? Coinbase Exchange
          </a>
          {/* link 2 */}
          <a href="/" className={style.link_right}>
            Log in
          </a>
          {/* get started button */}
          <div role="button" className={style.get_started_button}>
            <p className="text-[11px]">GET STARTED</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
