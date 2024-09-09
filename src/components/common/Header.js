import { useState, useEffect } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import styles from '../../styles/header.module.scss'
import Hyperlink from '../common/Hyperlink'
import {
  HouseFill as Home, GearFill as Api, QuestionCircleFill as HowToUse,
  PersonHearts as Developer, EnvelopeFill,
  Github, Linkedin, Facebook, TwitterX,
  Instagram, Globe as BootstrapLink, List, Boxes
} from 'react-bootstrap-icons';
import { TOP_NAV_LINKS, APP_META, NAVBAR_LINKS } from '../../constants'
import getDevice from '../../utils/getDevice'

function Header() {

  const { isMobile, isTablet } = getDevice()
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)
  const [isClosingMobileNav, setIsClosingMobileNav] = useState(false)

  const showMobileNav = () => {
    setIsClosingMobileNav(false)
    setIsMobileNavVisible(true)
  }

  const hideMobileNav = () => {
    setIsClosingMobileNav(true)
    setTimeout(() => {
      setIsMobileNavVisible(false)
    }, 600)
  }

  const toggleMobileNav = () => {
    if (isMobileNavVisible) {
      hideMobileNav()
    }
    else {
      showMobileNav()
    }
  }

  useEffect(() => {
    if (!isMobile && !isTablet)
      setIsMobileNavVisible(false)
  }, [isMobile, isTablet])

  const topbarIconMapping = {
    github: <Github className={`${styles.topIcon} ${styles.githubIcon}`} />,
    linkedin: <Linkedin className={`${styles.topIcon} ${styles.linkedIcon}`} />,
    facebook: <Facebook className={`${styles.topIcon} ${styles.facebookIcon}`} />,
    twitter: <TwitterX className={`${styles.topIcon} ${styles.twitterIcon}`} />,
    instagram: <Instagram className={`${styles.topIcon} ${styles.instagramIcon}`} />,
    website: <BootstrapLink className={`${styles.topIcon} ${styles.websiteIcon}`} />,
    email: <EnvelopeFill className={`${styles.topIcon} ${styles.emailIcon}`} />
  }

  const mobileNavLinksIconMap = {
    home: <Home className={styles.mobileNavLinkIcon} />,
    api: <Api className={styles.mobileNavLinkIcon} />,
    howtouse: <HowToUse className={styles.mobileNavLinkIcon} />,
    developer: <Developer className={styles.mobileNavLinkIcon} />
  }

  return (
    <Navbar fixed="top" className={`${styles.navBG} flex-column`}>
      <Container fluid className={styles.topbar}>
        <Container className={`d-flex justify-content-sm-end justify-content-center gap-4 py-1`}>
          {TOP_NAV_LINKS.map(item => (
            <Hyperlink url={item.url} key={item.label} type="external" newTab>
              {topbarIconMapping[item.label]}
            </Hyperlink>
          ))}
        </Container>
      </Container>
      <Container fluid className="position-relative">
        <Container className="d-flex align-items-center py-1">
          <div className={`${styles.appNameContainer}`}>
            <Hyperlink url="/" className="">
              <h1>{APP_META.name}</h1>
            </Hyperlink>
          </div>

          <span className={`${styles.burgerBtn} d-md-none d-block`} onClick={toggleMobileNav}>
            <List className={`d-block ${styles.burger}`} />
          </span>
          <Nav className={`${styles.nav} justify-content-end d-md-flex d-none`}>
            {NAVBAR_LINKS.map(item => (
              <Hyperlink key={item.label} url={item.url} type={item['type']} newTab={item['type'] === 'external'} className={styles.navLink}>{item.label}</Hyperlink>
            ))}
          </Nav>
          {(isTablet || isMobile) && isMobileNavVisible &&
            <Nav className={`${styles.mobileNav} d-flex flex-column gap-4 ${isClosingMobileNav ? styles.mobileNavHide : styles.mobileNavShow}`}>
              {NAVBAR_LINKS.map(item => (
                <span onClick={toggleMobileNav} key={item.label}>
                  <Hyperlink url={item.url} className={`${styles.navLink} d-flex gap-3 align-items-center`} type={item['type']} newTab={item['type'] === 'external'}>
                    {mobileNavLinksIconMap[item.iconIdentifier] ?? <Boxes className={styles.mobileNavLinkIcon} />} {item.label}
                  </Hyperlink>
                </span>
              ))}
            </Nav>}
        </Container>
      </Container>
    </Navbar>
  )
}

export default Header