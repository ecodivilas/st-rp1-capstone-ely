import React from 'react'

export const Sidebar = () => {
  return (
    <div className="w-2/12 bg-slate-900 text-white h-screen flex flex-col p-2 pt-5 gap-4">
        <div><a href="/dashboard">Dashboard</a></div>
        <div><a href="/users">Users</a></div>
        <div><a href="/transactions">Transactions</a></div>
        <div><a href="/settings">Settings</a></div>
    </div>
  )
}
