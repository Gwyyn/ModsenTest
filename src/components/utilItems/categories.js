import nature from "../../assets/categoriesIcons/nature.png";
import auto from '../../assets/categoriesIcons/auto.png'
import bank from '../../assets/categoriesIcons/bank.png'
import bicycle from '../../assets/categoriesIcons/bicycle.png'
import coffee from '../../assets/categoriesIcons/coffee.png'
import culture from '../../assets/categoriesIcons/culture.png'
import entertainment from '../../assets/categoriesIcons/entertainment.png'
import factory from '../../assets/categoriesIcons/factory.png'
import food from '../../assets/categoriesIcons/food.png'
import gas_station from '../../assets/categoriesIcons/gas station.png'
import history from '../../assets/categoriesIcons/history.png'
import religion from '../../assets/categoriesIcons/religion.png'
import shop from '../../assets/categoriesIcons/shop.png'
import sleeping_place from '../../assets/categoriesIcons/sleeping place.png'
import sport from '../../assets/categoriesIcons/sport.png'

const categories = [
    { id: 1, icon: nature, name: 'Природа', isActive: true,  type: `"leisure"="park"`},
    { id: 2, icon: auto, name: 'Авто', isActive: true, type: `"amenity"="car_rental"`},
    { id: 3, icon: bank, name: 'Банк', isActive: true, type: `"amenity"="bank"`  },
    { id: 4, icon: bicycle, name: 'Велосипеды', isActive: true, type: `"amenity"="bicycle_rental"`},
    { id: 5, icon: coffee, name: 'Кофе/чай', isActive: true, type: `"vending"="coffee"`},
    { id: 6, icon: culture, name: 'Культура', isActive: true, type: `"tourism"="artwork"`},
    { id: 7, icon: entertainment, name: 'Развлечения', isActive: true, type: `"leisure"="garden"`},
    { id: 8, icon: factory, name: 'Индустриальные объекты', isActive: true, type: `"man_made"="works"`},
    { id: 9, icon: food, name: 'Еда', isActive: true, type: `"amenity"="restaurant"`  },
    { id: 10, icon: gas_station, name: 'Заправка', isActive: true, type: `"amenity"="fuel"`  },
    { id: 11, icon: history, name: 'История', isActive: true, type: `"historic"="memorial"`  },
    { id: 12, icon: religion, name: 'Религия', isActive: true, type: `"building"="church"`  },
    { id: 13, icon: shop, name: 'Магазин', isActive: true, type: `"shop"="supermarket"`  },
    { id: 14, icon: sleeping_place, name: 'Место для сна', isActive: true, type: `"tourism"="hotel"`  },
    { id: 15, icon: sport, name: 'Спорт', isActive: true, type: `"leisure"="fitness_centre"`  },
];

export default categories;