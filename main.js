/*********TAGA Studio*********/
/*********Tạo các cửa sổ*********/

// Tạo div container full màn hình và cách mỗi mép 10px
/* const container = document.createElement("div");
container.style = [
  { position: "absolute" },
  { top: "10px" },
  { left: "10px" },
  { right: "10px" },
  { bottom: "10px" },
].reduce((acc, curr) => Object.assign(acc, curr), {}); */
const container = document.createElement("div");
Object.assign(container.style, {
position: "absolute",
top: "10px",
left: "10px",
right: "10px",
bottom: "10px",
});
//container.style.border = '1px solid black';

//Tạo các offset để căn các window.. Cần tối ưu lại
const EGDE_OFFSET1 = 2;
const EGDE_OFFSET2 = 3;
const EGDE_OFFSET3 = 5;

//Tạo tab FILE
const TAB_HEIGHT = 37;

/* const FTabmenu = document.createElement("div");
FTabmenu.style.position = "absolute";
FTabmenu.style.top = "0";
FTabmenu.style.left = "0";
FTabmenu.style.width = `calc(100% - ${EGDE_OFFSET1}px`;
FTabmenu.style.height = `calc(${TAB_HEIGHT}px - ${EGDE_OFFSET2}px)`;
FTabmenu.style.border = "1px solid black"; */

const FTabmenu = document.createElement("div");  //Lưu ý rằng phương thức Object.assign() sẽ ghi đè giá trị của thuộc tính nếu cùng tên thuộc tính được gán trong cùng một object.
Object.assign(FTabmenu.style, {
  position: "absolute",
  top: "0",
  left: "0",
  width: `calc(100% - ${EGDE_OFFSET1}px)`,
  height: `calc(${TAB_HEIGHT}px - ${EGDE_OFFSET2}px)`,
  border: "1px solid black",
});

// Tạo window chính
const main_window = document.createElement("div");
Object.assign(main_window.style, {
  position: "absolute",
  top: `${TAB_HEIGHT}px`,
  left: "0",
  width: "70%",
  height: `calc(100% - ${EGDE_OFFSET1}px - ${TAB_HEIGHT}px)`,
  border: "1px solid black",
});

// Tạo window phụ 1
const sub_window01 = document.createElement("div");
Object.assign(sub_window01.style, {
  position: "absolute",
  top: `${TAB_HEIGHT}px`,
  right: "0",
  width: `calc(30% - ${EGDE_OFFSET3}px)`,
  height: `calc(50% - ${EGDE_OFFSET2}px - ${TAB_HEIGHT}px)`,
  border: "1px solid black",
});

// Tạo window phụ 2
const sub_window02 = document.createElement("div");
Object.assign(sub_window02.style, {
  position: "absolute",
  bottom: "0",
  right: "0",
  width: `calc(30% - ${EGDE_OFFSET3}px)`,
  height: `calc(50% - ${EGDE_OFFSET1}px)`,
  border: "1px solid black",
});

// Thêm các windows vào container
container.appendChild(FTabmenu);
container.appendChild(main_window);
container.appendChild(sub_window01);
container.appendChild(sub_window02);

// Thêm container vào body
document.body.appendChild(container);


/***********************Tinh chỉnh các windows***********************/
var isResizing = false;
//main_window.addEventListener('mousedown', initResize, false); //Tạm giới hạn phần điều khiển phóng to thu nhở
sub_window01.addEventListener("mousedown", initResize, false);
sub_window02.addEventListener("mousedown", initResize, false);

function initResize(e) {
  isResizing = true;
  container.addEventListener("mousemove", resize, false);
  container.addEventListener("mouseup", stopResize, false);
}

function resize(e) {
  if (isResizing) {
    main_window.style.width = `${
      e.clientX - container.offsetLeft - EGDE_OFFSET3
    }px`;
    sub_window01.style.width =
      container.offsetWidth - e.clientX + container.offsetLeft + "px";
    sub_window02.style.width =
      container.offsetWidth - e.clientX + container.offsetLeft + "px";
  }
}

