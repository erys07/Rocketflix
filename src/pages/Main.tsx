import { useEffect, useState } from 'react'
import Image from '../assets/images/image.png'
import api from '../services/api'

function Main(){
    
    const [lastFilm, setLastFilm] = useState<any>()
    const [film, setFilm] = useState<any>()

    useEffect(() => {
        async function getLatestFilm()
        {
            const {data: latest} = await api.get('/movie/latest')
            setLastFilm(latest)
            console.log(latest)
        }
        getLatestFilm()
    }, [])


    async function handleFindFilme()
    {
        const filmId = Math.floor(Math.random() * (lastFilm.id - 1 + 1) + 1)
        console.log(filmId)
        const response = await api.get('/movie/' + filmId)
        setFilm(response.data)
    }

    console.log(film)

    return <div className="h-screen bg-gradient-to-tr from-indigo-900 via-black to-red-900">
        <div className='flex flex-col items-center'>
            <img src={Image} className="w-24 h-auto mt-20"></img>
            <a className="text-white font-semibold text-4xl">Não sabe o que assistir?</a>
            {film && <>
            <div className="flex flex-row items-center justify-center mt-10">
                <div>
                    <img src={'https://image.tmdb.org/t/p/original' + film.poster_path} className="w-40 h-full" />
                </div>
                <div className="w-3/12 h-64 ml-8">
                    <h1 className="text-white font-bold text-xl mb-4">{film.original_title}</h1>
                    <h1 className="text-white mb-5">{film.overview}</h1>
                </div>
            </div>
            </>}
            <button onClick={handleFindFilme} className="flex flex-row items-center justify-between w-48 h-12 px-4 mt-8 bg-gray-300 rounded ">
                <img src={Image} className="w-8 h-auto"></img>
                <a className=" font-bold">Encontrar filme</a>
            </button>
            <a className="text-white w-7/12 md:w-5/12 lg:w-3/12 text-center mt-8">Clique em "Encontrar filme" que traremos informações de algum filme para você assistir hoje.</a>
        </div>
    </div>
}

export default Main;