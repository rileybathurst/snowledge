import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import DefaultFriendImage from '../components/default-friend'
import Download from '../components/download'

const PartnerResortTemplate = ({ data }) => (
  <Layout>
    <Img fluid={data.strapiPartnerResorts.pr_cover.childImageSharp.fluid} className="regular-measure hero-shadow" />
    <h1 className="regular-measure hero-card">{data.strapiPartnerResorts.pr_name}</h1>
    
    {/* <h2 className="regular-measure"><Link to="download">Download Snowledge | Official App for {data.strapiPartnerResorts.pr_name}</Link></h2> */}

    <div className="floater regular-measure">{/* keep em together */}
      <p className="">We’re excited to announce that Snowledge is the official app for {data.strapiPartnerResorts.pr_name}! Snowledge is the only app you need on the mountain, and it’s free. Use GPS to get real-time resort info, track your day on the slopes, and easily find and locate your friends and family. Be in the snow, #SnowledgeIsPowder!</p>
      <div className="blog-floater">
        <h3>DOWNLOAD</h3>
        <div className="blog-floater-back">{/* stay gold*/}</div>
        <Download />
        <Img fluid={data.strapiPartnerResorts.pr_profile.childImageSharp.fluid} className="profile" />
      </div>
    </div>

    <ul id="features-list-pr" className="regular-measure">
        <li>View current snow conditions, and research info on nearby resorts, offers, and current contests.</li>
        <li>Stay connected with friends, family, and your favorite resorts, and see what skiers and riders around the world are up to.</li>
        <li>Find your friends on the mountain and track your day with stats, recorded weather, and maps showing runs skied.</li>
        <li>Customize your profile, bio, and gallery, and view detailed activity summaries of your days skied.</li>
        <li>Get lift status updates, conditions, and parking information, as well as offers and contests from your favorite resorts.</li>
      </ul>


    <div className="partner-resorts_screenshots">
      {/* you have to skip the .childImageSharp.fluid as it cant do the null from above */}
      <Img fluid={data.strapiPartnerResorts.pr_feed.childImageSharp.fluid} />
      <Img fluid={data.strapiPartnerResorts.pr_profile.childImageSharp.fluid} />
      <Img fluid={data.strapiPartnerResorts.pr_activity.childImageSharp.fluid} />
      <DefaultFriendImage />
    </div>


    <h3 className="regular-measure">Explore our articles from {data.strapiPartnerResorts.pr_name}</h3>

      <ul className="team--grid blog-cards regular-measure">
        {data.strapiPartnerResorts.blogs.map(blog => (

          <li className="team-card">
            <h2>
              <Link to={`/blogs/${blog.blog_slug}`}>
                {blog.blog_title}
              </Link>
          </h2>

          <Link to={`/blogs/${blog.blog_slug}`} className="teamcoverimage">
            <Img fluid={blog.blog_cover.childImageSharp.fluid} />
          </Link>
        </li>

        ))}
      </ul>

  </Layout>
)

export default PartnerResortTemplate

export const query = graphql`
  query PartnerResortTemplate($id: String!) {
    strapiPartnerResorts(id: {eq: $id}) {
      pr_name

      pr_cover {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      pr_feed {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
        id
      }
      pr_profile {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pr_activity {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blogs {
        blog_title
        blog_slug
        blog_cover {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`