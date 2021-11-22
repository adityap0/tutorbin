import React, { Component } from "react";
import Header from "./components/Header";
import InputBar from "./components/InputBar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Insights from "./components/Insights";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      site: "",
      data: null,
      isLoading: false,
    };
  }
  handleInput = (e) => {
    this.setState({
      site: e.target.value,
    });
  };
  handleAnalyse = () => {
    this.getData();
    this.setState({
      isLoading: true,
    });
  };
  componentDidMount() {}
  getData = () => {
    const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?key=AIzaSyDlgT2p7EQDEsSBOvlYUXoT6EtqDrqc4gs&url=${this.state.site}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState(
          {
            data,
            isLoading: false,
          },
          () => {
            console.log(this.state.data, "Na tum jaano na hum..");
          }
        );
      });
  };
  render() {
    const data = this.state.data;
    const isLoading = this.state.isLoading;
    return (
      <>
        <Header />
        <InputBar
          handleInput={this.handleInput}
          handleAnalyse={this.handleAnalyse}
        />
        {isLoading ? <Loader /> : null}
        {data ? <Insights data={data} /> : null}
        <Footer />
      </>
    );
  }
}

export default App;
