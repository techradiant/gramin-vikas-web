

function Header() {
     return(
         <>
           <header className="header-style-2">
            <nav className="navbar navbar-expand-lg">
               <a className="navbar-brand" href="index-2.html"><img src="images/h2logo.png" alt=""/></a>
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <i className="fas fa-bars"></i> </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="index-2.html"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Home </a>
                        <ul className="dropdown-menu" >
                           <li><a href="index-2.html">Home One</a></li>
                           <li><a href="home-two.html">Home Two</a></li>
                           <li><a href="home-three.html">Home Three</a></li>
                        </ul>
                     </li>
                     <li className="nav-item"> <a className="nav-link" href="about.html">About</a> </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="events-grid.html"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Events </a>
                        <ul className="dropdown-menu" >
                           <li><a href="events-grid.html">Events Grid</a></li>
                           <li><a href="events-grid-2.html">Events Grid Two</a></li>
                           <li><a href="events-grid-3.html">Events Grid Three</a></li>
                           <li><a href="events-list.html">Events List</a></li>
                           <li><a href="events-list-two.html">Events List Two</a></li>
                           <li><a href="event-details.html">Event Details</a></li>
                        </ul>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="causes.html"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Causes </a>
                        <ul className="dropdown-menu" >
                           <li><a href="causes.html">Causes Grid</a></li>
                           <li><a href="causes-list.html">Causes List</a></li>
                           <li><a href="causes-details.html">Causes Details</a> </li>
                        </ul>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="blog.html"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Blogs </a>
                        <ul className="dropdown-menu" >
                           <li><a href="blog.html">Blog Default</a></li>
                           <li><a href="blog-list.html">Blog List</a> </li>
                           <li><a href="blog-grid.html">Blog Grid</a></li>
                           <li><a href="blog-two-col.html">Blog Two Columns</a> </li>
                           <li><a href="blog-three-col.html">Blog Three Columns</a></li>
                           <li><a href="blog-details.html">Blog Details</a></li>
                        </ul>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Pages </a>
                        <ul className="dropdown-menu" >
                           <li>
                              <a href="#">Projects</a>
                              <ul className="dropdown-menu" >
                                 <li><a href="projects.html">Projects</a> </li>
                                 <li><a href="projects-grid.html">Projects Grid</a> </li>
                                 <li><a href="projects-grid-two.html">Projects Grid Two</a> </li>
                                 <li><a href="projects-list.html">Projects List</a> </li>
                                 <li><a href="projects-details.html">Project Details</a> </li>
                              </ul>
                           </li>
                           <li>
                              <a href="#">Shop</a>
                              <ul className="dropdown-menu" >
                                 <li><a href="shop.html">Shop</a> </li>
                                 <li><a href="shop-two.html">Shop Two</a> </li>
                                 <li><a href="shop-details.html">Shop Details</a> </li>
                              </ul>
                           </li>
                           <li>
                              <a href="team.html">Team</a>
                              <ul className="dropdown-menu" >
                                 <li><a href="team.html">Team One</a> </li>
                                 <li><a href="team-two.html">Team Two</a> </li>
                                 <li><a href="team-details.html">Team Details</a> </li>
                              </ul>
                           </li>
                           <li>
                              <a href="#">Gallery</a>
                              <ul className="dropdown-menu" >
                                 <li><a href="gallery-grid.html">Gallery Grid</a> </li>
                                 <li><a href="gallery-full.html">Gallery Full</a> </li>
                                 <li><a href="gallery-masonry.html">Gallery Masonry</a> </li>
                              </ul>
                           </li>
                           <li><a href="testimonials.html">Testimonials</a> </li>
                           <li><a href="donation.html">Donation</a> </li>
                           <li><a href="my-account.html">My Account</a> </li>
                           <li><a href="coming-soon.html">Coming Soon</a> </li>
                           <li><a href="page-404.html">404 Error</a> </li>
                        </ul>
                     </li>
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="contact.html"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Contact </a>
                        <ul className="dropdown-menu" >
                           <li><a href="contact-one.html">Contact One</a> </li>
                           <li><a href="contact-two.html">Contact Two</a> </li>
                        </ul>
                     </li>
                  </ul>
                  <ul className="topnav-right">
                     <li> <a className="mdonate" href="donation.html"><span>Make a Donation</span></a> </li>
                     <li> <a className="search-icon" href="#search"> <i className="fas fa-search"></i> </a> </li>
                     <li className="dropdown">
                        <a className="cart-icon" href="#" role="button" id="cartdropdown" data-toggle="dropdown"> <i className="fas fa-shopping-cart"></i></a>
                        <div className="dropdown-menu cart-box" aria-labelledby="cartdropdown">
                           Recently added item(s)
                           <ul className="list">
                              <li className="item">
                                 <a href="#" className="preview-image"><img className="preview" src="images/pro.jpg" alt=""/></a>
                                 <div className="description"> <a href="#">Sample Course</a> <strong className="price">1 x $44.95</strong> </div>
                              </li>
                              <li className="item">
                                 <a href="#" className="preview-image"><img className="preview" src="images/pro.jpg" alt=""/></a>
                                 <div className="description"> <a href="#">Sample Course</a> <strong className="price">1 x $44.95</strong> </div>
                              </li>
                           </ul>
                           <div className="total">Total: <strong>$44.95</strong></div>
                           <div className="view-link"><a href="#">Proceed to Checkout</a> <a href="#">View cart </a></div>
                        </div>
                     </li>
                     <li className="login-reg"> <a href="my-account.html">Login</a> | <a href="my-account.html">Signup</a> </li>
                  </ul>
               </div>
            </nav>
            <img src="./h2-slide1.jpg" alt="Logo" />
         </header>
         <SearchDiv/>
         </>

     )

}

function SearchDiv()
{
   return (
<>
<div id="search">
            <button type="button" className="close">×</button>
            <form className="search-overlay-form">
               <input type="search" value="" placeholder="type keyword(s) here" />
               <button type="submit" className="btn btn-primary"><i className="fas fa-search"></i></button>
            </form>
         </div>
</>

   )
}


export default Header; SearchDiv;
