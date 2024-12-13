import React, { useEffect, useState } from "react";
import styles from './Select.module.css';
import axios from 'axios';
import { config } from "../App";

const DropDown = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get(`${config.endpoint}/countries`);
                setCountries(response.data);
                console.log(response.data);
                
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        fetchCountries();
    }, []);

    useEffect(() => {
        const fetchStates = async () => {
            try {
                const response = await axios.get(`${config.endpoint}/country=${selectedCountry}/states`);
                setStates(response.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        fetchStates();
    }, [selectedCountry])

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get(`${config.endpoint}/country=${selectedCountry}/state=${selectedState}/cities`);
                setCities(response.data);
            } catch (error) {
                console.error("Error: ", error);
            }
        }

        fetchCities();
    }, [selectedState]);

    const handleCountrySelection = (e) => {
        setSelectedCountry(e.target.value);
        setSelectedState('');
        setSelectedCity('');
    }

    const handleStateSelection = (e) => {
        setSelectedState(e.target.value);
        setSelectedCity('');
    }

    const handleCitySelection = (e) => {
        setSelectedCity(e.target.value);
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Select Location</h1>
            <div className={styles.dropdownContainer}>
                <select style={{ width: '25%' }} value={selectedCountry} onChange={handleCountrySelection}>
                    <option value="" disabled>Select Country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>

                <select style={{ width: '15%' }} disabled={!selectedCountry} value={selectedState} onChange={handleStateSelection}>
                    <option value="" disabled>Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>
                            {state}
                        </option>
                    ))}
                </select>

                <select style={{ width: '15%' }} disabled={!selectedState} value={selectedCity} onChange={handleCitySelection}>
                    <option value="" disabled>Select City</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            {(selectedCountry && selectedState && selectedCity) && (
                <h3>You selected {selectedCity}, {selectedState}, {selectedCountry}</h3>
            )}
        </div>
    );
};

export default DropDown;
