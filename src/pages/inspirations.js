import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Cards from "../components/Cards"

const InspirationsPage = () => (
  <Layout>
    <Seo title="Inspirations" />
    <article>
      <div>
        Change in Ten Days – Personal Change Programme What does the course
        contain?
        <ul>
          <li>Initial private 60 min coaching session with Anna</li>
          <li>Daily broadcast content delivery from Anna</li>
          <li>
            Daily digital course content to support the daily broadcast material
          </li>
          <li>
            Digital templates to support active self-reflection and planning{" "}
          </li>
          <li>Daily motivational content</li>
          <li>
            30-minute check-in phone call to be scheduled midway through the
            programme
          </li>
          <li>30-minute coaching session on Day 10</li>
          <li>
            Personal recommendations for next steps, including a discounted
            offer for future coaching sessions
          </li>
        </ul>
        Join me, make your dreams a reality.
      </div>
    </article>
    <Cards heading="Inspirations" />
  </Layout>
)

export default InspirationsPage
