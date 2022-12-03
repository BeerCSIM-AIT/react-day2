function Head() {
  return (
    <>
      <h1 style={textStyle}>The Coffee Club</h1>
      <hr />
      <img src="./cappucino.jpg" alt="" />
    </>
  );
}

const textStyle = {
  textAlign: "center",
  fontSize: 50,
};

// "   " . --> {{  }}
// text-align --> textAlign
// background-color --> backgroundColor
// border-radius --> borderRadius

export default Head;
