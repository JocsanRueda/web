/* eslint-disable react/prop-types */

import { useState } from "react";
import { useResize } from "../Hooks/UseResize";

/**
 * Componente que muestra las opciones del menu
 * @param {element} objeto que contiene la informacion de la opcion de menu aj renderizar
 * @param {collapse} variable que contiene la clase que permite que los elementos se oculten
 * @returns Componente
 */
export function ElementSlideBoard({ element, options, collapse, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(options.findIndex((e) => e == element));
    }
  };

  const handleOnMouse = () => {
    setIsHovered(true);
  };
  const handleLeaveMouse = () => {
    setIsHovered(false);
  };

  const linkClassName = !isHovered
    ? "nav-link bg-dark-per1 text-white"
    : "nav-link text-light bg-dark-per2";

  return (
    <li
      className="nav-item mt-1 link-option text-white p1"
      onMouseEnter={handleOnMouse}
      onMouseLeave={handleLeaveMouse}
      key={element.name + "li"}
    >
      <a href="#" className={linkClassName} onClick={handleClick}>
        {element.icons && <i className={element.icons}></i>}
        <span className={` px-1  ${collapse}`}> {element.name}</span>
      </a>
    </li>
  );
}

/**
 * Componente que permite mostrar una bara de menu lateral
 * @param {options} arrreglo de objetos que contiene la informacion que se mostrara en el menu
 * @returns Componente SliderBoard
 */
export function SliderBoard({ options, optionClick }) {
  const { collapse, setCollapse } = useResize("collapse");

  //funcion que modfifica el estado de collapso en el menu
  function handleHidden() {
    window.localStorage.setItem(
      "collapse",
      JSON.stringify({ collapse: !collapse })
    );
    setCollapse(!collapse);
  }

  //variable que oculta los elementos a traves de una clase
  const hiddenClass = collapse ? "d-none" : "";
  //variable que gira la flecha del menu por medio de una clase
  const iconTurn = collapse ? "iconRight" : "iconLeft";
  //variable que controla la clase sobre el ancho minimo del menu
  const minWidth = collapse ? "sliderCollapse" : "slider";

  return (
    <>
      <div
        className={`d-flex flex-column flex-nowrap flex-shrink-1   bg-dark-p1 shadow align-items-stretch vh-100 ${minWidth} p1`}
      >
        <div className="d-flex justify-content-end">
          <i
            className={`bi bi-caret-right-fill mt-3 mx-2 h5 rotate icon ${iconTurn}`}
            onClick={handleHidden}
          ></i>
        </div>

        <hr></hr>
        <ul className="nav nav-pills flex-column  mb-auto px-2 d-inline">
          {options.map((element) => {
            return (
              <ElementSlideBoard
                element={element}
                options={options}
                collapse={hiddenClass}
                key={element.name + "e"}
                onClick={optionClick}
              />
            );
          })}
        </ul>
        <hr></hr>
        {!location.pathname.startsWith("/admisiones") && (
          <div className="d-flex justify-content-center"></div>
        )}
      </div>
    </>
  );
}
export default SliderBoard;
