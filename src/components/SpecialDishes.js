import React from 'react';
import '../styles.scss';

function SpecialDishes(props) {
    console.log("props are ", props);
    let maxItem = 10
    let specialMenu = props.list.map((item, index) => {
        if(index<maxItem)
        {
            return (
                <li  className='item-card'>
                    <img src={item.strMealThumb} alt={item.strMeal} />
                    <h4>{item.strMeal}</h4>
                </li>
            );
        }
    });

    return (
        <section>
            <div className='specialdishes'>
                <h2>Special Dishes</h2>
                <p>Food is one of the basic necessities of life. Food contains nutrients—substances essential for the growth, repair, and maintenance of body tissues and for the regulation of vital processes. Nutrients provide the energy our bodies need to function.</p>
                <ul className='special-menu'>
                    {specialMenu}
                </ul>
            </div>
        </section>
    );
}

export default SpecialDishes;
