import React, { useState, useEffect } from 'react';
import { useUser } from "../../contexts/UserProvider";
import axios from 'axios';
import './FormSignal.css';

const FormSignal = () => {
    const [stateProblems, setStateProblems] = useState([]);
    const [message, setMessage] = useState('');
    const [typeProblems, setTypeProblems] = useState([]);
    const [problemState, setProblemState] = useState(1);
    const [problemType, setProblemType] = useState(1);
    const [picture,setPicture] = useState();
    const Longitude=1.01;
    const latitude=2.02;
    const {user}=useUser();
    useEffect(() => {

        const getProblemType = async () => {
            const url = `${process.env.REACT_APP_API_URL}type/`;
            axios
                .get(url, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        setTypeProblems(response.data)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const getStateProblem = async () => {
            const url = `${process.env.REACT_APP_API_URL}state/`;
            axios
                .get(url, { withCredentials: true })
                .then((response) => {
                    if (response.status === 200) {
                        setStateProblems(response.data)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        getStateProblem();
        getProblemType();
    }, []);

    const handleSubmit=()=>{
        const formData=new FormData();
        formData.append('longitude',Longitude);
        formData.append('latitude',latitude);
        formData.append('type_problem',problemType);
        formData.append('state',problemState);
        formData.append('creator',2); //to change
        formData.append('message',message);
        const now = new Date(Date.now());
        const creationDate=now.toISOString().split('T')[0];
        formData.append('date_creation',creationDate);
        formData.append('date_update',creationDate);
        formData.append('photo',picture);
        const url=  `${process.env.REACT_APP_API_URL}problem/`;
        axios
            .post(url,formData,{withCredentials : true})
            .then((response)=>{
                if(response.status===201){
                    setMessage('');
                    setProblemState(1);
                    setProblemType(1);
                    setPicture('');
                }
            })
            .catch((err)=>{

            })
    }

    return (
        <div className='FormSignal'>
            <label htmlFor='Photo' className='FormSignalPhoto'>Ajouter une photo <input className='PhotoInput' type="file" id="Photo" onChange={(event) =>setPicture(event.target.files[0])} /> </label>
            <label htmlFor='TypeProblem' className='FormSignalLabel'>Type du problème : <select id="TypeProblem" value={problemType} onChange={(e) => setProblemType(e.target.value)}>
                {typeProblems.map((typeProblem) => {
                    return (
                        <option value={typeProblem.id_type} key={typeProblem.id_type}>{typeProblem.name } </option>
                    )
                })}
            </select></label>
            <label htmlFor="StateProblem" className='FormSignalLabel'>Etat de problème : <select id="StateProblem" value={problemState} onChange={(e) => setProblemState(e.target.value)}>
                {stateProblems.map((stateProblem) => {
                    return (
                        <option value={stateProblem.id} key={stateProblem.id}>{stateProblem.name}</option>
                    )
                })}
            </select></label>
            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className='FormSignalTextAera'/>
            <input className='FormSignalButton' type="button" value="Valider" onClick={handleSubmit}/>
        </div>
    )
}

export default FormSignal
