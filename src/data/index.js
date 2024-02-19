import { PizzaHutLogo, StarbucksLogo, McdonaldsLogo,
    DominosLogo, KFCLogo, HokbenLogo, KopiKenanganLogo, 
    MatahariLogo, PaperLunchLogo, SegariLogo,
    DominosBanner, StarbucksBanner, KFCBanner, 
    BurgerIcon, DrinkIcon, GroceriesIcon, StarbucksReward,
    KFCRewards, SegariRewards, DominosRewards, HokbenRewards,
    PaperLunchRewards, MatahariRewards, KopiKenanganRewards } from '../assets';


export const dataCategories = [
    {
        name: "Food",
        icon: BurgerIcon
    },{
        name: "Groceries",
        icon: DrinkIcon
    },{
        name: "Beverages",
        icon: GroceriesIcon
    },{
        name: "Beveragess",
        icon: GroceriesIcon
    },{
        name: "Beveragesss",
        icon: GroceriesIcon
    }
]

export const dataRewards = [
    {
        company_name: "Starbucks",
        company_logo: StarbucksLogo,
        rewards_title: "Monday Mood Booster Starbucks",
        point: "250",
        category: "Beverages",
        banner: StarbucksReward
    },{
        company_name: "KFC",
        company_logo: KFCLogo,
        rewards_title: "KFC Value Serbu",
        point: "172",
        category: "Food",
        banner: KFCRewards
    },{
        company_name: "Segari",
        company_logo: SegariLogo,
        rewards_title: "Poromo PASTISEGAR",
        point: "104",
        category: "Groceries",
        banner: SegariRewards
    },{
        company_name: "Domino's Pizza",
        company_logo: DominosLogo,
        rewards_title: "Domino’s: All i want for Christmas",
        point: "53",
        category: "Food",
        banner: DominosRewards
    },{
        company_name: "Hokben",
        company_logo: HokbenLogo,
        rewards_title: "HokBen: Pay Day",
        point: "147",
        category: "Food",
        banner: HokbenRewards
    },{
        company_name: "Paper Lunch",
        company_logo: PaperLunchLogo,
        rewards_title: "SENIN HEMAT",
        point: "104",
        category: "Food",
        banner: PaperLunchRewards
    },{
        company_name: "Matahari",
        company_logo: MatahariLogo,
        rewards_title: "Weekend SALE!",
        point: "74",
        category: "Groceries",
        banner: MatahariRewards
    },{
        company_name: "Kopi Kenangan",
        company_logo: KopiKenanganLogo,
        rewards_title: "HARMANAS",
        point: "87",
        category: "Food",
        banner: KopiKenanganRewards
    },
]

export const dataSliderBanner = [
    {
      company_name: "Domino's",
      image: DominosBanner
    },{
      company_name: "Starbucks",
      image: StarbucksBanner
    },{
      company_name: "KFC",
      image: KFCBanner
    },{
      company_name: "Domino's",
      image: DominosBanner
    },{
      company_name: "Starbucks",
      image: StarbucksBanner
    },{
      company_name: "KFC",
      image: KFCBanner
    }
]

export const dataPromo = [
    {
        company_name : 'Pizza Hut',
        logo : PizzaHutLogo
    },{
        company_name: 'Starbucks',
        logo : StarbucksLogo
    },{
        company_name: "Mcdonald's",
        logo : McdonaldsLogo
    },{
        company_name: "Domino's Pizza",
        logo : DominosLogo
    },{
        company_name: "KFC",
        logo : KFCLogo
    },{
        company_name: "HokBen",
        logo : HokbenLogo
    }
]

export const dataTable = [
    {
      key: '1',
      merchant: 'John Brown',
      merchant_logo: StarbucksLogo,
      date: '25 December 2024',
      time: '10:24',
      point: '200'
    },{
      key: '2',
      merchant: 'Jim Green',
      merchant_logo: KFCLogo,
      date: '25 December 2024',
      time: '11:22',
      point: '200'
    },{
      key: '3',
      merchant: 'Joe Black',
      merchant_logo: DominosLogo,
      date: '25 December 2024',
      time: '09.22',
      point: '200'
    },{
      key: '4',
      merchant: 'Jim Red',
      merchant_logo: PaperLunchLogo,
      date: '25 December 2024',
      time: '23.44',
      point: '200'
    },{
    key: '5',
    merchant: 'Joe Black',
    merchant_logo: KopiKenanganLogo,
    date: '25 December 2024',
    time: '09.22',
    point: '200'
  },{
    key: '6',
    merchant: 'Jim Red',
    merchant_logo: MatahariLogo,
    date: '25 December 2024',
    time: '23.44',
    point: '200'
  },
];

export const dataVoucherDetails = [
    {
        company_name: 'Starbucks',
        company_logo: StarbucksLogo,
        expire_date: '30 Februray 2024 - 07 March 2024',
        voucher_name: 'STARBUCKS BUY ONE GET ONE',
        voucher_desc: 'Indulge in the ultimate coffee experience with our exclusive Starbucks Buy One Get One (BOGO) offer! Savor the rich flavors of your favorite handcrafted beverages while enjoying the delightful perk of getting a second one on the house. Embrace the joy of sharing and make every sip a moment to remember. Hurry, this limited-time offer is your perfect excuse to treat yourself and a friend to the comforting warmth and deliciousness of Starbucks. Terms and conditions apply; visit our stores or website for more details. Cheers to twice the enjoyment at Starbucks!',
        benefit: [
            {
                title: 'Double the Enjoyment',
                desc: 'With the BOGO voucher, you get the opportunity to enjoy two Starbucks beverages for the price of one. This means you can savor your favorite coffee or try a new drink without worrying about the additional cost.'
            },{
                title: 'Perfect for Sharing Moments',
                desc: "The BOGO voucher is ideal for sharing moments with friends, family, or colleagues. Whether it's catching up over coffee or surprising a loved one with their favorite Starbucks drink, the voucher enhances the social aspect of enjoying Starbucks together."
            },{
                title :"Exploration of Flavors",
                desc: "Use the BOGO voucher to explore a variety of flavors and beverages. Try a different coffee blend, experiment with various syrups, or opt for a seasonal specialty drink. This promotion encourages customers to broaden their taste preferences"
            }
        ],
        steps :[
            {
                title: 'Visit Starbucks:',
                desc: 'Swing by any participating Starbucks store.'
            },{
                title: 'Order Your Favorite:',
                desc: "Choose your go-to handcrafted beverage from the menu."
            },{
                title: 'Mention BOGO at Checkout:',
                desc: "Inform the barista you're here for the Buy One Get One deal when placing your order."
            },{
                title: 'Enjoy the Extra Treat:',
                desc: 'Pay for one drink and savor a second one for free. Limited time only, so seize the moment!'
            }
        ],
        terms :[
            "This promotion is valid for a limited time only and is subject to change without notice.",
            "To avail of the Buy One Get One (BOGO) offer, customers must purchase a qualifying beverage at the regular price to receive a second beverage of equal or lesser value at no additional cost.",
            "The BOGO offer is applicable to select handcrafted beverages and sizes, as determined by Starbucks. Exclusions may apply.",
            "This promotion is valid at participating Starbucks stores only. Please check with your local store to confirm participation."
        ]
    }
]