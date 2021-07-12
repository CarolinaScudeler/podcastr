import format from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

import logo from "../../../public/logo.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Image src={logo} alt="Podcastr" width="163px" height="40px" />

      <p>O melhor para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </header>
  );
}
