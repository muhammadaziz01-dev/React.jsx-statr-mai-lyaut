import {  Outlet } from 'react-router-dom';
import {Header, Footer} from "@components"

function Index() {
  return <>
  <Header />
  <main className=' min-h-[80vh]'>
    <Outlet />
  </main>
  <Footer />
  </>
}

export default Index