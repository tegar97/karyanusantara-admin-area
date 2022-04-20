import React from 'react'
import Card from '../components/card/card';

function Home() {


  return (
    <main className="flex-grow wrapper min-h-screen py-12 px-12 ml-5">
      <div className="mt-5">
        <h1 className="text-4xl font-bold mb-30" style={{ color: "#0C145A" }}>
          Overview
        </h1>
        <div className="grid grid-cols-3 gap-4 ">
          
          <Card title={"Total product"} value="0" />
          <Card title={"Product menunggu review"} value="0" />
        </div>
      </div>
    </main>
  );
}

export default Home