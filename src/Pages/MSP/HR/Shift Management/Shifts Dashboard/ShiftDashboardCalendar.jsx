import React, { useState } from 'react'
import { Card, CardBody, Label } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import Select from "react-select";
const shiftOptions = [
  {
    value: "monday-to-friday-early-login",
    label: "Monday to Friday-Early Login",
  },
  { value: "monday-to-friday-general", label: "Monday to Friday-General" },
  {
    value: "monday-to-friday-late-login",
    label: "Monday to Friday-Late Login",
  },
  { value: "saturday-general", label: "Saturday-General" },
  { value: "sunday-general", label: "Sunday-General" },
];
const ShiftDashboardCalendar = () => {
    const [selectedOption, setSelectedOption] = useState(null);
 
    const handleEventClick = () => {
   console.log("date clicked");
 };
 const handleDateClick = () => {
   console.log("date clicked");
 };

const handleChange = (option) => {
  setSelectedOption(option);
};
const customStyles = {
  container: (provided) => ({
    ...provided,
    maxWidth: "300px", 
    width:"100%"
  }),
};
 return (
   <>
     <Card>
       <CardBody>
         <div className="mb-3 d-flex align-items-center gap-1 gap-md-4 flex-column flex-md-row">
           <Label className="mb-0 position-relative d-inline-block">
             SHIFT TYPE
             <i
               className="fas fa-asterisk"
               style={{
                 color: "red",
                 fontSize: "0.5em",
                 position: "absolute",
                 top: "0.5em",
                 right: "-1.5em",
               }}
             ></i>
           </Label>
           <Select
             placeholder="Select Shift Type"
             options={shiftOptions}
             onChange={handleChange}
             value={selectedOption}
             classNamePrefix="select2-selection"
             menuPlacement="auto"
             menuPortalTarget={document.body}
             styles={customStyles}
           />
         </div>
         <FullCalendar
           plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
           slotDuration={"00:15:00"}
           handleWindowResize={true}
           themeSystem="bootstrap"
           headerToolbar={{
             left: "prev,next today",
             center: "title",
             right: "dayGridMonth,dayGridWeek,dayGridDay",
           }}
           // events={events}
           editable={true}
           droppable={true}
           selectable={true}
           dateClick={handleDateClick}
           eventClick={handleEventClick}
           // drop={onDrop}
         />
       </CardBody>
     </Card>
   </>
 );
}

export default ShiftDashboardCalendar