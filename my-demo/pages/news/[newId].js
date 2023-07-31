import {useRouter} from "next/router"

export default function DetailPage() {
  const router  = useRouter()
  const newId = router.query.newId
  return (
    <div>index</div>
  )
}
