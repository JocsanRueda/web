/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function Card({ element }) {
  console.log(element);
  return (
    <>
      <div className="card m-2 bg-dark-per2 " style={{ width: "18rem" }}>
        <div
          className={`rounded-top bg-dark auto d-flex align-items-center justify-content-center`}
          style={{ height: "9rem" }}
        >
          <h6 className=" fw-bold text-white mx-auto">{element.name}</h6>
        </div>
        <div className="card-body">
          <h5 className="card-title">{element.name}</h5>
          <p className="card-text">{element.description}</p>
          <a href="#" className="btn bg-fost my-auto    ">
            ver
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
