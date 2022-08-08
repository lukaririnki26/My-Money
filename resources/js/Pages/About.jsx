import React from 'react'
import { Link, Head } from '@inertiajs/inertia-react'
import Main from '@/Layouts/Main'

export default function About(props) {
    return (
        <Main>
            <Head title={props.title ?? 'About us'}/>
            <h1>HomePage</h1>
        </Main>
    )
}