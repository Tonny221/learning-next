import Link from 'next/link'
import React, { useState } from 'react'
import { IMenuProps } from '@/interface/IMenu'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='p-4 mx-40 flex justify-between'>
            <h1>
                <Link href={'/'}>Nome do site</Link>
            </h1>
            <menu>
                <ul className='flex justify-between gap-10'>
                    <li>
                        <Link href={"/teste"} className='hover:text-violet-400 transition delay-100 ease-in-out'>teste</Link>
                    </li>
                    <li>
                        <Link href={"/movies"} className='hover:text-violet-400 transition delay-100 ease-in-out'>movies</Link>
                    </li>
                </ul>
            </menu>
            <aside>
                <ul className='flex justify-between'>
                    <li>
                        <Link href={"/teste"}>teste</Link>
                    </li>
                    <li>
                        <Link href={"/teams"}>galeria</Link>
                    </li>
                </ul>
            </aside>
        </header>
    )
}

export default Header