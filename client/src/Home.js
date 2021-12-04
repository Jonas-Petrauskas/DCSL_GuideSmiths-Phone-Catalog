import React from "react";
import { useState, useEffect } from "react";
import { getPhones, deletePhone } from "./Services/ApiServices";
import PhoneList from "./Components/PhoneList/PhoneList";
import { useHistory } from "react-router";
import "./Home.css";

function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedPhones = await getPhones();
        setData(fetchedPhones);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    await deletePhone(id);
    history.push("/");
  };

  return (
    <div className="home">
      <header className="header">
        <h2>Phones</h2>
      </header>
      {isLoading && <div>Loading...</div>}
      {data.map((dataObject) => (
        <div key={dataObject._id}>
          <PhoneList phoneData={dataObject} deleteHandler={deleteHandler} />
        </div>
      ))}
    </div>
  );
}

export default Home;
