import React from 'react'
// import Navbar from '../../components/Navbar/Navbar'
// import Footer from '../../components/Footer/Footer'
// import Main from '../../components/Main/Main'
// import Banner from '../../components/Banner/Banner'
import './style.css'

export default function Home() {
    return (
        <React.Fragment>
            <header>
                <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div class="container-fluid">
                        {/* <a class="navbar-brand" href="home">navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="whatsiztooza">
                            <span class="navbar-toggler-icon"></span>
                        </button> */}
                        <a class="navbar-brand " href="www">
                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2021/02/cropped2-logo-square-2-150x150-1.png" alt="" width="70" height="50" class="d-inline-block align-top" />
                        </a>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav me-auto mb-2 mb-md-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="home">INCOMING</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="home">INCOMING</a>
                                </li> */}
                                <li class="nav-item">
                                    <a class="nav-link" href="home">MESSAGE SENT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="home" >VALIDATION</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link disabled" href="home" tabindex="-1" aria-disabled="true">VALIDATION</a>
                                </li> */}
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="www" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ATS MESSAGES</a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a class="dropdown-item" href="www">Flight Plan (FPL)</a></li>
                                        <li><a class="dropdown-item" href="www">Delay (DLA)</a></li>
                                        <li><a class="dropdown-item" href="www">Modification (CHG)</a></li>
                                        <li><a class="dropdown-item" href="www">Flight Plan Cancelation (CNL)</a></li>
                                        <li><a class="dropdown-item" href="www">Departure (DEP)</a></li>
                                        <li><a class="dropdown-item" href="www">Arrival (ARR)</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div class="d-flex">
                                <h5 class="me-2 mb-2 mb-md-0 p-2">WARR- ARO</h5>
                                <button class="btn btn-outline-success" type="submit">Log Out</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            {/* <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg> */}
                            <img src="https://lh3.google.com/u/4/d/1GOOWelMYKJbrniYN1sC14DhQOFDmWKLq=w1920-h912-iv1" alt="" width="100" height="50" class="d-inline-block align-top" />
                            <div class="container">
                                <div class="carousel-caption text-start" style={{textShadow: "black 0.1em 0.1em 0.2em"}}>
                                    <h1>Safety Is Always</h1>
                                    <p> Tar. Adytia</p>
                                    {/* <p><a class="btn btn-lg btn-primary" href="home">1 button</a></p> */}
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style={{textShadow: "black 0.1em 0.1em 0.2em"}}>
                            <img src="https://lh3.google.com/u/4/d/10eNZe8Q7FofNns6TFCbSN3CaqqZfahcp=w1920-h969-iv1" alt="" width="100" height="50" class="d-inline-block align-top" />

                            <div class="container">
                                <div class="carousel-caption ">
                                    <h1>Without Mistake</h1>
                                    <p> Tar. Dzaky</p>
                                    {/* <p><a class="btn btn-lg btn-primary" href="home">2 button</a></p> */}
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" style={{textShadow: "black 0.1em 0.1em 0.2em"}}>
                            <img src="https://lh3.google.com/u/4/d/1_4eftGEFOLz1mnPjFUzzRozpnS1_rpAV=w1920-h969-iv1" alt="" width="100" height="50" class="d-inline-block align-top" />

                            <div class="container">
                                <div class="carousel-caption text-end">
                                    <h1>Steady and Focus</h1>
                                    <p> Tar. Refo</p>
                                    {/* <p><a class="btn btn-lg btn-primary" href="home">3 button</a></p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">what is this 1</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">what is this 2</span>
                    </button>
                </div>


                {/* <!-- Marketing messaging and featurettes
  ================================================== -->
  <!-- Wrap the rest of the page in another container to center all the content. --> */}

                <div class="container marketing">

                    {/* <!-- Three columns of text below the carousel --> */}
                    <div class="row">
                        <div class="col-lg-4 imagine ">
                            {/* <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> */}
                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2020/05/atc1.jpg" alt="" class=" bd-placeholder-img rounded-circle " width="140" height="140" />


                            <h2>Incoming Message</h2>
                            {/* <p>isinya colom 1</p> */}
                            {/* <p><a class="btn btn-secondary" href="home">button column 1</a></p> */}
                        </div>
                        {/* <!-- /.col-lg-4  --> */}
                        <div class="col-lg-4 imagine">
                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2019/09/lab-360-LLU.jpeg" alt="" class="bd-placeholder-img rounded-circle " width="140" height="140" />

                            <h2>Messages Sent</h2>
                            {/* <p>isinya colom 2</p> */}
                            {/* <p><a class="btn btn-secondary" href="home">button colom 2 </a></p> */}
                        </div>
                        {/* <!-- /.col-lg-4  --> */}
                        <div class="col-lg-4 imagine">
                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2020/05/1.jpg" alt="" class="bd-placeholder-img rounded-circle " width="140" height="140" />

                            <h2>Validation Messages</h2>
                            {/* <p>isi colom 3</p> */}
                            {/* <p><a class="btn btn-secondary" href="home">button column 3</a></p> */}
                        </div>
                        {/* <!-- /.col-lg-4 --> */}
                    </div>
                    {/* <!-- /.row --> */}


                    {/* <!-- START THE FEATURETTES --> */}

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            {/* <h2 class="featurette-heading">Strategy<span class="text-muted"> Strategy</span></h2> */}
                            <p class="lead">To improve the effectiveness of systems, management of organizations, and resources of Aeronautical Communication Course of Aviation Polytechnic of Surabaya to be the leading of institutions in education, researches, community services, and providing information in aeronautical communication</p>
                        </div>
                        <div class="col-md-5">
                            {/* <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>
                             */}

                            <img src="https://poltekbangsby.ac.id/wp-content/uploads/2020/05/atc1.jpg" alt=""  width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />


                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7 order-md-2">
                            {/* <h2 class="featurette-heading">2<span class="text-muted"> 2</span></h2> */}
                            <p class="lead">To implement effective and efficient learning programs to produce high quality of graduates in aeronautical communications, good ethics, and active in building their surrounding, both at the regional, national, and international levels</p>
                        </div>
                        <div class="col-md-5 order-md-1">
                        <img src="https://poltekbangsby.ac.id/wp-content/uploads/2019/09/lab-360-LLU.jpeg" alt=""  width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    <div class="row featurette">
                        <div class="col-md-7">
                            {/* <h2 class="featurette-heading">3 <span class="text-muted"> 3 </span></h2> */}
                            <p class="lead">To provide some research in aeronautical communications for developing science and technology, produce an innovative, visionary, insightful, and monumental</p>
                        </div>
                        <div class="col-md-5">
                        <img src="https://poltekbangsby.ac.id/wp-content/uploads/2020/05/1.jpg" alt=""  width="500" height="500" class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />

                        </div>
                    </div>

                    <hr class="featurette-divider" />

                    {/* <!-- /END THE FEATURETTES --> */}

                </div>
                {/* <!-- /.container --> */}


                {/* <!-- FOOTER --> */}
                <footer class="container">
                    <p class="float-end"><a href="home">Dzaky</a></p>
                    <p>&copy; 2021 Surabaya &middot; <a href="home">POLTEKBANG</a> &middot; <a href="home">Ask Dev</a></p>
                </footer>
            </main>
        </React.Fragment>
    )
}

