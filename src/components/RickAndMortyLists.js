import React from "react";
import "./styles/css/RickAndMortyLists.css";
import { cleanup } from "@testing-library/react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
class RickAndMortyLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: []
      }
    };
  }
  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );
      const data = await response.json();
      this.setState({
        loading: false,
        data: {
          info: data.info,
          results: [].concat(this.state.data.results, data.results)
        },
        nextPage: this.state.nextPage + 1
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  componentWillUnmount() {
    cleanup();
  }
  render() {
    if (this.state.error) {
      return `Error: ${this.error.message}`;
    }
    return (
      <React.Fragment>
        <div className="RickAndMorty-list">
          <div className="RickAndMorty__container container-fluid">
            <div className="container-fluid">
              <ul className="list-unstyled row">
                {this.state.data.results.map(character => {
                  return (
                    <li className="col-12 col-md-4 col-lg-3" key={character.id}>
                      <div className="List-element">
                        <img
                          className="List-element__avatar"
                          src={character.image}
                          alt="Character"
                        />
                        <section className="List-element__info">
                          <h3>{character.name}</h3>
                          <p>{character.species}</p>
                          <p>{character.origin.name}</p>
                        </section>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Loader */}
            {this.state.loading && (
              <div className="loader">
                <Loader
                  type="Circles"
                  color="#00BFFF"
                  height={125}
                  width={125}
                  timeout={3000} //3 secs
                />
              </div>
            )}

            {/* More items button */}
            {!this.state.loading && (
              <div className="clearfix">
                <button
                  onClick={() => this.fetchCharacters()}
                  className="btn btn-primary float-right"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default RickAndMortyLists;
