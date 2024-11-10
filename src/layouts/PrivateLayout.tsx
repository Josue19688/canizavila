
import { Outlet } from "react-router-dom"
import { Sidenav } from '../components/private/Sidenav';
import { Nav } from '../components/private/Nav';

export default function PrivateLayout() {
  return (
    <>
      <div className="text-gray-800 font-inter">
        <Sidenav />
        <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main">
          <Nav />
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6 p-2">
              <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-4 rounded-md lg:col-span-3">

                <Outlet />
              </div>
            </div>

          </div>
        </main>
      </div>

    </>
  )
}