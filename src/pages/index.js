import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Spline from "@splinetool/react-spline"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="block md:hidden">
      <StaticImage
        className="grid content-center"
        src="../images/discover-texas-mobile.svg"
        alt="UT at SXSW"
        placeholder="none"
      />
      <div className="font-display font-bold text-white text-center text-2xl m-9">
        <p>UT at SXSW</p>
        <p>March 11, 2023</p>
        <p>Banger's</p>
        <p>Details coming soon</p>
      </div>
    </div>
    <div className="hidden md:block pt-[10%] xl:pt-[5%]">
      <Spline
        placeholder="none"
        className="md:!h-[80vw] lg:!h-[60vw] xl:!h-[50vw]"
        scene="https://prod.spline.design/eh4TRGCbw1YpdzxE/scene.splinecode"
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
