import React from 'react'
import './navigation.scss'
import { links } from '@/lib/data'
import Link from 'next/link'

export default function Navigation() {
    
    const ul = []
    for(let l of links) {
        ul.push(<li><Link href={l.hash}>{l.name}</Link></li>)
    }
    return <div className="navigationBar">
        <ul className="navigationBar__sections">
            {ul}
        </ul>
    </div>
}