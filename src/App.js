import React  from 'react';
import './css/event.css';

function App() {
  return (


  
         <div className="App">


        <header>
        <h1>
           <a href="/">Chris Waters Portfolio</a>
        </h1>
          <nav>
            <ul>
                <li>
                    <a href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#my-works">My Works</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
            </ul>
          </nav>
        </header>
   
        <section className="hero">
            <div className="hero-cta">
                <div className="web-experience">
                    <h2>Building Web Experiences!</h2><br />
                <article>
                    <ul>
                        <li>Chris Waters is a web developer / software engineer</li><br />
                        <li>Ready to take your project to the next level and Beyond!</li><br />
                        <li>Please review my work and contact me when ready to work!</li><br />
                    </ul></article>
                </div>
                <div className="hero-form">
                <h3>Thanks for visiting!</h3>
                <p>Be sure to check my work and let me know if you have any questions.</p>
                <div className='hero-image'>
                    <img src={require("./images/chris-waters-profile.png")} alt="profileimage"/>
                </div>  
                </div>
        </div>
        </section>  
   
        <section id="about-me" className="intro">
            <div className="flex-row">
            <h2 className="section-title primary-border">About Chris...</h2>
            </div>
            <div className="flex-row">
            <p>
                Chris is a hard working, Jesus loving kinda guy that likes to code.  After playing baseball for the LA Angels in the minor leagues for 5 years, Chris worked as a Dish Technician, Real Estate Agent, while working on websites and building local company coding projects such as facebook apps and websites for local banks and businesses.  After working in Drupal and Wordpress for 5 years, Chris decided to take his coding passion to a higher level and develop code and software projects in more depth with a coding certification from UCF.
            </p>
            </div>
        </section>

        <section id="my-works">
            <div className="flex-row">
           <h2 className="section-title primary-border">My Works</h2>
           </div>
           <div className="works">
           <article className="work">
               <div className="worklarger">
            <a href="https://love-language-quiz.com" target="blank"><img src={require("./images/love-language-quiz.png")} alt="Love Language Quiz" /></a>
               </div>   
            <div className="work-bio">
                   <h4 className="work-role">Drupal</h4>
                   <h3 className="work-name"><a href="https://Love-Language-Quiz.com" target="blank">Love-Language-Quiz</a></h3>
                   <p>Love Language Quiz uses high ranking keywords to generate a fun, picture Love Langauge Quiz with auto-generated ads from Google Adsense.</p>
            </div>
           </article>
           <article className="work">
              <a href="https://big-five-personality-tests.com" target="blank"><img src={require("./images/big-five-personality-tests.png")} alt="Big Five Personality Tests" /></a>
               <div className="work-bio">
                   <h4 className="work-role">Drupal</h4>
                   <h3 className="work-name"><a href="https://big-five-personality-tests.com" target="blank">Big-Five-Personality-Tests.com</a></h3>
                   <p>Big Five Personality Tests targets high ranking keywords for Google Adsense revenue.</p>
               </div>
           </article>
           <article className="work">
               <a href="https://hizzil.com" target="blank"><img src={require("./images/hizzil.png")} alt="hizzil" /></a>
           <div className="work-bio">
                <h4 className="work-role">Drupal</h4>
                <h3 className="work-name"><a href="https://hizzil.com" target="blank">Hizzil.com</a></h3>
               <p>Hizzil is a real estate platform that targets active buyers and matches with sellers.  Early marketing stage.</p>
           </div>
           </article>
           <article className="work">
            <a href="https://www.calendars-printable.com" target="blank"><img src={require("./images/calendars-printable.png")} alt="Calendars-Printable" /></a>
            <div className="work-bio">
            <h4 className="work-role">Drupal</h4>
            <h3 className="work-name"><a href="https://www.calendars-printable.com" target="blank">Calendars-Printable.com</a></h3>
            <p>Calendars-Printable targets high keywords for blank printable calendars and uses Google Adsense to generate revenue.</p>
            </div>
        </article>
        <article className="work">
            <a href="https://lordandstanley.com" target="blank"><img src={("./images/lordandstanley.png")} alt="Lord and Stanley Realty" /></a>
            <div className="work-bio">
            <h4 className="work-role">WordPress</h4>
            <h3 className="work-name"><a href="https://lordandstanley.com" target="blank">Lord and Stanley.com</a></h3>
            <p>Lord and Stanley is a local real estate company in Tallahassee, FL that uses an IDX feed to promote listings and capture leads.</p>
            </div>
        </article>
        <article className="work">
            <a href="https://waters000.github.io/run-buddy/"><img src={require("./images/run-buddy.png")} alt="Run Buddy" /></a>
            <div className="work-bio">
                <h4 className="work-role">HTML/CSS</h4>
                <h3 className="work-name"><a href="https://waters000.github.io/run-buddy/" target="blank">Run Buddy</a></h3>
                <p>Run Buddy is built as a template for original HTML/ CSS3 implementation.</p>
            </div>
        </article>
        <article className="work">
            <a href="https://waters000.github.io/password-generator-proj3/" target="blank"><img src={require("./images/password-generator.png")} alt="password-generator" /></a>
            <div className="work-bio">
            <h4 className="work-role">Javascript</h4>
            <h3 className="work-name"><a href="https://waters000.github.io/password-generator-proj3/" target="blank">Password Generator</a></h3>
            <p>Password generator allows a user to select a password type from various window Prompts. Such as length, Uppercase, lowercase and symbols.</p>
            </div>
        </article>
        <article className="work">
            <a href="http://coinhiz.com/" target="blank"><img src={require("./images/coinhiz.png")} alt="CoinHiz" /></a>
            <div className="work-bio">
            <h4 className="work-role">Javascript, APIs, DOM, JQuery, HTML, CSS</h4>
            <h3 className="work-name"><a href="http://coinhiz.com/" target="blank">CoinHiz</a></h3>
            <p>CoinHiz is an introductory website to cryptocurrency that pulls API data from Twitter, CoinLoire and other 3rd party sites.  Soon to be implemented with Adsense.</p>
            </div>
        </article>
        <article className="work">
            <a href="https://waters000.github.io/Weather-Dashboard/" target="blank"><img src={require("./images/weather-dashboard.png")} alt="CoinHiz" /></a>
            <div className="work-bio">
            <h4 className="work-role">Javascript, DOM, JQuery, APIs, HTML, CSS</h4>
            <h3 className="work-name"><a href="https://waters000.github.io/Weather-Dashboard/" target="blank">Weather Dashboard</a></h3>
            <p>Weather Dashboard allows a user to enter a city and return the weather data with a 5 day outlook.  Formatted in a warm style of colors and layouts.</p>
            </div>
        </article>
        <article className="work">
            <a href="https://loanmeahome.herokuapp.com/" target="blank"><img src={require("./images/loanmeahome.png")} alt="Loane Me A Home" /></a>
            <div className="work-bio">
            <h4 className="work-role">Javascript, HTML, CSS, NodeJS, HandleBar</h4>
            <h3 className="work-name"><a href="https://loanmeahome.herokuapp.com/" target="blank">Loan Me A Home</a></h3>
            <p>'Loan Me A Home" allows mortgage lenders to add their loan products to a CMS so home buyers can find the right loan for their buying criteria.</p>
            </div>
        </article>

           </div>
       </section>
     



       <section id="education" class="education">
        <div class="education-title-holder">
            <h2 class="education-title">Education</h2>
        </div>
        <div class="education-holder">
            <div class="education-info-section">
                <div class="education-image">
                    <img src={require("./images/ucf.png")} alt="profileimage"/>
                </div>
                <div class="education-info">
            <h3>UCF Bootcamp</h3><br />
            <p>Coding Bootcamp from UCF advanced coding camp with certification.<br />
                Coding program for HTML, CSS, Javascript, NodeJS, SQL<br />Year 2021-2022</p>
                </div>
        </div>
            <div class="education-info-section">
            <div class="education-image">
                <img src={require("./images/fsu.jpg")}/>
            </div>
            <div class="education-info">
            <h3>Florida State University</h3><br />
            <p>Management-information-Systems graduate program - 1year <br />
            Did not finish due to low coding in program.<br />
            Year 2017</p>
            </div>
            </div>
        <div class="education-info-section">
            <div class="education-image">
            <img src={require("./images/fsu.jpg")}/>
        </div>
        <div class="education-info">
            <h3>Florida State University</h3><br />
            <p>Bachelor of Science in Business - emphasis Real Estate<br />
            Graduated from FSU in 2008 and created online business after college.<br />
            Graduated 2008</p>
        </div>
        </div>
        <div class="education-info-section">
            <div class="education-image">
            <img src={require("./images/unf.jpg")}/>
            </div>
            <div class="education-info">
            <h3>University of North Florida</h3><br />
            <p>Studied for accomplishing business major<br />
            Drafted by LA Angels in 16th round of 2004 draft.<br />
            Year 2004</p>
        </div>
    </div>
    <div class="education-info-section">
        <div class="education-image">
            <img src={require("./images/clemson.png")}/>
        </div>
        <div class="education-info">
        <h3>Clemson University</h3><br />
        <p>Studied for Computer Science / Business<br />
        Studied computer science and business for 3 years before transferring for baseball<br />
        Year 2003</p>
        </div>
    </div>
    </div>

    </section>

        <section id="contact-me" class="steps">
             <div class="flex-row">
            <h2 class="section-title secondary-border">Contact Me</h2>
               </div>
                <div class="step">
                    <h3>Email:</h3>
                    <div class="step-info">
                        <div class="step-text">
                            <h4>Send me an Email  @ <a href="mailto:Floridarealty001@gmail.com">FloridaRealty001@gmail.com</a></h4>
                        <p>Best way to send a proposal.</p>
                        </div>
                    </div>
                </div>
         
                <div class="step">
                    <h3>Linked-In:</h3>
                    <div class="step-info">
                    <div class="step-text">
                <h4>Visit my <a href="https://www.linkedin.com/in/christopher-waters-99638570/" target="blank">LinkedIn Page.</a></h4>
                <p>Read more of my bio and interests and send me a message.</p>
                    </div>
                    </div>
                </div>
                <div class="step">
                    <h3>Github Profolio:</h3>
                    <div class="step-info">
                    <div class="step-text">
                    <h4>Check on my code <a href="https://github.com/Waters000" target="blank">Github portfolio</a></h4>
                    <p>Latest repositories and coding updates.</p>
                    </div>
                    </div>
                </div>
                <div class="step">
                    <h3>Phone Call:</h3>
                    <div class="step-info">
                <div class="step-text">
                <h4>Call me directly @ 850-320-8850</h4>
                <p>Want to talk or just have development questions, lets chat.</p>
                </div>
                </div>
            </div>
        </section>
        
   
        <footer>
            <h2>Chris Waters Portfolio</h2>
        </footer>


      
    
    </div>
  )}


export default App;



