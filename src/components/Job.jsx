import { Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Job = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const favourites = useSelector((state) => state.jobs.favourites);
  const dispatch = useDispatch();

  const handleToggleFavourite = (job) => {
    if (isFavourite(job)) {
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: job });
    } else {
      dispatch({ type: "ADD_TO_FAVOURITES", payload: job });
    }
  };

  const isFavourite = (job) => {
    return favourites.some((fav) => fav.company_name === job.company_name);
  };

  return (
    <Row>
      <Col>
        {jobs.map((jobData) => (
          <Row
            key={jobData._id}
            className="mx-0 mt-3 p-3 job-card"
            style={{
              border: "1px solid #00000033",
              borderRadius: 4,
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Col xs={3}>
              <Link to={`/${jobData.company_name}`}>
                {jobData.company_name}
              </Link>
            </Col>
            <Col xs={7}>
              <a href={jobData.url} target="_blank" rel="noreferrer">
                {jobData.title}
              </a>
            </Col>
            <Col
              xs={2}
              className="d-flex justify-content-end align-items-center"
            >
              {isFavourite(jobData) ? (
                <HeartFill
                  color="red"
                  size={24}
                  onClick={() => handleToggleFavourite(jobData)}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Heart
                  color="red"
                  size={24}
                  onClick={() => handleToggleFavourite(jobData)}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Col>
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default Job;
