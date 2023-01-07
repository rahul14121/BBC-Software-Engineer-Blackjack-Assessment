module.exports = {
    presets: [
      '@babel/preset-react',
      [ 
        '@babel/preset-env',
        {
          targets: {
            esmodules: false,
            node: 'current',
            
          },
          
          
        },
      ],
    ],
    plugins: [["@babel/plugin-transform-modules-commonjs"]]
  };