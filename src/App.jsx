import Random from "./components/Random";
import Randomgifs from "./components/Randomgifs";
import Tag from "./components/Tag";


export default function App() {
  return (
  <div className="w-full  background">
    <div className="w-11/12 flex flex-col mx-auto">
            <Randomgifs/>
           <div className="flex flex-col gap-y-5 items-center mt-[30px] mb-[20px]">
            <Random/>
            <Tag/>
          </div> 
    </div>
  </div>
  );
}
