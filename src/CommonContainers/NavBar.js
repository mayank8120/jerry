import React from 'react';
import logo from '../Assets/Images/logo.svg';


const NavBar = () => {
    return (
        <>


            <section className="navbarSection auctiondeal">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="form-inline my-2 my-lg-0 ml-auto">
                            <button className="btn signInBtn my-2 my-sm-0 ftSze16 ftWgt500" type="submit">Sign In</button>
                            <button className="btn signUpBtn my-2 my-sm-0 backgroundblue whiteClr ftWgt700 brdrRads8 ftSze16"
                                type="submit">Sign Up</button>
                        </form>
                    </div>
                </nav>
            </section>

        </>
    )
}

export default NavBar