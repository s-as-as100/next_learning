import Link from "next/link";

import { useRouter } from "next/router";
import { useEffect } from "react";
// link is best as compare to a tag because page is not refresh
const ErrorPage = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <div>
        <h1>Page not Found</h1>
      </div>
      <p>the page is not available</p>
      {/* <a href="/">Back to HomePage</a> */}
      {/* <Link href="/">
        <a>Back to HomePage</a>
      </Link> */}

      <a onClick={handleBack}>Back to HomePage</a>
    </div>
  );
};

export default ErrorPage;
