import React from 'react'
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItem from '../components/FoodItem';
import Card from '../components/Card';
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <CategoryMenu></CategoryMenu>
    <FoodItem></FoodItem>
    <Card></Card>
    
    </>
  )
}
