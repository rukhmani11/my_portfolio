import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CiLinkedin } from "react-icons/ci";
import {
  FaGithub,
  FaFacebookF,
  FaInstagram,
  FaSkype,
  FaLinkedinIn,
} from "react-icons/fa";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { Container, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PhotoLibraryOutlinedIcon from "@mui/icons-material/PhotoLibraryOutlined";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SkillItem from "./SkillItem";

function App() {
  const skillsLeft = [
    { skill: "HTML", value: 100 },
    { skill: "CSS", value: 90 },
    { skill: "JavaScript", value: 75 },
    { skill: "TypeScript", value: 70 },
  ];

  const skillsRight = [
    { skill: "React", value: 70 },
    { skill: ".Net Core", value: 60 },
    { skill: "Angular", value: 55 },
    { skill: "SQL", value: 55 },
  ];
  const [emailLink, setEmailLink] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipientEmail = "prajapatirukmani922@gmail.com";
    const mailtoLink = `mailto:${recipientEmail}?subject=Contact Form Submission&body=
        Name: ${encodeURIComponent(formData.name)}%0D%0A
        Email: ${encodeURIComponent(formData.email)}%0D%0A
        Phone: ${encodeURIComponent(formData.phone)}%0D%0A
        Message: ${encodeURIComponent(formData.message)}`;

    setEmailLink(mailtoLink); // Save the mailto link
  };

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
                  </a>{" "}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                  >
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

            <h3>
              {" "}
              "I am Rkhmani Prajapati, a dedicated Full Stack Developer with
              extensive experience in both front-end and back-end development. I
              specialize in creating efficient, scalable applications and
              building responsive, dynamic user interfaces."
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
                  "Full Stack Developer | Passionate About Building
                  User-Friendly, Scalable Web Applications | Expertise in Modern
                  Front-End & Back-End Technologies."
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
                        <strong>Degree:</strong>{" "}
                        <span>
                          Bachelor of Science in Information Technology
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong>{" "}
                        <span>prajapatirukhmani922@gmail.com</span>
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
              Highlights my areas of specialization with a focus on how each
              skill contributes to building efficient, user-friendly, and
              scalable applications.
            </p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="skills-wrapper">
              {/* Left Column */}
              <div className="skills-left">
                {skillsLeft.map((item, index) => (
                  <SkillItem
                    key={index}
                    skill={item.skill}
                    value={item.value}
                  />
                ))}
              </div>

              {/* Right Column */}
              <div className="skills-right">
                {skillsRight.map((item, index) => (
                  <SkillItem
                    key={index}
                    skill={item.skill}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="resume section">
          <div className="container section-title">
            <h2>Resume</h2>
            <p>Emphasizes My Core Skills And Years Of xperience.</p>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="resume-title">PROFESSIONAL EXPERIENCE</h3>

                <div className="resume-item">
                  <h4>Sentient Systems Private Limited</h4>
                  <h5>2024 - Present</h5>
                  <p>
                    <strong>
                      <em>ANJ next wave (Present Working)</em>
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Developed a dynamic and interactive data dashboard that
                      filters records based on a date range (FromDate and
                      ToDate).
                    </li>
                    <li>
                      Enabled users to download data into Excel files and upload
                      Excel files to save data to the database along with image
                      uploads.
                    </li>
                    <li>
                      Added, deleted, and edited records and dropdown values in
                      the web application using React.
                    </li>
                    <li>
                      Technologies: ReactJs, MUI, JavaScript, HTML, CSS, .Net
                      core, SQL.
                    </li>
                  </ul>
                  <p>
                    <strong>
                      <em>Vov (Value of Visit)</em>
                    </strong>
                  </p>
                  <ul>
                    <li>
                      Added meeting schedules where users can organize meetings
                      with clients and add more clients on pages.
                    </li>
                    <li>
                      Technologies: ReactJs, .Net core, SQL, and Material UI.
                    </li>
                  </ul>
                  <p>
                    <strong>
                      <em>Perfect Society</em>
                    </strong>
                  </p>
                  <ul>
                    <li>Added parking types and building units.</li>
                    <li>Features: Society setup, member management, etc.</li>
                    <li>
                      Technologies: ReactJs, .Net core, SQL, and Material UI.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <h3 className="resume-title">PERSONAL PROJECTS</h3>
                <div className="resume-item">
                  <h4>Food Recipe Website</h4>
                  <h5>Dec 2021 - Mar 2022</h5>
                  <ul>
                    <li>
                      Provided a search platform where users can find videos
                      based on their preferences and read recipes.
                    </li>
                    <li>
                      Included a feature for users to upload images of recipes
                      they cooked using the website.
                    </li>
                    <li>Technologies: PHP, HTML, CSS, JS, and MySQL.</li>
                  </ul>
                </div>

                <h3 className="resume-title">EDUCATION</h3>
                <div className="resume-item">
                  <h4>Prahladrai Dalmia Lions College</h4>
                  <h5>2019 - 2022</h5>
                  <p>
                    <em>
                      Bachelor of Science in Information Technology (B.Sc. I.T.)
                    </em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Shri T P Bhatia College of Science</h4>
                  <h5>2017 - 2019</h5>
                  <p>
                    <em>Higher Secondary Certificate (HSC) 12th Standard</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact section"
          style={{ padding: "40px 0" }}
        >
          {/* Title and Subtitle */}
          <Container>
            <Box textAlign="center" mb={5}>
              <Typography
                variant="h4"
                component="h2"
                style={{ fontWeight: "bold" }}
              >
                Contact Me
              </Typography>
              {/* <Typography variant="body1" color="textSecondary">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </Typography> */}
            </Box>

            <Grid container spacing={4}>
              {/* Left Side - Contact Info */}
              <Grid size={4}>
                <Box display="flex" alignItems="center" mb={3}>
                  <FaMapMarkerAlt
                    size={30}
                    className="text-primary"
                    style={{ color: "#007bff", marginRight: "15px" }}
                  />
                  <div>
                    <Typography variant="h6">Address</Typography>
                    <Typography variant="body2">
                      Charkop Kandiwali(West) Mumbai 400067 maharashtra INDIA
                    </Typography>
                  </div>
                </Box>

                <Box display="flex" alignItems="center" mb={3}>
                  <FaPhoneAlt
                    size={30}
                    className="text-primary"
                    style={{ color: "#007bff", marginRight: "15px" }}
                  />
                  <div>
                    <Typography variant="h6">Call Us</Typography>
                    <Typography variant="body2">+91 8369638314</Typography>
                  </div>
                </Box>

                <Box display="flex" alignItems="center">
                  <FaEnvelope
                    size={30}
                    className="text-primary"
                    style={{ color: "#007bff", marginRight: "15px" }}
                  />
                  <div>
                    <Typography variant="h6">Email Us</Typography>
                    <Typography variant="body2">
                      prajapatirukhmani922@gmail.com
                    </Typography>
                  </div>
                </Box>
              </Grid>

              {/* Right Side - Contact Form */}
              <Grid size={8}>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <TextField
                        label="Name"
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Email"
                        color="secondary"
                        fullWidth
                        variant="outlined"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        label="Phone"
                        color="secondary"
                        fullWidth
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid size={6}>
                      <TextField
                        color="secondary"
                        fullWidth
                        multiline
                        rows={5}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid size={6} textAlign="center">
                      <Button variant="contained" color="primary" type="submit">
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Container>
        </section>

        <footer
          id="footer"
          className="footer position-relative"
          style={{ backgroundColor: "#f8f9fa", padding: "30px 0" }}
        >
          <Container>
            <Box textAlign="center" mb={3}>
              {/* <Typography variant="h3" component="h3" style={{ fontWeight: 'bold' }}>
            Rukhmni Prajpati
          </Typography> */}
              {/* <Typography variant="body1" style={{ fontStyle: 'italic' }}>
            Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.
          </Typography> */}
            </Box>

            {/* Social Links */}
            <Box display="flex" justifyContent="center" mb={4}>
              <IconButton href="https://github.com/" target="_blank">
                <FaGithub />
              </IconButton>
              <IconButton href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
              </IconButton>
              <IconButton href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedinIn />
              </IconButton>
              {/* <IconButton href="#">
            <FaLinkedinIn />
          </IconButton> */}
            </Box>

            {/* Copyright and Credits */}
            <Box textAlign="center">
              {/* <Typography variant="body2" color="textSecondary">
            <span>Copyright</span> <strong className="px-1">Alex Smith</strong> <span>All Rights Reserved</span>
          </Typography> */}
              <Typography variant="body2" color="textSecondary">
                Designed & Developed by Rkhmani Prajapati
                {/* <Link href="https://bootstrapmade.com/" target="_blank" rel="noopener">
              BootstrapMade
            </Link> */}
              </Typography>
            </Box>
          </Container>
        </footer>
      </main>
    </div>
  );
}

export default App;
