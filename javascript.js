/* =========================================================
   CRAVEGO FOOD ORDERING SYSTEM
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   FOOD DATA
========================================================= */

const foodItems = [

    {
        id: 1,
        name: "Margherita Pizza",
        category: "Pizza",
        restaurant: "Oven Story",
        price: 299,
        rating: 4.8,
        delivery: 25,
        veg: true,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 2,
        name: "Paneer Tikka Pizza",
        category: "Pizza",
        restaurant: "The Pizza Project",
        price: 349,
        rating: 4.7,
        delivery: 30,
        veg: true,
        image: "https://images.unsplash.com/photo-1593560708920-61dd98c8c3b7?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 3,
        name: "Crispy Chicken Burger",
        category: "Burgers",
        restaurant: "Burger Lab",
        price: 249,
        rating: 4.6,
        delivery: 22,
        veg: false,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 4,
        name: "Classic Veg Burger",
        category: "Burgers",
        restaurant: "Burger Singh",
        price: 179,
        rating: 4.5,
        delivery: 20,
        veg: true,
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 5,
        name: "Butter Chicken",
        category: "North Indian",
        restaurant: "Punjab Grill",
        price: 399,
        rating: 4.9,
        delivery: 32,
        veg: false,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 6,
        name: "Paneer Butter Masala",
        category: "North Indian",
        restaurant: "Delhi Rasoi",
        price: 329,
        rating: 4.7,
        delivery: 30,
        veg: true,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 7,
        name: "Chicken Biryani",
        category: "Biryani",
        restaurant: "Biryani Blues",
        price: 349,
        rating: 4.9,
        delivery: 35,
        veg: false,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 8,
        name: "Veg Dum Biryani",
        category: "Biryani",
        restaurant: "Hyderabadi House",
        price: 299,
        rating: 4.6,
        delivery: 34,
        veg: true,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 9,
        name: "Masala Dosa",
        category: "South Indian",
        restaurant: "South Stories",
        price: 149,
        rating: 4.8,
        delivery: 24,
        veg: true,
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 10,
        name: "Idli Sambar",
        category: "South Indian",
        restaurant: "Madras Cafe",
        price: 119,
        rating: 4.5,
        delivery: 20,
        veg: true,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 11,
        name: "Hakka Noodles",
        category: "Chinese",
        restaurant: "Wok This Way",
        price: 219,
        rating: 4.5,
        delivery: 25,
        veg: true,
        image: "https://images.unsplash.com/photo-1617622141675-d3005b9067f5?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 12,
        name: "Schezwan Chicken",
        category: "Chinese",
        restaurant: "Dragon Bowl",
        price: 289,
        rating: 4.6,
        delivery: 28,
        veg: false,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 13,
        name: "Pav Bhaji",
        category: "Street Food",
        restaurant: "Mumbai Zaika",
        price: 139,
        rating: 4.7,
        delivery: 18,
        veg: true,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 14,
        name: "Vada Pav",
        category: "Street Food",
        restaurant: "Mumbai Local",
        price: 69,
        rating: 4.8,
        delivery: 15,
        veg: true,
        image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 15,
        name: "Chicken Momos",
        category: "Momos",
        restaurant: "Momo Nation",
        price: 199,
        rating: 4.6,
        delivery: 24,
        veg: false,
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 16,
        name: "Paneer Momos",
        category: "Momos",
        restaurant: "Momo Nation",
        price: 179,
        rating: 4.5,
        delivery: 24,
        veg: true,
        image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 17,
        name: "Farmhouse Salad",
        category: "Healthy",
        restaurant: "Green Bowl",
        price: 249,
        rating: 4.4,
        delivery: 22,
        veg: true,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 18,
        name: "Avocado Toast",
        category: "Healthy",
        restaurant: "Green Room",
        price: 279,
        rating: 4.6,
        delivery: 20,
        veg: true,
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 19,
        name: "Chocolate Brownie",
        category: "Desserts",
        restaurant: "Sweet Truth",
        price: 159,
        rating: 4.8,
        delivery: 20,
        veg: true,
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 20,
        name: "New York Cheesecake",
        category: "Desserts",
        restaurant: "Bake House",
        price: 229,
        rating: 4.7,
        delivery: 25,
        veg: true,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 21,
        name: "Cold Coffee",
        category: "Beverages",
        restaurant: "Brew & Bean",
        price: 149,
        rating: 4.5,
        delivery: 18,
        veg: true,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 22,
        name: "Mango Shake",
        category: "Beverages",
        restaurant: "Shake Theory",
        price: 169,
        rating: 4.7,
        delivery: 17,
        veg: true,
        image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 23,
        name: "Tandoori Chicken",
        category: "North Indian",
        restaurant: "Punjab Grill",
        price: 429,
        rating: 4.8,
        delivery: 35,
        veg: false,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=700&q=80"
    },

    {
        id: 24,
        name: "Dal Makhani",
        category: "North Indian",
        restaurant: "Delhi Rasoi",
        price: 249,
        rating: 4.6,
        delivery: 30,
        veg: true,
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80"
    }

];


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let cart = [];
let favorites = [];
let selectedCategory = "All";
let searchValue = "";
let couponApplied = false;


