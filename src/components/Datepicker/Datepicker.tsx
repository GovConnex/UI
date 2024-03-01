import React, { useState, useEffect } from "react";
//@ts-ignore
import DatePicker, { registerLocale } from "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
import StyledDatepickerWrapper from './Datepicker.styles';


export interface DatepickerProps {
  defaultValue?: Date | null
  /**
  * Callback fired when the date changes
  */
  onChange?: (date: Date | null) => void;
};

/**
 * `Datepicker` Describe what it does
 *
 * Component Demo: [Datepicker](https://ui.govconnex.com/?path=/story/components-Datepicker--example)
 * 
 */
const Datepicker = (props: DatepickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(props.defaultValue || null);

  useEffect(() => {
    registerLocale('es', enGB)
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (props.onChange) {
      props.onChange(date);
    }
  };

  return (
    <StyledDatepickerWrapper>
      <DatePicker
      locale="es"
      selected={selectedDate}
      onChange={handleDateChange}
      showTimeInput
      inline
      timeInputLabel="Time:"
      dateFormat="DD MMM YYYY, h:mm A"
    />
    </StyledDatepickerWrapper>
  );
};

export default Datepicker;
