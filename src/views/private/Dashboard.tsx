

export const Dashboard = () => {

  return (
    <>
     
          <div className="flex justify-between mb-4 items-start">
            <div className="font-medium text-sm">Order Statistics</div>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="rounded-md border border-dashed border-gray-200 p-2">
              <div className="flex items-center mb-0.5">
                <div className="text-lg font-semibold">10</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">$80</span>
              </div>
              <span className="text-gray-400 text-xs">Active</span>
            </div>
            <div className="rounded-md border border-dashed border-gray-200 p-2">
              <div className="flex items-center mb-0.5">
                <div className="text-lg font-semibold">50</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">+$469</span>
              </div>
              <span className="text-gray-400 text-xs">Completed</span>
            </div>
            <div className="rounded-md border border-dashed border-gray-200 p-2">
              <div className="flex items-center mb-0.5">
                <div className="text-lg font-semibold">4</div>
                <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">-$130</span>
              </div>
              <span className="text-gray-400 text-xs">Canceled</span>
            </div>
          </div>
          <div>
            <div className="w-full h-48">
              Hola mundo
            </div>
          </div>

        
    </>
  )
}





