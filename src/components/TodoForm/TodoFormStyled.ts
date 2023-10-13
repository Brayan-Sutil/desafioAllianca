import { Paper } from "@mui/material";
import styled from "styled-components";

const StyledPaper = styled(Paper)`
  padding: 1em;
`;

const Content = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`;

export { 
    StyledPaper, 
    Content 
};
