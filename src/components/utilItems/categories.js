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
    { id: 1, icon: nature.toString(), name: 'Природа', isActive: true,  type: `"leisure"="park"`},
    { id: 2, icon: auto.toString(), name: 'Авто', isActive: true, type: `"amenity"="car_rental"`},
    { id: 3, icon: bank.toString(), name: 'Банк', isActive: true, type: `"amenity"="bank"`  },
    { id: 4, icon: bicycle.toString(), name: 'Велосипеды', isActive: true, type: `"amenity"="bicycle_rental"`},
    { id: 5, icon: coffee.toString(), name: 'Кофе/чай', isActive: true, type: `"vending"="coffee"`},
    { id: 6, icon: culture.toString(), name: 'Культура', isActive: true, type: `"tourism"="artwork"`},
    { id: 7, icon: entertainment.toString(), name: 'Развлечения', isActive: true, type: `"leisure"="garden"`},
    { id: 8, icon: factory.toString(), name: 'Индустриальные объекты', isActive: true, type: `"man_made"="works"`},
    { id: 9, icon: food.toString(), name: 'Еда', isActive: true, type: `"amenity"="restaurant"`  },
    { id: 10, icon: gas_station.toString(), name: 'Заправка', isActive: true, type: `"amenity"="fuel"`  },
    { id: 11, icon: history.toString(), name: 'История', isActive: true, type: `"historic"="memorial"`  },
    { id: 12, icon: religion.toString(), name: 'Религия', isActive: true, type: `"building"="church"`  },
    { id: 13, icon: shop.toString(), name: 'Магазин', isActive: true, type: `"shop"`  },
    { id: 14, icon: sleeping_place.toString(), name: 'Место для сна', isActive: true, type: `"tourism"="hotel"`  },
    { id: 15, icon: sport.toString(), name: 'Спорт', isActive: true, type: `"leisure"="fitness_centre"`  },
];

export default categories;