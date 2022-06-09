// import React, { useState } from "react";

// import DateFnsUtils from "@date-io/date-fns";
// import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";

// export default function MyCalendar() {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     console.log("Date is: ", date);
//   };

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils}>
//       <Calendar date={selectedDate} onChange={handleDateChange} />
//     </MuiPickersUtilsProvider>
//   );
// }
import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, Calendar } from "@material-ui/pickers";
import idLocale from "date-fns/locale/id";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { purple } from "@mui/material/colors";

const theme = createMuiTheme({
  palette: {
    primary: { light: purple[300], main: purple[500], dark: purple[700] },
  },
});

function MyCalendar(props) {
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    props.setSelectedDate(date);
  };
  console.log("date", props.selectedDate);

  return (
    <MuiThemeProvider theme={theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={idLocale}>
        <Paper style={{ overflow: "hidden" }}>
          <Calendar date={props.selectedDate} onChange={handleDateChange} />
        </Paper>
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
  );
}

export default MyCalendar;
