
const path = require('path');

// module.exports = {
//   entry: '/client/src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, '/client/dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ['@babel/preset-env', '@babel/preset-react']
//           }
//         }
//       }
//     ]
//   }
// };

module.exports = {
  entry: {
    main: __dirname + '/client/src/index.jsx',
    vendor: ['styled-components'],
  },
  mode: 'production',
  // switched mode to production
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
  optimization: {
    splitChunks: {
      minChunks: Infinity,
      name: true
    },
    runtimeChunk: {
      name: 'vendor'
    }
  }
};

