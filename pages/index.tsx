import React from 'react';
import MainLayout from '../layouts/MainLayout';

export default function index() {
  return (
    <>
      <MainLayout>
        <div className="center">
          <h1>Главная страница</h1>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eaque doloremque quo
            perferendis! Optio, eaque atque. Velit beatae mollitia repellat officiis rerum,
            dignissimos tempora repudiandae, maxime dolorem ullam voluptatem laboriosam? Beatae
            dolor sequi voluptatem a. ores molestias, nam accusamus accusantium voluptates! Rerum,
            doloribus. Quibusdam saepe corrupti quis dolor inventore animi, ex iusto reprehenderit?
          </h3>
        </div>
        <style jsx>
          {`
            .center {
              margin-top: 150px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
          `}
        </style>
      </MainLayout>
    </>
  );
}
