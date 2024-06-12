import './App.css';
import Navbar from '../navbar/navbar';
import Hero from '../hero/hero';
import FeaturedArticles from '../featured-articles/featured-articles';
import Beached from '../beached/beached';
import TopArticles from '../top-articles/top-articles';
import Inbox from '../inbox/inbox';
import Footer from '../footer/footer';

import smartwatch from '../../images/smartwatch.png';
import headphone from '../../images/headphone.png';
import application from '../../images/applications.png';
import covid from '../../images/covid.png';
import iphone from '../../images/iphone.png';
import laptop from '../../images/laptop.png';
import avatar1 from '../../images/avatar-1.png';
import avatar2 from '../../images/avatar-2.png';
import avatar3 from '../../images/avatar-3.png';
import avatar4 from '../../images/avatar-4.png';
import avatar5 from '../../images/avatar-5.png';
import avatar6 from '../../images/avatar-6.png';
import camel from '../../images/camel.png';
import chinaW from '../../images/china-woman.png';
import sea from '../../images/sea.png';
import shoesW from '../../images/shoes-woman.png';
import car from '../../images/car.png';

function App() {
  const data = [
    { img: smartwatch, title: "10 beaches you must visit", avatar: avatar1 },
    { img: headphone, title: "10 beaches you must visit", avatar: avatar2 },
    { img: application, title: "10 beaches you must visit", avatar: avatar3 },
    { img: covid, title: "10 beaches you must visit", avatar: avatar4 },
    { img: iphone, title: "10 beaches you must visit", avatar: avatar5 },
    { img: laptop, title: "10 beaches you must visit", avatar: avatar6 },
  ];

  const topArticles = [
    {img: shoesW, title: "Pathway to the Mediterranean"},
    {img: chinaW, title: "My awesome safari in Lahbab Desert, United Arab Emirates"},
    {img: car, title: "10 amazing things to do in Cuba"},
    {img: camel, title: "The best street food in the world. Ranked!"},
    {img: sea, title: "Travel Packing guide for beginners"}
  ]


  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedArticles data={data} />
      <Beached />
      <TopArticles topArticles={topArticles} />
      <Inbox />
      <Footer />
    </>
  );
}

export default App;
