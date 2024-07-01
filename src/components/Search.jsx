import { useState } from "react";

function Search({ name }) {
  const [query, setQuery] = useState("")
  return (
    <div>
      <input type="text" />
    </div>
  );
}

export default Search;
