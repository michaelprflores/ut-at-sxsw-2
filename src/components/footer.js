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
      <div className="w-full max-w-screen-xl px-4 mx-auto grid md:grid-cols-2 md:gap-x-3 items-stretch pt-6 pb-4">
        <div class="mx-auto md:mx-0 pb-5 md:pb-0">
          <Link to="/">
            <div className="max-w-[250px]">
              <StaticImage
                src="../images/ut-brand-primary.svg"
                alt={siteTitle}
                placeholder="none"
              />
            </div>
          </Link>
        </div>
        <div class="grid xl:grid-cols-2 xl:gap-x-3 mx-auto md:mx-0">
          <div className="flex flex-shrink-0">
            <div className="text-white text-center md:text-left mx-auto md:mx-0">
              <p>Main Building (MAI)</p>
              <p>110 Inner Campus Drive</p>
              <p>Austin, TX 78705</p>
              <p>
                <a href="mailto:utsxsw@utexas.edu">utsxsw@utexas.edu</a>
              </p>
            </div>
          </div>
          <div className="flex flex-shrink-0 pt-5 xl:pt-0">
            <ul className="social-sharing">
              <li className="fill-black inline px-3">
                <a href="https://www.facebook.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Facebook</span>
                  <FontAwesomeIcon
                    icon={faSquareFacebook}
                    className="icon-class hover:text-charcoal transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="inline px-3">
                <a href="https://twitter.com/UTAustin">
                  <span className="sr-only">UT Austin on Twitter</span>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="icon-class hover:text-charcoal transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="inline px-3">
                <a href="http://instagram.com/UTAustinTX">
                  <span className="sr-only">UT Austin on Instagram</span>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="icon-class hover:text-charcoal transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="inline px-3">
                <a href="https://www.linkedin.com/edu/the-university-of-texas-at-austin-19518">
                  <span className="sr-only">UT Austin on LinkedIn</span>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="icon-class hover:text-charcoal transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
              <li className="inline px-3">
                <a href="https://www.youtube.com/channel/UCCLiPoSjzG1PVWyRtq0G3Fw">
                  <span className="sr-only">UT Austin on YouTube</span>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="icon-class hover:text-charcoal transition-all duration-300"
                    size="2x"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer class="w-full max-w-screen-xl md:mx-auto px-4 md:flex md:justify-between pt-6 pb-4">
        <span class="text-sm text-white sm:text-center">
          ©{" "}
          <a href="https://www.utexas.edu">The University of Texas at Austin</a>{" "}
          {new Date().getFullYear()}
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm">
          <li className="px-2">
            <a href="https://www.utexas.edu/emergency">Emergency Information</a>
          </li>
          <li className="border-l border-white inline px-2">
            <a href="https://www.utexas.edu/site-policies">Site Policies</a>
          </li>
          <li className="border-l border-white inline px-2">
            <a href="https://it.utexas.edu/policies/web-accessibility">
              Web Accessibility Policy
            </a>
          </li>
          <li className="border-l border-white inline px-2">
            <a href="https://it.utexas.edu/policies/web-privacy">
              Web Privacy Policy
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
