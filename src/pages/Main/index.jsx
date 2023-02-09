import React, { useEffect } from 'react'

//Services
import { songsService } from '../../services/songs.service'

//Hooks
import { useSongs } from '../../hooks/useSongs'
import MusicCard from '../../components/MusicCard'

//Styles 
import './Main.scss'

const Main = () => {

  const {songs, saveSongs} = useSongs()

  useEffect(() => {
    const fetch = async () => {
      const songs =  await songsService.getReccomendation()

      saveSongs(songs.tracks)
    }
    
    fetch()
  }, [])

  console.log(songs)

  return (
    <div className='main_page'>
      {
        songs?.length && songs.map((item, idx) => (
          <MusicCard key={idx} {...item} />
        ))
      }
    </div>
  )
}

export default Main