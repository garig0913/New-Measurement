const Index = (props) => {
  return (
    <>
      <div hidden={props.hiddenOrNot}>
        <div className="fixed left-0 top-0 w-screen h-screen bg-black opacity-75 z-10"></div>
        <img className="w-96 h-96 fixed left-0 right-0 top-10 mx-auto z-20" src={props.image} />
      </div>
    </>
  );
};

export default Index;
