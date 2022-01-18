import React from 'react'
 //import './styles.css';
export default function Header(props) {
    return (
        <div>
            <header className="masthead" style={{backgroundImage: "url(assets/img/"+props.img+")"}}>
            <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <div className={props.className} >
                            <h1>{props.title}</h1>
                            <h2 className="subheading">{props.subPara}</h2>
                            <span className={props.subHeadClass}>{props.subhead}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </div>
    )
}
