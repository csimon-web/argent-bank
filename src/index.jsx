import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import User from './pages/User'
import SignIn from './pages/SignIn'
import NoMatch from './pages/NoMatch'
// // import './styles/index.css'

// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home />,
//     },
//     {
//         path: '/profil',
//         element: <User />,
//     },
//     // {
//     //     path: '/reglage',
//     //     element: (
//     //         <>
//     //             <Header />
//     //             <main>
//     //                 <LeftMenu />
//     //                 <Settings />
//     //             </main>
//     //         </>
//     //     ),
//     // },
//     // {
//     //     path: '/communaute',
//     //     element: (
//     //         <>
//     //             <Header />
//     //             <main>
//     //                 <LeftMenu />
//     //                 <Community />
//     //             </main>
//     //         </>
//     //     ),
//     // },
//     {
//         path: '*',
//         element: <NoMatch />,
//     },
// ])

// createRoot(document.getElementById('root')).render(
//     <RouterProvider router={router} />
// )

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)