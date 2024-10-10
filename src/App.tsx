import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function App() {
  return (
    <div className="index-page">
      <header
        id="header"
        className="header d- flex  flex-colum justify-content"
      >
        <i className="header-toggle d-xl-none bi bi-list"></i>
        <nav id="navmennu" className="navmenu">
          <ul>
            <li>
              <a href="/" className="active">
                {" "}
                <HomeOutlinedIcon className="navicon" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about">
                <PersonOutlineOutlinedIcon className="navicon" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume">
                <DescriptionOutlinedIcon className="navicon" />
                <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="/">
                <PhotoLibraryOutlinedIcon className="navicon" />
                <span>Portfolio</span>
              </a>
            </li>
            <li>
              <a href="/">
                <TocOutlinedIcon className="navicon" />
                <span>Service</span>
              </a>
            </li>
            <li>
              <a href="/">
                <EmailOutlinedIcon className="navicon" />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section id="hero" className="hero section light-background">
          <img src="/hero-bg.jpg" alt="" />
          <div className="container" data-aos="zoom-out">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <h2>RUKHMNAI PRAJAPATI</h2>
                <p>I'm a full stack developer</p>
                <div className="social-links">
                  {/* <a href='/'><PersonOutlineOutlinedIcon className="navicon"/><span>About</span></a> */}

                  <a href="#">
                    <LinkedInIcon />
                  </a>
                  <a href="#">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div
              className="about-container"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div
                className="image-container"
                style={{ flex: "1", textAlign: "center" }}
              >
                <img src="/profile-img.jpg" className="img-fluid" alt="" />
              </div>
              <div
                className="text-container"
                style={{ flex: "2", paddingLeft: "20px" }}
              >
                <h2>UI/UX Designer &amp; Web Developer.</h2>
                <p className="fst-italic py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>1 May 1995</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>New York, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>30</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong> <span>email@example.com</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="py-3">
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* skill */}

        <section id="skills" className="skills section">
          {/* <!-- Section Title --> */}
          <div className="container section-title" data-aos="fade-up">
            <h2>Skills</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row skills-content skills-animation">
              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>HTML</span> <i className="val">100%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={10}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>CSS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>JavaScript</span> <i className="val">75%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    <span>PHP</span> <i className="val">80%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>WordPress/CMS</span> <i className="val">90%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>

                <div className="progress">
                  <span className="skill">
                    <span>Photoshop</span> <i className="val">55%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow={55}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Resume</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
  <div className="row">
    <div className="col-lg-6 order-lg-1" data-aos="fade-up" data-aos-delay="200">
      <h3 className="resume-title">Professional Experience</h3>
      <div className="resume-item">
        <h4>Senior Graphic Design Specialist</h4>
        <h5>2019 - Present</h5>
        <p>
          <em>Experion, New York, NY</em>
        </p>
        <ul>
          <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials.</li>
          <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.</li>
          <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design.</li>
          <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000.</li>
        </ul>
      </div>

      <div className="resume-item">
        <h4>Graphic Design Specialist</h4>
        <h5>2017 - 2018</h5>
        <p>
          <em>Stepping Stone Advertising, New York, NY</em>
        </p>
        <ul>
          <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
          <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
          <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
          <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
        </ul>
      </div>
    </div>

    
    <div className="col-lg-6 order-lg-0" data-aos="fade-up" data-aos-delay="100">
      <h3 className="resume-title">Summary</h3>

      <div className="resume-item pb-0">
        <h4>Brandon Johnson</h4>
        <p>
          <em>
            Innovative and deadline-driven Graphic Designer with 3+ years of
            experience designing and developing user-centered digital/print
            marketing material from initial concept to final, polished
            deliverable.
          </em>
        </p>
        <ul>
          <li>Portland par 127, Orlando, FL</li>
          <li>(123) 456-7891</li>
          <li>alice.barkley@example.com</li>
        </ul>
      </div>

      <h3 className="resume-title">Education</h3>
      <div className="resume-item">
        <h4>Master of Fine Arts &amp; Graphic Design</h4>
        <h5>2015 - 2016</h5>
        <p>
          <em>Rochester Institute of Technology, Rochester, NY</em>
        </p>
        <p>
          Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.
        </p>
      </div>

      <div className="resume-item">
        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
        <h5>2010 - 2014</h5>
        <p>
          <em>Rochester Institute of Technology, Rochester, NY</em>
        </p>
        <p>
          Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.
        </p>
      </div>
    </div>
  </div>
</div>

        </section>

        <section id="services" className="services section">


<div className="container section-title" data-aos="fade-up">
  <h2>Services</h2>
  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
</div>

<div className="container">

  <div className="row gy-4">

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item item-cyan position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
          </svg>
          <i className="bi bi-activity"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Nesciunt Mete</h3>
        </a>
        <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
      </div>
    </div>

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
      <div className="service-item item-orange position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
          </svg>
          <i className="bi bi-broadcast"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Eosle Commodi</h3>
        </a>
        <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
      </div>
    </div>

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item item-teal position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,541.5067337569781C382.14930387511276,545.0595476570109,479.8736841581634,548.3450877840088,526.4010558755058,480.5488172755941C571.5218469581645,414.80211281144784,517.5187510058486,332.0715597781072,496.52539010469104,255.14436215662573C477.37192572678356,184.95920475031193,473.57363656557914,105.61284051026155,413.0603344069578,65.22779650032875C343.27470386102294,18.654635553484475,251.2091493199835,5.337323636656869,175.0934190732945,40.62881213300186C97.87086631185822,76.43348514350839,51.98124368387456,156.15599469081315,36.44837278890362,239.84606092416172C21.716077023791087,319.22268207091537,43.775223500013084,401.1760424656574,96.891909868211,461.97329694683043C147.22146801428983,519.5804099606455,223.5754009179313,538.201503339737,300,541.5067337569781"></path>
          </svg>
          <i className="bi bi-easel"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Ledo Markt</h3>
        </a>
        <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
      </div>
    </div>

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item item-red position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,503.46388370962813C374.79870501325706,506.71871716319447,464.8034551963731,527.1746412648533,510.4981551193396,467.86667711651364C555.9287308511215,408.9015244558933,512.6030010748507,327.5744911775523,490.211057578863,256.5855673507754C471.097692560561,195.9906835881958,447.69079081568157,138.11976852964426,395.19560036434837,102.3242989838813C329.3053358748298,57.3949838291264,248.02791733380457,8.279543830951368,175.87071277845988,42.242879143198664C103.41431057327972,76.34704239035025,93.79494320519305,170.9812938413882,81.28167332365135,250.07896920659033C70.17666984294237,320.27484674793965,64.84698225790005,396.69656628748305,111.28512138212992,450.4950937839243C156.20124167950087,502.5303643271138,231.32542653798444,500.4755392045468,300,503.46388370962813"></path>
          </svg>
          <i className="bi bi-bounding-box-circles"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Asperiores Commodit</h3>
        </a>
        <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
        <a href="#" className="stretched-link"></a>
      </div>
    </div>
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
      <div className="service-item item-indigo position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,532.3542879108572C369.38199826031484,532.3153073249985,429.10787420159085,491.63046689027357,474.5244479745417,439.17860296908856C522.8885846962883,383.3225815378663,569.1668002868075,314.3205725914397,550.7432151929288,242.7694973846089C532.6665558377875,172.5657663291529,456.2379748765914,142.6223662098291,390.3689995646985,112.34683881706744C326.66090330228417,83.06452184765237,258.84405631176094,53.51806209861945,193.32584062364296,78.48882559362697C121.61183558270385,105.82097193414197,62.805066853699245,167.19869350419734,48.57481801355237,242.6138429142374C34.843463184063346,315.3850353017275,76.69343916112496,383.4422959591041,125.22947124332185,439.3748458443577C170.7312796277747,491.8107796887764,230.57421082200815,532.3932930995766,300,532.3542879108572"></path>
          </svg>
          <i className="bi bi-calendar4-week icon"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Velit Doloremque</h3>
        </a>
        <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
        <a href="#" className="stretched-link"></a>
      </div>
    </div>

    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
      <div className="service-item item-pink position-relative">
        <div className="icon">
          <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
            <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,566.797414625762C385.7384707136149,576.1784315230908,478.7894351017131,552.8928747891023,531.9192734346935,484.94944893311C584.6109503024035,417.5663521118492,582.489472248146,322.67544863468447,553.9536738515405,242.03673114598146C529.1557734026468,171.96086150256528,465.24506316201064,127.66468636344209,395.9583748389544,100.7403814666027C334.2173773831606,76.7482773500951,269.4350130405921,84.62216499799875,207.1952322260088,107.2889140133804C132.92018162631612,134.33871894543012,41.79353780512637,160.00259165414826,22.644507872594943,236.69541883565114C3.319112789854554,314.0945973066697,72.72355303640163,379.243833228382,124.04198916343866,440.3218312028393C172.9286146004772,498.5055451809895,224.45579914871206,558.5317968840102,300,566.797414625762"></path>
          </svg>
          <i className="bi bi-chat-square-text"></i>
        </div>
        <a href="#" className="stretched-link">
          <h3>Dolori Architecto</h3>
        </a>
        <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
        <a href="#" className="stretched-link"></a>
      </div>
    </div>

  </div>

</div>

</section>

<section id="contact" className="contact section">
<div className="container section-title" data-aos="fade-up">
  <h2>Contact</h2>
  <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
</div>

<div className="container" data-aos="fade" data-aos-delay="100">

  <div className="row gy-4">

    <div className="col-lg-4">
      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
        <i className="bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>A108 Adam Street, New York, NY 535022</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
        <i className="bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>

      <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
        <i className="bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>info@example.com</p>
        </div>
      </div>

    </div>

    <div className="col-lg-8">
      <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="200">
        <div className="row gy-4">

          <div className="col-md-6">
            <input type="text" name="name" className="form-control" placeholder="Your Name"/>
          </div>

          <div className="col-md-6 ">
            <input type="email" className="form-control" name="email" placeholder="Your Email" />
          </div>

          <div className="col-md-12">
            <input type="text" className="form-control" name="subject" placeholder="Subject"/>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="message" rows= {6} placeholder="Message"></textarea>
          </div>

          <div className="col-md-12 text-center">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>

            <button type="submit">Send Message</button>
          </div>

        </div>
      </form>
    </div>

  </div>

</div>

</section>

<footer id="footer" className="footer position-relative light-background">
    <div className="container">
      <h3 className="sitename">Brandon Johnson</h3>
      <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p>
      <div className="social-links d-flex justify-content-center">
        <a href=""><i className="bi bi-twitter-x"></i></a>
        <a href=""><i className="bi bi-facebook"></i></a>
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-skype"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
      </div>
      <div className="container">
        <div className="copyright">
          <span>Copyright</span> <strong className="px-1 sitename">Alex Smith</strong> <span>All Rights Reserved</span>
        </div>
        {/* <div className="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you've purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div> */}
      </div>
    </div>
  </footer>

      </main>
    </div>
  );
}

export default App;
