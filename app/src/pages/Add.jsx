import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Add = () => {

    const [game, setGame] = useState({
        title: "",
        desc: "",
        cover: "",
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setGame((prev) =>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8800/games", game)
            navigate("/")
        }catch (err){
            console.log(err)
        }
    }

    console.log(game);
    return (
        <div className='form'>
            <h1>Add New Game</h1>
            <input type="text" placeholder="title" name="title" onChange={handleChange} />
            <input type="text" placeholder="desc" name="desc" onChange={handleChange} />
            <input type="text" placeholder="cover" name="cover" onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            <Link to ="/">See all Games</Link>
        </div>
    )
}

export default Add