const data = {
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Mens",
      subcategory: "T-Shirt",
      image: "/images/shirt2.webp",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner1.webp",
    },
    {
      name: "Classic T-Shirt",
      slug: "mens-classic-tshirt",
      category: "Mens",
      subcategory: "T-Shirt",
      image: "/images/men-Tshirt.webp",
      price: 25,
      brand: "Adidas",
      rating: 4.7,
      numReviews: 120,
      countInStock: 50,
      description:
        "A versatile and comfortable cotton T-shirt for everyday wear.",
      isFeatured: true,
      banner: "/images/mens/banner1.webp",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "T-Shirt",
      image: "/images/kid-Tshirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
    // ... more T-shirts
    {
      name: "Cargo Pants",
      slug: "mens-cargo-pants",
      category: "Mens",
      subcategory: "Pants",
      image: "/images/pant2.jpeg",
      price: 45,
      brand: "Levi's",
      rating: 4.2,
      numReviews: 78,
      countInStock: 35,
      description:
        "Durable and functional cargo pants for outdoor activities or casual wear.",
      isFeatured: false,
      banner: "/images/mens/banner2.webp",
    },
    {
      name: "Women Comfy T-Shirt",
      slug: "womens-floral-maxi-dress",
      category: "Womens",
      subcategory: "Dress",
      image: "/images/w-Tshirt.webp",
      price: 55,
      brand: "H&M",
      rating: 4.6,
      numReviews: 135,
      countInStock: 40,
      description:
        "A flowy and elegant maxi dress with a beautiful floral print, perfect for summer occasions.",
      isFeatured: true,
      banner: "/images/womens/banner1.webp",
    },
    // ... more Pants
    {
      name: "Casual Shirt11",
      slug: "mens-casual-shirt",
      category: "Mens",
      subcategory: "Shirt",
      image: "/images/shirt1.webp",
      price: 38,
      brand: "Zara",
      rating: 4.3,
      numReviews: 65,
      countInStock: 42,
      description: "A stylish and relaxed shirt for casual outings or work.",
      isFeatured: false,
      banner: "/images/mens/banner3.webp",
    },
    // ... more Shirts
    {
      name: "Running Shoes",
      slug: "mens-running-shoes",
      category: "Mens",
      subcategory: "Shoes",
      image: "/images/menShoe.jpeg",
      price: 80,
      brand: "Nike",
      rating: 4.8,
      numReviews: 180,
      countInStock: 28,
      description:
        "Lightweight and breathable shoes designed for performance running.",
      isFeatured: true,
      banner: "/images/mens/banner4.webp",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "T-Shirt",
      image: "/images/kid-Tshirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Mens",
      subcategory: "T-Shirt",
      image: "/images/shirt3.webp",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/banner2.webp",
    },
    {
      name: "Slim Shirt",
      slug: "slim-shirt",
      category: "Mens",
      subcategory: "T-Shirt",
      image: "/images/shirt1.webp",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "T-Shirt",
      image: "/images/kid-Tshirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Mens",
      subcategory: "Pants",
      image: "/images/pant1.webp",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "T-Shirt",
      image: "/images/kid-Tshirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Mens",
      subcategory: "Pants",
      image: "/images/pant1.webp",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      subcategory: "Pants",
      image: "/images/pant2.webp",
      price: 95,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Mens",
      subcategory: "Pants",
      image: "/images/pant3.webp",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Floral Maxi Dress",
      slug: "womens-floral-maxi-dress",
      category: "Womens",
      subcategory: "Dress",
      image: "/images/w-Tshirt.webp",
      price: 55,
      brand: "H&M",
      rating: 4.6,
      numReviews: 135,
      countInStock: 40,
      description:
        "A flowy and elegant maxi dress with a beautiful floral print, perfect for summer occasions.",
      isFeatured: true,
      banner: "/images/womens/banner1.webp",
    },
    // ... more Dresses
    {
      name: "High-Waisted Jeans",
      slug: "womens-high-waisted-jeans",
      category: "Womens",
      subcategory: "Pants",
      image: "/images/w-pant.webp",
      price: 40,
      brand: "Levi's",
      rating: 4.8,
      numReviews: 150,
      countInStock: 60,
      description:
        "Flattering and comfortable high-waisted jeans in a variety of washes, perfect for everyday wear.",
      isFeatured: false,
      banner: "/images/womens/banner2.webp",
    },
    // ... more Pants
    {
      name: "Cozy Knit Sweater",
      slug: "womens-cozy-knit-sweater",
      category: "Womens",
      subcategory: "T-Shirt",
      image: "/images/w-Tshirt.webp",
      price: 32,
      brand: "Mango",
      rating: 4.4,
      numReviews: 80,
      countInStock: 38,
      description:
        "Soft and warm knit sweater for layering or wearing on its own, ideal for colder weather.",
      isFeatured: false,
      banner: "/images/womens/banner3.webp",
    },
    // ... more Sweaters
    {
      name: "Stylish Sneakers",
      slug: "womens-stylish-sneakers",
      category: "Womens",
      subcategory: "Shoes",
      image: "/images/w-shoe.jpg",
      price: 65,
      brand: "Adidas",
      rating: 4.7,
      numReviews: 160,
      countInStock: 25,
      description:
        "Trendy and versatile sneakers for everyday wear or light workouts.",
      isFeatured: true,
      banner: "/images/womens/banner4.webp",
    },
    // ... more Shoes
    {
      name: "Sparkly Hair Clip",
      slug: "womens-sparkly T-Shirt",
      category: "Womens",
      subcategory: "T-Shirt",
      image: "/images/w-Tshirt.webp",
      price: 15,
      brand: "womens-sparkly T-Shirt",
      rating: 4.2,
      numReviews: 40,
      countInStock: 80,
      description:
        "A fun and eye-catching hair clip with sparkly embellishments, perfect for adding a touch of glamour.",
      isFeatured: false,
      banner: "/images/womens/banner5.webp",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "Shirt",
      image: "/images/pantShirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
    {
      name: "Sparkly Hair Clip",
      slug: "womens-sparkly-hair-clip",
      category: "Womens",
      subcategory: "T-Shirt",
      image: "/images/w-Tshirt.webp",
      price: 15,
      brand: "T-Shirt",
      rating: 4.2,
      numReviews: 40,
      countInStock: 80,
      description:
        "A fun and eye-catching hair clip with sparkly embellishments, perfect for adding a touch of glamour.",
      isFeatured: false,
      banner: "/images/men-Tshirt.webp",
    },
    {
      name: "Graphic T-Shirt",
      slug: "kids-graphic-tshirt",
      category: "Kids",
      subcategory: "Shirt",
      image: "/images/pantShirt.webp",
      price: 18,
      brand: "Disney",
      rating: 4.9,
      numReviews: 210,
      countInStock: 70,
      description:
        "A comfortable cotton T-shirt with fun and colorful graphics, perfect for kids of all ages.",
      isFeatured: true,
      banner: "/images/kids/banner1.webp",
    },
  ],
};

export default data;
