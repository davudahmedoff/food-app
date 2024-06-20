import React, { Suspense } from "react";
import style from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../components/meals-comp/meals-grid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const MealPAge = () => {
  return (
    <>
      <header className={style.header}>
        <h1>
          Delicious meals,created{" "}
          <span className={style.highlight}>by you </span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself.It is easy and fun!
        </p>
        <p className={style.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main className={style.main}>
        <Suspense
          fallback={<p className={style.loading}>Fethcing meals ...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealPAge;
