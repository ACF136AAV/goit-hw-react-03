import PropTypes from "prop-types";
import css from '../SearchBox/SearchBox.module.css'

const SearchBox = ({ searchQuery, onSearchChange }) => {
  return (
    <input
      className={css["search-input"]}
      type="text"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search contacts..."
    />
  );
};

SearchBox.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
