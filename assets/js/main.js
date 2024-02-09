const tl = gsap.timeline({
  repeat: 1,
  repeatdelay: 2,
});

tl.from(
  "#heading",
  {
    opacity: 0,
  },
  "+4"
);

tl.from("#box1", {
  opacity: 0,
  duration: 2,
  x: 500,
});

tl.from("#box2", {
  opacity: 0,
  duration: 2,
  x: 500,
});

tl.from("#box3", {
  opacity: 0,
  duration: 2,
  x: 500,
});
