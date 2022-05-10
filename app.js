const state = {
  "lang": "en",
  "isShift": false,
  "isCaps": false
}

if (localStorage.getItem('lang')) {
  state.lang = localStorage.getItem('lang');
}

const setState = (key, value) => {
  state[key] = value;
  updateButtons();
}

const buttons = {
  "Backquote": {
    "isSystem": false,
    "en": {
      "defaultValue": "`",
      "shiftValue": "~"
    },
    "ru": {
      "defaultValue": "ё",
      "shiftValue": "Ё"
    }
  },
  "Digit1": {
    "isSystem": false,
    "en": {
      "defaultValue": "1",
      "shiftValue": "!"
    },
    "ru": {
      "defaultValue": "1",
      "shiftValue": "!"
    }
  },
  "Digit2": {
    "isSystem": false,
    "en": {
      "defaultValue": "2",
      "shiftValue": "@"
    },
    "ru": {
      "defaultValue": "2",
      "shiftValue": '"'
    }
  },
  "Digit3": {
    "isSystem": false,
    "en": {
      "defaultValue": "3",
      "shiftValue": "#"
    },
    "ru": {
      "defaultValue": "3",
      "shiftValue": '№'
    }
  },
  "Digit4": {
    "isSystem": false,
    "en": {
      "defaultValue": "4",
      "shiftValue": "$"
    },
    "ru": {
      "defaultValue": "4",
      "shiftValue": ';'
    }
  },
  "Digit5": {
    "isSystem": false,
    "en": {
      "defaultValue": "5",
      "shiftValue": "%"
    },
    "ru": {
      "defaultValue": "5",
      "shiftValue": '%'
    }
  },
  "Digit6": {
    "isSystem": false,
    "en": {
      "defaultValue": "6",
      "shiftValue": "^"
    },
    "ru": {
      "defaultValue": "6",
      "shiftValue": ':'
    }
  },
  "Digit7": {
    "isSystem": false,
    "en": {
      "defaultValue": "7",
      "shiftValue": "&"
    },
    "ru": {
      "defaultValue": "7",
      "shiftValue": '?'
    }
  },
  "Digit8": {
    "isSystem": false,
    "en": {
      "defaultValue": "8",
      "shiftValue": "*"
    },
    "ru": {
      "defaultValue": "8",
      "shiftValue": '*'
    }
  },
  "Digit9": {
    "isSystem": false,
    "en": {
      "defaultValue": "9",
      "shiftValue": "("
    },
    "ru": {
      "defaultValue": "9",
      "shiftValue": '('
    }
  },
  "Digit0": {
    "isSystem": false,
    "en": {
      "defaultValue": "0",
      "shiftValue": ")"
    },
    "ru": {
      "defaultValue": "0",
      "shiftValue": ')'
    }
  },
  "NumpadSubstract": {
    "isSystem": false,
    "en": {
      "defaultValue": "-",
      "shiftValue": "_"
    },
    "ru": {
      "defaultValue": "-",
      "shiftValue": '_'
    }
  },
  "Equal": {
    "isSystem": false,
    "en": {
      "defaultValue": "=",
      "shiftValue": "+"
    },
    "ru": {
      "defaultValue": "=",
      "shiftValue": '+'
    }
  },
  "Backspace": {
    "isSystem": true,
    "systemValue": "Backspace",
    "action": () => {
      updateValue("", false);
    }
  },
  "Tab": {
    "isSystem": true,
    "systemValue": "Tab",
    "action": () => {
      updateValue("\t", true);
    }
  },
  "KeyQ": {
    "isSystem": false,
    "en": {
      "defaultValue": "q",
      "shiftValue": "Q"
    },
    "ru": {
      "defaultValue": "й",
      "shiftValue": 'Й'
    }
  },
  "KeyW": {
    "isSystem": false,
    "en": {
      "defaultValue": "w",
      "shiftValue": "W"
    },
    "ru": {
      "defaultValue": "ц",
      "shiftValue": 'Ц'
    }
  },
  "KeyE": {
    "isSystem": false,
    "en": {
      "defaultValue": "e",
      "shiftValue": "E"
    },
    "ru": {
      "defaultValue": "у",
      "shiftValue": 'У'
    }
  },
  "KeyR": {
    "isSystem": false,
    "en": {
      "defaultValue": "r",
      "shiftValue": "R"
    },
    "ru": {
      "defaultValue": "к",
      "shiftValue": 'К'
    }
  },
  "KeyT": {
    "isSystem": false,
    "en": {
      "defaultValue": "t",
      "shiftValue": "T"
    },
    "ru": {
      "defaultValue": "е",
      "shiftValue": 'Е'
    }
  },
  "KeyY": {
    "isSystem": false,
    "en": {
      "defaultValue": "y",
      "shiftValue": "Y"
    },
    "ru": {
      "defaultValue": "н",
      "shiftValue": 'Н'
    }
  },
  "KeyU": {
    "isSystem": false,
    "en": {
      "defaultValue": "u",
      "shiftValue": "U"
    },
    "ru": {
      "defaultValue": "г",
      "shiftValue": 'Г'
    }
  },
  "KeyI": {
    "isSystem": false,
    "en": {
      "defaultValue": "i",
      "shiftValue": "I"
    },
    "ru": {
      "defaultValue": "ш",
      "shiftValue": 'Ш'
    }
  },
  "KeyO": {
    "isSystem": false,
    "en": {
      "defaultValue": "o",
      "shiftValue": "O"
    },
    "ru": {
      "defaultValue": "щ",
      "shiftValue": 'Щ'
    }
  },
  "KeyP": {
    "isSystem": false,
    "en": {
      "defaultValue": "p",
      "shiftValue": "P"
    },
    "ru": {
      "defaultValue": "з",
      "shiftValue": 'З'
    }
  },
  "BracketLeft": {
    "isSystem": false,
    "en": {
      "defaultValue": "[",
      "shiftValue": "{"
    },
    "ru": {
      "defaultValue": "х",
      "shiftValue": 'Х'
    }
  },
  "BracketRight": {
    "isSystem": false,
    "en": {
      "defaultValue": "]",
      "shiftValue": "}"
    },
    "ru": {
      "defaultValue": "ъ",
      "shiftValue": 'Ъ'
    }
  },
  "Backslash": {
    "isSystem": false,
    "en": {
      "defaultValue": "\\",
      "shiftValue": "|"
    },
    "ru": {
      "defaultValue": "\\",
      "shiftValue": '|'
    }
  },
  "CapsLock": {
    "isSystem": true,
    "systemValue": "CapsLock",
    "action": () => {
      setState("isCaps", !state.isCaps);
    }
  },
  "KeyA": {
    "isSystem": false,
    "en": {
      "defaultValue": "a",
      "shiftValue": "A"
    },
    "ru": {
      "defaultValue": "ф",
      "shiftValue": 'Ф'
    }
  },
  "KeyS": {
    "isSystem": false,
    "en": {
      "defaultValue": "s",
      "shiftValue": "S"
    },
    "ru": {
      "defaultValue": "ы",
      "shiftValue": 'Ы'
    }
  },
  "KeyD": {
    "isSystem": false,
    "en": {
      "defaultValue": "d",
      "shiftValue": "D"
    },
    "ru": {
      "defaultValue": "в",
      "shiftValue": 'В'
    }
  },
  "KeyF": {
    "isSystem": false,
    "en": {
      "defaultValue": "f",
      "shiftValue": "F"
    },
    "ru": {
      "defaultValue": "а",
      "shiftValue": 'А'
    }
  },
  "KeyG": {
    "isSystem": false,
    "en": {
      "defaultValue": "g",
      "shiftValue": "G"
    },
    "ru": {
      "defaultValue": "п",
      "shiftValue": 'П'
    }
  },
  "KeyH": {
    "isSystem": false,
    "en": {
      "defaultValue": "h",
      "shiftValue": "H"
    },
    "ru": {
      "defaultValue": "р",
      "shiftValue": 'Р'
    }
  },
  "KeyJ": {
    "isSystem": false,
    "en": {
      "defaultValue": "j",
      "shiftValue": "J"
    },
    "ru": {
      "defaultValue": "о",
      "shiftValue": 'О'
    }
  },
  "KeyK": {
    "isSystem": false,
    "en": {
      "defaultValue": "k",
      "shiftValue": "K"
    },
    "ru": {
      "defaultValue": "л",
      "shiftValue": 'Л'
    }
  },
  "KeyL": {
    "isSystem": false,
    "en": {
      "defaultValue": "l",
      "shiftValue": "L"
    },
    "ru": {
      "defaultValue": "д",
      "shiftValue": 'Д'
    }
  },
  "Semicolon": {
    "isSystem": false,
    "en": {
      "defaultValue": ";",
      "shiftValue": ":"
    },
    "ru": {
      "defaultValue": "ж",
      "shiftValue": 'Ж'
    }
  },
  "Quote": {
    "isSystem": false,
    "en": {
      "defaultValue": "'",
      "shiftValue": '"'
    },
    "ru": {
      "defaultValue": "э",
      "shiftValue": 'Э'
    }
  },
  "Enter": {
    "isSystem": true,
    "systemValue": "Enter",
    "action": () => {
      updateValue("\n", true);
    }
  },
  "ShiftLeft": {
    "isSystem": true,
    "systemValue": "Shift",
    "action": () => {
      setState("isShift", true);
    },
    "disable": () => {
      setState("isShift", false);
    }
  },
  "KeyZ": {
    "isSystem": false,
    "en": {
      "defaultValue": "z",
      "shiftValue": "Z"
    },
    "ru": {
      "defaultValue": "я",
      "shiftValue": 'Я'
    }
  },
  "KeyX": {
    "isSystem": false,
    "en": {
      "defaultValue": "x",
      "shiftValue": "X"
    },
    "ru": {
      "defaultValue": "ч",
      "shiftValue": 'Ч'
    }
  },
  "KeyC": {
    "isSystem": false,
    "en": {
      "defaultValue": "c",
      "shiftValue": "C"
    },
    "ru": {
      "defaultValue": "с",
      "shiftValue": 'С'
    }
  },
  "KeyV": {
    "isSystem": false,
    "en": {
      "defaultValue": "v",
      "shiftValue": "V"
    },
    "ru": {
      "defaultValue": "м",
      "shiftValue": 'М'
    }
  },
  "KeyB": {
    "isSystem": false,
    "en": {
      "defaultValue": "b",
      "shiftValue": "B"
    },
    "ru": {
      "defaultValue": "и",
      "shiftValue": 'И'
    }
  },
  "KeyN": {
    "isSystem": false,
    "en": {
      "defaultValue": "n",
      "shiftValue": "N"
    },
    "ru": {
      "defaultValue": "т",
      "shiftValue": 'Т'
    }
  },
  "KeyM": {
    "isSystem": false,
    "en": {
      "defaultValue": "m",
      "shiftValue": "M"
    },
    "ru": {
      "defaultValue": "ь",
      "shiftValue": 'Ь'
    }
  },
  "NumpadDemical": {
    "isSystem": false,
    "en": {
      "defaultValue": ",",
      "shiftValue": "<"
    },
    "ru": {
      "defaultValue": "б",
      "shiftValue": 'Б'
    }
  },
  "Period": {
    "isSystem": false,
    "en": {
      "defaultValue": ".",
      "shiftValue": ">"
    },
    "ru": {
      "defaultValue": "ю",
      "shiftValue": 'Ю'
    }
  },
  "Slash": {
    "isSystem": false,
    "en": {
      "defaultValue": "/",
      "shiftValue": "?"
    },
    "ru": {
      "defaultValue": "/",
      "shiftValue": '?'
    }
  },
  "ArrowUp": {
    "isSystem": false,
    "en": {
      "defaultValue": "\u2191",
      "shiftValue": "\u2191"
    },
    "ru": {
      "defaultValue": "\u2191",
      "shiftValue": '\u2191'
    }
  },

  "ShiftRight": {
    "isSystem": true,
    "systemValue": "Shift",
    "action": () => {
      setState("isShift", true);
    },
    "disable": () => {
      setState("isShift", false);
    }
  },
  "ControlLeft": {
    "isSystem": true,
    "systemValue": "Ctrl",
    "action": () => {
      console.log("ControlLeft");
    }
  },
  "MetaLeft": {
    "isSystem": true,
    "systemValue": "Win",
    // "action": () => {
    //   console.log("ControlLeft");
    // }
  },
  "AltLeft": {
    "isSystem": true,
    "systemValue": "Alt",
    // "action": () => {
    //   console.log("ControlLeft");
    // }
  },
  "Space": {
    "isSystem": true,
    "systemValue": "",
    // "action": () => {
    //   console.log("ControlLeft");
    // }
  },
  "ArrowLeft": {
    "isSystem": false,
    "en": {
      "defaultValue": "\u2190",
      "shiftValue": "\u2190"
    },
    "ru": {
      "defaultValue": "\u2190",
      "shiftValue": '\u2190'
    }
  },
  "ArrowDown": {
    "isSystem": false,
    "en": {
      "defaultValue": "\u2193",
      "shiftValue": "\u2193"
    },
    "ru": {
      "defaultValue": "\u2193",
      "shiftValue": '\u2193'
    }
  },
  "ArrowRight": {
    "isSystem": false,
    "en": {
      "defaultValue": "\u2192",
      "shiftValue": "\u2192"
    },
    "ru": {
      "defaultValue": "\u2192",
      "shiftValue": '\u2192'
    }
  },
  "ControlRight": {
    "isSystem": true,
    "systemValue": "Ctrl",
    // "action": () => {
    //   console.log("ControlLeft");
    // }
  },

};

