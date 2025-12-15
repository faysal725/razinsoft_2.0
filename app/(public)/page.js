import Image from "next/image";
import { Suspense } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL+'/api'

export default async function Home() {

    const data = await fetch(baseUrl+"/home")
  const posts = await data.json()

  console.log(posts.message)
  return (
    <div className="text-5xl">
    <Suspense fallback={<div>Loading...</div>}>
      {posts.message}
    </Suspense>
    </div>
  );
}
