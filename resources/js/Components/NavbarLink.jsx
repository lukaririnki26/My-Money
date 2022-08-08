import { Link } from "@inertiajs/inertia-react"

const NavbarLink = ({ appName }) => {
    return (
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
                <Link href={route('homepage')} className={route().current('homepage') ? 'bg-violet-600' : ''}>Homepage</Link>
            </li>
            <li>
            <Link href={route('about')} className={route().current('about') ? 'bg-violet-600' : ''}>About</Link>
            </li>
        </ul>
    )
}

export default NavbarLink