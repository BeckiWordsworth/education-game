import styled from "styled-components";

export default function Header() {
  return (
    <HeaderBlock>
      <HeaderContent>
        <LogoContainer>
          <a href="/">
            <img src="/logo.png" alt="Logo" />
          </a>
        </LogoContainer>
        <SiteTitle>
          <a href="/">Duophysics</a>
        </SiteTitle>
        <div className="userInfo">"Becki W"</div>
        <HeaderLinks>
          <ul>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            {/* <li>{userLogged}</li> */}
            <li>
              <a href="/stats">Stats</a>
            </li>
          </ul>
        </HeaderLinks>
      </HeaderContent>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  background: rgba(32, 166, 231, 0.8);
  linear-gradient(180deg, #20a8e9, rgba(30, 158, 220, 0.5)) repeat-x;
  background-color: rgba(32, 166, 231, 0.8);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  color: #fff;
  font-size: 15px;
  height: 70px;
  margin: 0;
  top: 0;
  padding: 0 20px;
  font-family: "Roboto", sans-serif;
  position: fixed;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
`;

const HeaderContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoContainer = styled.div`
  width: 50px;

  img {
    width: auto;
    height: 50px;
    padding: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const SiteTitle = styled.div`
  font-size: 16pt;
  flex-grow: 1;

  a {
    text-decoration: none;
    color: white;
  }
`;

const HeaderLinks = styled.div`
  font-size: 15px;
  font-weight: bold;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;

    li {
      padding: 0 2px;
    }
  }

  a {
    text-decoration: none;
    color: #ffffff;
    padding: 10px 10px;
  }

  a:hover {
    text-decoration: none;
    background-color: #4488cc;
    border-radius: 20px;
  }
`;
