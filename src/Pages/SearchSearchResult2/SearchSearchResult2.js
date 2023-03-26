import React from 'react'

const SearchSearchResult2 = () => {
    return (
        <section class="listingPage secPad16 propertySearchPage">
            <div class="container3">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div class="listSearchPage">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                    <div class="filterWhiteBox">
                                        <div class="accordion" id="accordionExample">
                                            <div class="">
                                                <div class="" id="headingOne">
                                                    <h2 class="d-flex align-items-center mb-16">
                                                        <button class="btn btn-link btn-block text-left ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Listing Types
                                                        </button>
                                                        <div class="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                    <div class="">
                                                        <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input class="mr-8" type="checkbox" value="" id="defaultCheck1" />
                                                            <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck1">
                                                                Foreclosures
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input class="mr-8" type="checkbox" value="" id="defaultCheck2" />
                                                            <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck2">
                                                                REO Bank Owned
                                                            </label>
                                                        </div>
                                                        <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                            <input class="mr-8" type="checkbox" value="" id="defaultCheck3" />
                                                            <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck3">
                                                                Pre-Foreclosures
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="brdrLine"></div>
                                            <div class="">
                                                <div class="" id="headingTwo">
                                                    <h2 class="d-flex align-items-center mb-16">
                                                        <button class="btn btn-link btn-block text-left ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Property Types
                                                        </button>
                                                        <div class="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                    <div class="">
                                                        <div class="">
                                                            <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input class="mr-8" type="checkbox" value="" id="defaultCheck4" />
                                                                <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck4">
                                                                    Single-Family
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input class="mr-8" type="checkbox" value="" id="defaultCheck5" />
                                                                <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck5">
                                                                    Condo
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input class="mr-8" type="checkbox" value="" id="defaultCheck6" />
                                                                <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck6">
                                                                    Multi-Family
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input class="mr-8" type="checkbox" value="" id="defaultCheck7" />
                                                                <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck7">
                                                                    Mobile Home
                                                                </label>
                                                            </div>
                                                            <div class="form-check mb-10 d-flex align-items-center pl-0">
                                                                <input class="mr-8" type="checkbox" value="" id="defaultCheck8" />
                                                                <label class="form-check-label ftSze16 ftWgt500 blackClr" for="defaultCheck8">
                                                                    Commercial
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="brdrLine"></div>
                                            <div class="">
                                                <div class="" id="headingThree">
                                                    <h2 class="d-flex align-items-center mb-0">
                                                        <button class="btn btn-link btn-block text-left collapsed ftSze16 ftWgt600 blackClr" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Residence
                                                        </button>
                                                        <div class="ml-auto arrowblockSwipe transition" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            <img src={require('../../Assets/Images/arrowUp.svg').default} />
                                                        </div>
                                                    </h2>
                                                </div>
                                                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                    <div class="">
                                                        <div class="d-flex align-items-center mb-16">
                                                            <h4 class="ftSze16 ftWgt500 blackClr">Beds</h4>
                                                            <div class="ml-auto">
                                                                <div class="d-flex align-items-center">
                                                                    <a href="#" class="circleBox">
                                                                        <img src={require('../../Assets/Images/minus.svg').default} />
                                                                    </a>
                                                                    <p class="mb-0 countnum">0+</p>
                                                                    <a href="#" class="circleBox">
                                                                        <img src={require('../../Assets/Images/plus.svg').default} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-center mb-16">
                                                            <h4 class="ftSze16 ftWgt500 blackClr">Baths</h4>
                                                            <div class="ml-auto">
                                                                <div class="d-flex align-items-center">
                                                                    <a href="#" class="circleBox">
                                                                        <img src={require('../../Assets/Images/minus.svg').default} />
                                                                    </a>
                                                                    <p class="mb-0 countnum">0+</p>
                                                                    <a href="#" class="circleBox">
                                                                        <img src={require('../../Assets/Images/plus.svg').default} />
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mb-16">
                                                            <h4 class="ftSze16 ftWgt500 blackClr">SqFt</h4>
                                                            <div class="d-flex align-items-center">
                                                                <div class="lineDropDown">
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            500 SqFt
                                                                        </button>
                                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Another action</a>
                                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <p class="mb-0"><img src={require('../../Assets/Images/minus.svg').default} /></p>
                                                                <div class="lineDropDown">
                                                                    <div class="dropdown">
                                                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            2,250 SqFt
                                                                        </button>
                                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                                            <a class="dropdown-item" href="#">Action</a>
                                                                            <a class="dropdown-item" href="#">Another action</a>
                                                                            <a class="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                    <div class="propertyListBlock">
                                        <div class="row">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <div class="titleSection">
                                                    <h2 class="blackClr ftSze24 ftWgt500">Foreclosures properties in Jersey City, New Jersey</h2>
                                                    <p class="blackClr ftSze16 ftWgt400">Showing 1-25 properties of 48</p>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider10.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot orange"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider11.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot purple"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">PRE-FORECLOSURE</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider12.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot green"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">FORECLOSURES</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider13.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot orange"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider1.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot orange"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                                <div class="sliderItem">
                                                    <img src={require('../../Assets/Images/slider9.png').default} />
                                                    <a class="likeTag transition"><i class="far fa-heart"></i></a>
                                                    <div class="sliderTagName brdrRadius4 colorWhite font-weight700">New</div>
                                                    <div class="sliderTextArea">
                                                        <div class="d-flex align-items-center">
                                                            <h5 class="blackClr ftSze24 ftWgt700 mb-0">$457,600</h5>
                                                            <div class="ml-auto statusblock">
                                                                <div class="d-flex align-items-center">
                                                                    <div class="dot orange"></div>
                                                                    <p class="mb-0 ftSze14 ftWgt500">AUCTION</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="d-flex align-items-top">
                                                            <div>
                                                                <h4 class="font-weight500 ftSze18 mb-0">89A Andros Ave, <br />
                                                                    Staten Island, NY 10303</h4>
                                                            </div>
                                                        </div>
                                                        <div class="sliderListing">
                                                            <ul class="clearfix d-flex align-items-center">
                                                                <li><b class="blackClr">3</b>beds</li>
                                                                <li><b class="blackClr">2.5</b>baths</li>
                                                                <li><b class="blackClr">2,100</b>sq.ft</li>
                                                            </ul>
                                                        </div>
                                                        <div class="linkproperty text-center">
                                                            <a href="#" class="ftSze16 ftWgt600 blueClr">View Property Details</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchSearchResult2