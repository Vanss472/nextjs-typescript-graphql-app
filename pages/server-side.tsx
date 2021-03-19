import { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { gql } from '@apollo/client'
import client from '../apollo-client'

export default function Home( { launches } ) {
  // console.log('upcoming', launches);

  return (
    <div className={styles.container}>
      <Head>
        <title>Server-side rendering</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SpaceX Launches
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/server-side.tsx</code>
        </p>

        <ul className={styles.grid}>
        {
          launches.map((launch) => (
            <li key={launch.id} className={styles.card}>
              <h3>{launch.mission_name}</h3>
              <p><strong>Launch Date:</strong> { new Date(launch.launch_date_local).toLocaleDateString("en-US") }</p>
            </li>
          ))
        }
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

// Server-side rendering
export const getServerSideProps: GetServerSideProps = async () => {
  // destructures {data} from the results
  const { data } = await client.query({
    query: gql`
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
  });
  console.log('results', data);

  // REMOVE DUPLICATE FOR ARRAY OBJECT
  // one way
  // let ids = data.launchesUpcoming.map(item => item.id)
  // let filtered = data.launchesUpcoming.filter(({id}, index) => !ids.includes(id, index+1))
  // console.log(filtered)

  // second way
  // const filterArr = data.launchesUpcoming.filter((item, index) => data.launchesUpcoming.indexOf(item) === index)
  // console.log(filterArr)

  // Using ES6
  // lets you store unique values of any type
  // whether primitive values or object references
  const uniqueData = [...new Set(data.launchesUpcoming)];

  return {
    props: {
      launches: uniqueData
    }
  }
}