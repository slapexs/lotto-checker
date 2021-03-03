import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { FaSearch } from "react-icons/fa";

// lib
import axios from "axios";

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      lottonumber: "",
      price1: [],
      nearPrice1: [],
      price2: [],
      price3: [],
      price4: [],
      price5: [],
      front3: [],
      back3: [],
      back2: [],
      status: null,
    };
  }

  componentDidMount() {
    const urlAPI = "https://lotto.api.rayriffy.com/latest";
    axios.get(urlAPI).then((res) => {
      this.setState({
        price1: res.data.response.prizes[0].number,
        nearPrice1: res.data.response.prizes[1].number,
        price2: res.data.response.prizes[2].number,
        price3: res.data.response.prizes[3].number,
        price4: res.data.response.prizes[4].number,
        price5: res.data.response.prizes[5].number,
        front3: res.data.response.runningNumbers[0].number,
        back3: res.data.response.runningNumbers[1].number,
        back2: res.data.response.runningNumbers[2].number,
      });
    });
  }

  render() {
    const changeLottoNumber = (e) => {
      this.setState({ lottonumber: e.target.value });
    };

    const findLotto = (e) => {
      e.preventDefault();
      const lotto = this.state.lottonumber;

      const result1 = this.state.price1.find((number) => {
        return number === lotto;
      });

      if (result1 !== undefined) {
        Swal.fire({
          position: "center",
          title: `ยินดีด้วย ${result1}`,
          icon: "success",
          html:
            '<b style="color:green;">คุณถูกรางวัลที่ 1 มูลค่า 6,000,000 บาท</b>',
          showConfirmButton: false,
        }).then((res) => {
          this.setState({ lottonumber: "" });
        });
      } else {
        const resultNearPrice1 = this.state.nearPrice1.find((number) => {
          return number === lotto;
        });

        if (resultNearPrice1 !== undefined) {
          Swal.fire({
            position: "center",
            title: `ยินดีด้วย ${resultNearPrice1}`,
            icon: "success",
            html:
              '<b style="color:green;">รางวัลข้างเคียงรางวัลที่ 1 รางวัลละ 100,000 บาท</b>',
            showConfirmButton: false,
          }).then((res) => {
            this.setState({ lottonumber: "" });
          });
        } else {
          const result2 = this.state.price2.find((number) => {
            return number === lotto;
          });

          if (result2 !== undefined) {
            Swal.fire({
              position: "center",
              title: `ยินดีด้วย ${result2}`,
              icon: "success",
              html:
                '<b style="color:green;">คุณถูกรางวัลที่ 2 มูลค่า 200,000 บาท</b>',
              showConfirmButton: false,
            }).then((res) => {
              this.setState({ lottonumber: "" });
            });
          } else {
            const result3 = this.state.price3.find((number) => {
              return number === lotto;
            });

            if (result3 !== undefined) {
              Swal.fire({
                position: "center",
                title: `ยินดีด้วย ${result3}`,
                icon: "success",
                html:
                  '<b style="color:green;">คุณถูกรางวัลที่ 3 มูลค่า 80,000 บาท</b>',
                showConfirmButton: false,
              }).then((res) => {
                this.setState({ lottonumber: "" });
              });
            } else {
              const result4 = this.state.price4.find((number) => {
                return number === lotto;
              });

              if (result4 !== undefined) {
                Swal.fire({
                  position: "center",
                  title: `ยินดีด้วย ${result4}`,
                  icon: "success",
                  html:
                    '<b style="color:green;">คุณถูกรางวัลที่ 4 มูลค่า 40,000 บาท</b>',
                  showConfirmButton: false,
                }).then((res) => {
                  this.setState({ lottonumber: "" });
                });
              } else {
                const result5 = this.state.price5.find((number) => {
                  return number === lotto;
                });

                if (result5 !== undefined) {
                  Swal.fire({
                    position: "center",
                    title: `ยินดีด้วย ${result5}`,
                    icon: "success",
                    html:
                      '<b style="color:green;">คุณถูกรางวัลที่ 5 มูลค่า 20,000 บาท</b>',
                    showConfirmButton: false,
                  }).then((res) => {
                    this.setState({ lottonumber: "" });
                  });
                } else {
                  // หารางวัลเลขหน้า3ตัว เลขท้าย3ตัว เลขท้าย2ตัว
                  const resultfront3 = this.state.front3.find((number) => {
                    return number === lotto.slice(0, 3);
                  });

                  if (resultfront3 !== undefined) {
                    Swal.fire({
                      position: "center",
                      title: `ยินดีด้วย ${lotto}`,
                      icon: "success",
                      html:
                        '<b style="color:green;">คุณถูกรางวัลเลขหน้า 3 ตัว มูลค่า 4,000 บาท</b>',
                      showConfirmButton: false,
                    }).then((res) => {
                      this.setState({ lottonumber: "" });
                    });
                  } else {
                    const resultback3 = this.state.back3.find((number) => {
                      return number === lotto.slice(3, 6);
                    });

                    if (resultback3 !== undefined) {
                      Swal.fire({
                        position: "center",
                        title: `ยินดีด้วย ${lotto}`,
                        icon: "success",
                        html:
                          '<b style="color:green;">คุณถูกรางวัลเลขท้าย 3 ตัว มูลค่า 4,000 บาท</b>',
                        showConfirmButton: false,
                      }).then((res) => {
                        this.setState({ lottonumber: "" });
                      });
                    } else {
                      const resultback2 = this.state.back2.find((number) => {
                        return number === lotto.slice(4, 6);
                      });

                      if (resultback2 !== undefined) {
                        Swal.fire({
                          position: "center",
                          title: `ยินดีด้วย ${lotto}`,
                          icon: "success",
                          html:
                            '<b style="color:green;">คุณถูกรางวัลเลขท้าย 2 ตัว มูลค่า 2,000 บาท</b>',
                          showConfirmButton: false,
                        }).then((res) => {
                          this.setState({ lottonumber: "" });
                        });
                      } else {
                        Swal.fire({
                          position: "center",
                          title: `เสียใจด้วย`,
                          icon: "error",
                          html:
                            '<b style="color:red;">คุณไม่ถูกรางวัล งวดหน้าเอาใหม่นะ!</b>',
                          showConfirmButton: false,
                        }).then((res) => {
                          this.setState({ lottonumber: "" });
                        });
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };
    return (
      <>
        <div className="mt-4">
          <Form onSubmit={findLotto}>
            <Form.Row className="align-items-center">
              <Col>
                <Form.Label htmlFor="inlineFormInput" srOnly>
                  Name
                </Form.Label>
                <Form.Control
                  type="tel"
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="กรอกเลขสลาก"
                  onChange={changeLottoNumber}
                  value={this.state.lottonumber}
                  maxLength="6"
                  minLength="6"
                  autoComplete="off"
                  required
                />
              </Col>
              <Col md="auto" xs="auto">
                <Button type="submit" className="mb-2">
                  <FaSearch /> ตรวจหวย
                </Button>
              </Col>
            </Form.Row>
          </Form>
          <hr />
        </div>
      </>
    );
  }
}
