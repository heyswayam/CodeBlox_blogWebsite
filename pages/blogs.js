import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Blogs() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response = await fetch("http://localhost:3002/api/blog");
      let jsonData = await response.json();
      setBlog(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {blog.map((item) => (
      <Link href={`/blogposts/${item.slug}`}  >
      <div key={item.id}>{item.title}</div>
      </Link>
      ))}
    </div>
  );
}