const textarea = document.createElement('textarea');
const keyboard = document.createElement('div');
const textNode = document.createElement('p');


const createTextara = () => {
  textarea.classList.add('textarea');
  document.body.appendChild(textarea);
}

const createKeyboard = () => {
  keyboard.classList.add('keyboard');
  document.body.appendChild(keyboard);

  createButtons();
}

const createMark = () => {
  textNode.innerHTML = 'Комбинация для смены языка Ctrl + Shift';
  textNode.classList.add('mark');
  document.body.appendChild(textNode);
}

const createButtons = () => {
  keyboard.innerHTML = '';
  Object.keys(buttons).forEach(key => {
    const button = buttons[key];
    const value = button.isSystem ? button.systemValue : button[state.lang][state.isShift ? "shiftValue" : "defaultValue"];

    const buttonEl = document.createElement('div');
    buttonEl.classList.add("button", key, button.systemValue ? "system" : "symbol");
    buttonEl.innerText = value;

    buttonEl.addEventListener('mousedown', (e) => {
      e.preventDefault();
      textarea.focus();

      buttonEl.classList.add('active');
      if (button.isSystem) {
        button.action();
      } else {
        updateValue(e.currentTarget.innerText, true);
      }
    });

    buttonEl.addEventListener('mouseup', (e) => {
      buttonEl.classList.remove('active');

      if (button.disable) {
        button.disable()
      }
    });

    keyboard.appendChild(buttonEl);
  });
}

