import playing from "../../../public/playing.svg";
import shuffle from "../../../public/shuffle.svg";
import playPrevious from "../../../public/play-previous.svg";
import play from "../../../public/play.svg";
import pause from "../../../public/pause.svg";
import playNext from "../../../public/play-next.svg";
import repeat from "../../../public/repeat.svg";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useContext, useRef, useEffect } from "react";
import Slider from "rc-slider";

import "rc-slider/assets/index.css";

import { PlayerContext } from "../../contexts/PlayerContext";

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
  } = useContext(PlayerContext);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex];

  return (
    <div className={styles.playerContainer}>
      <header>
        <Image src={playing} alt="Tocando agora" width="32px" height="32px" />
        <strong>Tocando agora</strong>
      </header>

      {episode ? (
        <div className={styles.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={styles.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? styles.empty : ""}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slider}>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: "#04d361" }}
                railStyle={{ backgroundColor: "#9f75ff" }}
                handleStyle={{ borderColor: "#04d361", borderWidth: 4 }}
              />
            ) : (
              <div className={styles.emptySlider} />
            )}
          </div>
          <span>00:00</span>
        </div>

        {episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className={styles.buttons}>
          <button type="button" disabled={!episode}>
            <Image src={shuffle} alt="Embaralhar" width="24px" height="24px" />
          </button>
          <button type="button" disabled={!episode}>
            <Image
              src={playPrevious}
              alt="Tocar anterior"
              width="24px"
              height="24px"
            />
          </button>
          <button
            type="button"
            className={styles.playButton}
            disabled={!episode}
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Image src={pause} alt="Tocar" width="20px" height="20px" />
            ) : (
              <Image src={play} alt="Tocar" width="40px" height="40px" />
            )}
          </button>
          <button type="button" disabled={!episode}>
            <Image
              src={playNext}
              alt="Tocar próxima"
              width="24px"
              height="24px"
            />
          </button>
          <button type="button" disabled={!episode}>
            <Image src={repeat} alt="Repetir" width="24px" height="24px" />
          </button>
        </div>
      </footer>
    </div>
  );
}
