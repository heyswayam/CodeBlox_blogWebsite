import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function pages() {
  const router = useRouter();
  const a = router.query;
  const [blogss, setBlogss] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!router.isReady) return;
      let response = await fetch(`http://localhost:3002/api/getBlogs?page=${a.pages}`);
      let data = await response.json();
      setBlogss(data);
    }
    fetchData();
  }, [router.isReady]);
  // console.log(a.pages);
  return (
    <>
      <div className="font-semibold text-2xl py-7 px-5">{blogss.title}</div>
      <p className="font-sans text-lg py-7 px-5 w-11/12 mx-auto">{blogss.content}</p>
    </>
  );
}
