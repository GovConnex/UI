import styled from "styled-components";
import { addCustomStyles } from "../../core/styleFunctions";

// styled components
const StyledBox = styled.div<any>((props) => 
    addCustomStyles(props)
)


export default StyledBox;