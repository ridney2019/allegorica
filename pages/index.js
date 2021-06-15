import Link from 'next/link';

function home(){
    return (<div>
            <h1>Home</h1>
            <Link href="/sobre">
                <a >Acessar página Sobre </a>    
            </Link> 
        </div>
        <!DOCTYPE html>
        <!-- saved from url=(0048)https://colorlib.com/etc/cs/01-comming-soon.html -->
        <html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
            <title>TITLE</title>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            
        
        
            <!-- Font -->
        
            <style id="" media="all">/* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWJ0bbck.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFUZ0bbck.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWZ0bbck.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVp0bbck.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFWp0bbck.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFW50bbck.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem8YaGs126MiZpBA-UFVZ0b.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOX-hpOqc.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOVuhpOqc.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* greek-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXuhpOqc.woff2) format('woff2');
          unicode-range: U+1F00-1FFF;
        }
        /* greek */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOUehpOqc.woff2) format('woff2');
          unicode-range: U+0370-03FF;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXehpOqc.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOXOhpOqc.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          src: url(/fonts.gstatic.com/s/opensans/v20/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecmNE.woff2) format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecmNE.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecg.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* devanagari */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
          unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 500;
          src: url(/fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        </style>
        
            <!-- Stylesheets -->
        
            <link href="./TITLE_files/bootstrap.css" rel="stylesheet">
        
        
            <link href="./TITLE_files/ionicons.css" rel="stylesheet">
        
        
            <link rel="stylesheet" href="./TITLE_files/jquery.classycountdown.css">
        
            <link href="./TITLE_files/styles.css" rel="stylesheet">
        
            <link href="./TITLE_files/responsive.css" rel="stylesheet">
        
        </head>
        <body data-new-gr-c-s-check-loaded="14.1014.0" data-gr-ext-installed="">
        
            <div class="main-area">
                <div class="container full-height position-static">
        
                    <section class="left-section full-height">
        
                        <a class="logo" href="https://colorlib.com/etc/cs/01-comming-soon.html#"><img src="./TITLE_files/logo-black.webp" alt="Logo"></a>
        
                        <div class="display-table">
                            <div class="display-table-cell">
                                <div class="main-content">
                                    <h1 class="title"><b>Under Construction</b></h1>
                                    <p>Our website is currently undergoing scheduled maintenance.
                                        We Should be back shortly. Thank you for your patience.</p>
        
                                    <div class="email-input-area">
                                        <form method="post">
                                            <input class="email-input" name="email" type="text" placeholder="Enter your email">
                                            <button class="submit-btn" name="submit" type="submit"><b>NOTIFY US</b></button>
                                        </form>
                                    </div><!-- email-input-area -->
        
                                    <p class="post-desc">Sign up now to get early notification of our lauch date!</p>
                                </div><!-- main-content -->
                            </div><!-- display-table-cell -->
                        </div><!-- display-table -->
        
                        <ul class="footer-icons">
                            <li>Stay in touch : </li>
                            <li><a href="https://colorlib.com/etc/cs/01-comming-soon.html#"><i class="ion-social-facebook"></i></a></li>
                            <li><a href="https://colorlib.com/etc/cs/01-comming-soon.html#"><i class="ion-social-twitter"></i></a></li>
                            <li><a href="https://colorlib.com/etc/cs/01-comming-soon.html#"><i class="ion-social-googleplus"></i></a></li>
                            <li><a href="https://colorlib.com/etc/cs/01-comming-soon.html#"><i class="ion-social-instagram-outline"></i></a></li>
                            <li><a href="https://colorlib.com/etc/cs/01-comming-soon.html#"><i class="ion-social-pinterest"></i></a></li>
                        </ul>
        
                    </section><!-- left-section -->
        
                    <section class="right-section" style="background-image: url(images/countdown-1-1000x1000.jpg)">
        
                        <div class="display-table center-text">
                            <div class="display-table-cell">
        
        
                                <div id="rounded-countdown">
                                    <div class="countdown" data-remaining-sec="2000000"><div class="ClassyCountdown-wrapper"><div class="ClassyCountdown-days" style="height: 133.6px;"><div style="display: inline; height: 133.6px; width: 133.6px;"><canvas width="166" height="166" style="width: 133.6px; height: 133.6px;"></canvas><input type="text" readonly="readonly" style="display: none; width: 0px; visibility: hidden;"></div><span class="ClassyCountdown-value" style="font-weight: 600; color: rgb(255, 255, 255); margin-top: -32px; font-size: 30px;"><div>23</div><span style="font-size: 0.5em;">Days</span></span></div><div class="ClassyCountdown-hours" style="height: 133.6px;"><div style="display: inline; height: 133.6px; width: 133.6px;"><canvas width="166" height="166" style="width: 133.6px; height: 133.6px;"></canvas><input type="text" readonly="readonly" style="display: none; width: 0px; visibility: hidden;"></div><span class="ClassyCountdown-value" style="font-weight: 600; color: rgb(255, 255, 255); margin-top: -32px; font-size: 30px;"><div>3</div><span style="font-size: 0.5em;">Hours</span></span></div><div class="ClassyCountdown-minutes" style="height: 133.6px;"><div style="display: inline; height: 133.6px; width: 133.6px;"><canvas width="166" height="166" style="width: 133.6px; height: 133.6px;"></canvas><input type="text" readonly="readonly" style="display: none; width: 0px; visibility: hidden;"></div><span class="ClassyCountdown-value" style="font-weight: 600; color: rgb(255, 255, 255); margin-top: -32px; font-size: 30px;"><div>26</div><span style="font-size: 0.5em;">Minutes</span></span></div><div class="ClassyCountdown-seconds" style="height: 133.6px;"><div style="display: inline; height: 133.6px; width: 133.6px;"><canvas width="166" height="166" style="width: 133.6px; height: 133.6px;"></canvas><input type="text" readonly="readonly" style="display: none; width: 0px; visibility: hidden;"></div><span class="ClassyCountdown-value" style="font-weight: 600; color: rgb(255, 255, 255); margin-top: -32px; font-size: 30px;"><div>30</div><span style="font-size: 0.5em;">Seconds</span></span></div></div></div>
                                </div>
        
                            </div><!-- display-table-cell -->
                        </div><!-- display-table -->
        
                    </section><!-- right-section -->
        
                </div><!-- container -->
            </div><!-- main-area -->
        
            <!-- SCIPTS -->
        
            <script type="text/javascript" async="" src="./TITLE_files/analytics.js.download"></script><script src="./TITLE_files/jquery-3.1.1.min.js.download"></script>
        
            <script src="./TITLE_files/tether.min.js.download"></script>
        
            <script src="./TITLE_files/bootstrap.js.download"></script>
        
            <script src="./TITLE_files/jquery.classycountdown.js.download"></script>
        
            <script src="./TITLE_files/jquery.knob.js.download"></script>
        
            <script src="./TITLE_files/jquery.throttle.js.download"></script>
        
            <script src="./TITLE_files/scripts.js.download"></script>
        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async="" src="./TITLE_files/js"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-23581568-13');
        </script><script defer="" src="./TITLE_files/beacon.min.js.download" data-cf-beacon="{&quot;rayId&quot;:&quot;65fdc974aedfd050&quot;,&quot;token&quot;:&quot;cd0b4b3a733644fc843ef0b185f98241&quot;,&quot;version&quot;:&quot;2021.5.2&quot;,&quot;si&quot;:10}"></script>
        
        
        </body></html>)
}

export default home
