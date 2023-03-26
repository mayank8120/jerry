import React from 'react';
import logo from '../Assets/Images/logo.svg';


const NavBar = () => {
    return (
        <>


            <section class="navbarSection auctiondeal">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0 ml-auto">
                            <button class="btn signInBtn my-2 my-sm-0 ftSze16 ftWgt500" type="submit">Sign In</button>
                            <button class="btn signUpBtn my-2 my-sm-0 backgroundblue whiteClr ftWgt700 brdrRads8 ftSze16"
                                type="submit">Sign Up</button>
                        </form>
                    </div>
                </nav>
            </section>

        </>
    )
}

export default NavBar