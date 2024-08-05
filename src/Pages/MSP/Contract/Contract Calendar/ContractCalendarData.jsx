import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import ContractCalendarModal from "./ContractCalendarModal";
const ContractCalendarData = () => {
  // const [event, setEvent] = useState({});
  const [modal,settoggle]=useState(false);
  const handleEventClick = () => {
    console.log("date clicked");
    settoggle(!modal);
  };
  const handleDateClick = () => {
    console.log("date clicked");
  };
  return (
    <>
      <Card className="mt-lg-4 mt-2">
        <CardHeader>
          <h5 className="card-title mb-0">CONTRACT CALENDAR VIEW</h5>
        </CardHeader>
        <CardBody>
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
      <ContractCalendarModal modal={modal} toggleModal={settoggle}/>
    </>
  );
};

export default ContractCalendarData;