/* =========================================================
   LOAD DATA
========================================================= */

function loadData() {

    try {

        const savedCart =
            localStorage.getItem("craveGoCart");

        const savedFavorites =
            localStorage.getItem("craveGoFavorites");


        if (savedCart) {

            const parsedCart =
                JSON.parse(savedCart);

            if (Array.isArray(parsedCart)) {

                cart = parsedCart.map(function(item) {

                    return {

                        id: Number(item.id),
                        name: item.name,
                        price: Number(item.price),
                        image: item.image,
                        restaurant: item.restaurant,
                        quantity: Math.max(
                            1,
                            Number(item.quantity) || 1
                        )

                    };

                });

            }

        }


        if (savedFavorites) {

            const parsedFavorites =
                JSON.parse(savedFavorites);

            if (Array.isArray(parsedFavorites)) {

                favorites =
                    parsedFavorites.map(Number);

            }

        }

    }

    catch (error) {

        console.error(
            "LocalStorage error:",
            error
        );

    }

}


/* =========================================================
   SAVE DATA
========================================================= */

function saveData() {

    localStorage.setItem(
        "craveGoCart",
        JSON.stringify(cart)
    );

    localStorage.setItem(
        "craveGoFavorites",
        JSON.stringify(favorites)
    );

}


/* =========================================================
   MONEY
========================================================= */

function money(amount) {

    return "₹" +
        Number(amount || 0)
            .toLocaleString("en-IN");

}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function() {

        toast.classList.remove("show");

    }, 2500);

}


/* =========================================================
   CART COUNT
========================================================= */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");

    if (!cartCount) return;

    let total = 0;

    cart.forEach(function(item) {

        total += Number(item.quantity) || 0;

    });

    cartCount.textContent = total;

}


/* =========================================================
   ADD TO CART
========================================================= */

function addToCart(id) {

    id = Number(id);

    const food =
        foodItems.find(function(item) {

            return item.id === id;

        });


    if (!food) {

        console.error("Food not found:", id);

        return;

    }


    const existingItem =
        cart.find(function(item) {

            return Number(item.id) === id;

        });


    if (existingItem) {

        existingItem.quantity =
            Number(existingItem.quantity) + 1;

    }

    else {

        cart.push({

            id: food.id,
            name: food.name,
            price: Number(food.price),
            image: food.image,
            restaurant: food.restaurant,
            quantity: 1

        });

    }


    saveData();

    updateCartCount();

    renderCartPage();

    showToast(
        "🍴 " + food.name + " added to cart!"
    );

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQuantity(id, change) {

    id = Number(id);
    change = Number(change);


    const item =
        cart.find(function(cartItem) {

            return Number(cartItem.id) === id;

        });


    if (!item) return;


    item.quantity =
        Number(item.quantity) + change;


    if (item.quantity <= 0) {

        cart =
            cart.filter(function(cartItem) {

                return Number(cartItem.id) !== id;

            });

    }


    saveData();

    updateCartCount();

    renderCartPage();

}


/* =========================================================
   REMOVE ITEM
========================================================= */

function removeFromCart(id) {

    id = Number(id);


    cart =
        cart.filter(function(item) {

            return Number(item.id) !== id;

        });


    saveData();

    updateCartCount();

    renderCartPage();

    showToast("🗑️ Item removed");

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    id = Number(id);


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(function(item) {

                return item !== id;

            });

    }

    else {

        favorites.push(id);

    }


    saveData();

    renderMenu();

}


