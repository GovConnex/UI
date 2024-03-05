import React, {useState, useEffect} from "react";
//@ts-ignore
import DatePicker, {registerLocale} from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import StyledDatepickerWrapper from "./Datepicker.styles";
import Popover from "../Popover";
import Button from "../Button";
import Box from "../Box";
import ClickAwayListener from "../ClickAwayListener";
import Typography from "../Typography";
import {customStyles} from "../../core/styleFunctions";
import {Modifier} from "react-popper";
import {Placement} from "@popperjs/core";

export interface DatepickerProps {
  defaultDate?: Date | null;
  defaultTime?: string;
  /**
   * Callback fired when the date changes
   */
  onChange?: (date: Date | null) => void;
  onTimeChange?: (time: string) => void;
  onClose?: () => void;
  popoverCs?: customStyles;
  isBlock?: boolean;
  hasTime?: boolean;
  modifiers?: ReadonlyArray<Modifier<any>>;
  placement?: Placement;
  anchorEl?: React.RefObject<HTMLElement>;
}

interface TimePickerProps {
  selectedTime: any; // Assuming selectedTime is a string in the format "HH:mm"
  onTimeChange: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({selectedTime, onTimeChange}) => {
  const [inputValue, setInputValue] = useState(selectedTime);

  useEffect(() => {
    if (selectedTime && selectedTime.includes("NA")) {
      setInputValue("");
    } else {
      setInputValue(selectedTime.substring(0, 5));
    }
  }, [selectedTime]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = event.target.value;
    setInputValue(newTime);

    if (onTimeChange) {
      onTimeChange(newTime);
    }
  };

  return (
    <Box
      cs={{
        display: "flex",
        gap: 2,
        marginBottom: "spacing.sm",
        marginLeft: "spacing.sm",
        alignItems: "center",
      }}
    >
      <Typography variant="body" size="sm" noMargin>
        Time:
      </Typography>
      <input
        style={{width: "120px"}}
        type="time"
        name="timeInput"
        value={inputValue}
        onChange={handleInputChange}
      />
    </Box>
  );
};

/**
 * `Datepicker` Describe what it does
 *
 * Component Demo: [Datepicker](https://ui.govconnex.com/?path=/story/components-Datepicker--example)
 *
 */
const Datepicker = ({
  defaultDate,
  defaultTime,
  onChange,
  onTimeChange,
  onClose,
  popoverCs,
  isBlock = true,
  hasTime = false,
  modifiers,
  placement = "bottom-start",
  anchorEl,
}: DatepickerProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(defaultDate || null);
  const [selectedTime, setSelectedTime] = useState(defaultTime);

  useEffect(() => {
    registerLocale("es", enGB);
  }, []);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (onChange) {
      onChange(date);
    }
  };

  const handleClear = () => {
    setSelectedDate(null);
    if (onChange) {
      onChange(null);
    }

    if (hasTime) {
      // need seconds to update time element in the component and trigger useeffect
      const seconds = new Date().getSeconds();
      const todaysTime = `NA:${seconds.toString().padStart(2, "0")}`;
      setSelectedTime(todaysTime);
      if (onTimeChange) {
        onTimeChange("");
      }
    }
  };

  const handleToday = () => {
    const todaysDate = new Date();
    setSelectedDate(todaysDate);

    const hours = todaysDate.getHours();
    const minutes = todaysDate.getMinutes();
    const seconds = todaysDate.getSeconds();

    // need seconds to update time element in the component and trigger useeffect
    const todaysTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    setSelectedTime(todaysTime);

    if (onChange) {
      onChange(todaysDate);
    }

    if (onTimeChange && hasTime) {
      onTimeChange(todaysTime.substring(0, 5));
    }
  };

  const handleClickaway = () => {
    onClose && onClose();
  };

  return (
    <ClickAwayListener onClickAway={handleClickaway}>
      <StyledDatepickerWrapper>
        <Popover
          modifiers={modifiers}
          isBlock={isBlock}
          anchorEl={anchorEl}
          placement={placement}
          cs={{
            zIndex: 799,
            ...popoverCs,
          }}
        >
          <Box cs={{border: "1px solid #aeaeae"}}>
            <DatePicker
              locale="es"
              selected={selectedDate}
              onChange={handleDateChange}
              inline
            />
            {hasTime && (
              <TimePicker
                selectedTime={selectedTime}
                onTimeChange={onTimeChange || (() => {})}
              />
            )}
          </Box>
          <Box cs={{display: "flex", marginTop: "spacing.xxs"}}>
            <Box cs={{display: "flex", justifyContent: "flex-start"}}>
              <Button variant="tertiary" onClick={handleClear}>
                Clear
              </Button>
            </Box>
            <Box cs={{display: "flex", justifyContent: "flex-end", flexGrow: 1}}>
              <Button variant="tertiary" onClick={handleToday}>
                Today
              </Button>
            </Box>
          </Box>
        </Popover>
      </StyledDatepickerWrapper>
    </ClickAwayListener>
  );
};

export default Datepicker;
