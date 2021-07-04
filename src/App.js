import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Row, Col, Spinner } from "react-bootstrap";

// lib
import axios from "axios";

// Component
import Search from "./Search";
import Footer from "./Footer";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstPrice: [],
    };
  }
  componentDidMount() {
    
    // const urlAPI = "https://lotto.api.rayriffy.com/latest";
    const urlAPI = "https://lotto.api.rayriffy.com/lotto/01072564";
    axios.get(urlAPI).then((res) => {
      this.setState({
        firstPrice: res.data.response,
        // firstPrice: res.data.response,
      });
    });
  }

  render() {
    if (!this.state.firstPrice.prizes) {
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }

    return (
      <>
        <div className="container">
          <div className="mt-5">
            <h4 className="text-muted ">
              ตรวจหวยงวดวันที่:{" "}
              <span className="text-warning">{this.state.firstPrice.date}</span>
            </h4>
            <Search />

            <div className="card bg-price11 shadow">
              <div className="card-body text-center">
                {this.state.firstPrice.prizes[0].name} / รางวัลละ{" "}
                {`฿${Intl.NumberFormat().format(
                  this.state.firstPrice.prizes[0].reward,
                )}`}
                <h1 className="display-2">
                  {this.state.firstPrice.prizes[0].number[0]}
                </h1>
              </div>
            </div>

            <Row>
              <Col md="4" className="my-3">
                <div className="card text-center ">
                  <div className="card-header">
                    {this.state.firstPrice.prizes[0].name} <br />
                    {this.state.firstPrice.runningNumbers[0].amount}
                    รางวัลๆละ{" "}
                    {`฿${Intl.NumberFormat().format(
                      this.state.firstPrice.runningNumbers[0].reward,
                    )}`}
                  </div>
                  <div className="card-body text-center">
                    <h1>
                      {this.state.firstPrice.prizes[0].number[0] +
                        "  ,  " +
                        this.state.firstPrice.runningNumbers[0].number[1]}
                    </h1>
                    <h1>{}</h1>
                  </div>
                </div>
              </Col>

              <Col md="4" className="my-3">
                <div className="card text-center ">
                  <div className="card-header">
                    {this.state.firstPrice.runningNumbers[1].name} <br />
                    {this.state.firstPrice.runningNumbers[1].amount}
                    รางวัลๆละ{" "}
                    {`฿${Intl.NumberFormat().format(
                      this.state.firstPrice.runningNumbers[1].reward,
                    )}`}
                  </div>
                  <div className="card-body text-center">
                    <h1>
                      {this.state.firstPrice.runningNumbers[1].number[0] +
                        "  ,  " +
                        this.state.firstPrice.runningNumbers[1].number[1]}
                    </h1>
                    <h1>{}</h1>
                  </div>
                </div>
              </Col>

              <Col md="4" className="my-3">
                <div className="card text-center ">
                  <div className="card-header">
                    {this.state.firstPrice.runningNumbers[2].name} <br />
                    {this.state.firstPrice.runningNumbers[2].amount}
                    รางวัลๆละ{" "}
                    {`฿${Intl.NumberFormat().format(
                      this.state.firstPrice.runningNumbers[2].reward,
                    )}`}
                  </div>
                  <div className="card-body text-center">
                    <h1>{this.state.firstPrice.runningNumbers[2].number[0]}</h1>
                  </div>
                </div>
              </Col>
            </Row>

            {/* รางวัลใกล้เคียงรางวัลที่ 1 */}
            <Row>
              <Col md="12">
                <div className="card text-center my-2">
                  <div className="card-body text-center">
                    {this.state.firstPrice.prizes[1].name} /{" "}
                    {this.state.firstPrice.prizes[1].amount}
                    รางวัลๆละ{" "}
                    {`฿${Intl.NumberFormat().format(
                      this.state.firstPrice.prizes[1].reward,
                    )}`}
                    <h1>
                      {this.state.firstPrice.prizes[1].number[0] +
                        "  ,  " +
                        this.state.firstPrice.prizes[1].number[1]}
                    </h1>
                    <h1>{}</h1>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