/* =========================================================
   FOOD CARD
========================================================= */

function createFoodCard(food) {

    const isFavorite =
        favorites.includes(food.id);


    return `

        <article class="food-card">

            <div class="food-image-wrapper">

                <img
                    src="${food.image}"
                    alt="${food.name}"
                    class="food-image"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=700&q=80'"
                >

                <button
                    type="button"
                    class="favorite-btn"
                    onclick="toggleFavorite(${food.id})"
                >
                    ${isFavorite ? "❤️" : "♡"}
                </button>

                <span class="food-tag">
                    ${food.veg ? "🟢 VEG" : "🔴 NON-VEG"}
                </span>

            </div>


            <div class="food-content">

                <div class="food-title-row">

                    <h3>${food.name}</h3>

                    <span class="rating">
                        ⭐ ${food.rating}
                    </span>

                </div>

                <p class="restaurant">
                    ${food.restaurant}
                </p>

                <p class="food-meta">
                    🚴 ${food.delivery} min
                </p>

                <div class="food-bottom">

                    <strong class="food-price">
                        ${money(food.price)}
                    </strong>

                    <button
                        type="button"
                        class="add-btn"
                        onclick="addToCart(${food.id})"
                    >
                        + Add
                    </button>

                </div>

            </div>

        </article>

    `;

}


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu() {

    const foodGrid =
        document.getElementById("foodGrid");

    if (!foodGrid) return;


    let filteredFoods =
        foodItems.slice();


    if (selectedCategory !== "All") {

        filteredFoods =
            filteredFoods.filter(function(food) {

                return food.category ===
                    selectedCategory;

            });

    }


    if (searchValue.trim() !== "") {

        const search =
            searchValue
                .toLowerCase()
                .trim();


        filteredFoods =
            filteredFoods.filter(function(food) {

                return (
                    food.name.toLowerCase().includes(search) ||
                    food.restaurant.toLowerCase().includes(search) ||
                    food.category.toLowerCase().includes(search)
                );

            });

    }


    const sortFood =
        document.getElementById("sortFood");


    if (sortFood) {

        const sortValue =
            sortFood.value;


        if (sortValue === "rating") {

            filteredFoods.sort(
                (a, b) => b.rating - a.rating
            );

        }

        else if (sortValue === "priceLow") {

            filteredFoods.sort(
                (a, b) => a.price - b.price
            );

        }

        else if (sortValue === "priceHigh") {

            filteredFoods.sort(
                (a, b) => b.price - a.price
            );

        }

        else if (sortValue === "delivery") {

            filteredFoods.sort(
                (a, b) => a.delivery - b.delivery
            );

        }

    }


    const emptyMenu =
        document.getElementById("emptyMenu");


    if (filteredFoods.length === 0) {

        foodGrid.innerHTML = "";

        if (emptyMenu) {

            emptyMenu.style.display = "block";

        }

        updateResultCount(0);

        return;

    }


    if (emptyMenu) {

        emptyMenu.style.display = "none";

    }


    foodGrid.innerHTML =
        filteredFoods
            .map(createFoodCard)
            .join("");


    updateResultCount(
        filteredFoods.length
    );

}


/* =========================================================
   RESULT COUNT
========================================================= */

function updateResultCount(count) {

    const resultCount =
        document.getElementById("resultCount");

    if (!resultCount) return;


    if (searchValue.trim() !== "") {

        resultCount.textContent =
            "Showing " + count + " dishes";

    }

    else if (selectedCategory !== "All") {

        resultCount.textContent =
            "Showing " +
            count +
            " " +
            selectedCategory +
            " dishes";

    }

    else {

        resultCount.textContent =
            "Showing all " +
            count +
            " dishes";

    }

}


