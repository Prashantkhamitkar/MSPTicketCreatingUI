import React from "react";
import { Card, CardBody } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
const MyShiftCalendar = () => {
  // const [event, setEvent] = useState({});
  const handleEventClick = () => {
    console.log("date clicked");
  };
  const handleDateClick = () => {
    console.log("date clicked");
  };
  return (
    <>
      <Card>
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
    </>
  );
};

export default MyShiftCalendar;
