import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link, animateScroll as scroll } from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Grid className="home-grid">
          <Cell col={12}>
            <img
              src="https://lh3.googleusercontent.com/HGlZLRPYspbBAaKUYv0sWdqTOrktYvJXAbHvpebnJ3bvwFXwv_4CnzTjLTOdgjAe0r1Ftdtn4AxALrMHx9fycwirGsG7ggMozJaSXBuixr4sIg2BqYlYDae8LrQALFQwtnhSRtILvSJ7NbnHudU-_cVUSCCEmTkx-6zG2uv050O9_zY9DGWpeUO702zD4fGscIv9ymRnYPHJyGSuPM9lG7gb_glZ8jd1I4lngD6Ox9Yr3sWy8dTbqd8fqbisPq_jrnpRBxgEGa7SRIE40gLiZe2kVf16JcV3lqacEIecuCprixsrYdgbf9ddBNObX0dRzQry_OEazKBVHpgSy2rSI7ulQnydHp1hIBw5PXsf6AvwxX5srIlnTkiPECCzN39FOuLP6RHI8PR68OiIZ3b9qZ2JVXQFCTN2yZjFP06Cde9XXUTMXxAIJMwQ0j1bgvl4BHzDBK7LmZxVEkIrxY1i_ZN_dPeYBTg9d9R_EmargLWx088PduAEhqfs49zKfNtpgEj9YsL6Oey8Qyjmp2Td8Ff_MPstyXOf0pJqNLNqDbaRMlxM-m3wAFTIav0OohEzCD_2OK9nBDIcL9c0HGcGBrO9BeEj2BGa4PAFaEYdD55F73vyRceL0sIUnvqnY7qD6dG3Rthcytb7l07urpttSVtnqpwBn36r--czUr8QCcEJwj-lkTkZfIWQy0y60Z-ILlDOJl9tfwvqTq_EOS7ZbqjJruxUG16N7sOy93nIWgM7TQsa=w1057-h793-no"
              className="profile-img"
              alt="profile"
            />
            <div className="banner-text">
              <h2>JAIST student</h2>
            </div>

            <hr />

            <div className="social-links">
              {/* Github */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true" />
              </a>

              {/* TED Talks */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>

              {/* Instagram */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Home;
