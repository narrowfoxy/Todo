export const modalVariants = {
  backgroundOpenAnimate: {
    background: "rgba(218, 223, 225, 0.5)",
    zIndex: 99,
    transition: {
      duration: 1,
    },
  },
  backgroundExitAnimate: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
  componentOpenInitial: {
    y: -100,
  },
  componentOpenAnimate: {
    y: 120,
  },
  componentExitAnimate: {
    y: -100,
    transition: {
        duration: 0.3,
      },
  }
};
