import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";
import {
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  getCategories as onGetCategories,
  getEvents as onGetEvents,
  updateEvent as onUpdateEvent,
  resetCalendar,
} from "../../../../store/actions";
import DeleteEvent from "./DeleteEvent";
import BackupModal from "./BackupModal";

const BackupCalendar = (props) => {
  const dispatch = useDispatch();

  const [event, setEvent] = useState({});
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [initialData, setInitialData] = useState({});

  const calendarpage = createSelector(
    (state) => state.calendar,
    (state) => ({
      events: state.events,
      categories: state.categories,
      isEventUpdated: state.isEventUpdated,
    })
  );

  const { events, categories, isEventUpdated } = useSelector(calendarpage);

  useEffect(() => {
    dispatch(onGetCategories());
    dispatch(onGetEvents());
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    });
  }, [dispatch]);

  useEffect(() => {
    if (isEventUpdated) {
      setIsEdit(false);
      setEvent({});
      setTimeout(() => {
        dispatch(resetCalendar("isEventUpdated", false));
      }, 500);
    }
  }, [dispatch, isEventUpdated]);

  const toggle = () => {
    setModal(!modal);
  };

  const handleDateClick = (arg) => {
    const date = arg.date;
    setInitialData({ backupDate: date });
    toggle();
  };

  const handleEventClick = (arg) => {
    const event = arg.event;
    setEvent({
      id: event.id,
      title: event.title,
      className: event.classNames,
      start: event.start,
      selectedCustomer: event.extendedProps.selectedCustomer,
      selectedSite: event.extendedProps.selectedSite,
      selectedAsset: event.extendedProps.selectedAsset,
      backupDate: event.start,
      status: event.extendedProps.status,
      comments: event.extendedProps.comments,
    });
    setIsEdit(true);
    toggle();
  };

  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event.id));
    setDeleteModal(false);
    toggle();
  };

  const onDrop = (event) => {
    const draggedEl = event.draggedEl;
    const status = draggedEl.getAttribute("data-status");
    const date = event.date;

    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: "Backup Event",
      start: date,
      className: "bg-info",
      extendedProps: {
        status: { value: status, label: status },
      },
    };

    dispatch(onAddNewEvent(newEvent));
  };

  const handleSubmit = (data) => {
    if (isEdit) {
      const updatedEvent = {
        ...event,
        ...data,
      };
      dispatch(onUpdateEvent(updatedEvent));
    } else {
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        title: "Backup Event",
        start: data.backupDate,
        className: "bg-info",
        extendedProps: {
          selectedCustomer: data.selectedCustomer,
          selectedSite: data.selectedSite,
          selectedAsset: data.selectedAsset,
          status: data.status,
          comments: data.comments,
        },
      };
      dispatch(onAddNewEvent(newEvent));
    }
  };

  return (
    <React.Fragment>
      <div className="container-fluid">
        <Row>
          <Col lg={3}>
            <Card>
              <CardBody>
                <Button
                  color="primary"
                  className="btn font-16 btn-primary waves-effect waves-light w-100 mb-2 mb-lg-4"
                  onClick={toggle}
                >
                  ADD
                </Button>
                <div id="external-events">
                  <p className="text-muted">
                    Drag and drop your event or click in the calendar
                  </p>
                  <div
                    className="external-event fc-event bg-success"
                    data-status="Success"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                    Success
                  </div>
                  <div
                    className="external-event fc-event bg-danger"
                    data-status="Failed"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                    Failed
                  </div>
                  <div
                    className="external-event fc-event bg-warning"
                    data-status="Warning"
                  >
                    <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                    Warning
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col lg={9}>
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
                  events={events}
                  editable={true}
                  droppable={true}
                  selectable={true}
                  dateClick={handleDateClick}
                  eventClick={handleEventClick}
                  drop={onDrop}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <BackupModal
        modal={modal}
        toggleModal={toggle}
        customers={categories} // Assuming categories contain customer options
        assets={categories} // Assuming categories contain asset options
        onSubmit={handleSubmit}
        initialData={initialData}
      />

      <DeleteEvent
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
    </React.Fragment>
  );
};

BackupCalendar.propTypes = {
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetCategories: PropTypes.func,
};

export default BackupCalendar;
