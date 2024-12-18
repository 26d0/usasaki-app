// constants.js
export const PATTERNS = Object.freeze([
    "うさささ",
    "うささき",
    "うさきさ",
    "うさきき",
    "うきささ",
    "うきさき",
    "うききさ",
    "うききき"
]);

export const ANIMATION_DURATION = 300;

export const CONFETTI_CONFIG = {
    main: {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    },
    left: {
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
    },
    right: {
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
    }
};
