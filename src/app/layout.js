import { Inter } from 'next/font/google'
import './globals.css'
import './mobile.css'
import './tablet.css'
import React from 'react';
import NavBar from './components/NavBar';
import Head from '../../node_modules/next/head';
import Home from './page';
import Footer from './components/Footer';

// import NavBar from './components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'saeed Ahmad Bloach',
  description: 'Saeed Ahmad Bloach MERN Stack Developer and Also WordPress Developer with knowledge of multiple programming languages Echo Bazar echo-bazar organic-store organic store',
}


export default function RootLayout({ children }) {
  return (

    <html lang="en"> 
    <head>
    </head>
      <body className={inter.className}>
        <NavBar/>
       {children}

       <Footer />
        </body>
    </html>
    
  )
}
