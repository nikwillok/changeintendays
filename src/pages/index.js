import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Hero from "../components/Hero"
import Cards from "../components/Cards"
import Testimonials from "../components/Testimonials"
import Why from "../components/Why"
import Email from "../components/Email"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cards heading="Inspirations" />
    <Testimonials />
    <Why />
    <Email />
  </Layout>
)

export default IndexPage