function stopResize(e) {
  isResizing = false;
  container.removeEventListener("mousemove", resize, false);
  container.removeEventListener("mouseup", stopResize, false);
}

/*********************TAGA Studio*********************/
/*********Xử lý các phần tử trong của số chính********/

// Tạo diagram tool menu trong cửa sổ chính

const diagramMenuHeight = 40;

const diagramMenu = document.createElement("div");
Object.assign(diagramMenu.style, {
position: "absolute",
top: "0px",
left: "0px",
width: "100%",
height: `${diagramMenuHeight}px`,
borderBottom: "1px solid black",
});
main_window.appendChild(diagramMenu);

// Tạo tab chuyển đổi chế độ trong diagram menu: mindmap, diagram
const workModeTab = document.createElement("div");

// Tạo ô phần tử trong diagram menu
const elementSpaceing = 3;

const diagramRectElement = document.createElement("div");
Object.assign(diagramRectElement.style, {
  position: "absolute",
  top: "2px",
  left: "3px",
  width: "34px",
  height: "34px",
  border: "1px solid black",
  backgroundColor: 'black'
});
diagramMenu.appendChild(diagramRectElement);

const diagramTriangleElement = document.createElement("div");
Object.assign(diagramTriangleElement.style, {
  position: "absolute",
  top: "2px",
  left: "42px",
  width: "34px",
  height: "34px",
  border: "1px solid black",
  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
  backgroundColor: 'black'
});
diagramMenu.appendChild(diagramTriangleElement);

const diagramRhombusElement = document.createElement("div");
Object.assign(diagramRhombusElement.style, {
  position: "absolute",
  top: "2px",
  left: "79px",
  width: "34px",
  height: "34px",
  border: "1px solid black",
  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  backgroundColor: 'black'
});
diagramMenu.appendChild(diagramRhombusElement);

const diagramCircleElement = document.createElement("div");
Object.assign(diagramCircleElement.style, {
  position: "absolute",
  top: "2px",
  left: "119px",
  width: "34px",
  height: "34px",
  border: "1px solid black",
  clipPath: "circle(50% at 50% 50%)",
  backgroundColor: 'black'
});
diagramMenu.appendChild(diagramCircleElement);


// Tạo diagram work_space trong cửa sổ chính
const diagramWspace = document.createElement("div");
Object.assign(diagramWspace.style, {
position: "absolute",
bottom: "0",
left: "0",
width: "100%",
height: `calc(100% - ${diagramMenuHeight}px)`,
overflow: "scroll",
//borderTop: "1px solid black",
});
main_window.appendChild(diagramWspace);

// Tạo function vẽ với thẻ d trong svg
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//Tạo hàm di chuyển các khối hình vẽ ra bởi svg

function moving(obj, svg) {
  let isDragging = false;
  let previousX = 0;
  let previousY = 0;

  function handleMouseDown(event) {
    isDragging = true;
    previousX = event.clientX;
    previousY = event.clientY;
    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      requestAnimationFrame(() => {
        const deltaX = event.clientX - previousX;
        const deltaY = event.clientY - previousY;
        const parentElement = obj.parentElement;
        const x = parentElement.getAttribute("x") ?? 0;
        const y = parentElement.getAttribute("y") ?? 0;
        // const translateX = Number.parseFloat(transform ? transform.match(/translate\(([^)]+)\)/)[1].split(',')[0] : 0);
        // const translateY = Number.parseFloat(transform ? transform.match(/translate\(([^)]+)\)/)[1].split(',')[1] : 0);
        parentElement.setAttributeNS(null, "x", `${Number.parseInt(x) + deltaX}`);
        parentElement.setAttributeNS(null, "y", `${Number.parseInt(y) + deltaY}`);
        previousX = event.clientX;
        previousY = event.clientY;
        // const x = translateX + deltaX;
        // const y = translateY + deltaY;
      });
    }
  }

  function handleMouseUp() {
    isDragging = false;
    svg.removeEventListener("mousemove", handleMouseMove);
    svg.removeEventListener("mouseup", handleMouseUp);
  }

  obj.addEventListener("mousedown", handleMouseDown);
  
}
diagramRectElement.addEventListener('click', () => eventHandler('square'));
diagramTriangleElement.addEventListener('click', () => eventHandler('triangle'));
diagramRhombusElement.addEventListener('click', () => eventHandler('rhombus'));
diagramCircleElement.addEventListener('click', () => eventHandler('circle'));

