import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// @material-ui/icons

// React icons
// import { FaPlay } from "react-icons/fa"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"
import SEO from "components/SEO.tsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx"
import WorkSection from "./Sections/WorkSection.jsx"
import SkillsSection from "./Sections/SkillsSection.jsx"

const dashboardRoutes = []

class LandingPage extends React.Component {
  render() {
    const { classes, portfolio } = this.props

    return (
      <div>
        <SEO />
        <Header
          color="transparent"
          routes={dashboardRoutes}
          rightLinks={<HeaderLinks />}
          drawerLinks={<HeaderLinks drawer />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
        />
        <Parallax filter image={require("assets/img/header.webp")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>A developer with passion!</h1>
                <p className={classes.subtitle}>
                  I'm Jorge Daniel Sosa. Fullstack JS developer with a strong
                  background in systems administration.
                </p>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            <SkillsSection />
            <WorkSection portfolio={portfolio} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(LandingPage)
