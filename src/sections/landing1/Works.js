import React, { useState, useEffect } from "react";
import { Button, Flex, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Container, Col } from "react-bootstrap";
import Masonry from "react-masonry-component";
import { Section, Box, ListNav } from "../../components/Core";
import WorkCard from "../../components/WorkCard";
import { designWorks1 } from "../../data";
import Card from "../../components/Card";
import Hudaldaa from "../../components/Card/hudaldaa";
import Companies from "../../components/Card/companies";
import Slider from "../../components/Slider";
import Slider2 from "../../components/Slider/company-slider";
import Slider3 from "../../components/Slider/news-slider";
import Partners from "../../components/Slider/PartnerSlider";
import SocialButton from "../../components/SocialButton/SocialButton";
import imgHeader from "../../assets/image/webp/head.svg";
import innerImg from "../../assets/image/png/huree2.png";
import LogoImg from "../../assets/image/jpg/logo.jpg";
import { Center } from "@chakra-ui/layout";
import { useMediaQuery } from "react-responsive";
import seamlessImg from "../../assets/image/jpg/PlasterSeamless.jpg";
import seamlessImg2 from "../../assets/image/jpg/SeamlessBricks.jpg";
import seamlessImg3 from "../../assets/image/jpg/SeamlessWall.jpg";

