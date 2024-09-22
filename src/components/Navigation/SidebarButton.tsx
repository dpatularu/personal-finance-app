import styles from "./SidebarButton.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  icon: any;
  label?: string;
  active?: boolean;
  expanded?: boolean;
}

const SidebarButton = ({
  icon,
  label,
  active = false,
  expanded = true,
  ...rest
}: Props) => {
  const activeClass = active ? styles.active : "";
  const expandedClass = expanded ? styles.expanded : "";
  return (
    <div className={`${styles.sidebarBtn} ${activeClass}`} {...rest}>
      <div className={`${styles.sidebarBtnIcon} ${expandedClass}`}>{icon}</div>
      <p className={`${expandedClass}`}> {label}</p>
    </div>
  );
};

export default SidebarButton;
