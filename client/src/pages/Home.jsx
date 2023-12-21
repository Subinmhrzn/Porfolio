import React from "react";
import Header from "../components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Popup from "reactjs-popup";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("../public/image/bg.gif")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    // height: '100vh', // Adjust the height as needed
    // Add more styles as needed
  };

  return (
    <div style={backgroundStyle} className="w-screen">
      <Header />
      <div className="p-1"></div>
      <div className="bg-red-500 mx-auto h-[60px]  text-center w-[500px]">
        <h1 className="bg text-[40px] text-center">Welcome to my Portfolio</h1>
      </div>
      <div className="text-center mt-[40px]">
        <div className="w-[200px] text-center mx-auto">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsubin-maharjan-98a3bb268%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app%26fbclid%3DIwAR2zcWIKC_dVOWRMiskhmHMcUuro6hmWk6JbIQTgHslugqhNK5qaWnQoh2k&h=AT3f14H7L7P2SL-OzD_488Bss-nAVZOsELwyKPlcCj6eZHY4wFja3QRh-LLe930KqP_KHFhmqHj5aK6hCZ7IbWzL9ecIJTk0Zt_geQ_iODP5UpgJw6CjpBqgCmETFg1HLoqxK-lAH0PTNSOjY53IUw"
            target="-blank"
          >
            <img
              src="../public/image/subin.jpg"
              alt="img"
              width={200}
              className="mx-auto rounded-full "
            />
          </a>

          <ToastContainer />
        </div>
        <p className="text-white font-semibold p-9 text-[20px]">
          Hello I am Subin Maharjan. I am from Nepal.
        </p>
      </div>
      <h1 className="text-[25px] mx-auto text-center">Breif about me</h1>
      <div className="mx-auto mt-2">
        <p className="text-center text-[19px] text-white font-semibold">
          My name is Subin Maharjan. I am from Nepal. I am currently doing my
          Bachelor form Tribhuwan University on the course BIM.
        </p>
      </div>

      <div className="mx-[180px]">
        <h1 className="  mt-4 text-blue-200 font-bold text-[20px]">
          My Social Media Handles
        </h1>
      </div>
      <a href="https://www.facebook.com/subin.maharjan.3154" target="_blank">
        {" "}
        <div className="flex mx-[180px]  mt-4 gap-5  w-[180px]">
          <FaFacebook className="text-[30px] text-blue-300" />
          <h1 className="text-white">Subin Maharjan</h1>
        </div>
      </a>
      <a href="https://www.instagram.com/subin_mzn/" target="_blank">
        <div className="flex mx-[180px] sm:mx-[180px] mt-4 gap-5  w-[180px]">
          <FaInstagram className="text-[30px] text-pink-700" />
          <h1 className="text-white">Subin_mzn</h1>
        </div>
      </a>
    </div>
  );
}
