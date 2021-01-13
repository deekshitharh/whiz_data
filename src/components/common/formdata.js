//fom schema fo time to contact lnding page
const fileds = [
  {
    id: "date",
    label: "Date to contact",
    value: "",
    type: "date",
    defMsg: "Please enter the date",
    error: ""
  },
  {
    id: "time",
    label: "Time to contact",
    value: "",
    type: "time",
    defMsg: "Please enter the time",
    error: ""
  },
  {
    id: "pnumber",
    label: "Phone Number",
    type: "number",
    value: "91",
    error: "",
    defMsg: "Please enter the valid Phone number!!!!"
  },
  {
    id: "Email",
    label: "Email-Id",
    type: "email",
    defMsg: "Please enter the valid email id!!!!",
    value: "",
    error: ""
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    value: ""
  },
  {
    id: "Messege",
    label: "Messege",
    type: "text",
    value: "",

    multiline: true,
    rows: "2"
  }
];

export default fileds;
