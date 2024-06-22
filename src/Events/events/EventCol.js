import React, { useState } from 'react'
import '../CSS/feedback.css'
import '../CSS/eventcol.css'
import EventsList from './EventsList'

const EventCol = ({eventId, seteventId, setId}) => {
  const [EventDisplayId, setEventDisplayId]=useState(0);
  console.log(EventDisplayId);
  const handleBack = ()=>{
    if(eventId>1){
      seteventId(eventId-1);
    }else{
      if(eventId===1){
        seteventId(3)
        
      }
    }
  }

  const handleForward=()=>{
    if(eventId<3){
      seteventId(eventId+1);
    }else{
      if(eventId===3){
        seteventId(1);
      }
    }
  }
  return (
    <div className='feedback'>
      <div className="events_heading">
        <h2>EVENTS</h2>
        {}
         
        </div>
          
        <div className="event_list">
          <ul>
            <li>
             <EventsList id={1} onClick={()=>{setEventDisplayId(1)}}  event_img={"https://cdn.xxl.thumbs.canstockphoto.com/hands-holding-events-many-hands-holding-the-word-events-isolated-picture_csp21214712.jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId} /> 
              
            </li>
            <li>
              <EventsList id={2} onClick={()=>{setEventDisplayId(2)}}event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={3} onClick={()=>{setEventDisplayId(3)}} event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={4} onClick={()=>{setEventDisplayId(4)}} event_img={"https://cdn.xxl.thumbs.canstockphoto.com/hands-holding-events-many-hands-holding-the-word-events-isolated-picture_csp21214712.jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
            <li>
              <EventsList id={5} onClick={()=>{setEventDisplayId(5)}} event_img={"https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?cs=srgb&dl=pexels-christina-morillo-1181406.jpg&fm=jpg"} event_name={"Insider Series"} EventDisplayId={EventDisplayId}/>
            </li>
          </ul>
        </div>
       {}
    </div>
  )
}

export default EventCol