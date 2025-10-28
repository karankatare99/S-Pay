import { getBalance, getUser } from "../components/helper/getUserDetails"

export default async function Home() {
  const { id } = await getUser()
  return (
    <div>
      {id}
    </div>
  )
}
