import React from 'react';
import Button from '../Shared/Button';



const Category = () => {
    return (
        <div className='mt-1 overflow-hidden'>
            <div className='bg-color p-5 min-h-[550px] sm:min-h-[650px] rounded-3xl'>
                <h1 className='text-center text-black mb-4 dark:text-white text-3xl font-bold'>Categories</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className={`py-10 pl-5 bg-gradient-to-br ${category.bgGradient} ${category.textColor} rounded-3xl relative h-[320px] flex items-end ${category.colSpan || ''}`}
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
