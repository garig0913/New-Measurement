import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
// import "swiper/css/bundle";
// import "./styles.css";
import Zurag from "../assets/image/png/gerchilgee.jpg";
import PageWrapper from "../components/PageWrapper";
// import Slider2 from "../components/Slider/CardSlider2";
import Card from "../components/Card";
import Slider3 from "../components/Slider/news-slider";
import Hero from "../sections/landing1/Hero";

const company = [
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
  "https://images.unsplash.com/photo-1616362716674-0529f5dbf847?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
];
const IndexPage = () => {
  return (
    <>
      <PageWrapper>
        <img className="zurag" src={Zurag} />
        <h1 className="news-title ">ТУСГАЙ ЗӨВШӨӨРӨЛ,ГЭРЧИЛГЭЭ</h1>

        <div className="w-full">
          <Slider3 comps={company} length={5} />
        </div>
        {/* </div> */}
      </PageWrapper>
      <style jsx>{`
        .swiper {
          width: 100%;
          height: 100%;
        }

        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;

          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        hr.new5 {
          border: 4px solid blue;
          border-radius: 2px;
        }
        .zurag {
          width: 100%;
        }
        .news-title {
          color: black;
          font-size: 20px;
          margin-left: 40px;
          text-align: center;
        }
        .news-p {
          color: #585858;
          font-family: Roboto;
          font-size: 18px;
        }
      `}</style>
    </>
  );
};
export default IndexPage;
