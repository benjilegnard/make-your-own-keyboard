
const NUMBER_OF_POINTS = 192;
const SPEED = 2;
const CIRCLE_RADIUS = 3;
const MAX_DISTANCE = 150;

/* main particle structure */
interface Point {
  /* position */
  p: {
    x: number;
    y: number;
  };
  /* velocity */
  v: {
    x: number;
    y: number
  }
}

const canvas = document.getElementById("particles-background") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;
let canvasWidth: number, canvasHeight: number;
const points: Point[] = [];


const distance = (first: Point, last: Point) => {
  const x = first.p.x - last.p.x;
  const y = first.p.y - last.p.y;
  return Math.hypot(x, y);
}

const resize = () => {
  const { innerWidth, innerHeight } = window;
  canvasWidth = innerWidth;
  canvasHeight = innerHeight;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}

const move = () => {
  points.forEach((point: Point) => {
    movePoint(point);
    detectCollisions(point);
  });
}

const movePoint = (point: Point) => {
  point.p.x += point.v.x * SPEED;
  point.p.y += point.v.y * SPEED;
}

const draw = () => {
  // reset canvas on each frame
  context.clearRect(0, 0, canvasWidth, canvasHeight);

  points.forEach((point: Point) => {
    drawPoint(point);
    points
      .filter(currentPoint => distance(point, currentPoint) < MAX_DISTANCE)
      .forEach(destinationPoint => {
        const destDistance = distance(point, destinationPoint);
        if (destDistance < MAX_DISTANCE) {
          drawLine(
            point,
            destinationPoint,
            (MAX_DISTANCE - destDistance) / MAX_DISTANCE,
          );
        }
      });
  });
}

const drawPoint = (point: Point) => {
  context.beginPath();
  context.arc(point.p.x, point.p.y, CIRCLE_RADIUS, 0, 2 * Math.PI);
  context.fillStyle = 'black';
  context.fill();
}

const drawLine = (firstPoint: Point, lastPoint: Point, opacity: number) => {
  context.strokeStyle = `rgba(0,0,0,${opacity})`;
  context.lineWidth = 1.0;
  context.beginPath();
  context.moveTo(firstPoint.p.x, firstPoint.p.y);
  context.lineTo(lastPoint.p.x, lastPoint.p.y);
  context.stroke();
}

/**
 * Change direction of a point when they reach screen limits
 */
const detectCollisions = (point: Point) => {
  if (point.p.x < 0 || point.p.x > canvasWidth) {
    point.v.x = -point.v.x;
  }
  if (point.p.y < 0 || point.p.y > canvasHeight) {
    point.v.y = -point.v.y;
  }
}

const generateRandomPoints = (): Point[] => {
  const points: Point[] = [];
  for (let i = 0; i <= NUMBER_OF_POINTS; i += 2) {
    const x = Math.floor(Math.random() * canvasWidth);
    const y = Math.floor(Math.random() * canvasHeight);
    points.push({
      p: {
        x,
        y
      },
      // direction
      v: {
        x: Math.random() * 2 - 1,
        y: Math.random() * 2 - 1,
      },
    });
  }
  return points;
}

const animate = () => {
  move();
  draw();
  requestAnimationFrame(animate);
}

window.addEventListener("resize", resize);
// init all
resize();
points.push(...generateRandomPoints());
requestAnimationFrame(animate);

