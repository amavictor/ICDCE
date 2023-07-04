import React from 'react'
import { Navbar } from '../components/navbar/navbar'
import { Footer } from '../components/footer/footer';

export const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>

    )
}
