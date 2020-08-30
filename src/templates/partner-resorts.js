import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
// import Logo from '../components/logo'
// import SmallMenu from '../components/smallMenu'

import DefaultFeedImage from '../components/default-feed'
import DefaultProfileImage from '../components/default-profile'
import DefaultActivityImage from '../components/default-activity'
import DefaultFriendImage from '../components/default-friend'

// this is kinda annoying and double but needs to be for the null check
function Feed(props) {
  if (props.has) {
    return (
      <Img fluid={props.photo} />
    )
  } 
  return (
    <><DefaultFeedImage />default </>
  );
}

function Profile(props) {
  if (props.has) {
    return (
      <Img fluid={props.photo} />
    )
  } 
  return (
    <><DefaultProfileImage />default </>
  );
}

function Activity(props) {
  if (props.has) {
    return (
      <Img fluid={props.photo} />
    )
  } 
  return (
    <><DefaultActivityImage />default </>
  );
}

const PartnerResortTemplate = ({ data }) => (
  <Layout>

    <h1 className="regular-measure">{data.strapiPartnerResorts.name}</h1>

    <h2 className="regular-measure"><Link to="download">Download Snowledge | Official App for {data.strapiPartnerResorts.name}</Link></h2>

    <p className="regular-measure">We’re excited to announce that Snowledge is the official app for {data.strapiPartnerResorts.name}! Snowledge is the only app you need on the mountain, and it’s free. Use GPS to get real-time resort info, track your day on the slopes, and easily find and locate your friends and family. Be in the snow, #SnowledgeIsPowder!</p>

    {/* <p className="regular-measure">{data.strapiPartnerResorts.writeup}</p> */}

    <div className="partner-resorts_screenshots">
      {/* you have to skip the .childImageSharp.fluid as it cant do the null from above */}
      <Feed has={data.strapiPartnerResorts.partner_resort_feed} photo={data.strapiPartnerResorts.partner_resort_feed.childImageSharp.fluid} />
      <Profile has={data.strapiPartnerResorts.partner_resort_profile} photo={data.strapiPartnerResorts.partner_resort_profile.childImageSharp.fluid} />
      <Activity has={data.strapiPartnerResorts.partner_resort_activity} photo={data.strapiPartnerResorts.partner_resort_activity.childImageSharp.fluid} />
      <DefaultFriendImage />
    </div>

    <ul id="features-list" className="regular-measure">
        <li>View current snow conditions, and research info on nearby resorts, offers, and current contests.</li>
        <li>Stay connected with friends, family, and your favorite resorts, and see what skiers and riders around the world are up to.</li>
        <li>Find your friends on the mountain and track your day with stats, recorded weather, and maps showing runs skied.</li>
        <li>Customize your profile, bio, and gallery, and view detailed activity summaries of your days skied.</li>
        <li>Get lift status updates, conditions, and parking information, as well as offers and contests from your favorite resorts.</li>
      </ul>

  </Layout>
)

export default PartnerResortTemplate

export const query = graphql`
  query PartnerResortTemplate($id: String!) {
    strapiPartnerResorts(id: {eq: $id}) {
      name
      writeup

      partner_resort_feed {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partner_resort_profile {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partner_resort_activity {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`