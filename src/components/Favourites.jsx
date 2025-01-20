import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.jobs.favourites);
  const dispatch = useDispatch();

  const handleRemoveFromFavourites = (company) => {
    dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: company });
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourite Companies</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {favourites.map((company) => (
            <Row
              key={company._id}
              className="mx-0 mt-3 p-3"
              style={{ border: "1px solid #00000033", borderRadius: 4 }}
            >
              <Col xs={3}>
                <Link to={`/${company.company_name}`}>
                  {company.company_name}
                </Link>
              </Col>
              <Col xs={7}>
                <a href={company.url} target="_blank" rel="noreferrer">
                  {company.title}
                </a>
              </Col>
              <Col xs={2}>
                <Button onClick={() => handleRemoveFromFavourites(company)}>
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
