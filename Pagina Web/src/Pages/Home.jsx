/* eslint-disable react/jsx-key */
import { useState } from "react";
import SliderBoard from "../Components/SliderBoard";
import Formation from "./Formation";
import Profile from "./Profile";
import AboutMi from "./AboutMi";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
// eslint-disable-next-line react/prop-types
export function Admin({ list }) {
  const [select, setSelect] = useState(0);
  const optionClick = (e) => {
    setSelect(e);
    console.log(e);
  };

  const component = [
    <Profile />,
    <AboutMi />,
    <Portfolio />,
    <Formation />,
    <Contact />,
  ];
  return (
    <>
      <div className="d-flex flex-row bg-dark-per1 ">
        <div className="p-0">
          <SliderBoard options={list} optionClick={optionClick} />
        </div>
        <div className="p-5 bg-dark-per1">{component[select]}</div>
      </div>
    </>
  );
}

export default Admin;
