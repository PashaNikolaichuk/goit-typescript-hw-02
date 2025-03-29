import { IoSearchOutline } from "react-icons/io5";
import s from "./SearchBar.module.css";
import { useState } from "react";
import toast from "react-hot-toast";

const SearchBar = ({ onSearchChanged }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchChanged(value);
    if (value === "") {
      toast.error("Please, you must enter text to search for an image");

      return;
    }
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit}>
        <div className={s.wrapper}>
          <button type="submit" className={s.buttonInput}>
            <IoSearchOutline className={s.icon} />
          </button>
          <input
            onChange={(event) => setValue(event.target.value)}
            value={value}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
