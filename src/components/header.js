import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => {
  return (
    <nav className="flex justify-between flex-wrap p-4">
      <div class="flex flex-shrink-0 text-white mr-6">
        <Link to="/">
          <div className="max-w-[250px]">
            <StaticImage src="../images/ut-brand-primary.svg" alt={siteTitle} />
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
