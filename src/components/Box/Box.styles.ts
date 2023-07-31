import styled from "styled-components";
import {addCustomStyles} from "../../core/styleFunctions";

// styled components
const StyledBox = styled.div<{cs: any}>((cs) => addCustomStyles(cs));

export default StyledBox;
