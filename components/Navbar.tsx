import React from 'react';
import Link from 'next/link';

const menuItems = [
  { text: 'Главная', href: '/' },
  { text: 'Посты', href: '/posts' },
  { text: 'Добавить пост', href: '/addPost' },
];

export default function Navbar() {
  return (
    <div className = 'navbar'>
      {menuItems.map(({ text, href }, index) => {
       return <Link href={href}>
          <a key={index}>{text}</a>
        </Link>;
      })}
    </div>
  );
}
