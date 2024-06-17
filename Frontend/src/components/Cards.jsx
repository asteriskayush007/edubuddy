import React from "react";

function Cards({item}) {
    console.log(item);
  return (
    <>
      <div className="p-5 w-11/12">
        <div className="card w-92 bg-base-100 shadow-xl mt-20 hover:scale-110 hover:ease-in-out duration-300 hover:border-sky-500 hover:border-2 dark:bg-slate-200 dark:text-black dark:border-black">
          <figure className="h-[30vh]">
            <img className="h-[30vh] p-4"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.description}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline p-4">₹{item.price}</div>
              <div className="badge badge-outline hover:bg-sky-500 hover:text-zinc-800 cursor-pointer p-4">Purchase</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