/* =========================================================
   CATEGORY FILTER
========================================================= */

function setupCategories() {

    const buttons =
        document.querySelectorAll(
            ".category-filter"
        );


    buttons.forEach(function(button) {

        button.addEventListener(
            "click",
            function() {

                selectedCategory =
                    button.getAttribute(
                        "data-category"
                    );

                buttons.forEach(function(btn) {

                    btn.classList.remove(
                        "active"
                    );

                });

                button.classList.add("active");

                renderMenu();

            }
        );

    });

}


/* =========================================================
   MENU SEARCH
========================================================= */

function setupMenuSearch() {

    const input =
        document.getElementById("menuSearch");

    if (!input) return;


    input.addEventListener(
        "input",
        function() {

            searchValue =
                input.value;

            renderMenu();

        }
    );

}


/* =========================================================
   CART SEARCH
========================================================= */

function setupCartSearch() {

    const input =
        document.getElementById("cartSearch");

    if (!input) return;


    input.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                const value =
                    input.value.trim();


                window.location.href =
                    value
                        ? "menu.html?search=" +
                          encodeURIComponent(value)
                        : "menu.html";

            }

        }
    );

}


/* =========================================================
   SORT
========================================================= */

function setupSort() {

    const sortFood =
        document.getElementById("sortFood");

    if (!sortFood) return;


    sortFood.addEventListener(
        "change",
        renderMenu
    );

}


/* =========================================================
   RESET MENU
========================================================= */

function setupResetMenu() {

    const resetButton =
        document.getElementById("resetMenu");

    if (!resetButton) return;


    resetButton.addEventListener(
        "click",
        function() {

            selectedCategory = "All";

            searchValue = "";


            const input =
                document.getElementById("menuSearch");


            if (input) {

                input.value = "";

            }


            document
                .querySelectorAll(
                    ".category-filter"
                )
                .forEach(function(button) {

                    button.classList.remove(
                        "active"
                    );

                });


            const allButton =
                document.querySelector(
                    '.category-filter[data-category="All"]'
                );


            if (allButton) {

                allButton.classList.add(
                    "active"
                );

            }


            renderMenu();

        }
    );

}


/* =========================================================
   CART TOTALS
========================================================= */

