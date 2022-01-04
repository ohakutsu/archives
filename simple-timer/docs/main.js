class CustomNotification {
  title;
  body;
  silent;

  constructor({ title, body = null, silent = false }) {
    this.title = title;
    this.body = body;
    this.silent = silent;
  }

  send() {
    const options = {
      body: this.body,
      silent: this.silent,
    };
    new Notification(this.title, options);
  }
}

class Timer extends EventTarget {
  seconds;

  // private
  #interval;

  constructor({ seconds }) {
    super();

    this.seconds = seconds;
    this.#interval = null;
  }

  start() {
    if (this.#interval !== null) return;

    this.#interval = setInterval(() => {
      this.#setSeconds(this.seconds - 1);

      if (this.seconds === 0) {
        this.dispatchEvent(new CustomEvent("timeup"), {});
      }
    }, 1000);
  }

  stop() {
    if (this.#interval === null) return;

    clearInterval(this.#interval);
    this.#interval = null;
  }

  reset() {
    this.stop();
    this.#setSeconds(0);
  }

  // private
  #setSeconds(seconds) {
    this.seconds = seconds;

    this.dispatchEvent(
      new CustomEvent("changeSeconds", {
        detail: {
          seconds,
        },
      })
    );
  }
}

const isNotifiable = async () => {
  if ("Notification" in window) {
    switch (Notification.permission) {
      case "granted":
        return true;
      case "denied":
        return false;
      default:
        const permission = await Notification.requestPermission();
        return permission === "granted" ? true : false;
    }
  }
};

let timer = null;
let notification = null;

document.addEventListener("DOMContentLoaded", () => {
  isNotifiable().then((result) => {
    if (result) {
      notification = new CustomNotification({
        title: "TIME UP!",
        body: "指定時間が経過しました",
      });
    }
  });

  const inputElement = document.getElementById("minutes");
  const timerElement = document.getElementById("timer");

  const handleTimeup = () => {
    if (notification) {
      notification.send();
    } else {
      window.alert("TIME UP!");
    }
  };
  const handleCountdown = (seconds) => {
    const timerText = `${parseInt(seconds / 60)}:${(
      "00" +
      (Math.abs(seconds) % 60)
    ).slice(-2)}`;

    timerElement.textContent = timerText;
  };

  document.getElementById("start").addEventListener("click", () => {
    if (timer === null) {
      const minutesStr = inputElement.value;
      const seconds = Math.floor(parseFloat(minutesStr) * 60);

      timer = new Timer({
        seconds,
      });

      timer.addEventListener("timeup", handleTimeup);
      timer.addEventListener("changeSeconds", (event) => {
        handleCountdown(event.detail.seconds);
      });
    }

    timer.start();
  });

  document.getElementById("stop").addEventListener("click", () => {
    if (timer === null) return;

    timer.stop();
  });

  document.getElementById("reset").addEventListener("click", () => {
    if (timer === null) return;

    timer.reset();
    timer.removeEventListener("timeup", handleTimeup);
    timer.removeEventListener("changeSeconds", handleCountdown);
    timer = null;
  });
});
