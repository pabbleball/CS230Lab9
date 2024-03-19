import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const images = require.context('../images', true)
const imageList = images.keys().map(image => images(image))

const Games = () => {
    const [games,setGames] = useState([])

    useEffect(()=>{
        const fetchAllGames = async()=>{
            try{
                const res = await axios.get("http://localhost:8800/games/")
                setGames(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllGames()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/games/${id}`)
            console.log("reload")
            window.location.reload()
          } catch (err) {
            console.log(err);
          }
    };

    return <div>
        <h1>Preston's Game Library</h1>
        <div className="games">
            {games.map(game=>(
                <div className="game" key={game.id}>
                    {game.cover && <img src={imageList[images.keys().indexOf(`./${game.cover}.png`)]} alt="" />}
                    <div className="gameInfo">
                        <h2>{game.title}</h2>
                        <p>{game.desc}</p>
                    </div>
                    <button className="delete" onClick={()=>handleDelete(game.id)}>Delete</button>
                    <button className="update"><Link to={`/update/${game.id}`}>Update</Link></button>
                </div>
            ))}
        </div>
        <button className="newGame">
            <Link to="/add">Add new Game</Link>
        </button>
    </div>
}

export default Games