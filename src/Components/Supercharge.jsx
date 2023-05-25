import React from "react";
import Fade from "react-reveal/Fade";
import ReadMoreReact from "read-more-react";
import data from "../Data";
import { Fragment } from "react";
import SwipeableViews from "react-swipeable-views";
import productbg from "../assets/productbg.png";

const Supercharge = () => {
  const styles = {
    slideContainer: {
      height: 600,
    },
    slide1: {
      minHeight: 600,
    },
    slide2: {
      minHeight: 600,
    },
  };
  return (
    <React.Fragment>
      <Fade bottom delay={500}>
        <div>
          <div
            className="section features aboutus supercharge zoominheaderabt"
            style={{ backgroundImage: `url(${productbg})` }}
          >
            <div className="col-sm-12 homepagesec">
              <SwipeableViews
                enableMouseEvents
                axis="y"
                containerStyle={styles.slideContainer}
              >
                {/* dual map for scrolable animation */}

                {data.Usp1.map((item, index) => (
                  <Fragment>
                    <Fade left>
                      <div
                        key={index}
                        className="myheading"
                        style={Object.assign({}, styles.slide, styles.slide1)}
                      >
                        <div className="designtitle">
                          <h2>{item.title}</h2>
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}

                {data.Usp1.map((item, index) => (
                  <Fragment>
                    <Fade right>
                      <div
                        key={index}
                        className="myheading"
                        style={Object.assign({}, styles.slide, styles.slide1)}
                      >
                        <div className="designtitle">
                          <ReadMoreReact
                            text={item.overview}
                            min={150}
                            ideal={280}
                            max={350}
                            readMoreText="read more"
                          />
                        </div>
                      </div>
                    </Fade>
                  </Fragment>
                ))}
              </SwipeableViews>
            </div>

            <p className="learn"></p>
          </div>
        </div>
      </Fade>
    </React.Fragment>
  );
};
export default Supercharge;
