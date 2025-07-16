import Container from '../../components/Container';
import Logo from '../../components/Logo';
import Footer from '../../components/Footer';
import Menu from '../../components/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
};

export default MainTemplate;
