import CustomBtn from "./button";

const ResetBtn = ({ setCount }) => {
  return (
    <>
      <div>
        <CustomBtn text="Reset" setCount={setCount} color="bg-blue-500" />
      </div>
    </>
  );
};

export default ResetBtn;
