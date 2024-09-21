import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import SidebarButton from "./SidebarButton";
import LogoLarge from "/src/assets/images/logo-large.svg?react";
import NavOverviewIcon from "/src/assets/images/icon-nav-overview.svg?react";
import NavBudgetsIcon from "/src/assets/images/icon-nav-budgets.svg?react";
import NavPotsIcon from "/src/assets/images/icon-nav-pots.svg?react";
import NavBillsIcon from "/src/assets/images/icon-nav-recurring-bills.svg?react";
import NavTransactionsIcon from "/src/assets/images/icon-nav-transactions.svg?react";
import NavMinimizeIcon from "/src/assets/images/icon-minimize-menu.svg?react";

const Navigation = () => {
  return (
    <div id={styles.sidebar}>
      <div className={styles.sidebarContentContainer}>
        <div className={styles.sidebarLogo}>
          <LogoLarge />
        </div>
        <nav>
          <NavLink to={"overview"}>
            {({ isActive }) => (
              <SidebarButton
                label="Overview"
                icon={<NavOverviewIcon />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"budgets"}>
            {({ isActive }) => (
              <SidebarButton
                label="Budgets"
                icon={<NavBudgetsIcon />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"pots"}>
            {({ isActive }) => (
              <SidebarButton
                label="Pots"
                icon={<NavPotsIcon />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"bills"}>
            {({ isActive }) => (
              <SidebarButton
                label="Bills"
                icon={<NavBillsIcon />}
                active={isActive}
              />
            )}
          </NavLink>
          <NavLink to={"transactions"}>
            {({ isActive }) => (
              <SidebarButton
                label="Transactions"
                icon={<NavTransactionsIcon />}
                active={isActive}
              />
            )}
          </NavLink>
        </nav>
      </div>

      <SidebarButton label="Minimize Menu" icon={<NavMinimizeIcon />} />
    </div>
  );
};

export default Navigation;
