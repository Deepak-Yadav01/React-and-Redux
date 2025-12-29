function Random() {
  let randNum = Math.floor(Math.random() * 10) + 1;

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let rangeNum = getRandom(50, 100);

  return <h2 style={{ backgroundColor: "#103281ff", color: "white", padding: "10px" }}>
      Random Number is: {randNum} <br />
      Range 50 to 100 is: {rangeNum}
    </h2>
}

export default Random;
