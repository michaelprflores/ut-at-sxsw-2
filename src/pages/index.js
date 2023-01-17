import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="block md:hidden">
      <div className="">
        <StaticImage src="../images/discover-texas.png" alt="UT SXSW" />
      </div>
    </div>
    <div className="hidden md:block overflow-hidden w-full relative pt-[56.25%]">
      <iframe
        class="w-full h-full absolute top-0 left-0 right-0 bottom-0"
        title="Intro"
        width="1920"
        height="1080"
        src="https://my.spline.design/untitled-6709c686713d68944592ef2b3e953908/"
      ></iframe>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
