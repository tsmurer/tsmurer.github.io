import React from 'react'
import './navigation.scss'
import { links } from '@/lib/data'
import Link from 'next/link'
import { GitHub, LinkedIn } from '@mui/icons-material'

export default function Navigation() {
    
    const ul = []
    for(let l of links) {
        ul.push(<li><Link href={l.hash}>{l.name}</Link></li>)
    }
    return <div className="navigationBar">
        <ul className="navigationBar__sections">
            {ul}
        </ul>
        <div className="navigationBar__icons">
            <a href="https://www.linkedin.com/in/tiagomurer/" target="_blank"><LinkedIn/></a>
            <a href="https://github.com/tsmurer" target="_blank"><GitHub/></a>
        </div>
    </div>
}