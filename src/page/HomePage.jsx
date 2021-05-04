import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewHobby } from '../action/hobby'
import HobbyList from '../components/Home/HobbyList'
import './HomePage.css'

function HomePage() {
    const [hobby, setHobby] = useState('')
    const hobbyList = useSelector(state => state.hobby.list)
    const dispatch = useDispatch()
    const randomHobby = () => {
    return 1000 + Math.trunc(Math.random() * 9000)
    }
    const handleRandomHobby = () =>{
        const randomId = randomHobby()
        const newHobby = {
            id:randomId,
            title:`${hobby}`
        }
        const action = addNewHobby(newHobby);
        dispatch(action);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setHobby('')
    }
    return (
        <div className="formHobby">
            <form onSubmit={handleSubmit}>
                <input value={hobby} placeholder="add todo" onChange={event => setHobby(event.target.value)}/>
                <button type="submit" onClick={handleRandomHobby}><i className="fa fa-send-o"></i></button>
            </form>
            <HobbyList hobbyList={hobbyList}/>
        </div>
    )
}

export default HomePage
