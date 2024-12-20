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
    { skill: 'TypeScript', value: 70 },
  ];
  
  const skillsRight = [
    { skill: 'React', value: 70 },
    { skill: '.Net Core', value: 60 },
    { skill: 'Angular', value: 55 },
    { skill: 'SQL', value: 55 },
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
          <img src="/myphoto.jpeg" alt="" />
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
            
          <h3>  I'm Rukhmani Prajapati, a dedicated Full Stack Developer with a strong focus on creating efficient, scalable applications. With years of experience in front-end and back-end development,
            I love building responsive and dynamic user interfaces.
            </h3>
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
                <img src="/profile.jpeg" className="img-fluid" alt="" />
              </div>
              <div
                className="text-container"
                style={{ flex: "2", paddingLeft: "20px" }}
              >
                <h2>Full-Stack-Developer</h2>
                <p className="fst-italic py-3">
                Full Stack Developer | Passionate About Building User-Friendly, Scalable Web Applications.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>2 Oct 2002</span>
                      </li>
                      
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+91 8369638314</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>Maharashtra</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>22</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Bachelor of Science in Information Technology</span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong> <span>prajapatirukhmani922@gmail.com</span>
                      </li>
                     
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
        {/* skill */}
        <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Areas of Expertise</h2>
        <p>
        Highlights my areas of specialization with a focus on how each skill contributes to building efficient, user-friendly, and scalable applications.
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
        Emphasizes your core skills and years of experience.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {/* Left Column - Professional Experience */}
          <div className="col-lg-6">
            <h3 className="resume-title">PROFESSIONAL EXPERIENCE</h3>

            <div className="resume-item">
              <h4> Sentient Systems Private Limited </h4>
              <h5>2024 - Present</h5>
           <b><p><em> ANJ next wave(  Present Working)</em></p></b>   
              <ul>
                <li>Developed a dynamic and interactive data dashboard that filters records based on a date range (FromDate and ToDate).</li>
                <li>Allowed users to download data from the application into Excel files and Enabled users to upload Excel files and save the data to the database and image upload.</li>
                <li>Added, deleted, and edited and, records and Select dropdown values in the web application using React.</li>
                <li>Technologies: ReactJs, MUI, JavaScript, HTML, CSS, .Net core, SQL.</li>
              </ul>
              <b><p><em> Vov ( Value of Visit )</em></p></b>
              <ul>
                <li>Added meeting schedule where users can schedule their meetings based on which user is going to meet which client employee and user can add more clients on pages.</li>
                <li>The technology used in this project is React js, .Net core, SQL, and Material ui.</li>
              </ul>
              <b> <p><em> Perfect Society</em></p></b>
              <ul>
                <li>Added parking type, building unit.</li>
                <li>Features: Society function – Society Setup, Member Management, etc.</li>
                <li>The technology used in this project is React js, .Net core, SQL, and Material UI.
                </li>
               </ul>
            </div>

            {/* <div className="resume-item">
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
            <h3 className="resume-title">PERSONAL PROJECTS</h3>
            <div className="resume-item">
              <h4>Food recipe website</h4>
              <h5>(9 Dec 2021- 20 mar 2022)</h5>
              
              <ul>
                <li>Food recipe website, we provide a search platform where a user can find videos according to their choices and we provide a reed recipe where users can read recipes there is one feature on this website where user can upload their own recipe images that they cooks with the help of this recipe website.
                </li>
                <li>I used Web Technologies: PHP, HTML, CSS, JS, for Databases: MYSQL. 
                </li>
              </ul>
            </div> 
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Prahladrai Dalmia Lions College</h4>
              <h5>2019 - 2022</h5>
              <p><em>Bachelor of Science in Information Technology (B.Sc. I.T.)</em></p>
              {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend.</p> */}
            </div>

            <div className="resume-item">
              <h4> Shri T P Bhatia College of science</h4>
              <h5>2017 - 2019</h5>
              <p><em>Higher Secondary Certificate (HSC)  12th Standard </em></p>
              {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila.</p> */}
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
                <Typography variant="body2">Charkop Kandiwali(West) Mumbai 400067 maharashtra INDIA</Typography>
              </div>
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <FaPhoneAlt size={30} className="text-primary" style={{ color: '#007bff', marginRight: '15px' }} />
              <div>
                <Typography variant="h6">Call Us</Typography>
                <Typography variant="body2">+91 8369638314</Typography>
              </div>
            </Box>

            <Box display="flex" alignItems="center">
              <FaEnvelope size={30} className="text-primary" style={{ color: '#007bff', marginRight: '15px' }} />
              <div>
                <Typography variant="h6">Email Us</Typography>
                <Typography variant="body2">prajapatirukhmani922@gmail.com</Typography>
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
            Rukhmni Prajpati
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
