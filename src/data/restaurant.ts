import type { RestaurantData } from "../types/restaurant";

export const restaurantData: RestaurantData = {
  restaurant: {
    name: "Cardamom House",
    tagline: "Slow brunch. Strong coffee. Lisbon, since 2021.",
    address: "Rua da Boavista 84, 1200-066 Lisboa, Portugal",
    hours: {
      monday: "Closed",
      tuesday: "08:00 – 15:00",
      wednesday: "08:00 – 15:00",
      thursday: "08:00 – 15:00",
      friday: "08:00 – 16:00",
      saturday: "09:00 – 17:00",
      sunday: "09:00 – 17:00",
    },
    brand_color: "#B45309",
    phone: "+351 21 123 4567",
    instagram: "@cardamomhouse",
  },

  today_special: {
    item_id: "brunch_07",
    blurb:
      "Chef's pick today: our Saffron French Toast with cardamom syrup.",
  },

  categories: [
    {
      id: "brunch",
      name: "Brunch",
      description: "Served all day. Local eggs, slow-cooked everything.",
      items: [
        {
          id: "brunch_01",
          name: "Shakshuka",
          description:
            "Two eggs poached in spiced tomato and pepper sauce, served with sourdough.",
          price: 11.5,
          tags: ["V"],
          image:"https://images.unsplash.com/photo-1542895364-1f38d277f031?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2hha3NodWthfGVufDB8fDB8fHww"
        },
        {
          id: "brunch_02",
          name: "Avocado Toast",
          description:
            "Smashed avocado, lemon, chili flakes, hemp seeds, soft poached egg.",
          price: 9.8,
          tags: ["V"],
          image:"https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZvY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww"
        },
        {
          id: "brunch_03",
          name: "Full Lisbon Breakfast",
          description:
            "Eggs your way, chorizo, grilled tomato, beans, sourdough, salted butter.",
          price: 14.2,
          tags: [],
          image:"https://images.unsplash.com/photo-1729553310340-02b916e68ed5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnVsbCUyMExpc2JvbiUyMEJyZWFrZmFzdHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          id: "brunch_04",
          name: "Acai Bowl",
          description:
            "Acai, banana, granola, blueberries, honey, coconut.",
          price: 10.4,
          tags: ["V", "GF"],
          image:"https://images.unsplash.com/photo-1672959202028-51e3b71255bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFjYWklMjBCb3dsfGVufDB8fDB8fHww"
        },
        {
          id: "brunch_05",
          name: "Bircher Muesli",
          description:
            "Oats soaked overnight in apple juice with cinnamon, apple, almonds, yogurt.",
          price: 8.2,
          tags: ["V"],
          image:"https://media.istockphoto.com/id/1203696332/photo/bircher-muesli-or-overnight-oatmeal-with-apple-banana-and-blueberries-in-gray-bowl-top-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=AtI2_TRlwgoLcSUT3SRW3OH7FtTlnG5RWNdThk2PbXk="
        },
        {
          id: "brunch_06",
          name: "Eggs Benedict",
          description:
            "Two poached eggs, smoked salmon or ham, hollandaise, on toasted muffins.",
          price: 13.6,
          tags: [],
          image:"https://images.unsplash.com/photo-1712746785649-11ffe27af62e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RWdncyUyMEJlbmVkaWN0fGVufDB8fDB8fHww"
        },
        {
          id: "brunch_07",
          name: "Saffron French Toast",
          description:
            "Brioche soaked in saffron-cardamom custard, pistachios, mascarpone, honey.",
          price: 12.8,
          tags: ["V"],
          image:"https://images.unsplash.com/photo-1595044643502-616eeebbdff3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FmZnJvbiUyMEZyZW5jaCUyMFRvYXN0fGVufDB8fDB8fHww"
        },
        {
          id: "brunch_08",
          name: "Veggie Hash",
          description:
            "Sweet potato, kale, peppers, two eggs, smoked paprika, avocado.",
          price: 12.2,
          tags: ["V", "GF"],
          image:"https://images.unsplash.com/photo-1606791422814-b32c705e3e2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmVnZ2llJTIwSGFzaHxlbnwwfHwwfHx8MA%3D%3D"
        },
      ],
    },

    {
      id: "sandwiches",
      name: "Sandwiches & Toasties",
      description: "Served on house sourdough or rye.",
      items: [
        {
          id: "sand_01",
          name: "Croque Monsieur",
          description:
            "Ham, gruyere, béchamel, mustard, on grilled sourdough.",
          price: 10.2,
          tags: [],
          image:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2FuZHdpY2hlcyUyMCUyNiUyMFRvYXN0aWVzfGVufDB8fDB8fHww"
        },
        {
          id: "sand_02",
          name: "Mushroom Melt",
          description:
            "Garlic mushrooms, taleggio, truffle oil, rocket, on rye.",
          price: 11.4,
          tags: ["V"],
          image:"https://plus.unsplash.com/premium_photo-1739906794633-71adada97314?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVzaHJvb20lMjBNZWx0fGVufDB8fDB8fHww"
        },
        {
          id: "sand_03",
          name: "Smoked Salmon Bagel",
          description:
            "Cream cheese, dill, capers, red onion, smoked salmon.",
          price: 11.8,
          tags: [],
          image:"https://images.unsplash.com/photo-1726733860096-34a3fbae77c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U21va2VkJTIwU2FsbW9uJTIwQmFnZWx8ZW58MHx8MHx8fDA%3D"
        },
        {
          id: "sand_04",
          name: "Tuna Crunch",
          description:
            "Tuna, celery, cornichons, mayo, lettuce, on sourdough.",
          price: 9.6,
          tags: [],
          image:"https://images.unsplash.com/photo-1717568511283-6c7dd9858d92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHVuYSUyMENydW5jaHxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
          id: "sand_05",
          name: "Halloumi & Harissa",
          description:
            "Grilled halloumi, harissa mayo, slaw, rocket, on sourdough.",
          price: 10.8,
          tags: ["V", "spicy"],
          image:"https://media.istockphoto.com/id/1386335408/photo/roasted-vegetable-and-halloumi-wrap-served-with-sweet-potato-wedges.webp?a=1&b=1&s=612x612&w=0&k=20&c=G7yeTB9nvCWXPI-sHDHOdr1mcT-aU557L_B6_2XniY0="
        },
      ],
    },

    {
      id: "drinks",
      name: "Drinks",
      description:
        "All coffee is single-origin from Reverb Roasters, Porto.",
      items: [
        {
          id: "drink_01",
          name: "Espresso",
          description: "Double shot.",
          price: 1.8,
          tags: [],
          image:"https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RXNwcmVzc298ZW58MHx8MHx8fDA%3D"
        },
        {
          id: "drink_02",
          name: "Flat White",
          description: "Double shot, silky milk.",
          price: 3.2,
          tags: [],
          image:"https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmxhdCUyMFdoaXRlfGVufDB8fDB8fHww"
        },
        {
          id: "drink_03",
          name: "Cardamom Latte",
          description:
            "House blend, cardamom syrup, milk of your choice.",
          price: 3.8,
          tags: [],
          image:"https://images.unsplash.com/photo-1623839014265-91b83ec96b92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENhcmRhbW9tJTIwTGF0dGV8ZW58MHx8MHx8fDA%3D"
        },
        {
          id: "drink_04",
          name: "Matcha",
          description: "Stone-ground Uji matcha, milk of your choice.",
          price: 4.2,
          tags: ["V"],
          image:"https://media.istockphoto.com/id/1325991061/photo/matcha-latte-green-milk-foam-cup-on-wood-table-at-cafe-trendy-powered-tea-trend-from-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=sj_8lsjhs0vUmbAVZzTgPbpnHhdXN3YJXXX9a8UCFn8="
        },
        {
          id: "drink_05",
          name: "Fresh OJ",
          description: "Pressed to order.",
          price: 4.4,
          tags: ["V", "GF"],
          image:"https://images.unsplash.com/photo-1707569517904-92b134ff5f69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZyZXNoJTIwT0p8ZW58MHx8MHx8fDA%3D"
        },
        {
          id: "drink_06",
          name: "Mint Lemonade",
          description: "House-made, lightly sparkling.",
          price: 3.8,
          tags: ["V", "GF"],
          image:"https://plus.unsplash.com/premium_photo-1720117971143-a12edb49530b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1pbnQlMjBMZW1vbmFkZXxlbnwwfHwwfHx8MA%3D%3D"
        },
      ],
    },

    {
      id: "sides",
      name: "Sides & Extras",
      description: "",
      items: [
        {
          id: "side_01",
          name: "Side of Bacon",
          price: 3.2,
          tags: [],
          image:"https://media.istockphoto.com/id/1266579373/photo/fried-crunchy-streaky-bacon-pieces-in-a-cast-iron-skillet.jpg?s=612x612&w=0&k=20&c=JfF17KSrfa4KzcQfv2EU8zf0J9pGoG3BziHqGyi7QNM="
        },
        {
          id: "side_02",
          name: "Side of Sourdough",
          price: 2.4,
          tags: ["V"],
          image:"https://media.istockphoto.com/id/2291488237/photo/fresh-baked-bread-served-in-a-basket-at-a-local-cafe.jpg?s=612x612&w=0&k=20&c=9r-XpSn8gYzAjcVT_YZuiQisOr_6QtNHUqNeE8qTA-w="
        },
        {
          id: "side_03",
          name: "Extra Egg",
          price: 1.6,
          tags: ["V"],
          image:"https://media.istockphoto.com/id/532850318/photo/code-numbers-printed-in-egg-nto-glass-bowl.jpg?s=612x612&w=0&k=20&c=-kUlkkRAHW8qzS_5N4pW3L5qPlsHJN-Sj5rq0lH1gJg="
        },
        {
          id: "side_04",
          name: "Side of Avocado",
          price: 2.8,
          tags: ["V", "GF"],
          image:"https://media.istockphoto.com/id/2284996965/photo/delicious-guacamole-served-with-fresh-vibrant-vegetables.jpg?s=612x612&w=0&k=20&c=GudifxW1Gl-74ylowlDv9dhcaMGW8bwl9rpDmLYzppE="
        },
      ],
    },
  ],
};
