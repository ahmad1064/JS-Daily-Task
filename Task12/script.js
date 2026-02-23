let cart = [];

const cartList = document.getElementById("cartList");
const totalEl = document.getElementById("total");

function addToCart(name, price) {
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  renderCart();
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
  renderCart();
}

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price} x ${item.quantity}
      <button onclick="removeFromCart('${item.name}')">Remove</button>
    `;

    cartList.appendChild(li);
  });

  totalEl.textContent = total;
}