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
  const x = rootStyles.getPropertyValue("--initialRotateX");
  const y = rootStyles.getPropertyValue("--initialRotateY");
  return { x, y };
}

function createRotateController() {
  let dragging = false;
  let initialPosition = {};
  const initialRotation = getInitialBoxRotation();

  function initDragRotate(e) {
    dragging = true;
    initialPosition = {
      x: e.pageX,
      y: e.pageY,
    };
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

    let rotateParam = "";
    rotateParam += ` rotateY(${delta.x}deg)`;
    rotateParam += ` rotateX(${delta.y}deg)`;
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
