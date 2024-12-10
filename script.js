let product_arr = [
    {
        product: "syltherine",
        product_sub_title: "stylish cafe chair",
        product_tag: "-30%",
        sell_price: "Rp 2.500.000",
        cost_price: "Rp 3.500.000",
    },
    {
        product: "leviosa",
        product_sub_title: "stylish cafe chair",
        sell_price: "Rp 2.500.000",
    },
    {
        product: "lolito",
        product_sub_title: "luxury big sofa",
        product_tag: "-50%",
        sell_price: "Rp 7.000.000",
        cost_price: "Rp 14.000.000",
    },
    {
        product: "respira",
        product_sub_title: "outdoor bar table and stool",
        product_tag: "New",
        sell_price: "Rp 500.000",
    },
    {
        product: "grifo",
        product_sub_title: "night lamp",
        sell_price: "Rp 1.500.000",
    },
    {
        product: "muggo",
        product_sub_title: "small mug",
        product_tag: "New",
        sell_price: "Rp 150.000",
    },
    {
        product: "pingky",
        product_sub_title: "cute bed set",
        product_tag: "-50%",
        sell_price: "Rp 7.000.000",
        cost_price: "Rp 14.000.000",
    },
    {
        product: "potty",
        product_sub_title: "minimalist flower pot",
        product_tag: "New",
        sell_price: "Rp 150.000",
    },
]

let product_clutter = "";

product_arr.forEach((product) => {
    product_clutter += `
        <div class="product-card">
            <div class="product-img-wrapper">
                <img src="./assets/${product.product}.png" alt="${product.product}">
                ${product.product_tag ? `
                    <div class="product-tag" style="background-color: ${product.product_tag === "New" ? '#2EC1AC' : '#E97171'};">
                        <p>${product.product_tag}</p>
                    </div>
                ` : ''}
            </div>
            <div class="product-details">
                <p class="product-title">${product.product}</p>
                <p class="product-sub-title">${product.product_sub_title}</p>
                <div class="price">
                    <p class="sell-price">${product.sell_price}</p>
                    ${product.cost_price ? `<p class="cost-price">${product.cost_price}</p>` : ''}
                </div>
            </div>
            <div class="add-to-cart">
                <button class="add-btn">Add to cart</button>
                <div class="button-group">
                    <button>
                        <i class="ri-share-line"></i>
                        Share
                    </button>
                    <button>
                        <i class="ri-collapse-horizontal-line"></i>
                        Compare
                    </button>
                    <button>
                        <i class="ri-heart-3-line"></i>
                        Like
                    </button>
                </div>
            </div>
        </div>
    `;
});

document.querySelector(".products-wrapper").innerHTML = product_clutter;

// Carousel
const swiperWrapper = document.querySelector('.swiper-wrapper');
const swiperItems = document.querySelectorAll('.swiper-item');
const dots = document.querySelectorAll('.slick-dot');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateActiveSlide(index) {
    swiperItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });

    const offset = -index * 374;
    swiperWrapper.style.transform = `translateX(${offset}px)`;
}

function goToNext() {
    if (currentIndex < swiperItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateActiveSlide(currentIndex);
}

function goToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = swiperItems.length - 1;
    }
    updateActiveSlide(currentIndex);
}

nextButton.addEventListener('click', goToNext);
prevButton.addEventListener('click', goToPrev);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateActiveSlide(currentIndex);
    });
});

updateActiveSlide(currentIndex);
