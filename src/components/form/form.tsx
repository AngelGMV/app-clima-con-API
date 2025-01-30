import { countries } from "../../data/country";
import styles from "./Form.module.css"

export default function Form() {
  return (
    <form className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">Ciudad: </label>
            <input
                id="city"
                type="text"
                name="city"
                placeholder="Ingrese el nombre de la ciudad"
            />
        </div>
        <div className={styles.field}>
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
            className={styles.submit}
            type="submit"
            value='Consultar clima'
        />
        
    </form>
  )
}
