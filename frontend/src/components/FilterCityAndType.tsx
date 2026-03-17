import './FilterCityAndType.css'
type Params={
city:string,
rocketType:string
setCity:(city:string)=>void
setRocketType:(city:string)=>void
}
export default function FilterCityAndType(params:Params) {
    const {city,rocketType,setCity,setRocketType}=params


  return (
    <div>
      <input
        type="text"
        required
        name="city"
        id="city"
        value={city}
        placeholder="city"
        onChange={(e) => setCity(e.target.value)}
      />
      <select
        required
        name="rocketType"
        id="rocketType"
        value={rocketType}
        onChange={(e) =>
          setRocketType(
            e.target.value as "Shahab3" | "Fetah110" | "Radwan" | "Kheibar",
          )
        }
      >
        <option value="">coohse type</option>
        <option value="Shahab3">Shahab3</option>
        <option value="Fetah110">Fetah110</option>
        <option value="Radwan">Radwan</option>
        <option value="Kheibar">Kheibar</option>
      </select>
    </div>
  );
}
