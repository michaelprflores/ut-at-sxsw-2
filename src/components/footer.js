import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import {
  faTwitter,
  faSquareFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Footer({ siteTitle }) {
  return (
    <>
      <footer className="max-w-screen-xl m-0 mx-auto font-eighteeneightythree text-white">
        <div className="md:grid md:grid-cols-2">
          <div className="m-9 flex justify-center md:justify-start">
            <Link to="/">
              <StaticImage
                src="../images/ut-brand-primary.svg"
                alt={siteTitle}
                placeholder="none"
                className="max-w-[250px]"
              />
            </Link>
          </div>

          <div className="text-center md:m-9 md:grid md:grid-cols-2 md:justify-start">
            <div className="">
              <p>Main Building &#40;MAI&#41;</p>
              <p>110 Inner Campus Drive</p>
              <p>Austin, TX 78705</p>
              <a href="mailto:utsxsw@utexas.edu" className="underline">
                utsxsw@utexas.edu
              </a>
            </div>
            <ul className="flex justify-evenly m-9 md:m-0">
              <li className="">
                <a href="https://www.facebook.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Facebook</span>
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="icon-class hover:text-tangerineorange transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="">
                <a href="https://twitter.com/UTAustin">
                  <span className="sr-only">UT Austin on Twitter</span>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="icon-class hover:text-tangerineorange transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="">
                <a href="http://instagram.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Instagram</span>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon-class hover:text-tangerineorange transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="">
                <a href="https://www.linkedin.com/edu/the-university-of-texas-at-austin-19518">
                  <span className="sr-only">UT Austin on LinkedIn</span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon-class hover:text-tangerineorange transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="">
                <a href="https://www.youtube.com/channel/UCCLiPoSjzG1PVWyRtq0G3Fw">
                  <span className="sr-only">UT Austin on YouTube</span>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="icon-class hover:text-tangerineorange transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center md:grid md:grid-cols-2 mt-9">
          <div className="m-9 md:text-left">
            <p>
              ©{" "}
              <a href="https://www.utexas.edu" className="hover:underline">
                The University of Texas at Austin
              </a>{" "}
              {new Date().getFullYear()}
            </p>
          </div>
          <ul className="flex flex-col md:flex-row items-center md:justify-evenly">
            <li className="">
              <a
                href="https://www.utexas.edu/emergency"
                className="hover:underline"
              >
                Emergency Information
              </a>
            </li>
            <li>
              <a
                href="https://www.utexas.edu/site-policies"
                className="hover:underline xl:border-l border-white pl-2"
              >
                Site Policies
              </a>
            </li>
            <li>
              <a
                href="https://it.utexas.edu/policies/web-accessibility"
                className="hover:underline xl:border-l border-white pl-2"
              >
                Web Accessibility Policy
              </a>
            </li>
            <li>
              <a
                href="https://it.utexas.edu/policies/web-privacy"
                className="hover:underline xl:border-l border-white pl-2"
              >
                Web Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer
