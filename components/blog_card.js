import React from "react";
import Link from "next/link";
export default function blog_cards(props) {
  return (
    <div className=" px-6 md:w-full w-96 ">
      <div className="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Mountain"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <p className="text-gray-700 dark:text-gray-300 text-base">{props.disc.slice(0, 100) +"...."}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Link href={`blogposts/${props.title}?disc=${props.disc}`}>
            <button className="rounded-md  px-3.5 py-1.5 mb-5 text-base font-semibold bg-violet-200/50 text-violet-600 hover:bg-purple-300/40 hover:shadow-violet-200/60 hover:shadow-md transition-all ">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
