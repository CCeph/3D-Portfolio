function createDOMCache() {
  const $container = document.querySelector("[data-container]");
  const $box = document.querySelector("[data-box]");
  const $root = document.querySelector(":root");
  return { $container, $box, $root };
}

const cachedDOM = createDOMCache();

function getInitialBoxRotation() {
  const rootElement = cachedDOM.$root;
  const rootStyles = getComputedStyle(rootElement);
  const xString = rootStyles.getPropertyValue("--initialRotateX");
  const yString = rootStyles.getPropertyValue("--initialRotateY");
  const x = Number(xString.slice(0, -3));
  const y = Number(yString.slice(0, -3));
  return { x, y };
}

function createRotateController() {
  let dragging = false;
  let initialPosition = {};
  let initialRotation = null;

  function initDragRotate(e) {
    dragging = true;
    initialPosition = {
      x: e.pageX,
      y: e.pageY,
    };
    initialRotation = getInitialBoxRotation();
  }

  function dragRotate(e) {
    if (!dragging) {
      return;
    }
    const currentPosition = {
      x: e.pageX,
      y: e.pageY,
    };
    const delta = {
      x: ((currentPosition.x - initialPosition.x) / window.innerWidth) * 360,
      y: ((initialPosition.y - currentPosition.y) / window.innerHeight) * 360,
    };

    const rootElement = cachedDOM.$root;
    rootElement.style.setProperty(
      "--initialRotateX",
      `${delta.y + initialRotation.x}deg`
    );
    rootElement.style.setProperty(
      "--initialRotateY",
      `${delta.x + initialRotation.y}deg`
    );

    let rotateParam = "";
    rotateParam += ` rotateX(${delta.y + initialRotation.x}deg)`;
    rotateParam += ` rotateY(${delta.x + initialRotation.y}deg)`;
    cachedDOM.$box.style.transform = rotateParam;
  }

  function endDragRotate() {
    if (!dragging) {
      return;
    }

    dragging = false;
  }

  return {
    initDragRotate,
    dragRotate,
    endDragRotate,
  };
}

const mainBoxRotateController = createRotateController();

cachedDOM.$container.addEventListener(
  "mousedown",
  mainBoxRotateController.initDragRotate
);

cachedDOM.$container.addEventListener(
  "mousemove",
  mainBoxRotateController.dragRotate
);

cachedDOM.$container.addEventListener(
  "mouseup",
  mainBoxRotateController.endDragRotate
);
