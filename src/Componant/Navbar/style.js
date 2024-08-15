import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarHeader = styled(Header)`
  display: flex;
  align-items: center;
  height: 3.5rem;
  line-height: 3.5rem;
`;

export const NavbarMenu = styled(Menu)`
  flex: 1;
  min-width: 0;
`;
