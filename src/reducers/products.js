var initialState = [
    {
        id: 1,
        name: 'iPhone 12 Pro Max 128GB',
        image: 'https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/465883758.jpeg',
        description: 'Đã bán 2k',
        oldPrice: 1200,
        currentPrice: 1080,
        rating: 5,
        slug: 'iPhone 12 Pro Max 128GB',
    },
    {
        id: 2,
        name: 'iPhone 11 Pro Max 512GB',
        image: 'https://www.viettablet.com/images/detailed/36/iphone-11-pro-max-space-grey.jpg',
        description: 'Đã bán 1.8k',
        oldPrice: 1000,
        currentPrice: 900,
        rating: 3,
        slug: 'iPhone 11 Pro Max 512GB',
    },
    {
        id: 3,
        name: 'iPhone 13 Pro Max 128GB',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1631652956000',
        description: 'Đã bán 1k',
        oldPrice: 1500,
        currentPrice: 1350,
        rating: 4,
        slug: 'iPhone 13 Pro Max 128GB',
    },
]


const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default product;