import styled from "styled-components";

const StyledDatePickerWrapper = styled.div`
  .react-datepicker {
    border: none;
  }

  .react-datepicker {
    font-family: sans-serif;
    border-radius: 4px;
  }

  .react-datepicker__header {
    background-color: #ffffff;
    color: #000000;
    border: none;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }

  .react-datepicker__portal .react-datepicker__current-month,
  .react-datepicker__portal .react-datepicker-time__header {
    font-size: 1.44rem;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 1px;
    color: #000;
    font-size: 0.944rem;
  }

  .react-datepicker__navigation {
    margin-left: 20px;
    margin-right: 20px;
    background: none;
    line-height: 1.7rem;
    text-align: center;
    cursor: pointer;
    position: absolute;
    top: 30px;
    width: 0;
    padding: 0;
    border: 0.45rem solid transparent;
    z-index: 1;
    height: 10px;
    width: 10px;
    text-indent: -999em;
    overflow: hidden;
  }

  .react-datepicker__navigation--previous {
    left: 10px;
    border-right-color: #ccc;
  }

  .react-datepicker__navigation--previous:hover {
    border-right-color: #b3b3b3;
  }

  .react-datepicker__navigation--previous--disabled,
  .react-datepicker__navigation--previous--disabled:hover {
    border-right-color: #e6e6e6;
    cursor: default;
  }

  .react-datepicker__navigation--next {
    right: 10px;
    border-left-color: #ccc;
  }

  .react-datepicker__navigation--next--with-time:not(
      .react-datepicker__navigation--next--with-today-button
    ) {
    right: 80px;
  }

  .react-datepicker__navigation--next:hover {
    border-left-color: #b3b3b3;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }

  .react-datepicker__day {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgb(74 131 169);
      color: #ffffff;
    }
  }

  .react-datepicker__month {
    padding: 10px;
  }

  .react-datepicker__day--selected {
    background-color: #3498db;
    color: #ffffff;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #3498db;
    color: #ffffff;
  }
`;

export default StyledDatePickerWrapper;
