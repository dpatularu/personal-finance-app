import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import images from "../../assets/Images";
import SidebarButton from "./SidebarButton";

const Navigation = () => {
  console.log(styles);
  return (
    <div id={styles.sidebar}>
      <div className={styles.sidebarContentContainer}>
        <div className={styles.sidebarLogo}>
          <img src={images.logoLarge} />
        </div>
        <nav>
          <NavLink to={"overview"}>
            {({ isActive }) => (
              <SidebarButton
                label="Overview"
                icon={
                  <svg
                    fill="currentColor"
                    height="19"
                    viewBox="0 0 18 19"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m18 8.59282v8.66718c0 .3978-.158.7794-.4393 1.0607s-.6629.4393-1.0607.4393h-3.75c-.3978 0-.7794-.158-1.0607-.4393s-.4393-.6629-.4393-1.0607v-3.75c0-.1989-.079-.3897-.2197-.5303-.1406-.1407-.3314-.2197-.5303-.2197h-3c-.19891 0-.38968.079-.53033.2197-.14065.1406-.21967.3314-.21967.5303v3.75c0 .3978-.15804.7794-.43934 1.0607s-.66284.4393-1.06066.4393h-3.75c-.39782 0-.779356-.158-1.06066-.4393-.281305-.2813-.43933998-.6629-.43933998-1.0607v-8.66718c-.00003156-.20761.04303048-.41295.12646098-.60305.08343-.1901.205412-.36081.358226-.50133l7.500003-7.07625.01031-.010313c.27613-.251125.63597-.3902803 1.00922-.3902803s.73308.1391553 1.00918.3902803c.0032.003669.0067.007114.0103.010313l7.5 7.07625c.1513.14126.2717.3123.3537.50237.082.19006.1237.39503.1226.60201z"
                      fill="currentColor"
                    />
                  </svg>
                }
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"budgets"}>
            {({ isActive }) => (
              <SidebarButton
                label="Budgets"
                icon={<img src={images.iconBudgets} />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"pots"}>
            {({ isActive }) => (
              <SidebarButton
                label="Pots"
                icon={<img src={images.iconPots} />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"bills"}>
            {({ isActive }) => (
              <SidebarButton
                label="Bills"
                icon={<img src={images.iconBills} />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"transactions"}>
            {({ isActive }) => (
              <SidebarButton
                label="Transactions"
                icon={<img src={images.iconTransactions} />}
                active={isActive}
              />
            )}
          </NavLink>
        </nav>
      </div>

      <SidebarButton
        label="Minimize Menu"
        icon={<img src={images.iconMinimizeSidebar} />}
      />
    </div>
  );
};

export default Navigation;
