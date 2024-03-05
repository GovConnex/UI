import styled from "styled-components";

const StyledDatepickerWrapper = styled.div`
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
      background-color: #f0f0f0;
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
    background-color: #2980b9;
    color: #ffffff;
  }
`;

export default StyledDatepickerWrapper;