// переделать обновление кнопок
const updateButtons = () => {
  Object.keys(buttons).forEach(key => {
    const button = buttons[key];
    const value = button.isSystem ? button.systemValue : button[state.lang][state.isShift ? "shiftValue" : "defaultValue"];

    const buttonEl = keyboard.querySelector(`.${key}`);
    buttonEl.innerText = state.isCaps && !
    button.isSystem ? value.toUpperCase() : value;
  });
};

const changeLanguage = () => {
  const newLang = state.lang === "ru" ? "en" : "ru";
  localStorage.setItem('lang', newLang);
  setState("lang", newLang);
}

const updateValue = (newValue, isReplace) => {
  const isSelection = textarea.selectionStart !== textarea.selectionEnd;
  const cursorDiff = isSelection || isReplace ? 0 : 1;
  textarea.setRangeText(newValue, textarea.selectionStart - cursorDiff, textarea.selectionEnd, "end");
}

const pressed = new Set();

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  textarea.focus();

  const button = keyboard.querySelector(`.${e.code}`);
  button.dispatchEvent(new MouseEvent('mousedown'));
  //console.log(e.code);

  if (e.code === "ControlLeft" || e.code === "ShiftLeft") {
    pressed.add(e.code);
  }
});

document.addEventListener('keyup', (e) => {
  e.preventDefault();
  const button = keyboard.querySelector(`.${e.code}`);
  button.dispatchEvent(new MouseEvent('mouseup'));

  if (pressed.size === 2) {
    changeLanguage();
  }
  pressed.clear();
});

createTextara();
createKeyboard();
createMark();