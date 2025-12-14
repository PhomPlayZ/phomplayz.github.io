"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./404.module.css";

export default function Custom404() {
  const [pos, setPos] = useState({ top: 50, left: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPos({
        top: Math.random() * 80,   // ไม่ให้หลุดจอ
        left: Math.random() * 80,
      });
    }, 700); // ปรับความกวน (ยิ่งน้อยยิ่งบ้า)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>

      {/* NOT FOUND วิ่งมั่ว */}
      <div
        className={styles.randomWrapper}
        style={{
          top: `${pos.top}%`,
          left: `${pos.left}%`,
        }}
      >
        <span className={styles.notFound}>NOT FOUND</span>
      </div>

      <p className={styles.message}>
        ระบบไม่พบหน้าที่คุณต้องการ  
        <br />
        คุณหลงทาง!!
      </p>

      <Link href="/" className={styles.homeButton}>
        [ กลับบ้านนนน ]
      </Link>
    </div>
  );
}
