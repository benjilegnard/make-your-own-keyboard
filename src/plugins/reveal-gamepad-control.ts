/** reveal instance will be here. */
let Reveal;

interface GamepadState {
  axes: number[];
  buttons: GamepadButton[];
}

/** Used to store previous state of the gamepads. */
const gamepads: Record<string, GamepadState> = {};

/** To avoid sliding */
let debouncing: boolean = false;

let opts!: GamepadOptions;

function gamepadConnected(event: GamepadEvent) {
  console.log("A gamepad connected:");
  console.log(event.gamepad);
  updateGamepad(event.gamepad);
}

function gamepadDisconnected(event: GamepadEvent) {
  console.log("A gamepad disconnected:");
  console.log(event.gamepad);
  gamepads[event.gamepad.id] = undefined;
}

function updateGamepad(gamepad: Gamepad) {
  gamepads[gamepad.id] = {
    axes: [...gamepad.axes],
    buttons: [...gamepad.buttons],
  };
}

function debounce() {
  debouncing = true;
  setTimeout(() => {
    debouncing = false;
  }, 500);
}

function animationFrameHandler(): void {
  const newGamepads = navigator.getGamepads();
  if (debouncing) {
    requestAnimationFrame(animationFrameHandler);
    return;
  }
  newGamepads.forEach((gamepad, _index) => {
	if (!gamepad || !gamepad.axes.length) return;
    const xAxisChange = gamepad.axes[0] !== gamepads[gamepad.id]?.axes[0];
    const yAxisChange = gamepad.axes[1] !== gamepads[gamepad.id]?.axes[1];
    const xAxis = gamepad.axes[0];
    const yAxis = gamepad.axes[1];
    //console.log({...gamepad.buttons})
    if (xAxisChange && xAxis > opts.threshold) {
      console.log("RIGHT");
      Reveal.right();
      debounce();
    }

    if (xAxisChange && xAxis < -opts.threshold) {
      console.log("LEFT");
      Reveal.left();
      debounce();
    }

    if (yAxisChange && yAxis > opts.threshold) {
      console.log("DOWN");
      Reveal.down();
      debounce();
    }

    if (yAxisChange && yAxis < -opts.threshold) {
      console.log("UP");
      Reveal.up();
      debounce();
    }
    updateGamepad(gamepad);
  });
  requestAnimationFrame(animationFrameHandler);
}

export interface GamepadOptions {
  /** Value between 0.5 and 1 where we consider a direction change */
  threshold: number;
  /** Milliseconds value to wait before changing to another slide */
  debounce: number;
}

const defaultOptions = { threshold: 0.85, debounce: 300 };

export const Gamepad = (options: GamepadOptions = defaultOptions) => ({
  id: "gamepad",
  init: (reveal) => {
    opts = options;
    //Reveal = reveal;
    window.addEventListener("gamepadconnected", gamepadConnected);
    window.addEventListener("gamepaddisconnected", gamepadDisconnected);
    if (window.requestAnimationFrame) {
      requestAnimationFrame(animationFrameHandler);
    }
    return Promise.resolve();
  },
  destroy: () => {
    window.removeEventListener("gamepadconnected", gamepadConnected);
    window.removeEventListener("gamepaddisconnected", gamepadDisconnected);
    return Promise.resolve();
  },
});

export default Gamepad;
