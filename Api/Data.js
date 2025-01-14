import VR from '../src/assets/hero/vr.png'
import Macbook from '../src/assets/hero/macbook.png'
import headphone from '../src/assets/hero/headphone.png'
import Image1 from '../src/assets/category/earphone.png';
import Image2 from '../src/assets/category/watch.png';
import Image3 from '../src/assets/category/macbook.png';
import Image4 from '../src/assets/category/gaming.png';
import Image5 from '../src/assets/category/vr.png';
import Image6 from '../src/assets/category/speaker.png';

export const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Collections",
        link: "/collection",
    },
    {
        id: 3,
        name: "About",
        link: "/about",
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact",
    },
];

export const SmallMenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Collections",
        link: "/collection",
    },
    {
        id: 3,
        name: "About",
        link: "/about",
    },
    {
        id: 4,
        name: "Contact",
        link: "/contact",
    },
    {
        id: 5,
        name: "My Profile",
        link: "/profile",
    },
    {
        id: 6,
        name: "Orders",
        link: "/order",
    },
    {
        id: 6,
        name: "Logout",
        link: "/logout",
    },
]

export const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "2021-12-31",
    image: headphone,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
    bgColor: "#f42c37"
}

export const HeroData = [
    {
        id: 1,
        img: headphone,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Headphone",
    },
    {
        id: 2,
        img: VR,
        subtitle: "Beats Solo",
        title: "Wireless",
        title2: "Virtual",
    },
    {
        id: 3,
        img: Macbook,
        subtitle: "Beats Solo",
        title: "Branded",
        title2: "Laptop",
    },
]

const categories = [
    {
        title: 'Earphone',
        subtitle: 'Enjoy',
        description: 'Earphone',
        image: Image1,
        bgGradient: 'from-black/90 to-black/10',
        textColor: 'text-white',
        button: {
            bgColor: 'bg-primary',
            textColor: 'text-white',
        },
        imageStyles: 'w-[320px] absolute bottom-0',
    },
    {
        title: 'Gadget',
        subtitle: 'Enjoy',
        description: 'Gadget',
        image: Image2,
        bgGradient: 'from-brandYellow/90 to-brandYellow/10',
        textColor: 'text-white',
        button: {
            bgColor: 'bg-white',
            textColor: 'text-brandYellow',
        },
        imageStyles: 'w-[320px] absolute -right-4 top-2 lg:top-[40px]',
    },
    {
        title: 'Laptop',
        subtitle: 'Enjoy',
        description: 'Laptop',
        image: Image3,
        bgGradient: 'from-primary/90 to-primary/10',
        textColor: 'text-white',
        button: {
            bgColor: 'bg-white',
            textColor: 'text-primary',
        },
        imageStyles: 'w-[250px] absolute top-1/2 -translate-y-1/2 -right-0',
        colSpan: 'col-span-2',
    },
    {
        title: 'PS4',
        subtitle: 'Enjoy',
        description: 'Gaming',
        image: Image4,
        bgGradient: 'from-gray-400/90 to-gray-100',
        textColor: 'text-gray-700',
        button: {
            bgColor: 'bg-primary',
            textColor: 'text-white',
        },
        imageStyles: 'w-[250px] absolute top-1/2 -translate-y-1/2 -right-0',
        colSpan: 'col-span-2',
    },
    {
        title: 'VR',
        subtitle: 'Enjoy',
        description: 'Headset',
        image: Image5,
        bgGradient: 'from-brandGreen/90 to-brandGreen/10',
        textColor: 'text-white',
        button: {
            bgColor: 'bg-white',
            textColor: 'text-brandGreen',
        },
        imageStyles: 'w-[320px] absolute -right-4 top-2 lg:top-[40px]',
    },
    {
        title: 'VR',
        subtitle: 'Enjoy',
        description: 'Headset',
        image: Image6,
        bgGradient: 'from-brandBlue/90 to-brandBlue/10',
        textColor: 'text-white',
        button: {
            bgColor: 'bg-white',
            textColor: 'text-brandGreen',
        },
        imageStyles: 'w-[320px] absolute bottom-0 right-0',
    },
];