
//contact field schema
const fileds = [
    {
        "id": "checkbox", id: "check",
        "value": 0, 
        "type": "checkbox",  options:[
            {
                name: "iOS/Apple",
                checked: false,
                label: "iOS/Apple",
            },

            {
                name: "Android",
                checked: false,
                label: "Android Mobile",
            },
            {
                name: "Tab view",
                checked: false,
                label: "Tab view",
            },
            {
                name: "Web Applications",
                checked: false,
                label: "Web Applications",
            },
            {
                name: "Other",
                checked: false,
                label: "Others45",
            },
        ],
    },

   
    {
        "id": "name", "displayName": "Name", "order": 1, "key": "name", adorment: "account", label: "Name",
        "type": "string", "error": "", "value": "", "required": true
    },


    {
        "id": "email", "displayName": "Email", "order": 2, "key": "email", adorment: "email", label: "Email-Id",
        "type": "string", "error": "", "value": "", "required": true
    },


    // {
    //   id: "email",
    //   label: "Email-Id",
    //   type: "email",
    //   required: true,
    //   adorment: "email",

    //   value: "",
    //   error: "",
    // },
  
    {
        id: "Messege",
        "displayName": "Messege",
        label: "Messege",
        adorment: "message",
        type: "text",
        value: "",
        key: "message",
        "required": true,

        multiline: true,
        rows: "5",
    },
];

export default fileds;