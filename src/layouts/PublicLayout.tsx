
import { Footer } from "@/components/public/Footer"
import { Header } from "@/components/public/Header"
import { userAuthStore } from "@/stores/auth/auth.store";
import { Navigate, Outlet } from "react-router-dom"

export default function PublicLayout() {
  const authStatus = userAuthStore(state=>state.status);
  const checkAuthStatus = userAuthStore(state=>state.checkStatus);

  if(authStatus==='pending'){
    checkAuthStatus();
    return <>Loading............</>
  }

  if(authStatus==='authorized'){
    return <Navigate to={'/private/dashboard'}/>
  }
  return (
    <>
      <main className="text-sm font-sans text-neutral-300 antialiased">
       <Header/>
        <Outlet />
        <Footer/>
      </main>

    </>
  )
}
