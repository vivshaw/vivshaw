module.exports = {
  settings: {
    react: {
      version: "detect",
    },
  },
  parser: "babel-eslint",
  plugins: ["prettier", "jsx-a11y", "babel", "react"],
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
    "no-console": "warn",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
};