function getCartTotals() {

    let subtotal = 0;


    cart.forEach(function(item) {

        subtotal +=
            Number(item.price) *
            Number(item.quantity);

    });


    let deliveryFee = 0;


    if (
        subtotal > 0 &&
        subtotal < 499
    ) {

        deliveryFee = 40;

    }


    let discount = 0;


    if (
        couponApplied &&
        subtotal >= 799
    ) {

        discount = 100;

    }


    return {

        subtotal: subtotal,

        deliveryFee: deliveryFee,

        discount: discount,

        total:
            subtotal +
            deliveryFee -
            discount

    };

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCartPage() {

    const cartContainer =
        document.getElementById("cartItems");

    if (!cartContainer) return;


    const emptyCart =
        document.getElementById("cartEmpty");


    if (cart.length === 0) {

        cartContainer.innerHTML = "";

        if (emptyCart) {

            emptyCart.style.display = "block";

        }

        updateSummary();

        return;

    }


    if (emptyCart) {

        emptyCart.style.display = "none";

    }


    cartContainer.innerHTML =
        cart.map(function(item) {

            return `

                <div class="cart-item">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                    >

                    <div class="cart-item-info">

                        <h3>${item.name}</h3>

                        <p>${item.restaurant}</p>

                        <strong>
                            ${money(item.price)}
                        </strong>

                    </div>


                    <div class="quantity-control">

                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, -1)"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            type="button"
                            onclick="changeQuantity(${item.id}, 1)"
                        >
                            +
                        </button>

                    </div>


                    <button
                        type="button"
                        class="remove-btn"
                        onclick="removeFromCart(${item.id})"
                    >
                        🗑️
                    </button>

                </div>

            `;

        }).join("");


    updateSummary();

}


/* =========================================================
   UPDATE SUMMARY
========================================================= */

function updateSummary() {

    const totals =
        getCartTotals();


    const itemTotal =
        document.getElementById("itemTotal");

    const delivery =
        document.getElementById("deliveryFee");

    const discount =
        document.getElementById("discount");

    const grandTotal =
        document.getElementById("grandTotal");


    if (itemTotal) {

        itemTotal.textContent =
            money(totals.subtotal);

    }


    if (delivery) {

        delivery.textContent =
            totals.deliveryFee === 0 &&
            totals.subtotal > 0
                ? "FREE"
                : money(totals.deliveryFee);

    }


    if (discount) {

        discount.textContent =
            totals.discount > 0
                ? "- " + money(totals.discount)
                : "₹0";

    }


    if (grandTotal) {

        grandTotal.textContent =
            money(totals.total);

    }


    updateCartCount();

}


/* =========================================================
   CLEAR CART
========================================================= */

function setupClearCart() {

    const button =
        document.getElementById("clearCart");

    if (!button) return;


    button.addEventListener(
        "click",
        function() {

            if (cart.length === 0) {

                showToast(
                    "Cart is already empty"
                );

                return;

            }


            if (
                !confirm(
                    "Are you sure you want to clear the cart?"
                )
            ) {

                return;

            }


            cart = [];

            couponApplied = false;

            saveData();

            renderCartPage();

            updateCartCount();

            showToast("🛒 Cart cleared");

        }
    );

}


/* =========================================================
   COUPON
========================================================= */

function setupCoupon() {

    const couponButton =
        document.getElementById("couponBtn");

    const couponInput =
        document.getElementById("couponInput");


    if (!couponButton || !couponInput) return;


    couponButton.addEventListener(
        "click",
        function() {

            const code =
                couponInput.value
                    .trim()
                    .toUpperCase();


            const totals =
                getCartTotals();


            if (code === "CRAVE100") {

                if (totals.subtotal >= 799) {

                    couponApplied = true;

                    updateSummary();

                    couponButton.textContent =
                        "Applied ✓";

                    couponButton.disabled = true;

                    showToast(
                        "🎉 ₹100 OFF applied!"
                    );

                }

                else {

                    showToast(
                        "Minimum order ₹799 required"
                    );

                }

            }

            else {

                couponApplied = false;

                updateSummary();

                showToast(
                    "❌ Invalid coupon code"
                );

            }

        }
    );

}


/* =========================================================
   CHECKOUT
========================================================= */

function setupCheckout() {

    const checkoutButton =
        document.getElementById(
            "checkoutButton"
        );

    const modal =
        document.getElementById(
            "checkoutModal"
        );

    const closeButton =
        document.getElementById(
            "closeCheckout"
        );

    const placeOrderButton =
        document.getElementById(
            "placeOrder"
        );


    if (checkoutButton) {

        checkoutButton.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                if (cart.length === 0) {

                    showToast(
                        "🛒 Your cart is empty"
                    );

                    return;

                }


                if (modal) {

                    modal.classList.add("show");

                }

            }
        );

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function() {

                if (modal) {

                    modal.classList.remove("show");

                }

            }
        );

    }


    if (modal) {

        modal.addEventListener(
            "click",
            function(event) {

                if (event.target === modal) {

                    modal.classList.remove("show");

                }

            }
        );

    }


    if (placeOrderButton) {

        placeOrderButton.addEventListener(
            "click",
            function(event) {

                placeOrder(event);

            }
        );

    }

}