const DEFAULT_X = 5;
const DEFAULT_Y = 5;


function eventHandler(type) {
  createElement(DEFAULT_X, DEFAULT_Y, 50, 50, 0, '#fff', 1, 'black', type);
}
var counter = 0;
window.uniqueId = function(){
  return 'element-' + counter++;
}

function createElement(x, y, width, height = null, borderRadius, fill, strokeWidth, stroke, type) {
  let element = null;
  const id = uniqueId();
  if (type === 'circle') {
    element = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    element.setAttributeNS(null, "cx", `${x + width / 2}`);
    element.setAttributeNS(null, "cy", `${y + width / 2}`);
    element.setAttributeNS(null, "r", width / 2);
  }
  else {
    element = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    if (type === 'triangle') {
      element.setAttributeNS(null, "points", `${x + (width / 2)} ${y},${x} ${y + width},${x + width} ${y + width}`);
    } else if (type === 'rhombus') {
      element.setAttributeNS(null, "points", `${x + (width / 2)} ${y},${x + width} ${y + (width / 2)},${x + (width / 2)} ${y + width},${x} ${y + (width / 2)}`);
    } else if (type === 'square') {
      element.setAttributeNS(null, "points", `${x} ${y},${x + width} ${y},${x + width} ${y + height},${x} ${y + height}`);
      element.setAttributeNS(null, "width", '100%');
      element.setAttributeNS(null, "height", '100%');
    }
  }
  element.setAttributeNS(null, "rx", borderRadius);
  element.setAttributeNS(null, "ry", borderRadius);
  element.setAttributeNS(null, "fill", fill);
  element.setAttributeNS(null, "stroke-width", strokeWidth);
  element.setAttributeNS(null, "stroke", stroke);
  element.setAttributeNS(null, "id", id);
  element.style.pointerEvents = "all";

  svgGroupElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgGroupElement.setAttributeNS(null, "id", `group-${id}`);
  svgGroupElement.setAttributeNS(null, "class", 'group-element');
  svgGroupElement.setAttributeNS(null, "x", 0);
  svgGroupElement.setAttributeNS(null, "y", 0);
  svgGroupElement.setAttributeNS(null, "viewBox", `0 0 ${GRID_WIDTH} ${GRID_HEIGHT}`);
  const resize = 
      '<g data-id="' + id + '" data-resize="tl" class="handle tl-resize" transform="translate(3 3)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="br" class="handle br-resize" transform="translate(53 53)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="t" class="handle t-resize" transform="translate(28 3)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="tr" class="handle tr-resize" transform="translate(53 3)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="r" class="handle r-resize" transform="translate(53 28)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="b" class="handle b-resize" transform="translate(28 53)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="bl" class="handle bl-resize" transform="translate(3 53)"><rect width="5" height="5" /></g>' +
      '<g data-id="' + id + '" data-resize="l" class="handle l-resize" transform="translate(3 28)"><rect width="5" height="5" /></g>'
      ;

  svgGroupElement.insertAdjacentHTML( 'beforeend', resize);
  svgGroupElement.prepend(element);
  svg.appendChild(svgGroupElement);
  moving(element, svg);

  element.addEventListener('mouseenter', () => {
    element.setAttribute('fill', 'lightgrey');
    const parentElement = element.parentElement;
    const handleButtons = parentElement.querySelectorAll('.handle');
    handleButtons.forEach(handleButton => {
      handleButton.addEventListener('mousedown', startResize);
    })
  });
  element.addEventListener('mouseleave', () => element.setAttribute('fill', fill));
}

