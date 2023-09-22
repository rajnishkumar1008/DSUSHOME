import React, { Component } from "react";
import Image from "next/image";
import ScrollPopupModal from "./ScrollPopupModal";

class Header extends Component {
  componentDidMount() {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("fixed-top");
      } else {
        elementId.classList.remove("fixed-top");
      }
    });
    window.scrollTo(0, 0);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <>
        <header id="header" className="header">
          <div className="container-fluid">
            <nav id="navbar" className="navbar">
              <div className="left-logo">
                <a href="/" className="logo">
                  <img
                    src="/img/dynamics_square-logo.svg"
                    alt="Dynamics Square TM Logo"
                    width="282"
                    height="19"
                  />
                </a>
              </div>
              <div className="right-nav">
                <ul>
                  <li className="dropdown megamenu">
                    <a href="#">
                      <span>Solution</span>
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <div className="megamenu-list">
                      <div className="left-list">
                        <div className="d-flex align-items-start">
                          <div
                            className="nav flex-column nav-pills me-3"
                            id="v-pills-tab"
                            role="tablist"
                            aria-orientation="vertical"
                          >
                            <div
                              className="nav-link active"
                              id="v-pills-home-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-home"
                            >
                              <a href="#">
                                <span>Dynamics 365</span>
                              </a>
                            </div>
                            <div
                              className="nav-link"
                              id="v-pills-addon-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-addon"
                            >
                              <a href="#">
                                <span>Add-ons</span>
                              </a>
                            </div>
                            <div
                              className="nav-link"
                              id="v-pills-profile-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-profile"
                              aria-selected="false"
                            >
                              <a href="#">
                                <span>Azure IoT</span>
                              </a>
                            </div>
                            <div
                              className="nav-link"
                              id="v-pills-messages-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-messages"
                              aria-selected="false"
                            >
                              <a href="#">
                                <span>Power Platform</span>
                              </a>
                            </div>
                            <div
                              className="nav-link"
                              id="v-pills-settings-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-settings"
                              aria-selected="false"
                            >
                              <a href="#">
                                <span>Legacy Dynamics</span>
                              </a>
                            </div>
                            <div
                              className="nav-link"
                              id="v-pills-settingss-tab"
                              data-bs-toggle="pill"
                              data-bs-target="#v-pills-settingss"
                              aria-selected="false"
                            >
                              <a href="#">
                                <span>More Solutions</span>
                              </a>
                            </div>
                          </div>
                          <div className="tab-content" id="v-pills-tabContent">
                            <div
                              className="tab-pane fade show active"
                              id="v-pills-home"
                            >
                              <div className="container">
                                <div className="row">
                                <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/d365-icon.png"
                                            alt="dynamics-365-businesscentral"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics 365 Suite</span>
                                          <p>AI-Powered Business Apps to Adapt & Innovate.</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/dynamics-365-business-central/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-businesscentral.svg"
                                            alt="dynamics-365-businesscentral"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Business Central</span>
                                          <p>
                                            All-in-one solution for all your
                                            business practices
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-finance/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-finance.svg"
                                            alt="dynamics-365-finance"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Finance</span>
                                          <p>Improve your finance practices</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/dynamics-365-supply-chain-management/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-supplychainmanagement.svg"
                                            alt="dynamics-365-supplychainmanagement"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Supply Chain</span>
                                          <p>
                                            Optimize operations and drive agile
                                            Supply Chain
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>

                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/dynamics-365-customer-engagement/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-customer-engagement.svg"
                                            alt="dynamics-365-customer-engagement"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Customer Engagement</span>
                                          <p>
                                            Improve Your marketing capabilities
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-sales/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-sales.svg"
                                            alt="dynamics-365-sales"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Sales</span>
                                          <p>
                                            Drive end-to-end sales practices
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-customer-service/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-customer-service.svg"
                                            alt="dynamics-365-customer-service"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Customer Service</span>
                                          <p>
                                            Drive omnichannel customer
                                            experience
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-field-service/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-fieldservice.svg"
                                            alt="dynamics-365-fieldservice"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Field Service</span>
                                          <p>
                                            Drive connected and collaborated
                                            field service
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-commerce/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-commerce.svg"
                                            alt="dynamics-365-commerce"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Commerce</span>
                                          <p>
                                            Unify Your Back-Office, In-Store,
                                            And Digital Experience
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/dynamics-365-project-operations/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-project-management.svg"
                                            alt="dynamics-365-project-management"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Project Operations</span>
                                          <p>
                                            Automate and streamline your
                                            projects
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-marketing/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-marketing.svg"
                                            alt="dynamics-365-marketing"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Marketing</span>
                                          <p>
                                            Maximize ROI with integrated
                                            Marketing
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/dynamics-365-human-resources/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/dynamics-365-HRM.svg"
                                            alt="dynamics-365-HRM"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Human Resource</span>
                                          <p>
                                            Optimize Your Resource Utilization
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-addon"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/payroll-for-business-central-nav/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/navi_payroll.png"
                                            alt="navi_payroll"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Payroll for BC</span>
                                          <p>Trusted Payroll & HR Solutions for Business Central</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/sana-ecommerce-add-ons-business-central/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/Sana_Commerce.png"
                                            alt="Sana_Commerce"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Sana Commerce</span>
                                          <p>Scalable E-Commerce Platform for Business Central ERP</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/mobile-wms-dynamics-365-business-central/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/Insight_Work.png"
                                            alt="Insight_Work"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Insight Work(WMS)</span>
                                          <p>Integrated WMS Solution for Dynamics 365 Business Central</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/continia-expense-management-business-central/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/continia.png"
                                            alt="continia"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Continia Software</span>
                                          <p>Unified platform to automate all your payment reconciliations</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/mobile-wms-for-d365-business-central-nav">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/taskley-logo-im.png"
                                            alt="taskley-logo-im"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Tasklet's Mobile WMS</span>
                                          <p>A software solution designed to improve warehouse operations</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="v-pills-profile">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-iot-hub/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/iot-hub.svg"
                                            alt="iot-hub"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>IoT Hub</span>
                                          <p>
                                            Connect, monitor, and control
                                            millions of devices
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-iot-central/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/iot-central.svg"
                                            alt="iot-central"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>IoT Central</span>
                                          <p>
                                            Register, connect, and manage
                                            devices
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-sphere/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/iot-sphere.svg"
                                            alt="iot-sphere"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Azure Sphere</span>
                                          <p>
                                            An embedded security solution for
                                            your devices
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-iot-edge/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/iot-edge.svg"
                                            alt="iot-edge"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>IoT Edge</span>
                                          <p>
                                            Extend cloud business intelligence &
                                            analytics
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-digital-twins/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/digital-twins.svg"
                                            alt="digital-twins"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Digital Twins</span>
                                          <p>
                                            Create digital representation of IoT
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/azure-machine-learning/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/machine-learning.svg"
                                            alt="machine-learning"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Machine Learning</span>
                                          <p>
                                            Drive improved enterprise grade
                                            Machine Learning
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-messages"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-power-bi/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/power-bi.svg"
                                            alt="power-bi"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Power BI</span>
                                          <p>
                                            Create powerful visual insights,
                                            analytics
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-power-apps/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/power-apps.svg"
                                            alt="power-apps"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Power Apps</span>
                                          <p>
                                            Build web & mobile apps with zero or
                                            minimal code
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-power-automate/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/power-automate.svg"
                                            alt="power-automate"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Power Automate</span>
                                          <p>
                                            Automate your processes to improve
                                            workflows
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-power-virtual-agents/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/virtual agent.svg"
                                            alt="virtual agent"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Power Virtual Agents</span>
                                          <p>
                                            Create powerful AI Bots to maximize
                                            productivity
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-settings"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-nav/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/NAV.png"
                                            alt="NAV"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics NAV</span>
                                          <p>
                                            A flexible ERP solution for SMBs
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-crm/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/CRM.png"
                                            alt="CRM"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics CRM</span>
                                          <p>
                                            Increase Revenue and Customer
                                            Satisfaction
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-ax/">
                                        <div className="pic">
                                          <img
                                            src="/img//menu-icons/AX.png"
                                            alt="AX"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics AX</span>
                                          <p>
                                            The Most Complete, Agile And
                                            Powerful ERP
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-gp/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/GP.png"
                                            alt="GP"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics GP</span>
                                          <p>
                                            Accounting software designed for
                                            SMEs
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-finance-operations/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/F&Q.png"
                                            alt="F&Q"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics F&O</span>
                                          <p>Accelerate your Finance and Inventory more Efficiently</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-erp/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/ERP.png"
                                            alt="ERP"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Dynamics ERP</span>
                                          <p>Enable Automation to Manage Core Business Tasks</p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="tab-pane fade"
                              id="v-pills-settingss"
                            >
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-azure/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/azure.svg"
                                            alt="azure"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Microsoft Azure</span>
                                          <p>
                                            Create secure, future-ready cloud
                                            solutions
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365/mixed-reality/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/mixed-Reality-icons.svg"
                                            alt="mixed-Reality-icons"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Mixed Reality</span>
                                          <p>
                                            Technology that modernises your
                                            workforce
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="list-itmes-maga-menu">
                                      <a href="/products/microsoft-dynamics-365-ai/">
                                        <div className="pic">
                                          <img
                                            src="/img/menu-icons/AI.svg"
                                            alt="AI"
                                            width="48"
                                            height="48"
                                          />
                                        </div>
                                        <div className="content">
                                          <span>Artificial Intelligence</span>
                                          <p>
                                            Leverage Microsoft's deep learning
                                            technology
                                          </p>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-list">
                        <div className="rigt-list-menu">
                          <p>Must Read</p>
                          <ul>
                            <li>
                              <a href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                                Cloud vs On-premise Comparison
                              </a>
                            </li>
                            <li>
                              <a href="/d365-business-central-vs-d365-finance/">
                                Business Central vs Finance
                              </a>
                            </li>
                            <li>
                              <a href="/why-choose-microsoft-dynamics-365-business-central/">
                                Why Choose D365 Business Central?
                              </a>
                            </li>
                            <li>
                              <a href="/10-reasons-to-choose-dynamics-365/">
                                Why Migrate to Dynamics 365?
                              </a>
                            </li>
                            <li>
                              <a href="/products/dynamics-365-business-central/advantages-capabilities/">
                                Business Central - Advantages & Capabilities
                              </a>
                            </li>
                            <li>
                              <a href="/dynamics-365-finance-operations-vs-sap-erp/">
                                D365 Finance & Operations vs SAP ERP
                              </a>
                            </li>
                            <li>
                              <a href="/dynamics-365-business-central-vs-sap-business-one/">
                                D365 Business Central vs SAP Business One
                              </a>
                            </li>
                            <li>
                              <a href="/dynamics-365-business-central-vs-netsuite/">
                                D365 Business Central vs. NetSuite
                              </a>
                            </li>
                            <li>
                              <a href="/dynamics-365-business-central-vs-finance-operations/">
                                D365 Business Central vs. Finance Operations
                              </a>
                            </li>
                            <li>
                              <a href="/dynamics-gp-to-business-central-migration/">
                               Dynamics GP to Business Central Migration
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <li className="dropdown">
                  <a href="/industries/">
                    <span>Solution</span>{" "}
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="/products/dynamics-365-business-central/">Business Central</a>
                    </li>
                    <li>
                      <a href="/products/microsoft-dynamics-365-finance/">
                      Finance
                      </a>
                    </li>
                    <li>
                      <a href="/products/dynamics-365-supply-chain-management">Supply Chain</a>
                    </li>
                    <li>
                      <a href="/products/microsoft-dynamics-365-sales/">
                      Sales
                      </a>
                    </li>
                    <li>
                      <a href="/products/microsoft-power-bi/">
                       Power BI
                      </a>
                    </li>
                  </ul>
                </li> */}
                  <li className="dropdown">
                    <a href="/industries/">
                      <span>Industries</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/industries/startups/">Startups</a>
                      </li>
                      <li>
                        <a href="/industries/microsoft-cloud-for-nonprofit/">
                          Not for Profit (Microsoft Cloud)
                        </a>
                      </li>
                      <li>
                        <a href="/industries/ecommerce/">Ecommerce</a>
                      </li>
                      <li>
                        <a href="/industries/microsoft-cloud-for-manufacturing/">
                          Manufacturing (Microsoft Cloud)
                        </a>
                      </li>
                      <li>
                        <a href="/industries/professional-services/">
                          Professional Services
                        </a>
                      </li>
                      <li>
                        <a href="/industries/food-and-beverages/">
                          Food & Beverages
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="/our-services/">
                      <span>Our Services</span>
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/our-services/dynamics-365-implementation-services/">
                          Implementation Services
                        </a>
                      </li>
                      <li>
                        <a href="/our-services/dynamics-365-support-services/">
                          Support Services
                        </a>
                      </li>
                      <li>
                        <a href="/our-services/dynamics-365-upgrade-services/">
                          Upgrade Services
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Company</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="/about-us/">About Us</a>
                      </li>
                      <li>
                        <a href="/why-us/">Why Us</a>
                      </li>
                      <li>
                        <a href="/partner/">Partners</a>
                      </li>
                      <li>
                        <a href="/career/">Careers</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Resources</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a
                          href="/blog/"
                          rel=""
                          target="_self"
                        >
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="/ebook/">eBooks</a>
                      </li>

                      <li>
                        <a href="/case-studies/">Case Studies</a>
                      </li>
                      <li>
                        <a href="/guides/">Guides</a>
                      </li>
                      <li>
                        <a href="/webinars/">Webinars</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link" href="/contact-us/">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      target="_self"
                      className="getstarted custtss"
                      href="tel:+12818990865"
                    >
                      <i className="bi bi-telephone-fill"></i> +1 281 899 0865
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="mobile-menu-section-wr">
              <div className="togglr-icon-nav">
              <div className="cont-m-mobile">
              <a
                      target="_self"
                      className="getstarted custtss"
                      href="tel:+12818990865"
                    >
                      <i className="bi bi-telephone-fill"></i> <span className="screen-reader-text">Details</span>
                    </a>
                  </div>
                <a
                  href="#offcanvasWithBothOptions"
                  data-bs-toggle="offcanvas"
                  aria-controls="offcanvasWithBothOptions"
                >
                  <i className="bi bi-list mobile-nav-toggle"></i> <span className="screen-reader-text">Details</span>
                </a>
              </div>
              <div className="mobile-new-nav">
                <div
                  className="offcanvas offcanvas-start"
                  data-bs-scroll="true"
                  tabIndex="-1"
                  id="offcanvasWithBothOptions"
                  aria-labelledby="offcanvasWithBothOptionsLabel"
                >
                  <div className="offcanvas-header">
                    <a href="/" className="logo d-flex align-items-center">
                      <img
                        src="/img/dynamics_square-logo.svg"
                        alt="Dynamics Square logo"
                        width="282"
                    height="19"
                      />
                    </a>
                    <button
                      type="button"
                      className="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="accordion" id="mobile-toggle-nav">
                      <div className="accordion-item">
                        <div className="accordion-header" id="list-1">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <a href="#">
                              <span>Solutions</span>
                            </a>
                          </button>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          aria-labelledby="list-1"
                          data-bs-parent="#mobile-toggle-nav"
                        >
                          <div className="accordion-body">
                            <div className="iner-list">
                              <ul>
                                <li>
                                  <a href="/products/microsoft-dynamics-365/">
                                    <span>Microsoft Dynamics 365</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/dynamics-365-business-central/">
                                    Business Central
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-finance/">
                                    Finance
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/dynamics-365-supply-chain-management/">
                                    Supply Chain Management
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-sales/">
                                    Sales
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-customer-service/">
                                    Customer Service
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-field-service/">
                                    Field Service
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/dynamics-365-project-operations/">
                                    Project Operations
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-marketing/">
                                    Marketing
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/microsoft-dynamics-365-commerce/">
                                    Commerce
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/dynamics-365-human-resources/">
                                    Human Resource
                                  </a>
                                </li>
                                <li>
                                  <a href="/products/azure-iot-internet-of-things/">
                                    <span>Azure IoT</span>
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="/products/azure-iot-hub/">
                                        IoT Hub
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/azure-iot-central/">
                                        IoT Central
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/azure-sphere/">
                                        Azure Sphere
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/azure-iot-edge/">
                                        IoT Edge
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/azure-digital-twins/">
                                        Digital Twins
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/azure-machine-learning/">
                                        Machine Learning
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a href="/products/microsoft-power-platform/">
                                    <span>Power Platform</span>
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="/products/microsoft-power-bi/">
                                        Power BI
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-power-apps/">
                                        Power Apps
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-power-automate/">
                                        Power Automate
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-power-virtual-agents/">
                                        Power Virtual Agents
                                      </a>
                                    </li>
                                  </ul>
                                </li>

                                <li>
                                  <a href="#">
                                    <span>More Solutions</span>
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="/products/microsoft-dynamics-erp/">
                                        ERP Solutions (NAV/AX/GP)
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-dynamics-crm/">
                                        CRM Solutions
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-azure/">
                                        Microsoft Azure
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-dynamics-365/mixed-reality/">
                                        Mixed Reality
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/products/microsoft-dynamics-365-ai/">
                                        Artificial Intelligence (AI)
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                {/* <li>
                                <a href="#">
                                  <span>Must Read</span>
                                </a>
                              </li>

                              <li>
                                <a href="/microsoft-dynamics-365-cloud-vs-on-premise/">
                                  Cloud vs On-premise Comparison
                                </a>
                              </li>
                              <li>
                                <a href="/d365-business-central-vs-d365-finance/">
                                  Business Central vs Finance
                                </a>
                              </li>
                              <li>
                                <a href="/why-choose-microsoft-dynamics-365-business-central/">
                                  Why Choose D365 Business Central?
                                </a>
                              </li>
                              <li>
                                <a href="/10-reasons-to-choose-dynamics-365/">
                                  Why Migrate to Dynamics 365?
                                </a>
                              </li>
                              <li>
                                <a href="/advantages-capabilities/">
                                  Business Central - Advantages & Capabilities
                                </a>
                              </li>
                              <li>
                                <a href="/dynamics-365-finance-operations-vs-sap-erp/">
                                  Dynamics 365 Finance & Operations vs SAP ERP
                                </a>
                              </li>
                              <li>
                                <a href="/dynamics-365-business-central-vs-sap-business-one/">
                                  Dynamics 365 Business Central vs SAP Business
                                  One
                                </a>
                              </li>
                              <li>
                                <a href="/dynamics-365-business-central-vs-netsuite">
                                  Dynamics 365 Business Central vs. NetSuite
                                </a>
                              </li> */}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="list-2">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <a href="/industries/">
                              <span>Industries</span>
                            </a>
                          </button>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="list-2"
                          data-bs-parent="#mobile-toggle-nav"
                        >
                          <div className="accordion-body">
                            <div className="iner-list">
                              <ul>
                                <li>
                                  <a href="/industries/startups/">Startups</a>
                                </li>
                                <li>
                                  <a href="/industries/microsoft-cloud-for-nonprofit/">
                                    Not for Profit (Microsoft Cloud)
                                  </a>
                                </li>
                                <li>
                                  <a href="/industries/ecommerce/">Ecommerce</a>
                                </li>
                                <li>
                                  <a href="/industries/microsoft-cloud-for-manufacturing/">
                                    Manufacturing (Microsoft Cloud)
                                  </a>
                                </li>
                                <li>
                                  <a href="/industries/professional-services/">
                                    Professional Services
                                  </a>
                                </li>
                                <li>
                                  <a href="/industries/food-and-beverages/">
                                    Food & Beverages
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="list-3">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <a href="#">
                              <span>Our Services</span>
                            </a>
                          </button>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="list-3"
                          data-bs-parent="#mobile-toggle-nav"
                        >
                          <div className="accordion-body">
                            <div className="iner-list">
                              <ul>
                                <li>
                                  <a href="/our-services/dynamics-365-implementation-services/">
                                    Implementation Services
                                  </a>
                                </li>
                                <li>
                                  <a href="/our-services/dynamics-365-support-services/">
                                    Support Services
                                  </a>
                                </li>
                                <li>
                                  <a href="/our-services/dynamics-365-upgrade-services/">
                                    Upgrade Services
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="list-4">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefour"
                            aria-expanded="false"
                            aria-controls="collapsefour"
                          >
                            <a href="#">
                              <span>Company</span>
                            </a>
                          </button>
                        </div>
                        <div
                          id="collapsefour"
                          className="accordion-collapse collapse"
                          aria-labelledby="list-4"
                          data-bs-parent="#mobile-toggle-nav"
                        >
                          <div className="accordion-body">
                            <div className="iner-list">
                              <ul>
                                <li>
                                  <a href="/about-us/">About Us</a>
                                </li>
                                <li>
                                  <a href="/why-us/">Why Us</a>
                                </li>
                                <li>
                                  <a href="/partner/">Partners</a>
                                </li>
                                <li>
                                  <a href="/career/">Careers</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <div className="accordion-header" id="list-5">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsefive"
                            aria-expanded="false"
                            aria-controls="collapsefive"
                          >
                            <a href="#">
                              <span>Resources</span>
                            </a>
                          </button>
                        </div>
                        <div
                          id="collapsefive"
                          className="accordion-collapse collapse"
                          aria-labelledby="list-5"
                          data-bs-parent="#mobile-toggle-nav"
                        >
                          <div className="accordion-body">
                            <div className="iner-list">
                              <ul>
                                <li>
                                  <a
                                    href="/blog/"
                                    target="_self"
                                    rel=""
                                  >
                                    Blogs
                                  </a>
                                </li>
                                <li>
                                  <a href="/ebook/">eBooks</a>
                                </li>

                                <li>
                                  <a href="/case-studies/">Case Studies</a>
                                </li>
                                <li>
                                  <a href="/guides/">Guides</a>
                                </li>
                                <li>
                                  <a href="/webinars/">Webinars</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <a className="nav-link" href="/contact-us/">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <ScrollPopupModal />
      </>
    );
  }
}
export default Header;
