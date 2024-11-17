import React from 'react';
import Image1 from '../assets/category/earphone.png';
import Image2 from '../assets/category/watch.png';
import Image3 from '../assets/category/macbook.png';
import Image4 from '../assets/category/gaming.png';
import Image5 from '../assets/category/vr.png';
import Image6 from '../assets/category/speaker.png';
import Button from '../Shared/Button';

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
        imageStyles: 'w-[320px] absolute -right-12 top-2 lg:top-[40px]',
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
        imageStyles: 'w-[200px] md:w-[320px] absolute right-0',
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
        imageStyles: 'w-[200px] md:w-[320px] absolute -right-4 lg:top-[40px]',
    },
];

const Category = () => {
    return (
        <div className='mt-1 overflow-hidden'>
            <div className='bg-color p-5 min-h-[550px] sm:min-h-[650px] rounded-3xl'>
                <h1 className='text-center text-black mb-4 dark:text-white text-3xl font-bold'>Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`py-10 pl-5 bg-gradient-to-br ${category.bgGradient} ${category.textColor} rounded-3xl relative h-[280px] flex items-end ${category.colSpan || ''}`}
                        >
                            <div>
                                <div className='mb-4'>
                                    <p className='mb-[2px] text-white'>{category.subtitle}</p>
                                    <p className='text-2xl font-semibold mb-[2px]'>With</p>
                                    <p className={`text-4xl xl:text-5xl font-bold opacity-20 mb-2 ${category.textColor}`}>
                                        {category.description}
                                    </p>
                                    <Button
                                        text="Browse"
                                        bgColor={category.button.bgColor}
                                        textColor={category.button.textColor}
                                    />
                                </div>
                            </div>
                            <img src={category.image} alt={category.title} className={category.imageStyles} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Category;
