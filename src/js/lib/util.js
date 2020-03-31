export const print = value => {
  const h1 = document.createElement('h1');
  const text = document.createTextNode(value);
  h1.append(text);
  document.body.appendChild(h1);
}