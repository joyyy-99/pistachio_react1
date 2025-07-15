import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Starters
import starterBraisedMutton from '../assets/images/Menu/Starters/braised-mutton.jpg';
import starterChilliChicken from '../assets/images/Menu/Starters/chilli-chicken.jpg';
import starterChilliGarlicMushroom from '../assets/images/Menu/Starters/chilli-garlic-mushrooms.jpg';
import starterFishChilliFry from '../assets/images/Menu/Starters/fish-chilli-fry.jpg';
import starterMacAndCheese from '../assets/images/Menu/Starters/mac-and-cheese.jpg';
import starterPestoKebab from '../assets/images/Menu/Starters/pesto-kebab.jpg';

// Mains
import mainAmritsari from '../assets/images/Menu/Mains/amritsari.jpg';
import mainButterChickenMakhani from '../assets/images/Menu/Mains/butter-chicken-makhani.jpg';
import mainHyderabadiChicken from '../assets/images/Menu/Mains/hyderabadi-chicken.jpg';
import mainMasalaShrooms from '../assets/images/Menu/Mains/masala-shrooms.jpg';
import mainPaneerBhurji from '../assets/images/Menu/Mains/paneer-bhurji.jpg';
import mainPrawnsKolapuri from '../assets/images/Menu/Mains/prawns-kolapuri.jpg';

// Sides
import sideButterNaan from '../assets/images/Menu/Sides/butter-naan.jpg';
import sideCheeseNaan from '../assets/images/Menu/Sides/cheese-naan.jpg';
import sideJeeraRice from '../assets/images/Menu/Sides/jeera-rice.jpg';
import sideMushroomRice from '../assets/images/Menu/Sides/mushroom-rice.jpg';
import sidePlainRice from '../assets/images/Menu/Sides/plain-rice.jpg';
import sideRaita from '../assets/images/Menu/Sides/raita.jpg';

// Desserts
import dessertAssortedIceCream from '../assets/images/Menu/Desserts/assorted-icecream.jpg';
import dessertGajarHalwa from '../assets/images/Menu/Desserts/gajar-halwa.jpg';
import dessertGulabJamun from '../assets/images/Menu/Desserts/gulab-jamun.jpg';
import dessertMalaiKulfi from '../assets/images/Menu/Desserts/malai-kulfi.jpg';
import dessertMasalaChaiIcecream from '../assets/images/Menu/Desserts/masala-chai-icecream.jpg';
import dessertPistachioIcecream from '../assets/images/Menu/Desserts/pistachio-icecream.jpg';


import menuSectionIcon from '../assets/icons/menu-section.png';

