var page = new tabris.Page({
  title: "Crypto random values",
  topLevel: true
});

var buffer = new Uint8Array(24);
new crypto.getRandomValues(buffer);

new tabris.TextView({
  left: 16, right: 16, top: 16,
  font: "16px monospace",
  text: join(buffer)
}).appendTo(page);

page.open();

function join(buffer) {
  // TypedArray.join not supported on iOS
  return Array.prototype.join.call(buffer, " ");
}
