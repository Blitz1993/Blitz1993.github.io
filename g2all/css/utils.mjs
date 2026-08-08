export const logger = {
  verbose: false,
  enabled: false,

  init() {
    this.console = document.getElementById("console");
  },
  info(msg) {
    if (this.enabled) this.log(`[+] ${msg}`);
  },
  error(msg) {
    if (this.enabled) this.log(`[-] ${msg}`);
  },
  debug(msg) {
    if (this.enabled && this.verbose) {
      this.log(`[*] ${msg}`);
    }
  },
  log(msg) {
    if (!this.enabled || !this.console) return;
    this.console.append(`${msg}\n`);
  },
};

export const version = {
  console: undefined,
  major: undefined,
  minor: undefined,
  init() {
    const ua = navigator.userAgent;

    const matches = ua.match(/PlayStation\s+(\d+)\/(\d+)\.(\d+)/);
    if (matches === null) {
      throw new Error(`${ua} not supported !!`);
    }

    this.console = parseInt(matches[1], 10);
    this.major = parseInt(matches[2], 10);
    this.minor = parseInt(matches[3], 16);
  },
  toString() {
    return `${this.major}.${this.minor.toString(16).padStart(2, "0")}`;
  },
};
