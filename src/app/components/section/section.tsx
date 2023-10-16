import React from 'react'
import './section.scss' 

export default function Section(props: any) {
    return <section className="section">
        { props.children }
    </section>
}