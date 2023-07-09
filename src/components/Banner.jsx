import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>
                  {`Hi! I'm Judy`}{" "}
                  <span
                    className="txt-rotate"
                    dataPeriod="1000"
                    data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                  >
                    <span className="wrap">{text}</span>
                  </span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam et turpis sed est volutpat rhoncus vitae at arcu.
                  Interdum et malesuada fames ac ante ipsum primis in faucibus.
                  Nulla a fringilla eros. Phasellus fringilla placerat eros, a
                  malesuada elit tempor ut. Duis bibendum cursus bibendum.
                  Suspendisse mauris magna, tempor id lectus eget, commodo
                  blandit libero. Ut iaculis id lectus nec efficitur. Aenean sem
                  magna, efficitur sed aliquet at, mollis at velit
                </p>
                <button onClick={() => console.log("connect")}>
                  Let’s Connect <ArrowRightCircle size={25} />
                </button>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
