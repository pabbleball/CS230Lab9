import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Update = () => {

    const [game, setGame] = useState({
        title: "",
        desc: "",
        cover: "",
    });

    const [error, setError] = useState(false);

    const navigate = useNavigate()
    const location = useLocation()

    const gameId = location.pathname.split("/")[2]

    const handleChange = (e) => {
        setGame((prev) =>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        try{
            await axios.put("http://localhost:8800/games/" + gameId, game)
            navigate("/")
        }catch (err){
            console.log(err)
            setError(true);
        }
    }

    console.log(game);
    return (
        <div className='form'>
            <h1>Update Game</h1>
            <input type="text" placeholder="Title" name="title" onChange={handleChange} />
            <input type="textbox" placeholder="Short Description" name="desc" onChange={handleChange} />
            <input type="text" placeholder="Cover" name="cover" onChange={handleChange} />
            <button onClick={handleClick}>Update</button>
            {error && "Something went wrong!"}
            <Link to ="/">See all Games</Link>
        </div>
    )
}

export default Update