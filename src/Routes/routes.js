import React from "react";
import { Navigate } from "react-router-dom";

import Maintenance from "../Pages/Utility/Maintenance-Page";
import ComingSoon from "../Pages/Utility/ComingSoon-Page";

import Error404 from "../Pages/Utility/Error404-Page";
import Error500 from "../Pages/Utility/Error500-Page";

import Index from "../Pages/MSP/TicketCreation/Index.jsx";
import DashboardIndex from "../Pages/MSP/Dashboard/DashboardIndex.jsx";
import CustomerIndex from "../Pages/MSP/Customer/CustomerIndex.jsx";
import Logout from "../Pages/MSP/Nonauthenticated/Logout.jsx";
import Login from "../Pages/MSP/Nonauthenticated/Login.jsx";
import TicketModificationIndex from "../Pages/MSP/TicketModification/TicketModificationIndex.jsx";

import NewContractIndex from "../Pages/MSP/Contract/NewContract/NewContractIndex.jsx";
import ContractIndex from "../Pages/MSP/Contract/Contract View List/ContractIndex.jsx";

import MyShifts from "../Pages/MSP/HR/Shift Management/MyShifts.jsx";
import PickShift from "../Pages/MSP/HR/Shift Management/PickShift.jsx";
import ShiftManagementIndex from "../Pages/MSP/HR/Shift Management/ShiftManagementIndex.jsx";
import MyLeaves from "../Pages/MSP/HR/My Leaves/MyLeaves.jsx";
import HolidayIndex from "../Pages/MSP/HR/Holiday/HolidayIndex.jsx";
import AssigneeIndex from "../Pages/MSP/HelpDesk/Assignees/AssigneeIndex.jsx";
import BackupIndex from "../Pages/MSP/HelpDesk/Backup/BackupIndex.jsx";
import MspBackupIndex from "../Pages/MSP/HelpDesk/MSP360 Backups/MspBackupIndex.jsx";
import TicketPageIndex from "../Pages/MSP/HelpDesk/TicketPage/TicketPageIndex.jsx";
import WeekendTaskIndex from "../Pages/MSP/HelpDesk/Weekends Task/WeekendTaskIndex.jsx";
import ContractCalendar from "../Pages/MSP/Contract/Contract Calendar/ContractCalendar.jsx";
import KnowledgeIndex from "../Pages/MSP/Knowledge Base/KnowledgeIndex.jsx";
import Attachments from "../Pages/MSP/Knowledge Base/Edit Article/Attachments.jsx";
import TimesheetIndex from "../Pages/MSP/Timesheet/TimesheetIndex.jsx";
import AttendanceDashIndex from "../Pages/MSP/HR/Attendance Dashboard/AttendanceDashIndex.jsx";
import BackblazeChargesIndex from "../Pages/MSP/Billing/Backblaze Charges/BackblazeChargesIndex.jsx";
import ShiftsDashboardIndex from "../Pages/MSP/HR/Shift Management/Shifts Dashboard/ShiftsDashboardIndex.jsx";
import AllocateShiftsIndex from "../Pages/MSP/HR/Shift Management/Allocate Shifts/AllocateShiftsIndex.jsx";
import LeaveManagementIndex from "../Pages/MSP/HR/Leave Management/LeaveManagementIndex.jsx";

const authProtectedRoutes = [
  //dashboard
  { path: "/dashboard", component: <DashboardIndex /> },

  //msp pages
  { path: "/ticketcreation", component: <Index /> },
  {
    path: "/ticketmodification/:ticketnumber",
    component: <TicketModificationIndex />,
  },
  { path: "/mspdashboard", component: <DashboardIndex /> },
  { path: "/ticket", component: <TicketPageIndex /> },
  { path: "/mspcustomer", component: <CustomerIndex /> },
  { path: "/technician", component: <AssigneeIndex /> },
  { path: "/backup", component: <BackupIndex /> },
  { path: "/msp-backup", component: <MspBackupIndex /> },
  { path: "/weekend-tasks", component: <WeekendTaskIndex /> },
  { path: "/my-shifts", component: <MyShifts /> },
  { path: "/pick-shifts", component: <PickShift /> },
  { path: "/manage-shift", component: <ShiftManagementIndex /> },
  { path: "/my-leaves", component: <MyLeaves /> },
  { path: "/holiday-list", component: <HolidayIndex /> },
  { path: "/contract-calendar-view", component: <ContractCalendar /> },
  { path: "/new-contract", component: <NewContractIndex /> },
  { path: "/contract-list", component: <ContractIndex /> },
  { path: "/knowledge-base", component: <KnowledgeIndex /> },
  { path: "/edit-article/:pid", component: <Attachments /> },
  { path: "/timesheet", component: <TimesheetIndex /> },
  { path: "/attendance-dashboard", component: <AttendanceDashIndex /> },
  { path: "/backblazecharges", component: <BackblazeChargesIndex /> },
  { path: "/shifts-dashboard", component: <ShiftsDashboardIndex /> },
  { path: "/allocate-shifts", component: <AllocateShiftsIndex /> },
  { path: "/leave-management", component: <LeaveManagementIndex /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },

  // Utility Pages
  { path: "/pages-404", component: <Error404 /> },
  { path: "/pages-500", component: <Error500 /> },
  { path: "/pages-maintenance", component: <Maintenance /> },
  { path: "/pages-comingsoon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
