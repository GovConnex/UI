import styled from "styled-components";
import { addCustomStyles, customStyles } from "../../core/styleFunctions";

// styled components
const StyledBox = styled.div<{cs?:customStyles}>((props) => 
    addCustomStyles(props)
)


export default StyledBox;