import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );

        // show only first 20 photos (faster + cleaner UI)
        setPhotos(response.data.slice(0, 20));
      } catch (error) {
        console.log("Error fetching photos:", error);
      }
    }

    fetchPhotos();
  }, []);

  return <Showdata users={photos} />;
}

export default Data;