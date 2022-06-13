import React, {useState} from "react";
import Seo from "../Seo";
import ThemeSwitch from "../ThemeSwitch";
import * as styles from "./index.module.css";
import Logo from "../Logo";
import Menu from "../Menu"
import { useLocation } from "@reach/router"
import { List, X } from "phosphor-react";


const Layout = ({
  customTitle,
  customDescription,
  customOgImage,
  customURL,
  children,
  projectMode
}) => {

  const location = useLocation();
  const notHome = location.pathname !== "/"
  const isHome = location.pathname === "/"
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <Seo
        customTitle={customTitle}
        customDescription={customDescription}
        customOgImage={customOgImage}
        customURL={customURL}
      />
      <div className={`${styles.layout} ${isHome && styles.layoutRestrict}`}>
        
        {notHome && <div className={styles.sidebarHolder}></div> }
        {notHome && <div className={styles.sidebar}><Menu/></div> }
        
        <div className={`${styles.content} ${notHome && styles.sidebarTrue}`}>
          <header className={styles.header}>
            <div className={`${styles.headerLogo} ${isHome && styles.logoVisible}`}>
              <Logo/>
            </div>
            
            <div className={styles.controls}>
              <ThemeSwitch/>
              <button className={styles.hamburgerIcon} onClick={()=>setShowMenu(true)}>
                <List size={24} />
              </button>
            </div>
          </header>

          <div className={styles.headerHolder}>&nbsp;</div>

          <main className={styles.main}>
            {children}
            {/* {projectMode === "desktop" && <div className={styles.desktopProject}>{children}</div>}
            {projectMode === "mobile" && <div className={styles.mobileProject}>{children}</div>}
            {projectMode == null && <div className={styles.desktopProject}>{children}</div>} */}
          </main>
          
          <footer className={styles.footer}>
            <p>
              <a target="_blank" href="https://github.com/fsk1997/interface">
                Visit the Github Repo
              </a>
            </p>
          </footer>
        </div>

        {showMenu && 
          <div className={styles.dialogMenu}>
            <Menu/>
            <button className={styles.XIcon} onClick={()=>setShowMenu(false)}>
              <X size={24} />
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default Layout;
