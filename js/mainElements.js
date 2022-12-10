/**
 * 
 * 
 */
$(document).ready(function () {

    $('header').html(`<div class="upper-head clearfix">
    <div class="container">
        <div class="contact-info">
            <p><i class="flaticon-phone-call"></i> Phone: (012)-111-000-00</p>
            <p><i class="flaticon-mail"></i> Mail: info@visitegypt.travel</p>
        </div>

        
    </div>
</div>`)

    $('.navigation').html(`<div class="container">
    <div class="navigation-content">
        <div class="header_menu">
            <!-- start Navbar (Header) -->
            <nav class="navbar navbar-default navbar-sticky-function navbar-arrow">
                <div class="logo pull-left">
                    <a href="index.html"><img alt="Image" style="width: 100px" src="images/Logo.png"></a>
                </div>
                <div id="navbar" class="navbar-nav-wrapper">
                    <ul class="nav navbar-nav" id="responsive-menu">
                        <li class="active">
                            <a href="main-index.html">Home</a>
                        </li>
                        <li>
                            <a href="packages.html">Packages</a>
                        </li>
                        <li>
                            <a href="hotels.html">Hotel</a> 
                        </li>
                        <li>
                            <a href="#">Cruises</a>
                        </li>
                        <li>
                            <a href="#">Excursions</a>
                        </li>
                        
                       
                        <li>
                            <a href="#">Topics</a>
                        </li>
                        <li>
                            <a href="#">Partners</a>
                        </li>
                    </ul>
                </div>
                <!--/.nav-collapse -->
                <div id="slicknav-mobile"></div>
            </nav>
        </div>
    </div>
</div>`)
    $('footer').html(`<div class="footer-upper">
<div class="container">
    <div class="newsletter text-center">
        <div class="section-title section-title-white text-center">
            <h2>Newsletter Signup</h2>
            <div class="section-icon section-icon-white">
                <i class="flaticon-diamond"></i>
            </div>
            <p>Subscribe to our weekly newsletter to get updated on our latest deals</p>
        </div>
        <form>
            <div class="form-group">
                <input type="text" class="form-control" id="search">
                <a href="#"><span class="search_btn"><i class="fa fa-paper-plane" aria-hidden="true"></i> Sign Up</span></a>
            </div>
        </form>
    </div>

</div>
</div>
<div class="copyright">
<div class="container">
    <div class="row">
        <div class="col-lg-6">
            <div class="copyright-content">
                <p>2022 <i class="fa fa-copyright" aria-hidden="true"></i><a href="https://www.jctoday.com" target="_blank"> JCTODAY</a></p>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="payment-content">
                <ul>
                    <li>Our Social Media</li>
                    <li>
                        <a href="https://www.facebook.com/EnjoyVisitngEgypt" target="_blank" style="color: white;"><i class="fa fa-facebook-square" style="font-size: 30px;"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</div>`)
})