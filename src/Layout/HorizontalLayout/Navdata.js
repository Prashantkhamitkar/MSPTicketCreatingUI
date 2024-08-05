import React, { useState } from "react";

const Navdata = () => {
  const [hp, sethp] = useState(false);
  const [hr, sethr] = useState(false);
  const [subhr, setsubhr] = useState(false);
  const [contract, setcontract] = useState(false);
  const [billing, setbilling] = useState(false);
  const [subbilling, setsubbilling] = useState(false);

  const NavnavData = [
    {
      id: 1,
      label: "Dashboard",
      icon: "mdi mdi-home-variant-outline me-2",
      isdropDown: true,
      isdashboard: true,
      click: function () {
        sethp(false);
        sethr(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
    },
    {
      id: 2,
      label: "Customers",
      icon: "mdi mdi-account-group-outline me-2",
      isdropDown: true,
      url: "/mspcustomer",
      click: function () {
        sethp(false);
        sethr(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
    },
    {
      id: 3,
      label: "Helpdesk",
      icon: "mdi mdi-handshake me-2",
      click: function () {
        sethp(!hp);

        sethr(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
      currentState: hp,
      subItems: [
        {
          label2: "Tickets",
          url: "/ticket",
        },
        {
          label2: "Technicians",
          url: "/technician",
        },
        {
          label2: "Backup",
          url: "/backup",
        },
        {
          label2: "Reports",
          url: "/#",
        },
        {
          label2: "MSP360 Backups",
          url: "/msp-backup",
        },
        {
          label2: "Weekend Tasks",
          url: "/weekend-tasks",
        },
      ],
    },

    {
      id: 4,
      label: "HR",
      icon: "mdi mdi-account-supervisor-outline me-2",
      click: function () {
        sethr(!hr);
        sethp(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
      currentState: hr,
      subItems: [
        {
          label2: "Shifts Management ",

          staclick: function () {
            setsubhr(!subhr);
            sethp(false);
            setsubbilling(false);
            setbilling(false);

            setcontract(false);
          },

          subState: subhr,
          subItem: [
            { link: "/shifts-dashboard", title: "Shifts Dashboard" },
            { link: "/my-shifts", title: "My Shifts" },
            { link: "/allocate-shifts", title: "Allocate Shifts" },
            { link: "/pick-shifts", title: "Pick Shifts" },
            { link: "/manage-shift", title: "Shift Transfers" },
          ],
        },
        {
          label2: "Holiday List",
          url: "/holiday-list",
        },
        {
          label2: "My Leaves",
          url: "/my-leaves",
        },{
          label2:"Leave Management",
          url:"/leave-management",
        },
        {
          label2: "Attendance Dashboard",
          url: "/attendance-dashboard",
        },
      ],
    },
    {
      id: 5,
      label: "Contracts",
      icon: "mdi mdi-file-document-edit-outline me-2",
      click: function () {
        setcontract(!contract);
        sethp(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
      },

      currentState: contract,
      subItems: [
        {
          label2: "Contract Calendar View",
          url: "/contract-calendar-view",
        },
        {
          label2: "New Contract",
          url: "/new-contract",
        },
        {
          label2: "Contract List",
          url: "/contract-list",
        },
      ],
    },
    {
      id: 6,
      label: "Billing",
      icon: "mdi mdi-credit-card-marker me-2",
      click: function () {
        setbilling(!billing);
        sethp(false);
        setsubbilling(false);

        setsubhr(false);
        setcontract(false);
      },

      currentState: billing,
      subItems: [
        {
          label2: "AT&T",
          url: "/#",
        },
        {
          label2: "Stripe Payment Dashboard",
          url: "/#",
        },
        {
          label2: "Manual Payment Processing Rep...",
          url: "/#",
        },
        {
          label2: "SaaS Billing",

          staclick: function () {
            setsubbilling(!subbilling);
            sethp(false);

            setbilling(false);
            setsubhr(false);
            setcontract(false);
          },

          subState: subbilling,
          subItem: [
            { link: "/#", title: "SaaS Billing Dashboard" },
            { link: "/#", title: "SaaS (Ingram Cloud)" },
            { link: "/#", title: "SaaS Payments" },
            { link: "/#", title: "SaaS Payment History" },
          ],
        },
        {
          label2: "Stripe Customer Mapping",
          url: "/#",
        },
        {
          label2: "Backblaze Charges",
          url: "/backblazecharges",
        },
      ],
    },
    {
      id: 7,
      label: "Knowledge Base",
      icon: "mdi mdi-head-lightbulb me-2",
      isdropDown: true,
      url: "/knowledge-base",
      click: function () {
        sethp(false);
        sethr(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
    },
    {
      id: 8,
      label: "Timesheet",
      icon: "mdi mdi-clock-time-four-outline me-2",
      isdropDown: true,
      url: "/timesheet",
      click: function () {
        sethp(false);
        sethr(false);
        setsubbilling(false);
        setbilling(false);
        setsubhr(false);
        setcontract(false);
      },
    },
  ];
  return <React.Fragment>{NavnavData}</React.Fragment>;
};

export default Navdata;
