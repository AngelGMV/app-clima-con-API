import { countries } from "../../data/country";

export default function Form() {
  return (
    <form>
        <div>
            <label htmlFor="city">Ciudad: </label>
            <input
                id="city"
                type="text"
                name="city"
                placeholder="Ingrese el nombre de la ciudad"
            />
        </div>
        <div>
            <label htmlFor="country">País: </label>
            <select>
            <option value="">
                ---Seleccione un país---
            </option>
            {countries.map( country =>(
                <option
                    key={country.code}
                    value={country.code}
                >
                    {country.name}
                </option>
            ))}
            </select>
        </div>
        <input
            type="submit"
            value='Consultar clima'
        />
        
    </form>
  )
}
