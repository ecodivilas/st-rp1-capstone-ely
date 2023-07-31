import { Sidebar } from "../common/Sidebar"
import UserTable from "./UserTable"
import UserForm from "./UserForm"

function Dashboard() {

  return (
    <div className="flex w-full bg-red-800">
      <Sidebar />
      <div className="flex w-full flex-col items-center">
      <UserForm />
      <UserTable />
      </div>
    </div>
  )
}

export default Dashboard
