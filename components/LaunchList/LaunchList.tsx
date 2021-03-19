import React from 'react'
import { useQuery, gql } from "@apollo/client";
import styles from "../../styles/Home.module.css";

const QUERY_LAUNCH_LIST = gql`
  query GetLaunches {
    launchesUpcoming(limit: 10) {
      id
      mission_name
      launch_date_local
      details
      links {
        flickr_images
        video_link
      }
      rocket {
        rocket_name
      }
    }
  }
`

const LaunchList = () => {
  const { loading, error, data } = useQuery(QUERY_LAUNCH_LIST)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :/</p>;

  const uniqueData = [...new Set(data.launchesUpcoming)]

  return (
    <ul className={styles.grid}>
      {
        uniqueData.map(({id, mission_name, launch_date_local}) => (
          <li key={id} className={styles.card}>
            <h3>{mission_name}</h3>
            <p><strong>Launch Date:</strong> { new Date(launch_date_local).toLocaleDateString("en-US") }</p>
          </li>
        ))
      }
    </ul>
  )
}

export default LaunchList
