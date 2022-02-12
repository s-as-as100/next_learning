 import { useRouter } from "next/router"
const blogNumber = () => {

    const router = useRouter();
    const blogNumber = router.query.blogNumber;

  return (
    <div>blogNumber is {blogNumber}</div>
  )
}

export default blogNumber