const MenuPage = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('starters');

  
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tabFromUrl = params.get('tab');
    if (tabFromUrl && Object.keys(menuData).includes(tabFromUrl)) {
      setActiveTab(tabFromUrl);
    } else {
      
      setActiveTab('starters');
    }
  }, [location.search]);

  
  const menuData = {
    starters: [
      {
        id: 1,
        name: "Braised Mutton Champ Enam Glaze",
        description: "Braised goat rack with maple and kokum glaze. Kokum is a fruit grown in kokan regions of Maharashtra.",
        details: "",
        image: starterBraisedMutton
      },
      {
        id: 2,
        name: "Chilli Chicken",
        description: "Crispy fried chicken tossed in a fiery Indo-Chinese sauce, diced with bell peppers and garnished with spring onions. A best health kick for food for fitness lovers.",
        details: "",
        image: starterChilliChicken
      },
      {
        id: 3,
        name: "Chilli Garlic Button Mushrooms",
        description: "Juicy button mushrooms stir-fried in a zesty garlic and chilli sauce with a hint of soy and a sprinkle of spring onions. A savory delight with a spicy kick.",
        details: "",
        image: starterChilliGarlicMushroom
      },
      {
        id: 4,
        name: "Fish Chilli Fry",
        description: "Red snapper marinated with Chinese spices deep-fried tossed with bell peppers, onions and a dash of lemon.",
        details: "",
        image: starterFishChilliFry
      },
      {
        id: 5,
        name: "Mac And Cheese Arrancini",
        description: "Macaroni and Cheese made in arrancini dumpling served with tomato salsa-our humble take on Italian arrancini.",
        details: "",
        image: starterMacAndCheese
      },
      {
        id: 6,
        name: "Pesto Kebab",
        description: "Kebabs made of Italian pesto basil sauce flavored with sun-dried tomatoes, almonds and cashew nuts and can be served Jain on request.",
        details: "",
        image: starterPestoKebab
      }
    ],
    'main-courses': [
      {
        id: 1,
        name: "Hand Pulled Butter Chicken Makhani",
        description: "The most trending Indian dish across the globe which is proud of Indian cuisine! Boneless chicken simmered in rich makhani gravy dusted off with dehydrated fenugreek.",
        details: "",
        image: mainButterChickenMakhani
      },
      {
        id: 2,
        name: "Prawns Kolapuri",
        description: "A classic dish of prawns sauteed with inhouse spicy Kolapuri spices.",
        details: "",
        image: mainPrawnsKolapuri
      },
      {
        id: 3,
        name: "Pan Toss Masala Shrooms Truffle Haze",
        description: "Assorted mushrooms with cream garlic truffle oil and served with aromatic truffle haze.",
        details: "",
        image: mainMasalaShrooms
      },
      {
        id: 4,
        name: "Paneer Bhurji",
        description: "Minced cottage cheese stir-fried with onions and tomato lightly spiced with freshly pounded coriander and chillies.",
        details: "",
        image: mainPaneerBhurji
      },
      {
        id: 5,
        name: "Hyderabadi Chicken",
        description: "Succulent chicken pieces cooked in tandoor simmered off with spices of Hyderabad.",
        details: "",
        image: mainHyderabadiChicken
      },
      {
        id: 6,
        name: "Amritsari Malai Kofta",
        description: "Cottage cheese dumplings, khoya, raisin, green cardamom in a creamy gravy and can be served Jain on request.",
        details: "",
        image: mainAmritsari
      }
    ],
    sides: [
      {
        id: 1,
        name: "3 Cheese Naan Baan Butter",
        description: "Mozzarella, parmesan, and smoked cheddar melted into soft tandoor naan, finished with a generous brushing of butter, fresh garlic, and coriander.",
        details: "",
        image: sideCheeseNaan
      },
      {
        id: 2,
        name: "Jeera Rice",
        description: "Fragrant basmati rice tempered with roasted cumin seeds. A comforting, flavorful hale that complements any main.",
        details: "",
        image: sideJeeraRice
      },
      {
        id: 3,
        name: "Mushroom Corn Rice",
        description: "A colorful medley of mushrooms, corn, and aromatic spices cooked with basmati rice—a flavorful, hearty vegetarian delight.",
        details: "",
        image: sideMushroomRice
      },
      {
        id: 4,
        name: "Plain Svaan Rice",
        description: "Steamed to soft, fluffy perfection, this simple staple lets the bold flavors of your curry shine through.",
        details: "",
        image: sidePlainRice
      },
      {
        id: 5,
        name: "Cucumber and Mint Raita",
        description: "Cool cucumber, crisp mint, and creamy yogurt blended into a refreshing side dish that balances spice with every bite.",
        details: "",
        image: sideRaita
      },
      {
        id: 6,
        name: "Naan",
        description: "Fluffy, hand-stretched flatbread cooked in our tandoor, offering a smoky char and the perfect accompaniment to hearty Indian gravies.",
        details: "",
        image: sideButterNaan
      }
    ],
    desserts: [
      {
        id: 1,
        name: "Assorted Ice Creams",
        description: "A classic medley of rich, creamy ice cream flavors, including vanilla bean, chocolate, and strawberry, served chilled and garnished with mint.",
        details: "",
        image: dessertAssortedIceCream
      },
      {
        id: 2,
        name: "Gajar Halwa",
        description: "A warm North Indian dessert made from grated carrots, ghee, milk, sweetened and topped with roasted cashews and almonds.",
        details: "",
        image: dessertGajarHalwa
      },
      {
        id: 3,
        name: "Gulab Jamun",
        description: "Soft milk-solid dumplings soaked in fragrant rose and cardamom syrup. An indulgent, melt-in-your-mouth delight.",
        details: "",
        image: dessertGulabJamun
      },
      {
        id: 4,
        name: "Malai Kulfi",
        description: "Traditional Indian ice cream made with condensed milk and slow-cooked with cardamom and pistachio, frozen on sticks for nostalgic flair.",
        details: "",
        image: dessertMalaiKulfi
      },
      {
        id: 5,
        name: "Indian Masala Chai Ice Cream",
        description: "A bold twist on dessert — smooth ice cream infused with the comforting blend of masala chai (cardamom, cinnamon, clove, and tea) essence.",
        details: "",
        image: dessertMasalaChaiIcecream
      },
      {
        id: 6,
        name: "Pistachio Ice Cream",
        description: "Creamy and nutty with a luxurious flavor of roasted pistachio. This treat offers subtle sweetness and a touch of crunch in every spoonful.",
        details: "",
        image: dessertPistachioIcecream
      }
    ]
  };

  const tabLabels = {
    'starters': 'Starters',
    'main-courses': 'Mains',
    'sides': 'Sides',
    'desserts': 'Desserts'
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    
    const newUrl = `${window.location.pathname}?tab=${tab}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  return (
    <div className="bg-white text-gray-900 dark:bg-dark-bg dark:text-white min-h-screen">
      {/* FULL MENU SECTION */}
      <main className="pt-24 pb-16 bg-gray-50 dark:bg-feedback-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* HEADER */}
          <div className="text-center mb-12">
            <img src={menuSectionIcon} alt="Menu Icon" className="h-6 mx-auto mb-2"/>
            <h1 className="text-4xl font-serif font-bold text-pistachio dark:text-pistachio">Our Full Menu</h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">Explore our vibrant Indian and Middle Eastern Cuisine</p>
          </div>

          {/* TABS */}
          <ul className="flex justify-center space-x-4 sm:space-x-8 mb-8">
            {Object.keys(tabLabels).map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-2 rounded-full text-lg font-medium transition ${
                    activeTab === tab
                      ? 'bg-pistachio text-white' // Active tab styling (pistachio background, white text)
                      : 'bg-gray-200 dark:bg-navbar-dark text-gray-700 dark:text-white hover:bg-pistachio-light hover:text-white dark:hover:bg-pistachio' // Inactive tab styling adjusted for white text in dark mode
                  }`}
                >
                  {tabLabels[tab]}
                </button>
              </li>
            ))}
          </ul>

          {/* CONTENT AREA */}
          <div className="space-y-8">
            {/* Added defensive check for menuData[activeTab] */}
            {menuData[activeTab] && menuData[activeTab].map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 bg-white dark:bg-navbar-dark rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-1/2 h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-serif font-semibold text-gray-800 dark:text-white mb-2">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 italic mb-1">
                    {item.description}
                  </p>
                  {item.details && ( // Only render if details exist
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.details}
                    </p>
                  )}
                </div>
              </div>
            ))}
            {!menuData[activeTab] && <p className="text-center text-gray-500 dark:text-gray-400">No menu items found for this category.</p>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MenuPage;