function startResize(e) {
  const elementId = this.dataset.id;
  const typeResize = this.dataset.resize;
  const element = document.querySelector(`#${elementId}`);
  const parentElement = element.parentElement;
  const viewBox = parentElement.getAttribute('viewBox');
  const [minX, minY, parentWidth, parentHeight] = viewBox.split(' ');
  const parentViewBoxData = {
    minX: minX,
    minY: minY,
    width: parentWidth,
    height: parentHeight
  }
  const points = element.getAttribute("points");
  const tl = points.split(',')[0];
  const tr = points.split(',')[1];
  const br = points.split(',')[2];
  const bl = points.split(',')[3];
  const elementData = {
    id: elementId,
    tl: tl,
    tr: tr,
    br: br,
    bl: bl,
    initialMouseX: e.clientX,
    initialMouseY: e.clientY,
  }
  const resizeFunction = (e) => resizeElement(e, elementData, parentViewBoxData, typeResize);
  window.addEventListener( 'mousemove', resizeFunction );
  window.addEventListener( 'mouseup', (e) => {window.removeEventListener( 'mousemove', resizeFunction )} );
  
}

function resizeElement(event, elementData, parentViewBoxData, typeResize) {
  const element = document.querySelector(`#${elementData.id}`);
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const diffX = mouseX - elementData.initialMouseX;
  const diffY = mouseY - elementData.initialMouseY;
  const parentElement = element.parentElement;
  // const newX = elementData.w + (event.clientX - (elementData.left + elementData.w));
  // const newY = elementData.h + (event.clientY - (elementData.top + elementData.h));
  const newW = element.getBoundingClientRect().width;
  const newH = element.getBoundingClientRect().height;
  
  const handleButtons = {
    tlButton: parentElement.querySelector('.tl-resize'),
    brButton: parentElement.querySelector('.br-resize'),
    tButton: parentElement.querySelector('.t-resize'),
    trButton: parentElement.querySelector('.tr-resize'),
    rButton: parentElement.querySelector('.r-resize'),
    bButton: parentElement.querySelector('.b-resize'),
    blButton: parentElement.querySelector('.bl-resize'),
    lButton: parentElement.querySelector('.l-resize'),
  }
  if (newW < 5 || newH < 5) {
    return;
  }
  const elementTL = elementData.tl;
  const elementTR = elementData.tr;
  const elementBR = elementData.br;
  const elementBL = elementData.bl;
  switch (typeResize) {
    case 't':
      parentElement.setAttributeNS(null, 'viewBox', `${parentViewBoxData.minX} ${Number.parseInt(parentViewBoxData.minY) + diffY} ${parentViewBoxData.width} ${parentViewBoxData.height}`);
      element.setAttributeNS(null, 'points', `${elementTL.split(' ')[0]} ${Number.parseInt(elementTL.split(' ')[1]) + diffY},${elementTR.split(' ')[0]} ${Number.parseInt(elementTR.split(' ')[1]) + diffY},${elementBR.split(' ')[0]} ${elementBR.split(' ')[1]},${elementBL.split(' ')[0]} ${elementBL.split(' ')[1]}`);
      // handleButtons.tButton.setAttribute('transform', `translate(${((elementData.translateX + newW) + elementData.translateX) / 2} ${elementData.translateY + newY})`);
      // handleButtons.tlButton.setAttribute('transform', `translate(${elementData.translateX} ${elementData.translateY + newY})`);
      // handleButtons.trButton.setAttribute('transform', `translate(${elementData.translateX + newW} ${elementData.translateY + newY})`);
      // handleButtons.rButton.setAttribute('transform', `translate(${elementData.translateX + newW} ${((elementData.translateY + newY) + elementData.translateY) / 2})`);
      // handleButtons.lButton.setAttribute('transform', `translate(${elementData.translateX} ${((elementData.translateY + newY) + elementData.translateY) / 2})`);
      break;
    case 'r':
      element.setAttributeNS(null, 'points', `
        ${DEFAULT_X} ${DEFAULT_Y},
        ${DEFAULT_X + newX} ${DEFAULT_Y},
        ${DEFAULT_X + newX} ${DEFAULT_Y + elementData.h},
        ${DEFAULT_X} ${DEFAULT_Y + elementData.h}
        `);
      handleButtons.bButton.setAttribute('transform', `translate(${newW / 2} ${newH})`);
      handleButtons.tButton.setAttribute('transform', `translate(${newW / 2} 0)`);
      handleButtons.brButton.setAttribute('transform', `translate(${newX} ${elementData.h })`);
      handleButtons.rButton.setAttribute('transform', `translate(${newX} ${elementData.h / 2})`);
      handleButtons.trButton.setAttribute('transform', `translate(${newX} 0)`);
      break;
    case 'b':
      element.setAttributeNS(null, 'points', `${elementTL.split(' ')[0]} ${elementTL.split(' ')[1]},${elementTR.split(' ')[0]} ${elementTR.split(' ')[1]},${elementBR.split(' ')[0]} ${Number.parseInt(elementBR.split(' ')[1]) + diffY},${elementBL.split(' ')[0]} ${Number.parseInt(elementBL.split(' ')[1]) + diffY}`);
      handleButtons.bButton.setAttribute('transform', `translate(${newW / 2} ${newH})`);
      handleButtons.blButton.setAttribute('transform', `translate(0 ${newY})`);
      handleButtons.brButton.setAttribute('transform', `translate(${newW} ${newH})`);
      handleButtons.rButton.setAttribute('transform', `translate(${newW} ${newH / 2})`);
      handleButtons.lButton.setAttribute('transform', `translate(0 ${newH / 2})`);
      break;
    case 'l':
      element.setAttributeNS(null, 'points', `
        ${DEFAULT_X + newX} ${DEFAULT_Y},
        ${DEFAULT_X + elementData.w} ${DEFAULT_Y},
        ${DEFAULT_X + elementData.w} ${DEFAULT_Y + elementData.h},
        ${DEFAULT_X + elementData.w+ (event.clientX - (elementData.left + elementData.w))} ${DEFAULT_Y + elementData.h}
        `);
      handleButtons.blButton.setAttribute('transform', `translate(${newX} ${newH})`);
      handleButtons.lButton.setAttribute('transform', `translate(${newX} ${newH / 2})`);
      handleButtons.tlButton.setAttribute('transform', `translate(${newX} 0)`);
      handleButtons.tButton.setAttribute('transform', `translate(${(newW / 2) + newX} 0)`);
      handleButtons.bButton.setAttribute('transform', `translate(${(newW / 2) + newX} ${newH})`);
      break;
  
    default:
      break;
  }

}



