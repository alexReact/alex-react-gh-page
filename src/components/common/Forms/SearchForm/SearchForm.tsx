import React from "react";

interface ISearchFormProps {
  [key: string]: any;
}

export const SearchForm: React.FC<ISearchFormProps> = () => {
  return (
    <form
      className="form-inline my-2 my-lg-0"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};