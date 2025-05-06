import React, { useEffect, useState, useLayoutEffect } from 'react';
import Todolist from "../Todolist/Todolist"
import Form from "../Form/Form";
import {Filter} from "../Filter/Filter";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

export const Main = () => {
    return (
        <main 
            className={`
                font-josefin w-full h-screen overflow-x-hidden px-6 
                bg-Light-Very-Light-Gray dark:bg-Dark-Very-Dark-Blue  
                sm:bg-[url('assets/bg-desktop-light.jpg')] sm:dark:bg-[url('assets/bg-desktop-dark.jpg')]
                bg-[url('assets/bg-mobile-light.jpg')] dark:bg-[url('assets/bg-mobile-dark.jpg')] 
                bg-no-repeat bg-[length:100vw_30vh] sm:bg-[length:100vw_37.5vh]    
                
            `} 
        >
            <section className="max-w-[540px] mx-auto">
                <Header/>                
                <Form/>
                <Todolist />
                <Filter/>
                <Footer/>
            </section>
        </main>
    )
}
