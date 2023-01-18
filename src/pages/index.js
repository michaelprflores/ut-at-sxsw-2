import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Spline from "@splinetool/react-spline"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="block md:hidden">
      <StaticImage src="../images/discover-texas.png" alt="UT SXSW" />
    </div>
    <div className="hidden md:block pt-[10%] xl:pt-[5%]">
      <Spline
        className="md:!h-[80vw] lg:!h-[60vw] xl:!h-[50vw]"
        scene="https://prod.spline.design/eh4TRGCbw1YpdzxE/scene.splinecode"
      />
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
