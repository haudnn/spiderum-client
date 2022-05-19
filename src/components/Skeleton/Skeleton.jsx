import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SkeletonCard = () => {
  return (
    <section className="mx-auto mt-4">
      <h2 className="section-title text-center">
        <Skeleton duration={1} height={30} width={300} />
      </h2>
      <ul className="list text-center">
        {Array(3)
          .fill()
          .map((item, index) => (
            <li className="card" key={index}>
              <div className="card-image text-center">
                <Skeleton height={40} width={500} />
              </div>
              <h4 className="card-title text-center">
                <Skeleton height={30} width={`80%`} />
              </h4>
              <div>
                <div className="card-description__left text-center">
                  <p>
                    <Skeleton height={20} width={`60%`} />
                  </p>
                  <span className=" text-center">
                    <Skeleton height={20} width={`60%`} />
                  </span>
                </div>
                <div>
                  <Skeleton height={10} width={`10%`} />
                </div>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};
export default SkeletonCard;