import { IoSearchOutline } from "react-icons/io5";
import s from "./SearchBar.module.css";
import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSearchChanged: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchChanged }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