/* =========================================================
   PLACE ORDER
========================================================= */
async function placeOrder(event) {

    if (event) {

        event.preventDefault();

    }


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;

    }


    const nameElement =
        document.getElementById("customerName");

    const phoneElement =
        document.getElementById("customerPhone");

    const addressElement =
        document.getElementById("customerAddress");

    const paymentElement =
        document.getElementById("paymentMethod");


    const name =
        nameElement
            ? nameElement.value.trim()
            : "";

    const phone =
        phoneElement
            ? phoneElement.value.trim()
            : "";

    const address =
        addressElement
            ? addressElement.value.trim()
            : "";

    const payment =
        paymentElement
            ? paymentElement.value
            : "";


    if (!name) {

        alert("Please enter your name.");

        if (nameElement) {
            nameElement.focus();
        }

        return;

    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit mobile number."
        );

        if (phoneElement) {
            phoneElement.focus();
        }

        return;

    }


    if (!address) {

        alert(
            "Please enter your delivery address."
        );

        if (addressElement) {
            addressElement.focus();
        }

        return;

    }


    if (!payment) {

        alert(
            "Please select a payment method."
        );

        return;

    }


    const totals =
        getCartTotals();


    /* CREATE ORDER ID */

    const orderId =
        "CG" +
        Math.floor(
            10000000 +
            Math.random() * 90000000
        );


    /* CREATE ORDER */

    const order = {

        id: orderId,

        customerName: name,

        mobile: phone,

        address: address,

        paymentMethod: payment,

        items:
            cart.map(function(item) {

                return {

                    id: item.id,

                    name: item.name,

                    quantity:
                        Number(item.quantity),

                    price:
                        Number(item.price)

                };

            }),

        subtotal:
            totals.subtotal,

        deliveryFee:
            totals.deliveryFee,

        discount:
            totals.discount,

        total:
            totals.total,

        date:
            new Date().toLocaleString("en-IN"),

        status:
            "Placed"

    };
    // SAVE ORDER TO AWS DYNAMODB
try {

    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            OrderId: order.id,
            customerName: order.customerName,
            mobile: order.mobile,
            address: order.address,
            paymentMethod: order.paymentMethod,
            items: order.items,
            subtotal: order.subtotal,
            deliveryFee: order.deliveryFee,
            discount: order.discount,
            total: order.total,
            date: order.date,
            status: order.status
        })
    });

    if (!response.ok) {
        throw new Error(
            "AWS POST failed: " + response.status
        );
    }

    const result = await response.json();

    console.log(
        "☁️ Order saved to AWS:",
        result
    );

} catch (error) {

    console.error(
        "❌ AWS Order Save Error:",
        error
    );

    alert(
        "❌ Order save nahi hua. Please try again."
    );

    return;
}


    /* SAVE ORDER */

    let orders = [];


    try {

        const savedOrders =
            localStorage.getItem(
                "craveGoOrders"
            );


        if (savedOrders) {

            const parsed =
                JSON.parse(savedOrders);


            if (Array.isArray(parsed)) {

                orders = parsed;

            }

        }

    }

    catch (error) {

        console.error(
            "Orders loading error:",
            error
        );

    }


    orders.push(order);


    localStorage.setItem(
        "craveGoOrders",
        JSON.stringify(orders)
    );


    /* CLEAR CART */

    cart = [];

    couponApplied = false;

    saveData();


    /* UPDATE PAGE */

    updateCartCount();

    renderCartPage();

    updateSummary();

    renderAdmin();


    /* CLOSE MODAL */

    const modal =
        document.getElementById(
            "checkoutModal"
        );


    if (modal) {

        modal.classList.remove("show");

    }


    /* CLEAR FORM */

    if (nameElement) {
        nameElement.value = "";
    }

    if (phoneElement) {
        phoneElement.value = "";
    }

    if (addressElement) {
        addressElement.value = "";
    }


    alert(
        "🎉 ORDER PLACED SUCCESSFULLY!\n\n" +
        "Order ID: " +
        orderId +
        "\n\n" +
        "Payment: " +
        payment +
        "\n\n" +
        "Amount: " +
        money(totals.total)
    );

}


/* =========================================================
   HOME SEARCH
========================================================= */

function performHomeSearch(value) {

    const search =
        String(value)
            .trim()
            .toLowerCase();


    window.location.href =
        search
            ? "menu.html?search=" +
              encodeURIComponent(search)
            : "menu.html";

}


/* =========================================================
   HOME SEARCH SETUP
========================================================= */

function setupHomeSearch() {

    const inputs =
        document.querySelectorAll(
            "#homeSearch, #searchInput"
        );


    inputs.forEach(function(input) {

        input.addEventListener(
            "keydown",
            function(event) {

                if (event.key === "Enter") {

                    event.preventDefault();

                    performHomeSearch(
                        input.value
                    );

                }

            }
        );

    });

}


