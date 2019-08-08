import React from "react";
import "./SearchBar.css";
import SearchBarLogoSVG from "../../../components/General/SearchBar/SearchBarLogoSVG/SearchBarLogoSVG";

const google = window.google;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ""
    };
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount = () => {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  };

  handlePlaceChanged = () => {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  };

  handleChange = event => {
    this.setState({ place: event.target.value });
    console.log(this.state.place);
  };

  render() {
    return (
      <div className="wrap">
        <div className="search">
          <input
            ref={this.autocompleteInput}
            type="text"
            className="searchTerm"
            placeholder="Enter your destination here"
            onChange={this.handleChange}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
            <SearchBarLogoSVG />
          </button>
        </div>
      </div>
    );
  }
}
export default SearchBar;
