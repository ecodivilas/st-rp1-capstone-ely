import React from 'react'

export const Splash = () => {
  return (
    <div className="w-full h-screen bg-blue-950 flex">
        <div className="w-1/4 h-full bg-orange-700">Sidebar</div>
        <div className="w-3/4">
            <div className="flex sm:flex-col m-10 justify-between">
                <div className="w-[34vw] bg-slate-800 h-[15rem]">Chart 1</div>
                <div className="w-[34vw] bg-amber-500 h-[15rem]">Chart 2</div>
            </div>
            <div className="m-10 bg-green-900 h-[20rem]">Table</div>
        </div>
    </div>
  )
}
