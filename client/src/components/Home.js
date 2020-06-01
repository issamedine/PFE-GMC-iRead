import React, { useState, useEffect } from "react";
import { Carousel, Card } from "react-bootstrap";
import AOS from "aos";
import { useSpring, animated } from "react-spring";

import "aos/dist/aos.css";
import "./home.scss";

// import slide1 from "./imgs/slide1.jpg";
// import slide2 from "./imgs/slide2.jpg";
// import slide3 from "./imgs/slide3.jpg";
// import slide4 from "./imgs/slide4.jpg";

import team1 from "./imgs/team1.jpg";
import team2 from "./imgs/team-2.jpg";
import team3 from "./imgs/team-3.jpg";

import About from "./imgs/inner-image.png";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const staff = [
    {
      name: "Alan Walker",
      functionality: "Librarian",
      img: team1,
      color: "Primary",
    },
    {
      name: "Harry T Nevvit",
      functionality: "Manager",
      img: team2,
      color: "Secondary",
    },
    {
      name: "eStiven William",
      functionality: "Director",
      img: team3,
      color: "Success",
    },
  ];

  const spring = useSpring({
    from: { val: 0 },
    to: { val: 458 },
    config: { duration: 4000 },
  });

  return (
    <>
      {/* START SLIDER */}
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="bg-img-wrapper1">
          <div className="layer"></div>
          {/* <img className="w-100" src={slide1} alt="First slide" /> */}
          <Carousel.Caption data-aos="zoom-in" className="desc-slide ">
            <h3 className="pb-5">
              More Than &nbsp;
              <animated.div style={{ display: "inline" }}>
                {spring.val.interpolate((val) => Math.floor(val))}
              </animated.div>
              &nbsp; Book Over Here
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-img-wrapper2">
          <div className="layer"></div>

          {/* <img className="d-block w-100" src={slide2} alt="Second slide" /> */}

          <Carousel.Caption>
            <h3 className="pb-5">More Than 458 Book Over Here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-img-wrapper3">
          <div className="layer"></div>

          {/* <img className="d-block w-100" src={slide3} alt="Third slide" /> */}

          <Carousel.Caption>
            <h3 className="pb-5">More Than 458 Book Over Here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="bg-img-wrapper4">
          <div className="layer"></div>

          {/* <img className="d-block w-100" src={slide4} alt="Third slide" /> */}

          <Carousel.Caption>
            <h3 className="pb-5">More Than 458 Book Over Here</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* END SLIDER */}

      {/* START ABOUT US */}
      <section id="about-us">
        <div className="container">
          <div className="desc-about text-center">
            <h3>About Us</h3>
            <hr
              className="my-5"
              style={{ width: "20%", border: "0.1px solid #2352c5" }}
            />
            <p className="txt-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, quam vitae est Sed non eros elementum nulla sodales
              ullamcorper
            </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-8">
              <div className="my-5">
                <span className="circle">
                  <i class="fas fa-circle"></i>
                  <i class="fas fa-circle mx-2"></i>
                  <i class="fas fa-circle"></i>
                </span>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies eros pellentesque eros interdum, a efficitur
                  tellus malesuada. Nunc non metus quis elit dictum ultricies.
                  Quisque ultricies aliquam arcu.
                </p>
              </div>
              <div className="row">
                <div data-aos="flip-up" className="col-xs-12 col-md-6">
                  <span className="barre-item">
                    <i class="far fa-id-badge"></i>
                    <hr />
                  </span>
                  <h4 className="my-3">Member Card</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                    Nullam ultricies eros pellentesque
                  </p>
                </div>
                <div data-aos="flip-up" className="col-xs-12 col-md-6">
                  <span className="barre-item">
                    <i class="fas fa-medal"></i>
                    <hr />
                  </span>
                  <h4 className="my-3">High Quality Books</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                    Nullam ultricies eros pellentesque
                  </p>
                </div>
                <div data-aos="flip-up" className="col-xs-12 col-md-6">
                  <span className="barre-item">
                    <i class="fas fa-book-open"></i>
                    <hr />
                  </span>
                  <h4 className="my-3">Free All Books</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                    Nullam ultricies eros pellentesque
                  </p>
                </div>
                <div data-aos="flip-up" className="col-xs-12 col-md-6">
                  <span className="barre-item">
                    <i class="fas fa-book"></i>
                    <hr />
                  </span>
                  <h4 className="my-3">Up To Date Books</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consecte tur adipiscing elit.
                    Nullam ultricies eros pellentesque
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="col-xs-12 offset-md-1 col-md-3 text-center"
            >
              <img src={About} alt="" width="300" />
            </div>
          </div>
        </div>
      </section>
      {/* END ABOUT US */}

      {/* START MEET OUR STAFF */}
      <section id="staff" className="py-5 text-center">
        <div className="container">
          <div className="desc-staff mb-5 text-white">
            <h3>Meet Our Staff</h3>
            <hr
              style={{ width: "20%", border: "0.1px solid #afafaf" }}
              className="my-5"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              tempora non quod tempore asperiores
            </p>
          </div>

          <div className="wrapper-staff d-flex justify-content-center">
            {staff.map((el) => (
              <Card
                className="items-staff"
                data-aos="fade-up"
                style={{ width: "18rem" }}
              >
                <Card.Img variant="top" src={el.img} />
                {/* <hr style={{ width: "20%", margin: "0 auto" }} /> */}
                <Card.Body className="text-center">
                  <Card.Title>
                    <strong>{el.name}</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>{el.functionality}</p>
                  </Card.Text>
                  <p className="color-social-media">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-linkedin-in mx-3 "></i>
                    <i class="fab fa-twitter"></i>
                  </p>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* END MEET OUR STAFF */}
    </>
  );
}

export default Home;