/* function moveObjectWithKeyboard(obj) {
  const step = 10; // khoảng cách di chuyển

  function handleKeyDown(event) {
    const keyCode = event.keyCode;
    let transform = obj.getAttribute("transform");
    let translateX = Number.parseFloat(transform ? transform.match(/translate\(([^)]+)\)/)[1].split(',')[0] : 0);
    let translateY = Number.parseFloat(transform ? transform.match(/translate\(([^)]+)\)/)[1].split(',')[1] : 0);

    if (keyCode === 37) { // mũi tên trái
      translateX -= step;
    } else if (keyCode === 38) { // mũi tên lên
      translateY -= step;
    } else if (keyCode === 39) { // mũi tên phải
      translateX += step;
    } else if (keyCode === 40) { // mũi tên xuống
      translateY += step;
    }

    obj.setAttributeNS(null, "transform", `translate(${translateX}, ${translateY})`);
  }

  window.addEventListener("keydown", handleKeyDown);
} */

// Tạo đường kẻ thẳng với thẻ d path trong svg
function createPath(d, stroke, strokeWidth, fill) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);
  path.setAttribute("stroke", stroke);
  path.setAttribute("stroke-width", strokeWidth);
  path.setAttribute("fill", fill);
  return path;
}

// Tạo ô kẻ trong work_space
const GRID_WIDTH = 800;
const GRID_HEIGHT = 800;
const CELL_SIZE = 10;
const BOLD_BORDER_INTERVAL = 4;

const GridContainer = document.createElement("div");
Object.assign(GridContainer.style, {
position: "absolute",
width: `${GRID_WIDTH}px`,
height: `${GRID_HEIGHT}px`,
});
diagramWspace.appendChild(GridContainer);

