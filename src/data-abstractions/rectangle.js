const makeDecartPoint = (x, y) => ({ x, y });
const getX = (point) => point.x;
const getY = (point) => point.y;

const makeRectangle = (topLeftPnt, width, height) => {
  const topLeftPoint = topLeftPnt;
  const bottomLeftPoint = makeDecartPoint(getX(topLeftPoint), getY(topLeftPoint) - height);
  const topRightPoint = makeDecartPoint(getX(topLeftPoint) + width, getY(topLeftPoint));
  const bottomRightPoint = makeDecartPoint(getX(bottomLeftPoint) + width, getY(bottomLeftPoint));

  return {
    topLeftPoint,
    bottomLeftPoint,
    topRightPoint,
    bottomRightPoint,
    width,
    height,
  };
};

const topLeftP = makeDecartPoint(-5, 5);

const rect = makeRectangle(topLeftP, 10, 10);

console.log(rect);

const getStartPoint = (rect) => rect.topLeftPoint;
const getWidth = (rect) => rect.width;
const getHeight = (rect) => rect.height;
const getTopLeftPoint = (rect) => rect.topLeftPoint;
const getTopRightPoint = (rect) => rect.topRightPoint;
const getBottomLeftPoint = (rect) => rect.bottomLeftPoint;
const getBottomRightPoint = (rect) => rect.bottomRightPoint;

console.log(getStartPoint(rect));
console.log(getWidth(rect));
console.log(getHeight(rect));
console.log(getTopLeftPoint(rect));
console.log(getTopRightPoint(rect));
console.log(getBottomLeftPoint(rect));
console.log(getBottomRightPoint(rect));

const isInTopLeftQuadrant = (point) => {
  return getX(point) < 0 && getY(point) > 0;
};

const isInBottomLeftQuadrant = (point) => {
  return getX(point) < 0 && getY(point) < 0;
};

const isInTopRightQuadrant = (point) => {
  return getX(point) > 0 && getY(point) > 0;
};

const isInBottomRightQuadrant = (point) => {
  return getX(point) > 0 && getY(point) < 0;
};

const containsOrigin = (rect) => {
  return isInTopLeftQuadrant(getTopLeftPoint(rect))
    && isInBottomRightQuadrant(getBottomRightPoint(rect));
};

console.log(containsOrigin(rect));
