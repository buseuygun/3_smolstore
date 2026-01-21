'use client'
import { useEffect } from "react"
import Link from "next/link"

export default function Error(props) {
  const { error, reset } = props

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className="page-container">
      <h3>Something went wrong</h3>
      <div>
        <button onClick={reset}>reset</button>
        <Link href='/'><button>home</button></Link>
      </div>
    </div>
  )
}
