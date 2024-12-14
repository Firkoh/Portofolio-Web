import { useState } from 'react'
import reactL from './assets/react.svg'
import firkoh from './assets/Firgenius K Hombore.png'
import Ig from './assets/Instagram_icon.png'
import Wa from './assets/whatsapp.svg'
import DP from './assets/DP.png'
import git from './assets/git.svg'
import figma from './assets/figma.svg'
import wordpress from './assets/wordpress.svg'
import js from './assets/js.svg'
import tail from './assets/tailwind.svg'  
import boot from './assets/boot.svg'
import email from './assets/gmail-svgrepo-com.svg'
import html from './assets/html.svg'
import css from './assets/css.svg'
import arc from './assets/achievement.svg'


const nS = "Firgenius Kolose Hombore";
function App() {
  return (
    <div className=" bg-gradient-to-l from-amber-500 to-amber-800  font-mono">
      <section className="text-center px-4 md:px-0">
  <h1 className="text-4xl font-bold text-white hover:scale-110">Portofolio</h1>
  <p className="text-2xl mt-2 text-white hover:scale-110">Selamat Datang Di Web Portofolio Saya</p>
</section>
      <section className="mt-12 md:flex md:items-center md:justify-between mx-8">
  <div className="md:w-1/2 flex justify-start md:justify-center">
  <a href={firkoh} target='_self'>
    <img 
      src={firkoh} 
      className="rounded-full w-70 md:w-80 mt-6 md:mt-0 hover:opacity-75 hover:scale-110 transition-transform duration-300" 
      alt="Firgenius Kolose Hombore" 
    />
</a>
  </div>
<div className="md:w-1/2 md:ml-10 mt-6 md:mt-0">
  <h2 className="text-3xl font-semibold text-white hover:opacity-75 hover:scale-110 transition-transform duration-300">
    Tentang Saya
  </h2>
  <p className="mt-4 text-xl text-white hover:opacity-75 hover:scale-110 transition-transform duration-300">
    Nama saya <a className="hover:opacity-75 hover:scale-110 transition-transform duration-300" href={firkoh} target="_self">{nS}</a>, seorang pengembang web yang berpengalaman dalam membangun aplikasi web dengan menggunakan teknologi-teknologi terbaru seperti React, JavaScript, dan HTML. Saya memiliki kemampuan dalam membangun aplikasi web yang cepat, aman, dan mudah digunakan. Saya juga memiliki kemampuan dalam mengembangkan aplikasi web yang skalabel dan dapat diintegrasikan dengan teknologi-teknologi lainnya.
  </p>
</div>
</section>
      <section className="mx-8 mt-12 md:flex md:justify-between">
        <div className="md:w-1/2 hover:translate-x-2 hover:opacity-75 hover:scale-110 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white">Skill</h2>
          <ol type='number' start='1' className="mt-4 space-y-2 text-xl text-white">
            <li>HTML (Intermediate)</li>
            <li>CSS (Intermediate)</li>
            <li>JavaScript (Intermediate)</li>
            <li>Tailwind CSS (Basic)</li>
            <li>Bootstrap (Intermediate)</li>
            <li>Figma (Basic)</li>
            <li>React (Basic)</li>
            <li>Git (Basic)</li>
            <li>WordPress (Intermediate)</li>
          </ol>
        </div>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:ml-10 mt-6 md:mt-0">
    <div className="flex items-center justify-center">
      <img src={html} className="hover:bg-[#e34c26] w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt={html} />
    </div>
    <div className="flex items-center justify-center">
      <img src={css} className="hover:bg-[#563d7c] w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt={css} />
    </div>
    <div className="flex items-center justify-center">
      <img src={js} className="hover:bg-[#F7DF1E] w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt="JavaScript" />
    </div>
    <div className="flex items-center justify-center">
      <img src={tail} className="hover:bg-white w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt="Tailwind CSS" />
    </div>
    <div className="flex items-center justify-center">
      <img src={boot} className="hover:bg-[#563d7c] w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt="Bootstrap" />
    </div>
    <div className="flex items-center justify-center">
      <img src={figma} className="w-16 h-16 md:w-20 md:h-20 hover:bg-blue-500 p-2 rounded transition duration-300" alt="Figma" />
    </div>
    <div className="flex items-center justify-center">
      <img src={reactL} className="w-16 h-16 md:w-20 md:h-20 hover:animate-spin p-2 rounded transition duration-100" alt="React" />
    </div>
    <div className="flex items-center justify-center">
      <img src={git} className="w-16 h-16 md:w-20 md:h-20 hover:bg-red-700 p-2 rounded transition duration-300" alt="Git" />
    </div>
    <div className="flex items-center justify-center">
      <img src={wordpress} className="hover:bg-blue-400 w-16 h-16 md:w-20 md:h-20 p-2 rounded transition duration-300" alt="WordPress" />
    </div>
  </div>
</section>
      <section className="ml-8 mt-12 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 hover:translate-x-2 hover:opacity-75 hover:scale-110 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white">Pendidikan</h2>
          <ul className="mt-4 space-y-4 text-xl text-white">
            <li>TK - TK Kartika Mimika (2007-2008)</li>
            <li>SD - SDN 4 Mimika (2008-2014)</li>
            <li>SMP - SMPN 2 Mimika (2014-2017)</li>
            <li>SMA - SMAN 2 Sorong (2017-2018)</li>
            <li>SMA - SMAN 1 Fakfak (2018-2020)</li>
            <li>S1 - Sistem Informasi, Universitas Victory Sorong (2020-2024)</li>
          </ul>
        </div>
        <div className='md:w-1/2 flex items-center justify-center'>
          <img src={DP} className="w-20 md:w-30 mt-6 md:mt-0 rounded-full hover:animate-bounce" alt="Firgenius Kolose Hombore" />
        </div>
      </section>
      <section className="ml-8 mt-12 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 hover:translate-x-2 hover:opacity-75 hover:scale-110 transition-transform duration-300">
          <h2 className="text-3xl font-semibold text-white">Pencapaian</h2>
          <ul className="mt-4 space-y-4 text-xl text-white">
            <li>Mengikuti kursus dasar HTML di CodeLearns</li>
            <li>Sedang mengikuti kursus fullstack development di UDEMY</li>
          </ul>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <img src={arc} className="w-10 md:w-20 mt-6 md:mt-0 rounded-full hover:animate-spin" alt={arc} />
        </div>
      </section>
      <footer className="mt-12 text-center text-white"><p>Hubungi saya di</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a className='hover:animate-spin' href="https://www.instagram.com/firgenius_hombore/profilecard/?igsh=aG5xcHZzd3Rwandx " target="_blank" rel="noreferrer"><img src={Ig} className="w-10 h-10 rounded-full" alt="Firgenius Kolose Hombore" /></a>
          <a className='hover:animate-bounce' href="https://wa.me/6282248766797?text=Halo%20saya%20ingin%20membuat%20web%20tentang%20" target="_blank" rel="noreferrer"><img src={Wa} className="w-10 h-10 rounded-full" alt="WhatsApp Contact" /></a>
          <a className='hover:scale-110' href="mailto:firgeniusigeni7799@gmail.com?subject=Halo%20saya%20ingin%20membuat%20web%20tentang%20" target="_blank" rel="noreferrer"><img src={email} className="w-10 h-10 rounded-full" alt="Email Contact" /></a>
        </div>
      <br className='h-20'></br>
      </footer>
    </div>
  )
}

export default App
