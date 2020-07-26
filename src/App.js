import React, { Component } from "react";
import "./App.css";

class App extends Component {
    state = {
        total: 0,
        arr: [
            { num: 0, check: true },
            { num: 0, check: true },
            { num: 0, check: true },
        ],
    };

    handleChange = (pos, numArr, e) => {
        if (pos === "check") {
            const tampung = this.state.arr;
            tampung[numArr].check = !tampung[numArr].check;
            this.setState({ arr: tampung });
        }
        if (pos === "num") {
            const tampung = this.state.arr;
            tampung[numArr].num = Number(e.target.value);
            this.setState({ arr: tampung });
        }
    };

    typeOperation = (operation) => {
        const filteredArray = this.state.arr.filter((e) => e.check === true);
        let result = null;
        if (filteredArray.length > 1) {
            filteredArray.forEach((item) => {
                if (result === null) {
                    result = item.num;
                } else {
                    switch (operation) {
                        case "+":
                            result = result + item.num;
                            break;
                        case "-":
                            result = result - item.num;
                            break;
                        case "*":
                            result = result * item.num;
                            break;
                        case "/":
                            result = result / item.num;
                            break;
                        default:
                            result = "Hasil Tidak Ada";
                    }
                }
            });
        } else {
            result = "Angka yang aktif kurang dari 2";
        }
        this.setState({ total: result });
    };

    render() {
        return (
            <div>
                <div className="container mt-3">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="checkbox"
                                    checked={this.state.arr[0].check}
                                    onChange={(e) =>
                                        this.handleChange("check", 0, e)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            disabled={!this.state.arr[0].check}
                            value={this.state.arr[0].num}
                            onChange={(e) => this.handleChange("num", 0, e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="checkbox"
                                    checked={this.state.arr[1].check}
                                    onChange={(e) =>
                                        this.handleChange("check", 1, e)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            disabled={!this.state.arr[1].check}
                            value={this.state.arr[1].num}
                            onChange={(e) => this.handleChange("num", 1, e)}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <input
                                    type="checkbox"
                                    checked={this.state.arr[2].check}
                                    onChange={(e) =>
                                        this.handleChange("check", 2, e)
                                    }
                                />
                            </div>
                        </div>
                        <input
                            type="number"
                            className="form-control"
                            disabled={!this.state.arr[2].check}
                            value={this.state.arr[2].num}
                            onChange={(e) => this.handleChange("num", 2, e)}
                        />
                    </div>
                    <div className="d-flex justify-content-around">
                        <button
                            type="button"
                            className="btn btn-secondary px-5"
                            onClick={() => this.typeOperation("+")}
                        >
                            <h1>+</h1>
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary px-5"
                            onClick={() => this.typeOperation("-")}
                        >
                            <h1>-</h1>
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary px-5"
                            onClick={() => this.typeOperation("*")}
                        >
                            <h1>x</h1>
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary px-5"
                            onClick={() => this.typeOperation("/")}
                        >
                            <h1>:</h1>
                        </button>
                    </div>
                    <div className="borderBot"></div>
                    <h2>{this.state.total}</h2>
                </div>
            </div>
        );
    }
}

export default App;
