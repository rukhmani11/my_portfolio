import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn } from 'react-icons/fa';
import {  Box, Typography, Link, IconButton } from '@mui/material';
import { Container, TextField, Button} from '@mui/material';
import Grid from '@mui/material/Grid2';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SkillItem from './SkillItem';


function App() {
  const skillsLeft = [
    { skill: 'HTML', value: 100 },
    { skill: 'CSS', value: 90 },
    { skill: 'JavaScript', value: 75 },
  ];
  
  const skillsRight = [
    { skill: 'PHP', value: 80 },
    { skill: 'WordPress/CMS', value: 90 },
    { skill: 'Photoshop', value: 55 },
  ];
  
  
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
              <a href="#contact">
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
                  </a>  <Button variant="contained" color="primary" type="submit" size="large">
                    Resume
                  </Button>
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
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="skills-wrapper">
          {/* Left Column */}
          <div className="skills-left">
            {skillsLeft.map((item, index) => (
              <SkillItem key={index} skill={item.skill} value={item.value} />
            ))}
          </div>

          {/* Right Column */}
          <div className="skills-right">
            {skillsRight.map((item, index) => (
              <SkillItem key={index} skill={item.skill} value={item.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
        

        <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>Resume</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Professional Experience */}
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>

            <div className="resume-item">
              <h4>Senior Graphic Design Specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY</em></p>
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
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure.</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design.</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers.</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Summary and Education */}
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item">
              <h4>Brandon Johnson</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
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
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.</p>
            </div>

            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


        
    <section id="contact" className="contact section" style={{ padding: '40px 0' }}>
      {/* Title and Subtitle */}
      <Container>
        <Box textAlign="center" mb={5}>
          <Typography variant="h4" component="h2" style={{ fontWeight: 'bold' }}>
            Contact
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Side - Contact Info */}
          <Grid size={4}>
            <Box display="flex" alignItems="center" mb={3}>
              <FaMapMarkerAlt size={30} className="text-primary" style={{ color: '#007bff', marginRight: '15px' }} />
              <div>
                <Typography variant="h6">Address</Typography>
                <Typography variant="body2">A108 Adam Street, New York, NY 535022</Typography>
              </div>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <FaPhoneAlt size={30} className="text-primary" style={{ color: '#007bff', marginRight: '15px' }} />
              <div>
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body2">+1 5589 55488 55</Typography>
              </div>
            </Box>

            <Box display="flex" alignItems="center">
              <FaEnvelope size={30} className="text-primary" style={{ color: '#007bff', marginRight: '15px' }} />
              <div>
                <Typography variant="h6">Email Us</Typography>
                <Typography variant="body2">info@example.com</Typography>
              </div>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid size={8}>
            <form action="forms/contact.php" method="post" className="php-email-form">
              <Grid container spacing={2}>
                <Grid size={6}>
                  <TextField fullWidth label="Your Name" variant="outlined" required />
                </Grid>
                <Grid size={6}>
                  <TextField fullWidth label="Your Email" variant="outlined" required />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Subject" variant="outlined" required />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid size={4} textAlign="center">
                  <Button variant="contained" color="primary" type="submit" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </section>

 


    <footer  id="footer" className="footer position-relative" style={{ backgroundColor: '#f8f9fa', padding: '30px 0' }}>
      <Container>
        <Box textAlign="center" mb={3}>
          <Typography variant="h3" component="h3" style={{ fontWeight: 'bold' }}>
            Brandon Johnson
          </Typography>
          <Typography variant="body1" style={{ fontStyle: 'italic' }}>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
          </Typography>
        </Box>

        {/* Social Links */}
        <Box display="flex" justifyContent="center" mb={4}>
          <IconButton href="#">
            <FaTwitter />
          </IconButton>
          <IconButton href="#">
            <FaFacebookF />
          </IconButton>
          <IconButton href="#">
            <FaInstagram />
          </IconButton>
          <IconButton href="#">
            <FaSkype />
          </IconButton>
          <IconButton href="#">
            <FaLinkedinIn />
          </IconButton>
        </Box>

        {/* Copyright and Credits */}
        <Box textAlign="center">
          <Typography variant="body2" color="textSecondary">
            <span>Copyright</span> <strong className="px-1">Alex Smith</strong> <span>All Rights Reserved</span>
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Designed by{' '}
            <Link href="https://bootstrapmade.com/" target="_blank" rel="noopener">
              BootstrapMade
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
      </main>
    </div>
  );
}

export default App;
