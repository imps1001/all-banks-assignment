import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
// const data = [
//   "Paris",
//   "London",
//   "New York",
//   "Tokyo",
//   "Berlin",
//   "Buenos Aires",
//   "Cairo",
//   "Canberra",
//   "Rio de Janeiro",
//   "Dublin"
// ];
// const [searchQuery, setSearchQuery] = useState("");
// const dataFiltered = filterData(searchQuery, data);
// const filterData = (query, data) => {
//   if (!query) {
//     return data;
//   } else {
//     return data.filter((d) => d.toLowerCase().includes(query));
//   }
// };
const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

  export default SearchBar;