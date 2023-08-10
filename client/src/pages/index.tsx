import styled from "styled-components";
import Header from "../components/header/Header";

export default function Index() {
  let userLogged = null;
  return (
    <HomePage>
      <Header />
      <Hero>
        <HeroIcon>
          <img src="/logo.png" alt="Logo" />
        </HeroIcon>
        <HeroContent>
          <h1>DuoPhysics</h1>
          <p>Learn Physics for free</p>
          <br />
          <a href={userLogged}>Get Started</a>
        </HeroContent>
      </Hero>

      <Section>
        <section>
          <SectionContent>
            <h2>A fun way to learn Physics</h2>
            <p>
              Learning with DuoPhysics is fun! Earn points for correct answers,
              collect badges, and level up. This bite-sized lessons are
              effective, and we have proof that it works. We have a range of
              subjects for your to dive into which are both fun and interesting.
            </p>
            <ScienceIcon>
              <img src="/science-book.png" alt="sciencebook" />
              <img src="/dropper.png" alt="dropper" />
              <img src="/nuclear.png" alt="nuclear" />
              <img src="/saturn.png" alt="saturn" />
              <img src="/telescope.png" alt="telescope" />
              <img src="/radar.png" alt="radar" />
              <img src="/satellite.png" alt="satelite" />
              <img src="/flask.png" alt="flask" />
              <img src="/newton-cradle.png" alt="newton" />
              <img src="/space.png" alt="space" />
            </ScienceIcon>
          </SectionContent>
        </section>
      </Section>

      <Section>
        <section>
          <SectionContent>
            <h2>Learn anywhere</h2>
            <p>
              Make your breaks and commutes more productive by learning through
              your phone aswell. Lessons are quick and can be played anywhere.
            </p>
            <ImageIcon>
              <img src="/smartphone.png" alt="phone" />
              <img src="/tablet.png" alt="tablet" />
              <img src="/laptop.png" alt="laptop" />
            </ImageIcon>
          </SectionContent>
        </section>
      </Section>

      <Footer>
        <FooterContent>
          Learning Physics the fun way with DuoPhysics.
        </FooterContent>
      </Footer>
    </HomePage>
  );
}

const HomePage = styled.div``;

const Hero = styled.div`
  background-color: #1866a6;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroIcon = styled.div`
  width: 200px;
`;

const HeroContent = styled.div`
  color: white;
  font-size: 18pt;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  text-align: center;

  a {
    padding: 10px 50px;
    background-color: #22aa33;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    font-size: 14pt;
  }

  a:hover {
    background-color: #229922;
  }
`;

const Section = styled.div`
  section {
    background-color: #ddd;
    padding: 20px;
  }

  section:nth-child(odd) {
    background-color: #f3f3f3;
  }
`;

const SectionContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Footer = styled.div`
  background-color: #1866a6;
  min-height: 100px;
  padding: 40px 20px;
`;

const FooterContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
  color: #ddd;
`;

const ScienceIcon = styled.div`
  img {
    margin: 10px;
  }
`;

const ImageIcon = styled.div`
  margin: 0 auto;

  img {
    height: 50px;
  }
`;
