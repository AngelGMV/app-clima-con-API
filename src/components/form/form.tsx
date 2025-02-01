import { ChangeEvent, FormEvent, useState } from "react";
import { countries } from "../../data/countries";
import { SearchType } from "../../types";
import styles from "./Form.module.css"

export default function Form() {

    const [search, setSearch] = useState<SearchType>({
        city: '',
        country: ''
    })

    const handleChange = (e : ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
    }
  return (
    <form 
        className={styles.form}
        onSubmit={handleSubmit}    
    >
        <div className={styles.field}>
            <label htmlFor="city">Ciudad: </label>
            <input
                id="city"
                type="text"
                name="city"
                placeholder="Ingrese el nombre de la ciudad"
                value={search.city}
                onChange={handleChange}
            />
        </div>
        <div className={styles.field}>
            <label htmlFor="country">País: </label>
            <select
                id="country"
                name="country"
                value={search.country}
                onChange={handleChange}
            >
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
