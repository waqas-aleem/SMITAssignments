import logo from '../assets/Logo.png';
 
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={logo} alt=""/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link active mx-3 navBarText" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-3 navBarText">
                                <a className="nav-link" href="#">About us</a>
                            </li>
                            <li className="nav-item mx-3 navBarText">
                                <a className="nav-link " aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item mx-3 navBarText">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                       
                            <button className="btn btn-outline-primary mx-3 " type="submit" style={{width: "108px",height: "40px"}}>Sign in</button>
                            <button className="btn btn-primary" type="submit" style={{width: "108px",height: "40px"}}>Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}
