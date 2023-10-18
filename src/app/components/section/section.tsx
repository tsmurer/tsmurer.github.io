import React from 'react'
import './section.scss' 

export default function Section(props: any) {

    return <section className="section" >
        <div className="anchor" id={props.hash}></div>
        {props.title.length > 0 &&
            <div className="section-title">
            <h3>{ props.title }</h3>
            <hr></hr>
            </div>
        }
        { props.children }
    </section>
}