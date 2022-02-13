import Link from "next/link";


// link is best as compare to a tag because page is not refresh
const ErrorPage = () => {
  return (
    <div>
      <div>
        <h1>Page not Found</h1>
      </div>
      <p>the page is not available</p>
      {/* <a href="/">Back to HomePage</a> */}
      <Link href="/">
        <a>Back to HomePage</a>
      </Link>
    </div>
  );
};

export default ErrorPage;
