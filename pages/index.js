import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState ,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, FreeMode } from "swiper";



export default function Home() {
  
  const [isHovered, setIsHovered] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const calculateTransform = (x, y) => {
    const xAxis = (window.innerWidth / 2 - x) / 25;
    const yAxis = (window.innerHeight / 2 - y) / 25;
    return `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const handleMouseMove = (e) => {
    const transform = calculateTransform(e.clientX, e.clientY);
    setTransformStyle(transform);
  };

  return (
    <>
      <Head>
        <title>Microsoft Dynamics Solutions Partner in USA | Dynamics Square</title>
        <meta
          name="description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <link rel="canonical" href="https://www.dynamicssquare.com/" />
        <meta
          property="og:title"
          content="Microsoft Dynamics Solutions Partner in USA | Dynamics Square"
        />
        <meta property="og:site_name" content="Dynamics Square" />
        <meta property="og:url" content="https://www.dynamicssquare.com" />
        <meta
          property="og:description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dynamicssquare.com/img/home-page-og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dynamicssquare.com/"
        />
        <meta
          property="twitter:title"
          content="Microsoft Dynamics Solutions Partner in USA | Dynamics Square"
        />
        <meta
          property="twitter:description"
          content="Dynamics Square is the USA's leading Microsoft Solutions Partner. Contact us at +1-281-899-0865 for implementation, upgrade, and consulting services."
        />
        <meta
          property="twitter:image"
          content="https://www.dynamicssquare.com/img/home-page-og.png"
        />


      </Head>

      <div className="new-banner">
        <div className="container">
          <div className="row d-flex d-f-c">
            <div className="col-lg-6 align-self-center">
              <div className="home-into-page-title">
                <h1>One of the USA's Top Microsoft Dynamics 365 partners</h1>
                <p>Streamline your end-to-end business operations, optimize resources, maximize ROI, and accelerate business growth with AI-powered Microsoft cloud solutions.</p>
                <div className="new-btn-home">
                  <Link href="#exampleModal" >
                    <a className="bts" data-bs-toggle="modal">
                      <span>Talk to an Expert <i class="bi bi-plus-circle"></i></span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="home-into-video-title">
                <div className="main-v">
                  {/* <video autoPlay muted loop>
                    <source src="/video/DS-banner-video.mp4"></source>
                  </video> */}
                  <div className="video pulse">  <img src="/video/banner-video-ds.svg" alt="" /></div>
                  <div className="over-ima">
                    <img src="/img/hand-icons.png" alt="image" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <section className="bg-2112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>500+ Global Businesses Trust Us</h2>
                <p>Our AI-driven Microsoft Cloud Solutions are helping 500+ worldwide businesses grow and scale at a rapid rate, leveraging digital transformation.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="home-clint">
              <ul>
                <li>
                  <Image
                    src="/img/clients/JVEquip_logo.png"
                    className="img-fluid"
                    alt="JVEquip_logo"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/Spectra-Aluminum-logo-new.png"
                    className="img-fluid"
                    alt="Spectra-Aluminum-logo"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/MexiLand_logos.png"
                    className="img-fluid"
                    alt="MexiLand_logos"
                    width={200}
                    height={80}
                  />
                </li>
                <li>
                  <Image
                    src="/img/clients/VidPro_logo.png"
                    className="img-fluid"
                    alt="VidPro_logo"
                    width={200}
                    height={80}
                  /></li>
                <li>
                  <Image style={{ mixBlendMode: 'darken' }}
                    src="/img/clients/PLASP-LOGO.png"
                    className="img-fluid"
                    alt="PLASP-LOGO"
                    width={200}
                    height={80}
                  />
                </li>
              </ul>
            </div>
            <hr className="hr-custom-home" />
          </div>
        </div>
      </section>

      <section className="bg-2112" style={{ marginTop: "-70px" }}>
        <div className="container">
          <div className="row justify-content-center">

            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Get Unmatched Services from Dynamics Square</h2>
                <p>Drive your business success by implementing tailored and powerful innovative solutions for all industries.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="shpe-bg">
                <div className="abs"><img src="/img/home/nee-sahpe.png" alt="bgiconns" /></div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">
                  <div className="gr">
                    <img src="/img/home/Implementation-icon.png" alt="Implementation-icon" />
                    <video autoPlay muted loop>
                      <source src="/video/Implementation-icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Implementation</h3>
                  <p>Supercharge your business efficiency with Dynamics 365 implementation services. Unify data, robust cloud security, simplify business operations, and automate workflows to minimize your IT costs.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">

                  <div className="gr">
                    <img src="/img/home/Upgrade-icon.png" alt="Upgrade-icon" />
                    <video autoPlay muted loop>
                      <source src="/video/Upgrade-icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Upgrade</h3>
                  <p>Modernize your business by utilizing cloud CRM and ERP solutions with Dynamics 365 Upgrade Services. We assess, recommend, and upgrade your legacy solution to garner more growth opportunities.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">

                  <div className="gr">
                    <img src="/img/home/Support-icon.png" alt="Support-icon" />
                    <video autoPlay muted loop>
                      <source src="/video/Support-icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Support</h3>
                  <p>Get seamless Dynamics 365 Support services for consistent business growth, irrespective of complexities. 150+ technical consultants are available to offer personalized support at a cost-effective pricing structure.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">

                  <div className="gr">
                    <img src="/img/home/Consulting-Icon.png" alt="Consulting-Icon" />
                    <video autoPlay muted loop>
                      <source src="/video/Consulting-Icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Consulting</h3>
                  <p>Maximize ROI and achieve targets with our Dynamics 365 consulting services. We offer comprehensive strategies, expert implementation, and right path to fuel your business's growth.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">

                  <div className="gr">
                    <img src="/img/home/Audit-icon.png" alt="Audit-icon" />
                    <video autoPlay muted loop>
                      <source src="/video/Audit-icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Audit</h3>
                  <p>Evaluate your business effectiveness with our business-centric Dynamics 365 Audit services. Get desired results, achieve planned targets, and ensure optimum business performance.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="home_servce-_card">
                <a href="/">

                  <div className="gr">
                    <img src="/img/home/training-icon.png" alt="training-icon" />
                    <video autoPlay muted loop>
                      <source src="/video/training-icon.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <h3>Training</h3>
                  <p>Reap utmost value by utilizing advanced features from your newly installed business solutions. We embrace a 360-degree training approach to help you achieve maximum results.</p>
                  <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>150+</span>
                  <img src="/img/home/diversity_3.png" alt="diversity_3" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Microsoft-certified technical consultants are just a call away to help you out, irrespective of the errors of the business solution.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>99%</span>
                  <img src="/img/home/hotel_class.png" alt="hotel_class" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Customer satisfaction is the sole reason we have been working for our 500+ clients round the clock.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="acive-card">
                <div className="left">

                  <span>11+</span>
                  <img src="/img/home/trophy.png" alt="trophy" />
                </div>
                <div className="right">
                  <div className="bttom-shape">
                    <img src="/img/home/Union.png" alt="Union" />
                  </div>
                  <p>Years of experience have taught us to resolve challenging business issues, in no time with a 100% success rate.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="slider-hone-section bg-2112">
        <div className="container-fluid">
          <div className="row justify-content-end">

            <div className="col-lg-7 g-0">
              <div className="home-new-ind-slider">
                <Swiper
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >

                  <SwiperSlide>
                    <div className="slider-inner pic-1">
                      <div className="bg-im">
                        {/* <img src="/img/home/inductry-bg-1.jpg" alt="inductry-bg-1" /> */}
                        <div className="slider-contet">
                          <h3>Manufacturing</h3>
                          <h4>Streamline production with next-gen Manufacturing solutions</h4>
                          <p>Eliminate language barriers, reduce equipment downtime, ensure continuous supply chain, monitor inventory, and improve the overall efficiency of your manufacturing plant.</p>
                          <div className="new-btn-home">
                            <Link href="/" >
                              <a className="bts">
                                <span>Learn More  <i class="bi bi-plus-circle"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1">
                      <div className="bg-im">
                        {/* <img src="/img/home/inductry-bg-1.jpg" alt="inductry-bg-1" /> */}
                        <div className="slider-contet">
                          <h3>Manufacturing</h3>
                          <h4>Streamline production with next-gen Manufacturing solutions</h4>
                          <p>Eliminate language barriers, reduce equipment downtime, ensure continuous supply chain, monitor inventory, and improve the overall efficiency of your manufacturing plant.</p>
                          <div className="new-btn-home">
                            <Link href="/" >
                              <a className="bts">
                                <span>Learn More  <i class="bi bi-plus-circle"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider-inner pic-1">
                      <div className="bg-im">
                        {/* <img src="/img/home/inductry-bg-1.jpg" alt="inductry-bg-1" /> */}
                        <div className="slider-contet">
                          <h3>Manufacturing</h3>
                          <h4>Streamline production with next-gen Manufacturing solutions</h4>
                          <p>Eliminate language barriers, reduce equipment downtime, ensure continuous supply chain, monitor inventory, and improve the overall efficiency of your manufacturing plant.</p>
                          <div className="new-btn-home">
                            <Link href="/" >
                              <a className="bts">
                                <span>Learn More  <i class="bi bi-plus-circle"></i></span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
          </div>
        </div>

      </div>


      <div className="container" style={{ marginTop: "-300px" }}>
        <div className="row">
          <div className="col-lg-5 align-self-center">
            <div className="slider-left-info">
              <div className="bg-posti">
                <img src="/img/home/shape-down.png" alt="shape-down" />
              </div>
              <h2>Industry <br /> Tailored Solutions</h2>
              <p>Bring agility, sustainability, and empower your businesses to achieve more. Get tailored solutions for all industries, harness the data, and capture insights using AI-enabled software.</p>
            </div>
          </div>

        </div>
      </div>

      <section className="bg-top-pd">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Why Businesses Trust Dynamics Square?</h2>
                <p>Dynamis Square is the leading Microsoft Dynamics 365 partner, offering future-ready business solutions to global organizations.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="testmonial-slide-home">
                <div className="img-1">
                  <img src="/img/home/quote-left.png" alt="" />
                </div>
                <Swiper
                  autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                >

                  <SwiperSlide>

                    <div className="test-inner">
                      <p>We were using an outgrown legacy system with potential chances of errors, data loss, and cyber-attacks. These are some of the reasons that pushed us to upgrade to Dynamics 365 Finance and Operations with a cloud deployment. The team at Dynamics Square has successfully implemented this solution in the stated time without any after-sales cost.</p>
                      <span>-Chief Financial Officer at a Non-profit organization.</span>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="test-inner">
                      <p>We were using an outgrown legacy system with potential chances of errors, data loss, and cyber-attacks. These are some of the reasons that pushed us to upgrade to Dynamics 365 Finance and Operations with a cloud deployment. The team at Dynamics Square has successfully implemented this solution in the stated time without any after-sales cost.</p>
                      <span>-Chief Financial Officer at a Non-profit organization.</span>
                    </div>
                  </SwiperSlide>

                </Swiper>
                <div className="img-2">
                  <img src="/img/home/quote-right.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services  bg-2112">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Explore Microsoft Dynamics 365 Solutions: Powerful and Effective</h2>
                <p>Automate your business, simplify operations, and redefine the way you deal with new opportunities using powerful Dynamics 365 solutions.</p>
              </div>
            </div>
          </div>
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <div className="service-box  service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/business-center-logo.svg"
                    alt="business-center-logo"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p>
                  An all-in-one business solution specifically for SMBs that offers a 360-degree holistic view of the entire business with full transparency across different operations.
                </p>
                <Link href="/products/dynamics-365-business-central/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/finace-icons.svg"
                    alt="finace-icons"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Finance
                  </h3>
                </div>
                <p>
                  Simplify complex financial operations while getting real-time data analytics and accurate insights. Avail automation, minimize investment costs, and monitor financial processes with data-driven insights.
                </p>
                <Link href="/products/microsoft-dynamics-365-finance/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/supplychain-logo.svg"
                    alt="supplychain-logo"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Supply Chain
                  </h3>
                </div>
                <p>Automate your entire supply chain, from getting raw materials to distributing the final products. Enhance operational efficiency, get real-time data analytics, and build a sustainable supply chain to overpower all business odds.</p>
                <Link href="/products/dynamics-365-supply-chain-management/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/Sales_scalable.svg"
                    alt="Sales_scalable"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Dynamics 365 <br />
                    Sales
                  </h3>
                </div>
                <p>Get an omnichannel connection between the sales team, customers, and partners for a collaborative growth approach. Track the sales pipeline, get insights, maximize profit, and close more deals with the minimum resources.</p>
                <Link href="/products/microsoft-dynamics-365-sales/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/powerbilogo.png"
                    alt="Powerapps_power-apps"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>
                    Microsoft <br />
                    Power BI
                  </h3>
                </div>
                <p>Analyze and visualize the huge stack of data with interactive graphical representations to make data-driven decisions in real-time. Transform your data to make it accessible and valuable to refine decision-making.</p>
                <Link href="/products/microsoft-power-bi/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/home/NAV_scalable.png"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>Microsoft <br />
                    Dynamics NAV</h3>
                </div>
                <p>A simple yet powerful ERP solution to manage, control, and track entire business operations with full visibility. Connect different departments, automate sales, and manage all back-end processes with ease.</p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a href="/">
                    <div className="h-s-call" >
                      <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            {/* <div
              className="col-lg-3 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                  <h3>Dynamics 365 <br />
Marketing</h3>
                </div>
                <p>Engage customers with your business, build brand value, and offer an exceptional customer experience. Unify your customer data, avail AI-powered automation, and offer personalized offers to maximize revenue.</p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a href="/">
                     <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                  </a>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6"
            >
              <div className="service-box service-box-blue service-box-blue-home">
                <div className="top">
                  <img
                    src="/img/Azure-IoT.svg"
                    alt="Azure-IoT"
                    className="icon"
                    width="34"
                    height="34"
                  />
                 
                  <h3>
                  Dynamics 365 <br />
                  Field Service
                  </h3>
                </div>
                <p>
                Employ generative AI and the internet of things (IoT) to modernize your business operations while boosting overall agent efficiency. Give a personalized experience to the customer, track resources, and optimize the issue resolution process.
                </p>
                <Link href="/products/azure-iot-internet-of-things/">
                  <a href="/">
                     <div className="h-s-call" >
                    <span>Get Started </span> <i className="bi bi-arrow-right"></i>
                  </div>
                  </a>
                </Link>
              </div>
            </div> */}
          </div>

        </div>

      </section>


      <div className="pd-btm-60">
        <div className='vie'>
          <video id="background-video" autoPlay muted loop>
            <source src="/video/masscot-background.mp4" type="video/mp4" />
          </video>
          <div className='new'>
            <h3>Roar ahead with AI-Powered Solutions</h3>
            <p>Fear no business competition, conquer endless opportunities, acquire great strength, <br /> and become a fierce brand with Dynamics Square.</p>
            <div className="new-btn-home">
              <Link href="/" >
                <a className="bts">
                  <span>Talk to an Expert <i class="bi bi-plus-circle"></i></span>
                </a>
              </Link>
            </div>
          </div>
          <div className="inner-pic">
          <img src="/img/home/hover-servece.png" alt="im" />
          </div>
{/* 
          <div className='mas cardss'  
          
          >
            <div className="bb pulse">
              <img src="/img/home/hover-servece.png" alt="im" />
             
            </div>
            <img src='/img/mascut.png' alt='' />
          </div> */}
        </div>

      </div>

      {/* <section class="outter hero-video">
<section class="video-container">
  <video src="/video/masscot-background.mp4" autoPlay loop playsinline muted></video>
  <div class="callout">
    <h1>STORE &amp; SAVE MORE<br />FOOD THAN EVER BEFORE</h1>
    <div class="desc">An optional description</div>
    <a class="button" href="/collections/all">SHOP ABEEGO FOOD WRAPS</a>
    
  </div>
  
  <div className='mas'>
  <div className="bb">
            <img src="/img/home/Group-3.png" alt="im" />
            <img src="/img/home/Group-2.png" alt="im" />
            <img src="/img/home/Group-4.png" alt="im" />
            <img src="/img/home/Group-1.png" alt="im" />
          </div>
  <img src='/img/mascut.png' alt='' />
    </div>
</section>
</section> */}
      <section className="pddd-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>Our Proven Track Record Says It All: Businesses Got Exclusive Result</h2>
              </div>
            </div>
          </div>
          <div className="row g-2">
            <div className="col-lg-4">
              <div className="exp-box">
                <div className="top-sec b-t-pad">
                  <h3>82%</h3>
                  <h4>Businesses Meet Expected ROI</h4>
                  <p>Different businesses have achieved the expected ROI on time after the successful implementation of the Microsoft ERP solution.</p>
                  <a href="/" className="btnnew">Read More</a>
                </div>
                <div className="bottom-sec">
                  <img src="/img/home/roi.png" alt="im " />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="exp-box">
                <div className="bottom-sec b-t-pad">
                  <img src="/img/home/2x.png" alt="im " />
                </div>
                <div className="top-sec ">
                  <h3>2x</h3>
                  <h4>Productivity Increases</h4>
                  <p>Due to the centralized data structure, the overall efficiency and productivity of the team have increased by 2X.</p>
                  <a href="/" className="btnnew">Read More</a>
                </div>

              </div>
            </div>
            <div className="col-lg-4">
              <div className="exp-box">
                <div className="top-sec b-t-pad">
                  <h3>46%</h3>
                  <h4>Improved Cost Saving</h4>
                  <p>Businesses that have upgraded to Microsoft ERP or CRM solutions have reported improved cost savings while limiting resources.</p>
                  <a href="/" className="btnnew">Read More</a>
                </div>
                <div className="bottom-sec">
                  <img src="/img/home/46x.jpg" alt="im" />
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="new-btn-home text-center top-bom-home">
                <Link href="#exampleModal" >
                  <a className="bts" data-bs-toggle="modal">
                    <span>Read More <i class="bi bi-plus-circle"></i></span>
                  </a>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    <section className="new-pad0-home bg-2112">
      <div className="container">
      <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="new-sub-heading">
                <h2>We help you to grow your business big</h2>
                <p>At Dynamics Square, we help you execute digital transformation in your organization by optimizing the solutions offered by Microsoft.</p>
              </div>
              <div className="new-btn-home text-center">
                <Link href="#exampleModal" >
                  <a className="bts" data-bs-toggle="modal">
                    <span>Talk To us Now <i class="bi bi-plus-circle"></i></span>
                  </a>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
    </section>

    </>
  );
}
