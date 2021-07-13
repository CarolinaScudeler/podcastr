import playing from "../../../public/playing.svg";
import shuffle from "../../../public/shuffle.svg";
import playPrevious from "../../../public/play-previous.svg";
import play from "../../../public/play.svg";
import playNext from "../../../public/play-next.svg";
import repeat from "../../../public/repeat.svg";
import Image from "next/image";
import styles from "./styles.module.scss";

export function Player() {
  return (
    <div className={styles.playerContainer}>
      <header>
        <Image src={playing} alt="Tocando agora" width="1px" height="1px" />
        <strong>Tocando agora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <Image src={shuffle} alt="Embaralhar" width="24px" height="24px" />
          </button>
          <button type="button">
            <Image
              src={playPrevious}
              alt="Tocar anterior"
              width="24px"
              height="24px"
            />
          </button>
          <button type="button" className={styles.playButton}>
            <Image src={play} alt="Tocar" width="40px" height="40px" />
          </button>
          <button type="button">
            <Image
              src={playNext}
              alt="Tocar próxima"
              width="24px"
              height="24px"
            />
          </button>
          <button type="button">
            <Image src={repeat} alt="Repetir" width="24px" height="24px" />
          </button>
        </div>
      </footer>
    </div>
  );
}
