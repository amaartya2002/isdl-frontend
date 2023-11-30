import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "../utils/Card";
import axios from "axios";

export default function Exam() {
  const [invi, setInvi] = useState([]);
  const fetchReqs=()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/invigilator/examcard`,{params:{UserID:'21mcs001'}}).then((resp)=>{
      setInvi(resp.data.exams)
   }).catch(function (err){

   })
  }
  useEffect(()=>{
     fetchReqs()
  },[])
  const handleLeave=(id)=>{
    console.log(id)
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/invigilator/leaveduty`,{params:{
      UserID:'21mcs001',
      ExamID:id
    }}).then((resp)=>{
      fetchReqs()
    })

  }
  return (
    <div>
      <Navbar />
      {invi?.map((exam)=>{
        return(
          <Card  id={exam.ExamID} exam={exam} handleLeave={handleLeave} fetchReqs={fetchReqs} />
        )
      })}
    </div>
  );
}
