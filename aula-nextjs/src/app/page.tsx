"use client";
import React, { useEffect, useState } from "react";


import styles from "./page.module.css";

//export default function Home() { 

function app() {
  const [texto, setText] = useState('');

  useEffect(() => {
    if (texto.toLowerCase() === 'naruto'){
    alert('Você digitou naruto');
  }

}, [texto]);
return (
  
  <button className={styles.page}>
    <input
    type="text"
    value={texto}
    onChange={(e) => setText(e.target.value)}
    placeholder="Digite algo..."
    ></input>
</button>
);
}
export default app;