 let CurrentTime = () => {
  let CurrentDateAndTime = new Date();

  return (
    <h4>
      This is the current time: {CurrentDateAndTime.toLocaleDateString()} --- 
      {CurrentDateAndTime.toTimeString()}
    </h4>
  );
}

export default CurrentTime;
