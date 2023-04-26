import React from "react";
import { useRouter } from "next/router";

export default function pages() {
  const router = useRouter();
  const a = router.query;
  // console.log(router);
  return (
    <>
      <div className="font-semibold text-2xl py-7 px-5">{a.pages}</div>
      <p className="font-sans text-lg py-7 px-5 w-11/12 mx-auto">{a.disc}</p>
    </>
  );
}
