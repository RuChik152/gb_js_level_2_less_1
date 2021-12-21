const products = [
    { id: 1,  price: 2000, image: 'https://placeimg.com/250/250/animals/grayscale/1' },
    { id: 2, title: 'Mouse', price: 20, image: 'https://placeimg.com/250/250/animals/grayscale/2' },
    { id: 3, title: 'Keyboard', price: 200 },
    { id: 4, title: 'Gamepad', image: 'https://placeimg.com/250/250/animals/grayscale/4' },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (object) => {
    let product = new Product(object.title, object.price, object.image);
    return product.createHTML();
};


/**
 * Класс для создания экземпляра класса на основе данных объекта, если данных нет, то в свойства нового объекта подставляються данные по умолчанию.
 * @param {string} title Название товара 
 * @param {number} price Цена товара
 * @param {string} image Путь к изображению
 * @method Метод возвращает готовую строку с тегами и свойствами объекта.
 */
class Product {
    constructor(title = 'Product', price = 999, image = '../img/No_image.svg'){
        this.title = title;
        this.price = price;
        this.image = image;
    }
    createHTML(){
       return `<div class="product-item"><img class="item__img" src="${this.image}"><h3 class="item__title">${this.title}</h3><p class="item__price">${this.price}</p><button class="buy-btn">Купить</button></div>`;
    }
}

// Как с считаю в чем проблема почему вставляеться ','
// Функция renderProduct нам возвращает строку с уже вставленнными данными, Метод map() возвращает массив и в результате стрелочной функции в 
// productsList мы получаем массив из результатов работы функции renderProduct, 
// но когда мы пытаемся вставить массив productsList на страницу используя метод innerHTML, то каждый новый элемент массива будет вставляться через ','
// но если использовать join(), то все элементы масива которые должен вернуть map объеденяються в одну строку и в productsList записываеться строка, 
// и ее уже потом вставляем в страницу
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);