/* const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); */
svg.setAttribute("width", GRID_WIDTH);
svg.setAttribute("height", GRID_HEIGHT);
svg.style.position = "absolute";
svg.setAttribute("viewBox", `0 0 ${GRID_WIDTH} ${GRID_HEIGHT}`);
GridContainer.appendChild(svg);

const strokeDasharray = "1 .3";
const gridPath = createPath("", "#ccc", ".3");//).3 Để có line Còn tạm thời để 0 để chạy MindMap
let d = "";
for (let x = 0; x < GRID_WIDTH; x += CELL_SIZE) {
  d += `M ${x} 0 L ${x} ${GRID_HEIGHT} `;
}
for (let y = 0; y < GRID_HEIGHT; y += CELL_SIZE) {
  d += `M 0 ${y} L ${GRID_WIDTH} ${y} `;
}
for (let x = 0; x < GRID_WIDTH; x += CELL_SIZE * BOLD_BORDER_INTERVAL) {
  d += `M ${x} 0 L ${x} ${GRID_HEIGHT} `;
}
for (let y = 0; y < GRID_HEIGHT; y += CELL_SIZE * BOLD_BORDER_INTERVAL) {
  d += `M 0 ${y} L ${GRID_WIDTH} ${y} `;
}
gridPath.setAttribute("d", d);
gridPath.setAttribute("stroke-dasharray", strokeDasharray);
svg.appendChild(gridPath);

// const rect = createPath("M50 10 h80 v80 h-80 z", "black", "0.5", "none");
// svg.appendChild(rect);


/************************Tạo hình vuông************************/
function createSquare(x, y, size, fill, strokeWidth, stroke) {
  const square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  square.setAttributeNS(null, "x", 0);
  square.setAttributeNS(null, "y", 0);
  square.setAttributeNS(null, "width", size);
  square.setAttributeNS(null, "height", size);
  square.setAttributeNS(null, "fill", fill);
  square.setAttributeNS(null, "stroke-width", strokeWidth);
  square.setAttributeNS(null, "stroke", stroke);
  square.style.pointerEvents = "all";
  square.setAttributeNS(null, "transform", `translate(${x}, ${y})`);
  svg.appendChild(square);

  return square;
}

/* const square = createSquare(70, 50, 80, "none", 1, "black");
moving(square,svg); */



/************************RoundedRectangle************************/

/* const hinh = createRoundedRectangle1(250, 250, 100, 50, 10, "none", 1, "black");
moving(hinh, svg);

const hinh1 = createRoundedRectangle1(150, 350, 100, 50, 10, "none", 1, "black");
moving(hinh1, svg); */



/* function addText(rect, svg) {
  const textGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttributeNS(null, "x", rect.getAttribute("x")*1 + rect.getAttribute("width")/2);
  text.setAttributeNS(null, "y", rect.getAttribute("y")*1 + rect.getAttribute("height")/2);
  text.setAttributeNS(null, "text-anchor", "middle");
  text.setAttributeNS(null, "dominant-baseline", "middle");
  text.setAttributeNS(null, "font-size", "16");
  text.setAttributeNS(null, "fill", "black");
  text.style.pointerEvents = "none";
  text.textContent = "Hello World";

  const textRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  textRect.setAttributeNS(null, "x", rect.getAttribute("x"));
  textRect.setAttributeNS(null, "y", rect.getAttribute("y"));
  textRect.setAttributeNS(null, "width", rect.getAttribute("width"));
  textRect.setAttributeNS(null, "height", rect.getAttribute("height"));
  textRect.setAttributeNS(null, "rx", rect.getAttribute("rx"));
  textRect.setAttributeNS(null, "ry", rect.getAttribute("ry"));
  textRect.setAttributeNS(null, "fill", "none");
  textRect.setAttributeNS(null, "stroke-width", "0");
  textRect.setAttributeNS(null, "pointer-events", "none");

  textGroup.appendChild(textRect);
  textGroup.appendChild(text);

  svg.appendChild(textGroup);

  return textGroup;
} */
 

function createGroup(x, y) {
  const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  group.setAttributeNS(null, "transform", `translate(${x}, ${y})`);
  svg.appendChild(group);
  return group;
}

/**************************Tạo MindMap**************************/





