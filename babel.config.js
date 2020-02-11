module.exports = {
    presets: [
        "@babel/preset-env",
        "@babel/preset-react"
    ],
    plugins: [
        // este plugin faz com que o REACT entenda o uso de STATE em componentes funcionais
        '@babel/plugin-proposal-class-properties'
    ]
}