import s from "./App.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

import SearchBar from "../components/SearchBar/SearchBar";
import ImageGellerry from "../components/ImageGallery/ImageGallery";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadMore from "../components/LoadMore/LoadMore";
import ImageModal from "../components/ImageModal/ImageModal";

import { Images } from "./App.types";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "VVseatpSLPosseFG869BSPFLd2UuQOjwEssniwICiuA";

interface ApiResponse {
  results: Images[];
}

const App = () => {
  //містить дані про зображення||функція для оновлення значення стану||Це означає, що на початку в стані немає зображень.
  const [images, setImages] = useState<Images[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Images | null>(null);

  useEffect(() => {
    const getImageData = async () => {
      if (!query) return; // Запит виконується лише якщо є пошуковий запит
      try {
        setIsLoading(true);
        setIsError(false);
        const { data } = await axios.get<ApiResponse>("/search/photos", {
          params: {
            query,
            page,
            per_page: 12,
          },
          headers: {
            Authorization: `Client-ID ${ACCESS_KEY}`,
          },
        });
        console.log("Отримали відповідь:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        // Додавання нових зображень до існуючих                          // 2. Записуємо дані в стан images
        setImages((prev) => [...prev, ...data.results]);
        console.log(data.results);
      } catch (error) {
        setIsError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    //викликаємо цю функцію
    getImageData();
    //Щоб запит виконувався кожного разу, коли змінюється page
  }, [page, query]);

  /////////////LoadMore/////////////
  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  /////////////SearchBar/////////////
  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
    //щоб старий результат зник а тільки новий був
    setImages([]);
    // Починати з першої сторінки
    setPage(1);
  };

  const handleImageClick = (image: Images) => {
    setSelectedImage(image); // Встановлюємо вибране зображення
  };

  const closeModal = () => {
    setSelectedImage(null); // Закриваємо модальне вікно
  };

  return (
    <div className={s.container}>
      <SearchBar onSearchChanged={handleChangeQuery} />
      {images.length > 0 && (
        <ImageGellerry images={images} onImageClick={handleImageClick} />
      )}
      {/* якщо true відоображає, false зникає */}
      {isLoading && <Loader />}
      {/* якщо true відоображає, false зникає */}
      {isError && <ErrorMessage />}
      {/* Якщо масив зображень не порожній (images.length > 0) і завантаження зараз не виконується (!isLoading), тоді відображається компонент <LoadMore />. */}
      {images.length > 0 && !isLoading && (
        <LoadMore handleChangePage={handleChangePage} />
      )}
      <ImageModal
        isOpen={!!selectedImage}
        isClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default App;
