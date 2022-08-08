import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export default function HomePage({children}) {
    return (
        <div className='min-h-screen bg-slate-50'>
            <Navbar/>

            <main className='container mx-auto mt-3'>{children}</main>

            <Footer/>
        </div>
    )
}