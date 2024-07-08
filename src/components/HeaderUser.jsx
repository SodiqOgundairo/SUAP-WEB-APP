import { MdCircleNotifications } from "react-icons/md"
import { RxAvatar } from "react-icons/rx"

const HeaderUser = () => {
  return (
    <div className="hidden md:flex justify-between items-center p-5 border-theme border-b">
      <div className="flex gap-5 items-center">

      <p className="text-4xl font-bold">Welcome </p>
      </div>

      <div className="flex text-dark gap-20 items-center">
      <MdCircleNotifications className="text-black" size={24}/>
      <div className="flex items-center gap-4">

        <RxAvatar size={24} />
      <p className="text-md">John Doe</p>
      </div>
      </div>

    </div>
  )
}

export default HeaderUser