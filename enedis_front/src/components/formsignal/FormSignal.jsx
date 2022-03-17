import React,{useState,useEffect} from 'react'
import axios from 'axios';

const FormSignal = (props) => {
    const[stateProblems,setStateProblems]=useState([]);
    const[message,setMessage]=useState('');
    const[typeProblems, setTypeProblems]=useState([]);
    const[]=useState();
    const[]=useState();
    const[]=useState();

    useEffect(()=>{
        
        const getProblemType=async()=>{
            const url=`${REACT_APP_API_URL}/type/`;
            axios
            .get(url,{ withCredentials: true })
            .then((response)=>{
                if(response.status===200){
                    setStateProblems(response.data)
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
        const getStateProblem=async()=>{
            const url=`{REACT_APP_API_URL}/state/`;
            axios
            .get(url,{ withCredentials: true })
            .then((response)=>{
                if(response.status===200){
                    setTypeProblems(response.data)
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    },[])

    return (
        <div>
            <select name="" id="">
                {typeProblems.map((typeProblem)=>{
                    return(
                        <option value={typeProblem.id_type}>{typeProblem.name}</option>
                    )
                })}
            </select>
            <select name="" id="">
                {stateProblems.map((stateProblem)=>{
                    return(
                        <option value={stateProblem.id}>{stateProblem.name}</option>
                    )
                })}
            </select>
            <textarea onchange={(e)=>setMessage(e.target.value)} value={message}/>
        </div>
    )
}

export default FormSignal
