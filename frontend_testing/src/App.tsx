import "./style/index.scss";

const App = () => {
  return (
    <div className=" fadeIn padding-px-0 margin-px-0 width-percent-100 height-percent-100">
      <div className="grid-template-row padding-percent-0">
        <div className="  bg-white flex-row justify-space-between margin-percent-0 padding-percent-0 width-percent-100 flex-row justify-center align-items-center txt-center height-100-px">
          <h1 className="txt-black padding-left-px-5 h1-adjust margin-left-px-10 margin-right-px-10 word-break">Navbar</h1>
          <h1 className="txt-black padding-right-px-10 h1-adjust word-break">
            Joseph Whiteaker
          </h1>
        </div>
        <div className=" flex-col pad-pixel-0 align-center justify-center txt-center height-100-percent">
          <h1 className=" text-center txt-orange word-break"> Hello </h1>
          <div className=" button  align-self-center txt-center align-center bg-pink margin-pixel-2">
            <h1 className=" button-text fontpx40 txt-green">click me</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
