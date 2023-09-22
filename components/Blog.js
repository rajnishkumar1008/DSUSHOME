import Link from "next/link";
import React from "react";
import Image from "next/image";
const Blog = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://blog.dynamicssquare.com/what-are-dynamics-365-for-sales-benefits-and-capabilities/">
            <a
            >
              <Image
                src="/img/MicrosoftTeams-image-4.jpg"
                alt="imgs"
                width={1200}
                height={627}
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link href="https://blog.dynamicssquare.com/what-are-dynamics-365-for-sales-benefits-and-capabilities/">
              <a
              >
               What are the Benefits and Capabilities of Microsoft Dynamics 365 for Sales?
              </a>
              </Link>
            </h4>
            <span>August 3, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://blog.dynamicssquare.com/microsoft-dynamics-nav-vs-business-central/">
            <a>
              <Image
                src="/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg"
                alt="imgs"
                width={1200}
                height={627}
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link    href="https://blog.dynamicssquare.com/microsoft-dynamics-nav-vs-business-central/">
              <a>
               What is the Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central?
              </a>
              </Link>
            </h4>
            <span>June 28, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link href="https://blog.dynamicssquare.com/why-your-business-needs-power-bi/">
            <a
            >
              <Image
                src="/img/Why-Your-Business-Needs-Power-B.jpg"
                alt="imgas"
                width={1200}
                height={627}
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link href="https://blog.dynamicssquare.com/why-your-business-needs-power-bi/">
              <a>
                Why Your Business Needs Power BI?
              </a>
              </Link>
            </h4>
            <span>June 22, 2022</span>
          </div>
        </div>
        <div className="blogs-extra-left">
          <div className="blogs-extra-left-img">
            <Link  href="https://blog.dynamicssquare.com/how-to-generate-interactive-reports-in-power-bi/">
            <a>
              <Image
                src="/img/Generate-Interactive-Reports-in-Power-BI.jpg"
                alt="imgs"
                width={1200}
                height={627}
              />
            </a>
            </Link>
          </div>
          <div className="blogs-extra-left-content">
            <h4>
              <Link  href="https://blog.dynamicssquare.com/how-to-generate-interactive-reports-in-power-bi/">
              <a>
               How to Generate Interactive Reports in Power BI?
              </a>
              </Link>
            </h4>
            <span>June 16, 2022</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
