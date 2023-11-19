function createDOMCache() {
  const $container = document.querySelector("[data-container]");
  const $box = document.querySelector("[data-box]");
  return { $container, $box };
}

const cachedDOM = createDOMCache();

function createRotateController() {
  let dragging = false;
  let delta = {};

  function initDragRotate(e) {
    dragging = true;
    delta = {
      x: e.pageX,
      y: e.pageY,
    };
  }

  function dragRotate(e) {
    if (!dragging) {
      return;
    }
    // THIS IS THE CALCULATION THAT HAS CHANGED
    delta.x = (e.pageX / window.innerWidth) * 360; // - delta.x;
    delta.y = (e.pageY / window.innerHeight) * 360; // - delta.y;

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