/* =========================================================
   OFFER BUTTON
========================================================= */

function setupOfferButton() {

    const button =
        document.getElementById(
            "offerButton"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        function() {

            window.location.href =
                "menu.html";

        }
    );

}


/* =========================================================
   URL PARAMETERS
========================================================= */

function readUrlParameters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const search =
        params.get("search");

    const category =
        params.get("category");


    if (search) {

        searchValue =
            search.toLowerCase();


        const input =
            document.getElementById(
                "menuSearch"
            );


        if (input) {

            input.value = search;

        }

    }


    if (category) {

        selectedCategory =
            category;


        document
            .querySelectorAll(
                ".category-filter"
            )
            .forEach(function(button) {

                button.classList.remove(
                    "active"
                );


                if (
                    button.getAttribute(
                        "data-category"
                    ) === category
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            });

    }

}


/* =========================================================
   GET ORDERS FROM AWS DYNAMODB
========================================================= */

const API_URL =
    "https://84nmp7w6j5.execute-api.ap-south-1.amazonaws.com/dev/orders";


async function getOrders() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(
                "GET API request failed: " +
                response.status
            );
        }

        const data = await response.json();

        console.log("☁️ AWS Response:", data);


        /*
           API Gateway currently returns:

           {
               statusCode: 200,
               headers: {...},
               body: "[{...},{...}]"
           }

           So we need to read the body.
        */

        let orders;


        if (Array.isArray(data)) {

            orders = data;

        }

        else if (typeof data.body === "string") {

            orders = JSON.parse(data.body);

        }

        else if (Array.isArray(data.body)) {

            orders = data.body;

        }

        else {

            orders = [];

        }


        console.log(
            "📦 Orders received from DynamoDB:",
            orders
        );


        return Array.isArray(orders)
            ? orders
            : [];

    }

    catch (error) {

        console.error(
            "❌ AWS Get Orders Error:",
            error
        );

        return [];

    }

}


/* =========================================================
   UPDATE ADMIN STATS
========================================================= */

function updateAdminStats(orders) {

    const ordersElement =
        document.getElementById("adminOrders");

    const revenueElement =
        document.getElementById("adminRevenue");


    /* Total Orders */

    if (ordersElement) {

        ordersElement.textContent =
            orders.length;

    }


    /* Total Revenue */

    if (revenueElement) {

        const revenue =
            orders.reduce(
                function(total, order) {

                    return total +
                        Number(order.total || 0);

                },
                0
            );


        revenueElement.textContent =
            money(revenue);

    }

}


/* =========================================================
   RENDER ADMIN ORDERS
========================================================= */

async function renderAdmin() {

    console.log(
        "📦 Loading Admin Orders from AWS..."
    );


    const orderTable =
        document.getElementById(
            "adminOrdersTable"
        );


    if (!orderTable) {

        console.log(
            "Admin orders table not found."
        );

        return;

    }


    /* Get orders from AWS */

    const orders =
        await getOrders();


    console.log(
        "📦 Orders from AWS:",
        orders
    );


    /* Update dashboard statistics */

    updateAdminStats(orders);


    /* No orders */

    if (
        !Array.isArray(orders) ||
        orders.length === 0
    ) {

        orderTable.innerHTML = `

            <tr>

                <td
                    colspan="5"
                    style="
                        text-align:center;
                        padding:30px;
                    "
                >

                    No recent orders

                </td>

            </tr>

        `;

        return;

    }


    /*
       Show latest orders first
    */

    const latestOrders =
        orders
            .slice()
            .reverse();


    /* Create table rows */

    orderTable.innerHTML =
        latestOrders
            .map(function(order) {


                /* Calculate total items */

                let totalItems = 0;


                if (
                    Array.isArray(order.items)
                ) {

                    order.items.forEach(
                        function(item) {

                            totalItems +=
                                Number(
                                    item.quantity
                                ) || 0;

                        }
                    );

                }


                return `

                    <tr>

                        <td>

                            <strong>

                                ${
                                    order.OrderId ||
                                    order.id ||
                                    "N/A"
                                }

                            </strong>

                        </td>


                        <td>

                            ${
                                order.customerName ||
                                "N/A"
                            }

                        </td>


                        <td>

                            ${totalItems}

                            item${
                                totalItems !== 1
                                    ? "s"
                                    : ""
                            }

                        </td>


                        <td>

                            <strong>

                                ${
                                    money(
                                        order.total || 0
                                    )
                                }

                            </strong>

                        </td>


                        <td>

                            <span
                                class="order-status"
                            >

                                ${
                                    order.status ||
                                    "Placed"
                                }

                            </span>

                        </td>

                    </tr>

                `;

            })
            .join("");


    console.log(
        "✅ AWS orders displayed successfully!"
    );

}


