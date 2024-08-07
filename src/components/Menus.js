import React, { useState, useEffect } from 'react'
import Hero from './Hero';
import SpecialDishes from './SpecialDishes';
import FilteredDishes from './FilteredDishes';

function Menus() {
    let [menu, setMenu] = useState([])
    let [category, setCategory] = useState([])
    async function getMenu() {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json();
        setMenu(data.meals);
    }
    useEffect(() => {
        const fetchData = async () => {
            getMenu()
        };
        fetchData();
    }, []);
    console.log("Menus are ", menu)


    async function getCategory() {
        const API_CATEGORY = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response2 = await fetch(API_CATEGORY);
        let data2 = await response2.json();
        setCategory(data2.categories);
    }
    useEffect(() => {
        const fetchData2 = async () => {
            getCategory();
        };
        fetchData2();
    }, []);
    console.log("Special Category are" , category);
    return (
        <div>
            <Hero />
            <SpecialDishes list={menu} />
            <FilteredDishes/>
        </div>
    )
}

export default Menus