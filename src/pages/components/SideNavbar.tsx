import React from "react";
import { RxDashboard } from "react-icons/rx";
import { GiOpenGate } from "react-icons/gi";
import { BiSolidOffer } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { TfiNotepad } from "react-icons/tfi";
import { AiTwotoneSetting } from "react-icons/ai";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Avatar from "react-avatar";
const SideNavbar:React.FC = () => {
  return (
    <div
      id="container"
      className="lg:w-24 sm:w-20 h-full sm:flex sm:flex-col hidden bg-[#21211f] border-[1px] border-black justify-between p-5"
    >
      <div
        id="widgets"
        className="w-full h-1/2 flex flex-col justify-around items-center text-white"
      >
        <Avatar githubHandle="PeerRich" size="45" round="25px" />
        <RxDashboard />
        <GiOpenGate className="text-black" />
        <BiSolidOffer />
        <BsPeopleFill />
        <TfiNotepad />
      </div>
      <div
        id="settings"
        className="w-full h-1/6 flex flex-col justify-around items-center border-white border-t-[0.5px] text-white"
      >
        <AiTwotoneSetting />
        <RiLogoutBoxRLine />
      </div>
    </div>
  );
};

export default SideNavbar;
