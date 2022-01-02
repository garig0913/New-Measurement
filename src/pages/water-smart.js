import BigImg from "../assets/image/jpg/WaterTooluur.jpg";

const Index = () => {
  return (
    <>
      <div className="w-full">
        <img id="smartImgShadow" src={BigImg} />
      </div>
      <style jsx>
        {`
          #smartImgShadow {
            -webkit-box-shadow: 0 6px 7px -6px black;
            -moz-box-shadow: 0 6px 7px -6px black;
            box-shadow: 0 6px 7px -6px black;
          }
        `}
      </style>
    </>
  );
};

export default Index;
