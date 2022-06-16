import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [img, setImg] = useState(require("./img/first.jpg"));
  const [quote, setQuote] = useState("");

  let quotes = [
    "Nada de desgosto, nem de desânimo; se acabas de fracassar, recomeça.\n Marco Aurélio Antonino",
    "Não se pode pisar duas vezes no mesmo rio.\n Heráclito de Éfeso",
    "O que não provoca minha morte faz com que eu fique mais forte.\n Friedrich Nietzsche",
    "A força não provém da capacidade física. Provém de uma vontade indomável.\n Mahatma Gandhi",
    "O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz.\n Aristóteles",
  ];

  function breakCookie() {
    setImg("");

    let random = Math.floor(Math.random() * quotes.length);
    switch (random) {
      case 0:
        setImg(require("./img/marcoAurelio.jpg"));
        break;
      case 1:
        setImg(require("./img/heraclito.jpg"));
        break;
      case 2:
        setImg(require("./img/nietzsche.jpg"));
        break;
      case 3:
        setImg(require("./img/gandhi.jpg"));
        break;
      case 4:
        setImg(require("./img/aristoteles.jpeg"));
        break;
      default:
        alert("ALGO DEU ERRADO");
    }
    setQuote('"' + quotes[random] + '"');
  }

  function restartCookie() {
    setImg(require("./img/first.jpg"));
    setQuote("");
  }

  return (
    <View style={style.container}>
      <Image source={img} style={style.img} />

      <Text style={style.quote}>{quote}</Text>

      <TouchableOpacity style={style.button} onPress={breakCookie}>
        <View style={style.btnArea}>
          <Text style={style.btnText}>Press to change</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[style.button, { borderColor: "#121212" }]}
        onPress={restartCookie}
      >
        <View style={style.btnArea}>
          <Text style={[style.btnText, { color: "#121212" }]}>
            Restart quotes
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 230,
    width: 230,
  },

  quote: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },

  button: {
    width: 230,
    height: 50,
    borderColor: "#dd7b22",
    borderWidth: 2,
    borderRadius: 25,
    marginBottom: 15,
  },

  btnArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});
