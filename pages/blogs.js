import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blogs(props) {
  // console.log(props);

  // useEffect(() => {
  //   async function fetchData() {
  //     let response = await fetch("http://localhost:3003/api/blog");
  //     let jsonData = await response.json();
  //     setBlog(jsonData);
  //   }
  //   fetchData();
  // }, []);
let anyName = props.jsonData;
  return (
    <div>
      {anyName.map((item) => (
        <div key={item.id}>
          <Link href={`/blogposts/${item.slug}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps(context) {
  let response = await fetch("http://localhost:3003/api/blog");
  let jsonData = await response.json();
  return {
    props: {
    jsonData
    }
  };
}
