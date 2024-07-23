const SLIDE_OUT_BACK_LEFT = [
    { transform: 'translateX(0)' },
    { transform: 'translate(-100vw)' },
];
const SLIDE_OUT_BACK_RIGHT = [
    { transform: 'translateX(0)' },
    { transform: 'translate(100vw)' },
];
const FORWARD_ANIMATION_OPTS = {
    duration: 500,
    easing: 'ease-in-out',
    iterations: 1,
};
const REVERSE_ANIMATION_OPTS = {
    ...FORWARD_ANIMATION_OPTS,
    direction: 'reverse',
};
export const SLIDE_LEFT_OUT = [
    SLIDE_OUT_BACK_LEFT,
    FORWARD_ANIMATION_OPTS,
];
export const SLIDE_RIGHT_OUT = [
    SLIDE_OUT_BACK_RIGHT,
    FORWARD_ANIMATION_OPTS,
];
export const SLIDE_LEFT_IN = [
    SLIDE_OUT_BACK_LEFT,
    REVERSE_ANIMATION_OPTS,
];
export const SLIDE_RIGHT_IN = [
    SLIDE_OUT_BACK_RIGHT,
    REVERSE_ANIMATION_OPTS,
];
//# sourceMappingURL=constants.js.map