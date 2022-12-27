import "./App.css";
import vector1 from "./vectors/Asset 70.png";
import vector2 from "./vectors/Asset 29.png";
import vector3 from "./vectors/Asset 56.png";
import barcode from "./vectors/barcode1.png";
import vector4 from "./vectors/Asset 63.png";
import me from "./vectors/me2.png";
import vector5 from "./vectors/Asset 65.png";
import arrow from "./vectors/arrow.png";
import vector6 from "./vectors/Asset 39.png";
import vector7 from "./vectors/Asset 61.png";
import uparrow from "./vectors/arrow1.png";
import $ from "jquery";

function App() {
  $("a[href='#top']").click(function () {
    $("body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  return (
    <>
      <div className="App">
        <header className="App-header"></header>

        <div class="container4">
          <div class="Empty11"></div>
          <div class="Nav1">
            <div class="choiceWrapper4">
              <a href="#about1">
                <div class="choice4">ABOUT</div>
              </a>
              <a href="#portfolio1">
                <div class="choice4">PORTFOLIO</div>
              </a>
              <a href="#contact1">
                <div class="choice4">CONTACT</div>
              </a>
            </div>
          </div>
          <div class="Contact1"></div>
          <div class="Empty12"></div>
          <div class="Text1-4">
            <img src={vector4} class="vector4" />
            <div class="text4text4">
              MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE
              BUSINESS ISSUES, AND ARE USER FRIENDLY.
            </div>
          </div>
          <div class="Text1-1">
            <div class="text1text4">unique {"&"}</div>
          </div>
          <div class="Text1-2">
            <div class="text2text4">creative</div>
          </div>
          <div class="Text1-3">
            <div class="text3text4">websites</div>
          </div>
        </div>
        <div class="container">
          <div class="Contact">
            <a href="#contact">
              <div class="contactText">CONTACT</div>
            </a>
          </div>
          <div class="Nav">
            <div class="navWrapper">
              <div class="name">TEA ABUSELIDZE</div>
              <a href="#about">
                <div class="choices">ABOUT ME</div>
              </a>
              <a href="#portfolio">
                <div class="choices">PORTFOLIO</div>
              </a>
            </div>
          </div>
          <div class="Text1">
            <div class="text1text">minimalistic</div>
          </div>
          <div class="Text2">
            <div class="text2text">{"&"} creative</div>
          </div>
          <div class="Text3">
            <div class="text3text">websites</div>
          </div>
          <div class="Text6">
            <div class="Text6Wrapper">
              <div class="linkWrapper">
                <div class="links">
                  <a
                    href="https://github.com/ttaxzn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB {">>"}
                  </a>
                </div>

                <div class="links">
                  <a
                    href="https://www.linkedin.com/in/tea-abuselidze-42aa2a1a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKEDIN {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.instagram.com/fxckteaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.facebook.com/tea.abuselidze.77"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FACEBOOK {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.twitter.com/fxckteaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TWITTER {">>"}
                  </a>
                </div>
              </div>
              <img src={barcode} class="barcode" />
            </div>
          </div>
          <div class="Text4">
            <div class="Text4Wrapper">
              <img src={vector1} class="vector1" />
              <div class="text4text">
                MY WEBSITES EMBODY A MINIMALISTIC AND CREATIVE DESIGN, SOLVE
                BUSINESS ISSUES, AND ARE USER FRIENDLY.
              </div>
            </div>
            <div class="Text4Wrapper2">
              <img src={vector2} class="vector2" />
            </div>
          </div>
          <div class="Text5">
            <div class="Text5Wrapper">
              <img src={vector3} class="vector3" />
            </div>
          </div>
          <div class="Empty1"></div>
          <div class="Empty2"></div>
          <div class="Empty3"></div>
          <div class="Empty4"></div>
        </div>
      </div>

      <div class="one">
        <div class="container1">
          <div class="Empty1111"></div>
          <div class="Empty2111"></div>
          <div class="Empty3111"></div>
          <div class="Empty4111"></div>
          <div class="Text7" id="about">
            <div class="text7text">
              HELLO {":)"}
              <br></br>
              MY NAME IS TEA
            </div>
            <br></br>
            <br></br>
            <div class="text7cont">
              I AM A WEB DESIGNER, SOFTWARE ENGINEER, AND STUDENT AT THE
              UNIVERSITY OF MISSOURI - KANSAS CITY
            </div>
            <br></br>
            <div class="text7cont">
              I IMPLEMENT COMPLEX WEBSITE DEVELOPMENT BY CREATING A VISUAL
              INTERFACE {"(UI)"} AND BUILDING A USER EXPERIENCE
              {" (UX)"} TO FURTHER CODING IT FROM SCRATCH
            </div>
            <br></br>
          </div>
          <div class="Text8">
            <img src={me} class="me" />
          </div>
          <div class="Portfolio" id="portfolio">
            <div class="portfolioWrapper">
              <div class="portfolioText">PORTFOLIO</div>
              <div class="portfolioVectors">
                <img src={vector5} />
              </div>
            </div>
          </div>
        </div>

        <div class="container5">
          <div class="Empty13"></div>
          <div class="Empty12"></div>
          <div class="Text1-5" id="about1">
            <div class="text5text5">
              HELLO {":)"}
              <br></br>
              MY NAME IS TEA
            </div>
            <br></br>
            <br></br>
            <div class="text5cont">
              I AM A WEB DESIGNER, SOFTWARE ENGINEER, AND STUDENT AT THE
              UNIVERSITY OF MISSOURI - KANSAS CITY
            </div>
            <br></br>
            <div class="text5cont">
              I IMPLEMENT COMPLEX WEBSITE DEVELOPMENT BY CREATING A VISUAL
              INTERFACE {"(UI)"} AND BUILDING A USER EXPERIENCE
              {" (UX)"} TO FURTHER CODING IT FROM SCRATCH
            </div>
          </div>
          <div class="Text1-6">
            <img src={me} class="me5" />
          </div>
        </div>
      </div>

      <div class="two">
        <div class="container2">
          <div class="Empty5111"></div>
          <div class="Empty6111"></div>
          <div class="Contact1">
            <div class="Process">
              <div class="ProcessWrapper">
                <div class="processText">WORK PROCESS</div>
                <div class="processVectors">
                  <img src={vector6} class="vector6" />
                </div>
              </div>
            </div>
          </div>
          <div class="Box1">
            <div class="topleft4">
              <div class="toplefttext">TBD</div>
              <br></br>
              <div class="topleftttext2">
                UPCOMING INTERNSHIP PROJECT FOR <br></br>SUMMER 2023
              </div>
            </div>
            <div class="topright4">
              <img src={arrow} />
            </div>
            <div class="bottomleft4">BEST BUY</div>
            <div class="bottomright4">2023</div>
          </div>
          <div class="Box3">
            <div class="topleft4">
              <div class="toplefttext">FOUNDATIONS</div>
              <br></br>
              <div class="topleftttext2">
                WEB MARKETING SERVICE TO CREATE BRAND
                <br></br> AWARENESS AND CONVERT TARGET AUDIENCE
              </div>
            </div>
            <div class="topright4">
              <a
                href="https://github.com/ttaxzn/foundations"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arrow} />
              </a>
            </div>
            <div class="bottomleft4">CLIENTELE PROJECT</div>
            <div class="bottomright4">2022</div>
          </div>

          <div class="Box2">
            <div class="topleft4">
              <div class="toplefttext">PORTFOLIO</div>
              <br></br>
              <div class="topleftttext2">YOU'RE LOOKIN' AT IT!</div>
            </div>
            <div class="topright4">
              <a
                href="https://github.com/ttaxzn/myweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arrow} />
              </a>
            </div>
            <div class="bottomleft4">TEA ABUSELIDZE</div>
            <div class="bottomright4">2022</div>
          </div>
          <div class="Box4">
            <div class="topleft4">
              <div class="toplefttext">LUMOS</div>
              <br></br>
              <div class="topleftttext2">
                EMPLOYEE FACING SERVICE DISPLAYING <br></br> DISTRIBUTION
                CHANNELS AND ANALYTICS
              </div>
            </div>
            <div class="topright4">
              <a
                href="https://www.figma.com/file/3XIlmJnS7DI4561jQVrPOp/Lumos---Dev?node-id=3921%3A486358&t=fxsuj0qlcs3hrH7X-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arrow} />
              </a>
            </div>
            <div class="bottomleft4">WALMART</div>
            <div class="bottomright4">2022</div>
          </div>
        </div>

        <div class="mobile3">
          <div class="mobileempty1"></div>
          <div class="mobileempty2"></div>
          <div class="mobiletitle" id="portfolio1">
            <div class="mobileportfolioWrapper">
              <div class="mobileportfoliotext">PORTFOLIO</div>
            </div>
          </div>
          <div class="mobiletext1">
            <div class="mobileleft">
              <div class="porttitle">TBD</div>
              <div class="porttext">
                UPCOMING INTERNSHIP PROJECT FOR SUMMER 2023
              </div>
              <div class="porttext">BEST BUY</div>
            </div>

            <div class="mobileright">
              <img src={arrow} class="mobileimg" />
              <div class="mobileyear">2023</div>
            </div>
          </div>
          <div class="mobiletext2">
            <div class="mobileleft">
              <div class="porttitle">LUMOS</div>
              <div class="porttext">
                EMPLOYEE FACING DISTRIBUTION ANALYTICS SERVICE
              </div>
              <div class="porttext">WALMART</div>
            </div>

            <div class="mobileright">
              <a
                href="https://www.figma.com/file/3XIlmJnS7DI4561jQVrPOp/Lumos---Dev?node-id=3921%3A486358&t=fxsuj0qlcs3hrH7X-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={arrow} class="mobileimg" />
              </a>
              <div class="mobileyear">2022</div>
            </div>
          </div>
          <div class="mobiletitle2">
            <div class="mobileprocesstext">WORK PROCESS</div>
          </div>
          <div class="mobileempty3"></div>
          <div class="mobileempty4"></div>
        </div>
      </div>
      <div class="three">
        <div class="mobilework">
          <div class="mobilestep1">
            <div class="step1wrapper">
              <div class="step1mobile">01. BRIEF AND ANALYTICS</div>
              <div class="step1mobiletext">
                WE CONDUCT AN INTERVIEW, AND THEN I LEARN ALL THE DETAILS OF A
                PROJECT AND THE SPECIFIC DETAILS OF A BUSINESS. I RESEARCH
                COMPETITORS, COLLECT REFERENCES, FORM IDEAS FOR A PROJECT, AND
                DEVELOP A STRUCTURE FOR A FUTURE SITE.
              </div>
            </div>
          </div>
          <div class="mobilestep2">
            <div class="step1wrapper">
              <div class="step1mobile">02. PROTOTYPE AND DESIGN</div>
              <div class="step1mobiletext">
                I CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER
                EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN
                CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT
                BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE
                SELECTED CONCEPT.
              </div>
            </div>
          </div>
          <div class="mobilestep3">
            <div class="step1wrapper">
              <div class="step1mobile">03. LAYOUT AND LAUNCH</div>
              <div class="step1mobiletext">
                WHEN THE DESIGN IS APPROVED, I START THE SITE-BUILDING ON TILDA.
                I DEVELOP ANIMATION, CONNECT FORMS AND SERVICES, AND PERFORM
                BASIC SEO SETUP. WE TEST THE SITE FOR ERRORS AND LAUNCH IT.
              </div>
            </div>
          </div>
        </div>

        <div class="container44">
          <div class="Box11">
            <div class="stepWrapper">
              <div class="number">01. BRIEF AND ANALYTICS</div>
              <div class="text">
                WE CONDUCT AN INTERVIEW, AND THEN I LEARN ALL THE DETAILS OF A
                PROJECT AND THE SPECIFIC DETAILS OF A BUSINESS. I RESEARCH
                COMPETITORS, COLLECT REFERENCES, FORM IDEAS FOR A PROJECT, AND
                DEVELOP A STRUCTURE FOR A FUTURE SITE.
              </div>
            </div>
          </div>
          <div class="Box12">
            <div class="stepWrapper">
              <div class="number">02. PROTOTYPE AND DESIGN</div>
              <div class="text">
                {
                  "I CREATE A WEBSITE PROTOTYPE TAKING INTO ACCOUNT THE USER EXPERIENCE (UX). AFTER APPROVAL, I DEVELOP TWO VISUAL DESIGN CONCEPTS (UI) FOR 2 BLOCKS (THE MAIN SCREEN AND THE SUBSEQUENT BLOCK), THEN I START FULL-FLEDGED DEVELOPMENT BASED ON THE SELECTED CONCEPT."
                }
              </div>
            </div>
          </div>
          <div class="Box13">
            <div class="stepWrapper">
              <div class="number">03. LAYOUT</div>
              <div class="text">
                WHEN THE DESIGN IS APPROVED, I START THE SITE-BUILDING ON TILDA.
                I DEVELOP ANIMATION, CONNECT FORMS AND SERVICES, AND PERFORM
                BASIC SEO SETUP. WE TEST THE SITE FOR ERRORS AND PROCEED TO STEP
                4.
              </div>
            </div>
          </div>
          <div class="Box14">
            <div class="stepWrapper">
              <div class="number">04. LAUNCH</div>
              <div class="text">
                AFTER ENSURING ALL ERRORS HAVE BEEN SETTLED, WE PREPARE FOR THE
                OFFICIAL LAUNCH OF THE PROJECT.
              </div>
            </div>
          </div>
          <div class="Empty30"></div>
          <div class="Contact40" id="contact">
            <div class="contact40Wrapper">
              <div class="contact40Text">CONTACT</div>
              <img src={vector7} class="vector7" />
            </div>
          </div>
          <div class="Empty40"></div>
        </div>
      </div>
      <div class="four">
        <div class="container3">
          <div class="Text13">
            <div class="contactWrapper">
              <div class="title">
                LET'S MAKE SOMETHING <br></br> INCREDIBLE TOGETHER
              </div>
              <br></br>
              <div class="linkWrapper1">
                <div class="links">
                  <a
                    href="https://github.com/ttaxzn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB {">>"}
                  </a>
                </div>

                <div class="links">
                  <a
                    href="https://www.linkedin.com/in/tea-abuselidze-42aa2a1a9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LINKEDIN {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.instagram.com/fxckteaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    INSTAGRAM {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.facebook.com/tea.abuselidze.77"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FACEBOOK {">>"}
                  </a>
                </div>
                <div class="links">
                  <a
                    href="https://www.twitter.com/fxckteaa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TWITTER {">>"}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="Text14">
            <div class="formwrap">
              <form
                action="https://public.herotofu.com/v1/e7524860-8274-11ed-b38f-a1ed22f366b1"
                method="post"
                class="form"
              >
                <div>
                  <input
                    name="Name"
                    id="name"
                    type="text"
                    placeholder="NAME"
                    class="emailname"
                    required
                  />
                </div>
                <div>
                  <input
                    name="Email"
                    id="email"
                    type="email"
                    placeholder="EMAIL"
                    class="email"
                    required
                  />
                </div>

                <div>
                  <input
                    name="Text"
                    id="text"
                    type="text"
                    placeholder="MESSAGE"
                    class="emailmessage"
                    required
                  />
                </div>
                <div>
                  <input type="submit" value="Submit" class="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="container7">
          <div class="Empty16"></div>
          <div class="Text1-11" id="contact1">
            <div class="contacttextmobile">CONTACT</div>
          </div>
          <div class="Empty17"></div>
          <div class="Text1-12">
            <div class="mobilecontactwrapper1">
              <div class="mobilecontacttitle">
                LET'S MAKE SOMETHING INCREDIBLE TOGETHER
              </div>
            </div>
          </div>
          <div class="Text1-13">
            <div class="formwrap1">
              <form
                action="https://public.herotofu.com/v1/e7524860-8274-11ed-b38f-a1ed22f366b1"
                method="post"
                class="form1"
              >
                <div>
                  <input
                    name="Name"
                    id="name"
                    type="text"
                    placeholder="NAME"
                    class="emailname1"
                    required
                  />
                </div>
                <div>
                  <input
                    name="Email"
                    id="email"
                    type="email"
                    placeholder="EMAIL"
                    class="email1"
                    required
                  />
                </div>

                <div>
                  <input
                    name="Text"
                    id="text"
                    type="text"
                    placeholder="MESSAGE"
                    class="emailmessage1"
                    required
                  />
                </div>
                <div>
                  <input type="submit" value="Submit" class="submit1" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="scrollup">
          <button class="scroll">
            <a href="#top">
              <img src={uparrow} class="uparrow" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
