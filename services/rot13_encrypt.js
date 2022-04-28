module.exports = {
  rot13: function (message) {
    const alpha =
      "abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM";
    return message.replace(
      /[a-z]/gi,
      (letter) => alpha[alpha.indexOf(letter) + 13]
    );
  },
};