/* =========================================================
   ADMIN REFRESH
========================================================= */

function setupAdminRefresh() {

    const refreshButton =
        document.getElementById(
            "refreshOrders"
        );


    if (!refreshButton) return;


    refreshButton.addEventListener(
        "click",
        async function() {


            /* Fetch fresh orders from AWS */

            await renderAdmin();


            showToast(
                "🔄 Orders refreshed successfully!"
            );

        }
    );

}


/* =========================================================
   ADMIN FOOD
========================================================= */

function setupAdminFood() {

    const foodTable =
        document.getElementById(
            "foodTableBody"
        );


    if (!foodTable) return;


    foodTable.innerHTML =
        foodItems.map(function(food) {

            return `

                <tr>

                    <td>

                        <img
                            src="${food.image}"
                            width="50"
                            height="50"
                            style="
                                object-fit:cover;
                                border-radius:8px;
                            "
                        >

                    </td>

                    <td>
                        ${food.name}
                    </td>

                    <td>
                        ${food.category}
                    </td>

                    <td>
                        ${food.restaurant}
                    </td>

                    <td>
                        ${money(food.price)}
                    </td>

                    <td>
                        ⭐ ${food.rating}
                    </td>

                </tr>

            `;

        }).join("");

}


/* =========================================================
   ADMIN BUTTONS
========================================================= */

function setupAdminButtons() {

    const clearOrders =
        document.getElementById(
            "clearOrders"
        );


    if (clearOrders) {

        clearOrders.addEventListener(
            "click",
            function() {

                if (
                    !confirm(
                        "Delete all orders?"
                    )
                ) {

                    return;

                }


                localStorage.removeItem(
                    "craveGoOrders"
                );


                renderAdmin();


                showToast(
                    "🗑️ All orders deleted"
                );

            }
        );

    }

}


/* =========================================================
   GLOBAL FUNCTIONS
========================================================= */

window.addToCart =
    addToCart;

window.changeQuantity =
    changeQuantity;

window.removeFromCart =
    removeFromCart;

window.toggleFavorite =
    toggleFavorite;

window.placeOrder =
    placeOrder;

window.performHomeSearch =
    performHomeSearch;


/* =========================================================
   INITIALIZE
========================================================= */

function initializeCraveGo() {

    console.log(
        "🍴 CRAVEGO JAVASCRIPT LOADED"
    );


    /* LOAD DATA */

    loadData();


    /* CART COUNT */

    updateCartCount();


    /* HOME */

    setupHomeSearch();

    setupOfferButton();


    /* MENU */

    setupCategories();

    setupMenuSearch();

    setupSort();

    setupResetMenu();


    /* CART */

    setupCartSearch();

    setupClearCart();

    setupCoupon();

    setupCheckout();


    /* ADMIN */

    setupAdminFood();

    setupAdminButtons();

    setupAdminRefresh();


    /* URL */

    readUrlParameters();


    /* RENDER */

    renderMenu();

    renderCartPage();

    renderAdmin();


    console.log(
        "🛒 CURRENT CART:",
        cart
    );

    console.log(
        "🍕 TOTAL FOOD ITEMS:",
        foodItems.length
    );

}


/* =========================================================
   START
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCraveGo
    );

}

else {

    initializeCraveGo();

}