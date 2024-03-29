import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const SummonerInput = () => {
  const navigate = useNavigate();

  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearchSummoner = async (event) => {
    event.preventDefault();
    navigate(`/summoner/${searchText}`);
  };
  return (
    <div>
      <label htmlFor="summonerName">Summoner Summoner</label>
      <form onSubmit={handleSearchSummoner}>
        <input
          type="summonerName"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
