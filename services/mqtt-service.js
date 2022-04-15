function publishWithMqtt() {
  //mosquitto_sub -h localhost -t "test/topic" isto é um exemplo em linux
  //publish "user_id/device_id"
  //Retiras que tens uma lista com o nome do user_id/device_id
  // que serve para comunicação entre aquele device daquele user
  // É necessario fazer um puiblish com o nome do user_id/device_id para o pedido ir parar ao device que está a escutar aquele lista especifica
}
