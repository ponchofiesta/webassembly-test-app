# webassembly-test-app

This is a React app to compare Javascript, Rust-WASM and Go-WASM. It depends on [webassembly-tests-rust](https://github.com/ponchofiesta/webassembly-tests-rust) and webassembly-tests-go. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

With these things this project was created and tested:

- Node 10.15 with NPM 6.9 (using NVM)
  ```bash
  # Install NVM and follow instructions
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
  # Install Node and NPM
  nvm install 10
  nvm use 10
  npm install npm@6.9.0 -g
  ```
- webassembly-tests-rust
  ```bash
  
  ```

## Build

```bash
npm run build
```

## Run

```bash
npm run start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.





