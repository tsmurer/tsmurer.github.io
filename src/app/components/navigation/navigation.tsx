import React from 'react'
import './navigation.scss'
import { links } from '@/lib/data'

export default function Navigation() {
    
    const ul = []
    for(let l of links) {
        ul.push(<li>{l.name}</li>)
    }
    return <ul className="navigationBar">
        {ul}
    </ul>
}