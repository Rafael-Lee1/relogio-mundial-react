const path = require('path');

module.exports = {
  entry: './src/App.jsx', // Caminho para o arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'build'), // Diretório de saída
    filename: 'bundle.js', // Nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
