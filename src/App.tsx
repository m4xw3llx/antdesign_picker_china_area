import * as React from "react";
import AntPickerDataSource from "./AntPickerDataSource";
import "./App.css";

import logo from "./logo.svg";
import pcaa from "./util/pcaa";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={this.handleButtonClick}>New JS File</button>
      </div>
    );
  }

  private handleButtonClick = () => {
    const reuslt = this.convertChildren("86");
    console.log(reuslt);
  };

  private convertChildren = (key: string): AntPickerDataSource[] => {
    const currentData: object = pcaa[key];
    if (!currentData) {
      return [];
    }
    console.log(key);
    const result = Object.keys(currentData).map(objectKey => {
      const objectName = currentData[objectKey];
      return new AntPickerDataSource(
        objectKey,
        { [objectKey]: objectName },
        this.convertChildren(objectKey)
      );
    });
    return result;
  };
}

export default App;
