import { getSession, useSession } from 'next-auth/client'
import Head from 'next/head'
import Brands from '../components/Brands'
import FilmPopuler from '../components/FilmPopuler'
import HalamanDepan from '../components/HalamanDepan'
import Header from '../components/Header'
import Slider from '../components/Slider'
import TvShow from '../components/TvShow'
import UpcomingFilm from '../components/UpcomingFilm'

export default function Home({
  tvShow, 
  filmPopuler, 
  upcomingFilm
}) {
  const [session] = useSession()
  return (
    <div className="">
      <Head>
        <title>iMovie</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      {!session ? (
        <HalamanDepan/>
      ): (
        <main>
          <Slider/>
          <Brands/>
          <FilmPopuler results={filmPopuler} title="Popular Movies"/>
          <TvShow results={tvShow} title="TV Show"/>
          <UpcomingFilm results={upcomingFilm} title="Upcoming Movie"/>
        </main>
      )}

    </div>
  )
}

export async function getServerSideProps(context) {
  const session =  await getSession(context)

  const [tvShowRes, filmPopulerRes, upcomingFilmRes] = await Promise.all([
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`),
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  ]
  )
  const [tvShow, filmPopuler, upcomingFilm] = await Promise.all([
    tvShowRes.json(),
    filmPopulerRes.json(),
    upcomingFilmRes.json()
  ])

  return {
    props: {
      session,
      tvShow : tvShow.results,
      filmPopuler : filmPopuler.results,
      upcomingFilm : upcomingFilm.results
    },

  }
}
