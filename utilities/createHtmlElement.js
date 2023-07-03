// tag: str;
// classNames: arr[str] || null;
// child arr[DOM] || null;
// atrs: arr[{key, val}] || null;
// text: str || null;
export default function createHtmlElement(
  tag = 'div', // tag: str;
  classNames = null, // classNames: arr[str] || null;
  childs = null, // child arr[DOM] || null;
  atrs = null, // atrs: arr[{key, val}] || null;
) {
  const el = document.createElement(tag)

  if (classNames) {
    classNames.forEach( (className) => {
      if (className) {
        el.classList.add(className);
      }
    })
  }

  if (childs) {
    childs.forEach( (child) => {
      if (child instanceof HTMLElement) {
        el.appendChild(child);
      } else if (typeof child === 'string') {
        el.appendChild(document.createTextNode(child));
      }
    });
  }

  if (atrs) {
    atrs.forEach( (atr) => el.setAttribute(atr.key, atr.val));
  }

  return el;
}