const company = [
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
];
const medee = [
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
  "http://amjiltacademy.com/wp-content/uploads/2021/12/tom-amjilt-logo.png",
];
const cards = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />];
const Works = ({ data }) => {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 901 });
    return isDesktop ? children : null;
  };

  const Portrait = ({ children }) => {
    const Portrait = useMediaQuery({ maxWidth: 900 });
    return Portrait ? children : null;
  };

  console.log("Data ", data);
  const [items, setItems] = useState([]);
  const [activeLink, setActiveLink] = useState("*");

  useEffect(() => {
    setItems(designWorks1);
  }, []);

  const filterBy = (cat) => {
    if (cat === "*") {
      setActiveLink("*");
      setItems(designWorks1);
    } else {
      const filteredItems = designWorks1.filter((item) => {
        return item.categories.indexOf(cat) !== -1;
      });
      setActiveLink(cat);
      setItems(filteredItems);
    }
  };

  const masonryOptions = {
    transitionDuration: 1000,
  };

  return (
    <>
      {/* DESKTOP */}
      <Desktop>
        <div style={{ backgroundColor: "#e6e6e6" }}>
          {/* <!-- Works Area --> */}
          <div
            style={{
              maxWidth: "1920px",
              justifyContent: "evenly",
            }}
          >
            <div className="w-full">
              <h1 className="product-title text-center">БҮТЭЭГДЭХҮҮН</h1>
              {/* <Flex> */}

              <Slider comps={data} length={5} />
              {/* </Flex> */}
            </div>
          </div>
          <div className="sda flex flex-col items-center justify-center my-20 relative">
            <img style={{ filter: " brightness(50%)" }} src={innerImg} />
            <div
              id="innerImgText"
              className="w-4/5 xl:h-64 lg:h-56 md:h-48 sm:h-36 h-24 flex flex-col"
            >
              <p className="text-white text-2xl font-medium border-b-2 text-center mb-4 pb-1">
                БИДНИЙ ТУХАЙ
              </p>
              <p
                style={{ lineHeight: "1.8", textShadow: "1px 1px #000" }}
                className="text-white text-xl mb-5"
              >
                <span className="mr-3">КОМПАНИЙН ДАВУУ ТАЛ:</span>
                Манай компани нь хэмжлийн бүх төрлөөр үйл ажиллагаа явуулдаг бөгөөд хэмжих боломжтой
                бүхий л зүйлийг хэмжих багаж хэрэгслийг худалдан борлуулах, суурилуулах, засварлах,
                зөвлөгөө өгөхөд анхааран ажиллаж байна.
              </p>
              <p
                style={{ lineHeight: "1.8", textShadow: "1px 1px #000" }}
                className="text-white text-xl"
              >
                <span className="mr-3">КОМПАНИЙН ТУХАЙ:</span>: Манай компани нь 2008 онд
                байгуулагдсан бөгөөд 2011 оноос Хэмжлийн нэгдмэл байдлыг хангах тухай хууль, Аж
                ахуйн үйл ажиллагааны тусгай зөвшөөрлийн тухай хуулийн дагуу Засгийн газрын
                тохируулагч агентлаг Стандартчилал, хэмжил зүйн газраас Монгол Улсад ашиглахыг
                зөвшөөрсөн загварын
              </p>
            </div>
          </div>
          <style jsx>{`
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #d4d4d4;
              border-radius: 3px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #696969;
              border-radius: 3px;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            #innerImgText {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              overflow-y: auto;
            }
            #scrollBarHide {
              overflow-y: auto;
            }

            #scrollBarHide::-webkit-scrollbar {
              opacity: 0.8;
            }
            #innerImgBG {
              background-size: contain;
              background-repeat: no-repeat;
              width: 100%;
              height: 0;
              padding-top: 50%; /* (img-height / img-width * container-width) */
              position: relative;
            }
            .our-p {
              color: white;
            }
            .our-h2 {
              color: white;
              font-size: 20px;
            }
            .sda {
              position: relative;
            }
            .product-title {
              color: #4a77fa;
              font-size: 18px;
              margin-left: 40px;
            }
            .news-title {
              color: #4a77fa;
              font-size: 18px;
              margin-left: 40px;
              text-align: center;
            }
            .medee-container {
              display: flex;
              align-items: center;

              justify-content: center;
            }
            .our-background {
              position: absolute;
              background-color: #0d6af2;
              opacity: 0.7;
              text-align: center;
              height: 180px;
              border-radius: 50px;
              width: 80%;
            }
          `}</style>
          <h1 className="news-title">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
          <Center>
            <div className="medee-container container ">
              <Slider3 comps={medee} length={3} />
            </div>
          </Center>

          <h1 className="news-title">ХУДАЛДАА ҮЙЛЧИЛГЭЭ</h1>
          <div className="container ">
            <div className="row  flex">
              <div className="col-sm-12 col-md-10">
                <Center>
                  <div className="hudaldaa flex">
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                  </div>
                </Center>
              </div>
              <div className="col-sm-12 col-md-2">
                <iframe
                  width="450"
                  height="300"
                  src="https://www.youtube.com/embed/gWX88YvGDaM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center bg-white pt-8">
            <h1 className="text-blue-500 text-lg border-b-2 border-blue-500 text-center">
              ХАМТЫН АЖИЛЛАГАА
            </h1>
            <Partners comps={company} />
          </div>

          <SocialButton />
        </div>
      </Desktop>

      {/* MOBILE */}

      <Portrait>
        <div style={{ backgroundColor: "#e6e6e6" }}>
          {/* <!-- Works Area --> */}
          <div
            style={{
              maxWidth: "1920px",
              justifyContent: "evenly",
            }}
          >
            <div className="container ">
              <h1 className="product-title">БҮТЭЭГДЭХҮҮН</h1>

              <Slider comps={data} length={5} />
            </div>
          </div>
          <img src={innerImg} />
          <div
            style={{ width: "99%" }}
            className="mx-auto flex flex-col justify-center p-3 relative mb-20"
          >
            <div id="TextDivGradient" className="absolute left-0 top-0 w-full h-full z-10"></div>
            <div className="z-20">
              <p className="text-2xl text-black font-medium border-b-2 text-center mb-4 pb-1">
                БИДНИЙ ТУХАЙ
              </p>
              <p style={{ lineHeight: "1.8" }} className="text-lg mb-5 font-medium text-black">
                <span className="mr-3 text-base font-bold">КОМПАНИЙН ДАВУУ ТАЛ:</span>
                Манай компани нь хэмжлийн бүх төрлөөр үйл ажиллагаа явуулдаг бөгөөд хэмжих боломжтой
                бүхий л зүйлийг хэмжих багаж хэрэгслийг худалдан борлуулах, суурилуулах, засварлах,
                зөвлөгөө өгөхөд анхааран ажиллаж байна.
              </p>
              <p style={{ lineHeight: "1.8" }} className="text-lg font-medium text-black ">
                <span className="mr-3 text-base font-bold">КОМПАНИЙН ТУХАЙ:</span>: Манай компани нь
                2008 онд байгуулагдсан бөгөөд 2011 оноос Хэмжлийн нэгдмэл байдлыг хангах тухай
                хууль, Аж ахуйн үйл ажиллагааны тусгай зөвшөөрлийн тухай хуулийн дагуу Засгийн
                газрын тохируулагч агентлаг Стандартчилал, хэмжил зүйн газраас Монгол Улсад
                ашиглахыг зөвшөөрсөн загварын
              </p>
            </div>
          </div>
          <style jsx>{`
            #TextDivGradient {
              background-color: #e6e6e6;
            }
            ::-webkit-scrollbar {
              width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
              background: #d4d4d4;
              border-radius: 3px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
              background: #696969;
              border-radius: 3px;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
              background: #555;
            }
            #innerImgText {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              overflow-y: auto;
            }
            #scrollBarHide {
              overflow-y: auto;
            }

            #scrollBarHide::-webkit-scrollbar {
              opacity: 0.8;
            }
            #innerImgBG {
              background-size: contain;
              background-repeat: no-repeat;
              width: 100%;
              height: 0;
              padding-top: 50%; /* (img-height / img-width * container-width) */
              position: relative;
            }
            .our-p {
              color: white;
            }
            .our-h2 {
              color: white;
              font-size: 20px;
            }
            .sda {
              position: relative;
            }
            .product-title {
              color: #4a77fa;
              font-size: 18px;
              margin-left: 40px;
            }
            .news-title {
              color: #4a77fa;
              font-size: 18px;

              text-align: center;
            }
            .medee-container {
              display: flex;
              align-items: center;

              justify-content: center;
            }
            .our-background {
              position: absolute;
              background-color: #0d6af2;
              opacity: 0.7;
              text-align: center;
              height: 180px;
              border-radius: 50px;
              width: 80%;
            }
          `}</style>
          <div className="flex justify-center">
            <h1 className="news-title border-b-2 border-blue-500 px-2 pb-1">МЭДЭЭ МЭДЭЭЛЭЛ</h1>
          </div>

          <Center>
            <div className="medee-container container ">
              {/* <News />
          <News />
          <News /> */}
              <Slider3 comps={medee} length={3} />
            </div>
          </Center>

          {/*end*/}
          <div className="flex justify-center">
            <h1 className="news-title border-b-2 border-blue-500 px-2 pb-1 my-3">
              ХУДАЛДАА ҮЙЛЧИЛГЭЭ
            </h1>
          </div>
          <div className="container mb-5">
            <div className="row  flex">
              <div className="col-sm-12 col-md-10 mb-4">
                <Center>
                  <div className="hudaldaa flex">
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                    <div className="col-sm-12 col-md-3">
                      <Hudaldaa />
                    </div>
                  </div>
                </Center>
              </div>
              <div className="col-sm-12 col-md-2">
                <iframe
                  className="w-full"
                  height="250"
                  src="https://www.youtube.com/embed/gWX88YvGDaM"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col items-center bg-white pt-8">
            <h1 className="text-blue-500 text-lg border-b-2 border-blue-500 text-center">
              ХАМТЫН АЖИЛЛАГАА
            </h1>
            <Partners comps={company} />
          </div>

          <SocialButton />
        </div>
      </Portrait>
    </>
  );
};
export default Works;
