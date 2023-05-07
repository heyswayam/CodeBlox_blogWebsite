import React from "react";
import { useRouter } from "next/router";
export default function pages(props) {

  // const [blogss, setBlogss] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     if (!router.isReady) return;
  //     let response = await fetch(`http://localhost:3003/api/getBlogs?page=${a.pages}`);
  //     let data = await response.json();
  //     setBlogss(data);
  //   }
  //   fetchData();
  // }, [router.isReady]);
  // console.log(a.pages);
  return (
    <>
      <div className="font-semibold text-2xl py-7 px-5 ">{props.data.title}</div>
      {/* <p className="font-sans text-lg py-7 px-5 w-11/12 mx-auto dangerouslySetInnerHTML={createMarkup()}">
        {props.data.content}
      </p> */}
      <div className="font-sans text-lg py-7 px-5 w-11/12 mx-auto" dangerouslySetInnerHTML={{__html: props.data.content}}></div>
    </>
  );
}
export async function getServerSideProps(context) {
  // const router = useRouter();
  // const a = router.query;
  // console.log(context.query)
  let anyName = context.query;
  let response = await fetch(`http://localhost:3000/api/getBlogs?page=${anyName.pages}`);
  let data = await response.json();
  // console.log(data)
  return {
    props: {
      data
    }
  };
}
